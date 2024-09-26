package com.headsortails.backend.common;

import com.headsortails.backend.model.Registration;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface RegistrationRepository extends JpaRepository<Registration, Integer> {
  List<Registration> findByPassword(String password);
  Optional<Registration> findById(Integer id);
}
