package com.headsortails.backend.common;

import com.headsortails.backend.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
    User findByEmail(String email); // Optional: to check for existing email
}
