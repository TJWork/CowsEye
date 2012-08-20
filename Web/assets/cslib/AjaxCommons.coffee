
###
A Wrapper around any Ajax Calls made by River Watch
Author Matthew Betts
###


# Globals
BASE_URL = "http://localhost:1469/"
PUT_TYPE = "PUT"
GET_TYPE = "GET"
CONTENT_TYPE = "contentType"
PROCESS_DATA = false
TIMEOUT = 5000
DATA_TYPE = "jsonp"

		
###
Make an AJAX Put request to the River Watch Server

	onSuccess (data) - function to execute on a successfull put, data is the responce from the server
	onFailure (data) - function to execute on a failed put, data is the resonce from the server
	data - Data the send to the server, this should be a map of maps\objects\primitives
	path - the path to add onto the url for the requested service

###

RWCall = (onSuccess, onFailure, data, path, args, callType) ->

	ajaxLoader = $ "#ajaxLoader"
	ajaxLoader.css "display", "block"
	
	# Format arguments
	first = true
	allArguments = "";
	for key in args
		
		# Append ? to indicate the first argument
		if first
			first = false
			allArguments += "?"
		
		# Append & to indicate another argument
		else
			allArguments += "&"
		
		# Append Key = Value
		allArguments += "#{key} = #{args[key]}"

	# Format the data
	json = JSON.stringify data 

	console.log(allArguments)
	
	$.ajax
		type: callType,
		url: BASE_URL + path + allArguments, # build path for request
		data: json,
		dataType: DATA_TYPE,
		processData: PROCESS_DATA,
		contentType: CONTENT_TYPE,
		timeout: TIMEOUT,
		success: (msg) ->
			onSuccess msg 
			ajaxLoader.css "display", "none"
		error: (msg) -> 
			onFailure msg
			ajaxLoader.css "display", "none"
	
###
Make an AJAX Gete request to the River Watch Server

	onSuccess (data) - function to execute on a successfull get, data is the responce from the server
	onFailure (data) - function to execute on a failed get, data is the resonce from the server
	args - Arguments to send to the server, this should be a map of keys to string values
	path - The path to add onto the url for the requested service

###

###
Save calls, so that can be accessed globaly across the website.
###
Window.RWCall = RWCall