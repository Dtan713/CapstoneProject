package com.headsortails.backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.headsortails.backend.model.PlanToGo;
import com.headsortails.backend.model.Restaurant;
import com.headsortails.backend.service.PlanToGoService;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PutMapping;

@RestController
@RequestMapping("/plans")
public class PlanToGoController {

    @Autowired
    private PlanToGoService planToGoService;

    @GetMapping("/user/{userId}")
    public List<PlanToGo> getPlansForUser(@PathVariable Long userId) {
        return planToGoService.getPlansForUser(userId);
    }

    @PostMapping("/add/{userId}/{restaurantId}")
    public PlanToGo addPlan(
            @PathVariable Long userId,
            @PathVariable Long restaurantId,
            @RequestBody PlanToGo planToGo) {

        return planToGoService.addPlan(userId, restaurantId, planToGo);
    }

    @PutMapping("/{planId}/visit")
    public void markAsVisited(@PathVariable Long planId) {
        planToGoService.markAsVisited(planId);

    }

    @DeleteMapping("/delete/{id}")
    public void deletePlan(@PathVariable Long id) {
        planToGoService.deletePlan(id);
    }

    @PutMapping("/edit/{id}")
    public ResponseEntity<?> editPlan(
            @PathVariable Long id,
            @RequestBody PlanToGo updatedPlanToGo) {
        return planToGoService.editPlan(id, updatedPlanToGo);

    }

       @GetMapping("/users/{userId}/restaurants")
    public List<Restaurant> getRestaurantsByUserId(@PathVariable Long userId) {
        return planToGoService.getRestaurantsByUserId(userId);
    }

}
