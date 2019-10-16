const numberTools = require('./number-tools');

const validate = function (input) {
    if (this.isRequired === false && input === undefined)
        return (null);
    if (this.isRequired === true && input === undefined)
        return `${this.label} is required.`;
    if (isNaN(input))
        return `invalid ${this.label} must be a valid number`;
    if (this.maxLength !== null && parseInt(input) > this.maxLength) 
        return `invalid ${this.label} must not be greater than ${this.maxLength} `;
    if (this.minLength !== null && parseInt(input) < this.minLength) 
        return `invalid ${this.label} must be at least ${this.minLength} characters`;
    return (null);
}

module.exports = () =>  {
    return {
        label: '',
        isRequired: false,
        maxLength: null,
        minLength: null,
        required: numberTools.required,
        max: numberTools.max,
        min: numberTools.min,
        validate
    };
};