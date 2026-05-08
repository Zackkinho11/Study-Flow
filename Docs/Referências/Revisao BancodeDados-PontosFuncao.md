# Revisao BancodeDados-PontosFuncao

UNIVERSIDADE FEDERAL DE ITAJUBÁ - CAMPUS ITABIRA INSTITUTO DE CIÊNCIAS TECNOLÓGICAS ENGENHARIA DE COMPUTAÇÃO 

GRUPO 8: 

BEATRIZ COELHO PEREIRA

 BRENO VITOR DE PAULA 

CARLOS EDUARDO ABREU DA SILVA 

LUCAS LUZ SOUZA PIRES 

VITOR HUGO RODRIGUES BASÍLIO 

ANÁLISE E DESENVOLVIMENTO DE SOFTWARE II

Banco de dados e pontos de função

ITABIRA - MG 

2025

Introdução

Este documento apresenta a revisão e a evolução dos relatórios dos bancos de dados ER e lógico, bem como o cálculo e o ajuste dos pontos de função. Esta nova versão consolida um entendimento mais maduro e detalhado do escopo do projeto, com foco na entrega de uma ferramenta robusta e alinhada às necessidades do usuário final.

As principais evoluções documentadas aqui incluem a remoção das funcionalidades do ator "Administrador" para concentrar o desenvolvimento no cliente, e um aprofundamento significativo no modelo de dados para suportar funcionalidades mais granulares. Como resultado, o modelo de banco de dados foi enriquecido com novas entidades como

Avaliação, Topico e Meta, permitindo um rastreamento mais preciso do progresso do usuário. Consequentemente, a Análise de Pontos de Função (FPA) foi refeita utilizando uma abordagem mais detalhada, resultando em uma estimativa mais precisa que reflete tanto a simplificação do escopo funcional quanto o aumento da complexidade dos dados.

Diagrama Conceitual

Lógico

  Usuario

Usuario (User_ID, User_name, Email, Senha, Foto, Data_cadastro, Recebe_notificacao_pref, Horas_diarias, Nivel_atual, Data_atualizacao)

 Disciplina

Disciplina (Disciplina_ID, Nome, Professor(a), Data_inicio, Data_fim, Anotações, User_ID)

User_ID: (FK referencia Usuario(User_ID))

Avaliação 

Avaliacao (Avaliacao_ID, Nome, Tipo, Data_entrega, Anotacoes, Disciplina_ID)

Disciplina_ID: (FK referencia Disciplina(Disciplina_ID))

Topico 

Topico (Topico_ID, Nome, Descricao, Disciplina_ID)

Disciplina_ID: (FK referencia Disciplina(Disciplina_ID))

Meta 

Meta (Meta_ID, Descricao, Data_criacao, Data_prazo, Status, User_ID)

User_ID: (FK referencia Usuario(User_ID))

 Item_cronograma

Item_cronograma (Item_ID, Nome, Tipo, Prioridade, Data_inicio, Data_fim, Descrição, User_ID, Disciplina_ID, Topico_ID)

User_ID: (FK referencia Usuario(User_ID))

Disciplina_ID: (FK referencia Disciplina(Disciplina_ID) - opcional)

Topico_ID: (FK referencia Topico(Topico_ID) - opcional)

 Sessão_tempo

Sessao_tempo (Sessao_ID, Data_inicio, Data_fim, Duracao_efetiva, Numero_pausas, Status, exp, User_ID, Item_ID)

User_ID: (FK referencia Usuario(User_ID))

Item_ID: (FK referencia Item_cronograma(Item_ID))

Notificação

Notificação (Notificação_ID, Mensagem, Tipo_evento, User_ID, Item_ID)

User_ID: (FK referencia Usuario(User_ID))

Item_ID: (FK referencia Item_cronograma(Item_ID))

 Conquista_definição

Conquista_definição (Conquista_ID, Nome, Descrição, Critério, Pontos_recompensa, Ícone)

 User_conquista

User_conquista (Data_conquista, User_ID, Conquista_ID)

User_ID: (FK referencia Usuario(User_ID))

Conquista_ID: (FK referencia Conquista_definição(Conquista_ID))

 Palavra-chave

Palavra-chave (Palavra_ID, Palavra, Localização, User_ID)

User_ID: (FK referencia Usuario(User_ID))

 Sinc_gmail

Sinc_gmail (FonteExterna_ID, Token_Acesso, Data_ultima_sinc, Email_sinc, is_Sincronizacao_Auto, User_ID)

User_ID: (FK referencia Usuario(User_ID))

4. Pontos de função

Arquivo Lógico (ALI / AIE)

DET’s

FTR’s

Complexidade

Pontos

Arquivos Lógicos Internos (ALI)

Usuário

10

1

Baixa

7

Disciplina

6

1

Baixa

7

Tópico de Estudo 

4

1

Baixa

7

Avaliação (Prova/Trabalho) 

6

1

Baixa

7

Item do Cronograma

10

1

Baixa

7

Sessão de tempo

9

1

Baixa

7

Progresso de Gamificação (Conquistas/Níveis)

7

2

Média

10

Meta do Usuário 

6

1

Baixa

7

Notificação

5

1

Baixa

7

Configuração de Sincronização (Gmail + Palavras-chave)

10

2

Média

10

Subtotal ALI

76

Arquivo de Interface Externa (AIE)

Fonte Externa (API do Google)

6

3

Média

7

Subtotal AIE

7

Funcionalidade (Transação)

Tipo

DETs

FTRs

Complexidade

Pontos

Entradas Externas (EE)

Monitorar Tempo de Estudo

EE

4

1

Simples

3

Cadastrar Usuário

EE

4

1

Simples

3

Gerenciar Perfil

EE

6

1

Simples

3

Cadastrar Rotina

EE

5

1

Simples

3

Cadastrar Disciplinas

EE

21

3

Média

4

Editar Cronograma

EE

4

3

Simples

3

Sincronizar Dados (Importar)

EE

6

4

Complexa

6

Autenticar Usuário

EE

2

1

Simples

3

Subtotal EE

28

Saídas Externas (SE)

Exibir Dashboard (Gamificação)

SE

8

5

Média

5

Mandar Notificações

SE

3

3

Simples

4

Visualizar Cronograma

SE

4

3

Simples

4

Compartilhar Progresso

SE

2

2

Simples

4

Subtotal SE

17

Total pontos:

Somando todos os subtotais, obtemos o novo UFP:

UFP = (Subtotal ALI) + (Subtotal AIE) + (Subtotal EE) + (Subtotal SE)

UFP = 76 + 7 + 28 + 17

UFP = 128 Pontos de Função

*14 perguntas responder 0 a 5*

 • O sistema requer salvamento (backup) e recuperação (recovery)?  

 • Comunicações de dados são necessárias?

 • Há funções de processamento distribuídos?

 • O desempenho é crítico?

 • O sistema vai ser executado em um ambiente operacional existente, intensamente utilizado?

 • O sistema requer entrada de dados on-line? 

 • A entrada de dados on-line exige transação de entrada seja construída através de várias telas de operações?

 •Os arquivos mestre são atualizados on-line? 

 • As entradas, saídas, arquivos ou consultas são complexas?

 • O processamento interno é complexo? 

• O código é projetado para ser reusado? 

• A conversão e a instalação estão incluídas no projeto?

• O sistema está projetado para instalações múltiplas em diferentes organizações?

• A aplicação está projetada para facilitar modificações e para facilidade de uso pelo usuário?

Perguntas

Pontuação

Justificativa

1

4

Essencial para proteger os dados de cronograma e progresso do usuário.

2

4

Sim, para sincronização com APIs externas (Google) e para o envio de notificações.

3

0

A arquitetura não sugere processamento distribuído; a lógica é centralizada.

4

4

Sim, especialmente na resposta da interface do cronograma e no monitoramento em tempo real.

5

1

Será executado em sistemas operacionais maduros (Android/Web), mas não é um ambiente legado.

6

5

Todas as interações do usuário (cadastro, cronograma, etc.) são on-line.

7

3

O cadastro de disciplinas, com suas avaliações e tópicos, pode ser considerado um processo multi-etapas.

8

5

Sim, o cronograma, perfil e progresso do usuário são atualizados em tempo real.

9

4

A geração automática do cronograma e o dashboard de gamificação envolvem lógicas complexas.

10

4

O algoritmo para sugerir um cronograma com base em disciplinas e rotinas é internamente complexo.

11

3

Uma boa prática de desenvolvimento, mas não um requisito explícito de alta prioridade.

12

2

O usuário final precisa instalar e configurar o app, o que está no escopo.

13

0

O foco é o usuário individual, não a instalação em múltiplas organizações.

14

5

O requisito RNF002 de usabilidade é essencial para o projeto.

Total de Respostas (Grau de Influência Total - TDI)

44

Total respostas: 

VAF=0,65+(0,01×TDI)

VAF=0,65+(0,01×40)=1,05

O cálculo final dos Pontos de Função Ajustados (AFP) é:

AFP = UFP x VAF

AFP = 128 x 1,05

AFP ≈ 134 Pontos de Função

5. Conclusão

As melhorias no modelo de dados, com a introdução de entidades para avaliações, tópicos e metas, alinham a estrutura do banco de dados diretamente aos requisitos funcionais mais detalhados, garantindo a flexibilidade e a profundidade necessárias para as funcionalidades de gamificação e monitoramento. A reavaliação dos Pontos de Função, resultando em uma estimativa final de aproximadamente 134 PF, reflete de forma justa essa evolução: um sistema com um escopo de atores mais enxuto, porém com uma complexidade interna de dados maior.