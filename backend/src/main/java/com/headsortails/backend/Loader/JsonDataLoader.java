package com.headsortails.backend.Loader;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.headsortails.backend.common.CouponRepository;
import com.headsortails.backend.common.RegistrationRepository;
import com.headsortails.backend.common.RestaurantRepository;
import com.headsortails.backend.common.UserRepository;
import com.headsortails.backend.model.Coupon;
import com.headsortails.backend.model.Registration;
import com.headsortails.backend.model.Restaurant;
import com.headsortails.backend.model.User;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Configuration;

import java.io.IOException;
import java.io.InputStream;
import java.util.List;

@Configuration
public class JsonDataLoader implements CommandLineRunner {

    private final Logger logger = LoggerFactory.getLogger(JsonDataLoader.class);
    private final CouponRepository couponRepository;
    private final RestaurantRepository restaurantRepository;
    private final UserRepository userRepository;
    private final RegistrationRepository registrationRepository;
    private final ObjectMapper objectMapper;

    public JsonDataLoader(CouponRepository couponRepository, RestaurantRepository restaurantRepository, UserRepository userRepository, RegistrationRepository registrationRepository, ObjectMapper objectMapper) {
        this.couponRepository = couponRepository;
        this.restaurantRepository = restaurantRepository;
        this.userRepository = userRepository;
        this.registrationRepository = registrationRepository;
        this.objectMapper = new ObjectMapper();
    }

    @Override
    public void run(String... args) throws Exception {

        loadCouponData();
        loadRestaurantData();
        loadUserData();
        loadRegistrationData();

    }

    private void loadRegistrationData() {
        if (registrationRepository.count() == 0) {
            try (InputStream inputStream = getClass().getResourceAsStream("/data/registration.json")) {
                List<Registration> registrations = objectMapper.readValue(inputStream, new TypeReference<List<Registration>>() {
                });
                logger.info("Registration loaded from JSON file: {}", registrations);
                registrationRepository.saveAll(registrations);
            } catch (IOException e) {
                logger.error("Unable to load registration data from JSON file", e);
                throw new RuntimeException("Unable to load registration data from JSON file", e);
            }
        } else {
            logger.info("Registration data already loaded");
        }
    }

    private void loadRestaurantData() {
        if (restaurantRepository.count() == 0) {
            try (InputStream inputStream = getClass().getResourceAsStream("/data/restaurant.json")) {
                List<Restaurant> restaurants = objectMapper.readValue(inputStream, new TypeReference<List<Restaurant>>() {
                });
                logger.info("Restaurants loaded from JSON file: {}", restaurants);
                restaurantRepository.saveAll(restaurants);
            } catch (IOException e) {
                logger.error("Unable to load restaurant data from JSON file", e);
                throw new RuntimeException("Unable to load restaurant data from JSON file", e);
            }
        } else {
            logger.info("Restaurant data already loaded");
        }
    }


    private void loadUserData() {
        if (userRepository.count() == 0) {
            try (InputStream inputStream = getClass().getResourceAsStream("/data/users.json")) {
                List<User> users = objectMapper.readValue(inputStream, new TypeReference<List<User>>() {
                });
                logger.info("Users loaded from JSON file: {}", users);
                userRepository.saveAll(users);
            } catch (IOException e) {
                logger.error("Unable to load user data from JSON file", e);
                throw new RuntimeException("Unable to load user data from JSON file", e);
            }
        } else {
            logger.info("User data already loaded");
        }
    }


    private void loadCouponData() {
        if (couponRepository.count() == 0) {
            try (InputStream inputStream = getClass().getResourceAsStream("/data/coupon.json")) {
                List<Coupon> coupons = objectMapper.readValue(inputStream, new TypeReference<List<Coupon>>() {
                });
                logger.info("Coupons loaded from JSON file: {}", coupons);
                couponRepository.saveAll(coupons);
            } catch (IOException e) {
                logger.error("load coupon data from JSON file", e);
                throw new RuntimeException("Unable to load coupon data from JSON file", e);
            }
        } else {
            logger.info("Coupon data already loaded");
        }

    }
}




