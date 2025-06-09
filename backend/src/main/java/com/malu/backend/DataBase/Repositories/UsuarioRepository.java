package com.malu.backend.DataBase.Repositories;

import com.malu.backend.DataBase.CRUD.UsuarioCRUD;
import com.malu.backend.DataBase.Entities.Usuario;
import com.malu.backend.Domain.Repositories.UserRepo;
import com.malu.backend.Domain.DTO.UserDTO;
import com.malu.backend.DataBase.Mappers.UserMapper;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class UsuarioRepository implements UserRepo{
  @Autowired
  private UsuarioCRUD usuarioCRUD;
  @Autowired
  private UserMapper mapper;

  @Override
  public Optional<List<UserDTO>> getAll() {
    List<Usuario> usuarios = (List<Usuario>) usuarioCRUD.findAll();
    return Optional.of(mapper.toUsersDTOs(usuarios));
  }

  @Override
  public Optional<UserDTO> getUserById(int id) {
    Optional<Usuario> usuario = usuarioCRUD.findById(id);
    if (usuario.isPresent()) {
      return Optional.of(mapper.toUserDTO(usuario.get()));
    }
    return Optional.empty();
  }

  @Override
  public UserDTO save(UserDTO userDTO) {
    Usuario usuario = mapper.toUsuario(userDTO);
    return mapper.toUserDTO(usuarioCRUD.save(usuario));
  }

  @Override
  public Optional<UserDTO> deleteById(int id) {
    Optional<Usuario> usuario = usuarioCRUD.findById(id);
    if (usuario.isPresent()) {
      usuarioCRUD.deleteById(id);
      return Optional.of(mapper.toUserDTO(usuario.get()));
    }
    return Optional.empty();
  }

  @Override
  public Optional<UserDTO> updateById(int id, UserDTO userDTO) {
    Optional<Usuario> usuario = usuarioCRUD.findById(id);
    if (usuario.isPresent()) {
      Usuario usuario2 = mapper.toUsuario(userDTO);
      usuario2.setIdUsuarios(id);
      Usuario usuarioSaved = usuarioCRUD.save(usuario2);
      return Optional.of(mapper.toUserDTO(usuarioSaved));
    }
    return Optional.empty();
  }

  @Override
  public Optional<UserDTO> getUserByEmail(String email) {
    Usuario usuario = usuarioCRUD.findByCorreo(email);
    return Optional.of(mapper.toUserDTO(usuario));
  }

}
