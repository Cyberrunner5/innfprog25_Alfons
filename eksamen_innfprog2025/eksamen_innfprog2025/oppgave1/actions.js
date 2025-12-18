
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


/*
let utskriftpersonal = ""

//Funktion 1 och 2
personal.map(
    (person) => {utskriftpersonal += `<ul> <li> <h3> ${person.fornamn} ${person.efternamn} <h3> </li> <li> Stilling: ${person.befattning} </li> <li> Kontor: ${person.kontor} </li> <li> E-post: ${person.mejladress} </li> <li> Kursansvar: ${person.kursansvar} </li> </ul>` }
)

document.getElementById("registerlista").innerHTML = utskriftpersonal

*/

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

//Följande tre stycken kod genererades som förbättring av min föregångna kod i GPT UiO. Se utkommenterad kod nedan för att se min kod som föregick denna. 

// Definiera en funktion som lägger till eventlyssnare om elementet finns 
function addEventListenerIfExists(element, eventType, callback) { 
    if (element) { // #OPPD3: Uppdaterad med if-test så att EventListener endast läggs till när elementet finns. Detta var en förbättring av min egna lösning, som sedan gjordes med GPT UiO. Min originella lösning finns utkommenterad längst ner i filen.
        element.addEventListener(eventType, callback);
    }
}

//#OPPD3: Lagrar HTML-element för varje knapp. Lagrar elementen på färre rader än tidigare. Detta var en förbättring av min egna lösning, som sedan gjordes med GPT UiO. Min originella lösning finns utkommenterad längst ner i filen.
let rektBtn = document.getElementById("rektorBtn");
let profBtn = document.getElementById("professorBtn");
let lektBtn = document.getElementById("lektorBtn");
let dekaBtn = document.getElementById("dekanBtn");
let vaktBtn = document.getElementById("vaktmastareBtn");
let alleBtn = document.getElementById("alleBtn");
let undeBtn = document.getElementById("undervisareBtn");
let admiBtn = document.getElementById("administrationBtn");

// #OPPD3: Lägg till eventlyssnare endast om knappen finns, så att inga EventListeners sätts på knappar som inte existerar. Detta var en förbättring av min egna lösning, som sedan gjordes med GPT UiO. Min originella lösning finns utkommenterad längst ner i filen.
addEventListenerIfExists(rektBtn, "click", () => filtreraSkrivUtPersonal(befattningslista[0]));
addEventListenerIfExists(profBtn, "click", () => filtreraSkrivUtPersonal(befattningslista[1]));
addEventListenerIfExists(lektBtn, "click", () => filtreraSkrivUtPersonal(befattningslista[2]));
addEventListenerIfExists(dekaBtn, "click", () => filtreraSkrivUtPersonal(befattningslista[3]));
addEventListenerIfExists(vaktBtn, "click", () => filtreraSkrivUtPersonal(befattningslista[4]));
addEventListenerIfExists(alleBtn, "click", () => filtreraSkrivUtPersonal("allPersonal"));
addEventListenerIfExists(undeBtn, "click", () => filtreraSkrivUtPersonal("undervisare"));
addEventListenerIfExists(admiBtn, "click", () => filtreraSkrivUtPersonal("administration"));

//Funktion som filtrerar arrayen personal och skriver ut information om en vald yrkesgrupp
function filtreraSkrivUtPersonal(befattningsinformation) {

    //I denna variabel lagras textsträngen med information om den filtrerade gruppen
    let filtreradUtskrift = ""

    let valdYrkesgrupp

    let taBortSamlare = "Här ska det vara en knapp"

    if(befattningsinformation === "allPersonal") {
        valdYrkesgrupp = personal
        //Här filtreras det så att endast undervisare läggs till som objekt i valdYrkesgrupp. Denna funktionaliteten beskrivs som "Funktion 5" i examensbeskrivningen
    } else if(befattningsinformation === "undervisare"){
        valdYrkesgrupp = personal.filter(
            (personen) => personen.befattning == befattningslista[1] || personen.befattning == befattningslista[2]
        )
        ////Här filtreras det så att endast administratörer läggs till som objekt i valdYrkesgrupp. Även denna funktionaliteten beskrivs som "Funktion " i examensbeskrivningen
    } else if(befattningsinformation === "administration"){
        valdYrkesgrupp = personal.filter(
            (personen) => personen.befattning == befattningslista[0] || personen.befattning == befattningslista[3] || personen.befattning == befattningslista[4]
        )
    } else {
        //Listan personal filtreras så att endast den valda yrkesgruppen lagras som objekt i en array i variablen valdYrkesgrupp
        valdYrkesgrupp = personal.filter(
            (personen) => personen.befattning == befattningsinformation
        )
    }
    
    //Går igenom arrayen valdYrkesgrupp och skriver ut korrekt information om valda yrkesgruppen som en sträng
    valdYrkesgrupp.map(
        (person) => {let indexen = personal.indexOf(person)

            filtreradUtskrift += `<ul> <li> <h3> ${person.fornamn} ${person.efternamn} </h3> </li> <li> Stilling: ${person.befattning} </li> <li> Kontor: ${person.kontor} </li> <li> E-post: <a href="mailto:${person.mejladress}"> ${person.mejladress} </a> </li> <li> Kursansvar: ${person.kursansvar} </li> ` // #OPPD3 mailto: lades till för att sidan ska bli mer användarvänlig och interaktiv. Med den funktionen kan användaren direkt mejla till den person vars mejladress de precis har klickat på. 
        
            //Endast i admin-html, där admindokument ligger som id på <main>
            if(document.getElementById("admindokument")){
                filtreradUtskrift += ` <li> <button onclick="taBortAnstalld(${indexen})">Slett ansatt</button> </li> `
            }

            filtreradUtskrift += `</ul>`
        } 
    )
    if(document.getElementById("registerlista")){ //#OPPD3: Utskrift sker bara om elementet finns på sidan
        document.getElementById("registerlista").innerHTML = filtreradUtskrift
    }
}

//Kallar funktionen så att all personal skrivs ut på sidan direkt
filtreraSkrivUtPersonal("allPersonal")

//Funktion 4 - Returnera alla högskolans kurser
function kursRegisterUtskrift(){
    let utskriftAvKurser = ""
    let undervisarna
    undervisarna = personal.filter(
                (personen) => personen.befattning == befattningslista[1] || personen.befattning == befattningslista[2])

        undervisarna.map((person) => {utskriftAvKurser += `<li> ${person.kursansvar} </li>`}
        )
        if(document.getElementById("kursregister")) { // #OPPD3: If-test lades till för att utskrift endast ska ske om id=kursregister finns, vilket endast finns i register.html
            document.getElementById("kursregister").innerHTML = utskriftAvKurser
        } 
}
if(id="kursregister") { // #OPPD3: If-test lades till för att funktionen endast ska kallas i register.html, där id=kursregister finns
    kursRegisterUtskrift() 
}


//Lagrar HTML-element för knapp
let lagraNyAnstalld = document.getElementById("leggtilansattBtn") 

//Lägg till eventlyssnare
addEventListenerIfExists(lagraNyAnstalld, "click", nyAnstalldSkrivUt)

//Funktion 6 - Lägg till en anställd
function nyAnstalldSkrivUt() {

    let fornamna = document.getElementById("fornavn").value
    let efternamna = document.getElementById("etternavn").value
    let mejladressa = document.getElementById("epost").value
    let kontoreta = document.getElementById("kontoret").value
    let befattninga = document.getElementById("valjbefattning").value
    let kursansvara = document.getElementById("kursansvaret").value

    let nyAnstalld = {
        fornamn: fornamna,
        efternamn: efternamna,
        mejladress: mejladressa,
        kontor: kontoreta,
        befattning: befattninga,
        kursansvar: kursansvara
    }

    personal.push(nyAnstalld)

    filtreraSkrivUtPersonal("allPersonal") //Kallar filtreraSkrivUtPersonal med all personal så att den nya personen läggs till på sidan
}

//Funktion 7 - Ta bort en anställd
function taBortAnstalld(indexen) {

    let bekraftelse = confirm("Er du sikker på at du vil fjerne denne ansatte?")// #OPPD3: En säkerhetsåtgärd där användaren behöver bekräfta sitt val

    if(bekraftelse){
        personal.splice(indexen, 1) //Tar bort 1 element på relevant index

        filtreraSkrivUtPersonal("allPersonal") //Kallar filtreraSkrivUtPersonal med all personal så att den nya personen tas bort från sidan
    }  
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


//Nedan kommer lösningen på att skapa knappar, som kallar funktionen filtreraSkrivUtPersonal, innan GPT UiO användes för att endast lyssna efter knapptryck om relevant knapp finns
/*
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

//EventListener som kallar filtreraSkrivUtPersonal när undervisareBtn klickas på
undeBtn.addEventListener("click", () => filtreraSkrivUtPersonal("undervisare"))

//EventListener som kallar filtreraSkrivUtPersonal när administrationBtn klickas på
admiBtn.addEventListener("click", () => filtreraSkrivUtPersonal("administration"))
*/