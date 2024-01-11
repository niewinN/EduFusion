package com.edufusion.edufusion.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityCustomizer;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.web.cors.CorsConfiguration;

import java.util.List;

@Configuration
@EnableWebSecurity
public class WebSecurityConfig {

    private final AuthenticationConfiguration authenticationConfiguration;

    public WebSecurityConfig(AuthenticationConfiguration authenticationConfiguration) {
        this.authenticationConfiguration = authenticationConfiguration;
    }

    @Bean
    public AuthenticationManager authenticationManager() throws Exception {
        return authenticationConfiguration.getAuthenticationManager();
    }

    @Autowired
    private JwtRequestFilter jwtRequestFilter;

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
                .csrf(csrf -> csrf
                                .ignoringRequestMatchers("/users") // Ignoruje sprawdzanie CSRF dla endpointu /users
                                .ignoringRequestMatchers("/authenticate")
                                .ignoringRequestMatchers("/users/profile")
                                .ignoringRequestMatchers("/tutors/**")
                                .ignoringRequestMatchers("/lessons")

                        // Możesz dodać więcej ścieżek, jeśli potrzebujesz
                )
                .csrf().disable()
                .authorizeHttpRequests(authorize -> authorize
                        .requestMatchers("/users/profile").authenticated()
                        .requestMatchers("/authenticate").permitAll()
                        .requestMatchers("/users").permitAll()
                        .requestMatchers("/tutors").permitAll()
                        .requestMatchers("/lessons").permitAll()
                        .requestMatchers(HttpMethod.POST, "/lessons/**").authenticated()
                        .requestMatchers(HttpMethod.PUT, "/users/**").authenticated()
                        .requestMatchers(HttpMethod.GET, "/users/**").authenticated()
                        .requestMatchers(HttpMethod.PUT, "/tutors/**").hasAuthority("TUTOR")
//                       .requestMatchers(HttpMethod.PUT, "/tutors/**").permitAll()
                        .anyRequest().authenticated()
                )



//                        .requestMatchers(HttpMethod.GET, "/lessons").hasAnyAuthority("ROLE_STUDENT", "ROLE_TUTOR") // Dostęp do lekcji dla zalogowanych Studentów i Tutorów

                .cors(cors -> cors
                        .configurationSource(request -> {
                            CorsConfiguration config = new CorsConfiguration();
                            config.setAllowedOrigins(List.of("http://localhost:3000")); // Zezwól na żądania z frontendu
                            config.setAllowedMethods(List.of("GET", "POST", "PUT", "DELETE", "OPTIONS"));
                            config.setAllowedHeaders(List.of("*"));
                            return config;
                        })
                )
                .sessionManagement(session -> session
                        .sessionCreationPolicy(SessionCreationPolicy.STATELESS)
                )
                .addFilterBefore(jwtRequestFilter, UsernamePasswordAuthenticationFilter.class);

        return http.build();
    }

    @Bean
    public WebSecurityCustomizer webSecurityCustomizer() {
        return (web) -> web.ignoring().requestMatchers("/swagger-ui/**", "/v3/api-docs/**", "/swagger-ui.html");
    }

}
