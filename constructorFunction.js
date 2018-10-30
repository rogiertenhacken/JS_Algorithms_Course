function User (firstName, lastName, age, gender) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.gender = gender;
};

let user1 = new User('John', 'Smit', '26', 'male');

// call user1
// # User {firstName: "john", lastName: "Smith", age: "26", gender: "male"}


//THE PROTOTYPE OBJECT:

//to add a prototype:
User.prototype.emailDomain = '@facebook.com';
//it is now added to the object

User.prototype.getEmailAdress = function() {
  return this.firstName + this.lastName + this.emailDomain;
}
//this function is assigned to the object.
//invoke it:
user1.getEmailAdress();
// outputs: JohnSmith@facebook.com




// // with comments:
// //create constructor function using function xx () {};
// // constructor function naming uses a Capital (i.e. User)
// // set the paramaters
// function User (firstName, lastName, age, gender) {
//   // asign these paramaters to the user object using the this. keyword:
//   // the this-keyword refers to the user-objects that will be created, with it the properties are assigned.
//   // the this-keyword does NOT refer to the function it is in, the this-keyword refers to the object that will be
//   // created by the constructor function.
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.age = age;
//   this.gender = gender;
// };
//
// //create a new user:
// let user1 = new User('John', 'Smit', '26', 'male');
//
// // call user1
// // # User {firstName: "john", lastName: "Smith", age: "26", gender: "male"}
