package com.malu.backend.Controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.malu.backend.Domain.Services.BookingService;
import com.malu.backend.Domain.DTO.BookingDTO;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/booking")
public class BookingController {
  @Autowired
  private BookingService service;

  @GetMapping("/all")
  public ResponseEntity<List<BookingDTO>> getAll(){
    return new ResponseEntity<>(service.getAll().get(), HttpStatus.OK);
  }

  @GetMapping("/{UserId}")
  public ResponseEntity<List<BookingDTO>> getByUserId(@PathVariable("UserId")int UserId){
    return new ResponseEntity<>(service.getByUserId(UserId).get(), HttpStatus.OK);
  }

  @PostMapping("/save")
  public ResponseEntity<BookingDTO> save(@RequestBody BookingDTO bookingDTO){
    return new ResponseEntity<>(service.save(bookingDTO), HttpStatus.CREATED);
  }

  @DeleteMapping("/{id}")
  public ResponseEntity<BookingDTO> deleteById(@PathVariable("id")int id){
    return service.deleteById(id)
      .map(bookingDTO -> new ResponseEntity<>(bookingDTO, HttpStatus.OK))
      .orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
  }

  @PutMapping("/{id}")
  public ResponseEntity<BookingDTO> updateById(@PathVariable("id")int id, @RequestBody BookingDTO bookingDTO){
    return service.updateById(id, bookingDTO)
      .map(bookingDTO1 -> new ResponseEntity<>(bookingDTO1, HttpStatus.OK))
      .orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
  }

}
