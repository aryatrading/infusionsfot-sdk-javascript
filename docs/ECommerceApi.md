# InfusionsoftRestApi.ECommerceApi

All URIs are relative to *https://api.infusionsoft.com/crm/rest/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**loadOrderUsingGET**](ECommerceApi.md#loadOrderUsingGET) | **GET** /orders/{orderId} | Retrieve an Order
[**searchUsingGET1**](ECommerceApi.md#searchUsingGET1) | **GET** /orders | List Orders
[**searchUsingGET2**](ECommerceApi.md#searchUsingGET2) | **GET** /transactions | List Transactions
[**transactionByIdUsingGET**](ECommerceApi.md#transactionByIdUsingGET) | **GET** /transactions/{transactionId} | Retrieve a Transaction
[**transactionsForOrderUsingGET**](ECommerceApi.md#transactionsForOrderUsingGET) | **GET** /orders/{orderId}/transactions | Retrieve Order Transactions


<a name="loadOrderUsingGET"></a>
# **loadOrderUsingGET**
> Order loadOrderUsingGET(orderId)

Retrieve an Order

Retrieves a single order

### Example
```javascript
var InfusionsoftRestApi = require('infusionsoft_rest_api');

var apiInstance = new InfusionsoftRestApi.ECommerceApi();

var orderId = 789; // Number | orderId


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.loadOrderUsingGET(orderId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderId** | **Number**| orderId | 

### Return type

[**Order**](Order.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="searchUsingGET1"></a>
# **searchUsingGET1**
> OrderList searchUsingGET1(opts)

List Orders

Retrieves a list of all orders using the specified search criteria

### Example
```javascript
var InfusionsoftRestApi = require('infusionsoft_rest_api');

var apiInstance = new InfusionsoftRestApi.ECommerceApi();

var opts = { 
  'since': "since_example", // String | Date to start searching from ex. `2017-01-01T22:17:59.039Z`
  'until': "until_example", // String | Date to search to ex. `2017-01-01T22:17:59.039Z`
  'limit': 56, // Number | Sets a total of items to return
  'offset': 56, // Number | Sets a beginning range of items to return
  'paid': true, // Boolean | Sets paid status of items to return
  'order': "order_example", // String | Attribute to order items by
  'contactId': 789, // Number | Returns orders for the provided contact id
  'productId': 789 // Number | Returns orders containing the provided product id
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.searchUsingGET1(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **since** | **String**| Date to start searching from ex. `2017-01-01T22:17:59.039Z` | [optional] 
 **until** | **String**| Date to search to ex. `2017-01-01T22:17:59.039Z` | [optional] 
 **limit** | **Number**| Sets a total of items to return | [optional] 
 **offset** | **Number**| Sets a beginning range of items to return | [optional] 
 **paid** | **Boolean**| Sets paid status of items to return | [optional] 
 **order** | **String**| Attribute to order items by | [optional] 
 **contactId** | **Number**| Returns orders for the provided contact id | [optional] 
 **productId** | **Number**| Returns orders containing the provided product id | [optional] 

### Return type

[**OrderList**](OrderList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="searchUsingGET2"></a>
# **searchUsingGET2**
> TransactionList searchUsingGET2(opts)

List Transactions

Retrieves a list transactions for a given contact

### Example
```javascript
var InfusionsoftRestApi = require('infusionsoft_rest_api');

var apiInstance = new InfusionsoftRestApi.ECommerceApi();

var opts = { 
  'since': "since_example", // String | Date to start searching from ex. `2017-01-01T22:17:59.039Z`
  'until': "until_example", // String | Date to search to ex. `2017-01-01T22:17:59.039Z`
  'limit': 56, // Number | Sets a total of items to return
  'offset': 56, // Number | Sets a beginning range of items to return
  'contactId': 789 // Number | Returns transactions for the provided contact id
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.searchUsingGET2(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **since** | **String**| Date to start searching from ex. `2017-01-01T22:17:59.039Z` | [optional] 
 **until** | **String**| Date to search to ex. `2017-01-01T22:17:59.039Z` | [optional] 
 **limit** | **Number**| Sets a total of items to return | [optional] 
 **offset** | **Number**| Sets a beginning range of items to return | [optional] 
 **contactId** | **Number**| Returns transactions for the provided contact id | [optional] 

### Return type

[**TransactionList**](TransactionList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="transactionByIdUsingGET"></a>
# **transactionByIdUsingGET**
> Transaction transactionByIdUsingGET(transactionId)

Retrieve a Transaction

Retrieves a single transaction

### Example
```javascript
var InfusionsoftRestApi = require('infusionsoft_rest_api');

var apiInstance = new InfusionsoftRestApi.ECommerceApi();

var transactionId = 789; // Number | transactionId


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.transactionByIdUsingGET(transactionId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transactionId** | **Number**| transactionId | 

### Return type

[**Transaction**](Transaction.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="transactionsForOrderUsingGET"></a>
# **transactionsForOrderUsingGET**
> TransactionList transactionsForOrderUsingGET(orderId, opts)

Retrieve Order Transactions

Retrieves a list of all transactions on a given order using the specified search criteria

### Example
```javascript
var InfusionsoftRestApi = require('infusionsoft_rest_api');

var apiInstance = new InfusionsoftRestApi.ECommerceApi();

var orderId = "orderId_example"; // String | orderId

var opts = { 
  'since': "since_example", // String | Date to start searching from ex. `2017-01-01T22:17:59.039Z`
  'until': "until_example", // String | Date to search to ex. `2017-01-01T22:17:59.039Z`
  'limit': 56, // Number | Sets a total of items to return
  'offset': 56, // Number | Sets a beginning range of items to return
  'contactId': 789 // Number | Returns transactions for the provided contact id
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.transactionsForOrderUsingGET(orderId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderId** | **String**| orderId | 
 **since** | **String**| Date to start searching from ex. `2017-01-01T22:17:59.039Z` | [optional] 
 **until** | **String**| Date to search to ex. `2017-01-01T22:17:59.039Z` | [optional] 
 **limit** | **Number**| Sets a total of items to return | [optional] 
 **offset** | **Number**| Sets a beginning range of items to return | [optional] 
 **contactId** | **Number**| Returns transactions for the provided contact id | [optional] 

### Return type

[**TransactionList**](TransactionList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

