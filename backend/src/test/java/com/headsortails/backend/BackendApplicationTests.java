//package com.headsortails.backend.model;
//
//import org.junit.jupiter.api.Test;
//
//import static org.junit.jupiter.api.Assertions.assertEquals;
//
//class RestaurantTest {
//
//	@Test
//	void testRestaurantCreation() {
//		Restaurant restaurant = new Restaurant("Pasta House", "Italian", "123 Pasta St", "image_url", "Best pasta in town");
//
//		assertEquals("Pasta House", restaurant.getName());
//		assertEquals("Italian", restaurant.getSpecialty());
//		assertEquals("123 Pasta St", restaurant.getAddress());
//		assertEquals("image_url", restaurant.getImage());
//		assertEquals("Best pasta in town", restaurant.getDescription());
//	}
//
//	@Test
//	void testNoArgsConstructor() {
//		Restaurant restaurant = new Restaurant();
//		restaurant.setName("Sushi Place");
//		restaurant.setSpecialty("Japanese");
//		restaurant.setAddress("456 Sushi Rd");
//		restaurant.setImage("image_url_sushi");
//		restaurant.setDescription("Fresh sushi daily");
//
//		assertEquals("Sushi Place", restaurant.getName());
//		assertEquals("Japanese", restaurant.getSpecialty());
//		assertEquals("456 Sushi Rd", restaurant.getAddress());
//		assertEquals("image_url_sushi", restaurant.getImage());
//		assertEquals("Fresh sushi daily", restaurant.getDescription());
//	}
//}
//
