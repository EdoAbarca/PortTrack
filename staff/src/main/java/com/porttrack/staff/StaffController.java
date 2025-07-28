package com.porttrack.staff;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.http.ResponseEntity;

@RestController
public class StaffController {

    @GetMapping("/staff")
    public ResponseEntity<String> hello() {
        return ResponseEntity.ok("Hello from staff microservice!");
    }
}