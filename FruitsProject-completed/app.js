//jshint esversion:6

const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/fruits", {userNewUrlParser: true});

const fruitSchema = new mongoose.Schema ({
    name:  {
        type: String,
        required: [true, "Please check your data entry, no name specified!"]
    },    
    rating: {
        type: Number,
        min: 1,
        max: 10
    },
    review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);

const fruit = new Fruit ({
    rating: 10,
    review: "Peaches are so yummy!"
});

fruit.save();

const personSchema = new mongoose.Schema ({
    name: String,
    age: Number  
});

const Perspn = mongoose.model("Person", personSchema);

const mango = new Fruit({
    name: "Mango",
    score: 6,
    review: "Decent fruit."
})

mongoose.mongo.save();

Person.updateOne({name: "John"}, {favouiteFruit: mango}, function(err){
    if (err) {
        console.log(err);
    } else {
        console.log("Successfully updated the document.");
    }
});

const person = new Person({
    name: "John",
    age: 37
});

person.save();

Fruit.find(function(err, fruits) {
    if (err) {
        console.log(err);
    } else {
        
        mongoose.connection.close();

        fruits.forEach(function(fruit) {
            console.log(fruit.nme);
        });
    }
});

Fruit.updateOne({_id: "5bc0854dd6ec7ad010738bc7"}, {name: "Peach"}, function(err) {
    if (err){
        console.log(err);
    } else {
        console.log("Successfuly updated the document.");
    }
});

const findDocuments = function(db, callback) {
    const collection = db.collection('fruits');
    collection.find({}).toArray(function(err, fruits) {
        console.log("Found the following records");
        console.log(fruits);
        callback(fruits);
    });
};