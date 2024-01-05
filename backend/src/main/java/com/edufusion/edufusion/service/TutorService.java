package com.edufusion.edufusion.service;

import com.edufusion.edufusion.dto.AvailabilityDTO;
import com.edufusion.edufusion.dto.TutorDTO;
import com.edufusion.edufusion.exceptions.UserNotFoundException;
import com.edufusion.edufusion.model.Lesson;
import com.edufusion.edufusion.model.Tutor;
import com.edufusion.edufusion.model.User;
import com.edufusion.edufusion.repository.LessonRepository;
import com.edufusion.edufusion.repository.TutorRepository;
import com.edufusion.edufusion.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class TutorService {


    @Autowired
    private TutorRepository tutorRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private LessonRepository lessonRepository;


    public List<TutorDTO> getAllTutors() {
        List<Tutor> tutors = tutorRepository.findAll();
        return tutors.stream().map(this::convertToTutorDTO).collect(Collectors.toList());
    }

    private TutorDTO convertToTutorDTO(Tutor tutor) {
        TutorDTO tutorDTO = new TutorDTO();
        tutorDTO.setId(tutor.getId());
        tutorDTO.setUserId(tutor.getUser().getId());
        tutorDTO.setFirstName(tutor.getUser().getFirstName()); // Dodajemy imię
        tutorDTO.setEmail(tutor.getUser().getEmail());
//        tutorDTO.setLastName(tutor.getUser().getLastName());   // Dodajemy nazwisko
        tutorDTO.setImg(tutor.getImg());
        tutorDTO.setDesc(tutor.getDesc());
        tutorDTO.setPrice(tutor.getPrice());
        tutorDTO.setSubject(tutor.getSubject());
        tutorDTO.setLevel(tutor.getLevel());
        tutorDTO.setMode(tutor.getMode());
        tutorDTO.setCity(tutor.getCity());
        tutorDTO.setAvailability(convertMapToAvailabilityDTO(tutor.getAvailability()));
        return tutorDTO;
    }


    // Metoda do pobierania konkretnego tutora po ID
    public Optional<Tutor> getTutorById(Long id) {
        return tutorRepository.findById(id);
    }


    public Tutor addOrUpdateTutor(TutorDTO tutorDTO) {
        Long userId = tutorDTO.getUserId();
        if (userId == null) {
            throw new UserNotFoundException("User ID not provided");
        }

        User user = userRepository.findById(userId)
                .orElseThrow(() -> new UserNotFoundException("User not found"));

        Tutor tutor = tutorRepository.findByUser(user)
                .orElse(new Tutor());

        mapDtoToTutor(tutorDTO, tutor);
        tutor.setUser(user); // Upewnij się, że relacja jest ustawiona
        return tutorRepository.save(tutor);
    }


    // Prywatna metoda pomocnicza do mapowania DTO na encję Tutor
    private void mapDtoToTutor(TutorDTO tutorDTO, Tutor tutor) {
        if (tutorDTO.getImg() != null) {
            tutor.setImg(tutorDTO.getImg());
        }
        if (tutorDTO.getDesc() != null) {
            tutor.setDesc(tutorDTO.getDesc());
        }
        if (tutorDTO.getPrice() != null) {
            tutor.setPrice(tutorDTO.getPrice());
        }
        if (tutorDTO.getSubject() != null) {
            tutor.setSubject(tutorDTO.getSubject());
        }
        if (tutorDTO.getLevel() != null) {
            tutor.setLevel(tutorDTO.getLevel());
        }
        if (tutorDTO.getMode() != null) {
            tutor.setMode(tutorDTO.getMode());
        }
        if (tutorDTO.getCity() != null) {
            tutor.setCity(tutorDTO.getCity());
        }

        // Mapowanie AvailabilityDTO na mapę dostępności
        if (tutorDTO.getAvailability() != null) {
            Map<String, List<String>> availabilityMap = convertDtoToMap(tutorDTO.getAvailability());
            tutor.setAvailability(availabilityMap);
        }

        // Powiązanie tutora z użytkownikiem
        Long userId = tutorDTO.getUserId();
        if (userId != null) {
            User user = userRepository.findById(userId)
                    .orElseThrow(() -> new RuntimeException("User not found"));
            tutor.setUser(user);
        }
    }

    // Metoda do usuwania tutora
    public void deleteTutor(Long id) {
        tutorRepository.deleteById(id);
    }

    private AvailabilityDTO convertMapToAvailabilityDTO(Map<String, List<String>> availabilityMap) {
        AvailabilityDTO availabilityDTO = new AvailabilityDTO();

        availabilityDTO.setMonday(availabilityMap.get("monday"));
        availabilityDTO.setTuesday(availabilityMap.get("tuesday"));
        availabilityDTO.setWednesday(availabilityMap.get("wednesday"));
        availabilityDTO.setThursday(availabilityMap.get("thursday"));
        availabilityDTO.setFriday(availabilityMap.get("friday"));
        availabilityDTO.setSaturday(availabilityMap.get("saturday"));
        availabilityDTO.setSunday(availabilityMap.get("sunday"));

        return availabilityDTO;
    }

    // Metoda konwertująca AvailabilityDTO na mapę
    private Map<String, List<String>> convertDtoToMap(AvailabilityDTO availabilityDTO) {
        Map<String, List<String>> availabilityMap = new HashMap<>();
        availabilityMap.put("monday", availabilityDTO.getMonday());
        availabilityMap.put("tuesday", availabilityDTO.getTuesday());
        availabilityMap.put("wednesday", availabilityDTO.getWednesday());
        availabilityMap.put("thursday", availabilityDTO.getThursday());
        availabilityMap.put("friday", availabilityDTO.getFriday());
        availabilityMap.put("saturday", availabilityDTO.getSaturday());
        availabilityMap.put("sunday", availabilityDTO.getSunday());

        return availabilityMap;
    }

    public List<Lesson> getLessonsForTutor(Long tutorId) {
        return lessonRepository.findByTutorId(tutorId);
    }
}
