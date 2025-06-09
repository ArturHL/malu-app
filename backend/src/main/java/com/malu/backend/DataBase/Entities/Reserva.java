package com.malu.backend.DataBase.Entities;

import java.time.LocalDateTime;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Table;

@Entity
@Table(name = "reservas")
public class Reserva {
  
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Column(name = "id_reserva")
  private Integer idReserva;

  @Column(name = "id_usuario")
  private Integer idUsuario;

  private LocalDateTime fecha;

  @Column(name = "personas_asistentes")
  private Integer personasAsistentes;

  @Column(name = "tipo_reserva")
  private String tipoReserva;

  // Relations

  @ManyToOne
  @JoinColumn(name = "id_usuario", insertable = false, updatable = false)
  private Usuario usuarioReserva;

  // Getters and Setters

  public Integer getIdReserva() {
    return idReserva;
  }

  public void setIdReserva(Integer idReserva) {
    this.idReserva = idReserva;
  }

  public Integer getIdUsuario() {
    return idUsuario;
  }

  public void setIdUsuario(Integer idUsuario) {
    this.idUsuario = idUsuario;
  }

  public LocalDateTime getFecha() {
    return fecha;
  }

  public void setFecha(String fecha) {
    this.fecha = LocalDateTime.parse(fecha);
  }

  public Integer getPersonasAsistentes() {
    return personasAsistentes;
  }

  public void setPersonasAsistentes(Integer personasAsistentes) {
    this.personasAsistentes = personasAsistentes;
  }

  public String getTipoReserva() {
    return tipoReserva;
  }

  public void setTipoReserva(String tipoReserva) {
    this.tipoReserva = tipoReserva;
  }
}
