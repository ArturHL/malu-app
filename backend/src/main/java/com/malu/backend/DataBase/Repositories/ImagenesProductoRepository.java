package com.malu.backend.DataBase.Repositories;

import com.malu.backend.DataBase.CRUD.ImagenesProductoCRUD;
import com.malu.backend.DataBase.Entities.ImagenesProducto;
import com.malu.backend.Domain.DTO.ProductImgDTO;
import com.malu.backend.Domain.Repositories.ProductImgRepo;
import com.malu.backend.DataBase.Mappers.ProductImgMapper;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class ImagenesProductoRepository implements ProductImgRepo {
  @Autowired
  private ImagenesProductoCRUD imagenesProductoCRUD;
  @Autowired
  private ProductImgMapper mapper;  

  @Override
  public Optional<ProductImgDTO> getProductImgById(int id){
    Optional<ImagenesProducto> imagen = imagenesProductoCRUD.findById(id);
    if (imagen.isPresent()) {
      return Optional.of(mapper.toProductImgDTO(imagen.get()));
    }
    return Optional.empty();
  }

  @Override
  public ProductImgDTO save(ProductImgDTO productImgDTO){
    ImagenesProducto imagen = mapper.toImagenesProducto(productImgDTO);
    return mapper.toProductImgDTO(imagenesProductoCRUD.save(imagen));
  }

  @Override
  public Optional<ProductImgDTO> deleteByProductId(int id){
    Optional<ImagenesProducto> imagen = imagenesProductoCRUD.findById(id);
    if (imagen.isPresent()) {
      imagenesProductoCRUD.delete(imagen.get());
      return Optional.of(mapper.toProductImgDTO(imagen.get()));
    }
    return Optional.empty();
  }

  @Override
  public Optional<ProductImgDTO> updateByProductId(int id, ProductImgDTO productImgDTO){
    Optional<ImagenesProducto> imagen = imagenesProductoCRUD.findById(id);
    if (imagen.isPresent()) {
      ImagenesProducto imagenToUpdate = imagen.get();
      imagenToUpdate.setUrl(productImgDTO.getUrl());
      return Optional.of(mapper.toProductImgDTO(imagenesProductoCRUD.save(imagenToUpdate)));
    }
    return Optional.empty();
  }
}
