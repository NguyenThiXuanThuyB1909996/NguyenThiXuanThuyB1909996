class ApiError extends Error{
    constructor(statusCode, message){
        super();
        this.statusCode= startusCode;
        this.message = message;
    }
}
module.exports = ApiError;