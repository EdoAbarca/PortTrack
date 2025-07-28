package com.porttrack.load;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.http.ResponseEntity;

@RestController
public class LoadController {

    @GetMapping("/load")
    public ResponseEntity<String> hello() {
        return ResponseEntity.ok("Hello from load microservice!");
    }
}