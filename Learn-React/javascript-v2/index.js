// Task 2
// -create an array of objets
// -fill the object with few properties (name - email -age )
// -loop about your array to log the value from your object

let items = [
    {
        name: 'Allen',
        email: 'allencar@gmail.com',
        age: 42
    }, 
    {
        name: 'Rob',
        email: 'robsolomons@gmail.com',
        age: 44
    },
    {
        name: 'Mark',
        email: 'markhenry@gmail.com',
        age: 46
    }
]

for(let i = 0; i < items.length; i++) {
    console.log(items[i].name);
    console.log(items[i].email);
    console.log(items[i].age);
}


