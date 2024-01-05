package com.edufusion.edufusion.service;

import com.edufusion.edufusion.dto.UserDTO;
import com.edufusion.edufusion.model.Lesson;
import com.edufusion.edufusion.model.Role;
import com.edufusion.edufusion.model.User;
import com.edufusion.edufusion.repository.LessonRepository;
import com.edufusion.edufusion.repository.TutorRepository;
import com.edufusion.edufusion.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {

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


    public User saveUser(User user) {
        return userRepository.save(user);
    }

    public User addUser(UserDTO userDTO) {
        User user = new User();
        userDTO.getFirstName().ifPresent(user::setFirstName);
        userDTO.getLastName().ifPresent(user::setLastName);
        userDTO.getEmail().ifPresent(user::setEmail);
        userDTO.getPhoneNumber().ifPresent(user::setPhoneNumber);
        userDTO.getPassword().ifPresent(pass -> user.setPassword(passwordEncoder.encode(pass)));
        user.setRole(Role.STUDENT); // Domyślnie każdy nowy użytkownik jest STUDENTEM
        return userRepository.save(user);
    }

    public User updateUser(Long id, UserDTO userDetails) {
        User user = userRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("User not found"));

        userDetails.getFirstName().ifPresent(user::setFirstName);
        userDetails.getLastName().ifPresent(user::setLastName);
        userDetails.getPhoneNumber().ifPresent(user::setPhoneNumber);
//        userDetails.getRole().ifPresent(user::setRole);

        return userRepository.save(user);
    }





    public void deleteUser(Long id) {
        userRepository.deleteById(id);
    }

    public List<Lesson> getLessonsForUser(Long userId) {
        return lessonRepository.findByStudentId(userId);
    }
}
