package com.edufusion.edufusion.dto;

import com.edufusion.edufusion.model.User;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class UserResponse {
    private User user;
    private String token;

    public UserResponse(User user, String token) {
        this.user = user;
        this.token = token;
    }
}

