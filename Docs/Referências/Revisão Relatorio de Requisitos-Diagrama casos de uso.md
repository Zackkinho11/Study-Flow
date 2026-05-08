# Revisão Relatorio de Requisitos-Diagrama casos de uso

UNIVERSIDADE FEDERAL DE ITAJUBÁ - CAMPUS ITABIRA

INSTITUTO DE CIÊNCIAS TECNOLÓGICAS

ENGENHARIA DE COMPUTAÇÃO

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

Este documento apresenta a revisão do levantamento de requisitos para o software de gerenciamento de estudos, concebido originalmente no contexto da disciplina de Análise e Desenvolvimento de Software I. A presente versão, desenvolvida como parte da disciplina de Análise e Desenvolvimento de Software II, tem como objetivo aprofundar e refinar o escopo do projeto, garantindo maior precisão e clareza para as etapas subsequentes de desenvolvimento.

Diagrama de Caso de uso

Mudanças no Diagrama:

A principal alteração realizada no Diagrama de Casos de Uso foi a revisão da forma como a funcionalidade "Gamificar o progresso" se relaciona com o ator Cliente e com os demais casos de uso.

Na versão anterior, "Gamificar o progresso" estava incorretamente associado como uma inclusão obrigatória (<<include>>) dos casos de uso "Cadastrar usuário" e "Autenticar usuário". Isso sugeria que a gamificação era uma parte inseparável e necessária do processo de cadastro e login, o que não reflete a lógica do sistema.

Lista de Requisitos

Requisitos Funcionais (RF)

RF001 - Cadastrar usuário (1 - Essencial): Esta funcionalidade é responsável por cadastrar o usuário no sistema.

RF002 - Gerenciar Perfil (1 - Essencial):Esta funcionalidade é responsável pela personalização do perfil do usuário e da edição de seus dados.

RF003 - Autenticar Usuário (1 - Essencial): Esta funcionalidade é responsável pela autenticação do usuário ao sistema.

RF004 - Gamificar o processo (2 - Importante):   Esta funcionalidade é responsável por exibir métricas de desempenho dos estudos e implementar um sistema de gamificação para motivar o usuário.

RF005 - Cadastrar Disciplinas (2 - Importante): Esta funcionalidade é responsável por cadastrar as matérias/disciplinas que o usuário está cursando/estudando.

RF006 - Cadastrar Rotina (2 - Importante): Esta funcionalidade é responsável por cadastrar a rotina do usuário

RF007 - Permitir compartilhamento de progresso  (3 - Desejável): Essa funcionalidade irá permitir os usuários a compartilharem seus avanços com a comunidade, promovendo engajamento e troca de experiências.

RF008  - Gerar cronograma (1 - Essencial): Esta funcionalidade é responsável por gerar automaticamente um cronograma de estudos para o usuário.

RF009  - Gerenciar cronograma (1 - Essencial): Esta funcionalidade é responsável por permitir ao usuário a criação/edição manual do cronograma de estudos, possibilitando criar, editar e excluir os compromissos individualmente.

RF010  - Mandar notificações  (2- Importante): Esta funcionalidade permite ao sistema enviar notificações automáticas para alertar o usuário sobre eventos importantes cadastrados no cronograma, como provas, entregas de trabalhos, aulas e outras atividades relevantes. O objetivo é auxiliar o usuário na gestão do tempo e na organização de suas tarefas acadêmicas e pessoais.

RF011  - Monitorar Tempo  (2 - Importante): Esta funcionalidade permite que o sistema registre o tempo dedicado pelo usuário a cada atividade planejada no cronograma, fornecendo métricas de produtividade, foco e regularidade dos estudos. O recurso pode ser ativado manualmente ou automaticamente, com relatórios gerados periodicamente.

RF012  - Sincronizar Dados (1 - Essencial): Esta funcionalidade é responsável por sincronizar datas de eventos, provas, trabalhos e atividades do cronograma do usuário com fontes externas (como calendários digitais e e-mails), facilitando a integração e atualização automática do cronograma de estudos.

Requisitos Não Funcionais (RNF)

RNF001 - Garantir política de privacidade e segurança de dados (1 - Essencial): Esta funcionalidade irá definir regras de privacidade e proteção dos dados do usuário, garantindo conformidade com normas de segurança.

RNF002 - Garantir usabilidade e desempenho (1 - Essencial): Esta funcionalidade irá promover uma interface intuitiva, fácil de usar e visualmente agradável. Garantir a resposta rápida da interface, sincronização eficiente com os serviços externos e o carregamento rápido de dados.

RNF003 - Escalabilidade  (2 - Importante): Esta funcionalidade irá assegurar que o sistema possa atender a um número crescente de usuários e dados sem comprometer o desempenho.

RNF004 - Oferecer suporte a dispositivos Android (1 - Essencial): Esta funcionalidade irá oferecer portabilidade e comodidade, garantindo que a aplicação funcione corretamente no ambiente Android.

RNF005 - Oferecer suporte a navegadores web (1 - Essencial): Esta funcionalidade assegurará a operação responsiva e eficiente nos navegadores Web.

RNF006 - Acessibilidade (3- Desejável): Essa funcionalidade fará com que o sistema esteja em conformidade com as diretrizes de acessibilidade WCAG 2.1

RNF007 - Integrar com sistemas específicos de instituições de ensino (4 - Não Implementar): Esta funcionalidade permitirá a integração de sistemas (ex: SIGAA ou Moodle) para importação automática de dados acadêmicos. No entanto, a aplicação não será implementada, pois limita nosso programa, como a necessidade e dependência de acordos o que compromete a independência e escalabilidade do software.

RNF008 - Organização de Disciplinas (2 - Importante): Esta funcionalidade organizará as disciplinas/ tópicos cadastrados pelo usuário em uma tabela visual, a fim de otimizar a visualização e acesso dos mesmos.

Tabela Resumo de Requisitos

Código

Descrição

Prioridade 

(1 a 4)

Funcional / Não funcional

RF001

Cadastrar usuários

1

Funcional

RF002

Gerenciar perfil

1

Funcional

RF003

Autenticar usuários

1

Funcional

RF004

Gamificar o processo

2

Funcional

RF005

Cadastrar disciplinas

2

Funcional

RF006

Cadastrar rotina

2

Funcional

RF007

Permitir o compartilhamento de processo

3

Funcional

RF008

Gerar cronograma

1

Funcional

RF009

Gerenciar cronograma

1

Funcional

RF010

Mandar notificações

2

Funcional

RF011

Monitorar tempo

2

Funcional

RF012

Sincronizar dados

1

Funcional

RNF001

Garantir política de privacidade e segurança de dados

1

Não Funcional

RNF002

Garantir usabilidade e desempenho

1

Não Funcional

RNF003

Escalabilidade 

2

Não Funcional

RNF004

Oferecer

 suporte a dispositivos Android

1

Não Funcional

RNF005

Oferecer suporte a navegadores web

1

Não Funcional

RNF006

Acessibilidade

3

Não Funcional

RNF007

Integrar com sistemas específicos de instituições de ensino

4

Não Funcional

RNF008

Organização de disciplinas

2

Não Funcional

Conclusão

Esta revisão promoveu o refinamento do levantamento de requisitos para o software de gerenciamento de estudos. Partindo do trabalho inicial desenvolvido na disciplina de Análise e Desenvolvimento de Software I , esta nova versão, elaborada no contexto de Análise e Desenvolvimento de Software II, consolida e aprofunda o escopo do projeto.

As principais evoluções incluem o desmembramento de requisitos funcionais genéricos em funcionalidades mais granulares, como a separação da gestão de usuários em cadastro, autenticação e gerenciamento de perfil , e a adição de capacidades essenciais como o cadastro de rotina e o gerenciamento manual do cronograma. Essas mudanças garantem maior clareza para a equipe de desenvolvimento e alinham o produto de forma mais precisa às necessidades de flexibilidade e controle do usuário final.

A introdução do Diagrama de Casos de Uso  formaliza visualmente as interações e funcionalidades do sistema, servindo como um guia robusto para as próximas etapas do projeto. A manutenção dos requisitos não funcionais  demonstra a consistência da visão de qualidade do produto, focada em segurança, desempenho e usabilidade.

Ao final desta revisão, o projeto se encontra em um estágio de maior maturidade, com uma base de requisitos mais detalhada, coesa e bem documentada, estabelecendo um alicerce sólido para as fases subsequentes de design, implementação e testes.