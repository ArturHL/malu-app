package com.malu.backend.Domain.Repositories;

import com.malu.backend.Domain.DTO.AddressDTO;

import java.util.List;
import java.util.Optional;

public interface AddressRepo {
  Optional<List<AddressDTO>> getAll();
  Optional<List<AddressDTO>> getAllByUserId(int UserId);
  Optional<AddressDTO> getAddressById(int id);
  AddressDTO save(AddressDTO addressDTO);
  Optional<AddressDTO> deleteById(int id);
  Optional<AddressDTO> updateById(int id, AddressDTO addressDTO);
}
