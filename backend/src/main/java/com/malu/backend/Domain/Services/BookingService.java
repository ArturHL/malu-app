package com.malu.backend.Domain.Services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.malu.backend.Domain.Repositories.BookingRepo;
import com.malu.backend.Domain.DTO.BookingDTO;

import java.util.List;
import java.util.Optional;

@Service
public class BookingService {
  @Autowired
  private BookingRepo bookingRepo;

  public Optional<List<BookingDTO>> getAll(){
    return bookingRepo.getAll();
  }

  public Optional<List<BookingDTO>> getByUserId(int UserId){
    return bookingRepo.getByUserId(UserId);
  }

  public BookingDTO save(BookingDTO bookingDTO){
    return bookingRepo.save(bookingDTO);
  }

  public Optional<BookingDTO> deleteById(int id){
    return bookingRepo.deleteById(id);
  }

  public Optional<BookingDTO> updateById(int id, BookingDTO bookingDTO){
    return bookingRepo.updateById(id, bookingDTO);
  }

}
