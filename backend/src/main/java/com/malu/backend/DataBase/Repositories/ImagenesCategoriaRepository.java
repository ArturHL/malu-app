package com.malu.backend.DataBase.Repositories;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.Optional;

import com.malu.backend.DataBase.CRUD.ImagenesCategoriaCRUD;
import com.malu.backend.DataBase.Entities.ImagenesCategoria;
import com.malu.backend.DataBase.Mappers.CategoryImgMapper;
import com.malu.backend.Domain.DTO.CategoryImgDTO;
import com.malu.backend.Domain.Repositories.CategoryImgRepo;

@Repository
public class ImagenesCategoriaRepository implements CategoryImgRepo{
  @Autowired
  private ImagenesCategoriaCRUD imagenesCategoriaCRUD;
  @Autowired
  private CategoryImgMapper mapper;

  @Override
  public Optional<CategoryImgDTO> getImgByCategoryId(int id){
    Optional<ImagenesCategoria> imagenesCategoria = imagenesCategoriaCRUD.findById(id);
    if (imagenesCategoria.isPresent()) {
      return Optional.of(mapper.toCategoryImgDTO(imagenesCategoria.get()));
    }
    return Optional.empty();
  }

  @Override
  public CategoryImgDTO save(CategoryImgDTO categoryImgDTO){
    ImagenesCategoria imagenesCategoria = mapper.toImagenesCategoria(categoryImgDTO);
    ImagenesCategoria imagenesCategoriaSaved = imagenesCategoriaCRUD.save(imagenesCategoria);
    return mapper.toCategoryImgDTO(imagenesCategoriaSaved);
  }

  @Override
  public Optional<CategoryImgDTO> deleteByCategoryId(int id){
    Optional<CategoryImgDTO> categoryImg = getImgByCategoryId(id);
    if (categoryImg.isPresent()) {
      imagenesCategoriaCRUD.deleteById(id);
      return categoryImg;
    }
    return Optional.empty();
  }

  @Override
  public Optional<CategoryImgDTO> updateByCategoryId(int id, CategoryImgDTO categoryImgDTO){
    Optional<ImagenesCategoria> categoryImg = imagenesCategoriaCRUD.findById(id);
    if (categoryImg.isPresent()) {
      ImagenesCategoria categoryImgToUpdate = categoryImg.get();
      categoryImgToUpdate.setUrl(categoryImgDTO.getUrl());
      return Optional.of(mapper.toCategoryImgDTO(imagenesCategoriaCRUD.save(categoryImgToUpdate)));
    }
    return Optional.empty();
  }
}
