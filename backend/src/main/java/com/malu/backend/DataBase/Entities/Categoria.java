package com.malu.backend.DataBase.Entities;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Table;

import java.util.List;

@Entity
@Table(name = "categorias")
public class Categoria {
  
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Column(name = "id_categoria")
  private Integer idCategoria;

  private String nombre;

  // Relations

  @OneToMany(mappedBy = "categoriaImg")
  private List<ImagenesCategoria> imagenesCategoria;

  @OneToMany(mappedBy = "idCategoria")
  private List<Producto> productos;

  // Getters and Setters

  public Integer getIdCategoria() {
    return idCategoria;
  }

  public String getNombre() {
    return nombre;
  }

  public void setIdCategoria(Integer idCategoria) {
    this.idCategoria = idCategoria;
  }

  public void setNombre(String nombre) {
    this.nombre = nombre;
  }
}
