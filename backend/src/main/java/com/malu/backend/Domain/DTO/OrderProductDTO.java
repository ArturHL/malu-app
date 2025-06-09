package com.malu.backend.Domain.DTO;

public class OrderProductDTO {
  private Integer id;

  private Integer orderId;

  private String comment;

  private int quantity;

  private int productId;

  // Getters and Setters

  public Integer getId() {
    return id;
  }

  public void setId(Integer id) {
    this.id = id;
  }

  public Integer getOrderId() {
    return orderId;
  }

  public void setOrderId(Integer orderId) {
    this.orderId = orderId;
  }

  public String getComment() {
    return comment;
  }

  public void setComment(String comment) {
    this.comment = comment;
  }

  public int getQuantity() {
    return quantity;
  }

  public void setQuantity(int quantity) {
    this.quantity = quantity;
  }

  public int getProductId() {
    return productId;
  }

  public void setProductId(int product) {
    this.productId = product;
  }
}
