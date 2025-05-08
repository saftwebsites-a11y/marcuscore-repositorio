# MarcusCore - Manual Completo de Instalação e Uso

## Índice

1. [Introdução](#1-introdução)
2. [Requisitos do Sistema](#2-requisitos-do-sistema)
3. [Instalação](#3-instalação)
   - [Instalação Automática](#31-instalação-automática)
   - [Instalação Manual](#32-instalação-manual)
   - [Pós-instalação](#33-pós-instalação)
4. [Primeiros Passos](#4-primeiros-passos)
   - [Acessando o Painel](#41-acessando-o-painel)
   - [Configuração Inicial](#42-configuração-inicial)
5. [Gerenciamento de Contas de Hospedagem](#5-gerenciamento-de-contas-de-hospedagem)
   - [Criando Pacotes](#51-criando-pacotes)
   - [Adicionando Contas](#52-adicionando-contas)
   - [Gerenciando Contas](#53-gerenciando-contas)
6. [Gerenciamento de Domínios e DNS](#6-gerenciamento-de-domínios-e-dns)
   - [Adicionando Domínios](#61-adicionando-domínios)
   - [Configurando Registros DNS](#62-configurando-registros-dns)
   - [Gerenciando Certificados SSL](#63-gerenciando-certificados-ssl)
7. [Gerenciamento de Bancos de Dados](#7-gerenciamento-de-bancos-de-dados)
   - [Criando Bancos de Dados](#71-criando-bancos-de-dados)
   - [Gerenciando Usuários](#72-gerenciando-usuários)
   - [Backups de Banco de Dados](#73-backups-de-banco-de-dados)
8. [Gerenciamento de Email](#8-gerenciamento-de-email)
   - [Criando Contas de Email](#81-criando-contas-de-email)
   - [Configurando Encaminhamentos](#82-configurando-encaminhamentos)
   - [Segurança de Email](#83-segurança-de-email)
9. [Servidores Web](#9-servidores-web)
   - [Configurando Nginx/Apache](#91-configurando-nginxapache)
   - [Gerenciando Versões de PHP](#92-gerenciando-versões-de-php)
10. [Backups e Restauração](#10-backups-e-restauração)
    - [Configurando Backups Automáticos](#101-configurando-backups-automáticos)
    - [Restaurando Backups](#102-restaurando-backups)
11. [Segurança e Firewall](#11-segurança-e-firewall)
    - [Configurando Firewall](#111-configurando-firewall)
    - [Monitoramento de Segurança](#112-monitoramento-de-segurança)
12. [Monitoramento de Recursos](#12-monitoramento-de-recursos)
    - [Dashboard de Recursos](#121-dashboard-de-recursos)
    - [Alertas](#122-alertas)
13. [Tarefas Agendadas](#13-tarefas-agendadas)
    - [Configurando Cron Jobs](#131-configurando-cron-jobs)
14. [Configurações do Sistema](#14-configurações-do-sistema)
    - [Configurações Gerais](#141-configurações-gerais)
    - [Atualizações](#142-atualizações)
15. [Solução de Problemas](#15-solução-de-problemas)
    - [Problemas Comuns](#151-problemas-comuns)
    - [Logs do Sistema](#152-logs-do-sistema)
16. [FAQ](#16-faq)
17. [Suporte](#17-suporte)

## 1. Introdução

MarcusCore é um painel de controle completo para gerenciamento de servidores VPS, oferecendo funcionalidades similares ao WHM/cPanel. Este sistema permite gerenciar contas de hospedagem, domínios, bancos de dados, emails, servidores web, backups, segurança e muito mais através de uma interface web moderna e intuitiva.

### Principais Recursos

- Gerenciamento completo de contas de hospedagem
- Gerenciamento de domínios e DNS
- Gerenciamento de bancos de dados MySQL/MariaDB
- Gerenciamento de contas de email e encaminhamentos
- Configuração e otimização de servidores web (Apache/Nginx)
- Sistema de backups e restauração
- Segurança e firewall integrados
- Monitoramento de recursos em tempo real
- Interface responsiva e moderna

## 2. Requisitos do Sistema

Para instalar o MarcusCore, seu servidor deve atender aos seguintes requisitos mínimos:

### Hardware Recomendado
- CPU: 2 cores ou mais
- RAM: 2GB ou mais
- Armazenamento: 20GB ou mais (SSD recomendado)
- Conexão de rede estável

### Sistemas Operacionais Suportados
- Ubuntu 20.04 LTS ou superior
- Debian 10 ou superior
- CentOS 8 ou superior

### Software Necessário
- Nginx ou Apache
- MySQL 5.7+ ou MariaDB 10.3+
- PHP 7.4+ (8.0+ recomendado)
- Node.js 14+ e NPM
- Postfix e Dovecot (para funcionalidades de email)
- Fail2ban e UFW/Firewalld (para segurança)

## 3. Instalação

### 3.1 Instalação Automática

A maneira mais fácil de instalar o MarcusCore é usando nosso script de instalação automática:

1. Acesse seu servidor via SSH como usuário root:
   \`\`\`bash
   ssh root@seu_ip_do_servidor
   \`\`\`

2. Execute o script de instalação:
   \`\`\`bash
   curl -sL https://raw.githubusercontent.com/marcuscore/install/main/install.sh | bash
   \`\`\`

   Ou, se preferir usar o script Node.js:
   \`\`\`bash
   curl -sL https://raw.githubusercontent.com/marcuscore/install/main/install.js -o install.js && chmod +x install.js && node install.js
   \`\`\`

3. Siga as instruções na tela para concluir a instalação.

4. Ao final da instalação, você receberá as credenciais de acesso ao painel.

### 3.2 Instalação Manual

Se preferir instalar manualmente, siga estas etapas:

1. Atualize seu sistema:
   \`\`\`bash
   # Ubuntu/Debian
   apt update && apt upgrade -y
   
   # CentOS
   dnf update -y
   \`\`\`

2. Instale as dependências necessárias:
   \`\`\`bash
   # Ubuntu/Debian
   apt install -y curl wget git nginx mariadb-server nodejs npm certbot python3-certbot-nginx fail2ban ufw php8.1-fpm php8.1-cli php8.1-mysql php8.1-gd php8.1-curl php8.1-mbstring php8.1-xml php8.1-zip php8.1-intl postfix dovecot-core dovecot-imapd dovecot-pop3d
   
   # CentOS
   dnf install -y epel-release
   dnf install -y curl wget git nginx mariadb-server nodejs npm certbot python3-certbot-nginx fail2ban firewalld php php-fpm php-cli php-mysqlnd php-gd php-curl php-mbstring php-xml php-zip php-intl postfix dovecot
   \`\`\`

3. Configure o MySQL/MariaDB:
   \`\`\`bash
   systemctl enable mariadb
   systemctl start mariadb
   mysql_secure_installation
   \`\`\`

4. Crie o banco de dados e o usuário para o MarcusCore:
   \`\`\`bash
   mysql -u root -p
   \`\`\`
   
   No prompt do MySQL, execute:
   \`\`\`sql
   CREATE DATABASE marcuscore;
   CREATE USER 'marcuscore'@'localhost' IDENTIFIED BY 'sua_senha';
   GRANT ALL PRIVILEGES ON marcuscore.* TO 'marcuscore'@'localhost';
   FLUSH PRIVILEGES;
   EXIT;
   \`\`\`

5. Configure o Nginx:
   \`\`\`bash
   # Crie o arquivo de configuração
   nano /etc/nginx/sites-available/marcuscore
   \`\`\`
   
   Adicione a seguinte configuração:
   \`\`\`
   server {
       listen 80;
       server_name _;
       
       root /var/www/marcuscore/public;
       index index.html;
       
       location / {
           try_files $uri $uri/ /index.html;
       }
       
       location /api {
           proxy_pass http://localhost:3000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
       }
   }
   \`\`\`
   
   Crie o link simbólico e reinicie o Nginx:
   \`\`\`bash
   # Ubuntu/Debian
   ln -s /etc/nginx/sites-available/marcuscore /etc/nginx/sites-enabled/
   rm /etc/nginx/sites-enabled/default
   systemctl restart nginx
   
   # CentOS
   cp /etc/nginx/sites-available/marcuscore /etc/nginx/conf.d/marcuscore.conf
   systemctl restart nginx
   \`\`\`

6. Configure o firewall:
   \`\`\`bash
   # Ubuntu/Debian
   ufw allow OpenSSH
   ufw allow "Nginx Full"
   ufw --force enable
   
   # CentOS
   systemctl enable firewalld
   systemctl start firewalld
   firewall-cmd --permanent --add-service=http
   firewall-cmd --permanent --add-service=https
   firewall-cmd --permanent --add-service=ssh
   firewall-cmd --reload
   \`\`\`

7. Configure o Fail2ban:
   \`\`\`bash
   systemctl enable fail2ban
   systemctl start fail2ban
   \`\`\`

8. Clone o repositório do MarcusCore:
   \`\`\`bash
   mkdir -p /var/www/marcuscore
   git clone https://github.com/marcuscore/marcuscore.git /var/www/marcuscore
   \`\`\`

9. Configure a aplicação:
   \`\`\`bash
   cd /var/www/marcuscore
   npm install
   npm run build
   \`\`\`

10. Configure o serviço systemd:
    \`\`\`bash
    nano /etc/systemd/system/marcuscore.service
    \`\`\`
    
    Adicione o seguinte conteúdo:
    \`\`\`
    [Unit]
    Description=MarcusCore API Server
    After=network.target
    
    [Service]
    Type=simple
    User=www-data
    WorkingDirectory=/var/www/marcuscore
    ExecStart=/usr/bin/npm start
    Restart=on-failure
    
    [Install]
    WantedBy=multi-user.target
    \`\`\`
    
    Ative e inicie o serviço:
    \`\`\`bash
    systemctl daemon-reload
    systemctl enable marcuscore
    systemctl start marcuscore
    \`\`\`

11. Defina as permissões corretas:
    \`\`\`bash
    chown -R www-data:www-data /var/www/marcuscore
    \`\`\`

### 3.3 Pós-instalação

Após a instalação, você deve:

1. Acessar o painel de controle usando o IP do seu servidor: `http://seu_ip_do_servidor`
2. Fazer login com as credenciais fornecidas ao final da instalação
3. Alterar a senha de administrador padrão
4. Configurar um nome de domínio para o painel (opcional)
5. Configurar certificado SSL para o painel (opcional)

Para configurar um certificado SSL para o painel:

\`\`\`bash
certbot --nginx -d seu_dominio.com
\`\`\`

## 4. Primeiros Passos

### 4.1 Acessando o Painel

Para acessar o painel de controle do MarcusCore:

1. Abra seu navegador e acesse `http://seu_ip_do_servidor` ou `https://seu_dominio.com` se você configurou um domínio com SSL
2. Na tela de login, insira as credenciais de administrador fornecidas durante a instalação
3. Clique em "Entrar" para acessar o painel

### 4.2 Configuração Inicial

Após o primeiro login, recomendamos realizar as seguintes configurações iniciais:

1. **Alterar a senha de administrador**:
   - Clique no ícone de usuário no canto superior direito
   - Selecione "Perfil"
   - Altere sua senha para uma senha forte e segura

2. **Configurar informações do servidor**:
   - Acesse "Configurações" no menu lateral
   - Configure o nome do servidor, fuso horário e outras configurações básicas

3. **Verificar serviços**:
   - Acesse a guia "Serviços" no Dashboard para verificar se todos os serviços estão funcionando corretamente
   - Reinicie qualquer serviço que não esteja funcionando adequadamente

4. **Criar pacotes de hospedagem**:
   - Acesse "Contas de Hospedagem" > "Pacotes"
   - Crie pacotes com diferentes limites de recursos para oferecer aos seus clientes

## 5. Gerenciamento de Contas de Hospedagem

### 5.1 Criando Pacotes

Os pacotes definem os limites de recursos para as contas de hospedagem:

1. Acesse "Contas de Hospedagem" > "Pacotes"
2. Clique em "Novo Pacote"
3. Preencha as informações do pacote:
   - **Nome**: Nome do pacote (ex: Basic, Standard, Premium)
   - **Domínios**: Número máximo de domínios permitidos
   - **Espaço em Disco**: Limite de armazenamento (ex: 1GB, 5GB, 10GB)
   - **Largura de Banda**: Limite de transferência mensal (ex: 10GB, 50GB, 100GB)
   - **Bancos de Dados**: Número máximo de bancos de dados permitidos
   - **Contas de Email**: Número máximo de contas de email permitidas
   - **Preço**: Valor do pacote (opcional)
4. Clique em "Salvar" para criar o pacote

### 5.2 Adicionando Contas

Para adicionar uma nova conta de hospedagem:

1. Acesse "Contas de Hospedagem" > "Contas"
2. Clique em "Nova Conta"
3. Preencha as informações da conta:
   - **Domínio Principal**: Domínio principal da conta
   - **Nome de Usuário**: Nome de usuário para acesso à conta
   - **Senha**: Senha para acesso à conta
   - **Email**: Email de contato do proprietário da conta
   - **Pacote**: Selecione um pacote previamente criado
4. Clique em "Criar Conta" para adicionar a nova conta

### 5.3 Gerenciando Contas

Para gerenciar uma conta existente:

1. Acesse "Contas de Hospedagem" > "Contas"
2. Localize a conta desejada na lista
3. Clique no menu de ações (três pontos) à direita da conta
4. Selecione uma das opções disponíveis:
   - **Editar Conta**: Modificar informações da conta
   - **Acessar cPanel**: Acessar o painel de controle da conta
   - **Gerenciar Domínios**: Gerenciar domínios associados à conta
   - **Configurações de Email**: Gerenciar contas de email
   - **Gerenciador de Banco de Dados**: Gerenciar bancos de dados
   - **Gerenciador de Arquivos**: Acessar o gerenciador de arquivos
   - **Backup/Restauração**: Gerenciar backups da conta
   - **Suspender Conta**: Suspender temporariamente a conta
   - **Excluir Conta**: Remover permanentemente a conta

## 6. Gerenciamento de Domínios e DNS

### 6.1 Adicionando Domínios

Para adicionar um novo domínio:

1. Acesse "Domínios & DNS" > "Domínios"
2. Clique em "Adicionar Domínio"
3. Preencha as informações do domínio:
   - **Nome do Domínio**: Nome completo do domínio (ex: exemplo.com)
   - **Conta**: Selecione a conta de hospedagem associada
   - **Tipo de DNS**: Selecione "Padrão" para usar as configurações DNS padrão ou "Personalizado" para configurações personalizadas
4. Clique em "Adicionar" para criar o domínio

### 6.2 Configurando Registros DNS

Para configurar registros DNS de um domínio:

1. Acesse "Domínios & DNS" > "Registros DNS"
2. Selecione o domínio que deseja configurar
3. Clique em "Novo Registro" para adicionar um registro DNS
4. Selecione o tipo de registro (A, CNAME, MX, TXT, etc.)
5. Preencha as informações do registro:
   - **Nome**: Nome do registro (ex: www, mail, @)
   - **Conteúdo**: Valor do registro (ex: endereço IP, nome do host)
   - **TTL**: Time To Live em segundos (ex: 3600)
   - **Prioridade**: Para registros MX
6. Clique em "Adicionar Registro" para salvar

### 6.3 Gerenciando Certificados SSL

Para gerenciar certificados SSL:

1. Acesse "Domínios & DNS" > "Certificados SSL"
2. Para adicionar um novo certificado, clique em "Novo Certificado"
3. Selecione o domínio para o qual deseja emitir o certificado
4. Escolha o provedor de certificado (Let's Encrypt é recomendado para certificados gratuitos)
5. Clique em "Emitir Certificado" para gerar e instalar o certificado

Para renovar um certificado existente:
1. Localize o certificado na lista
2. Clique no menu de ações (três pontos)
3. Selecione "Renovar Certificado"

## 7. Gerenciamento de Bancos de Dados

### 7.1 Criando Bancos de Dados

Para criar um novo banco de dados:

1. Acesse "Bancos de Dados" > "Bancos de Dados"
2. Clique em "Criar Banco de Dados"
3. Preencha as informações do banco de dados:
   - **Nome**: Nome do banco de dados (prefixado com o nome da conta)
   - **Conta**: Selecione a conta de hospedagem associada
   - **Tipo**: Selecione MySQL ou MariaDB
4. Clique em "Criar" para criar o banco de dados

### 7.2 Gerenciando Usuários

Para gerenciar usuários de banco de dados:

1. Acesse "Bancos de Dados" > "Usuários"
2. Para adicionar um novo usuário, clique em "Novo Usuário"
3. Preencha as informações do usuário:
   - **Nome de Usuário**: Nome do usuário (prefixado com o nome da conta)
   - **Senha**: Senha para acesso ao banco de dados
   - **Conta**: Selecione a conta de hospedagem associada
4. Selecione os bancos de dados aos quais o usuário terá acesso
5. Defina os privilégios para cada banco de dados
6. Clique em "Criar" para adicionar o usuário

### 7.3 Backups de Banco de Dados

Para fazer backup de um banco de dados:

1. Acesse "Bancos de Dados" > "Bancos de Dados"
2. Localize o banco de dados na lista
3. Clique no menu de ações (três pontos)
4. Selecione "Backup do Banco de Dados"
5. Escolha o formato de backup (SQL, SQL compactado)
6. Clique em "Fazer Backup" para iniciar o processo

Para restaurar um backup:
1. Acesse "Bancos de Dados" > "Bancos de Dados"
2. Clique em "Importar" no topo da página
3. Selecione o arquivo de backup
4. Escolha o banco de dados de destino
5. Clique em "Importar" para restaurar o backup

## 8. Gerenciamento de Email

### 8.1 Criando Contas de Email

Para criar uma nova conta de email:

1. Acesse "Email" > "Contas"
2. Clique em "Nova Conta de Email"
3. Preencha as informações da conta:
   - **Endereço de Email**: Nome da conta + domínio (ex: info@exemplo.com)
   - **Senha**: Senha para acesso à conta de email
   - **Cota**: Limite de armazenamento para a conta
   - **Domínio**: Selecione o domínio para a conta de email
4. Clique em "Criar" para adicionar a conta de email

### 8.2 Configurando Encaminhamentos

Para configurar encaminhamentos de email:

1. Acesse "Email" > "Encaminhamentos"
2. Clique em "Novo Encaminhamento"
3. Preencha as informações do encaminhamento:
   - **Origem**: Endereço de email de origem (ex: contato@exemplo.com)
   - **Destino**: Endereço(s) de email de destino (ex: admin@exemplo.com)
   - **Domínio**: Selecione o domínio para o encaminhamento
4. Clique em "Adicionar" para criar o encaminhamento

### 8.3 Segurança de Email

Para configurar a segurança de email:

1. Acesse "Email" > "Segurança"
2. Configure as opções de segurança:
   - **SPF (Sender Policy Framework)**: Protege seu domínio contra falsificação de email
   - **DKIM (DomainKeys Identified Mail)**: Adiciona uma assinatura digital aos seus emails
   - **DMARC (Domain-based Message Authentication, Reporting & Conformance)**: Define políticas para emails que falham na autenticação
3. Clique em "Salvar" para aplicar as configurações

## 9. Servidores Web

### 9.1 Configurando Nginx/Apache

Para configurar o servidor web:

1. Acesse "Servidores Web" > "Configurações"
2. Selecione o servidor web (Nginx ou Apache)
3. Configure as opções disponíveis:
   - **Limite de Conexões**: Número máximo de conexões simultâneas
   - **Timeout**: Tempo limite para conexões
   - **Tamanho Máximo de Upload**: Limite para uploads de arquivos
   - **Compressão**: Ativar/desativar compressão de conteúdo
4. Clique em "Salvar" para aplicar as configurações

Para configurar um site específico:
1. Acesse "Servidores Web" > "Sites"
2. Selecione o site que deseja configurar
3. Modifique as configurações específicas do site
4. Clique em "Salvar" para aplicar as alterações

### 9.2 Gerenciando Versões de PHP

Para gerenciar versões de PHP:

1. Acesse "Servidores Web" > "PHP"
2. Para instalar uma nova versão de PHP, clique em "Instalar Versão"
3. Selecione a versão de PHP que deseja instalar
4. Clique em "Instalar" para iniciar a instalação

Para configurar uma versão de PHP:
1. Selecione a versão de PHP na lista
2. Clique em "Configurar"
3. Modifique as configurações do PHP (memory_limit, upload_max_filesize, etc.)
4. Clique em "Salvar" para aplicar as alterações

Para atribuir uma versão de PHP a um site:
1. Acesse "Servidores Web" > "Sites"
2. Selecione o site na lista
3. Clique em "Configurações de PHP"
4. Selecione a versão de PHP desejada
5. Clique em "Salvar" para aplicar a alteração

## 10. Backups e Restauração

### 10.1 Configurando Backups Automáticos

Para configurar backups automáticos:

1. Acesse "Backups" > "Configurações"
2. Configure as opções de backup:
   - **Frequência**: Diária, semanal ou mensal
   - **Hora de Execução**: Horário para execução dos backups
   - **Retenção**: Número de backups a serem mantidos
   - **Tipo de Backup**: Completo ou incremental
   - **Destino**: Local de armazenamento dos backups (local, FTP, Amazon S3, etc.)
3. Selecione os itens a serem incluídos no backup (contas, bancos de dados, emails, etc.)
4. Clique em "Salvar" para aplicar as configurações

### 10.2 Restaurando Backups

Para restaurar um backup:

1. Acesse "Backups" > "Backups Disponíveis"
2. Localize o backup que deseja restaurar
3. Clique em "Restaurar"
4. Selecione os itens que deseja restaurar (contas específicas, bancos de dados, emails, etc.)
5. Clique em "Iniciar Restauração" para iniciar o processo

Para fazer um backup manual:
1. Acesse "Backups" > "Backup Manual"
2. Selecione os itens que deseja incluir no backup
3. Clique em "Iniciar Backup" para iniciar o processo

## 11. Segurança e Firewall

### 11.1 Configurando Firewall

Para configurar o firewall:

1. Acesse "Segurança" > "Firewall"
2. Configure as regras do firewall:
   - **Portas Permitidas**: Portas que devem estar abertas (ex: 80, 443, 22)
   - **Bloqueio de IP**: IPs ou intervalos de IPs a serem bloqueados
   - **Proteção contra DDoS**: Configurações para mitigar ataques DDoS
3. Clique em "Salvar" para aplicar as configurações

Para adicionar uma regra personalizada:
1. Clique em "Nova Regra"
2. Selecione o tipo de regra (permitir, bloquear)
3. Defina os parâmetros da regra (IP, porta, protocolo)
4. Clique em "Adicionar" para criar a regra

### 11.2 Monitoramento de Segurança

Para monitorar a segurança do servidor:

1. Acesse "Segurança" > "Monitoramento"
2. Visualize as informações de segurança:
   - **Tentativas de Login**: Tentativas de login malsucedidas
   - **IPs Bloqueados**: IPs bloqueados pelo firewall
   - **Vulnerabilidades**: Vulnerabilidades detectadas no sistema
   - **Atualizações de Segurança**: Atualizações de segurança disponíveis
3. Clique em "Verificação de Segurança" para realizar uma verificação completa do sistema

## 12. Monitoramento de Recursos

### 12.1 Dashboard de Recursos

O Dashboard de Recursos fornece uma visão geral do uso de recursos do servidor:

1. Acesse "Dashboard" na página inicial
2. Visualize as informações de recursos:
   - **CPU**: Uso atual e histórico da CPU
   - **Memória**: Uso atual e histórico da memória
   - **Disco**: Uso atual e histórico do disco
   - **Rede**: Uso atual e histórico da rede
3. Clique em "Desempenho" para visualizar métricas detalhadas de desempenho

### 12.2 Alertas

Para configurar alertas de recursos:

1. Acesse "Monitoramento" > "Alertas"
2. Clique em "Novo Alerta"
3. Configure as opções do alerta:
   - **Tipo**: CPU, memória, disco, rede, etc.
   - **Limite**: Valor limite para disparo do alerta
   - **Duração**: Tempo que o limite deve ser excedido para disparar o alerta
   - **Notificação**: Email, SMS, webhook, etc.
4. Clique em "Salvar" para criar o alerta

## 13. Tarefas Agendadas

### 13.1 Configurando Cron Jobs

Para configurar tarefas agendadas (cron jobs):

1. Acesse "Tarefas Agendadas"
2. Clique em "Nova Tarefa"
3. Configure as opções da tarefa:
   - **Comando**: Comando a ser executado
   - **Usuário**: Usuário que executará o comando
   - **Agendamento**: Frequência de execução (minuto, hora, dia, mês, dia da semana)
   - **Email de Notificação**: Email para receber notificações sobre a execução da tarefa
4. Clique em "Adicionar" para criar a tarefa agendada

Para gerenciar tarefas existentes:
1. Localize a tarefa na lista
2. Clique no menu de ações (três pontos)
3. Selecione uma das opções disponíveis (editar, excluir, executar agora)

## 14. Configurações do Sistema

### 14.1 Configurações Gerais

Para acessar as configurações gerais do sistema:

1. Acesse "Configurações" > "Geral"
2. Configure as opções disponíveis:
   - **Nome do Servidor**: Nome para identificação do servidor
   - **Fuso Horário**: Fuso horário do servidor
   - **Idioma**: Idioma padrão da interface
   - **Notificações**: Configurações de notificações do sistema
   - **Limites de Recursos**: Limites globais de recursos do sistema
3. Clique em "Salvar" para aplicar as configurações

### 14.2 Atualizações

Para gerenciar atualizações do sistema:

1. Acesse "Configurações" > "Atualizações"
2. Visualize as atualizações disponíveis para o sistema
3. Selecione as atualizações que deseja instalar
4. Clique em "Atualizar" para iniciar o processo de atualização

Para configurar atualizações automáticas:
1. Acesse "Configurações" > "Atualizações"
2. Ative a opção "Atualizações Automáticas"
3. Configure as opções de atualização automática:
   - **Frequência**: Diária, semanal ou mensal
   - **Hora de Execução**: Horário para execução das atualizações
   - **Tipo de Atualizações**: Todas as atualizações ou apenas atualizações de segurança
4. Clique em "Salvar" para aplicar as configurações

## 15. Solução de Problemas

### 15.1 Problemas Comuns

#### Problema: Não consigo acessar o painel de controle

**Solução**:
1. Verifique se o servidor está online e acessível
2. Verifique se o serviço Nginx/Apache está em execução: `systemctl status nginx`
3. Verifique se o serviço MarcusCore está em execução: `systemctl status marcuscore`
4. Verifique os logs do Nginx/Apache: `tail -f /var/log/nginx/error.log`
5. Verifique os logs do MarcusCore: `journalctl -u marcuscore`

#### Problema: Não consigo criar uma conta de hospedagem

**Solução**:
1. Verifique se há espaço em disco suficiente no servidor
2. Verifique se o nome de usuário não está em uso
3. Verifique se o domínio não está em uso
4. Verifique os logs do sistema para identificar o erro específico

#### Problema: Certificado SSL não está funcionando

**Solução**:
1. Verifique se o domínio está apontando corretamente para o servidor
2. Verifique se a porta 80 está aberta para validação do Let's Encrypt
3. Verifique os logs do Certbot: `tail -f /var/log/letsencrypt/letsencrypt.log`
4. Tente renovar o certificado manualmente: `certbot renew --force-renewal`

#### Problema: Serviço de email não está funcionando

**Solução**:
1. Verifique se os serviços Postfix e Dovecot estão em execução:
   \`\`\`bash
   systemctl status postfix
   systemctl status dovecot
   \`\`\`
2. Verifique os logs do Postfix: `tail -f /var/log/mail.log`
3. Verifique se as portas 25, 465, 587, 993 e 995 estão abertas
4. Verifique se os registros DNS MX estão configurados corretamente

### 15.2 Logs do Sistema

Para acessar os logs do sistema:

1. Acesse "Configurações" > "Logs"
2. Selecione o tipo de log que deseja visualizar:
   - **Logs do Sistema**: Logs gerais do sistema
   - **Logs do Servidor Web**: Logs do Nginx/Apache
   - **Logs de Email**: Logs do Postfix/Dovecot
   - **Logs de Banco de Dados**: Logs do MySQL/MariaDB
   - **Logs de Segurança**: Logs do Fail2ban e outros serviços de segurança
   - **Logs de Aplicação**: Logs do MarcusCore
3. Utilize os filtros disponíveis para encontrar informações específicas

## 16. FAQ

### Qual é a diferença entre o MarcusCore e o cPanel?

O MarcusCore é uma alternativa de código aberto ao cPanel, oferecendo funcionalidades similares com uma interface moderna e intuitiva. Enquanto o cPanel é um software proprietário com licenciamento pago, o MarcusCore é gratuito e pode ser personalizado de acordo com suas necessidades.

### Posso migrar do cPanel para o MarcusCore?

Sim, o MarcusCore inclui ferramentas de migração que permitem importar contas, domínios, bancos de dados e emails do cPanel. Para iniciar a migração, acesse "Configurações" > "Migração" e siga as instruções.

### O MarcusCore é seguro?

Sim, o MarcusCore foi desenvolvido com foco em segurança, incluindo proteção contra ataques comuns, firewall integrado, monitoramento de segurança e atualizações regulares. Recomendamos manter o sistema sempre atualizado para garantir a máxima segurança.

### Posso personalizar a interface do MarcusCore?

Sim, o MarcusCore permite personalizar a interface, incluindo cores, logotipo e layout. Para personalizar a interface, acesse "Configurações" > "Aparência".

### O MarcusCore suporta múltiplos idiomas?

Sim, o MarcusCore suporta múltiplos idiomas, incluindo Português, Inglês, Espanhol, Francês, Alemão, entre outros. Para alterar o idioma, acesse "Configurações" > "Geral" > "Idioma".

### Como posso obter suporte para o MarcusCore?

Para obter suporte, visite nosso site oficial em [https://marcuscore.com/suporte](https://marcuscore.com/suporte) ou entre em contato pelo email suporte@marcuscore.com.

## 17. Suporte

Para obter suporte para o MarcusCore, você pode:

- Visitar nosso site oficial: [https://marcuscore.com](https://marcuscore.com)
- Acessar a documentação online: [https://marcuscore.com/docs](https://marcuscore.com/docs)
- Entrar em contato pelo email: suporte@marcuscore.com
- Participar do fórum da comunidade: [https://forum.marcuscore.com](https://forum.marcuscore.com)
- Reportar bugs no GitHub: [https://github.com/marcuscore/marcuscore/issues](https://github.com/marcuscore/marcuscore/issues)

Para suporte premium com tempo de resposta garantido, considere adquirir um plano de suporte em [https://marcuscore.com/suporte-premium](https://marcuscore.com/suporte-premium).
