package com.malu.backend.DataBase.Repositories;

import com.malu.backend.DataBase.CRUD.ReservaCRUD;
import com.malu.backend.DataBase.Entities.Reserva;
import com.malu.backend.DataBase.Mappers.BookingMapper;
import com.malu.backend.Domain.Repositories.BookingRepo;
import com.malu.backend.Domain.DTO.BookingDTO;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class ReservaRepository implements BookingRepo{
  @Autowired
  private ReservaCRUD reservaCRUD;
  @Autowired
  private BookingMapper mapper;

  @Override
  public Optional<List<BookingDTO>> getAll() {
    List<Reserva> reservas = (List<Reserva>) reservaCRUD.findAll();
    return Optional.of(mapper.toBookingsDTOs(reservas));
  }

  @Override
  public Optional<List<BookingDTO>> getByUserId(int userId) {
    List<Reserva> reservas = reservaCRUD.findByIdUsuario(userId);
    return Optional.of(mapper.toBookingsDTOs(reservas));
  }

  @Override
  public BookingDTO save(BookingDTO bookingDTO) {
    Reserva reserva = mapper.toReserva(bookingDTO);
    return mapper.toBookingDTO(reservaCRUD.save(reserva));
  }

  @Override
  public Optional<BookingDTO> deleteById(int id) {
    Optional<Reserva> reserva = reservaCRUD.findById(id);
    if (reserva.isPresent()) {
      reservaCRUD.deleteById(id);
      return Optional.of(mapper.toBookingDTO(reserva.get()));
    }
    return Optional.empty();
  }

  @Override
  public Optional<BookingDTO> updateById(int id, BookingDTO bookingDTO) {
    Optional<Reserva> reserva = reservaCRUD.findById(id);
    if (reserva.isPresent()) {
      Reserva reservaToUpdate = reserva.get();
      reservaToUpdate.setIdReserva(id);
      return Optional.of(mapper.toBookingDTO(reservaCRUD.save(reservaToUpdate)));
    }
    return Optional.empty();
  }
}
