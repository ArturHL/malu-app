package com.malu.backend.Domain.Repositories;

import java.util.Optional;

import com.malu.backend.Domain.DTO.UserImgDTO;

public interface UserImgRepo {
  Optional<UserImgDTO> getImgByUserId(int id);
  UserImgDTO save(UserImgDTO userImgDTO);
  Optional<UserImgDTO> deleteByUserId(int id);
  Optional<UserImgDTO> updateByUserId(int id, UserImgDTO userImgDTO);
}
