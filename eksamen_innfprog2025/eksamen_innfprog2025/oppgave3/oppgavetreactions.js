//Rullgardinsmeny för befattning
//let valjbefattningsmeny = document.getElementById("valjbefattning").value

function skapaBefattningsmeny(){

    let utskriftAvBefattningsmeny = ""

    befattningslista.map((befattningen) => {utskriftAvBefattningsmeny += `<option value="${befattningen}">${befattningen}</option>`})

    if(document.getElementById("valjbefattning")) { // #OPPD3: If-test lades till för att utskrift endast ska ske om id=kursregister finns, vilket endast finns i admin.html
        document.getElementById("valjbefattning").innerHTML = utskriftAvBefattningsmeny
    }
}

if(id="valjbefattning") { // #OPPD3: If-test lades till för att kallning av funtionen skapaBefattningsmeny() endast ska ske om id=kursregister finns, vilket endast finns i admin.html
    skapaBefattningsmeny()
}


//Följande kod ligger i action.js då det behövde läggas in i en befintlig funktion: let bekraftelse = confirm("Er du sikker på at du vil fjerne denne ansatte?")