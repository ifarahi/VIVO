const stringTools = require('./string-tools');

const validate = function (input) {        
    if (this.isRequired === false && input === undefined)
        return (null);
    if (this.isRequired === true && input === undefined)
        return `${this.label} is required.`;

    if (this.isBirthdate === true) {
        const [month = null, day = null, year = null] = input.split('-');
        const nowDate = new Date();
    
        if (day === null || month === null || year === null)
            return ('invalid birthdate');
        if ((parseInt(day) !== NaN) && (parseInt(month) !== NaN) && (parseInt(year) !== NaN))
        {
            if ((parseInt(day) > 0 && parseInt(day) <= 31) && (parseInt(month) > 0 && parseInt(month) <= 12) && (parseInt(year) < nowDate.getFullYear() && parseInt(year) > 1900))
                return (null);
            else
                return ('invalid birthdate');
        } else {
            return ('invalid birthdate');
        }
    }
    if (this.isEmail === true) {
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.trim()))
            return ('Invalid email adress');
        else
            return (null);
    }
    if (typeof input !== 'string') 
        return `invalid ${this.label} must be string`;
    if (this.maxLength !== null && input.trim().length > this.maxLength) 
        return `invalid ${this.label} must be ${this.maxLength} characters max`;
    if (this.minLength !== null && input.trim().length < this.minLength) 
        return `invalid ${this.label} must be at least ${this.minLength} characters`;
    if (this.isAlpha === true && !/^[a-z]+$/i.test(input.trim())) 
        return `invalid ${this.label} must contain only characters from (a-Z)`;
    if (this.isAlphanum === true && !/^[a-z0-9]+$/i.test(input.trim())) 
        return `invalid ${this.label} must contain only characters from (a-Z) or (0-9)`;
    if (this.hasPattern !== null && !this.hasPattern.test(input))
        return `invalid ${this.label} does not match the given pattern`;
    return (null);
}

module.exports = () =>  {
    return {
        label: '',
        isEmail: false,
        isBirthdate: false,
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
        email: stringTools.email,
        birthdate: stringTools.birthdate,
        validate
    };
};