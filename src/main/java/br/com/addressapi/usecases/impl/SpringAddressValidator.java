package br.com.addressapi.usecases.impl;

import br.com.addressapi.entities.Address;
import br.com.addressapi.usecases.AddressValidation;
import br.com.addressapi.usecases.exceptions.BusinessException;
import org.springframework.validation.beanvalidation.LocalValidatorFactoryBean;

import javax.validation.ConstraintViolation;
import javax.validation.Validator;
import java.util.Set;

/**
 * Created by groveri on 29/06/15.
 */
public abstract class SpringAddressValidator implements AddressValidation {
    protected abstract LocalValidatorFactoryBean getValidatorFactory();

    @Override
    public void validate(Address address) throws BusinessException {
        final Validator validator = getValidatorFactory().getValidator();
        final Set<ConstraintViolation<Address>> violations = validator.validate(address);
        if (!violations.isEmpty())
            throw new BusinessException(violations);
    }
}
