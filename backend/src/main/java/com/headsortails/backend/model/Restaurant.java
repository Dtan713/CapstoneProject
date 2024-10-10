package com.headsortails.backend.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;




@AllArgsConstructor
@Data
@NoArgsConstructor
@Entity
@Table(name = "restaurant")
public class Restaurant {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String specialty;
    private String address;
    private String image;
    private String description;


    public Restaurant(String name, String specialty, String address, String image, String description) {
        this.name = name;
        this.specialty = specialty;
        this.address = address;
        this.image = image;
        this.description = description;
    }
}
