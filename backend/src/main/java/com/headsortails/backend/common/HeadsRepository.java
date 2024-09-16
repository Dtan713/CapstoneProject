package com.headsortails.backend.common;


import com.headsortails.backend.model.Heads;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface HeadsRepository extends JpaRepository<Heads, Integer> {
    List<Heads> findByRarity(String rarity);
    List<Heads> findByType(String type);
}
