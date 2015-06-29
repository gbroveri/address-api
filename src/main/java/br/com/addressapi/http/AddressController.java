package br.com.addressapi.http;

import br.com.addressapi.entities.Address;
import br.com.addressapi.usecases.exceptions.BusinessException;
import br.com.addressapi.usecases.exceptions.NotFoundException;

import javax.servlet.http.HttpServletResponse;

/**
 * Created by gbroveri on 28/06/15.
 */
public interface AddressController {
    Address findByZipCode(String zipCode) throws BusinessException, NotFoundException;

    Address create(Address address) throws BusinessException;

    Address update(String id, Address address) throws BusinessException, NotFoundException;

    void delete(String id) throws NotFoundException;

    Address findById(String id) throws BusinessException, NotFoundException;
}
