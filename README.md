<!DOCTYPE html><html lang="pt-BR">
<head>
<meta charset="UTF-8">
<title>RP Sistema - Rio de Janeiro</title><style>
body {
  margin:0;
  font-family: Arial;
  background: #0a0a0a;
  color: white;
}

header {
  background: #111;
  padding: 15px;
  text-align: center;
}

nav button {
  margin:5px;
  padding:10px;
  background:#222;
  color:white;
  border:none;
  cursor:pointer;
}

.section {
  display:none;
  padding:20px;
}

.active {
  display:block;
}

input, textarea, select {
  display:block;
  margin:10px 0;
  padding:10px;
  width:90%;
  border-radius:5px;
  border:none;
}

button.submit {
  background: green;
  padding:10px;
}

.card {
  background:#111;
  padding:15px;
  margin:10px 0;
  border-radius:10px;
}

.admin {
  color: red;
}
</style></head><body><header>
  <h1>🌆 Sistema RP - Rio de Janeiro</h1>  <nav>
    <button onclick="mostrar('perfil')">Perfil</button>
    <button onclick="mostrar('evidencia')">Enviar Evidência</button>
    <button onclick="mostrar('pesquisa')">Pesquisar</button>
    <button onclick="mostrar('admin')">Admin</button>
  </nav>
</header><!-- PERFIL --><div id="perfil" class="section active">
  <h2>👤 Perfil</h2>
  <input type="text" id="nome" placeholder="Seu nome">
  <select id="cargo">
    <option>Membro</option>
    <option>Moderador</option>
    <option>Líder</option>
  </select>
  <button class="submit" onclick="salvarPerfil()">Salvar</button>  <div id="perfilInfo"></div>
</div><!-- EVIDÊNCIA --><div id="evidencia" class="section">
  <h2>📁 Enviar Evidência</h2>
  <input type="text" id="titulo" placeholder="Título">
  <input type="text" id="link" placeholder="Link vídeo/foto">
  <textarea id="desc" placeholder="Descrição"></textarea>
  <button class="submit" onclick="enviarEvidencia()">Enviar</button>
</div><!-- PESQUISA --><div id="pesquisa" class="section">
  <h2>🔍 Pesquisar Evidências</h2>
  <input type="text" id="buscar" placeholder="Digite o título">
  <button onclick="pesquisar()">Buscar</button>
  <div id="resultados"></div>
</div><!-- ADMIN --><div id="admin" class="section">
  <h2 class="admin">⚙️ Painel Admin</h2>
  <p>Apenas Moderador ou Líder</p>
  <div id="lista"></div>
</div><script>
let evidencias = [];
<!DOCTYPE html><html lang="pt-BR">
<head>
<meta charset="UTF-8">
<title>RP Sistema - Rio de Janeiro</title><style>
body {
  margin:0;
  font-family: Arial;
  background: #0a0a0a;
  color: white;
}

header {
  background: #111;
  padding: 15px;
  text-align: center;
}

nav button {
  margin:5px;
  padding:10px;
  background:#222;
  color:white;
  border:none;
  cursor:pointer;
}

.section {
  display:none;
  padding:20px;
}

.active {
  display:block;
}

input, textarea, select {
  display:block;
  margin:10px 0;
  padding:10px;
  width:90%;
  border-radius:5px;
  border:none;
}

button.submit {
  background: green;
  padding:10px;
}

.card {
  background:#111;
  padding:15px;
  margin:10px 0;
  border-radius:10px;
}

.admin {
  color: red;
}
</style></head><body><header>
  <h1>🌆 Sistema RP - Rio de Janeiro</h1>  <nav>
    <button onclick="mostrar('perfil')">Perfil</button>
    <button onclick="mostrar('evidencia')">Enviar Evidência</button>
    <button onclick="mostrar('pesquisa')">Pesquisar</button>
    <button onclick="mostrar('admin')">Admin</button>
  </nav>
</header><!-- PERFIL --><div id="perfil" class="section active">
  <h2>👤 Perfil</h2>
  <input type="text" id="nome" placeholder="Seu nome">
  <select id="cargo">
    <option>Membro</option>
    <option>Moderador</option>
    <option>Líder</option>
  </select>
  <button class="submit" onclick="salvarPerfil()">Salvar</button>  <div id="perfilInfo"></div>
</div><!-- EVIDÊNCIA --><div id="evidencia" class="section">
  <h2>📁 Enviar Evidência</h2>
  <input type="text" id="titulo" placeholder="Título">
  <input type="text" id="link" placeholder="Link vídeo/foto">
  <textarea id="desc" placeholder="Descrição"></textarea>
  <button class="submit" onclick="enviarEvidencia()">Enviar</button>
</div><!-- PESQUISA --><div id="pesquisa" class="section">
  <h2>🔍 Pesquisar Evidências</h2>
  <input type="text" id="buscar" placeholder="Digite o título">
  <button onclick="pesquisar()">Buscar</button>
  <div id="resultados"></div>
</div><!-- ADMIN --><div id="admin" class="section">
  <h2 class="admin">⚙️ Painel Admin</h2>
  <p>Apenas Moderador ou Líder</p>
  <div id="lista"></div>
</div><script>
let evidencias = [];

