const series = {
    "Arcane": {
        releaseYear: 2021,
        country: "U.S.A.",
        availableOn: "Netflix",
        styles: ["Aventure", "Science fiction", "Action", "Animation"],
        createdBy: ["Alex Yee", "Christian \"Praeco\" Linke"],
        actors: ["Hailee Steinfeld", "Ella Purnell", "Kevin Alejandro"],
        episodeDurationInMinutes: 45,
        numberOfSeasons: 2,
        numberOfEpisods: 18,
        ongoing: true
    },
    "Game of Thrones": {
        releaseYear: 2011,
        country: "U.S.A.",
        availableOn: "OCS",
        styles: ["Drame", "Fantastique"],
        createdBy: ["D.B. Weiss", "David Benioff"],
        actors: ["Emilia Clarke", "Peter Dinklage", "Kit Harington", "Lena Headey"],
        episodeDurationInMinutes: 52,
        numberOfSeasons: 8,
        numberOfEpisods: 73,
        ongoing: false
    },
    "Breaking Bad": {
        releaseYear: 2008,
        country: "U.S.A.",
        availableOn: "Netflix",
        styles: ["Drame"],
        createdBy: ["Vince Gilligan"],
        actors: ["Bryan Cranston", "Aaron Paul", "Anna Gunn", "Dean Norris"],
        episodeDurationInMinutes: 42,
        numberOfSeasons: 5,
        numberOfEpisods: 62,
        ongoing: false
    },
    "Chernobyl": {
        releaseYear: 2019,
        country: "U.S.A.",
        availableOn: "OCS",
        styles: ["Drame"],
        createdBy: ["Craig Mazin"],
        actors: ["Jared Harris", "Stellan SkarsgÃ¥rd", "Paul Ritter"],
        episodeDurationInMinutes: 58,
        numberOfSeasons: 1,
        numberOfEpisods: 5,
        ongoing: false
    },
    "Peaky Blinders": {
        releaseYear: 2013,
        country: "Grande-Bretagne",
        availableOn: "Netflix",
        styles: ["Drame", "Historique", "Policier"],
        createdBy: ["Steven Knight"],
        actors: ["Cillian Murphy", "Natasha O'Keeffe", "Helen McCrory"],
        episodeDurationInMinutes: 52,
        numberOfSeasons: 6,
        numberOfEpisods: 36,
        ongoing: false
    },
    "Shingeki no Kyojin": {
        releaseYear: 2013,
        country: "Japon",
        availableOn: "Netflix",
        styles: ["Aventure", "Action", "Animation"],
        createdBy: ["Yasuko Kobayashi"],
        actors: ["YÃ»ki Kaji", "Yui Ishikawa", "Marina Inoue"],
        episodeDurationInMinutes: 24,
        numberOfSeasons: 4,
        numberOfEpisods: 95,
        ongoing: true
    },
    "Sherlock": {
        releaseYear: 2010,
        country: "Grande-Bretagne",
        availableOn: "Amazon",
        styles: ["Aventure", "Drame", "Policier"],
        createdBy: ["Steven Moffat", "Mark Gatiss"],
        actors: ["Benedict Cumberbatch", "Martin Freeman", "Amanda Abbington"],
        episodeDurationInMinutes: 90,
        numberOfSeasons: 4,
        numberOfEpisods: 14,
        ongoing: false
    },
    "The Queen's Gambit": {
        releaseYear: 2020,
        country: "U.S.A.",
        availableOn: "Netflix",
        styles: ["Drame"],
        createdBy: ["Scott Frank", "Allan Scott"],
        actors: ["Anya Taylor-Joy", "William Horberg", "Harry Melling"],
        episodeDurationInMinutes: 60,
        numberOfSeasons: 1,
        numberOfEpisods: 7,
        ongoing: false
    },
    "When They See Us": {
        releaseYear: 2019,
        country: "U.S.A.",
        availableOn: "Netflix",
        styles: ["Drame"],
        createdBy: ["Ava DuVernay"],
        actors: ["Asante Blackk", "Caleel Harris", "Ethan Herisse"],
        episodeDurationInMinutes: 35,
        numberOfSeasons: 1,
        numberOfEpisods: 4,
        ongoing: false
    },
    "Stranger Things": {
        releaseYear: 2016,
        country: "U.S.A.",
        availableOn: "Netflix",
        styles: ["Drame", "Fantastique", "Thriller"],
        createdBy: ["Matt Duffer, Ross Duffer"],
        actors: ["Winona Ryder", "Millie Bobby Brown", "Finn Wolfhard"],
        episodeDurationInMinutes: 55,
        numberOfSeasons: 5,
        numberOfEpisods: 43,
        ongoing: true
    },
    "Hunter X Hunter": {
        releaseYear: 2011,
        country: "Japon",
        availableOn: "Netflix",
        styles: ["Aventure", "ComÃ©die", "Animation"],
        createdBy: ["Megumi Han", "Keiji Fujiwara", "Miyuki Sawashiro"],
        actors: ["Megumi Han", "Keiji Fujiwara", "Miyuki Sawashiro", "Mariya Ise"],
        episodeDurationInMinutes: 22,
        numberOfSeasons: 4,
        numberOfEpisods: 148,
        ongoing: false
    },
    "Heartstopper": {
        releaseYear: 2022,
        country: "Grande-Bretagne",
        availableOn: "Netflix",
        styles: ["Drame", "Romance"],
        createdBy: ["Alice Oseman"],
        actors: ["Kit Connor", "Joe Locke", "Corinna Brown"],
        episodeDurationInMinutes: 30,
        numberOfSeasons: 3,
        numberOfEpisods: 16,
        ongoing: true
    },
    "Vikings": {
        releaseYear: 2013,
        country: "Canada",
        availableOn: "Netflix",
        styles: ["Aventure", "Drame", "Historique"],
        createdBy: ["Michael Hirst"],
        actors: ["Alex HÃ¸gh Andersen", "Gustaf SkarsgÃ¥rd", "Marco IlsÃ¸"],
        episodeDurationInMinutes: 52,
        numberOfSeasons: 6,
        numberOfEpisods: 89,
        ongoing: false
    },
    "True Detective": {
        releaseYear: 2014,
        country: "U.S.A.",
        availableOn: "OCS",
        styles: ["Drame", "Policier", "Thriller"],
        createdBy: ["Nic Pizzolatto"],
        actors: ["Mahershala Ali", "Stephen Dorff", "Carmen Ejogo"],
        episodeDurationInMinutes: 55,
        numberOfSeasons: 4,
        numberOfEpisods: 24,
        ongoing: true
    },
    "Shameless": {
        releaseYear: 2011,
        country: "U.S.A.",
        availableOn: "Amazon",
        styles: ["ComÃ©die", "Drame"],
        createdBy: ["Paul Abbott"],
        actors: ["William H. Macy", "Jeremy Allen White", "Shanola Hampton"],
        episodeDurationInMinutes: 45,
        numberOfSeasons: 11,
        numberOfEpisods: 134,
        ongoing: false
    }
};

/* --------------------------------------------- */

console.info("1/ Quel est le pays d'origine de la sÃ©rie Sherlock");

console.log(series["Sherlock"].country);

/* --------------------------------------------- */

console.info("2/ Quelle est la sÃ©rie la plus ancienne entre Breaking Bad et Shameless ?");
const breakingBadReleaseYear =series["Breaking Bad"].releaseYear;
const shamelessReleaseYear =series["Shameless"].releaseYear;

if (breakingBadReleaseYear < shamelessReleaseYear){
    console.log("Breaking Bad");
} else {
    console.log("Shameless");
}


/* --------------------------------------------- */

console.info("3/ Quelle est la durÃ©e totale de la sÃ©rie Game of Thrones en heures et minutes ?");

console.log();

/* --------------------------------------------- */

console.info("4/ Donnez la liste des sÃ©ries d'animation.");

// Recherchez dans la documentation sur les Array une mÃ©thode appropriÃ©e Ã  la recherche d'une valeur.
// https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array#m%C3%A9thodes_des_instances

console.log();

/* --------------------------------------------- */

console.info("5/ Il est 23h. J'ai dÃ©cidÃ© de faire une nuit blanche et de regarder une sÃ©rie complÃ¨te avant 8h demain matin.");
console.info("Quelles sont les sÃ©ries que je peux regarder ?");

console.log();

/* --------------------------------------------- */

console.info("6/ Quelles sont les sÃ©ries terminÃ©es originaires de Grande-Bretagne ou du Japon ?");

console.log();

/* --------------------------------------------- */

console.info("7/ J'ai uniquement un abonnement Netflix. Quelles series de science fiction ou thriller puis-je regarder ?");


console.log();

/* --------------------------------------------- */

console.info("8/ Retournez la liste des series avec pour chacune le nombre de personnes dans l'Ã©quipe de rÃ©alisation (createdBy) ?");

console.log();

/* --------------------------------------------- */

console.info("9/ Combien il y a-t-il de series originaires de chaque pays ?");

console.log();

/* --------------------------------------------- */

console.info("10/ Quel est le style de sÃ©rie le plus reprÃ©sentÃ© dans cette liste ?");

console.log();

/* --------------------------------------------- */

console.info("BONUS 1/ Retournez la liste des titres de toutes les sÃ©ries classÃ©es de la plus rÃ©cente Ã  la plus ancienne.");

console.log();

/* --------------------------------------------- */

console.info("BONUS 2/ Je vais passer mes 8 jours de vacance Ã  regarder les sÃ©ries de cette liste dans l'ordre Ã  raison de 16 heures par jour. Par quel Ã©pisode de quelle sÃ©rie vais-je conclure mes vacances ?");

console.log();