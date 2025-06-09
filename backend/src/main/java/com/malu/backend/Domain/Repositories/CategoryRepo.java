package com.malu.backend.Domain.Repositories;

import java.util.List;
import java.util.Optional;

import com.malu.backend.Domain.DTO.CategoryDTO;

public interface CategoryRepo {
  Optional<List<CategoryDTO>> getAll();
  Optional<CategoryDTO> getCategoryById(int id);
  Optional<CategoryDTO> getCategoryByName(String name);
  CategoryDTO save(CategoryDTO categoryDTO);
  Optional<CategoryDTO> deleteById(int id);
  Optional<CategoryDTO> updateById(int id, CategoryDTO categoryDTO);
}
