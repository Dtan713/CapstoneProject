package com.headsortails.backend.service;

import com.headsortails.backend.model.Restaurant;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface RestaurantService {
    List<Restaurant> getAllRestaurants();
}
