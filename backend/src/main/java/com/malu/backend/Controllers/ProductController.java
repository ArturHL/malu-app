package com.malu.backend.Controllers;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import com.malu.backend.Domain.DTO.ProductDTO;
import com.malu.backend.Domain.Services.ProductService;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/product")
public class ProductController {
  @Autowired
  private ProductService service;

  @GetMapping("/all")
  public ResponseEntity<List<ProductDTO>> getAll(){
    return new ResponseEntity<>(service.getAll().get(), HttpStatus.OK);
  }

  @GetMapping("/{id}")
  public ResponseEntity<ProductDTO> getProductById(@PathVariable("id") int id){
    return service.getProductById(id)
      .map(productDTO -> new ResponseEntity<>(productDTO, HttpStatus.OK))
      .orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
  }

  @GetMapping("/categoryId/{categoryId}")
  public ResponseEntity<List<ProductDTO>> getByCategoryId(@PathVariable("categoryId") int categoryId){
    return new ResponseEntity<>(service.getByCategoryId(categoryId).get(), HttpStatus.OK);
  }

  @PostMapping("/save")
  public ResponseEntity<ProductDTO> save(@RequestBody ProductDTO productDTO){
    return new ResponseEntity<>(service.save(productDTO), HttpStatus.CREATED);
  }

  @DeleteMapping("/{id}")
  public ResponseEntity<ProductDTO> deleteById(@PathVariable("id") int id){
    return service.deleteById(id)
      .map(productDTO -> new ResponseEntity<>(productDTO, HttpStatus.OK))
      .orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
  }

  @PutMapping("/{id}")
  public ResponseEntity<ProductDTO> updateById(@PathVariable("id") int id, @RequestBody ProductDTO productDTO){
    return service.updateById(id, productDTO)
      .map(productDTO1 -> new ResponseEntity<>(productDTO1, HttpStatus.OK))
      .orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
  }

}
