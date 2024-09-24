package com.headsortails.backend.implement;

import com.headsortails.backend.common.CouponRepository;
import com.headsortails.backend.model.Coupon;
import com.headsortails.backend.service.CouponService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
@RequiredArgsConstructor
public class CouponServiceImplement implements CouponService {
 private final CouponRepository couponRepository;

    public List<Coupon> getAllCoupons() {
        return couponRepository.findAll();
    }
}
