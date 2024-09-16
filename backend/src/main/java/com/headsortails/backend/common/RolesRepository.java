package com.headsortails.backend.common;

import com.headsortails.backend.model.Roles;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface RolesRepository extends JpaRepository<Roles, Integer> {
}

