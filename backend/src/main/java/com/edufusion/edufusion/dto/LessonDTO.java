package com.edufusion.edufusion.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class LessonDTO {
    private Long id;
    private Long studentId;
    private Long tutorId;
    private String studentName;
    private String tutorName;
    private String studentEmail;
    private String tutorEmail;
    private String subject;
    private String level;
    private String mode;
    private String city;
    private String lessonDate;
    private String startTime;
}
