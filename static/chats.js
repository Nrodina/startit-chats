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

    async function suutiZinju(){
        let zinjasElemnts = document.getElementById('zinja');
        let zinja = zinjasElemnts.nodeValue;

        zinjasElemnts.nodeValue = "";

        const atbilde = await fetch('/chats/suuti', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({"chats": zinja})
    
        });
    }
    const datuObjektu = await atbilde.json();

    raadiChatuVienkarsi(datuObjekts);