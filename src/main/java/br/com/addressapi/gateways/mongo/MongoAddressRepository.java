package br.com.addressapi.gateways.mongo;

import br.com.addressapi.entities.Address;
import org.springframework.data.repository.Repository;

import java.util.Collection;

/**
 * Created by gbroveri on 29/06/15.
 */
public interface MongoAddressRepository extends Repository<Address, String> {
    Address findOneByZipCode(final String zipCode);

    void delete(final Address address);

    Address save(Address address);

    Collection<Address> findAll();

    Address findOne(String id);
}
