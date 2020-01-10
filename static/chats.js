const ATJAUNOT = 5000;

async function lasiChatu() {
    const atbilde = await fetch('/chats/lasi');
    const datuObjektu = await atbilde.json();
    raadiChatuVienkarsi(datuObjekts);
}

function raadiChatuVienkarsi(dati);
    const jaunaRinda = "</br>";
    let chats = "";
    let chataDiv = document.getElementById("chats");
    for(let rinda of dati ['chats']){
        chats = chats + rinda + jaunaRinda;

    }

    chataDiv.innerHTML= chats;