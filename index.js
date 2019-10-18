const _string = require('./string');
const _number = require('./number');

const _validate = async (schema, data) => {
    const dataArray = Object.keys(schema);
    const details = {};
    let errorMessage = null;
    let has_error = false;
    const errorObject = {};

    dataArray.forEach((key) => {
        const input = data[key];
        const field = schema[key];
    
        if (field.reference !== false)
            field.reference = [field.reference, data[field.reference]];
        field.label = key;
        errorMessage = field.validate(input);
        if (errorMessage !== null) {
            details[key] = errorMessage;
            has_error = true;
        }
    });
    if (has_error) {
        errorObject.details = details;
        throw errorObject;
    }
    return (data);
}

module.exports = {
    string: _string,
    number: _number,
    validate: _validate
};