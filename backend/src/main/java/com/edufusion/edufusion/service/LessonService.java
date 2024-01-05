////package com.edufusion.edufusion.service;
////
////import com.edufusion.edufusion.model.Lesson;
////import com.edufusion.edufusion.repository.LessonRepository;
////import org.springframework.beans.factory.annotation.Autowired;
////import org.springframework.stereotype.Service;
////
////import java.util.List;
////import java.util.Optional;
////
////@Service
////public class LessonService {
////
////    private final LessonRepository lessonRepository;
////
////    @Autowired
////    public LessonService(LessonRepository lessonRepository) {
////        this.lessonRepository = lessonRepository;
////    }
////
////    public List<Lesson> getAllLessons() {
////        return lessonRepository.findAll();
////    }
////
////    public Optional<Lesson> getLessonById(Long id) {
////        return lessonRepository.findById(id);
////    }
////
////    public Lesson saveLesson(Lesson lesson) {
////
////        return lessonRepository.save(lesson);
////    }
////
////    public void deleteLesson(Long id) {
////        lessonRepository.deleteById(id);
////    }
////
////}
//
//package com.edufusion.edufusion.service;
//
//import com.edufusion.edufusion.dto.LessonDTO;
//import com.edufusion.edufusion.model.Lesson;
//import com.edufusion.edufusion.model.Tutor;
//import com.edufusion.edufusion.model.User;
//import com.edufusion.edufusion.repository.LessonRepository;
//import com.edufusion.edufusion.repository.TutorRepository;
//import com.edufusion.edufusion.repository.UserRepository;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Service;
//
//import java.util.List;
//import java.util.Optional;
//
//@Service
//public class LessonService {
//
//    @Autowired
//    private LessonRepository lessonRepository;
//
//    @Autowired
//    private TutorRepository tutorRepository;
//
//    @Autowired
//    private UserRepository userRepository;
//
//    public Lesson saveLesson(LessonDTO lessonDTO) {
//        Lesson lesson = new Lesson();
//        lesson.setSubject(lessonDTO.getSubject());
//        lesson.setLevel(lessonDTO.getLevel());
//        lesson.setMode(lessonDTO.getMode());
//        lesson.setCity(lessonDTO.getCity());
//        lesson.setLessonDate(lessonDTO.getLessonDate());
//        lesson.setStartTime(lessonDTO.getStartTime());
//
//        User student = userRepository.findById(lessonDTO.getStudentId())
//                .orElseThrow(() -> new RuntimeException("User not found"));
//        lesson.setStudent(student);
//
//        Tutor tutor = tutorRepository.findById(lessonDTO.getTutorId())
//                .orElseThrow(() -> new RuntimeException("Tutor not found"));
//        lesson.setTutor(tutor);
//
//        return lessonRepository.save(lesson);
//    }
//
//
//    public List<Lesson> getAllLessons() {
//        return lessonRepository.findAll();
//    }
//
//    public Optional<Lesson> getLessonById(Long id) {
//        return lessonRepository.findById(id);
//    }
//
////    public Lesson saveLesson(Lesson lesson) {
////        return lessonRepository.save(lesson);
////    }
//
//    public void deleteLesson(Long id) {
//        lessonRepository.deleteById(id);
//    }
//
//    // Metody do obsługi dodawania, aktualizowania, usuwania lekcji...
//}
//

package com.edufusion.edufusion.service;

import com.edufusion.edufusion.dto.LessonDTO;
import com.edufusion.edufusion.model.Lesson;
import com.edufusion.edufusion.model.Tutor;
import com.edufusion.edufusion.model.User;
import com.edufusion.edufusion.repository.LessonRepository;
import com.edufusion.edufusion.repository.TutorRepository;
import com.edufusion.edufusion.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class LessonService {

    @Autowired
    private LessonRepository lessonRepository;

    @Autowired
    private TutorRepository tutorRepository;

    @Autowired
    private UserRepository userRepository;

    public Lesson saveLesson(LessonDTO lessonDTO) {
        Lesson lesson = convertToEntity(lessonDTO);
        return lessonRepository.save(lesson);
    }

    public List<Lesson> getAllLessons() {
        return lessonRepository.findAll();
    }

    public Optional<Lesson> getLessonById(Long id) {
        return lessonRepository.findById(id);
    }

    public void deleteLesson(Long id) {
        lessonRepository.deleteById(id);
    }

    public LessonDTO convertToDTO(Lesson lesson) {
        LessonDTO lessonDTO = new LessonDTO();
        lessonDTO.setId(lesson.getId());
        lessonDTO.setSubject(lesson.getSubject());
        lessonDTO.setLevel(lesson.getLevel());
        lessonDTO.setMode(lesson.getMode());
        lessonDTO.setCity(lesson.getCity());
        lessonDTO.setLessonDate(lesson.getLessonDate());
        lessonDTO.setStartTime(lesson.getStartTime());
        if (lesson.getStudent() != null) {
            lessonDTO.setStudentId(lesson.getStudent().getId());
            lessonDTO.setStudentName(lesson.getStudent().getFirstName()); // Zakładam, że User ma pole firstName
            lessonDTO.setStudentEmail(lesson.getStudent().getEmail());
        }
        if (lesson.getTutor() != null) {
            lessonDTO.setTutorId(lesson.getTutor().getId());
            lessonDTO.setTutorName(lesson.getTutor().getUser().getFirstName());
            lessonDTO.setTutorEmail(lesson.getTutor().getUser().getEmail());// Zakładam, że Tutor ma pole User, które zawiera firstName
        }
        return lessonDTO;
    }

    private Lesson convertToEntity(LessonDTO lessonDTO) {
        Lesson lesson = new Lesson();
        lesson.setId(lessonDTO.getId());
        lesson.setSubject(lessonDTO.getSubject());
        lesson.setLevel(lessonDTO.getLevel());
        lesson.setMode(lessonDTO.getMode());
        lesson.setCity(lessonDTO.getCity());
        lesson.setLessonDate(lessonDTO.getLessonDate());
        lesson.setStartTime(lessonDTO.getStartTime());
        Optional<User> student = userRepository.findById(lessonDTO.getStudentId());
        student.ifPresent(lesson::setStudent);
        Optional<Tutor> tutor = tutorRepository.findById(lessonDTO.getTutorId());
        tutor.ifPresent(lesson::setTutor);
        return lesson;
    }
}

