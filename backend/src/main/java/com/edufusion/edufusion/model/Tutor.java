package com.edufusion.edufusion.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.*;

import java.util.List;
import java.util.Map;
import java.util.Set;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode
@ToString
@Table(name="TUTORS")
public class Tutor {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "TUTOR_ID", nullable = false)
    private Long id;

    @OneToOne
    @JoinColumn(name = "USER_ID", referencedColumnName = "USER_ID")
    @JsonIgnore
    private User user;


    @Column(name = "IMG", nullable = false)
    private String img;

    @Column(name = "DESCRIPTION", nullable = false)
    private String desc;

    @Column(name = "PRICE", nullable = false)
    private String price;

    @Column(name = "SUBJECT", nullable = false)
    private String subject;

    @ElementCollection
    @CollectionTable(name = "TUTOR_LEVELS", joinColumns = @JoinColumn(name = "TUTOR_ID"))
    @Column(name = "LEVEL")
    private List<String> level;

    @ElementCollection
    @CollectionTable(name = "TUTOR_MODES", joinColumns = @JoinColumn(name = "TUTOR_ID"))
    @Column(name = "MODE")
    private List<String> mode;

    @Column(name = "CITY", nullable = false)
    private String city;

    @ElementCollection
    @CollectionTable(
            name = "TUTOR_AVAILABILITY",
            joinColumns = @JoinColumn(name = "TUTOR_ID")
    )
    @MapKeyColumn(name = "DAY_OF_WEEK")
    @Column(name = "AVAILABLE_HOURS")
    private Map<String, List<String>> availability;

    @OneToMany(mappedBy = "tutor")
    @JsonIgnore
//    @JsonBackReference
//    @JsonBackReference("tutor-lesson")
    private Set<Lesson> lessonsAsTutor;

}
