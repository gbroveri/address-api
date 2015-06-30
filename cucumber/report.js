$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("cucumber/crud-address.feature");
formatter.feature({
  "id": "maintain-personal-addresses",
  "description": "As a customer\nI want to to manage my addresses\nSo that I can complete my check out faster",
  "name": "Maintain personal addresses",
  "keyword": "Feature",
  "line": 1
});
formatter.before({
  "duration": 27300913,
  "status": "passed"
});
formatter.scenario({
  "id": "maintain-personal-addresses;create-a-valid-address",
  "description": "",
  "name": "create a valid address",
  "keyword": "Scenario",
  "line": 6,
  "type": "scenario"
});
formatter.step({
  "name": "a valid address",
  "keyword": "Given ",
  "line": 7,
  "rows": [
    {
      "cells": [
        "zipCode",
        "street",
        "streetNumber",
        "city",
        "state"
      ],
      "line": 8
    },
    {
      "cells": [
        "\"13275410\"",
        "\"R. João Bissoto Filho\"",
        "1724",
        "\"Valinhos\"",
        "\"SP\""
      ],
      "line": 9
    }
  ]
});
formatter.step({
  "name": "api to create is called with address data",
  "keyword": "When ",
  "line": 10
});
formatter.step({
  "name": "http status \u0027200\u0027 is returned with newly created address",
  "keyword": "Then ",
  "line": 11
});
formatter.match({
  "location": "CrudAddressSteps.a_valid_address(Address\u003e)"
});
formatter.result({
  "duration": 130154857,
  "status": "passed"
});
formatter.match({
  "location": "CrudAddressSteps.api_to_create_is_called_with_address_data()"
});
formatter.result({
  "duration": 237771302,
  "status": "passed"
});
formatter.match({
  "location": "CrudAddressSteps.http_status_is_returned_with_newly_created_address()"
});
formatter.result({
  "duration": 2169445,
  "status": "passed"
});
formatter.before({
  "duration": 4574859,
  "status": "passed"
});
formatter.scenario({
  "id": "maintain-personal-addresses;create-address-without-zipcode",
  "description": "",
  "name": "create address without zipCode",
  "keyword": "Scenario",
  "line": 13,
  "type": "scenario"
});
formatter.step({
  "name": "the address",
  "keyword": "Given ",
  "line": 14,
  "rows": [
    {
      "cells": [
        "zipCode",
        "street",
        "streetNumber",
        "city",
        "state"
      ],
      "line": 15
    },
    {
      "cells": [
        "",
        "\"R. João Bissoto Filho\"",
        "1724",
        "\"Valinhos\"",
        "\"SP\""
      ],
      "line": 16
    }
  ]
});
formatter.step({
  "name": "api to create is called with invalid address data",
  "keyword": "When ",
  "line": 17
});
formatter.step({
  "name": "http status \u0027400\u0027 is returned with message \"address.zipCode.not.blank\"",
  "keyword": "Then ",
  "line": 18
});
formatter.match({
  "location": "CrudAddressSteps.the_address(Address\u003e)"
});
formatter.result({
  "duration": 5635423,
  "status": "passed"
});
formatter.match({
  "location": "CrudAddressSteps.api_to_create_is_called_with_invalid_address_data()"
});
formatter.result({
  "duration": 25112752,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400",
      "offset": 13
    },
    {
      "val": "address.zipCode.not.blank",
      "offset": 44
    }
  ],
  "location": "CrudAddressSteps.http_status_is_returned_with_message(int,String)"
});
formatter.result({
  "duration": 221475,
  "status": "passed"
});
formatter.before({
  "duration": 3578100,
  "status": "passed"
});
formatter.scenario({
  "id": "maintain-personal-addresses;create-address-without-street",
  "description": "",
  "name": "create address without street",
  "keyword": "Scenario",
  "line": 20,
  "type": "scenario"
});
formatter.step({
  "name": "the address",
  "keyword": "Given ",
  "line": 21,
  "rows": [
    {
      "cells": [
        "zipCode",
        "street",
        "streetNumber",
        "city",
        "state"
      ],
      "line": 22
    },
    {
      "cells": [
        "\"13275410\"",
        "",
        "1724",
        "\"Valinhos\"",
        "\"SP\""
      ],
      "line": 23
    }
  ]
});
formatter.step({
  "name": "api to create is called with invalid address data",
  "keyword": "When ",
  "line": 24
});
formatter.step({
  "name": "http status \u0027400\u0027 is returned with message \"address.street.not.blank\"",
  "keyword": "Then ",
  "line": 25
});
formatter.match({
  "location": "CrudAddressSteps.the_address(Address\u003e)"
});
formatter.result({
  "duration": 3817998,
  "status": "passed"
});
formatter.match({
  "location": "CrudAddressSteps.api_to_create_is_called_with_invalid_address_data()"
});
formatter.result({
  "duration": 10142934,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400",
      "offset": 13
    },
    {
      "val": "address.street.not.blank",
      "offset": 44
    }
  ],
  "location": "CrudAddressSteps.http_status_is_returned_with_message(int,String)"
});
formatter.result({
  "duration": 153838,
  "status": "passed"
});
formatter.before({
  "duration": 5451622,
  "status": "passed"
});
formatter.scenario({
  "id": "maintain-personal-addresses;create-address-without-street-number",
  "description": "",
  "name": "create address without street number",
  "keyword": "Scenario",
  "line": 27,
  "type": "scenario"
});
formatter.step({
  "name": "the address",
  "keyword": "Given ",
  "line": 28,
  "rows": [
    {
      "cells": [
        "zipCode",
        "street",
        "streetNumber",
        "city",
        "state"
      ],
      "line": 29
    },
    {
      "cells": [
        "\"13275410\"",
        "\"R. João Bissoto Filho\"",
        "",
        "\"Valinhos\"",
        "\"SP\""
      ],
      "line": 30
    }
  ]
});
formatter.step({
  "name": "api to create is called with invalid address data",
  "keyword": "When ",
  "line": 31
});
formatter.step({
  "name": "http status \u0027400\u0027 is returned with message \"address.streetNumber.not.null\"",
  "keyword": "Then ",
  "line": 32
});
formatter.match({
  "location": "CrudAddressSteps.the_address(Address\u003e)"
});
formatter.result({
  "duration": 4527870,
  "status": "passed"
});
formatter.match({
  "location": "CrudAddressSteps.api_to_create_is_called_with_invalid_address_data()"
});
formatter.result({
  "duration": 9345141,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400",
      "offset": 13
    },
    {
      "val": "address.streetNumber.not.null",
      "offset": 44
    }
  ],
  "location": "CrudAddressSteps.http_status_is_returned_with_message(int,String)"
});
formatter.result({
  "duration": 97873,
  "status": "passed"
});
formatter.before({
  "duration": 4961565,
  "status": "passed"
});
formatter.scenario({
  "id": "maintain-personal-addresses;create-address-without-city",
  "description": "",
  "name": "create address without city",
  "keyword": "Scenario",
  "line": 34,
  "type": "scenario"
});
formatter.step({
  "name": "the address",
  "keyword": "Given ",
  "line": 35,
  "rows": [
    {
      "cells": [
        "zipCode",
        "street",
        "streetNumber",
        "city",
        "state"
      ],
      "line": 36
    },
    {
      "cells": [
        "\"13275410\"",
        "\"R. João Bissoto Filho\"",
        "1724",
        "",
        "\"SP\""
      ],
      "line": 37
    }
  ]
});
formatter.step({
  "name": "api to create is called with invalid address data",
  "keyword": "When ",
  "line": 38
});
formatter.step({
  "name": "http status \u0027400\u0027 is returned with message \"address.city.not.blank\"",
  "keyword": "Then ",
  "line": 39
});
formatter.match({
  "location": "CrudAddressSteps.the_address(Address\u003e)"
});
formatter.result({
  "duration": 8599206,
  "status": "passed"
});
formatter.match({
  "location": "CrudAddressSteps.api_to_create_is_called_with_invalid_address_data()"
});
formatter.result({
  "duration": 21093028,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400",
      "offset": 13
    },
    {
      "val": "address.city.not.blank",
      "offset": 44
    }
  ],
  "location": "CrudAddressSteps.http_status_is_returned_with_message(int,String)"
});
formatter.result({
  "duration": 206827,
  "status": "passed"
});
formatter.before({
  "duration": 6385478,
  "status": "passed"
});
formatter.scenario({
  "id": "maintain-personal-addresses;create-address-without-state",
  "description": "",
  "name": "create address without state",
  "keyword": "Scenario",
  "line": 41,
  "type": "scenario"
});
formatter.step({
  "name": "the address",
  "keyword": "Given ",
  "line": 42,
  "rows": [
    {
      "cells": [
        "zipCode",
        "street",
        "streetNumber",
        "city",
        "state"
      ],
      "line": 43
    },
    {
      "cells": [
        "\"13275410\"",
        "\"R. João Bissoto Filho\"",
        "1724",
        "\"Valinhos\"",
        ""
      ],
      "line": 44
    }
  ]
});
formatter.step({
  "name": "api to create is called with invalid address data",
  "keyword": "When ",
  "line": 45
});
formatter.step({
  "name": "http status \u0027400\u0027 is returned with message \"address.state.not.blank\"",
  "keyword": "Then ",
  "line": 46
});
formatter.match({
  "location": "CrudAddressSteps.the_address(Address\u003e)"
});
formatter.result({
  "duration": 5846831,
  "status": "passed"
});
formatter.match({
  "location": "CrudAddressSteps.api_to_create_is_called_with_invalid_address_data()"
});
formatter.result({
  "duration": 13373199,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400",
      "offset": 13
    },
    {
      "val": "address.state.not.blank",
      "offset": 44
    }
  ],
  "location": "CrudAddressSteps.http_status_is_returned_with_message(int,String)"
});
formatter.result({
  "duration": 138995,
  "status": "passed"
});
formatter.before({
  "duration": 3758222,
  "status": "passed"
});
formatter.scenario({
  "id": "maintain-personal-addresses;find-address-by-id",
  "description": "",
  "name": "find address by id",
  "keyword": "Scenario",
  "line": 48,
  "type": "scenario"
});
formatter.step({
  "name": "exists address for a customer",
  "keyword": "Given ",
  "line": 49,
  "rows": [
    {
      "cells": [
        "zipCode",
        "street",
        "streetNumber",
        "city",
        "state"
      ],
      "line": 50
    },
    {
      "cells": [
        "\"13275410\"",
        "\"R. João Bissoto Filho\"",
        "1724",
        "\"Valinhos\"",
        "\"SP\""
      ],
      "line": 51
    }
  ]
});
formatter.step({
  "name": "api is queried to find address by id",
  "keyword": "When ",
  "line": 52
});
formatter.step({
  "name": "existing address is returned",
  "keyword": "Then ",
  "line": 53
});
formatter.match({
  "location": "CrudAddressSteps.exists_address_for_a_customer(Address\u003e)"
});
formatter.result({
  "duration": 13790723,
  "status": "passed"
});
formatter.match({
  "location": "CrudAddressSteps.api_is_queried_to_find_address_by_id()"
});
formatter.result({
  "duration": 6277912,
  "status": "passed"
});
formatter.match({
  "location": "CrudAddressSteps.existing_address_is_returned()"
});
formatter.result({
  "duration": 53826,
  "status": "passed"
});
formatter.before({
  "duration": 4214129,
  "status": "passed"
});
formatter.scenario({
  "id": "maintain-personal-addresses;try-to-get-non-existing-address-by-id",
  "description": "",
  "name": "try to get non existing address by id",
  "keyword": "Scenario",
  "line": 55,
  "type": "scenario"
});
formatter.step({
  "name": "there is no address",
  "keyword": "Given ",
  "line": 56
});
formatter.step({
  "name": "api is queried to find address by id 123456",
  "keyword": "When ",
  "line": 57
});
formatter.step({
  "name": "not found 404 is returned",
  "keyword": "Then ",
  "line": 58
});
formatter.match({
  "location": "CrudAddressSteps.there_is_no_address()"
});
formatter.result({
  "duration": 3916548,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123456",
      "offset": 37
    }
  ],
  "location": "CrudAddressSteps.api_is_queried_to_find_address_by_id(int)"
});
formatter.result({
  "duration": 5074032,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "404",
      "offset": 10
    }
  ],
  "location": "CrudAddressSteps.not_found_is_returned(int)"
});
formatter.result({
  "duration": 85678,
  "status": "passed"
});
formatter.before({
  "duration": 3288017,
  "status": "passed"
});
formatter.scenario({
  "id": "maintain-personal-addresses;update-existing-address",
  "description": "",
  "name": "update existing address",
  "keyword": "Scenario",
  "line": 60,
  "type": "scenario"
});
formatter.step({
  "name": "exists address for a customer",
  "keyword": "Given ",
  "line": 61,
  "rows": [
    {
      "cells": [
        "zipCode",
        "street",
        "streetNumber",
        "city",
        "state"
      ],
      "line": 62
    },
    {
      "cells": [
        "\"13275410\"",
        "\"R. João Bissoto Filho\"",
        "1724",
        "\"Valinhos\"",
        "\"SP\""
      ],
      "line": 63
    }
  ]
});
formatter.step({
  "name": "api is called to update complement to \"ap 11 t 2\"",
  "keyword": "When ",
  "line": 64
});
formatter.step({
  "name": "http status \"200\" is returned with updated address",
  "keyword": "Then ",
  "line": 65
});
formatter.match({
  "location": "CrudAddressSteps.exists_address_for_a_customer(Address\u003e)"
});
formatter.result({
  "duration": 15170532,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ap 11 t 2",
      "offset": 39
    }
  ],
  "location": "CrudAddressSteps.api_is_called_to_update_complement_to(String)"
});
formatter.result({
  "duration": 9356527,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 13
    }
  ],
  "location": "CrudAddressSteps.http_status_is_returned_with_updated_address(String)"
});
formatter.result({
  "duration": 114855,
  "status": "passed"
});
formatter.before({
  "duration": 6484247,
  "status": "passed"
});
formatter.scenario({
  "id": "maintain-personal-addresses;update-existing-address-with-invalid-data",
  "description": "",
  "name": "update existing address with invalid data",
  "keyword": "Scenario",
  "line": 67,
  "type": "scenario"
});
formatter.step({
  "name": "exists address for a customer",
  "keyword": "Given ",
  "line": 68,
  "rows": [
    {
      "cells": [
        "zipCode",
        "street",
        "streetNumber",
        "city",
        "state"
      ],
      "line": 69
    },
    {
      "cells": [
        "\"13275410\"",
        "\"R. João Bissoto Filho\"",
        "1724",
        "\"Valinhos\"",
        "\"SP\""
      ],
      "line": 70
    }
  ]
});
formatter.step({
  "name": "api is called to update with empty zipCode",
  "keyword": "When ",
  "line": 71
});
formatter.step({
  "name": "http status \u0027400\u0027 is returned with message \"address.zipCode.not.blank\"",
  "keyword": "Then ",
  "line": 72
});
formatter.match({
  "location": "CrudAddressSteps.exists_address_for_a_customer(Address\u003e)"
});
formatter.result({
  "duration": 25233591,
  "status": "passed"
});
formatter.match({
  "location": "CrudAddressSteps.api_is_called_to_update_with_empty_zipCode()"
});
formatter.result({
  "duration": 14937388,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400",
      "offset": 13
    },
    {
      "val": "address.zipCode.not.blank",
      "offset": 44
    }
  ],
  "location": "CrudAddressSteps.http_status_is_returned_with_message(int,String)"
});
formatter.result({
  "duration": 127480,
  "status": "passed"
});
formatter.before({
  "duration": 5539377,
  "status": "passed"
});
formatter.scenario({
  "id": "maintain-personal-addresses;update-non-existing-id",
  "description": "",
  "name": "update non existing id",
  "keyword": "Scenario",
  "line": 74,
  "type": "scenario"
});
formatter.step({
  "name": "exists address for a customer",
  "keyword": "Given ",
  "line": 75,
  "rows": [
    {
      "cells": [
        "zipCode",
        "street",
        "streetNumber",
        "city",
        "state"
      ],
      "line": 76
    },
    {
      "cells": [
        "\"13275410\"",
        "\"R. João Bissoto Filho\"",
        "1724",
        "\"Valinhos\"",
        "\"SP\""
      ],
      "line": 77
    }
  ]
});
formatter.step({
  "name": "api is called to update non existing id 123456",
  "keyword": "When ",
  "line": 78
});
formatter.step({
  "name": "not found 404 is returned for update",
  "keyword": "Then ",
  "line": 79
});
formatter.match({
  "location": "CrudAddressSteps.exists_address_for_a_customer(Address\u003e)"
});
formatter.result({
  "duration": 14827561,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123456",
      "offset": 40
    }
  ],
  "location": "CrudAddressSteps.api_is_called_to_update_id(int)"
});
formatter.result({
  "duration": 7042478,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "404",
      "offset": 10
    }
  ],
  "location": "CrudAddressSteps.not_found_is_returned_for_update(int)"
});
formatter.result({
  "duration": 139133,
  "status": "passed"
});
formatter.before({
  "duration": 6323958,
  "status": "passed"
});
formatter.scenario({
  "id": "maintain-personal-addresses;delete-existing-address",
  "description": "",
  "name": "delete existing address",
  "keyword": "Scenario",
  "line": 81,
  "type": "scenario"
});
formatter.step({
  "name": "exists address for a customer",
  "keyword": "Given ",
  "line": 82,
  "rows": [
    {
      "cells": [
        "zipCode",
        "street",
        "streetNumber",
        "city",
        "state"
      ],
      "line": 83
    },
    {
      "cells": [
        "\"13275410\"",
        "\"R. João Bissoto Filho\"",
        "1724",
        "\"Valinhos\"",
        "\"SP\""
      ],
      "line": 84
    }
  ]
});
formatter.step({
  "name": "api is called to delete the address",
  "keyword": "When ",
  "line": 85
});
formatter.step({
  "name": "http status \"200\" is returned",
  "keyword": "Then ",
  "line": 86
});
formatter.match({
  "location": "CrudAddressSteps.exists_address_for_a_customer(Address\u003e)"
});
formatter.result({
  "duration": 19893712,
  "status": "passed"
});
formatter.match({
  "location": "CrudAddressSteps.api_is_called_to_delete_the_address()"
});
formatter.result({
  "duration": 9870250,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 13
    }
  ],
  "location": "CrudAddressSteps.http_status_is_returned(String)"
});
formatter.result({
  "duration": 80177,
  "status": "passed"
});
formatter.before({
  "duration": 6190403,
  "status": "passed"
});
formatter.scenario({
  "id": "maintain-personal-addresses;try-to-delete-non-existing-id",
  "description": "",
  "name": "try to delete non existing id",
  "keyword": "Scenario",
  "line": 88,
  "type": "scenario"
});
formatter.step({
  "name": "exists address for a customer",
  "keyword": "Given ",
  "line": 89,
  "rows": [
    {
      "cells": [
        "zipCode",
        "street",
        "streetNumber",
        "city",
        "state"
      ],
      "line": 90
    },
    {
      "cells": [
        "\"13275410\"",
        "\"R. João Bissoto Filho\"",
        "1724",
        "\"Valinhos\"",
        "\"SP\""
      ],
      "line": 91
    }
  ]
});
formatter.step({
  "name": "api is called to delete the address",
  "keyword": "When ",
  "line": 92
});
formatter.step({
  "name": "http status \"404\" is returned",
  "keyword": "Then ",
  "line": 93
});
formatter.match({
  "location": "CrudAddressSteps.exists_address_for_a_customer(Address\u003e)"
});
formatter.result({
  "duration": 14267112,
  "status": "passed"
});
formatter.match({
  "location": "CrudAddressSteps.api_is_called_to_delete_the_address()"
});
formatter.result({
  "duration": 6587295,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "404",
      "offset": 13
    }
  ],
  "location": "CrudAddressSteps.http_status_is_returned(String)"
});
formatter.result({
  "duration": 100724,
  "status": "passed"
});
formatter.uri("cucumber/zipcode-search.feature");
formatter.feature({
  "id": "find-full-address-given-zip-code",
  "description": "As a customer\nI want to get my full address automatically given my zip code\nSo that I don\u0027t waste time typing it and I can ensure its consistency to receive my products properly",
  "name": "Find full address given zip code",
  "keyword": "Feature",
  "line": 1
});
formatter.before({
  "duration": 3890469,
  "status": "passed"
});
formatter.scenario({
  "id": "find-full-address-given-zip-code;find-a-valid-and-existing-zip-code",
  "description": "",
  "name": "find a valid and existing zip code",
  "keyword": "Scenario",
  "line": 6,
  "type": "scenario"
});
formatter.step({
  "name": "there is a valid \"01504001\" zip code for street \"Vergueiro St\"",
  "keyword": "Given ",
  "line": 7
});
formatter.step({
  "name": "the search address api is called with zip code \"01504001\"",
  "keyword": "When ",
  "line": 8
});
formatter.step({
  "name": "\"Vergueiro St\" street with zip code \"01504001\" is returned",
  "keyword": "Then ",
  "line": 9
});
formatter.match({
  "arguments": [
    {
      "val": "01504001",
      "offset": 18
    },
    {
      "val": "Vergueiro St",
      "offset": 49
    }
  ],
  "location": "ZipCodeSearchSteps.there_is_a_valid_zip_code(String,String)"
});
formatter.result({
  "duration": 139386,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "01504001",
      "offset": 48
    }
  ],
  "location": "ZipCodeSearchSteps.the_search_address_api_is_called_with_zip_code(String)"
});
formatter.result({
  "duration": 9787568,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Vergueiro St",
      "offset": 1
    },
    {
      "val": "01504001",
      "offset": 37
    }
  ],
  "location": "ZipCodeSearchSteps.street_with_zip_code_is_returned(String,String)"
});
formatter.result({
  "duration": 158509,
  "status": "passed"
});
formatter.before({
  "duration": 6241626,
  "status": "passed"
});
formatter.scenario({
  "id": "find-full-address-given-zip-code;no-zip-code-is-passed-to-the-api",
  "description": "",
  "name": "no zip code is passed to the api",
  "keyword": "Scenario",
  "line": 11,
  "type": "scenario"
});
formatter.step({
  "name": "the search address api is called with no zip code",
  "keyword": "When ",
  "line": 12
});
formatter.step({
  "name": "bad request \u0027400\u0027 is returned",
  "keyword": "Then ",
  "line": 13
});
formatter.match({
  "location": "ZipCodeSearchSteps.the_search_address_api_is_called_with_no_zip_code()"
});
formatter.result({
  "duration": 28774749,
  "status": "passed"
});
formatter.match({
  "location": "ZipCodeSearchSteps.not_found_is_returned()"
});
formatter.result({
  "duration": 119017,
  "status": "passed"
});
formatter.before({
  "duration": 8191872,
  "status": "passed"
});
formatter.scenario({
  "id": "find-full-address-given-zip-code;zip-code-does-not-exist",
  "description": "",
  "name": "zip code does not exist",
  "keyword": "Scenario",
  "line": 15,
  "type": "scenario"
});
formatter.step({
  "name": "there is a valid \"01504001\" zip code for street \"Vergueiro St\"",
  "keyword": "Given ",
  "line": 16
});
formatter.step({
  "name": "the search address api is called with zip code \"99999999\"",
  "keyword": "When ",
  "line": 17
});
formatter.step({
  "name": "not found \u0027404\u0027 is returned",
  "keyword": "Then ",
  "line": 18
});
formatter.match({
  "arguments": [
    {
      "val": "01504001",
      "offset": 18
    },
    {
      "val": "Vergueiro St",
      "offset": 49
    }
  ],
  "location": "ZipCodeSearchSteps.there_is_a_valid_zip_code(String,String)"
});
formatter.result({
  "duration": 169550,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "99999999",
      "offset": 48
    }
  ],
  "location": "ZipCodeSearchSteps.the_search_address_api_is_called_with_zip_code(String)"
});
formatter.result({
  "duration": 7346908,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "404",
      "offset": 11
    }
  ],
  "location": "ZipCodeSearchSteps.not_found_is_returned(int)"
});
formatter.result({
  "duration": 141356,
  "status": "passed"
});
formatter.before({
  "duration": 6140715,
  "status": "passed"
});
formatter.scenario({
  "id": "find-full-address-given-zip-code;zip-code-with-literal-is-invalid",
  "description": "",
  "name": "zip code with literal is invalid",
  "keyword": "Scenario",
  "line": 20,
  "type": "scenario"
});
formatter.step({
  "name": "the api is called with zip code \"AB999999\"",
  "keyword": "When ",
  "line": 21
});
formatter.step({
  "name": "bad request \u0027400\u0027 with \u0027CEP invalido\u0027 message is returned",
  "keyword": "Then ",
  "line": 22
});
formatter.match({
  "arguments": [
    {
      "val": "AB999999",
      "offset": 33
    }
  ],
  "location": "ZipCodeSearchSteps.the_api_is_called_with_zip_code(String)"
});
formatter.result({
  "duration": 12018452,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400",
      "offset": 13
    }
  ],
  "location": "ZipCodeSearchSteps.bad_request_with_CEP_invalido_message_is_returned(int)"
});
formatter.result({
  "duration": 158327,
  "status": "passed"
});
formatter.before({
  "duration": 6136402,
  "status": "passed"
});
formatter.scenario({
  "id": "find-full-address-given-zip-code;zip-code-with-less-than-8-digits-is-invalid",
  "description": "",
  "name": "zip code with less than 8 digits is invalid",
  "keyword": "Scenario",
  "line": 24,
  "type": "scenario"
});
formatter.step({
  "name": "the api is called with zip code \"999999\"",
  "keyword": "When ",
  "line": 25
});
formatter.step({
  "name": "bad request \u0027400\u0027 with \u0027CEP invalido\u0027 message is returned",
  "keyword": "Then ",
  "line": 26
});
formatter.match({
  "arguments": [
    {
      "val": "999999",
      "offset": 33
    }
  ],
  "location": "ZipCodeSearchSteps.the_api_is_called_with_zip_code(String)"
});
formatter.result({
  "duration": 11262740,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400",
      "offset": 13
    }
  ],
  "location": "ZipCodeSearchSteps.bad_request_with_CEP_invalido_message_is_returned(int)"
});
formatter.result({
  "duration": 148763,
  "status": "passed"
});
formatter.before({
  "duration": 6698657,
  "status": "passed"
});
formatter.scenario({
  "id": "find-full-address-given-zip-code;zip-code-with-more-than-8-digits-is-invalid",
  "description": "",
  "name": "zip code with more than 8 digits is invalid",
  "keyword": "Scenario",
  "line": 28,
  "type": "scenario"
});
formatter.step({
  "name": "the api is called with zip code \"999999999\"",
  "keyword": "When ",
  "line": 29
});
formatter.step({
  "name": "bad request \u0027400\u0027 with \u0027CEP invalido\u0027 message is returned",
  "keyword": "Then ",
  "line": 30
});
formatter.match({
  "arguments": [
    {
      "val": "999999999",
      "offset": 33
    }
  ],
  "location": "ZipCodeSearchSteps.the_api_is_called_with_zip_code(String)"
});
formatter.result({
  "duration": 10702010,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400",
      "offset": 13
    }
  ],
  "location": "ZipCodeSearchSteps.bad_request_with_CEP_invalido_message_is_returned(int)"
});
formatter.result({
  "duration": 103538,
  "status": "passed"
});
formatter.before({
  "duration": 6479850,
  "status": "passed"
});
formatter.scenario({
  "id": "find-full-address-given-zip-code;special-characters-are-striped-out-on-search",
  "description": "",
  "name": "special characters are striped out on search",
  "keyword": "Scenario",
  "line": 32,
  "type": "scenario"
});
formatter.step({
  "name": "there is a valid \"01504001\" zip code for street \"Vergueiro St\"",
  "keyword": "Given ",
  "line": 33
});
formatter.step({
  "name": "the search address api is called with zip code \"01.504-001\"",
  "keyword": "When ",
  "line": 34
});
formatter.step({
  "name": "\"Vergueiro St\" street with zip code \"01504001\" is returned",
  "keyword": "Then ",
  "line": 35
});
formatter.match({
  "arguments": [
    {
      "val": "01504001",
      "offset": 18
    },
    {
      "val": "Vergueiro St",
      "offset": 49
    }
  ],
  "location": "ZipCodeSearchSteps.there_is_a_valid_zip_code(String,String)"
});
formatter.result({
  "duration": 150838,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "01.504-001",
      "offset": 48
    }
  ],
  "location": "ZipCodeSearchSteps.the_search_address_api_is_called_with_zip_code(String)"
});
formatter.result({
  "duration": 6740676,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Vergueiro St",
      "offset": 1
    },
    {
      "val": "01504001",
      "offset": 37
    }
  ],
  "location": "ZipCodeSearchSteps.street_with_zip_code_is_returned(String,String)"
});
formatter.result({
  "duration": 83091,
  "status": "passed"
});
formatter.scenarioOutline({
  "id": "find-full-address-given-zip-code;resolve-to-more-general-zip-code-(replacing-ending-with-0)",
  "description": "",
  "name": "resolve to more general zip code (replacing ending with 0)",
  "keyword": "Scenario Outline",
  "line": 37,
  "type": "scenario_outline"
});
formatter.step({
  "name": "Exists \u003cexisting\u003e zip codes, when I search for \u003csearch\u003e zip code",
  "keyword": "Given ",
  "line": 38
});
formatter.step({
  "name": "zip code returned is \u003creturned\u003e",
  "keyword": "Then ",
  "line": 39
});
formatter.examples({
  "id": "find-full-address-given-zip-code;resolve-to-more-general-zip-code-(replacing-ending-with-0);",
  "description": "",
  "name": "",
  "keyword": "Examples",
  "line": 40,
  "rows": [
    {
      "id": "find-full-address-given-zip-code;resolve-to-more-general-zip-code-(replacing-ending-with-0);;1",
      "cells": [
        "existing",
        "search",
        "returned"
      ],
      "line": 41
    },
    {
      "id": "find-full-address-given-zip-code;resolve-to-more-general-zip-code-(replacing-ending-with-0);;2",
      "cells": [
        "\"13275400, 13275000, 13270000, 13200000, 13000000, 10000000, 00000000\"",
        "\"13275410\"",
        "\"13275400\""
      ],
      "line": 42
    },
    {
      "id": "find-full-address-given-zip-code;resolve-to-more-general-zip-code-(replacing-ending-with-0);;3",
      "cells": [
        "\"13275400, 13275000, 13270000, 13200000, 13000000, 10000000, 00000000\"",
        "\"13275123\"",
        "\"13275000\""
      ],
      "line": 43
    },
    {
      "id": "find-full-address-given-zip-code;resolve-to-more-general-zip-code-(replacing-ending-with-0);;4",
      "cells": [
        "\"13275400, 13275000, 13270000, 13200000, 13000000, 10000000, 00000000\"",
        "\"13270260\"",
        "\"13270000\""
      ],
      "line": 44
    },
    {
      "id": "find-full-address-given-zip-code;resolve-to-more-general-zip-code-(replacing-ending-with-0);;5",
      "cells": [
        "\"13275400, 13275000, 13270000, 13200000, 13000000, 10000000, 00000000\"",
        "\"13279999\"",
        "\"13270000\""
      ],
      "line": 45
    },
    {
      "id": "find-full-address-given-zip-code;resolve-to-more-general-zip-code-(replacing-ending-with-0);;6",
      "cells": [
        "\"13275400, 13275000, 13270000, 13200000, 13000000, 10000000, 00000000\"",
        "\"13999999\"",
        "\"13000000\""
      ],
      "line": 46
    },
    {
      "id": "find-full-address-given-zip-code;resolve-to-more-general-zip-code-(replacing-ending-with-0);;7",
      "cells": [
        "\"13275400, 13275000, 13270000, 13200000, 13000000, 10000000, 00000000\"",
        "\"19999999\"",
        "\"10000000\""
      ],
      "line": 47
    },
    {
      "id": "find-full-address-given-zip-code;resolve-to-more-general-zip-code-(replacing-ending-with-0);;8",
      "cells": [
        "\"13275400, 13275000, 13270000, 13200000, 13000000, 10000000, 00000000\"",
        "\"99999999\"",
        "\"00000000\""
      ],
      "line": 48
    }
  ]
});
formatter.before({
  "duration": 3998742,
  "status": "passed"
});
formatter.scenario({
  "id": "find-full-address-given-zip-code;resolve-to-more-general-zip-code-(replacing-ending-with-0);;2",
  "description": "",
  "name": "resolve to more general zip code (replacing ending with 0)",
  "keyword": "Scenario Outline",
  "line": 42,
  "type": "scenario"
});
formatter.step({
  "name": "Exists \"13275400, 13275000, 13270000, 13200000, 13000000, 10000000, 00000000\" zip codes, when I search for \"13275410\" zip code",
  "keyword": "Given ",
  "line": 38,
  "matchedColumns": [
    0,
    1
  ]
});
formatter.step({
  "name": "zip code returned is \"13275400\"",
  "keyword": "Then ",
  "line": 39,
  "matchedColumns": [
    2
  ]
});
formatter.match({
  "arguments": [
    {
      "val": "13275400, 13275000, 13270000, 13200000, 13000000, 10000000, 00000000",
      "offset": 8
    },
    {
      "val": "13275410",
      "offset": 108
    }
  ],
  "location": "ZipCodeSearchSteps.search_for_zip_code(String,String)"
});
formatter.result({
  "duration": 5071837,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "13275400",
      "offset": 22
    }
  ],
  "location": "ZipCodeSearchSteps.zip_code_returned(String)"
});
formatter.result({
  "duration": 68774,
  "status": "passed"
});
formatter.before({
  "duration": 3975508,
  "status": "passed"
});
formatter.scenario({
  "id": "find-full-address-given-zip-code;resolve-to-more-general-zip-code-(replacing-ending-with-0);;3",
  "description": "",
  "name": "resolve to more general zip code (replacing ending with 0)",
  "keyword": "Scenario Outline",
  "line": 43,
  "type": "scenario"
});
formatter.step({
  "name": "Exists \"13275400, 13275000, 13270000, 13200000, 13000000, 10000000, 00000000\" zip codes, when I search for \"13275123\" zip code",
  "keyword": "Given ",
  "line": 38,
  "matchedColumns": [
    0,
    1
  ]
});
formatter.step({
  "name": "zip code returned is \"13275000\"",
  "keyword": "Then ",
  "line": 39,
  "matchedColumns": [
    2
  ]
});
formatter.match({
  "arguments": [
    {
      "val": "13275400, 13275000, 13270000, 13200000, 13000000, 10000000, 00000000",
      "offset": 8
    },
    {
      "val": "13275123",
      "offset": 108
    }
  ],
  "location": "ZipCodeSearchSteps.search_for_zip_code(String,String)"
});
formatter.result({
  "duration": 5601598,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "13275000",
      "offset": 22
    }
  ],
  "location": "ZipCodeSearchSteps.zip_code_returned(String)"
});
formatter.result({
  "duration": 71228,
  "status": "passed"
});
formatter.before({
  "duration": 4066858,
  "status": "passed"
});
formatter.scenario({
  "id": "find-full-address-given-zip-code;resolve-to-more-general-zip-code-(replacing-ending-with-0);;4",
  "description": "",
  "name": "resolve to more general zip code (replacing ending with 0)",
  "keyword": "Scenario Outline",
  "line": 44,
  "type": "scenario"
});
formatter.step({
  "name": "Exists \"13275400, 13275000, 13270000, 13200000, 13000000, 10000000, 00000000\" zip codes, when I search for \"13270260\" zip code",
  "keyword": "Given ",
  "line": 38,
  "matchedColumns": [
    0,
    1
  ]
});
formatter.step({
  "name": "zip code returned is \"13270000\"",
  "keyword": "Then ",
  "line": 39,
  "matchedColumns": [
    2
  ]
});
formatter.match({
  "arguments": [
    {
      "val": "13275400, 13275000, 13270000, 13200000, 13000000, 10000000, 00000000",
      "offset": 8
    },
    {
      "val": "13270260",
      "offset": 108
    }
  ],
  "location": "ZipCodeSearchSteps.search_for_zip_code(String,String)"
});
formatter.result({
  "duration": 5559257,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "13270000",
      "offset": 22
    }
  ],
  "location": "ZipCodeSearchSteps.zip_code_returned(String)"
});
formatter.result({
  "duration": 76733,
  "status": "passed"
});
formatter.before({
  "duration": 4503735,
  "status": "passed"
});
formatter.scenario({
  "id": "find-full-address-given-zip-code;resolve-to-more-general-zip-code-(replacing-ending-with-0);;5",
  "description": "",
  "name": "resolve to more general zip code (replacing ending with 0)",
  "keyword": "Scenario Outline",
  "line": 45,
  "type": "scenario"
});
formatter.step({
  "name": "Exists \"13275400, 13275000, 13270000, 13200000, 13000000, 10000000, 00000000\" zip codes, when I search for \"13279999\" zip code",
  "keyword": "Given ",
  "line": 38,
  "matchedColumns": [
    0,
    1
  ]
});
formatter.step({
  "name": "zip code returned is \"13270000\"",
  "keyword": "Then ",
  "line": 39,
  "matchedColumns": [
    2
  ]
});
formatter.match({
  "arguments": [
    {
      "val": "13275400, 13275000, 13270000, 13200000, 13000000, 10000000, 00000000",
      "offset": 8
    },
    {
      "val": "13279999",
      "offset": 108
    }
  ],
  "location": "ZipCodeSearchSteps.search_for_zip_code(String,String)"
});
formatter.result({
  "duration": 6146395,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "13270000",
      "offset": 22
    }
  ],
  "location": "ZipCodeSearchSteps.zip_code_returned(String)"
});
formatter.result({
  "duration": 67472,
  "status": "passed"
});
formatter.before({
  "duration": 3676349,
  "status": "passed"
});
formatter.scenario({
  "id": "find-full-address-given-zip-code;resolve-to-more-general-zip-code-(replacing-ending-with-0);;6",
  "description": "",
  "name": "resolve to more general zip code (replacing ending with 0)",
  "keyword": "Scenario Outline",
  "line": 46,
  "type": "scenario"
});
formatter.step({
  "name": "Exists \"13275400, 13275000, 13270000, 13200000, 13000000, 10000000, 00000000\" zip codes, when I search for \"13999999\" zip code",
  "keyword": "Given ",
  "line": 38,
  "matchedColumns": [
    0,
    1
  ]
});
formatter.step({
  "name": "zip code returned is \"13000000\"",
  "keyword": "Then ",
  "line": 39,
  "matchedColumns": [
    2
  ]
});
formatter.match({
  "arguments": [
    {
      "val": "13275400, 13275000, 13270000, 13200000, 13000000, 10000000, 00000000",
      "offset": 8
    },
    {
      "val": "13999999",
      "offset": 108
    }
  ],
  "location": "ZipCodeSearchSteps.search_for_zip_code(String,String)"
});
formatter.result({
  "duration": 5166999,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "13000000",
      "offset": 22
    }
  ],
  "location": "ZipCodeSearchSteps.zip_code_returned(String)"
});
formatter.result({
  "duration": 69533,
  "status": "passed"
});
formatter.before({
  "duration": 4189120,
  "status": "passed"
});
formatter.scenario({
  "id": "find-full-address-given-zip-code;resolve-to-more-general-zip-code-(replacing-ending-with-0);;7",
  "description": "",
  "name": "resolve to more general zip code (replacing ending with 0)",
  "keyword": "Scenario Outline",
  "line": 47,
  "type": "scenario"
});
formatter.step({
  "name": "Exists \"13275400, 13275000, 13270000, 13200000, 13000000, 10000000, 00000000\" zip codes, when I search for \"19999999\" zip code",
  "keyword": "Given ",
  "line": 38,
  "matchedColumns": [
    0,
    1
  ]
});
formatter.step({
  "name": "zip code returned is \"10000000\"",
  "keyword": "Then ",
  "line": 39,
  "matchedColumns": [
    2
  ]
});
formatter.match({
  "arguments": [
    {
      "val": "13275400, 13275000, 13270000, 13200000, 13000000, 10000000, 00000000",
      "offset": 8
    },
    {
      "val": "19999999",
      "offset": 108
    }
  ],
  "location": "ZipCodeSearchSteps.search_for_zip_code(String,String)"
});
formatter.result({
  "duration": 8217410,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10000000",
      "offset": 22
    }
  ],
  "location": "ZipCodeSearchSteps.zip_code_returned(String)"
});
formatter.result({
  "duration": 126652,
  "status": "passed"
});
formatter.before({
  "duration": 6572177,
  "status": "passed"
});
formatter.scenario({
  "id": "find-full-address-given-zip-code;resolve-to-more-general-zip-code-(replacing-ending-with-0);;8",
  "description": "",
  "name": "resolve to more general zip code (replacing ending with 0)",
  "keyword": "Scenario Outline",
  "line": 48,
  "type": "scenario"
});
formatter.step({
  "name": "Exists \"13275400, 13275000, 13270000, 13200000, 13000000, 10000000, 00000000\" zip codes, when I search for \"99999999\" zip code",
  "keyword": "Given ",
  "line": 38,
  "matchedColumns": [
    0,
    1
  ]
});
formatter.step({
  "name": "zip code returned is \"00000000\"",
  "keyword": "Then ",
  "line": 39,
  "matchedColumns": [
    2
  ]
});
formatter.match({
  "arguments": [
    {
      "val": "13275400, 13275000, 13270000, 13200000, 13000000, 10000000, 00000000",
      "offset": 8
    },
    {
      "val": "99999999",
      "offset": 108
    }
  ],
  "location": "ZipCodeSearchSteps.search_for_zip_code(String,String)"
});
formatter.result({
  "duration": 6502069,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "00000000",
      "offset": 22
    }
  ],
  "location": "ZipCodeSearchSteps.zip_code_returned(String)"
});
formatter.result({
  "duration": 74798,
  "status": "passed"
});
});