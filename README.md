# clean-architecture-ranking-loader
🌟 Example API made with Rest and GraphQL using Clean Architecture

### _PT-BR_
# História

* Vamos desenvolver uma nova rota na API do jogo Realm Defense (jogo de Tower Defense com heróis)
* Nessa API será possível obter o resultado do torneio diário (todos que jogam o jogo participam desse torneio)
* O torneio fica disponível para ser jogado todos os dias de 00:00 às 21:59 (UTC-0).

# Regras de Negócio

* De 00:00 às 21:59 os jogadores podem conferir o resultado do último torneio.

* De 22:00 às 23:59 essa API não deve retornar nenhum dado (período de suspense antes de anunciar os vencedores).

# Quem vai usar essa API?

Temos duas telas onde essa API pode ser usada:

* Tela com um resumo rápido do ranking onde apenas exibimos o nome dos jogadores, os nomes dos heróis que eles usaram no torneio e sua pontuação final.

* Tela mais detalhada onde mostramos o nome do usuário e sua nacionalidade, os nomes dos heróis e seus níveis, a pontuação final e a data/hora que o jogador atingiu aquela pontuação.
