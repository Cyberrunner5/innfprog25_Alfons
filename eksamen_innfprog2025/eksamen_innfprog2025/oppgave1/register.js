//Lista med olika befattningar
const befattningslista = ["Rektor", "Professor", "Lektor", "Dekan", "Vaktmester"];
console.log(befattningslista);

//Array med objekt med information om anställda
let personal = [
    // Rektor
    {
        efternamn: "Johansen",
        fornamn: "Elisabeth",
        befattning: befattningslista[0],
        kontor: "E301",
        mejladress: "elisabeth.johansen@hiof.no",
        kursansvar: "Ingen kursansvar"
    },
    // Dekaner
    {
        efternamn: "Nilsen",
        fornamn: "Kari",
        befattning: befattningslista[3],
        kontor: "D101",
        mejladress: "kari.nilsen@hiof.no",
        kursansvar: "Ingen kursansvar"
    },
    {
        efternamn: "Berg",
        fornamn: "Per",
        befattning: befattningslista[3],
        kontor: "D102",
        mejladress: "per.berg@hiof.no",
        kursansvar: "Ingen kursansvar"
    },
    // Vaktmästare
    {
        efternamn: "Eriksen",
        fornamn: "Hans",
        befattning: befattningslista[4],
        kontor: "B01",
        mejladress: "hans.eriksen@hiof.no",
        kursansvar: "Ingen kursansvar"
    },
    {
        efternamn: "Lien",
        fornamn: "Eva",
        befattning: befattningslista[4],
        kontor: "B02",
        mejladress: "eva.lien@hiof.no",
        kursansvar: "Ingen kursansvar"
    },
    {
        efternamn: "Hauge",
        fornamn: "Arne",
        befattning: befattningslista[4],
        kontor: "B03",
        mejladress: "arne.hauge@hiof.no",
        kursansvar: "Ingen kursansvar"
    },
    // Professorer
    {
        efternamn: "Kristiansen",
        fornamn: "Lars",
        befattning: befattningslista[1],
        kontor: "P301",
        mejladress: "lars.kristiansen@hiof.no",
        kursansvar: ["Matematikk 1", "Fysikk"]
    },
    {
        efternamn: "Jensen",
        fornamn: "Mette",
        befattning: befattningslista[1],
        kontor: "P302",
        mejladress: "mette.jensen@hiof.no",
        kursansvar: "Statsvitenskap"
    },
    {
        efternamn: "Rasmussen",
        fornamn: "Sverre",
        befattning: befattningslista[1],
        kontor: "P303",
        mejladress: "sverre.rasmussen@hiof.no",
        kursansvar: ["Biologi", "Kjemi"]
    },
    {
        efternamn: "Dahl",
        fornamn: "Siri",
        befattning: befattningslista[1],
        kontor: "P304",
        mejladress: "siri.dahl@hiof.no",
        kursansvar: "Historie"
    },
    {
        efternamn: "Strand",
        fornamn: "Erik",
        befattning: befattningslista[1],
        kontor: "P305",
        mejladress: "erik.strand@hiof.no",
        kursansvar: ["Kunsthistorie", "Filosofi"]
    },
    // Lektorer
    {
        efternamn: "Hansson",
        fornamn: "Anders",
        befattning: befattningslista[2],
        kontor: "A201",
        mejladress: "anders.hansson@hiof.no",
        kursansvar: ["Regnskap", "Makroøkonomi"]
    },
    {
        efternamn: "Olssen",
        fornamn: "Ola",
        befattning: befattningslista[2],
        kontor: "B204",
        mejladress: "ola.olssen@hiof.no",
        kursansvar: "Programmering 1"
    },
    {
        efternamn: "Kleppe",
        fornamn: "Solveig",
        befattning: befattningslista[2],
        kontor: "B205",
        mejladress: "solveig.kleppe@hiof.no",
        kursansvar: "Programmering 2"
    },
    {
        efternamn: "Svendsen",
        fornamn: "Nina",
        befattning: befattningslista[2],
        kontor: "B206",
        mejladress: "nina.svendsen@hiof.no",
        kursansvar: ["Markedsføring", "Juss"]
    },
    {
        efternamn: "Andersen",
        fornamn: "Tor",
        befattning: befattningslista[2],
        kontor: "C301",
        mejladress: "tor.andersen@hiof.no",
        kursansvar: "Studieteknikk"
    },
    {
        efternamn: "Aasen",
        fornamn: "Grete",
        befattning: befattningslista[2],
        kontor: "C302",
        mejladress: "grete.aasen@hiof.no",
        kursansvar: "Dataanalyse"
    },
    {
        efternamn: "Bakstad",
        fornamn: "Tom",
        befattning: befattningslista[2],
        kontor: "C303",
        mejladress: "tom.bakstad@hiof.no",
        kursansvar: "Webutvikling"
    },
    {
        efternamn: "Lien",
        fornamn: "Maria",
        befattning: befattningslista[2],
        kontor: "C304",
        mejladress: "maria.lien@hiof.no",
        kursansvar: "Digital markedsføring"
    },
    {
        efternamn: "Hansen",
        fornamn: "Knut",
        befattning: befattningslista[2],
        kontor: "C305",
        mejladress: "knut.hansen@hiof.no",
        kursansvar: ["Systemutvikling", "Databaser"]
    },
    {
        efternamn: "Ulvik",
        fornamn: "Eva",
        befattning: befattningslista[2],
        kontor: "C306",
        mejladress: "eva.ulvik@hiof.no",
        kursansvar: "Helseinformatikk"
    }
];

//Ska tas bort
const visa = personal[0]
console.log(visa)