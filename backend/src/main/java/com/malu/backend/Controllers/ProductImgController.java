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
import com.malu.backend.Domain.DTO.ProductImgDTO;
import com.malu.backend.Domain.Services.ProductImgService;
import org.springframework.http.HttpStatus;

@CrossOrigin
@RestController
@RequestMapping("/productimg")
public class ProductImgController {
  @Autowired
  private ProductImgService service;

  @GetMapping("/{productId}")
  public ResponseEntity<ProductImgDTO> getImgByProductId(@PathVariable("productId") int productId){
    return new ResponseEntity<>(service.getImgByProductId(productId).get(), HttpStatus.OK);
  }

  @PostMapping("/save")
  public ResponseEntity<ProductImgDTO> save(@RequestBody ProductImgDTO productImgDTO){
    return new ResponseEntity<>(service.save(productImgDTO), HttpStatus.CREATED);
  }

  @DeleteMapping("/productId/{productId}")
  public ResponseEntity<ProductImgDTO> deleteByProductId(@PathVariable("productId") int productId){
    return service.deleteByProductId(productId)
      .map(productImgDTO -> new ResponseEntity<>(productImgDTO, HttpStatus.OK))
      .orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
  }

  @PutMapping("/productId/{productId}")
  public ResponseEntity<ProductImgDTO> updateByProductId(@PathVariable("productId") int productId, @RequestBody ProductImgDTO productImgDTO){
    return service.updateByProductId(productId, productImgDTO)
      .map(productImgDTO1 -> new ResponseEntity<>(productImgDTO1, HttpStatus.OK))
      .orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
  }
}
