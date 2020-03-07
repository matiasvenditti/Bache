package com.example.bache.controller;

import com.example.bache.model.PlainTextResponse;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HomeController {

    @GetMapping(path = "/home")
    public PlainTextResponse getReponse() {
        return new PlainTextResponse("Hello World!");
    }
}
