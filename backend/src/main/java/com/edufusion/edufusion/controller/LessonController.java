////package com.edufusion.edufusion.controller;
////
////import com.edufusion.edufusion.dto.LessonDTO;
////import com.edufusion.edufusion.model.Lesson;
////import com.edufusion.edufusion.model.Tutor;
////import com.edufusion.edufusion.model.User;
////import com.edufusion.edufusion.service.LessonService;
////import com.edufusion.edufusion.service.TutorService;
////import com.edufusion.edufusion.service.UserService;
////import org.springframework.beans.factory.annotation.Autowired;
////import org.springframework.http.HttpStatus;
////import org.springframework.http.ResponseEntity;
////import org.springframework.web.bind.annotation.*;
////
////import java.util.List;
////import java.util.stream.Collectors;
////
////@CrossOrigin(origins = "http://localhost:3000")
////@RestController
////@RequestMapping("/lessons")
////public class LessonController {
////
////    private final LessonService lessonService;
////    private final TutorService tutorService;
////    private final UserService userService;
////
////    @Autowired
////    public LessonController(LessonService lessonService, TutorService tutorService, UserService userService) {
////        this.lessonService = lessonService;
////        this.tutorService = tutorService;
////        this.userService = userService;
////    }
////
////    @GetMapping
////    public ResponseEntity<List<LessonDTO>> getAllLessons() {
////        List<Lesson> lessons = lessonService.getAllLessons();
////        List<LessonDTO> lessonDTOs = lessons.stream()
////                .map(this::convertToDTO)
////                .collect(Collectors.toList());
////        return new ResponseEntity<>(lessonDTOs, HttpStatus.OK);
////    }
////
////    @GetMapping("/{id}")
////    public ResponseEntity<LessonDTO> getLessonById(@PathVariable Long id) {
////        return lessonService.getLessonById(id)
////                .map(lesson -> new ResponseEntity<>(convertToDTO(lesson), HttpStatus.OK))
////                .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
////    }
////
////    @PostMapping
////    public ResponseEntity<LessonDTO> createLesson(@RequestBody LessonDTO lessonDTO) {
////        Lesson lesson = convertToEntity(lessonDTO);
////
////        // Pobierz obiekty Tutor i Student z bazy danych na podstawie przekazanych danych
////        Tutor tutor = tutorService.getTutorById(lessonDTO.getTutorId()).orElse(null);
////        User student = userService.getUserById(lessonDTO.getStudentId()).orElse(null);
////
////        lesson.setTutor(tutor);
////        lesson.setStudent(student);
////
////        Lesson savedLesson = lessonService.saveLesson(lesson);
////        return new ResponseEntity<>(convertToDTO(savedLesson), HttpStatus.CREATED);
////    }
////
////    @PutMapping("/{id}")
////    public ResponseEntity<LessonDTO> updateLesson(@PathVariable Long id, @RequestBody LessonDTO lessonDTO) {
////        if (!lessonService.getLessonById(id).isPresent()) {
////            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
////        }
////        Lesson updatedLesson = lessonService.saveLesson(convertToEntity(lessonDTO));
////        return new ResponseEntity<>(convertToDTO(updatedLesson), HttpStatus.OK);
////    }
////
////    @DeleteMapping("/{id}")
////    public ResponseEntity<Void> deleteLesson(@PathVariable Long id) {
////        if (!lessonService.getLessonById(id).isPresent()) {
////            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
////        }
////        lessonService.deleteLesson(id);
////        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
////    }
////
////    private LessonDTO convertToDTO(Lesson lesson) {
////        LessonDTO lessonDTO = new LessonDTO();
////        lessonDTO.setId(lesson.getId());
////        lessonDTO.setSubject(lesson.getSubject());
////        lessonDTO.setLevel(lesson.getLevel());
////        lessonDTO.setMode(lesson.getMode());
////        lessonDTO.setLessonDate(lesson.getLessonDate());
////        lessonDTO.setStartTime(lesson.getStartTime());
////
////        if (lesson.getTutor() != null) {
////            lessonDTO.setTutorId(lesson.getTutor().getId());
////            lessonDTO.setTutorName(lesson.getTutor().getUser().getFirstName() + " " + lesson.getTutor().getUser().getLastName());
////            lessonDTO.setTutorEmail(lesson.getTutor().getUser().getEmail());
////        }
////
////        if (lesson.getStudent() != null) {
////            lessonDTO.setStudentId(lesson.getStudent().getId());
////            lessonDTO.setStudentName(lesson.getStudent().getFirstName() + " " + lesson.getStudent().getLastName());
////            lessonDTO.setStudentEmail(lesson.getStudent().getEmail());
////        }
////
////        return lessonDTO;
////    }
////
////    private Lesson convertToEntity(LessonDTO lessonDTO) {
////        Lesson lesson = new Lesson();
////        lesson.setId(lessonDTO.getId());
////        lesson.setSubject(lessonDTO.getSubject());
////        lesson.setLevel(lessonDTO.getLevel());
////        lesson.setMode(lessonDTO.getMode());
////        lesson.setLessonDate(lessonDTO.getLessonDate());
////        lesson.setStartTime(lessonDTO.getStartTime());
////
////        // Przekształcanie informacji o nauczycielu (tutor)
////        Tutor tutor = new Tutor();
////        tutor.setId(lessonDTO.getTutorId()); // Ustawianie identyfikatora nauczyciela
////        // Możesz dodać dodatkowe informacje o nauczycielu, jeśli są dostępne w lessonDTO
////        lesson.setTutor(tutor);
////
////        // Przekształcanie informacji o uczniu (student)
////        User student = new User();
////        student.setId(lessonDTO.getStudentId()); // Ustawianie identyfikatora ucznia
////        // Możesz dodać dodatkowe informacje o uczniu, jeśli są dostępne w lessonDTO
////        lesson.setStudent(student);
////
////        return lesson;
////    }
////}
//
//package com.edufusion.edufusion.controller;
//
//import com.edufusion.edufusion.dto.LessonDTO;
//import com.edufusion.edufusion.model.Lesson;
//import com.edufusion.edufusion.service.LessonService;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.*;
//
//import java.util.List;
//
//@CrossOrigin(origins = "http://localhost:3000")
//@RestController
//@RequestMapping("/lessons")
//public class LessonController {
//
//    @Autowired
//    private LessonService lessonService;
//
//    @GetMapping
//    public ResponseEntity<List<Lesson>> getAllLessons() {
//        List<Lesson> lessons = lessonService.getAllLessons();
//        return ResponseEntity.ok(lessons);
//    }
//
//    @PostMapping
//    public ResponseEntity<Lesson> createLesson(@RequestBody LessonDTO lessonDTO) {
//        Lesson savedLesson = lessonService.saveLesson(lessonDTO);
//        return ResponseEntity.ok(savedLesson);
//    }
//
//    @GetMapping("/{id}")
//    public ResponseEntity<Lesson> getLessonById(@PathVariable Long id) {
//        return lessonService.getLessonById(id)
//                .map(ResponseEntity::ok)
//                .orElse(ResponseEntity.notFound().build());
//    }
//
//
//
//    @DeleteMapping("/{id}")
//    public ResponseEntity<?> deleteLesson(@PathVariable Long id) {
//        return lessonService.getLessonById(id)
//                .map(lesson -> {
//                    lessonService.deleteLesson(id);
//                    return ResponseEntity.ok().build();
//                })
//                .orElse(ResponseEntity.notFound().build());
//    }
//
//
//    // Endpointy do dodawania, aktualizowania, usuwania lekcji...
//}

package com.edufusion.edufusion.controller;

import com.edufusion.edufusion.dto.LessonDTO;
import com.edufusion.edufusion.model.Lesson;
import com.edufusion.edufusion.security.JwtUtil;
import com.edufusion.edufusion.service.LessonService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/lessons")
public class LessonController {

    @Autowired
    private LessonService lessonService;

    @Autowired
    private JwtUtil jwtUtil;

    @GetMapping
    public ResponseEntity<List<LessonDTO>> getAllLessons() {
        List<Lesson> lessons = lessonService.getAllLessons();
        List<LessonDTO> lessonDTOs = lessons.stream()
                .map(lessonService::convertToDTO)
                .collect(Collectors.toList());
        return ResponseEntity.ok(lessonDTOs);
    }

    @PostMapping
    public ResponseEntity<LessonDTO> createLesson(@RequestBody LessonDTO lessonDTO) {
        Lesson savedLesson = lessonService.saveLesson(lessonDTO);
        return ResponseEntity.ok(lessonService.convertToDTO(savedLesson));
    }

    @GetMapping("/{id}")
    public ResponseEntity<LessonDTO> getLessonById(@PathVariable Long id) {
        return lessonService.getLessonById(id)
                .map(lessonService::convertToDTO)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @GetMapping("/user-lessons")
    public ResponseEntity<List<LessonDTO>> getLessonsForUser() {
        String email = SecurityContextHolder.getContext().getAuthentication().getName(); // Pobierz email z aktualnie zalogowanego użytkownika
        List<Lesson> lessons = lessonService.getLessonsForUser(email);
        List<LessonDTO> lessonDTOs = lessons.stream()
                .map(lessonService::convertToDTO)
                .collect(Collectors.toList());
        return ResponseEntity.ok(lessonDTOs);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteLesson(@PathVariable Long id) {
        return lessonService.getLessonById(id)
                .map(lesson -> {
                    lessonService.deleteLesson(id);
                    return ResponseEntity.ok().build();
                })
                .orElse(ResponseEntity.notFound().build());
    }
}

