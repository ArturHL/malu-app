package com.malu.backend.Domain.Repositories;

import com.malu.backend.Domain.DTO.BookingDTO;

import java.util.List;
import java.util.Optional;

public interface BookingRepo {
  Optional<List<BookingDTO>> getAll();
  Optional<List<BookingDTO>> getByUserId(int userId);
  BookingDTO save(BookingDTO bookingDTO);
  Optional<BookingDTO> deleteById(int id);
  Optional<BookingDTO> updateById(int id, BookingDTO bookingDTO);
}
