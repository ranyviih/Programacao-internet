//mostre no console oq foi digitado pelo usuario
async function pesquisarArtista() {
  const artista = document.getElementById("artista").value;
  const musica = document.getElementById("musica").value;
  console.log(artista);
  const url = `https://api.vagalume.com.br/search.php?art=${artista}&mus=${musica}`;

  // Realizar uma requisição assíncrona usando fetch para a URL da API e extraindo do JSON
  const dados = await fetch(url);
  const nome = await dados.json();

   // Exibir o texto da primeira música encontrada no console
  console.log(nome.mus[0].text);
  
  // Definir o texto da saída como o texto da primeira música encontrada
  const saida = document.getElementById("saida");
  saida.innerText = nome.mus[0].text;

  //para musicas muito extensa aumentar o tamanho da tela
  if (nome.mus[0].text.length > 480){
      let container = document.querySelector(".container")
      container.style.height = "250vh"
  }
}

document.querySelector("button").addEventListener("click", pesquisarArtista);
