//Ska tas bort
const visar = personal[1]
console.log(visar)



/*
function kortskapare(befattningslista[0]){
    
}

//Funktion 1
function skrivutkort(indexbefattningslistavimåstefåfrånmapkanske) {
//För anställda med kursansvar
    if(personal.befattning == befattningslista[1] || befattningslista[2]) {

        personal.map(
    (person) => {utskriftpersonal += `<ul> <li> <h2> ${person.fornamn} ${person.efternamn} <h2> </li> <li> Stilling: ${person.befattning} </li> <li> Kontor: ${person.kontor} </li> <li> E-post: ${person.mejladress} </li> <li> Kursansvar: ${person.kursansvar} </li> </ul>` }
)

document.getElementById("registerlista").innerHTML = utskriftpersonal
        //För anställda utan kursansvar
    } else {
        document.getElementById("registerlista").innerHTML = `<li> ${personal[0].fornamn} ${personal[0].efternamn} </li> <li> Stilling: ${personal[0].befattning} </li> <li> Kontor: ${personal[0].kontor} </li> <li> E-post: ${personal[0].mejladress} </li> <li> ${personal[0].kursansvar} </li>` 
    }
}

skrivutkort()
*/



let utskriftpersonal = ""

//Funktion 1 och 2
personal.map(
    (person) => {utskriftpersonal += `<ul> <li> <h3> ${person.fornamn} ${person.efternamn} <h3> </li> <li> Stilling: ${person.befattning} </li> <li> Kontor: ${person.kontor} </li> <li> E-post: ${person.mejladress} </li> <li> Kursansvar: ${person.kursansvar} </li> </ul>` }
)

document.getElementById("registerlista").innerHTML = utskriftpersonal



//Funktion 3, kalla funktion 1 och 2 när färdig? Behöver då vanlig eller rekursiv? (ska ta emot parameter so anger stilling)

//const professorer = personal.filter((befattningslista) => personal.befattning == befattningslista[1])


/*
let professorer = ""

personal.filter((befattningslista) => {professorer += personal.befattning == befattningslista[1]})
document.getElementById("registerlista").innerHTML += professorer
*/
//Ger true true true...

//FUNGERAR
/*
//Lagrar HTML-element
const profBtn = document.getElementById("professorBtn")

//EventListener som kallar visaProfessorerna när ProfessorBtn klickas på
profBtn.addEventListener("click", visaProfessorerna)

//Listan personal filtreras så att endast professorerna lagras som en array i variablen professorerna
const professorerna = personal.filter(
        (personen) => personen.befattning == befattningslista[1]
    )

//I denna variabel lagras textsträngen med information om profesorerna
let utskriftProfessorer = ""

//Funktion som skriver ut professorerna
function visaProfessorerna() {
    professorerna.map(
        (person) => {utskriftProfessorer += `<ul> <li> <h3> ${person.fornamn} ${person.efternamn} <h3/> </li> <li> Stilling: ${person.befattning} </li> <li> Kontor: ${person.kontor} </li> <li> E-post: ${person.mejladress} </li> <li> Kursansvar: ${person.kursansvar} </li> </ul>` }
    )
    document.getElementById("registerlista").innerHTML = utskriftProfessorer
}
*/
/*
//FUNGERANDE LÖSNING MEN KOMMER BLI LÅNG OM EN FUNKTION SKA GÖRAS PER YRKESGRUPP
//Lagrar HTML-element
const profBtn = document.getElementById("professorBtn")

//EventListener som kallar visaProfessorerna när ProfessorBtn klickas på
profBtn.addEventListener("click", visaProfessorerna)

//Listan personal filtreras så att endast professorerna lagras som en array i variablen professorerna
const professorerna = personal.filter(
        (personen) => personen.befattning == befattningslista[1]
    )
        
//Funktion som skriver ut professorerna
function visaProfessorerna() {
    //I denna variabel lagras textsträngen med information om profesorerna
    let utskriftProfessorer = ""   

    professorerna.map(
        (person) => {utskriftProfessorer += `<ul> <li> <h3> ${person.fornamn} ${person.efternamn} <h3/> </li> <li> Stilling: ${person.befattning} </li> <li> Kontor: ${person.kontor} </li> <li> E-post: ${person.mejladress} </li> <li> Kursansvar: ${person.kursansvar} </li> </ul>` }
    )
    
    document.getElementById("registerlista").innerHTML = utskriftProfessorer
}
*/

//Sista lösningsförsöket
//Lagrar HTML-element för knapp som kan filtrera bort dem som inte är rektor
let rektBtn = document.getElementById("rektorBtn")

//Lagrar HTML-element för knapp som kan filtrera bort dem som inte är professorer
let profBtn = document.getElementById("professorBtn")

//Lagrar HTML-element för knapp som kan filtrera bort dem som inte är lektorer
let lektBtn = document.getElementById("lektorBtn")

//Lagrar HTML-element för knapp som kan filtrera bort dem som inte är dekaner
let dekaBtn = document.getElementById("dekanBtn")

//Lagrar HTML-element för knapp som kan filtrera bort dem som inte är vaktmästare
let vaktBtn = document.getElementById("vaktmastareBtn")

//Lagrar HTML-element för knapp som inte filtrerar bort någon från arrayen personal
let alleBtn = document.getElementById("alleBtn")

//Lagrar HTML-element för knapp som kan filtrera bort dem som inte är undervisare
let undeBtn = document.getElementById("undervisareBtn")

//Lagrar HTML-element för en knapp som kan filtrera bort dem som inte är vaktmästare
let admiBtn = document.getElementById("administrationBtn")


//EventListener som kallar filtreraSkrivUtPersonal när rektorBtn klickas på
rektBtn.addEventListener("click", () => filtreraSkrivUtPersonal(befattningslista[0]))

//EventListener som kallar filtreraSkrivUtPersonal när professorBtn klickas på
profBtn.addEventListener("click", () => filtreraSkrivUtPersonal(befattningslista[1]))

//EventListener som kallar filtreraSkrivUtPersonal när lektorBtn klickas på
lektBtn.addEventListener("click", () => filtreraSkrivUtPersonal(befattningslista[2]))

//EventListener som kallar filtreraSkrivUtPersonal när dekanBtn klickas på
dekaBtn.addEventListener("click", () => filtreraSkrivUtPersonal(befattningslista[3]))

//EventListener som kallar filtreraSkrivUtPersonal när vaktmastareBtn klickas på
vaktBtn.addEventListener("click", () => filtreraSkrivUtPersonal(befattningslista[4]))

//EventListener som kallar filtreraSkrivUtPersonal när alleBtn klickas på
alleBtn.addEventListener("click", () => filtreraSkrivUtPersonal("allPersonal"))

//Funktion som filtrerar arrayen personal och skriver ut information om en vald yrkesgrupp
function filtreraSkrivUtPersonal(befattningsinformation) {

    //I denna variabel lagras textsträngen med information om den filtrerade gruppen
    let filtreradUtskrift = ""

    let valdYrkesgrupp

    if(befattningsinformation === "allPersonal") {
        valdYrkesgrupp = personal
    } else {
        //Listan personal filtreras så att endast den valda yrkesgruppen lagras som objekt i en array i variablen valdYrkesgrupp
        valdYrkesgrupp = personal.filter(
            (personen) => personen.befattning == befattningsinformation
        )
    }
    
    //Går igenom arrayen valdYrkesgrupp och skriver ut korrekt information om valda yrkesgruppen som en sträng
    valdYrkesgrupp.map(
        (person) => {filtreradUtskrift += `<ul> <li> <h3> ${person.fornamn} ${person.efternamn} </h3> </li> <li> Stilling: ${person.befattning} </li> <li> Kontor: ${person.kontor} </li> <li> E-post: ${person.mejladress} </li> <li> Kursansvar: ${person.kursansvar} </li> </ul>` }
    )


    document.getElementById("registerlista").innerHTML = filtreradUtskrift
}


/*

professorerna.map(
    (person) => {utskriftpersonal += `<ul> <li> <h3> ${person.fornamn} ${person.efternamn} <h3/> </li> <li> Stilling: ${person.befattning} </li> <li> Kontor: ${person.kontor} </li> <li> E-post: ${person.mejladress} </li> <li> Kursansvar: ${person.kursansvar} </li> </ul>` }
)

document.getElementById("registerlista2").innerHTML = utskriftpersonal
*/


//document.getElementById("registerlista").innerHTML = professorerna

//[här behöver det vara en variabel]

//.join("---")


/*
function skrivutkort(indexbefattningslistavimåstefåfrånmapkanske) {
//För anställda med kursansvar
    if(personal.befattning == befattningslista[1]) {
        const professorerna = personal.filter(
    (personen) => personen.befattning == befattningslista[1])
        personal.map(
    (person) => {utskriftpersonal += `<ul> <li> <h2> ${person.fornamn} ${person.efternamn} <h2> </li> <li> Stilling: ${person.befattning} </li> <li> Kontor: ${person.kontor} </li> <li> E-post: ${person.mejladress} </li> <li> Kursansvar: ${person.kursansvar} </li> </ul>` }
)

document.getElementById("registerlista").innerHTML = utskriftpersonal
        //För anställda utan kursansvar
    } else {
        document.getElementById("registerlista").innerHTML = `<li> ${personal[0].fornamn} ${personal[0].efternamn} </li> <li> Stilling: ${personal[0].befattning} </li> <li> Kontor: ${personal[0].kontor} </li> <li> E-post: ${personal[0].mejladress} </li> <li> ${personal[0].kursansvar} </li>` 
    }
}
*/