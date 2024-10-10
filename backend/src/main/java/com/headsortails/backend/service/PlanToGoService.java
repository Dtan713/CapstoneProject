package com.headsortails.backend.service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.headsortails.backend.common.PlanToGoRepository;
import com.headsortails.backend.common.RestaurantRepository;
import com.headsortails.backend.common.UserRepository;
import com.headsortails.backend.model.PlanToGo;
import com.headsortails.backend.model.Restaurant;
import com.headsortails.backend.model.User;


@Service
public class PlanToGoService {
    @Autowired
    private PlanToGoRepository planToGoRepository;

    @Autowired
    private UserRepository userRepository;

    
    @Autowired
    private RestaurantRepository restaurantRepository;


    public List<PlanToGo> getPlansForUser(Long userId){
        return planToGoRepository.findByUserId(userId);
    }

    public List<PlanToGo> getAllPlans(){
        return planToGoRepository.findAll();
    }




    public PlanToGo addPlan(Long userId, Long restaurantId, PlanToGo planToGo){
//        Optional<User> user = userRepository.findById(userId);
//
//        Optional<Restaurant> restaurant = restaurantRepository.findById(restaurantId);
//       planToGo.setUserId(user.get().getId());
//       planToGo.setRestaurantId(restaurant.get().getId());

       return planToGoRepository.save(planToGo);
    }

    public void markAsVisited(Long planId){
        PlanToGo plan = planToGoRepository.findById(planId).orElse(null);

        plan.setVisited(true);

        planToGoRepository.save(plan);
    }


    public void deletePlan (Long planId){
        PlanToGo plan = planToGoRepository.findById(planId).orElse(null);

        planToGoRepository.delete(plan);
    }


    public ResponseEntity<?> editPlan(Long id, PlanToGo updatedPlanToGo) {
        Optional<PlanToGo> existingPlan = Optional.ofNullable(planToGoRepository.findById(id).orElse(null));

        if(existingPlan.isPresent()){
            existingPlan.get().setUserId(updatedPlanToGo.getUserId());
            existingPlan.get().setRestaurantId(updatedPlanToGo.getRestaurantId());
            existingPlan.get().setName(updatedPlanToGo.getName());
            existingPlan.get().setSpecialty(updatedPlanToGo.getSpecialty());
            existingPlan.get().setAddress(updatedPlanToGo.getAddress());
            existingPlan.get().setImage(updatedPlanToGo.getImage());
            existingPlan.get().setDescription(updatedPlanToGo.getDescription());
            existingPlan.get().setPlannedDate(updatedPlanToGo.getPlannedDate());
            existingPlan.get().setNotes(updatedPlanToGo.getNotes());
            existingPlan.get().setVisited(updatedPlanToGo.getVisited());

   
        return ResponseEntity.ok().body( planToGoRepository.save(existingPlan.get()));
        }
        return ResponseEntity.ok().body( "Plan not found");
    }

    public List<Restaurant> getRestaurantsByUserId(Long userId) {
    
        List<PlanToGo> plans = planToGoRepository.findByUserId(userId);

        return plans.stream()
                .map(plan -> restaurantRepository.findById(plan.getRestaurantId()) 
                        .orElse(null)) 
                .filter(restaurant -> restaurant != null) 
                .collect(Collectors.toList());
    }
}


