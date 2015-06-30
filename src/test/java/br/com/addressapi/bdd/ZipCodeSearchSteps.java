package br.com.addressapi.bdd;

import br.com.addressapi.Application;
import br.com.addressapi.entities.Address;
import br.com.addressapi.entities.ApiError;
import br.com.addressapi.gateways.AddressGateway;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.test.SpringApplicationContextLoader;
import org.springframework.boot.test.TestRestTemplate;
import org.springframework.boot.test.WebIntegrationTest;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.http.HttpMethod;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.web.client.RestTemplate;

import java.util.Collection;

/**
 * Created by gbroveri on 28/06/15.
 */
@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(classes = Application.class, loader = SpringApplicationContextLoader.class)
@WebIntegrationTest("server.port=0")
public class ZipCodeSearchSteps {

    private RestTemplate restTemplate = new TestRestTemplate();

    private ResponseEntity<Address> result;
    private ResponseEntity<Collection<ApiError>> resultError;

    @Autowired
    private AddressGateway addressGateway;

    @Value("${local.server.port}")
    private int port;

    /**
     * Returns the base url for your rest interface
     *
     * @return
     */
    private String getApiUri() {
        return "http://localhost:" + port + "/api/addresses";
    }

    @Before
    public void setup() {
        Collection<Address> entities = addressGateway.findAll();
        for (Address address : entities) {
            addressGateway.delete(address);
        }
    }

    @Given("^there is a valid \"(.*?)\" zip code for street \"(.*?)\"$")
    public void there_is_a_valid_zip_code(String zipCode, String street) throws Throwable {
        setupData(zipCode, street);
    }

    @When("^the search address api is called with zip code \"(.*?)\"$")
    public void the_search_address_api_is_called_with_zip_code(String arg1) throws Throwable {
        result = restTemplate.getForEntity(getApiUri() + "?zip-code=" + arg1, Address.class);
    }

    @Then("^\"(.*?)\" street with zip code \"(.*?)\" is returned$")
    public void street_with_zip_code_is_returned(String street, String zipCode) throws Throwable {
        Assert.assertTrue("must return 200", result.getStatusCode() == HttpStatus.OK);
        Assert.assertTrue("street invalid", result.getBody().getStreet().equals(street));
        Assert.assertTrue("zip code invalid", result.getBody().getZipCode().equals(zipCode));
    }

    @Then("^not found '(\\d+)' is returned$")
    public void not_found_is_returned(int arg1) throws Throwable {
        Assert.assertTrue("should return 404", result.getStatusCode() == HttpStatus.NOT_FOUND);
    }


    @Given("^Exists \"(.*?)\" zip codes, when I search for \"(.*?)\" zip code$")
    public void search_for_zip_code(String existingZipcodes, String searchZipcode) throws Throwable {
        setupData(existingZipcodes);
        result = restTemplate.getForEntity(getApiUri() + "?zip-code=" + searchZipcode, Address.class);
    }

    private void setupData(String zipCodes) {
        String[] zipCodesArray = zipCodes.replaceAll("\\s", "").split(",");
        for (String zipCode : zipCodesArray) {
            Address address = new Address();
            address.setZipCode(zipCode);
            addressGateway.save(address);
        }
    }

    private void setupData(String zipCode, String street) {
        Address address = new Address();
        address.setZipCode(zipCode);
        address.setStreet(street);
        addressGateway.save(address);
    }

    @Then("^zip code returned is \"(.*?)\"$")
    public void zip_code_returned(String expect) throws Throwable {
        Assert.assertTrue(result.getBody().getZipCode().equals(expect));
    }

    @When("^the search address api is called with no zip code$")
    public void the_search_address_api_is_called_with_no_zip_code() throws Throwable {
        result = restTemplate.getForEntity(getApiUri(), Address.class);
    }

    @Then("^bad request '400' is returned$")
    public void not_found_is_returned() throws Throwable {
        Assert.assertTrue("invalid return status = " + result.getStatusCode(), result.getStatusCode() == HttpStatus.BAD_REQUEST);
    }

    @When("^the api is called with zip code \"(.*?)\"$")
    public void the_api_is_called_with_zip_code(String arg1) throws Throwable {
        ParameterizedTypeReference<Collection<ApiError>> typeRef = new ParameterizedTypeReference<Collection<ApiError>>() {
        };
        resultError = restTemplate.exchange(getApiUri() + "?zip-code=" + arg1, HttpMethod.GET, null, typeRef);
    }

    @Then("^bad request '(\\d+)' with 'CEP invalido' message is returned$")
    public void bad_request_with_CEP_invalido_message_is_returned(int arg1) throws Throwable {
        Assert.assertTrue(resultError.getStatusCode() == HttpStatus.BAD_REQUEST);
        Assert.assertTrue("zipCode.invalid".equals(resultError.getBody().iterator().next().getCode()));
    }

}
