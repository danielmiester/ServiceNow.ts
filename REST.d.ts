class RESTAPIRequest{
    /**
     * The body of the request.
     */
    body:RESTAPIRequestBody;
    /**
     *The path parameters passed in the request URI.
     */
    pathParams:Object;
    /**
     *The query parameters from the web service request.
     */
    queryParams:Object;
    /**
     *The entire query added to the endpoint URI.
     */
    queryString:string;
    /**
     * The request URI, excluding domain information.
     */
    uri:string;
    /**
     * The entire request URL.
     */
    url:string;
    /**
     * All headers from the request, and their values.
     */
    headers:Object;

    /**
     * Get the value of a specific header from the web service request.
     *
     * @param {string} header The name of the header, such as accept or content-type.
     * @example
     * var acceptHeader = request.getHeader('accept');
     * @return {string}
     *
     */
    getHeader(header:string):string;

    /**
     * Get the content types specified in the request Accept header.
     */
    getSupportedResponseContentTypes():Array<string>

}
class RESTAPIResponse{
    /**
     * Get the ResponseStreamWriter for this response,
     * allowing you to write directly to the response stream.
     * Set the content type and status code using the setHeaders and
     * setStatus functions prior to calling the getStreamWriter function.
     * If you do not set a status code, the status code defaults to 200.
     *
     * @returns {RESTAPIResponseStream} The ResponseStreamWriter for this response.
     * You can use this object to write directly to the response stream.
     */
    getStreamWriter():RESTAPIResponseStream;

    /**
     *
     * @param body The response body, as a JavaScript object.
     * The body content is automatically serialized to JSON or XML
     * depending on the value of the Accept header passed in the request.
     */
    setBody(body:Object):void;
    setHeaders(headers:Object):void;
    setLocation(location:string);
    setStatus(status:number);
    setHeader(header:string, value:string):void;
    setContentType(contentType:string):void;
    setError(error:Object):void;



}
/**
 *
 */
class RESTAPIRequestBody{
    data:Object|Array;
    dataStream:Object;
    dataString:string;
    hasNext():boolean;
    nextEntry():Object;
}

class RESTAPIResponseStream{
    /**
     * Ensure you set the response content type and status code before writing a response. You cannot modify these values after calling this function.
     * @param stream
     */
    writeStream(stream:Object):void;
    writeString(data:string):void;
}