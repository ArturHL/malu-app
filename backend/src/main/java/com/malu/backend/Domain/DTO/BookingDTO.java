package com.malu.backend.Domain.DTO;

public class BookingDTO {
  private Integer id;

  private Integer userId;

  private String date;
  
  private int attendees;

  private String bookingType;

  // Getters and Setters
  
  public Integer getId() {
    return id;
  }

  public void setId(Integer id) {
    this.id = id;
  }

  public Integer getUserId() {
    return userId;
  }

  public void setUserId(Integer userId) {
    this.userId = userId;
  }

  public String getDate() {
    return date;
  }

  public void setDate(String date) {
    this.date = date;
  }

  public int getAttendees() {
    return attendees;
  }

  public void setAttendees(int attendees) {
    this.attendees = attendees;
  }

  public String getBookingType() {
    return bookingType;
  }

  public void setBookingType(String bookingType) {
    this.bookingType = bookingType;
  }
  
}
