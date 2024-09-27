package com.headsortails.backend.controller;

import com.headsortails.backend.common.CouponRepository;
import com.headsortails.backend.model.Coupon;
import com.headsortails.backend.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
//@RequestMapping("/coupon") // Use @RequestMapping for the base path
public class CouponController {

    @Autowired
    CouponRepository couponRepository;

    // http://localhost:8080/coupons
//    GET ALL
    @GetMapping("/coupons")
    public List<Coupon> getAllCoupons() {
        List<Coupon> coupons = couponRepository.findAll();
        return coupons;
    }

    @GetMapping("/coupons/{name}")
    public Coupon getCouponByCuisineName(@PathVariable String name) {
        Optional<Coupon> coupon = couponRepository.findByCuisine(name);
        return coupon.orElse(null);
    }



}








