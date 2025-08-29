// Somas

      function calcular() {
      let d1 = new Date(document.getElementById("data1").value);
      let d2 = new Date(document.getElementById("data2").value);
      if (!d1 || !d2 || isNaN(d1) || isNaN(d2)) {
        document.getElementById("resultado").innerText = "Insira duas datas válidas.";
        return;}

      let diffMs = Math.abs(d2 - d1); 
      let diffDias = Math.floor(diffMs / (1000 * 60 * 60 * 24));
      let anos = Math.floor(diffDias / 365);
      let meses = Math.floor((diffDias % 365) / 30);

      document.getElementById("resultado").innerHTML =
        `Diferença: <br>
        ${diffDias} dias <br>
        ~${anos} anos e ${meses} meses`;}

// Relógio
  
  function atualizarRelogio() {
    const agora = new Date();

    const data = agora.toLocaleDateString("pt-BR", {
      weekday: "long", year: "numeric", month: "long", day: "numeric"});

    const hora = agora.toLocaleTimeString("pt-BR");
    document.getElementById("relogio").innerHTML = data + " - " + hora;}

  setInterval(atualizarRelogio, 1000);
  atualizarRelogio();
