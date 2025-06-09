package com.malu.backend.DataBase.Repositories;

import com.malu.backend.DataBase.CRUD.ImagenesUsuarioCRUD;
import com.malu.backend.DataBase.Mappers.UserImgMapper;
import com.malu.backend.Domain.Repositories.UserImgRepo;
import com.malu.backend.DataBase.Entities.ImagenesUsuario;
import com.malu.backend.Domain.DTO.UserImgDTO;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class ImagenesUsuarioRepository implements UserImgRepo{
  @Autowired
  private ImagenesUsuarioCRUD imagenesUsuarioCRUD;
  @Autowired
  private UserImgMapper mapper;

  @Override
  public Optional<UserImgDTO> getImgByUserId(int id) {
    Optional<ImagenesUsuario> imagen = imagenesUsuarioCRUD.findByIdUsuario(id);
    if (imagen.isPresent()) {
      return Optional.of(mapper.toUserImgDTO(imagen.get()));
    }
    return Optional.empty();
  }

  @Override
  public UserImgDTO save(UserImgDTO userImgDTO) {
    ImagenesUsuario imagen = mapper.toImagenesUsuario(userImgDTO);
    return mapper.toUserImgDTO(imagenesUsuarioCRUD.save(imagen));
  }

  @Override
  public Optional<UserImgDTO> deleteByUserId(int id) {
    Optional<ImagenesUsuario> imagen = imagenesUsuarioCRUD.findById(id);
    if (imagen.isPresent()) {
      imagenesUsuarioCRUD.delete(imagen.get());
      return Optional.of(mapper.toUserImgDTO(imagen.get()));
    }
    return Optional.empty();
  }

  @Override
  public Optional<UserImgDTO> updateByUserId(int id, UserImgDTO userImgDTO) {
    Optional<ImagenesUsuario> imagen = imagenesUsuarioCRUD.findById(id);
    if (imagen.isPresent()) {
      ImagenesUsuario imagenToUpdate = imagen.get();
      imagenToUpdate.setUrl(userImgDTO.getUrl());
      return Optional.of(mapper.toUserImgDTO(imagenesUsuarioCRUD.save(imagenToUpdate)));
    }
    return Optional.empty();
  }
}
