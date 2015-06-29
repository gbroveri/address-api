package br.com.addressapi.usecases.impl;

import br.com.addressapi.entities.Address;
import br.com.addressapi.gateways.AddressGateway;
import br.com.addressapi.usecases.AddressCreateUpdate;
import br.com.addressapi.usecases.AddressRead;
import br.com.addressapi.usecases.exceptions.BusinessException;
import br.com.addressapi.usecases.exceptions.NotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.validation.beanvalidation.LocalValidatorFactoryBean;

/**
 * Created by groveri on 29/06/15.
 */
@Service
public class SpringAddressCreateUpdate extends SpringAddressValidator implements AddressCreateUpdate {

    @Autowired
    private AddressGateway addressGateway;

    @Autowired
    private LocalValidatorFactoryBean validatorFactory;

    @Autowired
    private AddressRead addressRead;

    @Override
    public Address create(final Address address) throws BusinessException {
        validate(address);
        return addressGateway.save(address);
    }

    @Override
    public Address update(String id, Address address) throws BusinessException, NotFoundException {
        Address toUpdate = addressRead.findById(id);
        validate(address);
        toUpdate.setCity(address.getCity());
        toUpdate.setComplement(address.getComplement());
        toUpdate.setNeighborhood(address.getNeighborhood());
        toUpdate.setState(address.getState());
        toUpdate.setStreet(address.getStreet());
        toUpdate.setStreetNumber(address.getStreetNumber());
        toUpdate.setZipCode(address.getZipCode());
        return addressGateway.save(toUpdate);
    }

    @Override
    protected LocalValidatorFactoryBean getValidatorFactory() {
        return validatorFactory;
    }
}
