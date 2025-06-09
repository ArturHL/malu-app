package com.malu.backend.Domain.DTO;

public class OrderDTO {
    private Integer id;
    
    private Integer idUser;
    
    private String date;
    
    private String total;
    
    private String status;

    private Integer addressId;

    // Getters and Setters

    public Integer getId() {
      return id;
    }

    public void setId(Integer id) {
      this.id = id;
    }

    public Integer getIdUser() {
      return idUser;
    }

    public void setIdUser(Integer idUser) {
      this.idUser = idUser;
    }

    public String getDate() {
      return date;
    }

    public void setDate(String date) {
      this.date = date;
    }

    public String getTotal() {
      return total;
    }

    public void setTotal(String total) {
      this.total = total;
    }

    public String getStatus() {
      return status;
    }

    public void setStatus(String status) {
      this.status = status;
    }

    public Integer getAddressId() {
      return addressId;
    }

    public void setAddressId(Integer addressId) {
      this.addressId = addressId;
    }

  }
