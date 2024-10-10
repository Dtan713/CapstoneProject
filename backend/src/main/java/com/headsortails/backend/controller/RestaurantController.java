package com.headsortails.backend.controller;


import com.headsortails.backend.common.RestaurantRepository;
import com.headsortails.backend.model.Restaurant; // Ensure you have a Restaurant model
// import com.headsortails.backend.service.RestaurantService; // Ensure you have a RestaurantService
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;


@RestController
@RequestMapping("/restaurants") // Use @RequestMapping for the base path
@CrossOrigin
public class RestaurantController {

    @Autowired
    private RestaurantRepository restaurantRepository;

    @GetMapping
    public List<Restaurant> getAllRestaurants() {
        return restaurantRepository.findAll();
    }


    @PostMapping
    public Restaurant addRestaurant(@RequestBody Restaurant restaurant) {
        return restaurantRepository.save(restaurant);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Restaurant> updateRestaurant(@PathVariable Long id, @RequestBody Restaurant restaurantDetails) {
        Restaurant restaurant = restaurantRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Restaurant not found with id " + id));

        restaurant.setName(restaurantDetails.getName());
        restaurant.setSpecialty(restaurantDetails.getSpecialty());
        restaurant.setAddress(restaurantDetails.getAddress());
        restaurant.setDescription(restaurantDetails.getDescription());
        restaurant.setImage(restaurantDetails.getImage());

        Restaurant updatedRestaurant = restaurantRepository.save(restaurant);
        return ResponseEntity.ok(updatedRestaurant);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteRestaurant(@PathVariable Long id) {
        Restaurant restaurant = restaurantRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Restaurant not found with id " + id));

        restaurantRepository.delete(restaurant);
        return ResponseEntity.noContent().build();
    }








}