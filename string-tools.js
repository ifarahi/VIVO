const number = function() {
    this.isNumber = true;
    return (this);
}

const email = function() {
    this.isEmail = true;
    return (this);
}

const alpha = function() {
    this.isAlpha = true;
    return (this);
}

const alphanum = function() {
    this.isAlphanum = true;
    return (this);
}

const required = function() {
    this.isRequired = true;
    return (this);
}

const max = function(length) {
    this.maxLength = length;
    return (this);
}

const min = function(length) {
    this.minLength = length;
    return (this);
}

const pattern = function(pattern) {
    this.hasPattern = pattern;
    return (this);
}

const birthdate = function() {
    this.isBirthdate = true;
    return (this);
}

module.exports = {
    email,
    required,
    max,
    min,
    pattern,
    alpha,
    alphanum,
    birthdate,
}