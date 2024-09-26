package com.headsortails.backend.common;


import com.headsortails.backend.model.Coupon;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface CouponRepository  extends JpaRepository<Coupon, Integer> {
    List<Coupon> findByCode(String code);
    Optional<Coupon> findById(Integer id);

}
