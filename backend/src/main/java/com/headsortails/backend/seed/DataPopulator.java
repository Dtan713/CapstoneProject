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
             Restaurant restaurant1 = new Restaurant("Tomato", "Italian", "123 Main St", "https://media.istockphoto.com/id/468441873/photo/italian-restaurant.jpg?s=612x612&w=0&k=20&c=yFOnfl0p5shN7nx2FR5ElssYEVXyWcuc77_0CvjAlwg=", "Authentic Italian cuisine with a modern twist.");
             Restaurant restaurant2 = new Restaurant("Sushi World", "Japanese", "456 Ocean Dr", "https://nippondom.com/wp-content/uploads/2019/01/oformlenie-yaponskih-restoranov.jpg", "Fresh sushi made daily.");
             Restaurant restaurant3 = new Restaurant("Spicy Delight", "Indian", "789 Spice Ave", "https://media-cdn.tripadvisor.com/media/photo-s/0e/af/a7/26/store-front.jpg", "Spicy Indian dishes that will ignite your taste buds.");
             Restaurant restaurant4 = new Restaurant("BBQ Palace", "Barbecue", "321 Smoke Blvd", "https://rachelgouk.com/wp-content/uploads/2019/08/chuckville-american-bbq-shanghai-restaurant-11-1024x684.jpg", "Best BBQ in town with slow-cooked meats.");
             Restaurant restaurant5 = new Restaurant("Vegan Feast", "Vegan", "654 Greenway", "https://chathamcommunique.com/wp-content/uploads/2020/04/3Vegan_Crawl52-900x600.jpg", "Delicious and healthy plant-based meals.");
             Restaurant restaurant6 = new Restaurant("Burger Joint", "American", "123 New York", "https://www.habitburger.com/dbcwp/wp-content/uploads/2021/10/in-store.jpg", "Authentic American burgers with all the fixings.");

             restaurantRepository.save(restaurant1);
             restaurantRepository.save(restaurant2);
             restaurantRepository.save(restaurant3);
             restaurantRepository.save(restaurant4);
             restaurantRepository.save(restaurant5);
             restaurantRepository.save(restaurant6);
 
             // Create Users without 'id'
             User user1 = new User("john@example.com", "123");
             User user2 = new User("jane@example.com", "123");
             userRepository.save(user1);
             userRepository.save(user2);
 
             // Create PlanToGo entries without 'id'
//             PlanToGo plan1 = new PlanToGo(1L, 1L, LocalDate.now().plusWeeks(10).toString(), "Birthday dinner", false);
//             PlanToGo plan2 = new PlanToGo(2L, 2L, LocalDate.now().plusWeeks(15).toString(), "Casual lunch", false);
//             PlanToGo plan3 = new PlanToGo(3L, 3L, LocalDate.now().plusWeeks(2).toString(), "Anniversary", true);
//             PlanToGo plan4 = new PlanToGo(4L, 4L, LocalDate.now().plusWeeks(2).toString(), "dinner", true);
//             PlanToGo plan5 = new PlanToGo(5L, 5L, LocalDate.now().plusWeeks(3).toString(), "Lunch", false);
//             PlanToGo plan6 = new PlanToGo(6L, 6L, LocalDate.now().plusWeeks(4).toString(), "Dinner", false);
//
//             planToGoRepository.save(plan1);
//             planToGoRepository.save(plan2);
//             planToGoRepository.save(plan3);
//             planToGoRepository.save(plan4);
//             planToGoRepository.save(plan5);
//             planToGoRepository.save(plan6);

            System.out.println("Sample data populated in the database.");
        } else {
            System.out.println("Database is already populated.");
        }
    }
}
