function updateClock() {
    const atual = new Date();
    const horas = atual.getHours().toString().padStart(2, '0');
    const minutos = atual.getMinutes().toString().padStart(2, '0');
    const segundos = atual.getSeconds().toString().padStart(2, '0');

    const timeString = `${horas}:${minutos}:${segundos}`;
    document.getElementById('tempo').textContent = timeString;
}

setInterval(updateClock, 1000);



const linhaData = document.getElementById('data');

function formatarData() {
  const diasDaSemana = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];
  const meses = [
    'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
    'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
  ];

  const hoje = new Date();
  const diaSemana = diasDaSemana[hoje.getDay()];
  const dia = hoje.getDate();
  const mes = meses[hoje.getMonth()];
  const ano = hoje.getFullYear();

  return `${diaSemana}, ${dia} de ${mes} de ${ano}`;
}

linhaData.textContent = formatarData();
