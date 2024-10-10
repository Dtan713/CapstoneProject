//package com.headsortails.backend.model;
//
//import static org.junit.jupiter.api.Assertions.*;
//
//import org.junit.jupiter.api.BeforeEach;
//import org.junit.jupiter.api.Test;
//
//class PlanToGoTest {
//
//    private PlanToGo planToGo;
//
//    @BeforeEach
//    void setUp() {
//        // Initialize a PlanToGo object before each test
//        planToGo = new PlanToGo(1L, 1L, "2024-12-31", "Dinner with friends", false);
//    }
//
//    @Test
//    void testGetId() {
//        // Test the id getter
//        planToGo.setId(1L);
//        assertEquals(1L, planToGo.getId());
//    }
//
//    @Test
//    void testGetUserId() {
//        assertEquals(1L, planToGo.getUserId());
//    }
//
//    @Test
//    void testGetRestaurantId() {
//        assertEquals(1L, planToGo.getRestaurantId());
//    }
//
//    @Test
//    void testGetPlannedDate() {
//        assertEquals("2024-12-31", planToGo.getPlannedDate());
//    }
//
//    @Test
//    void testGetNotes() {
//        assertEquals("Dinner with friends", planToGo.getNotes());
//    }
//
//    @Test
//    void testIsVisited() {
//        assertFalse(planToGo.getVisited());
//    }
//
//    @Test
//    void testSetVisited() {
//        planToGo.setVisited(true);
//        assertTrue(planToGo.getVisited());
//    }
//
//    @Test
//    void testToString() {
//        String expectedString = "PlanToGo(id=1, userId=1, restaurantId=1, plannedDate=2024-12-31, notes=Dinner with friends, visited=false)";
//        planToGo.setId(1L); // Set the id for the expected string to match
//        assertEquals(expectedString, planToGo.toString());
//    }
//}
