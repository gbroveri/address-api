package br.com.addressapi.usecases.exceptions;

import br.com.addressapi.entities.ApiError;

import java.util.Set;

/**
 * Created by gbroveri on 28/06/15.
 */
public class BusinessException extends Exception {
    private final Set<ApiError> errors;

    public BusinessException(Set<ApiError> errors) {
        this.errors = errors;
    }

    public Set<ApiError> getErrors() {
        return errors;
    }
}
