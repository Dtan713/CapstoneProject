package com.headsortails.backend.common;

import com.headsortails.backend.model.Restaurant;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

// import java.util.List;

@Repository
public interface RestaurantRepository  extends JpaRepository<Restaurant, Long> {


}
