package com.edufusion.edufusion.dto;

public class AuthenticationRequest {

    private String email;
    private String password;

    // standard getters and setters
    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
