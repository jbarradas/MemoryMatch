# MemoryMatch

<b>Exercício a ser resolvido pelo Candidato</b><br><br>
Em JavaScript e _sem usar qualquer framework_, deve ser criado o Jogo da Memoria<br>
("memory match") usando a lista de "badges" do Codebits num tabuleiro 6x3.<br><br>
Indicações:<br><br>
O jogo deverá corre no browser e no inicio deve aparecer um botão "Novo Jogo"<br>
Quando se clica em "Novo Jogo", é feito um pedido JsonP ao endpoint da API dos "badges" do<br>
Codebits (o parâmetro JsonP é "callback") - ver legenda.<br><br>
Da resposta, devem ser escolhidos 9 "badges" aleatórios para formar os pares e construir o<br>
tabuleiro 6x3 usando a imagem do bot do codebits como "default/costas", mostrando um<br>
botão "Iniciar Jogo".<br><br>
Quando se clica "Iniciar Jogo" deve ser mostrado um contador que vai contando o tempo até<br>
que o jogo seja terminado.<br><br>
Para jogar, o jogador vai clicando nos bots para os virar e mostrar as imagens (aos pares) até<br>
que todos os pares sejam encontrados. Quando o par virado não for igual este volta à posição<br>
inicial.<br><br>
Quando o jogador terminar o jogo, o contador deve parar e deve ser mostrado um link para<br>
partilhar o tempo do jogo no twitter com a mensagem "Memory JavaScript FTW em: <tempo
do jogo>"<br><br>
Legenda:<br><br>
Endpoint da API: https://services.sapo.pt/Codebits/listbadges<br>
Imagem default/costas: https://i2.wp.com/codebits.eu/logos/defaultavatar.jpg<br>
URL de partilha do twitter: https://twitter.com/intent/tweet/?text=<Texto para partilhar><br>
Exemplo de um jogo da memória:<br>
http://c1.quickcachr.fotos.sapo.pt/i/o43138c2c/14885783_9Vj9A.png<br>
