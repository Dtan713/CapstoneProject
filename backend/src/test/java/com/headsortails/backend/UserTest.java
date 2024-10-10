package com.headsortails.backend;

import com.headsortails.backend.model.User;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

public class UserTest {

    @Test
    public void testFullConstructor() {
        User user = new User("test@example.com", "password123");
        assertEquals("test@example.com", user.getEmail());
        assertEquals("password123", user.getPassword());
    }

    @Test
    public void testDefaultConstructor() {
        User user = new User();
        assertNull(user.getEmail());
        assertNull(user.getPassword());
    }

    @Test
    public void testSetterAndGetter() {
        User user = new User();
        user.setEmail("newemail@example.com");
        user.setPassword("newpassword456");

        assertEquals("newemail@example.com", user.getEmail());
        assertEquals("newpassword456", user.getPassword());
    }

    @Test
    public void testEqualsAndHashCode() {
        User user1 = new User("test@example.com", "password123");
        User user2 = new User("test@example.com", "password123");
        assertEquals(user1, user2);
        assertEquals(user1.hashCode(), user2.hashCode());
    }

    @Test
    public void testNotEqualWithDifferentEmail() {
        User user1 = new User("test@example.com", "password123");
        User user2 = new User("other@example.com", "password123");
        assertNotEquals(user1, user2);
    }

    @Test
    public void testNotEqualWithDifferentPassword() {
        User user1 = new User("test@example.com", "password123");
        User user2 = new User("test@example.com", "differentpassword");
        assertNotEquals(user1, user2);
    }

    @Test
    public void testNotEqualWithNull() {
        User user = new User("test@example.com", "password123");
        assertNotEquals(user, null);
    }

    @Test
    public void testNotEqualWithDifferentObjectType() {
        User user = new User("test@example.com", "password123");
        assertNotEquals(user, new Object());
    }
}
