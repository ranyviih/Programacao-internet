//mostre no console oq foi digitado pelo usuario
async function pesquisarArtista() {
  const artista = document.getElementById("artista").value;
  const musica = document.getElementById("musica").value;
  console.log(artista);
  const url = `https://api.vagalume.com.br/search.php?art=${artista}&mus=${musica}`;

  const dados = await fetch(url);
  const nome = await dados.json();

  console.log(nome.mus[0].text);

  const saida = document.getElementById("saida");
  saida.innerText = nome.mus[0].text;

  if (nome.mus[0].text.length > 480){
      let container = document.querySelector(".container")
      container.style.height = "180vh"
  }
  // madonna holiday
}

document.querySelector("button").addEventListener("click", pesquisarArtista);
