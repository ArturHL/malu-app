package com.malu.backend.DataBase.CRUD;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.malu.backend.DataBase.Entities.ProductosOrden;

public interface ProductosOrdenCRUD extends CrudRepository<ProductosOrden, Integer>{

  List<ProductosOrden> findByIdOrden(int id);

}
