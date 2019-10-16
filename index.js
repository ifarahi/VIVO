const _string = require('./string');
const _number = require('./number');

const _validate = async (schema, data) => {
    const dataArray = Object.keys(schema);
    const details = {};
    let errorMessage = null;
    let has_error = false;

    dataArray.forEach((key) => {
        const input = data[key];
        const field = schema[key];
    
        field.label = key;
        errorMessage = field.validate(input);
        if (errorMessage !== null) {
            details[key] = errorMessage;
            has_error = true;
        }
    });
    if (has_error) {
        const errorObject = new Error('Validation fails.');
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