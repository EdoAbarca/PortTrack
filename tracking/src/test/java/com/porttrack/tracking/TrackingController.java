package com.porttrack.tracking;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.http.ResponseEntity;

@RestController
public class TrackingController {

    @GetMapping("/tracking")
    public ResponseEntity<String> hello() {
        return ResponseEntity.ok("Hello from tracking microservice!");
    }
}