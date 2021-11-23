"use strict";
$("#button1").click(gravarCookie);
$("#button2").click(carregarCookie);
$("#button3").click(apagarCookie);

let conf = { //configurações de expiração do cookie
    expires: 10,
    sameSite: 'strict',
    domain: ''
}

function gravarCookie(){   
    //pegar as informações digitadas no formulário
    let r = $("#rgm").val(); //val é uma função do JQuery que obtem o dado digitado no campo do furmulário
    let n = $("#nome").val();
    let p = $("#profissao").val();
    let c = $("#cpf").val();
    //gravação dos dados em cookies
    Cookies.set("rgm", r, conf);
    Cookies.set("nome", n, conf);
    Cookies.set("profissao", p, conf);
    Cookies.set("cpf", c, conf);
    alert("Dados gravados com sucesso");
    limparCampos();
}
  
function carregarCookie(){
    //verificar se o Cookie existe
    if(Cookies.get("rgm") != null){
        //exibe dados no formulário
        $("#rgm").val(Cookies.get("rgm"));
        $("#nome").val(Cookies.get("nome"));
        $("#profissao").val(Cookies.get("profissao"));
        $("#cpf").val(Cookies.get("cpf"));
        //exibe dados no article
        $("#dados").empty();
        $("#dados").append("RGM: " + Cookies.get("rgm"));
        $("#dados").append("<br>Nome: " + Cookies.get("nome"));
        $("#dados").append("<br>Profissão: " + Cookies.get("profissao"));
        $("#dados").append("<br>CPF: " + Cookies.get("cpf"));
    }else{
        alert("Nenhum cookie encontrado");
    }
}
  
function apagarCookie(){    
    //verifica se o cookie existe para apagar
    if(Cookies.get("rgm") != null){
        Cookies.remove("rgm");
        Cookies.remove("nome");
        Cookies.remove("profissao");
        Cookies.remove("cpf");
        alert("Dados excluidos com sucesso");
    }else{
        alert("Nenhum cookie encontrado");
    }
    limparCampos();
    $("#dados").empty();
}
  
function limparCampos(){
    $("#rgm").val("");
    $("#nome").val("");
    $("#profissao").val("");
    $("#cpf").val("");
}