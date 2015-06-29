package br.com.addressapi.http.impl;

import br.com.addressapi.entities.Address;
import br.com.addressapi.entities.ApiError;
import br.com.addressapi.http.AddressController;
import br.com.addressapi.usecases.ZipCodeSearch;
import br.com.addressapi.usecases.exceptions.BusinessException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletResponse;
import java.util.Collection;

/**
 * Created by gbroveri on 28/06/15.
 */
@RestController
@RequestMapping("/api/addresses")
public class SpringAddressController implements AddressController {

    @Autowired
    private ZipCodeSearch zipCodeSearch;

    @Override
    @RequestMapping(method = RequestMethod.GET)
    public Address findByZipCode(@RequestParam(value = "zip-code", required = true) String zipCode) throws BusinessException {
        return zipCodeSearch.findAddressByZipCode(zipCode);
    }

    @ExceptionHandler(BusinessException.class)
    public Collection<ApiError> handleBusinessException(HttpServletResponse response, BusinessException ex) {
        response.setStatus(400);
        return ex.getErrors();
    }

}
