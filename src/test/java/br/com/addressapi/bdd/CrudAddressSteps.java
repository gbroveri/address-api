package br.com.addressapi.bdd;

import br.com.addressapi.Application;
import br.com.addressapi.entities.Address;
import br.com.addressapi.entities.ApiError;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.test.SpringApplicationContextLoader;
import org.springframework.boot.test.TestRestTemplate;
import org.springframework.boot.test.WebIntegrationTest;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpMethod;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.web.client.RestTemplate;

import java.util.Collection;
import java.util.List;

/**
 * Created by groveri on 29/06/15.
 */
@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(classes = Application.class, loader = SpringApplicationContextLoader.class)
@WebIntegrationTest("server.port=0")
public class CrudAddressSteps {

    private RestTemplate restTemplate = new TestRestTemplate();
    private List<Address> input;
    private ResponseEntity<Address> result;
    private ResponseEntity<Address> resultQuery;
    private ResponseEntity resultDelete;
    private ResponseEntity<Collection<ApiError>> resultError;
    private String newComplement;

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


    @Given("^a valid address$")
    public void a_valid_address(List<Address> addressList) throws Throwable {
        input = addressList;
    }

    @When("^api to create is called with address data$")
    public void api_to_create_is_called_with_address_data() throws Throwable {
        Address address = input.iterator().next();
        result = restTemplate.postForEntity(getApiUri(), address, Address.class);
    }

    @Then("^http status '200' is returned with newly created address$")
    public void http_status_is_returned_with_newly_created_address() throws Throwable {
        Assert.assertTrue("should return 200 but was " + result.getStatusCode(), result.getStatusCode() == HttpStatus.OK);
        Assert.assertNotNull("should have id", result.getBody().getId());
    }

    @Given("^the address$")
    public void the_address(List<Address> addressList) throws Throwable {
        input = addressList;
    }

    @When("^api to create is called with invalid address data$")
    public void api_to_create_is_called_with_invalid_address_data() throws Throwable {
        ParameterizedTypeReference<Collection<ApiError>> typeRef = new ParameterizedTypeReference<Collection<ApiError>>() {
        };
        Address address = input.iterator().next();
        HttpEntity<Address> addressRequest = new HttpEntity<>(address);
        resultError = restTemplate.exchange(
                getApiUri(),
                HttpMethod.POST,
                addressRequest,
                typeRef);
    }

    @Then("^http status '(\\d+)' is returned with message \"(.*?)\"$")
    public void http_status_is_returned_with_message(int status, String message) throws Throwable {
        HttpStatus expectedStatus = HttpStatus.valueOf(status);
        Assert.assertTrue("should return " + status + " but was " + resultError.getStatusCode(), expectedStatus == resultError.getStatusCode());

        ApiError error = resultError.getBody().iterator().next();
        Assert.assertTrue("wrong error", message.equals(error.getMessage()));
    }

    @Given("^exists address for a customer$")
    public void exists_address_for_a_customer(List<Address> addressList) throws Throwable {
        Address address = addressList.iterator().next();
        result = restTemplate.postForEntity(getApiUri(), address, Address.class);
        Assert.assertTrue(result.getStatusCode() == HttpStatus.OK);
    }

    @When("^api is queried to find address by id$")
    public void api_is_queried_to_find_address_by_id() throws Throwable {
        resultQuery = restTemplate.getForEntity(getApiUri() + "/" + result.getBody().getId(), Address.class);
    }

    @Then("^existing address is returned$")
    public void existing_address_is_returned() throws Throwable {
        Address created = result.getBody();
        Address queried = resultQuery.getBody();
        Assert.assertTrue("could not return existing address", created.getId().equals(queried.getId()));
    }

    @Given("^there is no address$")
    public void there_is_no_address() throws Throwable {
        // no setup data in this case
    }

    @When("^api is queried to find address by id (\\d+)$")
    public void api_is_queried_to_find_address_by_id(int id) throws Throwable {
        resultQuery = restTemplate.getForEntity(getApiUri() + "/" + id, Address.class);
    }

    @Then("^not found (\\d+) is returned$")
    public void not_found_is_returned(int status) throws Throwable {
        Assert.assertTrue(
                "should return " + status + " but was " + resultQuery.getStatusCode(),
                HttpStatus.valueOf(status) == resultQuery.getStatusCode()
        );
    }

    @When("^api is called to update complement to \"(.*?)\"$")
    public void api_is_called_to_update_complement_to(String complement) throws Throwable {
        newComplement = complement;
        Address toUpdate = result.getBody();
        toUpdate.setComplement(complement);
        ParameterizedTypeReference<Address> typeRef = new ParameterizedTypeReference<Address>() {
        };
        HttpEntity<Address> addressRequest = new HttpEntity<>(toUpdate);
        result = restTemplate.exchange(
                getApiUri() + "/" + toUpdate.getId(),
                HttpMethod.PUT,
                addressRequest,
                typeRef);
    }

    @Then("^http status \"(.*?)\" is returned with updated address$")
    public void http_status_is_returned_with_updated_address(String statusStr) throws Throwable {
        HttpStatus status = HttpStatus.valueOf(Integer.valueOf(statusStr));
        Assert.assertTrue("status should be " + status + " but was " + result.getStatusCode(), status == result.getStatusCode());
        Assert.assertTrue("complement was not updated", result.getBody().getComplement().equals(newComplement));
    }

    @When("^api is called to update with empty zipCode$")
    public void api_is_called_to_update_with_empty_zipCode() throws Throwable {
        Address toUpdate = result.getBody();
        toUpdate.setZipCode("");
        ParameterizedTypeReference<Collection<ApiError>> typeRef = new ParameterizedTypeReference<Collection<ApiError>>() {
        };
        HttpEntity<Address> addressRequest = new HttpEntity<>(toUpdate);
        resultError = restTemplate.exchange(
                getApiUri() + "/" + toUpdate.getId(),
                HttpMethod.PUT,
                addressRequest,
                typeRef);
    }

    @When("^api is called to update non existing id (\\d+)$")
    public void api_is_called_to_update_id(int arg1) throws Throwable {
        ParameterizedTypeReference<Collection<ApiError>> typeRef = new ParameterizedTypeReference<Collection<ApiError>>() {
        };
        HttpEntity<Address> addressRequest = new HttpEntity<>(new Address());
        resultError = restTemplate.exchange(
                getApiUri() + "/" + arg1,
                HttpMethod.PUT,
                addressRequest,
                typeRef);
    }

    @Then("^not found (\\d+) is returned for update$")
    public void not_found_is_returned_for_update(int statusRet) throws Throwable {
        HttpStatus status = HttpStatus.valueOf(statusRet);
        Assert.assertTrue("invalid status = " + resultError.getStatusCode(), resultError.getStatusCode() == status);
    }

    @When("^api is called to delete the address$")
    public void api_is_called_to_delete_the_address() throws Throwable {
        Address toDelete = result.getBody();

        resultDelete = restTemplate.exchange(
                getApiUri() + "/" + toDelete.getId(),
                HttpMethod.DELETE, null, Object.class);
    }

    @Then("^http status \"(.*?)\" is returned$")
    public void http_status_is_returned(String statusExpect) throws Throwable {
        HttpStatus expect = HttpStatus.valueOf(Integer.valueOf(statusExpect));
        Assert.assertTrue("status should be " + expect + " but was " + resultDelete.getStatusCode(), resultDelete.getStatusCode() == HttpStatus.OK);
    }


}
