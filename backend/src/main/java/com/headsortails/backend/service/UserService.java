//package com.headsortails.backend.service;
//
//
//import com.headsortails.backend.common.UserRepository;
//import com.headsortails.backend.model.User;
//
//import org.springframework.beans.factory.annotation.Autowired;
//
//import org.springframework.stereotype.Service;
//
//@Service
//public class UserService {
//
//    @Autowired
//    private UserRepository userRepository;
//
//    @Autowired
//    private BCryptPasswordEncoder passwordEncoder;
//
//    public void registerUser(UserRegistrationDto registration) {
//        // Check if username already exists
//        if (userRepository.findByUsername(registrationDto.getUsername()) != null) {
//            throw new IllegalArgumentException("Username already exists");
//        }
//
//        User user = new User();
//        user.setUsername(registrationDto.getUsername());
//        user.setPassword(passwordEncoder.encode(registrationDto.getPassword())); // Encrypt password
//        user.setEmail(registrationDto.getEmail());
//
//        userRepository.save(user); // Save the user to the database
//    }
//}
