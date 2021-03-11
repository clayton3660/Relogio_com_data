setInterval(() => {
  nomeDia = [
    'domingo',
    'segunda',
    'terça',
    'quarta',
    'quinta',
    'sexta',
    'sábado',
  ];
  data = new Date();
  horas = data.getHours();
  minutos = data.getMinutes();
  segundos = data.getSeconds();
  diaS = data.getDay();
  dia = data.getDate();
  mes = data.getMonth() + 1;
  date = ` ${
    diaS < 6 && diaS > 0 ? nomeDia[diaS] + ' - feira' : nomeDia[diaS]
  }<br> ${dia < 10 ? (dia = '0' + dia) : dia} / ${
    mes < 10 ? (mes = '0' + mes) : mes
  }/ ${data.getFullYear()}`;

  rel = document.getElementById('rel');
  dat = document.getElementById('dat');
  dat.innerHTML = date;
  rel.innerHTML = `${horas < 10 ? (horas = '0' + horas) : horas}:${
    minutos < 10 ? (minutos = '0' + minutos) : minutos
  }.${segundos < 10 ? (segundos = '0' + segundos) : segundos}`;
}, 1000);
