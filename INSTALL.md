# Guia de Instalação do MarcusCore

Este guia fornece instruções detalhadas para instalar o MarcusCore em seu servidor VPS.

## Requisitos do Sistema

Antes de iniciar a instalação, certifique-se de que seu servidor atende aos seguintes requisitos:

- CPU: 2 cores ou mais
- RAM: 2GB ou mais
- Armazenamento: 20GB ou mais (SSD recomendado)
- Sistema Operacional: Ubuntu 20.04+, Debian 10+, CentOS 8+
- Conexão de rede estável

## Instalação Automática

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

## Instalação Manual

Se preferir instalar manualmente, siga estas etapas:

### 1. Atualize seu sistema

\`\`\`bash
# Ubuntu/Debian
apt update && apt upgrade -y

# CentOS
dnf update -y
\`\`\`

### 2. Instale as dependências necessárias

\`\`\`bash
# Ubuntu/Debian
apt install -y curl wget git nginx mariadb-server nodejs npm certbot python3-certbot-nginx fail2ban ufw php8.1-fpm php8.1-cli php8.1-mysql php8.1-gd php8.1-curl php8.1-mbstring php8.1-xml php8.1-zip php8.1-intl postfix dovecot-core dovecot-imapd dovecot-pop3d

# CentOS
dnf install -y epel-release
dnf install -y curl wget git nginx mariadb-server nodejs npm certbot python3-certbot-nginx fail2ban firewalld php php-fpm php-cli php-mysqlnd php-gd php-curl php-mbstring php-xml php-zip php-intl postfix dovecot
\`\`\`

### 3. Configure o MySQL/MariaDB

\`\`\`bash
systemctl enable mariadb
systemctl start mariadb
mysql_secure_installation
\`\`\`

Crie o banco de dados e o usuário para o MarcusCore:

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

### 4. Configure o Nginx

Crie o arquivo de configuração:

\`\`\`bash
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

### 5. Configure o firewall

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

### 6. Configure o Fail2ban

\`\`\`bash
systemctl enable fail2ban
systemctl start fail2ban
\`\`\`

### 7. Clone o repositório do MarcusCore

\`\`\`bash
mkdir -p /var/www/marcuscore
git clone https://github.com/marcuscore/marcuscore.git /var/www/marcuscore
\`\`\`

### 8. Configure a aplicação

\`\`\`bash
cd /var/www/marcuscore
npm install
npm run build
\`\`\`

### 9. Configure o serviço systemd

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

### 10. Defina as permissões corretas

\`\`\`bash
chown -R www-data:www-data /var/www/marcuscore
\`\`\`

## Pós-instalação

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

## Solução de Problemas

Se encontrar problemas durante a instalação, consulte a seção de Solução de Problemas no [Manual](MANUAL.md) ou visite nosso [site de suporte](https://marcuscore.com/suporte).

## Próximos Passos

Após a instalação, recomendamos:

1. Criar pacotes de hospedagem
2. Configurar backups automáticos
3. Configurar monitoramento de recursos
4. Configurar alertas de segurança

Para mais informações, consulte a documentação completa em [https://marcuscore.com/docs](https://marcuscore.com/docs) ou no arquivo [MANUAL.md](MANUAL.md).
