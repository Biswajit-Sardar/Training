// string-utils.js

function capitalize(str) {
    if (typeof str!== "string" || str.length === 0) {
        return str;
    }
    return str.charAt(0).toUpperCase()+ str.slice(1).toLowerCase();
}

function reverseString(str) {
    return str.split("").reverse().join("");
}

function countWords(str) {
    return str.trim().split(/\s+/).filter(word => word.length > 0).length;
}

function truncate(str,maxLength,suffix = "...") {
    if (str.length <= maxLength) {
        return str;
    }
    return str.slice(0, maxLength)+ suffix;
}

module.exports = {
    capitalize,
    reverseString,
    countWords,
    truncate
};