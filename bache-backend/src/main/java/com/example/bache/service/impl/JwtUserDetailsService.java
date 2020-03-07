package com.example.bache.service.impl;

import com.example.bache.model.User;
import com.example.bache.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class JwtUserDetailsService implements UserDetailsService {

    @Autowired
    private UserRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(String s) throws UsernameNotFoundException {
        final List<User> users = userRepository.findByUsernameAnd(s, PageRequest.of(0, 1));
        if (!users.isEmpty()) {
            User user = users.get(0);
            return new org.springframework.security.core.userdetails.User(user.getName(), user.getPassword(), new ArrayList<>());
        } else {
            throw new UsernameNotFoundException("[err] - could not find user.");
        }
    }
}
