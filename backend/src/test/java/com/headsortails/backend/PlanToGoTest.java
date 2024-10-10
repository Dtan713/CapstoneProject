package com.headsortails.backend.model;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class PlanToGoTest {

    @Test
    void testDefaultConstructor() {
        PlanToGo plan = new PlanToGo();
        assertNotNull(plan);
        assertNull(plan.getName());
        assertFalse(plan.getVisited());
    }

    @Test
    void testParameterizedConstructor() {
        PlanToGo plan = new PlanToGo(1L, 1L, "2023-12-25", "Some notes", false);
        assertNotNull(plan);
        assertEquals(1L, plan.getUserId());
        assertEquals(1L, plan.getRestaurantId());
        assertEquals("2023-12-25", plan.getPlannedDate());
        assertEquals("Some notes", plan.getNotes());
        assertFalse(plan.getVisited());
    }

    @Test
    void testGettersAndSetters() {
        PlanToGo plan = new PlanToGo();
        plan.setUserId(1L);
        plan.setRestaurantId(2L);
        plan.setName("Dinner");
        plan.setSpecialty("Italian");
        plan.setAddress("123 Main St");
        plan.setImage("image.png");
        plan.setDescription("A nice dinner");
        plan.setPlannedDate("2023-12-25");
        plan.setNotes("No onions");
        plan.setVisited(true);

        assertEquals(1L, plan.getUserId());
        assertEquals(2L, plan.getRestaurantId());
        assertEquals("Dinner", plan.getName());
        assertEquals("Italian", plan.getSpecialty());
        assertEquals("123 Main St", plan.getAddress());
        assertEquals("image.png", plan.getImage());
        assertEquals("A nice dinner", plan.getDescription());
        assertEquals("2023-12-25", plan.getPlannedDate());
        assertEquals("No onions", plan.getNotes());
        assertTrue(plan.getVisited());
    }

    @Test
    void testToString() {
        PlanToGo plan = new PlanToGo(1L, 1L, "2023-12-25", "Some notes", false);
        String expectedString = "PlanToGo(id=null, userId=1, restaurantId=1, name=null, specialty=null, address=null, image=null, description=null, plannedDate=2023-12-25, notes=Some notes, visited=false)";

        assertEquals(expectedString, plan.toString());
    }
}
