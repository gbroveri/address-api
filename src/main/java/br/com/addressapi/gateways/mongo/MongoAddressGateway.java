package br.com.addressapi.gateways.mongo;

import br.com.addressapi.entities.Address;
import br.com.addressapi.gateways.AddressGateway;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Profile;
import org.springframework.stereotype.Component;

import java.util.Collection;

/**
 * Created by gbroveri on 29/06/15.
 */
@Component
@Profile("dev")
public class MongoAddressGateway implements AddressGateway {

    @Autowired
    private MongoAddressRepository repository;

    @Override
    public Address findAddressByZipCode(String zipCode) {
        return repository.findOneByZipCode(zipCode);
    }

    @Override
    public void delete(Address address) {
        repository.delete(address);
    }

    @Override
    public Address save(Address address) {
        return repository.save(address);
    }

    @Override
    public Collection<Address> findAll() {
        return repository.findAll();
    }

    @Override
    public Address findById(String id) {
        return repository.findOne(id);
    }
}
