# MarcusCore - Painel de Controle para VPS

![MarcusCore Logo](https://marcuscore.com/logo.png)

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![Version](https://img.shields.io/badge/version-1.0.0-green.svg)](https://github.com/saftwebsites-a11y/marcuscore-repositorio)

MarcusCore é um painel de controle completo para gerenciamento de servidores VPS, oferecendo funcionalidades similares ao WHM/cPanel. Este sistema permite gerenciar contas de hospedagem, domínios, bancos de dados, emails, servidores web, backups, segurança e muito mais através de uma interface web moderna e intuitiva.

## 🚀 Recursos

- **Gerenciamento de Contas de Hospedagem**: Crie e gerencie contas de hospedagem com diferentes pacotes e limites de recursos
- **Gerenciamento de Domínios e DNS**: Configure domínios, registros DNS e certificados SSL
- **Gerenciamento de Bancos de Dados**: Administre bancos de dados MySQL/MariaDB e usuários
- **Gerenciamento de Email**: Crie contas de email, configure encaminhamentos e proteja seu servidor de email
- **Servidores Web**: Configure e otimize Apache/Nginx com suporte a múltiplas versões de PHP
- **Backups e Restauração**: Agende backups automáticos e restaure quando necessário
- **Segurança e Firewall**: Proteja seu servidor contra ameaças com firewall integrado e monitoramento de segurança
- **Monitoramento de Recursos**: Acompanhe o uso de CPU, memória, disco e rede em tempo real
- **Interface Responsiva**: Acesse o painel de qualquer dispositivo com uma interface moderna e intuitiva

## 📋 Requisitos

- CPU: 2 cores ou mais
- RAM: 2GB ou mais
- Armazenamento: 20GB ou mais (SSD recomendado)
- Sistema Operacional: Ubuntu 20.04+, Debian 10+, CentOS 8+
- Conexão de rede estável

## 🔧 Instalação

### Instalação Automática

A maneira mais fácil de instalar o MarcusCore é usando nosso script de instalação automática:

\`\`\`bash
curl -sL https://raw.githubusercontent.com/marcuscore/install/main/install.sh | bash
\`\`\`

Ou, se preferir usar o script Node.js:

\`\`\`bash
curl -sL https://raw.githubusercontent.com/marcuscore/install/main/install.js -o install.js && chmod +x install.js && node install.js
\`\`\`

### Instalação Manual

Para instruções detalhadas de instalação manual, consulte nosso [Manual de Instalação](MANUAL.md).

## 📖 Documentação

A documentação completa está disponível em [https://marcuscore.com/docs](https://marcuscore.com/docs) ou no arquivo [MANUAL.md](MANUAL.md) incluído neste repositório.

## 🖼️ Screenshots

![Dashboard](https://marcuscore.com/screenshots/dashboard.png)
![Contas de Hospedagem](https://marcuscore.com/screenshots/accounts.png)
![Gerenciamento de Domínios](https://marcuscore.com/screenshots/domains.png)
![Gerenciamento de Email](https://marcuscore.com/screenshots/email.png)

## 🤝 Contribuindo

Contribuições são bem-vindas! Sinta-se à vontade para abrir um Pull Request ou reportar bugs através das Issues.

1. Faça um Fork do projeto
2. Crie sua Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a Branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📝 Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo [LICENSE](LICENSE) para detalhes.

## 📞 Suporte

Para obter suporte, visite [https://marcuscore.com/suporte](https://marcuscore.com/suporte) ou entre em contato pelo email suporte@marcuscore.com.

## 🙏 Agradecimentos

- [Next.js](https://nextjs.org/) - Framework React
- [Tailwind CSS](https://tailwindcss.com/) - Framework CSS
- [shadcn/ui](https://ui.shadcn.com/) - Componentes de UI
- [Node.js](https://nodejs.org/) - Runtime JavaScript
- [Express](https://expressjs.com/) - Framework web para Node.js
- [MySQL](https://www.mysql.com/) / [MariaDB](https://mariadb.org/) - Banco de dados
- [Nginx](https://nginx.org/) / [Apache](https://httpd.apache.org/) - Servidor web
- [Postfix](http://www.postfix.org/) / [Dovecot](https://www.dovecot.org/) - Servidor de email
