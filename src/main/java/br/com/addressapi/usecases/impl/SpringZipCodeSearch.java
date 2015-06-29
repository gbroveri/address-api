package br.com.addressapi.usecases.impl;

import br.com.addressapi.entities.Address;
import br.com.addressapi.entities.ApiError;
import br.com.addressapi.gateways.AddressGateway;
import br.com.addressapi.usecases.ZipCodeSearch;
import br.com.addressapi.usecases.exceptions.BusinessException;
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
    public Address findAddressByZipCode(final String zipCode) throws BusinessException {
        validateZipCode(zipCode);
        StringBuilder searchZipCode = new StringBuilder(zipCode);
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
        return address;
    }

    private void validateZipCode(final String zipCode) throws BusinessException {
        final String onlyDigits = zipCode.replaceAll("\\D", "");
        if (StringUtils.isEmpty(onlyDigits) || onlyDigits.length() != 8) {
            final ApiError apiError = new ApiError("CPF invalido", "zipCode.invalid");
            throw new BusinessException(new HashSet<>(Arrays.asList(apiError)));
        }
    }


}
