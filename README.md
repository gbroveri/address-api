# address-api

### What is this repository for? ###

This is a sample api for managing address and searching it by zip code.

## Architecture ##

It follows the clean architecture proposed by Robert C. Martin (uncle Bob).<br />
Components have low coupling between layers through the use of Interfaces.<br />
More information and diagrams of Clean Architecture can be found [here](http://blog.8thlight.com/uncle-bob/2012/08/13/the-clean-architecture.html)

### Technologies ###

* This is a Spring Boot project with maven pom.xml.
* BDD scenarios were implemented with Cucumber JVM.
* Spring data is used for persistence on MongoDB.
* JDK 1.7 is required to run tests and embedded tomcat.

## Scenarios ##

* Scenarios covered can be found [here](http://gbroveri.github.io/address-api/cucumber/)

Scenarios are split as follows:<br />

- Feature: Find full address given zip code
>This corresponds to the first test

- Feature: Maintain personal address
>This corresponds to the second test<br />
It's a CRUD for address

### Pre Requisites ###
* Git
* JDK 1.7
* Maven
* MongoDB

### Database ###
- MongoDB is expected to run when executing on dev profile

### Profiles ###

There are 2 possible profiles:

* dev

    >In "dev" mode MongoDB is required.<br>
    In this case MongoAddressGateway will be injected and used by the app.
    
* test

    >In "test" mode InMemoryAddressGateway will be injected. <br>
    InMemoryAddressGateway persists data in memory so that there is no need for database when running tests<br>
    
### Running locally in dev mode ###
> mvn package -DskipTests && java -jar target/address-api-0.1.0.jar

### How to run tests ###
> mvn -Dspring.profiles.active=test test

## Api samples ##

### Create new address ###

* http POST - http://localhost:8080/api/addresses
* json body:
```
#!json
{
  "zipCode": "13275410",
  "street": "Rua João Bissoto Filho",
  "streetNumber": 1724,
  "city": "Valinhos",
  "state": "SP",
  "neighborhood": "Ortizes",
  "complement": "ap 11 t 2"
}
```
* returns http 200 with created address:
```
#!json
{
    "id": "5592925344ae9b35f3391723",
    "zipCode": "13275410",
    "street": "Rua João Bissoto Filho",
    "streetNumber": 1724,
    "city": "Valinhos",
    "state": "SP",
    "neighborhood": "Ortizes",
    "complement": "ap 11 t 2"
}
```

### Find address by id ###

* http GET - http://localhost:8080/api/addresses/5592925344ae9b35f3391723

* returns:
```
#!json
{
    "id": "5592925344ae9b35f3391723",
    "zipCode": "13275410",
    "street": "Rua João Bissoto Filho",
    "streetNumber": 1724,
    "city": "Valinhos",
    "state": "SP",
    "neighborhood": "Ortizes",
    "complement": "ap 11 t 2"
}
```

### Find address by zip code ###

* http GET - http://localhost:8080/api/addresses?zip-code=13275410

* returns:
```
#!json
{
    "id": "5592925344ae9b35f3391723",
    "zipCode": "13275410",
    "street": "Rua João Bissoto Filho",
    "streetNumber": 1724,
    "city": "Valinhos",
    "state": "SP",
    "neighborhood": "Ortizes",
    "complement": "ap 11 t 2"
}
```

### Update existing address ###

* http PUT - http://localhost:8080/api/addresses/5592925344ae9b35f3391723
* json body:
```
#!json
{
  "zipCode": "13270000",
  "street": "Rua João Bissoto Filho",
  "streetNumber": 1724,
  "city": "Valinhos",
  "state": "SP",
  "neighborhood": "Ortizes",
  "complement": "ap 11 t 2"
}
```
* returns http 200 with updated address:
```
#!json
{
    "id": "5592925344ae9b35f3391723",
    "zipCode": "13270000",
    "street": "Rua João Bissoto Filho",
    "streetNumber": 1724,
    "city": "Valinhos",
    "state": "SP",
    "neighborhood": "Ortizes",
    "complement": "ap 11 t 2"
}
```

### Remove existing address ###

* http DELETE - http://localhost:8080/api/addresses/5592925344ae9b35f3391723

* returns http 200
