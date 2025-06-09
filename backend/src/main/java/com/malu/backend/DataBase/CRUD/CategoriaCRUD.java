package com.malu.backend.DataBase.CRUD;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.malu.backend.DataBase.Entities.Categoria;

public interface CategoriaCRUD extends CrudRepository<Categoria, Integer>{
  
  List<Categoria> findByNombre(String nombre);

}
