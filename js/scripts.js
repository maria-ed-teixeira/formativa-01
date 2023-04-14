
// Script atividade 1--------

function validarDados() {
    let msgErro = document.getElementById('mensagem-erro');
    let data = frmRegistro.inData.value;
    let cliente = frmRegistro.inCli.value;
    let telefone = frmRegistro.inFone.value;
    let email = frmRegistro.inMail.value;
    let nomeProduto = frmRegistro.inProd.value;
    let quantidade = frmRegistro.inQtd.value;
    let valor = frmRegistro.inVal.value;
    msgErro.style.display = 'none';


    if (data == '') {
        let data = document.getElementById('mensagem-erro');
        data.innerHTML = "O campo data não pode ser vazio!"
        frmRegistro.inData.focus();
        msgErro.style.display = 'block';
        return false;
    }

    if (cliente == '') {
        let cliente = document.getElementById('mensagem-erro');
        cliente.innerHTML = "O campo cliente não pode ser vazio"; msgErro.style.display = 'block';
        frmRegistro.inCli.focus();
        return false;
    } else if (cliente.length < 5) {
        let cliente = document.getElementById('mensagem-erro');
        cliente.innerHTML = "O campo cliente não pode ter menos que 5 caracteres";msgErro.style.display = 'block';
        frmRegistro.inCli.focus();
        return false;
    }



    if (telefone == '') {
        let telefone = document.getElementById('mensagem-erro');
        telefone.innerHTML = "O campo telefone não pode ser vazio!";msgErro.style.display = 'block';
        frmRegistro.inFone.focus();
        return false;
    } else if (telefone < 5) {
        let telefone = document.getElementById('mensagem-erro');
        telefone.innerHTML = "O campo telefone não pode ter menos que 5 caracteristicas!";msgErro.style.display = 'block';
        frmRegistro.inFone.focus();
        return false;
    }

    if (email == '') {
        let email = document.getElementById('mensagem-erro');
        email.innerHTML = "O campo email não pode ser vazio!";msgErro.style.display = 'block';
        frmRegistro.inMail.focus();
        return false;
    } else if (email < 5) {
        let email = document.getElementById('mensagem-erro');
        email.innerHTML = "O campo email não pode ter menos que 5 caracteristicas!";msgErro.style.display = 'block';
        frmRegistro.inMail.focus();
        return false;
    }

    if (nomeProduto == '') {
        let nomeProduto = document.getElementById('mensagem-erro');
        nomeProduto.innerHTML = "O campo produto não pode ser vazio";msgErro.style.display = 'block';
        frmRegistro.inProd.focus();
        return false;
    } else if (nomeProduto < 5) {
        let nomeProduto = document.getElementById('mensagem-erro');
        nomeProduto.innerHTML = "O campo produto não pode ter menos que 5 caracteristicas!";msgErro.style.display = 'block';
        frmRegistro.inProd.focus();
        return false;
    }

    if (quantidade == '') {
        let quantidade = document.getElementById('mensagem-erro');
        quantidade.innerHTML = "O campo quantidade deve ser preenchido!";msgErro.style.display = 'block';
        frmRegistro.inQtd.focus();
        return false;
    } 
        
     if (quantidade < 0) {
        let quantidade = document.getElementById('mensagem-erro');
        quantidade.innerHTML = "O campo quantidade deve ser positivo!";msgErro.style.display = 'block';
        frmRegistro.inQtd.focus();
        return false;
    }

    if (valor == '') {
        let valor = document.getElementById('mensagem-erro');
        valor.innerHTML = "O campo Valor unitário deve ser preenchido!";msgErro.style.display = 'block';
        frmRegistro.inVal.focus();
        return false;
    }

    if (valor < 0) {
        let valor = document.getElementById('mensagem-erro');
        valor.innerHTML = "O campo Valor unitário deve ser positivo!";msgErro.style.display = 'block';
        frmRegistro.inVal.focus();
        return false;
    }
}

// ATIVIDADE 3
function alterarLampada() {
    let imagem = document.getElementById('lampada');
    let caminho = imagem.src;
    let arquivo = caminho.substring(
        caminho.lastIndexOf('/') + 1
    );

    if (arquivo == 'apagada.jpg' || arquivo == '')
        imagem.src = 'img/acesa.jpg';
    else
        imagem.src = 'img/apagada.jpg';
}

//atividade 4
function desconto() {
    let valorCompra = document.getElementById('valorPedido').value
    let perDesconto = 0
    let valorFinal = 0
    let valorDesconto = 0;

    document.getElementById('inPercDesc').value = '';
    document.getElementById('inValDesc').value = '';
    document.getElementById('inValFinal').value = '';

    if (valorCompra < 500) {
        perDesconto = 0
        valorDesconto = 0
        valorFinal = valorCompra
    }

    if (valorCompra >= 500 && valorCompra < 1000) {
        perDesconto = 0.5;
        valorDesconto = valorCompra * 0.5 / 100;
        valorFinal = valorCompra - valorDesconto;
    }

    if (valorCompra >= 1000 && valorCompra < 1500) {
        perDesconto = 0.8;
        valorDesconto = valorCompra * 0.8 / 100;
        valorFinal = valorCompra - valorDesconto;
    }

    if (valorCompra >= 1500 && valorCompra < 2000) {
        perDesconto = 1;
        valorDesconto = valorCompra * 1 / 100;
        valorFinal = valorCompra - valorDesconto;
    }

    if (valorCompra >= 2000) {
        perDesconto = 1.5;
        valorDesconto = valorCompra * 1.5 / 100;
        valorFinal = valorCompra - valorDesconto;
    }

    document.getElementById('inPercDesc').value = perDesconto;
    document.getElementById('inValDesc').value = valorDesconto;
    document.getElementById('inValFinal').value = valorFinal;

}

//ATIVIDADE 2

function gerarImagens() {
    const quantidade = document.getElementById("inQtdImg").value;
    let divCanvas = document.getElementById("canvas");
    let elemento = '<img src="img/logo.png" id="logo" alt="LOGO SENAI">';
    divCanvas.innerHTML = ''

    for (let i = 0; i < quantidade; i++) {
        divCanvas.innerHTML +=  elemento
    }

  }  

