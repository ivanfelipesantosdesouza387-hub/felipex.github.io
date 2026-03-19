let evidencias = [];
let usuarioAtual = {};

function mostrar(secao) {
  const secoes = document.querySelectorAll('.section');
  secoes.forEach(s => s.classList.remove('active'));
  document.getElementById(secao).classList.add('active');
}

function salvarPerfil() {
  const nome = document.getElementById('nome').value;
  const cargo = document.getElementById('cargo').value;
  
  if (!nome) {
    alert('Digite seu nome!');
    return;
  }
  
  usuarioAtual = { nome, cargo };
  localStorage.setItem('perfil', JSON.stringify(usuarioAtual));
  
  document.getElementById('perfilInfo').innerHTML = `
    <div class="card">
      <strong>Nome:</strong> ${nome}<br>
      <strong>Cargo:</strong> ${cargo}
    </div>
  `;
  
  alert('Perfil salvo com sucesso!');
}

function enviarEvidencia() {
  const titulo = document.getElementById('titulo').value;
  const link = document.getElementById('link').value;
  const desc = document.getElementById('desc').value;
  
  if (!titulo || !link || !desc) {
    alert('Preencha todos os campos!');
    return;
  }
  
  const evidencia = {
    id: Date.now(),
    titulo,
    link,
    desc,
    autor: usuarioAtual.nome || 'Anônimo',
    data: new Date().toLocaleDateString('pt-BR')
  };
  
  evidencias.push(evidencia);
  localStorage.setItem('evidencias', JSON.stringify(evidencias));
  
  document.getElementById('titulo').value = '';
  document.getElementById('link').value = '';
  document.getElementById('desc').value = '';
  
  alert('Evidência enviada com sucesso!');
}

function pesquisar() {
  const termo = document.getElementById('buscar').value.toLowerCase();
  const resultados = evidencias.filter(e => e.titulo.toLowerCase().includes(termo));
  
  let html = '';
  resultados.forEach(e => {
    html += `
      <div class="card">
        <strong>${e.titulo}</strong><br>
        <small>Por: ${e.autor} | ${e.data}</small><br>
        <p>${e.desc}</p>
        <a href="${e.link}" target="_blank">Ver Evidência</a>
      </div>
    `;
  });
  
  document.getElementById('resultados').innerHTML = html || '<p>Nenhuma evidência encontrada</p>';
}

function carregarAdmin() {
  const cargo = usuarioAtual.cargo || 'Membro';
  
  if (cargo === 'Membro') {
    document.getElementById('lista').innerHTML = '<p style="color:red;">Acesso negado! Apenas Moderador ou Líder.</p>';
    return;
  }
  
  let html = '<h3>Todas as Evidências</h3>';
  evidencias.forEach(e => {
    html += `
      <div class="card">
        <strong>${e.titulo}</strong><br>
        <small>Por: ${e.autor} | ${e.data}</small><br>
        <p>${e.desc}</p>
        <a href="${e.link}" target="_blank">Ver</a>
        <button onclick="deletarEvidencia(${e.id})" style="background:red; color:white; padding:5px; border:none; cursor:pointer;">Deletar</button>
      </div>
    `;
  });
  
  document.getElementById('lista').innerHTML = html;
}

function deletarEvidencia(id) {
  evidencias = evidencias.filter(e => e.id !== id);
  localStorage.setItem('evidencias', JSON.stringify(evidencias));
  carregarAdmin();
  alert('Evidência deletada!');
}

function carregarDados() {
  const perfilSalvo = localStorage.getItem('perfil');
  const evidenciasSalvas = localStorage.getItem('evidencias');
  
  if (perfilSalvo) {
    usuarioAtual = JSON.parse(perfilSalvo);
    document.getElementById('nome').value = usuarioAtual.nome;
    document.getElementById('cargo').value = usuarioAtual.cargo;
    document.getElementById('perfilInfo').innerHTML = `
      <div class="card">
        <strong>Nome:</strong> ${usuarioAtual.nome}<br>
        <strong>Cargo:</strong> ${usuarioAtual.cargo}
      </div>
    `;
  }
  
  if (evidenciasSalvas) {
    evidencias = JSON.parse(evidenciasSalvas);
  }
}

document.addEventListener('DOMContentLoaded', carregarDados);