package com.headsortails.backend.controller;

import com.headsortails.backend.model.Coupon;
import com.headsortails.backend.model.Restaurant; // Ensure you have a Restaurant model
import com.headsortails.backend.service.RestaurantService; // Ensure you have a RestaurantService
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/restaurants") // Use @RequestMapping for the base path
public class RestaurantController {

    @Autowired
    private RestaurantService restaurantService; // Inject the RestaurantService

    @GetMapping
    public List<Restaurant> getAllRestaurants() {
        return restaurantService.getAllRestaurants();
    }




}