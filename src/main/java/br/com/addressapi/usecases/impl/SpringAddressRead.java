package br.com.addressapi.usecases.impl;

import br.com.addressapi.entities.Address;
import br.com.addressapi.gateways.AddressGateway;
import br.com.addressapi.usecases.AddressRead;
import br.com.addressapi.usecases.exceptions.NotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * Created by groveri on 29/06/15.
 */
@Service
public class SpringAddressRead implements AddressRead {
    @Autowired
    private AddressGateway addressGateway;

    @Override
    public Address findById(final String id) throws NotFoundException {
        Address address = addressGateway.findById(id);
        if (address == null) {
            throw new NotFoundException();
        } else {
            return address;
        }
    }
}
