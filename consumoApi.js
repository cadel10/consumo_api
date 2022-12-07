//asincronismo


// function promesa(){
//     return new Promise((res, rej) => {
//         setTimeout(() => res("como"), 2000)
//     })
// }

// // asincronia - no se ejecutan al mismo tiempo - ordenes
// // sincronia - ejecutan al mismo tiempo - ordenes

// async function saludar() {
//   console.log("Hola");
//   console.log(await promesa())
//   console.log("estas?");
// }

// saludar()

//promesas
// let siono = new Promise((res, rej) => {
//   let opt = "si";

//   if (opt === "si") {
//     return res("Dijo que si");
//   }
//   return rej("Dijo que no");
// });

// siono.then((res) => {
//   return console.log(res);
// }).catch((rej) => {
//     return console.log(rej)
// }).then(() => {
//     console.log("Opcion por defecto")
// });
//then cuando la promesa se resuelve

//catch cuando la promesa se rechaza - si el then esta despues del catch, va a ser una respuesta por defecto

function traerPersonajes() {
  const n = 35;

  const genderTranslate = {
      Male: "Hombre",
      Female: "Mujer"
  }

//   genderTranslate["Male"] = "Hombre"

  for (let i = 1; i <= n; i++) {
    const url = `https://rickandmortyapi.com/api/character/${i}`;

    fetch(url)
      .then((res) => {
        return res.json();
      })
      //.then(res => return res.json())
      .then((data) => {
          console.log(data)

          let card = `
            <div class="card shadow mt-4" style="width: 18rem;">
                <img src="${data.image}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${data.name}</h5>
                    <h6>${data.species}</h6>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>
          `

          document.getElementById("card-container").innerHTML += card

      });
  }

//   // fetch(url del servicio a consumir)
//   //     .then(convierte el response a JSON yt se lo pasa al siguiente then)
//   //     .then(data en formato JSON)
}

// los primeros 5 personajes - 3 personas al azar

// http://jairoApi/api/inventario -> {data: [{},{},{},{}]}
