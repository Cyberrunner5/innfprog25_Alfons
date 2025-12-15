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
        //return
        document.getElementById("registerlista").innerHTML = `<li> ${personal[0].fornamn} ${personal[0].efternamn} </li> <li> Stilling: ${personal[0].befattning} </li> <li> Kontor: ${personal[0].kontor} </li> <li> E-post: ${personal[0].mejladress} </li> <li> Kursansvar: ${personal[0].kursansvar} </li>` 
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
    (person) => {utskriftpersonal += `<ul> <li> <h2> ${person.fornamn} ${person.efternamn} <h2> </li> <li> Stilling: ${person.befattning} </li> <li> Kontor: ${person.kontor} </li> <li> E-post: ${person.mejladress} </li> <li> Kursansvar: ${person.kursansvar} </li> </ul>` }
)

document.getElementById("registerlista").innerHTML = utskriftpersonal

//Funktion 3, kalla funktion 1 och 2 när färdig? Behöver då vanlig eller rekursiv?

//const professorer = personal.filter((befattningslista) => personal.befattning == befattningslista[1])

let professorer = ""

personal.filter((befattningslista) => {professorer += personal.befattning == befattningslista[1]})
document.getElementById("registerlista").innerHTML += professorer


//[här behöver det vara en variabel]

//.join("---")
