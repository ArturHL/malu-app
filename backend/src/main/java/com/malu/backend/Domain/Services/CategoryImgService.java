package com.malu.backend.Domain.Services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.malu.backend.Domain.Repositories.CategoryImgRepo;

import java.util.Optional;
import com.malu.backend.Domain.DTO.CategoryImgDTO;

@Service
public class CategoryImgService {
  @Autowired
  private CategoryImgRepo categoryImgRepo;

  public Optional<CategoryImgDTO> getImgByCategoryId(int id) {
    return categoryImgRepo.getImgByCategoryId(id);
  }

  public CategoryImgDTO save(CategoryImgDTO categoryImgDTO) {
    return categoryImgRepo.save(categoryImgDTO);
  }

  public Optional<CategoryImgDTO> deleteByCategoryId(int id) {
    return categoryImgRepo.deleteByCategoryId(id);
  }

  public Optional<CategoryImgDTO> updateByCategoryId(int id, CategoryImgDTO categoryImgDTO) {
    return categoryImgRepo.updateByCategoryId(id, categoryImgDTO);
  }
}
