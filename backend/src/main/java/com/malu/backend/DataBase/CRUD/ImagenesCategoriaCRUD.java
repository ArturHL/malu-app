package com.malu.backend.DataBase.CRUD;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.malu.backend.DataBase.Entities.ImagenesCategoria;

public interface ImagenesCategoriaCRUD extends CrudRepository<ImagenesCategoria, Integer>{
  
  List<ImagenesCategoria> findByIdCategoria(int id);

}
