
package com.headsortails.backend.controller;

import com.headsortails.backend.model.Registration;
import com.headsortails.backend.service.RegistrationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/Registration")
    public class RegistrationContoller {

    @Autowired
    private RegistrationService registrationService;



    @GetMapping
    public List<Registration> getAllRegistration() {
        return registrationService.getAllRegistrations();
    }


}

