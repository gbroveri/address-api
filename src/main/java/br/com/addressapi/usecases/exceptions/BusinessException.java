package br.com.addressapi.usecases.exceptions;

import br.com.addressapi.entities.ApiError;
import br.com.addressapi.entities.Entity;

import javax.validation.ConstraintViolation;
import java.util.Collection;
import java.util.HashSet;
import java.util.Set;

/**
 * Created by gbroveri on 28/06/15.
 */
public class BusinessException extends Exception {
    private final Collection<ApiError> errors;

    public BusinessException(Collection<ApiError> errors) {
        this.errors = errors;
    }

    public BusinessException(Set<? extends ConstraintViolation<? extends Entity>> violations) {
        errors = new HashSet<>();
        for (ConstraintViolation<? extends Entity> violation : violations) {
            final ApiError error = new ApiError();
            error.setCode(violation.getMessageTemplate());
            error.setMessage(violation.getMessage());
            this.errors.add(error);
        }
    }

    public Collection<ApiError> getErrors() {
        return errors;
    }
}
