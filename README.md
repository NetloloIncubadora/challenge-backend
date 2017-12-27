<p align="center">
  <a href="https://www.netlolo.com">
      <img src="https://app.netlolo.com/images/logo_vertical.png" alt="Netlolo"/>
  </a>
</p>

## Challenge for Backend Developer

A customer needs to search in a orderbook and he wants to buy offers below some price, and also sell offers to earn some money.

## Installing
1. ```npm install```

## Running the Application
1. ```npm start```

## Running UnitTest
1. ```npm test```

## Search Offers
Returns json data about offers based on one or more specific amounts. This results can also be sorted in ascending or descending order with an optional parameter.

* **URL**
/offer/:amounts/:sort?

*  **URL Params**

   **Required:**
 
   `amounts=[float]`

   **Optional:**

   `sort=[string]`

   * **Sample Call:**

  ```javascript
    $.ajax({
      url: "/offer/0.63322053/desc",
      dataType: "json",
      type : "GET",
      success : function(r) {
        console.log(r);
      }
    });
  ```
  http://localhost:3000/offer/0.63322053/desc
