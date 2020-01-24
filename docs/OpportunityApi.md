# InfusionsoftRestApi.OpportunityApi

All URIs are relative to *https://api.infusionsoft.com/crm/rest/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createOpportunityUsingPOST**](OpportunityApi.md#createOpportunityUsingPOST) | **POST** /opportunities | Create an Opportunity
[**getOpportunityUsingGET**](OpportunityApi.md#getOpportunityUsingGET) | **GET** /opportunities/{opportunityId} | Retrieve an Opportunity
[**getStagePipelineUsingGET**](OpportunityApi.md#getStagePipelineUsingGET) | **GET** /opportunity/stage_pipeline | List Opportunity Stage Pipeline
[**listOpportunitiesUsingGET**](OpportunityApi.md#listOpportunitiesUsingGET) | **GET** /opportunities | List Opportunities
[**replaceOpportunityUsingPUT**](OpportunityApi.md#replaceOpportunityUsingPUT) | **PUT** /opportunities | Replace an Opportunity
[**updateOpportunityUsingPATCH**](OpportunityApi.md#updateOpportunityUsingPATCH) | **PATCH** /opportunities/{opportunityId} | Update an Opportunity


<a name="createOpportunityUsingPOST"></a>
# **createOpportunityUsingPOST**
> Opportunity createOpportunityUsingPOST(opts)

Create an Opportunity

Creates a new opportunity as the authenticated user. NB: Opportunity must contain values for `opportunity_title`, `contact`, and `stage`.

### Example
```javascript
var InfusionsoftRestApi = require('infusionsoft_rest_api');

var apiInstance = new InfusionsoftRestApi.OpportunityApi();

var opts = { 
  'opportunity': new InfusionsoftRestApi.Opportunity() // Opportunity | opportunity
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createOpportunityUsingPOST(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **opportunity** | [**Opportunity**](Opportunity.md)| opportunity | [optional] 

### Return type

[**Opportunity**](Opportunity.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getOpportunityUsingGET"></a>
# **getOpportunityUsingGET**
> Opportunity getOpportunityUsingGET(opportunityId)

Retrieve an Opportunity

Retrives a single opportunity

### Example
```javascript
var InfusionsoftRestApi = require('infusionsoft_rest_api');

var apiInstance = new InfusionsoftRestApi.OpportunityApi();

var opportunityId = 789; // Number | opportunityId


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getOpportunityUsingGET(opportunityId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **opportunityId** | **Number**| opportunityId | 

### Return type

[**Opportunity**](Opportunity.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getStagePipelineUsingGET"></a>
# **getStagePipelineUsingGET**
> [SalesPipeline] getStagePipelineUsingGET()

List Opportunity Stage Pipeline

Retrieves a list of all opportunity stages with pipeline details

### Example
```javascript
var InfusionsoftRestApi = require('infusionsoft_rest_api');

var apiInstance = new InfusionsoftRestApi.OpportunityApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getStagePipelineUsingGET(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[SalesPipeline]**](SalesPipeline.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listOpportunitiesUsingGET"></a>
# **listOpportunitiesUsingGET**
> OpportunityList listOpportunitiesUsingGET(opts)

List Opportunities

Retrieves a list of all opportunities

### Example
```javascript
var InfusionsoftRestApi = require('infusionsoft_rest_api');

var apiInstance = new InfusionsoftRestApi.OpportunityApi();

var opts = { 
  'limit': 56, // Number | Sets a total of items to return
  'offset': 56, // Number | Sets a beginning range of items to return
  'userId': 789, // Number | Returns opportunities for the provided user id
  'stageId': 789, // Number | Returns opportunities for the provided stage id
  'searchTerm': "searchTerm_example", // String | Returns opportunities that match any of the contact's `given_name`, `family_name`, `company_name`, and `email_addresses` (searches `EMAIL1` only) fields as well as `opportunity_title`
  'order': "order_example" // String | Attribute to order items by
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.listOpportunitiesUsingGET(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **Number**| Sets a total of items to return | [optional] 
 **offset** | **Number**| Sets a beginning range of items to return | [optional] 
 **userId** | **Number**| Returns opportunities for the provided user id | [optional] 
 **stageId** | **Number**| Returns opportunities for the provided stage id | [optional] 
 **searchTerm** | **String**| Returns opportunities that match any of the contact's `given_name`, `family_name`, `company_name`, and `email_addresses` (searches `EMAIL1` only) fields as well as `opportunity_title` | [optional] 
 **order** | **String**| Attribute to order items by | [optional] 

### Return type

[**OpportunityList**](OpportunityList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="replaceOpportunityUsingPUT"></a>
# **replaceOpportunityUsingPUT**
> Opportunity replaceOpportunityUsingPUT(opts)

Replace an Opportunity

Replaces all values of a given opportunity

### Example
```javascript
var InfusionsoftRestApi = require('infusionsoft_rest_api');

var apiInstance = new InfusionsoftRestApi.OpportunityApi();

var opts = { 
  'opportunity': new InfusionsoftRestApi.Opportunity() // Opportunity | opportunity
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.replaceOpportunityUsingPUT(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **opportunity** | [**Opportunity**](Opportunity.md)| opportunity | [optional] 

### Return type

[**Opportunity**](Opportunity.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateOpportunityUsingPATCH"></a>
# **updateOpportunityUsingPATCH**
> Opportunity updateOpportunityUsingPATCH(opportunityId, opts)

Update an Opportunity

Updates an opportunity with only the values provided in the request.

### Example
```javascript
var InfusionsoftRestApi = require('infusionsoft_rest_api');

var apiInstance = new InfusionsoftRestApi.OpportunityApi();

var opportunityId = 789; // Number | opportunityId

var opts = { 
  'opportunity': new InfusionsoftRestApi.Opportunity() // Opportunity | opportunity
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateOpportunityUsingPATCH(opportunityId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **opportunityId** | **Number**| opportunityId | 
 **opportunity** | [**Opportunity**](Opportunity.md)| opportunity | [optional] 

### Return type

[**Opportunity**](Opportunity.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

