package com.headsortails.backend.service;

import com.headsortails.backend.common.UserRepository;
import com.headsortails.backend.model.User;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {

    private final UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    public User registerUser(User user) {
        // Add validation or processing logic here if needed
        return userRepository.save(user);
    }
}
