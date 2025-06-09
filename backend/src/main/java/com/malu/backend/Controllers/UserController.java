package com.malu.backend.Controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PutMapping;
import com.malu.backend.Domain.DTO.UserDTO;
import com.malu.backend.Domain.Services.UserService;
import org.springframework.http.HttpStatus;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/user")
public class UserController {
  @Autowired
  private UserService service;

  @GetMapping("/all")
  public ResponseEntity<List<UserDTO>> getAll(){
    return new ResponseEntity<>(service.getAll().get(), HttpStatus.OK);
  }

  @GetMapping("/{id}")
  public ResponseEntity<UserDTO> getUserById(@PathVariable("id") int id){
    return service.getUserById(id)
      .map(userDTO -> new ResponseEntity<>(userDTO, HttpStatus.OK))
      .orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
  }

  @PostMapping("/save")
  public ResponseEntity<UserDTO> save(@RequestBody UserDTO userDTO){
    return new ResponseEntity<>(service.save(userDTO), HttpStatus.CREATED);
  }

  @DeleteMapping("/{id}")
  public ResponseEntity<UserDTO> deleteById(@PathVariable("id") int id){
    return service.deleteById(id)
      .map(userDTO -> new ResponseEntity<>(userDTO, HttpStatus.OK))
      .orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
  }

  @PutMapping("/{id}")
  public ResponseEntity<UserDTO> updateById(@PathVariable("id") int id, @RequestBody UserDTO userDTO){
    return service.updateById(id, userDTO)
      .map(userDTO1 -> new ResponseEntity<>(userDTO1, HttpStatus.OK))
      .orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
  }

  @GetMapping("/email/{email}")
  public ResponseEntity<UserDTO> getUserByEmail(@PathVariable("email") String email){
    return service.getUserByEmail(email)
      .map(userDTO -> new ResponseEntity<>(userDTO, HttpStatus.OK))
      .orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
  }
}
