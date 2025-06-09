package com.malu.backend.Controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
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

import java.util.List;

import com.malu.backend.Domain.DTO.OrderProductDTO;

import com.malu.backend.Domain.Services.OrderProductService;

@CrossOrigin
@RestController
@RequestMapping("/orderProduct")
public class OrderProductController {
  @Autowired
  private OrderProductService service;

  @GetMapping("/all")
  public ResponseEntity<List<OrderProductDTO>> getAll(){
    return new ResponseEntity<>(service.getAll().get(), HttpStatus.OK);
  }

  @GetMapping("/orderId/{id}")
  public ResponseEntity<List<OrderProductDTO>> getByOrderId(@PathVariable("id") int orderId){
    return new ResponseEntity<>(service.getByOrderId(orderId).get(), HttpStatus.OK);
  }

  @GetMapping("/{id}")
  public ResponseEntity<OrderProductDTO> getOrderProductById(@PathVariable("id") int id){
    return service.getOrderProductById(id)
      .map(orderProductDTO -> new ResponseEntity<>(orderProductDTO, HttpStatus.OK))
      .orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
  }

  @PostMapping("/save")
  public ResponseEntity<OrderProductDTO> save(@RequestBody OrderProductDTO orderProductDTO){
    return new ResponseEntity<>(service.save(orderProductDTO), HttpStatus.CREATED);
  }

  @DeleteMapping("/{id}")
  public ResponseEntity<OrderProductDTO> deleteById(@PathVariable("id") int id){
    return service.deleteById(id)
      .map(orderProductDTO -> new ResponseEntity<>(orderProductDTO, HttpStatus.OK))
      .orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
  }

  @PutMapping("/{id}")
  public ResponseEntity<OrderProductDTO> updateById(@PathVariable("id") int id, @RequestBody OrderProductDTO orderProductDTO){
    return service.updateById(id, orderProductDTO)
      .map(orderProductDTO1 -> new ResponseEntity<>(orderProductDTO1, HttpStatus.OK))
      .orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
  }
}
