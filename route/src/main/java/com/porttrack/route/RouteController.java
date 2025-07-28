package com.porttrack.route;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.http.ResponseEntity;

@RestController
public class RouteController {

    @GetMapping("/route")
    public ResponseEntity<String> hello() {
        return ResponseEntity.ok("Hello from route microservice!");
    }
}