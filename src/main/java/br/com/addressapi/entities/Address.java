package br.com.addressapi.entities;

import org.hibernate.validator.constraints.NotBlank;

import javax.validation.constraints.NotNull;

/**
 * Created by gbroveri on 28/06/15.
 */
public class Address extends Entity {

    @NotBlank(message = "address.zipCode.not.blank")
    private String zipCode;

    @NotBlank(message = "address.street.not.blank")
    private String street;

    @NotNull(message = "address.streetNumber.not.null")
    private Integer streetNumber;

    @NotBlank(message = "address.city.not.blank")
    private String city;

    @NotBlank(message = "address.state.not.blank")
    private String state;

    private String neighborhood;
    private String complement;

    public String getZipCode() {
        return zipCode;
    }

    public void setZipCode(String zipCode) {
        this.zipCode = zipCode;
    }

    public String getStreet() {
        return street;
    }

    public void setStreet(String street) {
        this.street = street;
    }

    public Integer getStreetNumber() {
        return streetNumber;
    }

    public void setStreetNumber(Integer streetNumber) {
        this.streetNumber = streetNumber;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getState() {
        return state;
    }

    public void setState(String state) {
        this.state = state;
    }

    public String getNeighborhood() {
        return neighborhood;
    }

    public void setNeighborhood(String neighborhood) {
        this.neighborhood = neighborhood;
    }

    public String getComplement() {
        return complement;
    }

    public void setComplement(String complement) {
        this.complement = complement;
    }
}
