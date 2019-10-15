const stringTools = require('./string-tools');

const validate = async function (schema, data) {
    const schemaArray = Object.keys(schema);
    const responseObject = {
        status: true,
        fields: [],
        details: {}
    }
    await schemaArray.forEach(key => {
        if (schema[key].isRequired === true && data[key] === undefined)
        {
            responseObject.fields.push(key);
            responseObject.status = false;
            responseObject.details[key] = `${key} is required.`;
            return
        }
        if (typeof data[key] !== 'string') {
            responseObject.fields.push(key);
            responseObject.status = false;
            responseObject.details[key] = `invalid ${key} must be string`;
            return
        }
        if (schema[key].maxLength !== null && data[key].trim().length > schema[key].maxLength) {
            responseObject.fields.push(key);
            responseObject.status = false;
            responseObject.details[key] = `invalid ${key} must be ${schema[key].maxLength} characters max`;
            return
        }
        if (schema[key].minLength !== null && data[key].trim().length < schema[key].minLength) {
            responseObject.fields.push(key);
            responseObject.status = false;
            responseObject.details[key] = `invalid ${key} must be at least ${schema[key].minLength} characters`;
            return
        }
        if (schema[key].isAlpha === true && !/^[a-z]+$/i.test(data[key].trim())) {
            responseObject.fields.push(key);
            responseObject.status = false;
            responseObject.details[key] = `invalid ${key} must contain only characters from (a-Z)`;
            return
        }
        if (schema[key].isAlphanum === true && !/^[a-z0-9]+$/i.test(data[key].trim())) {
            responseObject.fields.push(key);
            responseObject.status = false;
            responseObject.details[key] = `invalid ${key} must contain only characters from (a-Z) or (0-9)`;
            return
        }
        if (schema[key].hasPattern !== null && !schema[key].hasPattern.test(data[key]))
        {
            responseObject.fields.push(key);
            responseObject.status = false;
            responseObject.details[key] = `invalid ${key} does not match the given pattern`;
            return
        }
    });
    return (responseObject);
}

module.exports = () =>  {
    return {
        isRequired: false,
        maxLength: null,
        minLength: null,
        isAlpha: false,
        hasPattern: null,
        required: stringTools.required,
        max: stringTools.max,
        min: stringTools.min,
        alpha: stringTools.alpha,
        pattern: stringTools.pattern,
        alphanum: stringTools.alphanum,
        validate
    };
};