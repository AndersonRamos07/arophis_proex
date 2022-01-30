const express = require('express');

exports.accessYes = (log, pass) => {
    var inputLogin = document.getElementById("login");
    var inputSenha = document.getElementById("senha");

    if(log != '' || log != null){
        if(pass != '' || pass != null){
            if(log == 'MAD' && pass == 'MASTER'){
                alert('Bem vindo!');
                location.href = '/inicio';
            }else{
                location.href = '/';
                alert('Usuário não cadastrado!');
                inputLogin.focus();
            }
        }else{
            location.href = '/';
            alert('Informe uma senha válida!');
            inputSenha.focus();
        }
    }else{
        location.href = '/';
        alert('Informe um login válido!');
        inputLogin.focus();
    }
};

module.exports = accessYes;