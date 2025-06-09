package com.malu.backend.Controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.malu.backend.Domain.Services.CategoryService;
import com.malu.backend.Domain.DTO.CategoryDTO;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/category")
public class CategoryController {
  @Autowired
  private CategoryService service;

  @CrossOrigin
  @GetMapping("/all")
  public ResponseEntity<List<CategoryDTO>> getAll(){
    return new ResponseEntity<>(service.getAll().get(), HttpStatus.OK);
  }

  @GetMapping("/{id}")
  public ResponseEntity<CategoryDTO> getCategoryById(@PathVariable("id")int id){
    return service.getCategoryById(id)
      .map(categoryDTO -> new ResponseEntity<>(categoryDTO, HttpStatus.OK))
      .orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
  }

  @GetMapping("/name/{name}")
  public ResponseEntity<CategoryDTO> getCategoryByName(@PathVariable("name")String name){
    return service.getCategoryByName(name)
      .map(categoryDTO -> new ResponseEntity<>(categoryDTO, HttpStatus.OK))
      .orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
  }

  @PostMapping("/save")
  public ResponseEntity<CategoryDTO> save(@RequestBody CategoryDTO categoryDTO){
    return new ResponseEntity<>(service.save(categoryDTO), HttpStatus.CREATED);
  }

  @DeleteMapping("/{id}")
  public ResponseEntity<CategoryDTO> deleteById(@PathVariable("id")int id){
    return service.deleteById(id)
      .map(categoryDTO -> new ResponseEntity<>(categoryDTO, HttpStatus.OK))
      .orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
  }

  @PutMapping("/{id}")
  public ResponseEntity<CategoryDTO> updateById(@PathVariable("id")int id, @RequestBody CategoryDTO categoryDTO){
    return service.updateById(id, categoryDTO)
      .map(categoryDTO1 -> new ResponseEntity<>(categoryDTO1, HttpStatus.OK))
      .orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
  }
}
