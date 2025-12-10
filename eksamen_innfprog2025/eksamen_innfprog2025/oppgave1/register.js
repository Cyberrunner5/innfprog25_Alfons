const befattningslista = ["Rektor", "Professor", "Lektor", "Dekan", "Vaktmester"];
console.log(befattningslista);

let personal = [
    // Rektor
    {
        Etternavn: "Johansen",
        Fornavn: "Elisabeth",
        Stilling: befattningslista[0],
        Kontor: "Rektors kontor",
        Epost: "elisabeth.johansen@hiof.no",
        Kursansvar: "Ingen kursansvar"
    },
    // Dekaner
    {
        Etternavn: "Nilsen",
        Fornavn: "Kari",
        Stilling: befattningslista[3],
        Kontor: "D101",
        Epost: "kari.nilsen@hiof.no",
        Kursansvar: "Ingen kursansvar"
    },
    {
        Etternavn: "Berg",
        Fornavn: "Per",
        Stilling: befattningslista[3],
        Kontor: "D102",
        Epost: "per.berg@hiof.no",
        Kursansvar: "Ingen kursansvar"
    },
    // Vaktmästare
    {
        Etternavn: "Eriksen",
        Fornavn: "Hans",
        Stilling: befattningslista[4],
        Kontor: "Vaktmesterens kontor",
        Epost: "hans.eriksen@hiof.no",
        Kursansvar: "Ingen kursansvar"
    },
    {
        Etternavn: "Lien",
        Fornavn: "Eva",
        Stilling: befattningslista[4],
        Kontor: "Vaktmesterens kontor",
        Epost: "eva.lien@hiof.no",
        Kursansvar: "Ingen kursansvar"
    },
    {
        Etternavn: "Hauge",
        Fornavn: "Arne",
        Stilling: befattningslista[4],
        Kontor: "Vaktmesterens kontor",
        Epost: "arne.hauge@hiof.no",
        Kursansvar: "Ingen kursansvar"
    },
    // Professorer
    {
        Etternavn: "Kristiansen",
        Fornavn: "Lars",
        Stilling: befattningslista[1],
        Kontor: "P301",
        Epost: "lars.kristiansen@hiof.no",
        Kursansvar: ["Matematikk 1", "Fysikk"]
    },
    {
        Etternavn: "Jensen",
        Fornavn: "Mette",
        Stilling: befattningslista[1],
        Kontor: "P302",
        Epost: "mette.jensen@hiof.no",
        Kursansvar: "Statsvitenskap"
    },
    {
        Etternavn: "Rasmussen",
        Fornavn: "Sverre",
        Stilling: befattningslista[1],
        Kontor: "P303",
        Epost: "sverre.rasmussen@hiof.no",
        Kursansvar: ["Biologi", "Kjemi"]
    },
    {
        Etternavn: "Dahl",
        Fornavn: "Siri",
        Stilling: befattningslista[1],
        Kontor: "P304",
        Epost: "siri.dahl@hiof.no",
        Kursansvar: "Historie"
    },
    {
        Etternavn: "Strand",
        Fornavn: "Erik",
        Stilling: befattningslista[1],
        Kontor: "P305",
        Epost: "erik.strand@hiof.no",
        Kursansvar: ["Kunsthistorie", "Filosofi"]
    },
    // Lektorer
    {
        Etternavn: "Hansson",
        Fornavn: "Anders",
        Stilling: befattningslista[2],
        Kontor: "A201",
        Epost: "anders.hansson@hiof.no",
        Kursansvar: ["Regnskap", "Makroøkonomi"]
    },
    {
        Etternavn: "Olssen",
        Fornavn: "Ola",
        Stilling: befattningslista[2],
        Kontor: "B204",
        Epost: "ola.olssen@hiof.no",
        Kursansvar: "Programmering 1"
    },
    {
        Etternavn: "Kleppe",
        Fornavn: "Solveig",
        Stilling: befattningslista[2],
        Kontor: "B205",
        Epost: "solveig.kleppe@hiof.no",
        Kursansvar: "Programmering 2"
    },
    {
        Etternavn: "Svendsen",
        Fornavn: "Nina",
        Stilling: befattningslista[2],
        Kontor: "B206",
        Epost: "nina.svendsen@hiof.no",
        Kursansvar: ["Markedsføring", "Juss"]
    },
    {
        Etternavn: "Andersen",
        Fornavn: "Tor",
        Stilling: befattningslista[2],
        Kontor: "C301",
        Epost: "tor.andersen@hiof.no",
        Kursansvar: "Studieteknikk"
    },
    {
        Etternavn: "Aasen",
        Fornavn: "Grete",
        Stilling: befattningslista[2],
        Kontor: "C302",
        Epost: "grete.aasen@hiof.no",
        Kursansvar: "Dataanalyse"
    },
    {
        Etternavn: "Bakstad",
        Fornavn: "Tom",
        Stilling: befattningslista[2],
        Kontor: "C303",
        Epost: "tom.bakstad@hiof.no",
        Kursansvar: "Webutvikling"
    },
    {
        Etternavn: "Lien",
        Fornavn: "Maria",
        Stilling: befattningslista[2],
        Kontor: "C304",
        Epost: "maria.lien@hiof.no",
        Kursansvar: "Digital markedsføring"
    },
    {
        Etternavn: "Hansen",
        Fornavn: "Knut",
        Stilling: befattningslista[2],
        Kontor: "C305",
        Epost: "knut.hansen@hiof.no",
        Kursansvar: ["Systemutvikling", "Databaser"]
    },
    {
        Etternavn: "Ulvik",
        Fornavn: "Eva",
        Stilling: befattningslista[2],
        Kontor: "C306",
        Epost: "eva.ulvik@hiof.no",
        Kursansvar: "Helseinformatikk"
    }
];

const visa = personal[0]

console.log(visa)