package com.edufusion.edufusion.dto;

import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
public class TutorDTO {
    private Long id;
    private Long userId;
    private String firstName;
    private String email;
    private String img;
    private String desc;
    private String price;
    private String subject;
    private List<String> level;
    private List<String> mode;
    private String city;
    private AvailabilityDTO availability;

}

