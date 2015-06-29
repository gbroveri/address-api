package br.com.addressapi.gateways;

import br.com.addressapi.entities.Address;

import java.util.Collection;

/**
 * Created by gbroveri on 28/06/15.
 */
public interface AddressGateway {
    Address findAddressByZipCode(final String zipCode);

    void delete(final Address address);

    Address save(Address address);

    Collection<Address> findAll();

    Address findById(String id);
}
