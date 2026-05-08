# Modelo_fisico_BD

UNIVERSIDADE FEDERAL DE ITAJUBÁ - CAMPUS ITABIRA INSTITUTO DE CIÊNCIAS TECNOLÓGICAS ENGENHARIA DE COMPUTAÇÃO 

GRUPO 8: 

BEATRIZ COELHO PEREIRA

 BRENO VITOR DE PAULA 

CARLOS EDUARDO ABREU DA SILVA 

LUCAS LUZ SOUZA PIRES 

VITOR HUGO RODRIGUES BASÍLIO 

ANÁLISE E DESENVOLVIMENTO DE SOFTWARE II Relatório de Banco de dados

ITABIRA - MG 

2025

1.Introdução

O presente relatório tem como objetivo apresentar o desenvolvimento do modelo físico e lógico de um banco de dados relacional implementado no PostgreSQL, elaborado no contexto da disciplina Análise e Desenvolvimento de Software II. O projeto visa consolidar os conhecimentos teóricos sobre modelagem de dados, normalização e implementação prática de estruturas de armazenamento.

O banco de dados proposto foi desenvolvido para atender às necessidades de um sistema de gerenciamento de estudos (Study Flow), permitindo o cadastro de usuários, disciplinas, metas, cronogramas, notificações e conquistas. Foram definidos cuidadosamente os relacionamentos entre as entidades, bem como os tipos de dados, restrições e chaves primárias e estrangeiras. Além disso, o relatório inclui o dicionário de dados e o script DDL completo.

2.Dicionário Banco de dados

Tabela

Relacionamento

Nome do relacionamento

Descrição

Usuário

-Item_cronograma

-Notificação

-Palavra-chave

-Disciplina

-Sinc_gmail

-conquista_definição

-Meta

-Possui

-Recebe

-Define

-Cadastra

-Conecta

-User_conquista

-Define

Tabela de cadastro dos dados do usuário do sistema

Palavra-chave

-Usuário

-Define

Tabela de cadastro das palavras-chave para sincronização gmail

Sinc_gmail

-Usuário

-Conecta

Tabela de sincronização

Disciplina

-Usuário

-Avaliação

-Item_cronograma

-Tópico

-Cadastrar

-Contém

-Associado

-Composta

Tabela de cadastro de disciplinas no sistema

Avaliação

-Disciplina

-Contém

Tabela de avaliações das disciplinas cadastradas

Tópico

-Disciplina

-Item_cronograma

-Composta

-Aborda

Tabela de tópicos das disciplinas cadastradas

Notificação

-Usuário

-Item_cronograma

-Recebe

-Dispara

Tabela de notificações do sistema

Item_cronograma

-Disciplina

-Tópico

-Usuário

-Notificações

-Sessão_tempo

-Associa

-Aborda

-Possui

-Dispara

-Monitora

Tabela dos itens individuais do cronograma

Sessão_tempo

-Item_cronograma

-Monitora

Tabela de controle da sessão do “Pomodoro”

Meta

-Usuário

-Define

Tabela de meta estipulada pelo usuário

conquista_definição

-Usuário

-user_conquista

Tabela de conquistas alcançadas/em progresso do usuário

Tabela Usuário

Atributo

Tipo de Dados

Tamanho

Nulo

Chave

Descrição

user_ID

UUID 

-

Não

PK

Identificador único do usuário

nome_usuario

VARCHAR

100

Não

-

Nome do usuário

email

VARCHAR

150

Não

Único

E-mail do usuário

Senha_hash

VARCHAR

100

Não

-

Senha criptografada

foto

VARCHAR

255

Sim

-

Caminho ou URL da foto

data_cadastro

DATETIME

-

Não

-

Data de criação do cadastro

data_atualização

DATETIME

-

Não

-

Data da última atualização

recebe_notificação_pref

BOOLEAN

-

Não

-

Preferência de notificações

horas_diarias

INT

-

Não

-

Horas de estudos diária

Nivel_atual

INT

-

Não

-

Nível atual do usuário 

Tabela palavra-chave

Atributo

Tipo de dados

Tamanho

Nulo

Chave

Descrição

palavra_ID

UUID

-

Não

PK

Identificador da palavra-chave

palavra

VARCHAR

200

Não

-

Palavras utilizadas na sincronização

localização

ENUM email_localização

-

Não

-

Onde buscar (ex: Assunto, Corpo do e-mail).

created_at

TIMESTAMPTZ

-

-

-

Data de criação

user_id

UUID

-

Não

FK

Tabela Sinc_gmail

Atributo

Tipo de dados

Tamanho

Nulo

Chave

Descrição

FonteExterna_ID

UUID

-

Não

PK

Identificador da sincronização

Token_Acesso

TEXT

-

Não

-

Token de autenticação da conta Gmail

Data_ultima_sinc

TIMESTAMPTZ

-

Sim

-

Data da última sincronização

Email_sinc

VARCHAR

255

Não

-

E-mail sincronizado

is_Sincronização_Auto

BOOLEAN

-

Não

-

Define se a sincronização é automática

user_id

UUID

-

Não

FK

Tabela Disciplina

Atributo

Tipo de dados

Tamanho

Nulo

 Chave

Descrição

Disciplina_ID

UUID

-

Não

PK

Identificador da disciplina

Nome

VARCHAR

200

Não

-

Nome da disciplina

Professor(a)

VARCHAR

200

Sim

-

Nome do professor

Data_inicio

TIMESTAMPTZ

-

Não

-

Data e hora de início da disciplina

Data_fim

TIMESTAMPTZ

-

Não

-

Data e hora de término da disciplina

Anotações

JSONB

-

Sim

-

Observações gerais sobre a disciplina

user_id

UUID

-

Não

FK

Tabela Avaliação

Atributo

Tipo de dados

Tamanho

Nulo 

Chave

Descrição

Avaliação_ID

UUID

-

Não

PK

Identificador da avaliação

Nome

VARCHAR

200

Não

-

Nome da avaliação

Tipo

ENUM avaliacao_tipo

-

Não

-

Tipo da avaliação (prova, trabalho, etc.)

Data_entrega

TIMESTAMPTZ

-

Não

-

Data de entrega

Anotações

JSONB

-

Sim

-

Anotações gerais

disciplina_id

UUID

-

Não

FK

Tabela Tópico

Atributo

Tipo de dados

Tamanho

Nulo

Chave

Descrição

Tópico_ID

UUID

-

Não

PK

Identificador do tópico

Nome

VARCHAR

200

Não

-

Nome do tópico

Descrição

TEXT

-

Sim

-

Descrição ou conteúdo abordado

disciplina_id

UUID

-

Não

FK

Tabela Notificação

Atributo

Tipo de dados

Tamanho

Nulo

Chave

Descrição

Notificação_ID

UUID

-

Não

PK

Identificador da notificação

Mensagem

TEXT

-

Não

-

Mensagem da notificação

Tipo_evento

VARCHAR

100

Não

-

Tipo de evento que gerou a notificação

user_id

UUID

-

Não

FK

item_id

UUID

- 

Não

FK

Tabela Item_cronograma

Atributo

Tipo de dados

Tamanho

 Nulo

 Chave

Descrição

Item_ID

UUID

-

Não

PK

Identificador do item

Nome

VARCHAR

250

Não

-

Nome do item

Tipo

VARCHAR

80

Não

-

Tipo de item (tarefa, estudo, revisão,compromisso...)

Prioridade

SMALLINT 

-

Sim

-

Nível de prioridade

Data_inicio

TIMESTAMPTZ

-

Não

-

Início da atividade

Data_fim

TIMESTAMPTZ

-

Não

-

Fim da atividade

Descrição

TEXT

-

Sim

-

Descrição detalhada

user_id

UUID

-

Não

FK

disciplina_id

UUID

-

Não

FK

Tabela Sessão_tempo

Atributo

Tipo de dados

Tamanho

Nulo

Chave

Descrição

Sessão_ID

UUID

-

Não

Pk

Identificador da sessão

Data_inicio

TIMESTAMPTZ

-

Não

-

Horário de início

Data_fim

TIMESTAMPTZ

-

Sim

-

Horário de término

duracao_efetiva

INTERVAL

- 

Sim

-

Tempo efetivo, desconsiderando pausas

numero_pausas

INT

-

Não

-

Número de pausas

status

ENUM

-

Não

-

Status da seção (pausada, ativa, cancelada)

Exp

INT

-

Não

-

Experiência adquirida

user_id

UUID

-

Não

FK

item_id

UUID

-

Não

FK

Tabela Meta

Atributo

Tipo de dados

Tamanho

Nulo

Chave

Descrição

Meta_ID

UUID

-

Não

PK

Identificador da meta

Descrição

TEXT

-

Não

-

Descrição da meta definida

Data_criacao

TIMESTAMPTZ

-

Sim

-

Data de criação

Data_prazo

TIMESTAMPTZ

-

Sim

-

Prazo final da meta

Status

ENUM

-

Sim

-

Estado atual (ativa, concluída, atrasada)

user_id

UUID

-

Não

FK

Tabela conquista_definição

Atributo

Tipo de dados

Tamanho

Nulo

Chave

Descrição

Conquista_ID

UUID

-

Não

PK

Identificador da conquista

Nome

VARCHAR

200

Não

-

Nome da conquista

Descrição

TEXT

-

Sim

-

Descrição da conquista

Critério

JSONB

-

Não

-

Critério para obtenção

Pontos_recompensa

INT

-

Não

-

Pontos ganhos ao completar

Icone

TEXT

-

Sim

-

Caminho do ícone representativo

Tabela user_conquista

Atributo

Tipo de dados

Tamanho

Nulo

Chave

Descrição

user_id

UUID

-

Não

FK

Identificador da conquista

conquista_id

UUID

-

Não

FK

Nome da conquista

data_conquista

TIMESTAMPTZ

-

Não

-

Descrição da conquista

3. DDL - PostgreSQL

CREATE EXTENSION IF NOT EXISTS "pgcrypto";

CREATE TYPE meta_status AS ENUM ('pendente', 'em_andamento', 'feito', 'atrasado');

CREATE TYPE avaliacao_tipo AS ENUM ('prova','trabalho','outro');

CREATE TYPE status_sessao AS ENUM ('ativa', 'concluida', 'cancelada', 'pausada');

CREATE TYPE email_localizacao AS ENUM ('assunto', 'corpo', 'remetente', 'destinatario');

CREATE TABLE usuario (

  user_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

  nome VARCHAR(150) NOT NULL,

  nome_usuario VARCHAR(100) NOT NULL UNIQUE,

  email VARCHAR(255) NOT NULL UNIQUE,

  senha_hash TEXT NOT NULL,

  foto TEXT,

  data_cadastro TIMESTAMPTZ DEFAULT now(),

  recebe_notificacao_pref BOOLEAN DEFAULT TRUE,

  horas_diarias INT DEFAULT 0, 

  nivel_atual INTEGER DEFAULT 1,

  data_atualizacao TIMESTAMPTZ,

  deleted BOOLEAN DEFAULT FALSE

);

CREATE TABLE disciplina (

  disciplina_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

  nome VARCHAR(200) NOT NULL,

  professor VARCHAR(200),

  data_inicio DATE,

  data_fim DATE,

  anotacoes JSONB,

  user_id UUID NOT NULL,

  created_at TIMESTAMPTZ DEFAULT now(), --data de criação

  updated_at TIMESTAMPTZ, -- data de atualização

  FOREIGN KEY (user_id) REFERENCES usuario(user_id) ON DELETE CASCADE

);

CREATE TABLE avaliacao (

  avaliacao_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

  nome VARCHAR(200) NOT NULL,

  tipo avaliacao_tipo DEFAULT 'prova',

  data_entrega DATE,

  anotacoes JSONB,

  disciplina_id UUID NOT NULL,

  created_at TIMESTAMPTZ DEFAULT now(),

  updated_at TIMESTAMPTZ,

  FOREIGN KEY (disciplina_id) REFERENCES disciplina(disciplina_id) ON DELETE CASCADE

);

CREATE TABLE topico (

  topico_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

  nome VARCHAR(200) NOT NULL,

  descricao TEXT,

  disciplina_id UUID NOT NULL,

  created_at TIMESTAMPTZ DEFAULT now(),

  updated_at TIMESTAMPTZ,

  FOREIGN KEY (disciplina_id) REFERENCES disciplina(disciplina_id) ON DELETE CASCADE

);

-- Possivel update do sistema de metas

CREATE TABLE meta (

  meta_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

  descricao TEXT NOT NULL,

  data_criacao DATE DEFAULT current_date,

  data_prazo DATE,

  status meta_status DEFAULT 'pendente',

  user_id UUID NOT NULL,

  created_at TIMESTAMPTZ DEFAULT now(),

  updated_at TIMESTAMPTZ,

  FOREIGN KEY (user_id) REFERENCES usuario(user_id) ON DELETE CASCADE

);

CREATE TABLE item_cronograma (

  item_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

  nome VARCHAR(250) NOT NULL,

  tipo VARCHAR(80),

  prioridade SMALLINT DEFAULT 0,

  data_inicio TIMESTAMPTZ,

  data_fim TIMESTAMPTZ,

  descricao TEXT,

  user_id UUID NOT NULL,

  disciplina_id UUID,

  topico_id UUID,

  created_at TIMESTAMPTZ DEFAULT now(),

  FOREIGN KEY (user_id) REFERENCES usuario(user_id) ON DELETE CASCADE,

  FOREIGN KEY (disciplina_id) REFERENCES disciplina(disciplina_id) ON DELETE SET NULL,

  FOREIGN KEY (topico_id) REFERENCES topico(topico_id) ON DELETE SET NULL

);

CREATE TABLE sessao_tempo (

  sessao_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

  data_inicio TIMESTAMPTZ NOT NULL,

  data_fim TIMESTAMPTZ,

  duracao_efetiva INT,

  numero_pausas INTEGER DEFAULT 0,

  status status_sessao DEFAULT 'ativa',

  exp INTEGER DEFAULT 0,

  user_id UUID NOT NULL,

  item_id UUID,

  created_at TIMESTAMPTZ DEFAULT now(),

  FOREIGN KEY (user_id) REFERENCES usuario(user_id) ON DELETE CASCADE,

  FOREIGN KEY (item_id) REFERENCES item_cronograma(item_id) ON DELETE SET NULL

);

CREATE TABLE notificacao (

  notificacao_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

  mensagem TEXT NOT NULL,

  tipo_evento VARCHAR(100),

  user_id UUID NOT NULL,

  item_id UUID,

  created_at TIMESTAMPTZ DEFAULT now(),

  delivered_at TIMESTAMPTZ,

  FOREIGN KEY (user_id) REFERENCES usuario(user_id) ON DELETE CASCADE,

  FOREIGN KEY (item_id) REFERENCES item_cronograma(item_id) ON DELETE SET NULL

);

CREATE TABLE conquista_definicao (

  conquista_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

  nome VARCHAR(200) NOT NULL,

  descricao TEXT,

  criterio JSONB,

  pontos_recompensa INTEGER NOT NULL DEFAULT 0,

  icone TEXT

);

CREATE TABLE user_conquista (

  user_id UUID NOT NULL,

  conquista_id UUID NOT NULL,

  data_conquista TIMESTAMPTZ DEFAULT now(),

  PRIMARY KEY (user_id, conquista_id),

  FOREIGN KEY (user_id) REFERENCES usuario(user_id) ON DELETE CASCADE,

  FOREIGN KEY (conquista_id) REFERENCES conquista_definicao(conquista_id) ON DELETE CASCADE

);

CREATE TABLE palavra_chave (

  palavra_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

  palavra VARCHAR(200) NOT NULL,

  localizacao email_localizacao NOT NULL,

  user_id UUID NOT NULL,

  created_at TIMESTAMPTZ DEFAULT now(),

  FOREIGN KEY (user_id) REFERENCES usuario(user_id) ON DELETE CASCADE

  UNIQUE (user_id, palavra, localizacao)

);

CREATE TABLE sinc_gmail (

  fonte_externa_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

  token_acesso TEXT,

  data_ultima_sinc TIMESTAMPTZ,

  email_sinc VARCHAR(255),

  is_sincronizacao_auto BOOLEAN DEFAULT FALSE,

  user_id UUID NOT NULL,

  FOREIGN KEY (user_id) REFERENCES usuario(user_id) ON DELETE CASCADE

);

-- Índices para otimizar consultas frequentes

CREATE INDEX idx_item_user ON item_cronograma (user_id);

CREATE INDEX idx_sessao_user ON sessao_tempo (user_id);

CREATE INDEX idx_disciplina_user ON disciplina (user_id);

CREATE INDEX idx_avaliacao_disciplina ON avaliacao (disciplina_id);

CREATE INDEX idx_topico_disciplina ON topico (disciplina_id);

-- Índice GIN para pesquisar em JSONB (anotações)

CREATE INDEX idx_disciplina_anotacoes_gin ON disciplina USING gin (anotacoes);

4. Conclusão

A construção deste banco de dados possibilitou a aplicação prática dos conceitos fundamentais de modelagem e implementação de sistemas de informação. O projeto permitiu compreender como o planejamento correto das entidades, atributos e relacionamentos impacta diretamente na consistência e desempenho da aplicação.

Com o uso do PostgreSQL, foi possível explorar recursos avançados, como o uso de UUIDs, tipos ENUM, campos JSONB e índices GIN, que ampliam a flexibilidade e a eficiência do sistema. Dessa forma, o banco de dados desenvolvido apresenta uma estrutura robusta, escalável e adequada às demandas de um ambiente acadêmico de controle de estudos e produtividade.