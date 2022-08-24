// verifica o horário inserido e entra na sala da meet FUNCIONANDO!!!
if(document.querySelector('#init_agendado').checked){
    var now = new Date();
    var hour = document.querySelector('#h_agendado').value;
    var min = document.querySelector('#m_agendado').value;
    
    var millisTill = new Date(now.getFullYear(), now.getMonth(), now.getDate(), hour, min, 0, 0) - now;
    var botao = document.querySelector("#yDmH0d > c-wiz > div > div > div:nth-child(10) > div.crqnQb > div > div.gAGjv > div.vgJExf > div > div > div.d7iDfe.NONs6c > div > div.Sla0Yd > div > div.XCoPyb > div:nth-child(1) > button > span")
    if (millisTill < 0) {
     millisTill += 86400000; // já passou do horário, começa de novo.
    }
    setTimeout(function(){botao.click()}, millisTill);
}

