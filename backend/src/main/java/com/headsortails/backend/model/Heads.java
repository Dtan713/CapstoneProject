package com.headsortails.backend.model;


import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@Data
@NoArgsConstructor
@Entity
@Table(name = "Heads")

public class Heads {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String title;
    private String description;
    private String rarity;
    private String type;
    private String image_url;

    @ManyToOne
    @JoinColumn(name = "creator_id", nullable = false)
    private MyAppUser creator;

}
