const anoAtual = new Date().getFullYear();
document.getElementById('ano-atual').textContent = anoAtual;

const ipElement = document.getElementById('ip');

function json(url) {
    return fetch(url).then(res => res.json());
  }
  
  json(`https://ifconfig.me/all.json`).then(data => {
    document.getElementById("ip").innerHTML = data.ip_addr;
  });
