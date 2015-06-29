package br.com.addressapi.gateways;

import br.com.addressapi.entities.Address;
import org.springframework.stereotype.Component;

import java.util.Collection;

/**
 * Created by gbroveri on 28/06/15.
 */
@Component
public class InMemoryAddressGateway extends GatewayUtilities<Address> implements AddressGateway {

    @Override
    public Address findAddressByZipCode(String zipCode) {
        for (Address address : getEntities()) {
            if (address.getZipCode().equalsIgnoreCase(zipCode)) {
                return address;
            }
        }
        return null;
    }

    @Override
    public Collection<Address> findAll() {
        return getEntities();
    }
}
