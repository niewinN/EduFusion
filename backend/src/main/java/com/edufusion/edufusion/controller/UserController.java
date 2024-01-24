package com.edufusion.edufusion.controller;

import com.edufusion.edufusion.dto.UserDTO;
import com.edufusion.edufusion.dto.UserResponse;
import com.edufusion.edufusion.model.User;
import com.edufusion.edufusion.security.JwtUtil;
import com.edufusion.edufusion.security.UserPrincipal;
import com.edufusion.edufusion.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/users")
public class UserController {

    @Autowired
    private UserService userService;

    @Autowired
    private JwtUtil jwtUtil;

    @GetMapping
    public List<User> getAllUsers() {
        return userService.getAllUsers();
    }

    @GetMapping("/{id}")
    public ResponseEntity<User> getUserById(@PathVariable Long id) {
        return userService.getUserById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @GetMapping("/profile")
    public ResponseEntity<UserDTO> getUserProfile(Authentication authentication) {
        String email = authentication.getName();
        return userService.getUserByEmail(email)
                .map(UserDTO::fromUser) // Używanie metody statycznej fabrykującej
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

            @PostMapping
            public ResponseEntity<?> addUser(@RequestBody UserDTO userDTO) {
                // Logowanie danych wejściowych
                System.out.println("Received UserDTO: " + userDTO);

                User newUser = userService.addUser(userDTO);
                final String jwt = jwtUtil.generateToken(new UserPrincipal(newUser));
                return ResponseEntity.ok(new UserResponse(newUser, jwt));
            }


    @PutMapping("/profile")
    public ResponseEntity<User> updateUser(@RequestBody UserDTO userDTO, Authentication authentication) {
        String email = authentication.getName();
        User updatedUser = userService.updateUserByEmail(email, userDTO);
        if (updatedUser != null) {
            return ResponseEntity.ok(updatedUser);
        } else {
            return ResponseEntity.notFound().build();
        }
    }



    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteUser(@PathVariable Long id) {
        userService.deleteUser(id);
        return ResponseEntity.ok().build();
    }
}

