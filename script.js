// verifica o horário inserido e entra na sala da meet
if(document.querySelector('#check_agendado').checked){
    var now = new Date();
    function h_agendado(){
        var h_agendado = Number(document.querySelector("#h_agendado").value); return h_agendado
    }
    function m_agendado(){
        var m_agendado = Number(document.querySelector("#m_agendado").value); return m_agendado
    }
    
    var millisTill10 = new Date(now.getFullYear(), now.getMonth(), now.getDate(), h_agendado(), m_agendado(), 0, 0) - now;
    var botao = document.querySelector("#yDmH0d > c-wiz > div > div > div:nth-child(10) > div.crqnQb > div > div.gAGjv > div.vgJExf > div > div > div.d7iDfe.NONs6c > div > div.Sla0Yd > div > div.XCoPyb > div:nth-child(1) > button > span")
    if (millisTill10 < 0) {
     millisTill10 += 86400000; // já passou do horário, começa de novo.
    }
    setTimeout(function(){botao.click()}, millisTill10);
}

