package br.com.addressapi.usecases;

import br.com.addressapi.usecases.exceptions.NotFoundException;

/**
 * Created by groveri on 29/06/15.
 */
public interface AddressDelete {
    void remove(String id) throws NotFoundException;
}
