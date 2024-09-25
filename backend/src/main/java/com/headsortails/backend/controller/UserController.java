package com.headsortails.backend.controller;

import com.headsortails.backend.model.User;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/user")
public class UserController {


    @GetMapping
    public List<User> getAllUsers() {
        List<User> users = getAllUsers();
        if (users.isEmpty()) {

            return users;
        }
        return users;
    }
}
