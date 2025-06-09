package com.malu.backend.DataBase.Repositories;

import com.malu.backend.DataBase.CRUD.CategoriaCRUD;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.malu.backend.DataBase.Entities.Categoria;
import com.malu.backend.DataBase.Mappers.CategoryMapper;
import com.malu.backend.Domain.DTO.CategoryDTO;
import com.malu.backend.Domain.Repositories.CategoryRepo;

@Repository
public class CategoriaRepository implements CategoryRepo {
  @Autowired
  private CategoriaCRUD categoriaCRUD;
  @Autowired
  private CategoryMapper mapper;

  @Override
  public Optional<List<CategoryDTO>> getAll(){
    List<Categoria> categorias = (List<Categoria>) categoriaCRUD.findAll();
    List<CategoryDTO> categories = mapper.toCategoriesDTOs(categorias);
    return Optional.of(categories);
  }

  @Override
  public Optional<CategoryDTO> getCategoryById(int id){
    Optional<Categoria> categoria = categoriaCRUD.findById(id);
    if (categoria.isPresent()) {
      return Optional.of(mapper.toCategoryDTO(categoria.get()));
    }
    return Optional.empty();
  }

  @Override
  public Optional<CategoryDTO> getCategoryByName(String name){
    Categoria categoria = (Categoria) categoriaCRUD.findByNombre(name);
    CategoryDTO category = mapper.toCategoryDTO(categoria);
    return Optional.of(category);
  }

  @Override
  public CategoryDTO save(CategoryDTO categoryDTO){
    Categoria categoria = mapper.toCategoria(categoryDTO);
    Categoria categoriaSaved = categoriaCRUD.save(categoria);
    return mapper.toCategoryDTO(categoriaSaved);
  }

  @Override
  public Optional<CategoryDTO> deleteById(int id){
    Optional<CategoryDTO> category = getCategoryById(id);
    if (category.isPresent()) {
      categoriaCRUD.deleteById(id);
      return category;
    }
    return Optional.empty();
  }

  @Override
  public Optional<CategoryDTO> updateById(int id, CategoryDTO categoryDTO){
    Optional<CategoryDTO> category = getCategoryById(id);
    if (category.isPresent()) {
      Categoria categoria = mapper.toCategoria(categoryDTO);
      categoria.setIdCategoria(id);
      Categoria categoriaUpdated = categoriaCRUD.save(categoria);
      return Optional.of(mapper.toCategoryDTO(categoriaUpdated));
    }
    return Optional.empty();
  }

}
