package br.com.addressapi.usecases.impl;

import br.com.addressapi.entities.Address;
import br.com.addressapi.gateways.AddressGateway;
import br.com.addressapi.usecases.AddressDelete;
import br.com.addressapi.usecases.AddressRead;
import br.com.addressapi.usecases.exceptions.NotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * Created by groveri on 29/06/15.
 */
@Service
public class SpringAddressDelete implements AddressDelete {
    @Autowired
    private AddressGateway addressGateway;

    @Autowired
    private AddressRead addressRead;

    @Override
    public void remove(final String id) throws NotFoundException {
        Address address = addressRead.findById(id);
        addressGateway.delete(address);
    }
}
