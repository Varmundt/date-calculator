// Somas

function pluralizar(valor, singular, plural) {
    let arredondado = parseFloat(valor.toFixed(2));
    return arredondado === 1 ? singular : plural;
}

function calcular() {
    let d1 = new Date(document.getElementById("data1").value);
    let d2 = new Date(document.getElementById("data2").value);

    if (!d1 || !d2 || isNaN(d1) || isNaN(d2)) {
        document.getElementById("resultado").innerText = "Insira duas datas válidas!";
        return;
    }

    let diffMs = Math.abs(d2 - d1);
    let diffDias = diffMs / (1000 * 60 * 60 * 24);

    let anos = diffDias / 365;
    let dias = Math.floor(diffDias);
    let meses = diffDias / 30;

    document.getElementById("resultado").innerHTML =
        `Entre as duas datas há um espaço de: <br><br>
        ${dias} ${pluralizar(dias, "Dia", "Dias")}<br>
        ou
        <br>
        ${anos.toFixed(2)} ${pluralizar(anos, "Ano", "Anos")} <br>
        ou
        <br>
        ${meses.toFixed(2)} ${pluralizar(meses, "Mês", "Meses")}.`;
}

// Relógio
  
  function atualizarRelogio() {
    const agora = new Date();

    const data = agora.toLocaleDateString("pt-BR", {
      weekday: "long", year: "numeric", month: "long", day: "numeric"});

    const hora = agora.toLocaleTimeString("pt-BR");
    document.getElementById("relogio").innerHTML = data + " - " + hora;}

  setInterval(atualizarRelogio, 1000);
  atualizarRelogio();
