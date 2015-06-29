package br.com.addressapi.usecases;

import br.com.addressapi.entities.Address;
import br.com.addressapi.usecases.exceptions.BusinessException;

/**
 * Created by groveri on 29/06/15.
 */
public interface AddressValidation {
    void validate(Address address) throws BusinessException;
}
