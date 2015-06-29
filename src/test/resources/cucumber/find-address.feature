Feature: Find full address given zip code
  As a customer
  I want to get my full address automatically given my zip code
  So that I don't waste time typing it and I can ensure its consistency to receive my products properly

  Scenario Outline: resolve to more general zip code (replacing ending with 0)
    Given Exists <existing> zip codes, when I search for <search> zip code
    Then zip code returned is <returned>
  Examples:
    | existing                                                               | search     | returned   |
    | "13275400, 13275000, 13270000, 13200000, 13000000, 10000000, 00000000" | "13275410" | "13275400" |
    | "13275400, 13275000, 13270000, 13200000, 13000000, 10000000, 00000000" | "13275123" | "13275000" |
    | "13275400, 13275000, 13270000, 13200000, 13000000, 10000000, 00000000" | "13270260" | "13270000" |
    | "13275400, 13275000, 13270000, 13200000, 13000000, 10000000, 00000000" | "13279999" | "13270000" |
    | "13275400, 13275000, 13270000, 13200000, 13000000, 10000000, 00000000" | "13999999" | "13000000" |
    | "13275400, 13275000, 13270000, 13200000, 13000000, 10000000, 00000000" | "19999999" | "10000000" |
    | "13275400, 13275000, 13270000, 13200000, 13000000, 10000000, 00000000" | "99999999" | "00000000" |

  Scenario: no zip code is passed in to the api
    When the search address api is called with no zip code
    Then bad request '400' is returned

  Scenario: zip code with literal is invalid
    When the api is called with zip code "AB999999"
    Then bad request '400' with 'CEP invalido' message is returned

  Scenario: zip code with less than 8 digits is invalid
    When the api is called with zip code "999999"
    Then bad request '400' with 'CEP invalido' message is returned

  Scenario: zip code with more than 8 digits is invalid
    When the api is called with zip code "999999999"
    Then bad request '400' with 'CEP invalido' message is returned
