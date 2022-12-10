function fillFields(response) {
  // clearValues();
  document.getElementById("place").value = `${response.logradouro}`;
  document.getElementById("district").value = `${response.bairro}`;
  document.getElementById("city").value = `${response.localidade}`;
  document.getElementById("state").value = `${response.uf}`;
}

const cepIsValid = (cep) => /^[0-9]+$/.test(cep);

async function loadCep() {
  clearValues();
  const cep = document.getElementById("cep").value;
  const urlApi = `https://viacep.com.br/ws/${cep}/json/`;
  if (cepIsValid(cep)) {
    let request = await fetch(urlApi);
    let response = await request.json();

    if (response.hasOwnProperty("erro")) {
      let error = document.getElementById("place");
      document.getElementById("place").value = "CEP não encontrado";
      error.classList.add("error");
    } else {
      let error = document.getElementById("place");
      error.classList.remove("error");
      fillFields(response);
    }
  } else {
    let error = document.getElementById("place");
    document.getElementById("place").value = "CEP incorreto";
    error.classList.add("error");
  }
}

function clearValues() {
  document.getElementById("place").value = "";
  document.getElementById("district").value = "";
  document.getElementById("city").value = "";
  document.getElementById("state").value = "";
}
