function fixAgeProperties(arr) {
  // This function should take an array of objects representing users as an argument
  // A user object will take the form:
  // {
  //   name: "Liam",
  //   email: 29
  // }
  // All of the user's ages have accidentally been put on a key of "email". This function should return an array of user objects with the "email" key removed, and all their ages now on a correct key of "age"
  // const agesObj = 

  for(let user in arr) {
    Object.assign(arr[user], {age: arr[user].email});
    delete arr[user].email
  }
  return arr
}