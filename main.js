function loadCep() {
  const resultCep = document.getElementById("cep").value;
  fetch(`https://viacep.com.br/ws/${resultCep}/json/`)
    .then((response) => response.json())
    .then(function (json) {
      console.log(json);
      document.getElementById("place").value = `${json.logradouro}`;
      document.getElementById("district").value = `${json.bairro}`;
      document.getElementById("city").value = `${json.localidade}`;
      document.getElementById("state").value = `${json.uf}`;
    })
    .catch(() => alert(`${resultCep} é um formato de CEP inválido.`));
}

function clearValues() {
  document.getElementById("cep").value = "";
  document.getElementById("place").value = "";
  document.getElementById("district").value = "";
  document.getElementById("city").value = "";
  document.getElementById("state").value = "";
  document.getElementById("texto").innerHTML = "";
}

function loadCep() {
  let campoCep = document.getElementById("cep").value;

  const ajax = new XMLHttpRequest();
  ajax.open("GET", "https://viacep.com.br/ws/" + campoCep + "/json/");
  ajax.send();

  ajax.onload = function () {
    // TRASNFORMEI TEXTO EM OBJETO
    let obj = JSON.parse(this.responseText);

    document.getElementById("place").value = `${obj.logradouro}`;
    document.getElementById("district").value = `${obj.bairro}`;
    document.getElementById("city").value = `${obj.localidade}`;
    document.getElementById("state").value = `${obj.uf}`;
  };
}
