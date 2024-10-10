package com.headsortails.backend.controller;

import com.headsortails.DTO.LoginRequest;
import com.headsortails.backend.common.UserRepository;
// import com.headsortails.backend.model.Restaurant;
import com.headsortails.backend.model.User;
import com.headsortails.backend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
import org.springframework.web.bind.annotation.GetMapping;
// import org.springframework.web.bind.annotation.RequestParam;


@RestController
@RequestMapping("/users")
@CrossOrigin
public class UserController {

    @Autowired
    private UserService userService;


    @Autowired
    private UserRepository userRepository;

    @GetMapping
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }


    @PostMapping("/register")
    public ResponseEntity<?> registerUser(@RequestBody User newUser) {
        Optional<User> existingUser = userRepository.findByEmail(newUser.getEmail());

        if (existingUser.isPresent()) {
            return ResponseEntity.ok().body("Email is already in use.");
        }

        Optional<User> registeredUser = Optional.ofNullable(userService.saveUser(newUser));

        if (registeredUser.isPresent()) {
            return ResponseEntity.ok().body(registeredUser);
        } else {
            return ResponseEntity.badRequest().body("An error has occurred during registration.");
        }
    }


    @PostMapping("/login")
    public ResponseEntity<?> loginUser(@RequestBody LoginRequest loginRequest) {
        Optional<User> user = userService.loginUser(loginRequest.getEmail(), loginRequest.getPassword());

        if (user.isPresent()) {
            return ResponseEntity.ok().body("User is now logged");
        } else {
            return ResponseEntity.ok().body("Email or Password is Incorrect");
        }
    }


    @GetMapping("/{id}")
    public User getUserById(@PathVariable Long id) {
        return userRepository.findById(id).orElse(null);
    }

    @GetMapping("/email/{email}")
    public User getUserByEmail(@PathVariable String email) {
        List<User> users = userRepository.findAll();

        return users.stream().filter(user -> user.getEmail().equals(email)).findFirst().get();
    }

  


}