package com.edufusion.edufusion.controller;

import com.edufusion.edufusion.dto.TutorDTO;
import com.edufusion.edufusion.model.Tutor;
import com.edufusion.edufusion.repository.TutorRepository;
import com.edufusion.edufusion.service.TutorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/tutors")
public class TutorController {

    private final TutorRepository tutorRepository;

    @Autowired
    public TutorController(TutorRepository tutorRepository) {
        this.tutorRepository = tutorRepository;
    }

    @Autowired
    private TutorService tutorService;

    @GetMapping
    public ResponseEntity<List<TutorDTO>> getAllTutors() {
        List<TutorDTO> tutors = tutorService.getAllTutors();
        return ResponseEntity.ok(tutors);
    }


    @GetMapping("/user/{userId}")
    public ResponseEntity<Tutor> getTutorByUserId(@PathVariable Long userId) {
        return tutorRepository.findByUserId(userId)
                .map(tutor -> ResponseEntity.ok(tutor))
                .orElse(ResponseEntity.notFound().build());
    }

    @GetMapping("/{id}")
    public ResponseEntity<TutorDTO> getTutorById(@PathVariable Long id) {
        return tutorService.getTutorById(id)
                .map(tutor -> ResponseEntity.ok(convertToTutorDTO(tutor)))
                .orElse(ResponseEntity.notFound().build());
    }

    private TutorDTO convertToTutorDTO(Tutor tutor) {
        TutorDTO tutorDTO = new TutorDTO();
        return tutorDTO;
    }

    @PostMapping
    public ResponseEntity<TutorDTO> addTutor(@RequestBody TutorDTO tutorDTO) {
        Tutor tutor = tutorService.addOrUpdateTutor(tutorDTO);
        return ResponseEntity.ok(convertToTutorDTO(tutor));
    }

    @PutMapping("/{id}")
    public ResponseEntity<TutorDTO> updateTutor(@PathVariable Long id, @RequestBody TutorDTO tutorDTO) {
        tutorDTO.setId(id);
        Tutor updatedTutor = tutorService.addOrUpdateTutor(tutorDTO);
        return ResponseEntity.ok(convertToTutorDTO(updatedTutor));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteTutor(@PathVariable Long id) {
        tutorService.deleteTutor(id);
        return ResponseEntity.ok().build();
    }

}

