package br.com.addressapi.usecases.impl;

import br.com.addressapi.entities.Address;
import br.com.addressapi.entities.ApiError;
import br.com.addressapi.gateways.AddressGateway;
import br.com.addressapi.usecases.ZipCodeSearch;
import br.com.addressapi.usecases.exceptions.BusinessException;
import br.com.addressapi.usecases.exceptions.NotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;

import java.util.Arrays;
import java.util.HashSet;

/**
 * Created by gbroveri on 28/06/15.
 */
@Service
public class SpringZipCodeSearch implements ZipCodeSearch {

    @Autowired
    private AddressGateway addressGateway;

    @Override
    public Address findAddressByZipCode(final String zipCode) throws BusinessException, NotFoundException {
        String zipCodeDigits = zipCode.replaceAll("\\D", "");
        validateZipCode(zipCodeDigits);
        StringBuilder searchZipCode = new StringBuilder(zipCodeDigits);
        Address address = null;
        address = addressGateway.findAddressByZipCode(searchZipCode.toString());
        if (address == null) {
            //loop until find or zip code == 00000000
            for (int i = searchZipCode.length() - 1; i >= 0; i--) {
                if (searchZipCode.charAt(i) != '0') {
                    searchZipCode.setCharAt(i, '0');
                    address = addressGateway.findAddressByZipCode(searchZipCode.toString());
                    if (address != null) {
                        break;
                    }
                }
            }
        }
        //if address is still null throw not found
        if (address == null) {
            throw new NotFoundException();
        }
        return address;
    }

    private void validateZipCode(final String zipCodeDigits) throws BusinessException {
        if (StringUtils.isEmpty(zipCodeDigits) || zipCodeDigits.length() != 8) {
            final ApiError apiError = new ApiError("CPF invalido", "zipCode.invalid");
            throw new BusinessException(new HashSet<>(Arrays.asList(apiError)));
        }
    }


}
