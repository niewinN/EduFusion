//package com.edufusion.edufusion.dto;
//
//import lombok.Getter;
//import lombok.Setter;
//
//import java.util.Optional;
//
//
//@Getter
//@Setter
//public class UserDTO {
//
//    private Optional<String> firstName = Optional.empty();
//
//    private Optional<String> lastName = Optional.empty();
//
//    private Optional<String> email = Optional.empty();
//
//    private Optional<String> phoneNumber = Optional.empty();
//
//    private Optional<String> password = Optional.empty();
////    private String firstName;
////    private String lastName;
////    private String email;
////    private String phoneNumber;
////    private String password;
//
//}
//

package com.edufusion.edufusion.dto;

import com.edufusion.edufusion.model.User;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Optional;

@Getter
@Setter
@NoArgsConstructor
public class UserDTO {

    private Optional<String> firstName;
    private Optional<String> lastName;
    private Optional<String> email;
    private Optional<String> phoneNumber;
    private Optional<String> password;

    // Konstruktor przyjmujący User
    public UserDTO(User user) {
        this.firstName = Optional.ofNullable(user.getFirstName());
        this.lastName = Optional.ofNullable(user.getLastName());
        this.email = Optional.ofNullable(user.getEmail());
        this.phoneNumber = Optional.ofNullable(user.getPhoneNumber());
        this.password = Optional.ofNullable(user.getPassword());
    }

    // Metoda statyczna fabrykująca
    public static UserDTO fromUser(User user) {
        return new UserDTO(user);
    }
}

