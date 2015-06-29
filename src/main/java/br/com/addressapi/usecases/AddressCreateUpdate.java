package br.com.addressapi.usecases;

import br.com.addressapi.entities.Address;
import br.com.addressapi.usecases.exceptions.BusinessException;
import br.com.addressapi.usecases.exceptions.NotFoundException;

/**
 * Created by groveri on 29/06/15.
 */
public interface AddressCreateUpdate {
    Address create(final Address address) throws BusinessException;
    Address update(final String id, final Address address) throws BusinessException, NotFoundException;
}
