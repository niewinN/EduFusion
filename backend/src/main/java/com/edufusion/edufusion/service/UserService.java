//package com.edufusion.edufusion.service;
//
//import com.edufusion.edufusion.dto.UserDTO;
//import com.edufusion.edufusion.model.Lesson;
//import com.edufusion.edufusion.model.Role;
//import com.edufusion.edufusion.model.User;
//import com.edufusion.edufusion.repository.LessonRepository;
//import com.edufusion.edufusion.repository.TutorRepository;
//import com.edufusion.edufusion.repository.UserRepository;
//import com.edufusion.edufusion.security.JwtUtil;
//import com.edufusion.edufusion.security.UserPrincipal;
//import org.slf4j.Logger;
//import org.slf4j.LoggerFactory;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.security.crypto.password.PasswordEncoder;
//import org.springframework.stereotype.Service;
//
//import java.util.List;
//import java.util.Optional;
//
//@Service
//public class UserService {
//
//    private static final Logger logger = LoggerFactory.getLogger(UserService.class);
//
//    @Autowired
//    private JwtUtil jwtUtil;
//
//    @Autowired
//    private PasswordEncoder passwordEncoder;
//
//    @Autowired
//    private UserRepository userRepository;
//
//    @Autowired
//    private TutorRepository tutorRepository;
//
//    @Autowired
//    private LessonRepository lessonRepository;
//
//    @Autowired
//    public UserService(UserRepository userRepository) {
//        this.userRepository = userRepository;
//    }
//
//    public List<User> getAllUsers() {
//        return userRepository.findAll();
//    }
//
//    public Optional<User> getUserById(Long id) {
//        return userRepository.findById(id);
//    }
//
//
//    public User saveUser(User user) {
//        return userRepository.save(user);
//    }
//
//    public User addUser(UserDTO userDTO) {
//        User user = new User();
//        userDTO.getFirstName().ifPresent(user::setFirstName);
//        userDTO.getLastName().ifPresent(user::setLastName);
//        userDTO.getEmail().ifPresent(user::setEmail);
//        userDTO.getPhoneNumber().ifPresent(user::setPhoneNumber);
//        userDTO.getPassword().ifPresent(pass -> user.setPassword(passwordEncoder.encode(pass)));
//        user.setRole(Role.STUDENT); // Domyślnie każdy nowy użytkownik jest STUDENTEM
////        return userRepository.save(user);
//        User savedUser = userRepository.save(user);
//        // Generowanie JWT po pomyślnej rejestracji
//        final String jwt = jwtUtil.generateToken(new UserPrincipal(savedUser));
//        // Możesz zwrócić JWT w odpowiedzi albo wysłać go w inny sposób
//        return savedUser;
//    }
//
//    public User updateUser(Long id, UserDTO userDetails) {
//        User user = userRepository.findById(id)
//                .orElseThrow(() -> new RuntimeException("User not found"));
//
//        userDetails.getFirstName().ifPresent(user::setFirstName);
//        userDetails.getLastName().ifPresent(user::setLastName);
//        userDetails.getPhoneNumber().ifPresent(user::setPhoneNumber);
////        userDetails.getRole().ifPresent(user::setRole);
//
//        return userRepository.save(user);
//    }
//
//
//
//
//
//    public void deleteUser(Long id) {
//        userRepository.deleteById(id);
//    }
//
//    public List<Lesson> getLessonsForUser(Long userId) {
//        return lessonRepository.findByStudentId(userId);
//    }
//}

package com.edufusion.edufusion.service;

import com.edufusion.edufusion.dto.UserDTO;
import com.edufusion.edufusion.model.Lesson;
import com.edufusion.edufusion.model.Role;
import com.edufusion.edufusion.model.User;
import com.edufusion.edufusion.repository.LessonRepository;
import com.edufusion.edufusion.repository.TutorRepository;
import com.edufusion.edufusion.repository.UserRepository;
import com.edufusion.edufusion.security.JwtUtil;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {

    private static final Logger logger = LoggerFactory.getLogger(UserService.class);

    @Autowired
    private JwtUtil jwtUtil;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private TutorRepository tutorRepository;

    @Autowired
    private LessonRepository lessonRepository;

    @Autowired
    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    public Optional<User> getUserById(Long id) {
        return userRepository.findById(id);
    }

    public Optional<User> getUserByEmail(String email) {
        return userRepository.findByEmail(email);
    }


    public User saveUser(User user) {
        return userRepository.save(user);
    }

    public User addUser(UserDTO userDTO) {
        if (!userDTO.getEmail().isPresent() || !userDTO.getPassword().isPresent()) {
            logger.error("Email or password not provided");
            throw new IllegalArgumentException("Email and password are required");
        }

        logger.info("Adding new user with email: {}", userDTO.getEmail().orElse("Unknown Email"));

        User user = new User();
        userDTO.getFirstName().ifPresent(user::setFirstName);
        userDTO.getLastName().ifPresent(user::setLastName);
        userDTO.getEmail().ifPresent(user::setEmail);
        userDTO.getPhoneNumber().ifPresent(user::setPhoneNumber);
        userDTO.getPassword().ifPresent(pass -> user.setPassword(passwordEncoder.encode(pass)));
        user.setRole(Role.STUDENT);

        try {
            User savedUser = userRepository.save(user);
            logger.info("User saved successfully with ID: {}", savedUser.getId());
            return savedUser;
        } catch (DataAccessException e) {
            logger.error("Database access error while saving user", e);
            throw new RuntimeException("Error saving user", e);
        }
    }

    public User updateUserByEmail(String email, UserDTO userDetails) {
        User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("User not found"));

        userDetails.getFirstName().ifPresent(user::setFirstName);
        userDetails.getLastName().ifPresent(user::setLastName);
        userDetails.getPhoneNumber().ifPresent(user::setPhoneNumber);
        // inne aktualizacje...

        return userRepository.save(user);
    }

    public void deleteUser(Long id) {
        userRepository.deleteById(id);
    }

    public List<Lesson> getLessonsForUser(Long userId) {
        return lessonRepository.findByStudentId(userId);
    }
}

