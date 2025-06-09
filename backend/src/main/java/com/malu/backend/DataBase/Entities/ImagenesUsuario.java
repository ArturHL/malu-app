package com.malu.backend.DataBase.Entities;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.persistence.GenerationType;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

@Entity
@Table(name = "imagenes_usuario")
public class ImagenesUsuario {
  
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Column(name = "id_imagen_usuario")
  private Integer idImagenUsuario;

  @Column(name = "id_usuario")
  private Integer idUsuario;

  private String url;

  // Relations

  @ManyToOne
  @JoinColumn(name = "id_usuario", insertable = false, updatable = false)
  private Usuario usuarioImg;

  // Getters
  
  public Integer getIdImagenUsuario() {
    return idImagenUsuario;
  }

  public void setIdImagenUsuario(Integer idImagenUsuario) {
    this.idImagenUsuario = idImagenUsuario;
  }

  public Integer getIdUsuario() {
    return idUsuario;
  }

  // Setters

  public void setIdUsuario(Integer idUsuario) {
    this.idUsuario = idUsuario;
  }

  public String getUrl() {
    return url;
  }

  public void setUrl(String url) {
    this.url = url;
  }
  
}
