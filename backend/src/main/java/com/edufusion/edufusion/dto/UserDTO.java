package com.edufusion.edufusion.dto;

import lombok.Getter;
import lombok.Setter;

import java.util.Optional;


@Getter
@Setter
public class UserDTO {

    private Optional<String> firstName = Optional.empty();

    private Optional<String> lastName = Optional.empty();

    private Optional<String> email = Optional.empty();

    private Optional<String> phoneNumber = Optional.empty();

    private Optional<String> password = Optional.empty();
//    private String firstName;
//    private String lastName;
//    private String email;
//    private String phoneNumber;
//    private String password;

}

