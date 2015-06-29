package br.com.addressapi.http.impl;

import br.com.addressapi.entities.Address;
import br.com.addressapi.entities.ApiError;
import br.com.addressapi.http.AddressController;
import br.com.addressapi.usecases.AddressCreateUpdate;
import br.com.addressapi.usecases.AddressDelete;
import br.com.addressapi.usecases.AddressRead;
import br.com.addressapi.usecases.ZipCodeSearch;
import br.com.addressapi.usecases.exceptions.BusinessException;
import br.com.addressapi.usecases.exceptions.NotFoundException;
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

    @Autowired
    private AddressCreateUpdate addressCreateUpdate;

    @Autowired
    private AddressRead addressRead;

    @Autowired
    private AddressDelete addressDelete;

    @Override
    @RequestMapping(method = RequestMethod.GET)
    public Address findByZipCode(@RequestParam(value = "zip-code", required = true) String zipCode) throws BusinessException, NotFoundException {
        return zipCodeSearch.findAddressByZipCode(zipCode);
    }

    @Override
    @RequestMapping(method = RequestMethod.POST)
    public Address create(@RequestBody Address address) throws BusinessException {
        return addressCreateUpdate.create(address);
    }

    @Override
    @RequestMapping(method = RequestMethod.PUT, value = "/{id}")
    public Address update(@PathVariable String id, @RequestBody Address address) throws BusinessException, NotFoundException {
        return addressCreateUpdate.update(id, address);
    }

    @Override
    @RequestMapping(method = RequestMethod.DELETE, value = "/{id}")
    public void delete(@PathVariable String id) throws NotFoundException {
        addressDelete.remove(id);
    }

    @Override
    @RequestMapping(method = RequestMethod.GET, value = "/{id}")
    public Address findById(@PathVariable String id) throws BusinessException, NotFoundException {
        return addressRead.findById(id);
    }

    @ExceptionHandler(BusinessException.class)
    public Collection<ApiError> handleBusinessException(HttpServletResponse response, BusinessException ex) {
        response.setStatus(400);
        return ex.getErrors();
    }

    @ExceptionHandler(NotFoundException.class)
    public void handleNotFoundException(HttpServletResponse response) {
        response.setStatus(404);
    }

    @ExceptionHandler(RuntimeException.class)
    public ApiError handleThrowable(HttpServletResponse response) {
        response.setStatus(500);
        return new ApiError("internal server error", "server.error");
    }

}
