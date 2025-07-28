package com.porttrack.boat;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.http.ResponseEntity;

@RestController
public class BoatController {

    @GetMapping("/boat")
    public ResponseEntity<String> hello() {
        return ResponseEntity.ok("Hello from boat microservice!");
    }
}