package com.headsortails.backend.common;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.headsortails.backend.model.PlanToGo;

public interface PlanToGoRepository extends JpaRepository<PlanToGo, Long> {
  List<PlanToGo> findByUserId(Long userId);
}
