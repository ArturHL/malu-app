package com.malu.backend.Domain.Services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

import com.malu.backend.Domain.Repositories.CategoryRepo;
import com.malu.backend.Domain.DTO.CategoryDTO;

@Service
public class CategoryService {
  @Autowired
  private CategoryRepo categoryRepo;

  public Optional<List<CategoryDTO>> getAll(){
    return categoryRepo.getAll();
  }

  public Optional<CategoryDTO> getCategoryById(int id){
    return categoryRepo.getCategoryById(id);
  }

  public Optional<CategoryDTO> getCategoryByName(String name){
    return categoryRepo.getCategoryByName(name);
  }

  public CategoryDTO save(CategoryDTO categoryDTO){
    return categoryRepo.save(categoryDTO);
  }

  public Optional<CategoryDTO> deleteById(int id){
    return categoryRepo.deleteById(id);
  }

  public Optional<CategoryDTO> updateById(int id, CategoryDTO categoryDTO){
    return categoryRepo.updateById(id, categoryDTO);
  }

}
