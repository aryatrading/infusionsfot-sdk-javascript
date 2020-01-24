# InfusionsoftRestApi.RESTHooksApi

All URIs are relative to *https://api.infusionsoft.com/crm/rest/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createAHookSubscription**](RESTHooksApi.md#createAHookSubscription) | **POST** /hooks | Create a Hook Subscription
[**deleteAHookSubscription**](RESTHooksApi.md#deleteAHookSubscription) | **DELETE** /hooks/{key} | Delete a Hook Subscription
[**listHookEventTypes**](RESTHooksApi.md#listHookEventTypes) | **GET** /hooks/event_keys | List Hook Event Types
[**listStoredHookSubscriptions**](RESTHooksApi.md#listStoredHookSubscriptions) | **GET** /hooks | List Stored Hook Subscriptions
[**retrieveAHookSubscription**](RESTHooksApi.md#retrieveAHookSubscription) | **GET** /hooks/{key} | Retrieve a Hook Subscription
[**updateAHookSubscription**](RESTHooksApi.md#updateAHookSubscription) | **PUT** /hooks/{key} | Update a Hook Subscription
[**verifyAHookSubscription**](RESTHooksApi.md#verifyAHookSubscription) | **POST** /hooks/{key}/verify | Verify a Hook Subscription


<a name="createAHookSubscription"></a>
# **createAHookSubscription**
> RestHook createAHookSubscription(restHookRequest)

Create a Hook Subscription

To receive hooks, you'll first need to subscribe to events one at a time *and* individually verify each subscription.  This operation is used to create hook subscriptions. During this process, Infusionsoft will attempt to verify your subscription. Continue reading to learn how that works.  To verify or reactivate a hook subscription, Infusionsoft will make a `POST` request with a temporary secret to the `hookUrl` you provided during creation. The secret is passed as the value of a header named `X-Hook-Secret`. Your response to that `POST` *must* have a status code of `200` and return the same `X-Hook-Secret` header and value pair. Once you've done that, you'll begin receiving hooks. Don't worry if verification fails; you can always [request another verification attempt](#!/REST_Hooks/verify_a_hook_subscription).  NB: You will not receive events until the subscription is verified.  If the verification process seems confusing, head over to [RESTHooks.org](http://resthooks.org/docs/security/) for more on the concept.

### Example
```javascript
var InfusionsoftRestApi = require('infusionsoft_rest_api');

var apiInstance = new InfusionsoftRestApi.RESTHooksApi();

var restHookRequest = new InfusionsoftRestApi.RestHookRequest(); // RestHookRequest | restHookRequest


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createAHookSubscription(restHookRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **restHookRequest** | [**RestHookRequest**](RestHookRequest.md)| restHookRequest | 

### Return type

[**RestHook**](RestHook.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteAHookSubscription"></a>
# **deleteAHookSubscription**
> deleteAHookSubscription(key)

Delete a Hook Subscription

Stop receiving hooks by deleting an existing hook subscription.

### Example
```javascript
var InfusionsoftRestApi = require('infusionsoft_rest_api');

var apiInstance = new InfusionsoftRestApi.RESTHooksApi();

var key = "key_example"; // String | key


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteAHookSubscription(key, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key** | **String**| key | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listHookEventTypes"></a>
# **listHookEventTypes**
> ['String'] listHookEventTypes()

List Hook Event Types

### _What are REST Hooks?_  _REST Hooks itself is not a specification, it is a collection of patterns that treat webhooks like subscriptions. These subscriptions are manipulated via a REST API just like any other resource._  _With most modern REST APIs, polling is the only way to detect changes. But it doesn't have to be. On average, 98.5% of polls are wasted. There is a better way. REST Hooks enable real-time communication and eliminate polling._ -- [RESTHooks.org](http://RESTHooks.org)  Infusionsoft offers a growing set of REST Hooks to keep you notified of changes in your data. To get started, use [List Hook Event Types](#!/REST_Hooks/list_hook_event_types) to discover event types. Event types are identified using _noun.verb dot syntax_, e.g.: `contact.add` or `invoice.delete`.  Once you've chosen the events you're interested in, subscribe to them via [Create a Hook Subscription](#!/REST_Hooks/create_a_hook_subscription).

### Example
```javascript
var InfusionsoftRestApi = require('infusionsoft_rest_api');

var apiInstance = new InfusionsoftRestApi.RESTHooksApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.listHookEventTypes(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

**['String']**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listStoredHookSubscriptions"></a>
# **listStoredHookSubscriptions**
> [RestHook] listStoredHookSubscriptions()

List Stored Hook Subscriptions

Lists your hook subscriptions.

### Example
```javascript
var InfusionsoftRestApi = require('infusionsoft_rest_api');

var apiInstance = new InfusionsoftRestApi.RESTHooksApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.listStoredHookSubscriptions(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[RestHook]**](RestHook.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="retrieveAHookSubscription"></a>
# **retrieveAHookSubscription**
> RestHook retrieveAHookSubscription(key)

Retrieve a Hook Subscription

Retrieves an existing hook subscription and its status. If your hook subscription becomes inactive, you may request an activation attempt via [Verify a Hook Subscription](#!/REST_Hooks/verify_a_hook_subscription).

### Example
```javascript
var InfusionsoftRestApi = require('infusionsoft_rest_api');

var apiInstance = new InfusionsoftRestApi.RESTHooksApi();

var key = "key_example"; // String | key


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.retrieveAHookSubscription(key, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key** | **String**| key | 

### Return type

[**RestHook**](RestHook.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateAHookSubscription"></a>
# **updateAHookSubscription**
> RestHook updateAHookSubscription(key, restHookRequest)

Update a Hook Subscription

Modify an existing hook subscription using the provided values.

### Example
```javascript
var InfusionsoftRestApi = require('infusionsoft_rest_api');

var apiInstance = new InfusionsoftRestApi.RESTHooksApi();

var key = "key_example"; // String | key

var restHookRequest = new InfusionsoftRestApi.RestHookRequest(); // RestHookRequest | restHookRequest


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateAHookSubscription(key, restHookRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key** | **String**| key | 
 **restHookRequest** | [**RestHookRequest**](RestHookRequest.md)| restHookRequest | 

### Return type

[**RestHook**](RestHook.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="verifyAHookSubscription"></a>
# **verifyAHookSubscription**
> RestHook verifyAHookSubscription(key)

Verify a Hook Subscription

This operation is used to verify or reactivate a hook subscription.  To verify or reactivate a hook subscription, Infusionsoft will make a `POST` request with a temporary secret to the `hookUrl` you provided during creation. The secret is passed as the value of a header named `X-Hook-Secret`. Your response to that `POST` *must* have a status code of `200` and return the same `X-Hook-Secret` header and value pair. Once you've done that, you'll begin receiving hooks. Don't worry if verification fails; you can always [request another verification attempt](#!/REST_Hooks/verify_a_hook_subscription).  NB: You will not receive events until the subscription is verified.  If the verification process seems confusing, head over to [RESTHooks.org](http://resthooks.org/docs/security/) for more on the concept.

### Example
```javascript
var InfusionsoftRestApi = require('infusionsoft_rest_api');

var apiInstance = new InfusionsoftRestApi.RESTHooksApi();

var key = "key_example"; // String | key


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.verifyAHookSubscription(key, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key** | **String**| key | 

### Return type

[**RestHook**](RestHook.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

