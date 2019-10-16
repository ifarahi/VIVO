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

module.exports = {
    required,
    max,
    min
}