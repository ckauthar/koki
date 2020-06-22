//jshint esversion:7

exports.getDate = function () {

    const today = new Date();
    
    const options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };   

    return today.toLocaleDateString("en-Us", options);

};

exports.getDay = function () {

    const today = new Date();

    const options = {
        weekday: "long"
    };

    return today.toLocaleDateString("en-US", options);
};

console.log(module.exports);