package com.headsortails.backend.controller;

import com.headsortails.backend.model.User;
import com.headsortails.backend.service.UserService; // Assuming you have a service for user operations
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/user")
public class UserController {

    private final UserService userService; // Injecting user service

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping
    public List<User> getAllUsers() {
        List<User> users = userService.getAllUsers(); // Assuming this method exists in your UserService
        return users.isEmpty() ? List.of() : users; // Return an empty list if no users found
    }

    @PostMapping("/registration")
    public ResponseEntity<User> registerUser(@RequestBody User user) {
        try {
            User savedUser = userService.registerUser(user); // Assuming this method saves the user
            return new ResponseEntity<>(savedUser, HttpStatus.CREATED); // Return 201 Created status
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR); // Handle errors
        }
    }
}
