package com.malu.backend.DataBase.Repositories;

import com.malu.backend.DataBase.CRUD.ProductoCRUD;
import com.malu.backend.DataBase.Mappers.ProductMapper;
import com.malu.backend.DataBase.Entities.Producto;
import com.malu.backend.Domain.DTO.ProductDTO;
import com.malu.backend.Domain.Repositories.ProductRepo;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class ProductoRepository implements ProductRepo{
  @Autowired
  private ProductoCRUD productoCRUD;
  @Autowired
  private ProductMapper mapper;

  @Override
  public Optional<List<ProductDTO>> getAll(){
    List<Producto> productos = (List<Producto>) productoCRUD.findAll();
    return Optional.of(mapper.toProductsDTOs(productos));
  }

  @Override
  public Optional<ProductDTO> getProductById(int id){
    Optional<Producto> producto = productoCRUD.findById(id);
    if (producto.isPresent()) {
      return Optional.of(mapper.toProductDTO(producto.get()));
    }
    return Optional.empty();
  }

  @Override
  public Optional<List<ProductDTO>> getByCategoryId(int categoryId){
    List<Producto> productos = (List<Producto>) productoCRUD.findByIdCategoriaOrderByPrecioDesc(categoryId);
    return Optional.of(mapper.toProductsDTOs(productos));
  }

  @Override
  public ProductDTO save(ProductDTO productDTO){
    Producto producto = mapper.toProducto(productDTO);
    Producto productoSaved = productoCRUD.save(producto);
    return mapper.toProductDTO(productoSaved);
  }

  @Override
  public Optional<ProductDTO> deleteById(int id){
    Optional<ProductDTO> product = getProductById(id);
    if (product.isPresent()) {
      productoCRUD.deleteById(id);
      return product;
    }
    return Optional.empty();
  }

  @Override
  public Optional<ProductDTO> updateById(int id, ProductDTO productDTO){
    Optional<Producto> product = productoCRUD.findById(id);
    if (product.isPresent()) {
      Producto producto = mapper.toProducto(productDTO);
      producto.setIdProducto(id);
      Producto productoSaved = productoCRUD.save(producto);
      return Optional.of(mapper.toProductDTO(productoSaved));
    }
    return Optional.empty();
  }
}
