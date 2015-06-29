package br.com.addressapi.http.spring;

import br.com.addressapi.entities.Address;
import br.com.addressapi.entities.BusinessError;
import br.com.addressapi.http.AddressController;
import br.com.addressapi.usecases.ZipCodeSearch;
import br.com.addressapi.usecases.exceptions.BusinessException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletResponse;

/**
 * Created by gbroveri on 28/06/15.
 */
@RestController
@RequestMapping("/api/addresses")
public class SpringAddressController implements AddressController {

    @Autowired
    private ZipCodeSearch zipCodeSearch;

    @Override
    @RequestMapping
    public Address findByZipCode(@RequestParam(value = "zip-code", required = true) String zipCode) throws BusinessException {
        return zipCodeSearch.findAddressByZipCode(zipCode);
    }

    @ExceptionHandler(BusinessException.class)
    public BusinessError handleBusinessException(HttpServletResponse response, BusinessException ex) {
        response.setStatus(400);
        BusinessError error = new BusinessError("CEP invalido", "zipCode.invalid");
        return error;
    }

}
