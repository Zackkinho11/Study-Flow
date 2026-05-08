# Revisao  Relatorio do Casos de uso

UNIVERSIDADE FEDERAL DE ITAJUBÁ - CAMPUS ITABIRA INSTITUTO DE CIÊNCIAS TECNOLÓGICAS ENGENHARIA DE COMPUTAÇÃO 

GRUPO 8: 

BEATRIZ COELHO PEREIRA

 BRENO VITOR DE PAULA 

CARLOS EDUARDO ABREU DA SILVA 

LUCAS LUZ SOUZA PIRES 

VITOR HUGO RODRIGUES BASÍLIO 

ANÁLISE E DESENVOLVIMENTO DE SOFTWARE II

ITABIRA - MG 

2025

Introdução

Este documento apresenta a revisão das descrições de casos de uso para o software de gerenciamento de estudos, dando continuidade ao trabalho desenvolvido na disciplina de Análise e Desenvolvimento de Software I. Esta nova versão, elaborada no contexto de Análise e Desenvolvimento de Software II, tem como finalidade refinar o detalhamento funcional do sistema, alinhando as especificações com a fase de prototipagem e a maturação dos requisitos.

As descrições foram aprimoradas para refletir com maior precisão o fluxo de interação do usuário com a aplicação, detalhando os passos, os dados manipulados e os possíveis cenários alternativos. O objetivo é fornecer à equipe de desenvolvimento um guia claro e inequívoco sobre o comportamento esperado do software, eliminando ambiguidades e estabelecendo uma base sólida para as etapas de implementação, teste e validação.

Descrições dos Casos de uso

Descrição de Caso de Uso

Cadastrar usuário

        Gestão de estudos Inteligentes

Versão 2 Data 20/08/2025

Descrição

Esta funcionalidade é responsável por cadastrar o usuário no sistema.

Fluxo Básico

O sistema exibe a tela de login/cadastro, com os dados: email, senha e dois botões “login”(+INC - Autenticar Usuário)  e “cadastre-se”.

O usuário seleciona o botão de cadastro.

O sistema exibe a tela com os campos para o cadastro do usuário: nome completo (campo textual - not null), nome de usuário (campo textual - not null) F.A, email (campo textual - not null) F.A, senha (campo textual, criptografado - not null) F.A e  confirmar senha (campo textual, criptografado - not null) F.A.

O usuário fornece os dados e clica no botão “criar conta”.

O sistema efetua a gravação das informações no banco de dados e o direciona para a tela de login/cadastro novamente.

Fluxos Alternativos

3a: Caso o nome de usuário informado já exista no sistema:

  3a1:O sistema informa o usuário de que o nome de usuário já está em uso.

  3a2: O usuário deverá escolher um novo nome de usuário.

  3a3: Retorna ao passo 3 do Fluxo Básico.

3b: Caso o e-mail informado já esteja cadastrado:

  3b1: O sistema informa o usuário de que o e-mail já está registrado.

  3b2: O usuário poderá optar por recuperar a senha ou fornecer um e-mail diferente.

  3b3: Retorna ao passo 3 do Fluxo Básico.

3c: Caso a senha informada não siga os critérios de segurança (mínimo de 8 caracteres, pelo menos uma letra maiúscula, uma minúscula, um número e um caractere especial):

  3c1: O sistema informa o usuário sobre os critérios obrigatórios para a senha.

  3c2: O usuário deve informar uma nova senha válida.

  3c3:  Retorna ao passo 3 do Fluxo Básico.

3d: Caso a "Senha" e a "Confirmar Senha" não sejam idênticas:

      3d1: O sistema exibe uma mensagem de erro informando que as senhas não coincidem.

     3d2: O usuário deve informar e confirmar a senha novamente.   

     3d3: Retorna ao passo 3 do Fluxo Básico.

Requerimentos Especiais

O processo de cadastro deve garantir a segurança e a confidencialidade das informações fornecidas pelo usuário, seguindo as políticas de proteção de dados do sistema, onde os dados sensíveis devem ser tratados de forma segura.

Pré-condições

- O usuário deve estar na página de cadastro do sistema.

Condições Posteriores

O usuário deve ter uma conta criada no sistema, ter acesso a essa conta e as funcionalidades do sistema.

Observações

Nenhuma.

Descrição de Caso de Uso

Gerenciar Perfil

        Gestão de estudos Inteligentes

Versão 2 Data 20/08/2025

Descrição

Esta funcionalidade é responsável pela personalização do perfil do usuário e da edição de seus dados.

Fluxo Básico

O usuário acessa pelo menu a opção de “Gerenciar Perfil” a partir da tela principal do sistema.

O sistema exibe uma nova página com os seguintes campos/opções:

2.1: É exibido seu nome de usuário atual, e, logo abaixo, um campo escrito “Alterar nome de usuário” (textual), onde poderá digitar um novo nome para seu perfil. (F.A)

2.2: É exibida sua foto atual de usuário, e, logo abaixo, um botão escrito “Alterar foto de perfil”, abrindo uma janela com imagens já registradas no sistema e a opção de “Fazer upload de imagem”, onde poderá selecionar uma imagem salva em seu computador.

2.3: É exibido seu email atual cadastrado no sistema, e, logo abaixo, um campo escrito “Alterar email do usuário” (textual), onde poderá digitar um novo email para seu perfil. (F.A)

2.4: Um campo escrito “Alterar senha do usuário” (textual, criptografado), onde poderá digitar uma nova senha para seu perfil. Logo abaixo, outro campo escrito “Confirmar nova senha”, onde terá que escrever o mesmo texto contido no campo anterior. (F.A)

No final da página, há um campo escrito “Digite a senha atual para confirmação das alterações” (textual, criptografado), onde o usuário digita sua senha atual. Logo abaixo, um botão escrito “Confirmar alterações”. (F.A)

O sistema realiza as alterações do usuário e o redireciona para a página inicial com a mensagem “Alterações confirmadas com sucesso”.

Fluxos Alternativos

2.1a: Caso digite um nome de usuário já existente e clique em “Confirmar alterações”, este retorna ao passo 2 do Fluxo Básico com uma mensagem de erro.

2.3a: Caso digite um endereço de email incorretamente ou que outro usuário já está utilizando e clique em “Confirmar alterações”, este retorna ao passo 2 do Fluxo Básico com uma mensagem de erro.

2.4a: Caso os 2 campos não contenham o mesmo texto e clique em “Confirmar alterações”, este retorna ao passo 2 do Fluxo Básico com uma mensagem de erro.

3a: Caso o usuário não digite sua senha corretamente e clique em “Confirmar alterações”,

este retorna ao passo 2 do Fluxo Básico com uma mensagem de erro.

Requerimentos Especiais

Interface interativa e responsiva, com suas devidas mensagens de erro para cada fluxo alternativo citado.

Pré-condições

-O usuário deve estar cadastrado no sistema (Cadastrar usuário) e estar na tela inicial.

Condições Posteriores

O usuário terá os dados alterados atualizados no banco de dados.

Observações

Nenhuma.

 

Descrição de Caso de Uso

Autenticar Usuário

       Gestão de estudos Inteligentes

Versão 2 Data 21/08/2025

Descrição

Esta funcionalidade é responsável pela autenticação do usuário ao sistema. 

Fluxo Básico

O sistema exibe a tela de login/cadastro, com os dados: email, senha e dois botões “login” e “cadastre-se” (Cadastrar usuário).

O usuário já cadastrado preenche os campos de email (campo textual - not null) e senha (campo textual, criptografado - not null) com seus respectivos dados e clica no botão “login”. 

 O usuário é direcionado para a tela principal do sistema.

Fluxos Alternativos

2a: Caso algum dos campos não for preenchido corretamente e o usuário pressione em “login”, o sistema exibe uma mensagem de erro para que tente preenchê-los novamente de forma correta.

Requerimentos Especiais

-Interface responsiva e simples.

Pré-condições

-O usuário deve estar cadastrado no sistema (Cadastrar usuário).

Condições Posteriores

O usuário poderá utilizar o software a partir da tela principal.

Observações

Nenhuma.

 

Descrição de Caso de Uso

Gamificar o processo 

       Gestão de estudos Inteligentes

Versão 2 Data 19/08/2025

Descrição

Esta funcionalidade é responsável por exibir métricas de desempenho dos estudos e implementar um sistema de gamificação para motivar o usuário.

Fluxo Básico

O usuário acessa pelo menu a opção “gamificação” na tela inicial do sistema após login.

O sistema exibe um dashboard com os seguintes dados:   2.1. Total de horas estudadas (semana, mês e acumulado).   2.2. Disciplinas/tópicos mais estudados.   2.3. Comparativo de desempenho com períodos anteriores.

O sistema também exibe uma seção de recompensas gamificadas:   3.1. Níveis de usuário (baseado em tempo de estudo).   3.2. Conquistas por metas atingidas .

   3.3. Barras de progresso com objetivos personalizados. F.A

O usuário pode interagir com o dashboard, filtrando os dados por disciplina, período e tipo de atividade.

O sistema salva automaticamente os dados de desempenho e atualiza as recompensas ao atingir as metas.

Fluxos Alternativos

3a: Caso não haja dados de estudo suficientes para gerar métricas:

  3a1: O sistema exibe uma mensagem informando que é necessário registrar sessões   de estudo.    3a2: O usuário é redirecionado para a funcionalidade de monitoramento de tempo (Monitorar tempo).    3a3. Retorna ao passo 2 do Fluxo Básico.

3b: Caso o usuário desative as recompensas gamificadas nas configurações:

  3b1: O sistema oculta os elementos de gamificação (níveis, conquistas e metas).

    3b2: Apenas as métricas de desempenho continuam visíveis.

    3b3: Retorna ao passo 2 do Fluxo Básico.

Requerimentos Especiais

Interface responsiva, com gráficos interativos e indicadores visuais acessíveis.

Pré-condições

-O usuário deve estar autenticado no sistema.

Condições Posteriores

O sistema atualiza o progresso do usuário com base nos dados de estudo registrados.

Observações

Os dados de desempenho influenciam notificações e sugestões personalizadas.

Descrição de Caso de Uso 

Permitir o Compartilhamento de progresso.

        Gestão de estudos Inteligentes

Versão 2 Data 22/08/2025

Descrição

Essa funcionalidade irá permitir os usuários a compartilharem seus avanços com a comunidade, promovendo engajamento e troca de experiências.

Fluxo Básico

 1. O usuário acessa pelo menu a aba de compartilhar.

 2. O sistema exibe as conquistas e progresso do usuário:(F.A)

       2.1.Níveis de usuário.

       2.2.Disciplina/tópico mais estudado.

       2.3.Somatório das horas da disciplina/tópico mais estudado.

       2.4.Última conquista por metas atingidas.

 3. O usuário clica no botão compartilhar.

 4. O sistema exibe uma mensagem de confirmação.

 5. O usuário clica no botão confirmar.(F.A)

 6. O sistema realiza o compartilhamento das informações do usuário e exibe uma mensagem de sucesso.

Fluxos Alternativos

2a: Caso o usuário não tenha conquistas e progresso o sistema exibe uma mensagem e a opção de o redirecionar para Gamificar processo. 

5a: Caso o usuário não confirme o sistema o retorna para aba de compartilhar.

Requerimentos Especiais

 Os dados do usuário só poderão ser compartilhados mediante consentimento explícito, pelo botão confirmar.

Pré-Condições

- Cadastrar Usuário

- Autenticar Usuário

Condições Posteriores

O usuário pode visualizar o conteúdo compartilhado na aba de compartilhar na sessão de meus compartilhamentos e na sessão de compartilhamento geral dos usuários.

Observações

Nenhuma.

Descrição de Caso de Uso

Cadastrar Disciplinas

         Gestão de estudos Inteligentes

Versão 2 Data 21/08/2025

Descrição

Esta funcionalidade é responsável por cadastrar as matérias/disciplinas que o usuário está cursando/estudando.

Fluxo Básico

O sistema oferece um menu com as opções de cadastro de disciplinas pelo método manual ou  automático. 

O usuário seleciona a opção manual.(F.A)

O  sistema apresenta a tela com os campos para inclusão de múltiplas disciplinas: nome da disciplina (campo textual- not null), horário (enumerado - campo hora - not null), data de início e término das aulas (campo data - campo data - not null), máximo de 5 provas de cada matéria com seu determinado horário, de acordo com a preferência do usuário (enumerado - campo hora - mínimo 0, máximo 5 itens) e um campo de anotações para que o usuário possa definir os conteúdos abordados em cada  prova (campo de texto multilinha - texto longo), máximo de 10 trabalhos, junto de suas respectivas datas de entrega (enumerado - campo hora - mínimo 0, máximo 10 itens) e um campo de anotações para que o usuário possa definir os conteúdos necessários cada trabalho (campo de texto multilinha - texto longo).

O usuário fornece os dados solicitados e clicar no botão salvar

O sistema retorna os dados para o gerador de cronograma 

Fluxos Alternativos

2a:         Se a opção automática for selecionada, o sistema ativa a sincronização de

            dados com o gmail  do usuário, coletando informações para preencher

            automaticamente os campos de cada matéria, prova e trabalho que encontrar,

            baseado no cadastro de palavras-chave* (Sincronizar dados)

2a.1. Após o término do processo, o    sistema deve apresentar o cadastro pronto e exibir uma caixa de diálogo após o cadastro perguntando se o usuário deseja editar alguma informação  (campo seleção - not null) 

1.3. Se o usuário selecionar     “Sim”, o sistema deve liberar a edição.

1.4. Se o usuário selecionar “Não”, o sistema procede.

4a:      Caso o usuário não adicione algum campo obrigatório, o sistema apresenta

           mensagem de erro ao clicar no botão salvar.

Requerimentos Especiais

O sistema requer o cadastro de palavras-chave para realizar o cadastro automático*

Pré-Condições

-Cadastrar usuário.

-Autenticar usuário

Condições Posteriores

O usuário poderá adicionar sua rotina pessoal além dos estudos (+INC - Cadastrar rotina).

Observações

Nenhuma.

Descrição de Caso de Uso

Cadastrar Rotina

       Gestão de estudos Inteligentes

Versão 2 Data 21/08/2025

Descrição

Esta funcionalidade é responsável por cadastrar a rotina do usuário

Fluxo Básico

O sistema exibe tela com listagem de todas as atividades cadastradas pelo usuário com os dados: Nome da atividade, anotações extras e botões de edição (F.A.), exclusão (F.A.) e inclusão de atividades. 

Usuário seleciona o botão de inclusão de novas atividades: 

2.1. O sistema apresenta a tela uma tela com os campos para inclusão de múltiplas atividades: Nome da atividade (campo textual- not null), horário (enumerado - campo hora - not null) (F.A) e um campo de anotações para que o usuário possa adicionar observações extras, se necessário (campo de texto multilinha - texto longo).

               2.2. O usuário fornece os dados solicitados e clica no botão salvar

               2.3. O sistema retorna os dados para o gerador de cronograma 

Fluxos Alternativos

2.a: Caso o usuário tenha selecionado o botão de edição, o sistema apresenta a tela de edição com os seguintes dados: Nome da atividade (campo textual- not null), horário (enumerado - campo hora - not null) (F.A) e um campo de anotações para que o usuário possa adicionar observações extras, se necessário (campo de texto multilinha - texto longo).

2.b: Caso o usuário tenha selecionado o botão de exclusão, o sistema deleta a atividade cadastrada

2.c: Caso não existam tarefas cadastrados a lista é apresentada vazia. 

2.1.a: Caso o usuário não adicione algum campo obrigatório, o sistema apresenta mensagem de erro.

Requerimentos Especiais

Nenhum

Pré-Condições

-Cadastrar usuário.

-Autenticar usuário

Condições Posteriores

Nenhuma.

Observações

Nenhuma.

Descrição de Caso de Uso

     Gerar cronograma

       Gestão de estudos Inteligentes

Versão 2 Data 22/08/2025

Descrição

Esta funcionalidade é responsável por gerar automaticamente um cronograma de estudos para o usuário

Fluxo Básico

 1.  O usuário acessa o menu e seleciona a opção “Gerar Cronograma”.

 2.  O Sistema valida a existência de disciplinas cadastradas (+INC – Cadastrar Disciplina), rotinas registradas (+INC – Cadastrar Rotinas) e dados de compromissos sincronizados (+INC – Sincronização de Datas).

Coleta as informações disponíveis e executa o algoritmo para gerar o cronograma, respeitando prioridades, datas e disponibilidade, apresentando ao usuário a visualização do cronograma sugerido.(F.A)

 3. O Usuário confirma o cronograma gerado selecionando o botão Confirmar ou solicitar a geração de uma nova versão através do botão Novo Cronograma (F.A.).

 4. O Sistema salva o cronograma confirmado e exibe uma mensagem para a visualização final do cronograma para o usuário (+EXT - Gerenciar cronograma).

Fluxos Alternativos

2a:Caso não existam disciplinas, rotinas ou compromissos sincronizados, o Sistema exibe uma mensagem informando a necessidade de realizar os cadastros para permitir a geração do cronograma.

3a:Caso o Usuário selecione o botão Novo Cronograma, o Sistema realiza novamente o algoritmo  e retorna para o Passo 2.

Requerimentos Especiais

 A visualização do cronograma deve oferecer modos semanal e mensal.

Pré-Condições

-Cadastrar Usuário

-Autenticar Usuário

- Cadastrar disciplina

- Cadastrar rotinas 

- Sincronizar datas

Condições Posteriores

O cronograma gerado será salvo e estará disponível para consulta e edição na funcionalidade Gerenciar Cronograma (+EXT - Gerenciar Cronograma).

Observações

Nenhuma.

Descrição de Caso de Uso Gerenciar cronograma

       Gestão de estudos Inteligentes

Versão 2 Data 23/08/2025

Descrição

Esta funcionalidade é responsável por permitir ao usuário a criação ou edição manual do cronograma de estudos, possibilitando criar, editar e excluir os compromissos individualmente.

Fluxo Básico

1.O usuário acessa o menu e seleciona a opção “Cronograma”.

2.O Sistema verifica se o Usuário já possui um cronograma salvo:  2.1. Se não houver cronograma existente: O sistema sugere a opção de Gerar

    Cronograma (+EXT – Gerar Cronograma) como caminho principal.(F.A.).

   2.2. Se houver cronograma existente: o sistema apresenta o cronograma atual,

   permitindo edição, exclusão ou criação de compromissos.(F.A.).

3. O Usuário visualiza o cronograma e opta por uma das ações:

 3.1. Seleciona um compromisso para editar.

 3.2. Seleciona um compromisso para excluir (F.A.).

 3.3. Seleciona a opção para criar novo compromisso (F.A.).

4. O Sistema apresenta a tela do cronograma, onde o Usuário pode interagir com os campos dos compromissos, podendo alterar os dados: nome do compromisso (campo textual - not null), data (campo textual - not null) , duração(início-fim) (campo textual - not null) e assunto (campo textual - not null).

5. O Usuário realiza as alterações desejadas e confirma a operação clicando no botão Confirmar.

6. O Sistema salva as alterações e atualiza a visualização do cronograma, mostrando o cronograma alterado.

Fluxos Alternativos

2a: Caso o usuário decida não aceitar a sugestão de gerar cronograma (quando não houver nenhum), o Sistema mantém a tela do cronograma em branco disponível para edição/criação manual.

2b: Caso o Usuário decida gerar um cronograma mesmo na existência de um, o Usuário clica no botão “gerar cronograma” presente na aba cronograma, o Sistema o redireciona para gerar o novo cronograma (+EXT – Gerar Cronograma).

3a: O Sistema apresenta a tela com os compromissos e a possibilidade de exclusão dos compromissos existentes, o usuário escolhe um compromisso e confirma a exclusão. O sistema exclui o compromisso selecionado, salva as alterações e atualiza a visualização do cronograma para o usuário.

3b:O Sistema apresenta a tela do cronograma com a possibilidade de criar compromissos nas datas disponíveis e livres, onde o Usuário pode criar os dados, sendo para disciplinas ou rotina, respectivamente: Nome do compromisso (campo textual – not null), Duração(início-fim) (campo textual – not null), Data (campo textual – not null), Provas(campo textual), Trabalhos(campo textual), Assunto (campo textual – not null) e Nome do compromisso (campo textual – not null), Duração(início-fim) (campo textual – not null), Data (campo textual – not null), Assunto (campo textual – not null). O Sistema salva a alteração, mostra o cronograma alterado e retorna à tela de visualização do cronograma para o usuário.

5a: Caso o Usuário não preencha todos os campos obrigatórios (ex: data, nome), o Sistema exibe mensagem de erro e solicita o preenchimento dos campos obrigatórios antes de permitir salvar e retorna à tela de visualização.

Requerimentos Especiais

 A visualização do cronograma deve oferecer modos semanal e mensal.

Pré-Condições

-Cadastrar Usuário

-Autenticar Usuário

Condições Posteriores

As alterações feitas serão salvas e o cronograma será atualizado.

Observações

Nenhuma.

Descrição de Caso de Uso

Mandar notificações

       Gestão de estudos Inteligentes

Versão 2 Data 19/08/2025

Descrição

Esta funcionalidade permite ao sistema enviar notificações automáticas para alertar o usuário sobre eventos importantes cadastrados no cronograma, como provas, entregas de trabalhos, aulas e outras atividades relevantes. O objetivo é auxiliar o usuário na gestão do tempo e na organização de suas tarefas acadêmicas e pessoais.

Fluxo Básico

O usuário seleciona a opção de permitir notificações.

O sistema realiza verificações periódicas no cronograma do usuário e quando identifica eventos futuros relevantes, programa a notificação com antecedência.

As notificações são enviadas conforme a preferência do usuário (push via aplicativo, e-mail ou ambos).

O usuário recebe a notificação e pode acessá-la para visualizar mais detalhes do evento correspondente.

O sistema registra o envio e a leitura da notificação (quando aplicável).

Fluxos Alternativos

3.a: Caso o usuário não tenha configurado preferências de notificação, o sistema usa a configuração padrão: aviso 24 horas antes do evento.

4.a: Se o envio falhar por motivos técnicos (ex: usuário offline, erro de rede), o sistema reprograma o envio após um intervalo curto.

5.a: Caso o evento relacionado seja removido ou alterado antes do envio, o sistema cancela ou atualiza a notificação automaticamente.

Requerimentos Especiais

A aplicação deve estar integrada com serviços de envio de notificações push e e-mail.

O usuário deve ter concedido permissão para o recebimento de notificações no dispositivo.

Pré-Condições

-Autenticar usuário

-Gerar cronograma ou Gerenciar cronograma

Condições Posteriores

O usuário será lembrado dos eventos importantes de forma automática e oportuna.

O histórico de notificações poderá ser consultado.

Observações

O usuário pode ajustar o tipo e o tempo de antecedência das notificações a qualquer momento nas configurações da conta.

Eventos sincronizados de fontes externas também geram notificações automaticamente, desde que ativadas.

Descrição de Caso de Uso

Monitorar Tempo

       Gestão de estudos Inteligentes

Versão 2 Data 22/08/2025

Descrição

Esta funcionalidade permite que o sistema registre o tempo dedicado pelo usuário a cada atividade planejada no cronograma, fornecendo métricas de produtividade, foco e regularidade dos estudos. O recurso pode ser ativado manualmente ou automaticamente, com relatórios gerados periodicamente.

Fluxo Básico

O usuário inicia uma sessão de estudo a partir do cronograma ou diretamente pela opção “Iniciar Monitoramento”.

O sistema inicia um contador de tempo vinculado à atividade selecionada.

Durante a sessão, o usuário pode pausar ou encerrar o monitoramento a qualquer momento.

Ao finalizar, o sistema registra o tempo total, associa os dados à atividade correspondente e atualiza os relatórios de desempenho do usuário com base no tempo registrado (+INC - Gamificar o processo).

Fluxos Alternativos

2.a: O sistema pode iniciar o monitoramento automaticamente ao detectar o início de uma atividade programada, com base em horário e presença no aplicativo.

3.a: Se o usuário permanecer inativo por um período prolongado (ex: sem interações), o sistema envia uma notificação para confirmar se o monitoramento deve continuar.

4.a: Caso o usuário encerre a sessão abruptamente (ex: fechamento forçado do app), o sistema solicita confirmação do tempo ao abrir novamente.

Requerimentos Especiais

Permissão para registrar o tempo em segundo plano (quando necessário).

Armazenamento seguro dos dados de sessão.

Eventual integração com ferramentas de foco (ex: Pomodoro).

Pré-Condições

-Autenticar usuário

Condições Posteriores

Os relatórios de desempenho e gráficos de tempo serão atualizados e o usuário poderá visualizar estatísticas semanais e mensais sobre o tempo de estudo (Gamificar o processo).

Observações

O tempo monitorado pode ser exportado ou compartilhado.

O usuário pode editar manualmente as sessões antigas, caso identifique erros no registro.

Descrição de Caso de Uso

Sincronizar Dados

Gestão de estudos Inteligentes

Versão 2 Data 22/08/2025

Descrição

Esta funcionalidade é responsável por sincronizar datas de eventos, provas, trabalhos e atividades do cronograma do usuário com fontes externas (como calendários digitais e e-mails), facilitando a integração e atualização automática do cronograma de estudos.

Fluxo Básico

O sistema oferece ao usuário a opção de sincronização com fontes externas.

O usuário escolhe o serviço a ser conectado (ex: Google, Microsoft).

O sistema solicita autorização de acesso à conta do usuário.

Após a autorização, o sistema realiza a leitura de dados com base em palavras-chave e padrões definidos (ex: “prova”, “aula”, “entrega”).

Os dados relevantes são extraídos e apresentados ao usuário em uma tela de pré-visualização.

O usuário seleciona os itens que deseja importar.

O sistema incorpora os dados escolhidos ao cronograma e ajusta os elementos já existentes, caso necessário.

Fluxos Alternativos

3.a: Caso o usuário negue a autorização, o sistema cancela a sincronização e exibe uma mensagem de aviso.

4.a: Se nenhuma palavra-chave estiver cadastrada, o sistema notifica o usuário e solicita o cadastro antes de continuar.

5.a: Caso nenhum dado relevante seja encontrado, o sistema exibe uma mensagem informando que não há dados a importar.

Requerimentos Especiais

O sistema deve estar integrado com APIs de terceiros (Google, Microsoft, etc.).

Palavras-chave precisam estar cadastradas previamente para auxiliar na filtragem dos dados.

Pré-Condições

-Autenticar usuário

-Gerar cronograma ou Gerenciar cronograma

Condições Posteriores

O cronograma do usuário estará atualizado com os dados importados.

O sistema manterá o registro da sincronização realizada.

Observações

A sincronização pode ser automática (em horários agendados) ou manual (por comando do usuário).

O usuário poderá revisar, editar ou excluir os dados sincronizados posteriormente.

3. Conclusão

A conclusão desta etapa de revisão dos casos de uso consolida um avanço significativo no detalhamento funcional do projeto. Ao aprofundar as especificações de funcionalidades-chave, como "Gerenciar Cronograma" e "Permitir o Compartilhamento de Progresso", o sistema ganhou clareza em seus fluxos mais complexos, garantindo que a implementação atenda às necessidades de flexibilidade e engajamento do usuário.

A remoção do caso de uso "Gerenciar Usuários (ADM)", presente na versão inicial, representa uma decisão estratégica de focar o escopo do produto na experiência do cliente final, simplificando o modelo e priorizando os recursos essenciais para o estudante. As atualizações, como a inclusão de campos de confirmação de senha no cadastro, demonstram a integração bem-sucedida entre a análise de requisitos, a prototipagem e a especificação funcional.