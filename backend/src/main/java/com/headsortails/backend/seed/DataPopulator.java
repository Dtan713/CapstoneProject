package com.headsortails.backend.seed;


import com.headsortails.backend.common.PlanToGoRepository;
import com.headsortails.backend.common.RestaurantRepository;
import com.headsortails.backend.common.UserRepository;
import com.headsortails.backend.model.PlanToGo;
import com.headsortails.backend.model.Restaurant;
import com.headsortails.backend.model.User;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.time.LocalDate;

@Component
public class DataPopulator implements CommandLineRunner {

    @Autowired
    private RestaurantRepository restaurantRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PlanToGoRepository planToGoRepository;

    @Override
    public void run(String... args) throws Exception {
        if (restaurantRepository.count() == 0 && userRepository.count() == 0) {
             // Create Restaurants without 'id'
             Restaurant restaurant1 = new Restaurant("Gourmet Heaven", "Italian", "123 Main St", "https://media-cdn.tripadvisor.com/media/photo-s/0c/98/12/12/shopfront.jpg", "Authentic Italian cuisine with a modern twist.");
             Restaurant restaurant2 = new Restaurant("Sushi World", "Japanese", "456 Ocean Dr", "https://nippondom.com/wp-content/uploads/2019/01/oformlenie-yaponskih-restoranov.jpg", "Fresh sushi made daily.");
             Restaurant restaurant3 = new Restaurant("Spicy Delight", "Indian", "789 Spice Ave", "https://media-cdn.tripadvisor.com/media/photo-s/0e/af/a7/26/store-front.jpg", "Spicy Indian dishes that will ignite your taste buds.");
             Restaurant restaurant4 = new Restaurant("BBQ Palace", "Barbecue", "321 Smoke Blvd", "https://media-cdn.tripadvisor.com/media/photo-s/17/be/56/ae/caribbean-grill-store.jpg", "Best BBQ in town with slow-cooked meats.");
             Restaurant restaurant5 = new Restaurant("Vegan Feast", "Vegan", "654 Greenway", "https://chathamcommunique.com/wp-content/uploads/2020/04/3Vegan_Crawl52-900x600.jpg", "Delicious and healthy plant-based meals.");
 
             restaurantRepository.save(restaurant1);
             restaurantRepository.save(restaurant2);
             restaurantRepository.save(restaurant3);
             restaurantRepository.save(restaurant4);
             restaurantRepository.save(restaurant5);
 
             // Create Users without 'id'
             User user1 = new User("john@example.com", "123");
             User user2 = new User("jane@example.com", "123");
             userRepository.save(user1);
             userRepository.save(user2);
 
             // Create PlanToGo entries without 'id'
             PlanToGo plan1 = new PlanToGo(1L, 1L, LocalDate.now().plusDays(10).toString(), "Birthday dinner", false);
             PlanToGo plan2 = new PlanToGo(1L, 2L, LocalDate.now().plusDays(15).toString(), "Casual lunch", false);
             PlanToGo plan3 = new PlanToGo(1L, 3L, LocalDate.now().plusWeeks(2).toString(), "Anniversary dinner", true);
 

            planToGoRepository.save(plan1);
            planToGoRepository.save(plan2);
            planToGoRepository.save(plan3);

            System.out.println("Sample data populated in the database.");
        } else {
            System.out.println("Database is already populated.");
        }
    }
}
