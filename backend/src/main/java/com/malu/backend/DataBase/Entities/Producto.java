package com.malu.backend.DataBase.Entities;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Table;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;

import java.util.List;

@Entity
@Table(name = "productos")
public class Producto {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Column(name = "id_producto")
  private Integer idProducto;

  private String nombre;

  @Column(name = "id_categoria")
  private Integer idCategoria;

  // ✅ Renombrado a "existencia" y mantenido como Boolean
  private Boolean existencia;

  private Integer precio;

  private String descripcion;

  // Relations

  @OneToMany(mappedBy = "productoImg")
  private List<ImagenesProducto> imagenesProducto;

  @ManyToOne
  @JoinColumn(name = "id_categoria", insertable = false, updatable = false)
  private Categoria categoria;

  @OneToMany(mappedBy = "productoOrden")
  private List<ProductosOrden> productosOrden;

  // Getters and Setters

  public Integer getIdProducto() {
    return idProducto;
  }

  public String getNombre() {
    return nombre;
  }

  public Integer getCategoria() {
    return idCategoria;
  }

  public Boolean getExistencia() {
    return existencia;
  }

  public Integer getPrecio() {
    return precio;
  }

  public String getDescripcion() {
    return descripcion;
  }

  public void setIdProducto(Integer idProducto) {
    this.idProducto = idProducto;
  }

  public void setNombre(String nombre) {
    this.nombre = nombre;
  }

  public void setCategoria(Integer categoria) {
    this.idCategoria = categoria;
  }

  public void setExistencia(Boolean existencia) {
    this.existencia = existencia;
  }

  public void setPrecio(Integer precio) {
    this.precio = precio;
  }

  public void setDescripcion(String descripcion) {
    this.descripcion = descripcion;
  }
}