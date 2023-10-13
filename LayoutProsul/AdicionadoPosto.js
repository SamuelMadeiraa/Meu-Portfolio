<input type="text" id="nomeInput" placeholder="Digite um nome">
    <button id="botaoCriar">Criar</button>

    <script>
        // Função para adicionar um nome à tabela
        function adicionarNome() {
            // Obtenha o valor do nome do input
            var nome = document.getElementById("nomeInput").value;

            if (nome.trim() !== "") {
                // Se o nome não estiver em branco
                var tabela = document.querySelector("#tabela table tbody");
                var novaLinha = tabela.insertRow(tabela.rows.length);
                var celula = novaLinha.insertCell(0);
                celula.innerHTML = nome;
            }

            // Limpar o campo de entrada
            document.getElementById("nomeInput").value = "";
        }

        // Associar a função ao evento de clique do botão
        document.getElementById("botaoCriar").addEventListener("click", adicionarNome);
    </script>