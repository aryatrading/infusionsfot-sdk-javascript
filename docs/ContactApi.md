# InfusionsoftRestApi.ContactApi

All URIs are relative to *https://api.infusionsoft.com/crm/rest/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**applyTagsToContactIdUsingPOST**](ContactApi.md#applyTagsToContactIdUsingPOST) | **POST** /contacts/{contactId}/tags | Apply Tags
[**createContactUsingPOST**](ContactApi.md#createContactUsingPOST) | **POST** /contacts | Create a Contact
[**createOrUpdateContactUsingPUT**](ContactApi.md#createOrUpdateContactUsingPUT) | **PUT** /contacts | Create or Update a Contact
[**deleteContactUsingDELETE**](ContactApi.md#deleteContactUsingDELETE) | **DELETE** /contacts/{contactId} | Delete a Contact
[**listAppliedTagsUsingGET**](ContactApi.md#listAppliedTagsUsingGET) | **GET** /contacts/{contactId}/tags | List Applied Tags
[**listContactsUsingGET**](ContactApi.md#listContactsUsingGET) | **GET** /contacts | List Contacts
[**listCustomFieldsUsingGET**](ContactApi.md#listCustomFieldsUsingGET) | **GET** /contactCustomFields | List Contact Custom Fields
[**loadUsingGET**](ContactApi.md#loadUsingGET) | **GET** /contacts/{contactId} | Retrieve a Contact
[**removeTagsFromContactUsingDELETE**](ContactApi.md#removeTagsFromContactUsingDELETE) | **DELETE** /contacts/{contactId}/tags/{tagId} | Remove Applied Tag
[**removeTagsFromContactUsingDELETE1**](ContactApi.md#removeTagsFromContactUsingDELETE1) | **DELETE** /contacts/{contactId}/tags | Remove Applied Tags
[**updateContactUsingPATCH**](ContactApi.md#updateContactUsingPATCH) | **PATCH** /contacts/{contactId} | Update a Contact


<a name="applyTagsToContactIdUsingPOST"></a>
# **applyTagsToContactIdUsingPOST**
> [EntryLongString] applyTagsToContactIdUsingPOST(contactId, tagIds)

Apply Tags

Apply a list of tags to a given contact record

### Example
```javascript
var InfusionsoftRestApi = require('infusionsoft_rest_api');

var apiInstance = new InfusionsoftRestApi.ContactApi();

var contactId = 789; // Number | contactId

var tagIds = new InfusionsoftRestApi.TagId(); // TagId | tagIds


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.applyTagsToContactIdUsingPOST(contactId, tagIds, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contactId** | **Number**| contactId | 
 **tagIds** | [**TagId**](TagId.md)| tagIds | 

### Return type

[**[EntryLongString]**](EntryLongString.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createContactUsingPOST"></a>
# **createContactUsingPOST**
> FullContact createContactUsingPOST(opts)

Create a Contact

Creates a new contact as the authenticated user. NB: Contact must contain at least one item in `email_addresses` or `phone_numbers`. NB: `country_code` is required if `region` is specified.

### Example
```javascript
var InfusionsoftRestApi = require('infusionsoft_rest_api');

var apiInstance = new InfusionsoftRestApi.ContactApi();

var opts = { 
  'contact': new InfusionsoftRestApi.FullContact() // FullContact | contact
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createContactUsingPOST(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contact** | [**FullContact**](FullContact.md)| contact | [optional] 

### Return type

[**FullContact**](FullContact.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createOrUpdateContactUsingPUT"></a>
# **createOrUpdateContactUsingPUT**
> FullContact createOrUpdateContactUsingPUT(opts)

Create or Update a Contact

Creates a new contact or updates a contact as the authenticated user. NB: New Contacts must contain at least one item in `email_addresses` or `phone_numbers`. NB: `country_code` is required if `region` is specified. Existing Contacts are updated with only the values provided in the request. Accepts a `duplicate_option` which performs duplicate checking by one of the following options: `Email`, `EmailAndName`, `EmailAndNameAndCompany`, if a match is found using the option provided, the existing contact will be updated. If an existing contact was not found using the `duplicate_option` provided, a new contact record will be created

### Example
```javascript
var InfusionsoftRestApi = require('infusionsoft_rest_api');

var apiInstance = new InfusionsoftRestApi.ContactApi();

var opts = { 
  'contact': new InfusionsoftRestApi.UpsertContact() // UpsertContact | contact
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createOrUpdateContactUsingPUT(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contact** | [**UpsertContact**](UpsertContact.md)| contact | [optional] 

### Return type

[**FullContact**](FullContact.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteContactUsingDELETE"></a>
# **deleteContactUsingDELETE**
> deleteContactUsingDELETE(contactId)

Delete a Contact

Deletes the specified contact

### Example
```javascript
var InfusionsoftRestApi = require('infusionsoft_rest_api');

var apiInstance = new InfusionsoftRestApi.ContactApi();

var contactId = 789; // Number | contactId


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteContactUsingDELETE(contactId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contactId** | **Number**| contactId | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listAppliedTagsUsingGET"></a>
# **listAppliedTagsUsingGET**
> ContactTagList listAppliedTagsUsingGET(contactId, opts)

List Applied Tags

Retrieves a list of tags applied to a given contact

### Example
```javascript
var InfusionsoftRestApi = require('infusionsoft_rest_api');

var apiInstance = new InfusionsoftRestApi.ContactApi();

var contactId = 789; // Number | contactId

var opts = { 
  'limit': 56, // Number | Sets a total of items to return
  'offset': 56 // Number | Sets a beginning range of items to return
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.listAppliedTagsUsingGET(contactId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contactId** | **Number**| contactId | 
 **limit** | **Number**| Sets a total of items to return | [optional] 
 **offset** | **Number**| Sets a beginning range of items to return | [optional] 

### Return type

[**ContactTagList**](ContactTagList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listContactsUsingGET"></a>
# **listContactsUsingGET**
> ContactList listContactsUsingGET(opts)

List Contacts

Retrieves a list of all contacts

### Example
```javascript
var InfusionsoftRestApi = require('infusionsoft_rest_api');

var apiInstance = new InfusionsoftRestApi.ContactApi();

var opts = { 
  'limit': 56, // Number | Sets a total of items to return
  'offset': 56, // Number | Sets a beginning range of items to return
  'email': "email_example", // String | Optional email address to query on
  'givenName': "givenName_example", // String | Optional first name or forename to query on
  'familyName': "familyName_example", // String | Optional last name or surname to query on
  'order': "order_example" // String | Attribute to order items by
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.listContactsUsingGET(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **Number**| Sets a total of items to return | [optional] 
 **offset** | **Number**| Sets a beginning range of items to return | [optional] 
 **email** | **String**| Optional email address to query on | [optional] 
 **givenName** | **String**| Optional first name or forename to query on | [optional] 
 **familyName** | **String**| Optional last name or surname to query on | [optional] 
 **order** | **String**| Attribute to order items by | [optional] 

### Return type

[**ContactList**](ContactList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listCustomFieldsUsingGET"></a>
# **listCustomFieldsUsingGET**
> [CustomFieldMetaData] listCustomFieldsUsingGET()

List Contact Custom Fields

Retrieves a list of custom fields for Contacts

### Example
```javascript
var InfusionsoftRestApi = require('infusionsoft_rest_api');

var apiInstance = new InfusionsoftRestApi.ContactApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.listCustomFieldsUsingGET(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[CustomFieldMetaData]**](CustomFieldMetaData.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="loadUsingGET"></a>
# **loadUsingGET**
> FullContact loadUsingGET(contactId, opts)

Retrieve a Contact

Retrieves a single contact

### Example
```javascript
var InfusionsoftRestApi = require('infusionsoft_rest_api');

var apiInstance = new InfusionsoftRestApi.ContactApi();

var contactId = 789; // Number | contactId

var opts = { 
  'optionalProperties': ["optionalProperties_example"] // [String] | Comma-delimited list of Contact properties to include in the response. (Some fields such as `lead_source_id`, `custom_fields`, and `job_title` aren't included, by default.)
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.loadUsingGET(contactId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contactId** | **Number**| contactId | 
 **optionalProperties** | [**[String]**](String.md)| Comma-delimited list of Contact properties to include in the response. (Some fields such as `lead_source_id`, `custom_fields`, and `job_title` aren't included, by default.) | [optional] 

### Return type

[**FullContact**](FullContact.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="removeTagsFromContactUsingDELETE"></a>
# **removeTagsFromContactUsingDELETE**
> removeTagsFromContactUsingDELETE(contactId, tagId)

Remove Applied Tag

Removes a tag from the given contact

### Example
```javascript
var InfusionsoftRestApi = require('infusionsoft_rest_api');

var apiInstance = new InfusionsoftRestApi.ContactApi();

var contactId = 789; // Number | contactId

var tagId = 789; // Number | tagId


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.removeTagsFromContactUsingDELETE(contactId, tagId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contactId** | **Number**| contactId | 
 **tagId** | **Number**| tagId | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="removeTagsFromContactUsingDELETE1"></a>
# **removeTagsFromContactUsingDELETE1**
> removeTagsFromContactUsingDELETE1(contactId, ids)

Remove Applied Tags

Removes a list of tags from the given contact

### Example
```javascript
var InfusionsoftRestApi = require('infusionsoft_rest_api');

var apiInstance = new InfusionsoftRestApi.ContactApi();

var contactId = 789; // Number | contactId

var ids = "ids_example"; // String | ids


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.removeTagsFromContactUsingDELETE1(contactId, ids, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contactId** | **Number**| contactId | 
 **ids** | **String**| ids | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateContactUsingPATCH"></a>
# **updateContactUsingPATCH**
> FullContact updateContactUsingPATCH(contactId, opts)

Update a Contact

Updates a contact with only the values provided in the request.

### Example
```javascript
var InfusionsoftRestApi = require('infusionsoft_rest_api');

var apiInstance = new InfusionsoftRestApi.ContactApi();

var contactId = 789; // Number | contactId

var opts = { 
  'contact': new InfusionsoftRestApi.FullContact() // FullContact | contact
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateContactUsingPATCH(contactId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contactId** | **Number**| contactId | 
 **contact** | [**FullContact**](FullContact.md)| contact | [optional] 

### Return type

[**FullContact**](FullContact.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

