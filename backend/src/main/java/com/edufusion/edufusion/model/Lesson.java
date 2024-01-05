//package com.edufusion.edufusion.model;
//
//import jakarta.persistence.*;
//import lombok.*;
//
//import java.util.Date;
//
//@Entity
//@Getter
//@Setter
//@NoArgsConstructor
//@AllArgsConstructor
//@EqualsAndHashCode
//@ToString
//@Table(name="LESSONS")
//public class Lesson {
//    @Id
//    @GeneratedValue(strategy = GenerationType.IDENTITY)
//    @Column(name = "LESSON_ID", nullable = false)
//    private Long id;
//
//    @Column(name = "SUBJECT", nullable = false)
//    private String subject;
//
//    @Column(name = "LEVEL", nullable = false)
//    private String level;
//
//    @Column(name = "MODE", nullable = false)
//    private String mode;
//
//    @Column(name = "CITY")
//    private String city;
//
//    @Temporal(TemporalType.TIMESTAMP)
//    @Column(name = "LESSON_DATE", nullable = false)
//    private Date lessonDate;
//
//    @Column(name = "START_TIME", nullable = false)
//    private String startTime;
//
//    @ManyToOne
//    @JoinColumn(name = "TUTOR_ID", referencedColumnName = "TUTOR_ID")
//    private Tutor tutor;
//
//    @ManyToOne
//    @JoinColumn(name = "STUDENT_USER_ID", referencedColumnName = "USER_ID")
//    private User student;
//
//}
package com.edufusion.edufusion.model;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode
@ToString
@Table(name = "LESSONS")
public class Lesson {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "LESSON_ID", nullable = false)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "STUDENT_ID")
    private User student;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "TUTOR_ID")
    private Tutor tutor;

    @Column(name = "LESSON_DATE", nullable = false)
    private String lessonDate;

    @Column(name = "SUBJECT", nullable = false)
    private String subject;

    @Column(name = "LEVEL", nullable = false)
    private String level;

    @Column(name = "MODE", nullable = false)
    private String mode;

    @Column(name = "CITY")
    private String city;

    @Column(name = "START_TIME", nullable = false)
    private String startTime;
}


