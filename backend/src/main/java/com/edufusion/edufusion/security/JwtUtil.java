package com.edufusion.edufusion.security;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;

import java.security.SecureRandom;
import java.util.Base64;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import java.util.function.Function;

@Component
public class JwtUtil {

//    private String SECRET_KEY = "secret";

    private String SECRET_KEY;


    public JwtUtil() {
        byte[] randomBytes = new byte[64];
        new SecureRandom().nextBytes(randomBytes);
        this.SECRET_KEY = Base64.getUrlEncoder().withoutPadding().encodeToString(randomBytes);
    }
    public String extractUsername(String token) {
        return extractClaim(token, Claims::getSubject);
    }

    public Date extractExpiration(String token) {
        return extractClaim(token, Claims::getExpiration);
    }

    public <T> T extractClaim(String token, Function<Claims, T> claimsResolver) {
        final Claims claims = extractAllClaims(token);
        return claimsResolver.apply(claims);
    }

    private Claims extractAllClaims(String token) {
        return Jwts.parser().setSigningKey(SECRET_KEY).parseClaimsJws(token).getBody();
    }

    public Long extractUserId(String token) {
        final Claims claims = extractAllClaims(token);
        return claims.get("userId", Long.class); // Upewnij się, że "userId" jest zapisane w tokenie
    }

    private Boolean isTokenExpired(String token) {
        return extractExpiration(token).before(new Date());
    }

//    public String generateToken(UserDetails userDetails) {
//        return createToken(userDetails.getUsername());
//    }

    private String createToken(Map<String, Object> claims, String subject) {
        return Jwts.builder()
                .setClaims(claims)
                .setSubject(subject)
                .setIssuedAt(new Date(System.currentTimeMillis()))
                .setExpiration(new Date(System.currentTimeMillis() + 1000 * 60 * 60 * 10)) // 10 godzin ważności tokenu
                .signWith(SignatureAlgorithm.HS256, SECRET_KEY)
                .compact();
    }

    public String generateToken(UserDetails userDetails) {
        Map<String, Object> claims = new HashMap<>();
        if (userDetails instanceof UserPrincipal) {
            UserPrincipal userPrincipal = (UserPrincipal) userDetails;
            claims.put("email", userPrincipal.getUsername());
            claims.put("firstName", userPrincipal.getFirstName()); // Dodanie imienia
            claims.put("userId", userPrincipal.getUserId());
            claims.put("role", userPrincipal.getRole());
        }

        return createToken(claims, userDetails.getUsername());
    }


//    public String generateToken(UserDetails userDetails) {
//        Map<String, Object> claims = new HashMap<>();
//        claims.put("email", userDetails.getUsername());  // Przechowuj tylko email
//
//        return createToken(claims, userDetails.getUsername());
//    }



//    public String generateToken(UserDetails userDetails) {
//        Map<String, Object> claims = new HashMap<>();
//        UserPrincipal userPrincipal = (UserPrincipal) userDetails;
//
//        claims.put("email", userPrincipal.getUsername());
//        claims.put("firstName", userPrincipal.getFirstName());
//        claims.put("lastName", userPrincipal.getLastName());
//        claims.put("phoneNumber", userPrincipal.getPhoneNumber());
//        // ... dodaj inne pola, które chcesz uwzględnić
//
//        return createToken(claims, userPrincipal.getUsername());
//    }


    //    private String createToken(String subject) {
//        return Jwts.builder().setSubject(subject)
//                .setIssuedAt(new Date(System.currentTimeMillis()))
//                .setExpiration(new Date(System.currentTimeMillis() + 1000 * 60 * 60 * 10))
//                .signWith(SignatureAlgorithm.HS256, SECRET_KEY).compact();
//    }



    public Boolean validateToken(String token, UserDetails userDetails) {
        final String username = extractUsername(token);
        return (!isTokenExpired(token) && username.equals(userDetails.getUsername()));
    }
}

