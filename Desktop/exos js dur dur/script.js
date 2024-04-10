// Pour chaque question, implémentez la fonction demandée.
// Pour chaque fonction, faire au moins 2 appels de la fonction avec des paramètres différents et afficher les résultats dans la console.

/* ------------------------------------------------------*/

console.info("1/ Implémentez une fonction qui prend en paramètre les dimensions de 2 côtés d'un triangle rectangle et retourne la dimension de l'hypoténuse.");
/**
 * calculate hypotenuse from a triangle
 * @param {number} sideA 
 * @param {number} sideB 
 * @returns {number} hypotenuse from triangle
 */
function calculateHypotenuse (sideA, sideB){

    return Math.sqrt(Math.pow(sideA, 2) + Math.pow(sideB, 2))
}

console.log(calculateHypotenuse (3, 5));
console.log(calculateHypotenuse (8, 4));

/* ------------------------------------------------------*/

console.info("2/ Implémentez une fonction qui retourne le nom et le prénom du plus âgé de 2 utilisateurs passés en paramètres parmi les 4 ci-dessous.");

const user1 = {firstName: "Paul", lastName: "Rick", age: 35};
const user2 = {firstName: "Samir", lastName: "Ah", age: 22};
const user3 = {firstName: "Loanne", lastName: "Bourdin", age: 28};
const user4 = {firstName: "Abdel", lastName: "Dems", age: 44};

/**
 * get  firstname and lastname from oldest user
 * @param {object} user1 
 * @param {object} user2 
 * @returns {string} firstname an lastname from oldest
 */
function getOldestUserFirstAndLastName (user1, user2){
if (user1.age > user2.age){
    return user1.firstName + " " + user1.lastName;
} else {
    return user2.firstName + " " + user2.lastName;
}
}

console.log(getOldestUserFirstAndLastName (user1, user2));
console.log(getOldestUserFirstAndLastName(user3, user4));

/* ------------------------------------------------------*/

console.info("3/ Implémentez une fonction qui retourne la valeur la plus grande d'un tableau de nombres, quelqu'en soit la taille.");
/**
 * get the max value from an array despite of his length
 * @param {array} array 
 * @returns {number} highest value from the array
 */
function getMaxValueFromArray (array) {
    let maxValue = array[0];
    for (let i = 0; i< array.length; i++) {
        if (array[i] > maxValue) {
            maxValue = array[i];
        }
    }
    return maxValue
}

console.log(getMaxValueFromArray([12, 56, 69, 84, 38]));
console.log(getMaxValueFromArray([58, 79, 32, 15, 24]));

/* ------------------------------------------------------*/

console.info("4/ Implémentez une fonction qui prend en paramètre un texte et retourne un objet comptant le nombre d'occurence de chaque mot.");

function countWords(text) {
   
    const cleanedText = text.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"").toLowerCase();

   
    const wordsArray = cleanedText.split(" ");

    
    const wordCount = {};

  
    for (const word of wordsArray) {
        if (word !== '') {
            if (wordCount.hasOwnProperty(word)) {
                wordCount[word]++;
            } else {
                wordCount[word] = 1;
            }
        }
    }

    
    return wordCount;
}



const text = "Hello, world! This is a test. Hello, again, world!";
const wordCounts = countWords(text);

console.log(wordCounts);
console.log();

/* ------------------------------------------------------*/

console.info("5/ Implémentez une fonction qui retourne une valeur entière alétoire comprise entre 2 valeurs passées en paramètres.");
/**
 * Gzet a random value between two others values
 * @param {string} min 
 * @param {string} max 
 * @returns {number} random value between two others values
 */
function getRandomValueBetweenTwoNumbers (min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor (Math.random() * (max - min + 1)) + min;
}

console.log(getRandomValueBetweenTwoNumbers (10, 100));
console.log(getRandomValueBetweenTwoNumbers (1, 30));

/* ------------------------------------------------------*/

console.info("6/ Implémentez une fonction qui retourne une chaîne de caractère aléatoire composée de chiffres et de lettres en majuscule et minuscule, de la taille passée en paramètre.");
/**
 * Get a random string composed of letters and numbers from size in parameters
 * @param {string} length 
 * @returns {string} random string from size in parameters
 */
function generateRandomString (length){
    let result = ' ';
    const characters = 'AZERTYUIOPMLKJHGFDSQWXCVBNazertyuiopmlkjhgfdsqwxcvbn123456789';
    const charactersLength = characters.length;
    let counter = 0;

    while (counter < length) {

        result += characters.charAt(Math.floor(Math.random() * charactersLength));
        counter += 1;
    }

    return result;
}
   

console.log(generateRandomString (30));
console.log(generateRandomString(20));

/* ------------------------------------------------------*/

console.info("Pour les questions suivantes enrichissez l'objet 'newbie' ci-dessous.");

const newbie = {
    firstName: "Paul",
    lastName: "Bismuth",
    birthdate: "1995-02-14",
    job: "web developer",
    city: "Detroit",
    skills: ["HTML", "CSS"]
};

/* ------------------------------------------------------*/

console.info("7/ Implémentez une méthode retournant l'âge de Paul.");


/**
 * get the age of the user
 * @param {string} person 
 * @returns {number} age of the user
 */
function getUserAge (person) {
    const currentYear = new Date().getFullYear();
    const birthYear =new Date(person.birthdate).getFullYear();
    return currentYear - birthYear;
}
console.log(getUserAge(newbie));


/* ------------------------------------------------------*/

console.info("8/ Implémentez une méthode retournant un texte listant les compétences de Paul séparées par des virgules.");

function listTheUserSkills (person){
    return person.skills.join(" , ");
}

console.log(listTheUserSkills(newbie));

/* ------------------------------------------------------*/

console.info("9/ Implémentez une méthode qui ajoute à Paul une compétence passée en paramètre.");
console.info("Ajoutez la compétence Javascript et utilisez la méthode précédente pour vous assurer du résultat.");

console.log();

/* ------------------------------------------------------*/

console.info("10/ Implémentez une méthode qui fait parler Paul pour qu'il se présente avec toutes ses caractéristiques. (Nom, prénom, âge, où il vit, son métier, ...)");
console.log();