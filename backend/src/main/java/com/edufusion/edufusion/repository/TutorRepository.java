package com.edufusion.edufusion.repository;

import com.edufusion.edufusion.model.Tutor;
import com.edufusion.edufusion.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface TutorRepository extends JpaRepository<Tutor, Long> {
    Optional<Tutor> findByUserId(Long userId);
    Optional<Tutor> findByUser(User user);

}

