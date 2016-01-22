# MemoryMatch

Exercício a ser resolvido pelo Candidato
Em JavaScript e _sem usar qualquer framework_, deve ser criado o Jogo da Memoria
("memory match") usando a lista de "badges" do Codebits num tabuleiro 6x3.
Indicações:
O jogo deverá corre no browser e no inicio deve aparecer um botão "Novo Jogo"
Quando se clica em "Novo Jogo", é feito um pedido JsonP ao endpoint da API dos "badges" do
Codebits (o parâmetro JsonP é "callback") - ver legenda.
Da resposta, devem ser escolhidos 9 "badges" aleatórios para formar os pares e construir o
tabuleiro 6x3 usando a imagem do bot do codebits como "default/costas", mostrando um
botão "Iniciar Jogo".
Quando se clica "Iniciar Jogo" deve ser mostrado um contador que vai contando o tempo até
que o jogo seja terminado.
Para jogar, o jogador vai clicando nos bots para os virar e mostrar as imagens (aos pares) até
que todos os pares sejam encontrados. Quando o par virado não for igual este volta à posição
inicial.
Quando o jogador terminar o jogo, o contador deve parar e deve ser mostrado um link para
partilhar o tempo do jogo no twitter com a mensagem "Memory JavaScript FTW em: <tempo
do jogo>"
Legenda:
Endpoint da API: https://services.sapo.pt/Codebits/listbadges
Imagem default/costas: https://i2.wp.com/codebits.eu/logos/defaultavatar.jpg
URL de partilha do twitter: https://twitter.com/intent/tweet/?text=<Texto para partilhar>
Exemplo de um jogo da memória:
http://c1.quickcachr.fotos.sapo.pt/i/o43138c2c/14885783_9Vj9A.png
