//package com.edufusion.edufusion.controller;
//
//import jakarta.validation.Valid;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.PostMapping;
//import org.springframework.web.bind.annotation.RequestBody;
//import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RestController;
//
//@RestController
//@RequestMapping("/auth")
//public class SecurityController {
//
//    private final AuthenticationService authenticationService;
//
//    public SecurityController(AuthenticationService authenticationService) {
//        this.authenticationService = authenticationService;
//    }
//
//    @PostMapping("/login")
//    public ResponseEntity<?> authenticateUser(@Valid @RequestBody LoginRequest loginRequest) {
//        String jwt = authenticationService.authenticate(loginRequest);
//        return ResponseEntity.ok(new JwtAuthenticationResponse(jwt));
//    }
//
//    @PostMapping("/register")
//    public ResponseEntity<?> registerUser(@Valid @RequestBody SignUpRequest signUpRequest) {
//        // implementacja rejestracji
//    }
//}
//
