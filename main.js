function buscarCep() {
    let campoCep = document.getElementById('cep').value;

    const ajax = new XMLHttpRequest();
    ajax.open('GET', 'https://viacep.com.br/ws/' + campoCep + '/json/');
    ajax.send();

    ajax.onload = function() {
    document.getElementById('texto').innerHTML = this.responseText;
    
    // TRASNFORMEI TEXTO EM OBJETO
    let obj = JSON.parse(this.responseText);

    // PEGUEI VALORES
    let logradouro = obj.logradouro;
    let bairro = obj.bairro;
    let cidade = obj.localidade;
    let uf = obj.uf;

    document.getElementById('texto').innerHTML = `Logradouro: ${logradouro}<br>Bairro: ${bairro} 
    <br> Cidade: ${cidade} <br> UF:${uf}`
}


}