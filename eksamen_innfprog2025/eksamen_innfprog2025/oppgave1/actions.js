//Ska tas bort
const visar = personal[1]
console.log(visar)
/*
function kortskapare(befattningslista[0]){
    
}
*/
//Funktion 1
function(indexbefattningslistavimåstefåfrånmapkanske){
//För anställda med kursansvar
if(personal.befattning == befattningslista[1] || befattningslista[2]) {
document.getElementById("registerlista").innerHTML = `<li> ${personal[0].fornamn} ${personal[0].efternamn} </li> <li> Stilling: ${personal[0].befattning} </li> <li> Kontor: ${personal[0].kontor} </li> <li> E-post: ${personal[0].mejladress} </li> <li> Kursansvar: ${personal[0].kursansvar} </li>` 
}
//För anställda utan kursansvar
document.getElementById("registerlista").innerHTML = `<li> ${personal[0].fornamn} ${personal[0].efternamn} </li> <li> Stilling: ${personal[0].befattning} </li> <li> Kontor: ${personal[0].kontor} </li> <li> E-post: ${personal[0].mejladress} </li> <li> ${personal[0].kursansvar} </li>` 
}


//[här behöver det vara en variabel]

//.join("---")
