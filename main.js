function buscarCep() {
    let campoCep = document.getElementById('cep').value;

    const ajax = new XMLHttpRequest();
    ajax.open('GET', 'https://viacep.com.br/ws/' + campoCep + '/json/');
    ajax.send();

    ajax.onload = function() {

    
    // TRASNFORMEI TEXTO EM OBJETO
    let obj = JSON.parse(this.responseText);


    document.getElementById('place').value = `${obj.logradouro}`
    document.getElementById('district').value = `${obj.bairro}`
    document.getElementById('city').value = `${obj.localidade}`
    document.getElementById('state').value = `${obj.uf}`

}
}



    // document.getElementById('texto').innerHTML = this.responseText;

    // PEGUEI VALORES
    // let logradouro = obj.logradouro;
    // let bairro = obj.bairro;
    // let cidade = obj.localidade;
    // let uf = obj.uf;

    // document.getElementById('texto').innerHTML = `${logradouro}`