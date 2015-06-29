package br.com.addressapi.entities;

/**
 * Created by gbroveri on 28/06/15.
 */
public class Address extends Entity {
    private String zipCode;
    private String street;

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
}
