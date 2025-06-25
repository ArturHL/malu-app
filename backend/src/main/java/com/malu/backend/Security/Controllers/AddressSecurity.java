package com.malu.backend.Security.Controllers;

import com.malu.backend.Security.CustomUserDetails;
import com.malu.backend.Domain.DTO.AddressDTO;
import com.malu.backend.Domain.Services.AddressService;

import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;

import java.util.Optional;

@Component("addressSecurity")
public class AddressSecurity {

    private final AddressService addressService;

    public AddressSecurity(AddressService addressService) {
        this.addressService = addressService;
    }

    public boolean hasAccessToAddress(int addressId) {
        Optional<AddressDTO> address = addressService.getAddressById(addressId);
        if (address.isEmpty()) return false;

        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        CustomUserDetails userDetails = (CustomUserDetails) auth.getPrincipal();

        int userId = userDetails.getUser().getId();
        String role = userDetails.getUser().getRole();

        return address.get().getIdUser() == userId || role.equalsIgnoreCase("ADMIN");
    }
}


