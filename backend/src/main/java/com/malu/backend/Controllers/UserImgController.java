package com.malu.backend.Controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PutMapping;
import com.malu.backend.Domain.DTO.UserImgDTO;
import com.malu.backend.Domain.Services.UserImgService;
import org.springframework.http.HttpStatus;

@CrossOrigin
@RestController
@RequestMapping("/userimg")
public class UserImgController {
  @Autowired
  private UserImgService service;

  @GetMapping("/{userId}")
  public ResponseEntity<UserImgDTO> getImgByUserId(@PathVariable("userId") int userId){
    return service.getImgByUserId(userId)
      .map(userImgDTO -> new ResponseEntity<>(userImgDTO, HttpStatus.OK))
      .orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
  }

  @PostMapping("/save")
  public ResponseEntity<UserImgDTO> save(@RequestBody UserImgDTO userImgDTO){
    return new ResponseEntity<>(service.save(userImgDTO), HttpStatus.CREATED);
  }

  @DeleteMapping("/{userId}")
  public ResponseEntity<UserImgDTO> deleteByUserId(@PathVariable("userId") int userId){
    return service.deleteByUserId(userId)
      .map(userImgDTO -> new ResponseEntity<>(userImgDTO, HttpStatus.OK))
      .orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
  }

  @PutMapping("/{userId}")
  public ResponseEntity<UserImgDTO> updateByUserId(@PathVariable("userId") int userId, @RequestBody UserImgDTO userImgDTO){
    return service.updateByUserId(userId, userImgDTO)
      .map(userImgDTO1 -> new ResponseEntity<>(userImgDTO1, HttpStatus.OK))
      .orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
  }
}
