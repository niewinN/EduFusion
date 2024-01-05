//package com.edufusion.edufusion.repository;
//
//import com.edufusion.edufusion.model.Lesson;
//import org.springframework.data.jpa.repository.JpaRepository;
//import org.springframework.stereotype.Repository;
//
//@Repository
//public interface LessonRepository extends JpaRepository<Lesson, Long> {
//    // Możesz dodać niestandardowe zapytania tutaj, jeśli potrzebujesz
//}

package com.edufusion.edufusion.repository;

import com.edufusion.edufusion.model.Lesson;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface LessonRepository extends JpaRepository<Lesson, Long> {
    // Metody dla specyficznych zapytań, jeśli potrzebne
    List<Lesson> findByStudentId(Long userId);
    List<Lesson> findByTutorId(Long tutorId);
}
