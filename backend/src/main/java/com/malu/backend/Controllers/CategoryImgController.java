package com.malu.backend.Controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.malu.backend.Domain.Services.CategoryImgService;
import com.malu.backend.Domain.DTO.CategoryImgDTO;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;

@CrossOrigin
@RestController
@RequestMapping("/categoryimg")
public class CategoryImgController {
  @Autowired
  private CategoryImgService service;

  @GetMapping("/{id}")
  public ResponseEntity<CategoryImgDTO> getImgByCategoryId(@PathVariable("id")int id) {
    return new ResponseEntity<>(service.getImgByCategoryId(id).get(), HttpStatus.OK);
  }

  @PostMapping("/save")
  public ResponseEntity<CategoryImgDTO> save(@RequestBody CategoryImgDTO categoryImgDTO) {
    return new ResponseEntity<>(service.save(categoryImgDTO), HttpStatus.CREATED);
  }

  @DeleteMapping("/{id}")
  public ResponseEntity<CategoryImgDTO> deleteByCategoryId(@PathVariable("id")int id) {
    return service.deleteByCategoryId(id)
      .map(categoryImgDTO -> new ResponseEntity<>(categoryImgDTO, HttpStatus.OK))
      .orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
  }

  @PutMapping("/{id}")
  public ResponseEntity<CategoryImgDTO> updateByCategoryId(@PathVariable("id")int id, @RequestBody CategoryImgDTO categoryImgDTO) {
    return service.updateByCategoryId(id, categoryImgDTO)
      .map(categoryImgDTO1 -> new ResponseEntity<>(categoryImgDTO1, HttpStatus.OK))
      .orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
  }
}
