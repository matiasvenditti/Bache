package com.example.bache.controller;

import com.example.bache.exception.EntityNotFoundException;
import com.example.bache.exception.InvalidCredentialsException;
import com.example.bache.model.jwt.JwtRequest;
import com.example.bache.model.jwt.JwtResponse;
import com.example.bache.service.impl.JwtUserDetailsService;
import com.example.bache.util.JwtTokenUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.DisabledException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class JwtAuthenticationController {

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private JwtTokenUtil jwtTokenUtil;

    @Autowired
    private JwtUserDetailsService jwtUserDetailsService;

    @PostMapping(path = "authenticate")
    public ResponseEntity<?> createAuthenticationToken(@RequestBody JwtRequest credentials) throws Exception{
        try {
            authenticate(credentials.getUsername(), credentials.getPassword());
            UserDetails user = jwtUserDetailsService.loadUserByUsername(credentials.getUsername());
            final String token = jwtTokenUtil.generateToken(user);
            return ResponseEntity.ok(new JwtResponse(token));
        } catch (EntityNotFoundException e) {
            throw new InvalidCredentialsException();
        }
    }

    private void authenticate(String username, String password) throws Exception {
        try {
            authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(username, password));
        } catch (DisabledException e) {
            throw new Exception("USER_DISABLED", e);
        } catch (BadCredentialsException e) {
            throw new InvalidCredentialsException();
        }
    }

}
