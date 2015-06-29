package br.com.addressapi.usecases;

import br.com.addressapi.entities.Address;
import br.com.addressapi.usecases.exceptions.BusinessException;

/**
 * Created by gbroveri on 28/06/15.
 */
public interface ZipCodeSearch {
    public Address findAddressByZipCode(String zipCode) throws BusinessException;
}
