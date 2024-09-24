package com.headsortails.backend.implement;

import com.headsortails.backend.common.RestaurantRepository;
import com.headsortails.backend.model.Restaurant;
import com.headsortails.backend.service.RestaurantService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
@RequiredArgsConstructor
    public class RestaurantServiceImplement implements RestaurantService {
        private final RestaurantRepository restaurantRepository;

        public List<Restaurant>getAllRestaurants() {
            return restaurantRepository.findAll();
        }
    }

