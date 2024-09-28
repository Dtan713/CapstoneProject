package com.headsortails.backend.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

import java.time.LocalDate;

@AllArgsConstructor
@Data
@NoArgsConstructor
@Entity
public class PlanToGo {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

   @Column(name = "user_id", nullable = false)
    private long userId;

    @Column(name = "restaurant_id", nullable = false)
    private long restaurantId;


    private String plannedDate;
    private String notes;
    private Boolean visited = false;

    public PlanToGo(Long userId, Long restaurantId, String plannedDate, String notes, Boolean visited) {
        this.userId = userId;
        this.restaurantId = restaurantId;
        this.plannedDate = plannedDate;
        this.notes = notes;
        this.visited = visited;
    }
}