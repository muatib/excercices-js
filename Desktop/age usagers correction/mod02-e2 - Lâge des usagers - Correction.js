const users = [
  {
    firstName: "Pierre",
    lastName: "Dupont",
    birthdate: "2000-05-23",
  },
  {
    firstName: "Samir",
    lastName: "Desquesmi",
    birthdate: "2012-02-13",
  },
  {
    firstName: "Loanne",
    lastName: "Tredima",
    birthdate: "2002-10-22",
  },
  { firstName: "Paul", lastName: "Bismuth", birthdate: "1972-10-08" },
  {
    firstName: "Tom",
    lastName: "Sawyer",
    birthdate: "1955-01-14",
  },
];

users.forEach((user) => {
  user.age = undefined;
  user.premium1825 = false;

  const b = new Date(user.birthdate);
  
  if (b instanceof Date && !isNaN(b)) {
    
    user.age = new Date(Date.now() - b).getFullYear() - 1970;
    user.premium1825 = user.age >= 18 && user.age <= 25;
  }
});

console.table(users);


/**
 * calculate age from birthdate
 * @param {number} birthdate 
 * @returns {number} age
 */
function calculateAge(birthdate) {
  const b = new Date(birthdate);
  if (!(b instanceof Date) || isNaN(b)) return undefined;
  return new Date(Date.now() - b).getFullYear() - 1970;
}

function isPremium1825(age) {
  return age === undefined && age >= 18 && age <= 25;
}

function addUserInfo(user) {
  const age = calculateAge(user.birthdate);
  return {
    ...user,
    age: age,
    premium1825: isPremium1825(age),
  };
}
const updateUsers = users.map(addUserInfo);
console.log(updateUsers);

// function calculateAgeAndDiscount(users) {
//     const today = new Date();
//     const currentYear = today.getFullYear();

//     users.forEach(user => {
//         const birthdate = new Date(user.birthdate);
//         const age = currentYear - birthdate.getFullYear();
//         const isPremium1825 = age >= 18 && age <= 25;

//         user.age = age;
//         user.isPremium1825 = isPremium1825;
//     });

//     return users;
// }

// const updatedUsers = calculateAgeAndDiscount(users);
// console.log(updatedUsers);


