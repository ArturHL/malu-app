package com.malu.backend.Controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.malu.backend.Domain.Services.OrderService;
import com.malu.backend.Domain.DTO.OrderDTO;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PutMapping;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/order")
public class OrderController {
  @Autowired
  private OrderService service;

  @GetMapping("/all")
  public ResponseEntity<List<OrderDTO>> getAll() {
    return new ResponseEntity<>(service.getAll().get(), HttpStatus.OK);
  }

  @GetMapping("/{id}")
  public ResponseEntity<OrderDTO> getOrderById(@PathVariable("id")int id) {
    return new ResponseEntity<>(service.getOrderById(id).get(), HttpStatus.OK);
  }

  @PostMapping("/save")
  public ResponseEntity<OrderDTO> save(@RequestBody OrderDTO orderDTO) {
    return new ResponseEntity<>(service.save(orderDTO), HttpStatus.CREATED);
  }

  @DeleteMapping("/{id}")
  public ResponseEntity<OrderDTO> deleteById(@PathVariable("id")int id) {
    return service.deleteById(id)
      .map(orderDTO -> new ResponseEntity<>(orderDTO, HttpStatus.OK))
      .orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
  }

  @GetMapping("/user/{userId}")
  public ResponseEntity<List<OrderDTO>> getByUserId(@PathVariable("userId")int userId) {
    return service.getByUserId(userId)
      .map(orderDTO -> new ResponseEntity<>(orderDTO, HttpStatus.OK))
      .orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
  }

  @GetMapping("/status/{status}")
  public ResponseEntity<List<OrderDTO>> getByStatus(@PathVariable("status")String status) {
    return service.getByStatus(status)
      .map(orderDTO -> new ResponseEntity<>(orderDTO, HttpStatus.OK))
      .orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
  }

  @GetMapping("/date/{date}")
  public ResponseEntity<List<OrderDTO>> getByDate(@PathVariable("date")String date) {
    return service.getByDate(date)
      .map(orderDTO -> new ResponseEntity<>(orderDTO, HttpStatus.OK))
      .orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
  }

  @PutMapping("/status/{id}")
  public ResponseEntity<OrderDTO> updateStatusById(@PathVariable("id")int id, @RequestBody OrderDTO orderDTO) {
    return service.updateStatusById(id, orderDTO.getStatus())
      .map(orderDTO1 -> new ResponseEntity<>(orderDTO1, HttpStatus.OK))
      .orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
  }

}
