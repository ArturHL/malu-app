package com.malu.backend.DataBase.Entities;

import java.util.List;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import jakarta.persistence.GenerationType;

@Entity
@Table(name = "direcciones")
public class Direccion {
  
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Column(name = "id_direccion")
  private Integer idDireccion;

  @Column(name = "id_usuario")
  private Integer idUsuario;

  private String calle;

  private String numero;

  @Column(name = "codigo_postal")
  private String codigoPostal;

  private String ciudad;

  private String estado;

  // Relations

  @ManyToOne
  @JoinColumn(name = "id_usuario", insertable = false, updatable = false)
  private Usuario usuarioDireccion;

  @OneToMany(mappedBy = "direccionOrden")
  private List<Orden> direccionOrdenes;

  // Getters and Setters

  public Integer getIdDireccion() {
    return idDireccion;
  }

  public void setIdDireccion(Integer idDireccion) {
    this.idDireccion = idDireccion;
  }

  public Integer getIdUsuario() {
    return idUsuario;
  }

  public void setIdUsuario(Integer idUsuario) {
    this.idUsuario = idUsuario;
  }

  public String getCalle() {
    return calle;
  }

  public void setCalle(String calle) {
    this.calle = calle;
  }

  public String getNumero() {
    return numero;
  }

  public void setNumero(String numero) {
    this.numero = numero;
  }

  public String getCodigoPostal() {
    return codigoPostal;
  }

  public void setCodigoPostal(String codigoPostal) {
    this.codigoPostal = codigoPostal;
  }

  public String getCiudad() {
    return ciudad;
  }

  public void setCiudad(String ciudad) {
    this.ciudad = ciudad;
  }

  public String getEstado() {
    return estado;
  }

  public void setEstado(String estado) {
    this.estado = estado;
  }
}
