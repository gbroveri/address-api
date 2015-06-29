package br.com.addressapi.http;

import br.com.addressapi.entities.Address;
import br.com.addressapi.usecases.exceptions.BusinessException;

import javax.servlet.http.HttpServletResponse;

/**
 * Created by gbroveri on 28/06/15.
 */
public interface AddressController {
    public Address findByZipCode(String zipCode, HttpServletResponse response) throws BusinessException;
}
