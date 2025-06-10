package com.malu.backend.DataBase.Entities;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Table;

import java.util.List;

@Entity
@Table(name = "usuarios")
public class Usuario {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Column(name = "id_usuario")
  private Integer idUsuarios;

  private String nombre;

  private String correo;

  private String telefono;

  private String contrasena;

  // Relations

  @OneToMany(mappedBy = "usuarioImg")
  private List<ImagenesUsuario> imagenesUsuario;

  @OneToMany(mappedBy = "usuarioDireccion")
  private List<Direccion> direcciones;

  @OneToMany(mappedBy = "usuarioReserva")
  private List<Reserva> reservas;

  @OneToMany(mappedBy = "usuarioOrden")
  private List<Orden> ordenes;

  @ManyToOne
  @JoinColumn(name = "id_rol") // FK hacia Rol
  private Rol rol;

  // Getters
  public Integer getIdUsuarios() {
    return idUsuarios;
  }

  public String getNombre() {
    return nombre;
  }

  public String getCorreo() {
    return correo;
  }

  public String getTelefono() {
    return telefono;
  }

  public String getContrasena() {
    return contrasena;
  }

  public Rol getRol() {
    return rol;
  }

  // Setters
  public void setIdUsuarios(Integer idUsuarios) {
    this.idUsuarios = idUsuarios;
  }

  public void setNombre(String nombre) {
    this.nombre = nombre;
  }

  public void setCorreo(String correo) {
    this.correo = correo;
  }

  public void setTelefono(String telefono) {
    this.telefono = telefono;
  }

  public void setContrasena(String contrasena) {
    this.contrasena = contrasena;
  }

  public void setRol(Rol rol) {
    this.rol = rol;
  }

}
