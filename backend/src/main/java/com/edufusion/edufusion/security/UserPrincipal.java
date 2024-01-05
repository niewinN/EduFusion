package com.edufusion.edufusion.security;

import com.edufusion.edufusion.model.User;
import lombok.Getter;
import lombok.Setter;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;
import java.util.Collections;

@Getter
@Setter
public class UserPrincipal implements UserDetails {
    private final Long id;
    private final String email;
    private transient final String password; // don't serialize/deserialize
    private final Collection<? extends GrantedAuthority> authorities;

    public UserPrincipal(Long id, String email, String password, Collection<? extends GrantedAuthority> authorities) {
        this.id = id;
        this.email = email;
        this.password = password;
        this.authorities = authorities;
    }

    public static UserPrincipal create(User user) {
        GrantedAuthority authority = new SimpleGrantedAuthority(user.getRole().name());
        return new UserPrincipal(
                user.getId(),
                user.getEmail(),
                user.getPassword(),
                Collections.singletonList(authority)
        );
    }

    @Override
    public String getUsername() {
        return email;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true; // Możesz dostosować logikę w zależności od wymagań biznesowych
    }

    @Override
    public boolean isAccountNonLocked() {
        return true; // Możesz dostosować logikę w zależności od wymagań biznesowych
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true; // Możesz dostosować logikę w zależności od wymagań biznesowych
    }

    @Override
    public boolean isEnabled() {
        return true; // Możesz dostosować logikę w zależności od wymagań biznesowych
    }
}


