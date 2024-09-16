package com.headsortails.backend.controller;


import com.headsortails.backend.common.HeadsRepository;
import com.headsortails.backend.model.Heads;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class TestController {

    private final HeadsRepository headsRepository;

    public TestController(HeadsRepository headsRepository) {
        this.headsRepository = headsRepository;
    }
    @CrossOrigin
    @GetMapping("/test")
    public ResponseEntity<List<Heads>> test() {
        List<Heads> heads = headsRepository.findAll();
        return ResponseEntity.ok(heads);
    }
}
