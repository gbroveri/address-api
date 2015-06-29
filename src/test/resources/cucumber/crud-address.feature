Feature: Maintain personal addresses
  As a customer
  I want to to manage my addresses
  So that I can complete my check out faster

Scenario: create a valid address
    Given a valid address
      | zipCode    | street                  | streetNumber | city       | state |
      | "13275410" | "R. João Bissoto Filho" | 1724         | "Valinhos" | "SP"  |
    When api to create is called with address data
    Then http status '200' is returned with newly created address

Scenario: create address without zipCode
    Given the address
      | zipCode    | street                  | streetNumber | city       | state |
      |            | "R. João Bissoto Filho" | 1724         | "Valinhos" | "SP"  |
    When api to create is called with invalid address data
    Then http status '400' is returned with message "address.zipCode.not.blank"

Scenario: create address without street
    Given the address
      | zipCode    | street                  | streetNumber | city       | state |
      | "13275410" |                         | 1724         | "Valinhos" | "SP"  |
    When api to create is called with invalid address data
    Then http status '400' is returned with message "address.street.not.blank"

Scenario: create address without street number
    Given the address
      | zipCode    | street                  | streetNumber | city       | state |
      | "13275410" | "R. João Bissoto Filho" |              | "Valinhos" | "SP"  |
    When api to create is called with invalid address data
    Then http status '400' is returned with message "address.streetNumber.not.null"

Scenario: create address without city
    Given the address
      | zipCode    | street                  | streetNumber | city       | state |
      | "13275410" | "R. João Bissoto Filho" | 1724         |            | "SP"  |
    When api to create is called with invalid address data
    Then http status '400' is returned with message "address.city.not.blank"

Scenario: create address without state
    Given the address
      | zipCode    | street                  | streetNumber | city       | state |
      | "13275410" | "R. João Bissoto Filho" | 1724         | "Valinhos" |       |
    When api to create is called with invalid address data
    Then http status '400' is returned with message "address.state.not.blank"

Scenario: find address by id
    Given exists address for a customer
      | zipCode    | street                  | streetNumber | city       | state |
      | "13275410" | "R. João Bissoto Filho" | 1724         | "Valinhos" | "SP"  |
    When api is queried to find address by id
    Then existing address is returned

Scenario: try to get non existing address by id
    Given there is no address
    When api is queried to find address by id 123456
    Then not found 404 is returned

Scenario: update existing address
    Given exists address for a customer
      | zipCode    | street                  | streetNumber | city       | state |
      | "13275410" | "R. João Bissoto Filho" | 1724         | "Valinhos" | "SP"  |
    When api is called to update complement to "ap 11 t 2"
    Then http status "200" is returned with updated address

Scenario: update existing address with invalid data
    Given exists address for a customer
      | zipCode    | street                  | streetNumber | city       | state |
      | "13275410" | "R. João Bissoto Filho" | 1724         | "Valinhos" | "SP"  |
    When api is called to update with empty zipCode
    Then http status '400' is returned with message "address.zipCode.not.blank"

Scenario: update non existing id
    Given exists address for a customer
          | zipCode    | street                  | streetNumber | city       | state |
          | "13275410" | "R. João Bissoto Filho" | 1724         | "Valinhos" | "SP"  |
    When api is called to update non existing id 123456
    Then not found 404 is returned for update

Scenario: delete existing address
    Given exists address for a customer
      | zipCode    | street                  | streetNumber | city       | state |
      | "13275410" | "R. João Bissoto Filho" | 1724         | "Valinhos" | "SP"  |
    When api is called to delete the address
    Then http status "200" is returned

Scenario: try to delete non existing id
    Given exists address for a customer
      | zipCode    | street                  | streetNumber | city       | state |
      | "13275410" | "R. João Bissoto Filho" | 1724         | "Valinhos" | "SP"  |
    When api is called to delete the address
    Then http status "404" is returned