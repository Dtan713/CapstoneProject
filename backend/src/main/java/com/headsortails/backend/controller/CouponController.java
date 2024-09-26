package com.headsortails.backend.controller;

import com.headsortails.backend.common.CouponRepository;
import com.headsortails.backend.model.Coupon;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

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

    


    }









