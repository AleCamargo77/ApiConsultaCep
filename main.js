async function loadCep() {
  const resultCep = document.getElementById("cep").value;
  let req = await fetch(`https://viacep.com.br/ws/${resultCep}/json/`);
  let response = await req.json();

  // .then((response) => response.json())
  // .then(function (json) {
  document.getElementById("place").value = `${response.logradouro}`;
  document.getElementById("district").value = `${response.bairro}`;
  document.getElementById("city").value = `${response.localidade}`;
  document.getElementById("state").value = `${response.uf}`;
  // })
  // .catch(() => alert(`${resultCep} é um formato de CEP inválido.`));
}

function clearValues() {
  document.getElementById("cep").value = "";
  document.getElementById("place").value = "";
  document.getElementById("district").value = "";
  document.getElementById("city").value = "";
  document.getElementById("state").value = "";
}
