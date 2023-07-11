# hit-digital

Este projeto trata de uma landing page.

Na Home Page, um texto de introdução, como se fosse uma sessão About Us.

Esse texto de introdução deve poder ser editável pelo Admin do django-cms.

O frontend foi construído em Vue.


# ARQUITETURA DO PROJETO

Partimos do quickstart do Django-CMS, utilizando a versão recomendada na Documentação:

https://docs.django-cms.org/en/latest/introduction/01-install.html

https://github.com/django-cms/django-cms-quickstart.git


Optamos por separar o máximo possível o frontend do backend.

Por isso, diferente de outras abordagens, não instalamos a aplicação vue dentro do django-cms.

Rodamos os dois sistemas em portas diferentes, totalmente isolados um do outro.


# INSTALAÇÃO

Para uma maior facilidade, não fizemos muita diferenciação entre os ambientes dev / prod.

Banco de dados PostgreSQL é utilizado em container orquestrado.

Outros dois containers são o backend e o frontend, podendo este último ser aberto na máquina localhost de desenvolvimento, entrando no diretório "frontend", diretamente pelos seguintes comandos: 

```
npm run serve
```

Lembre-se de, antes, instalar as dependências:

```
npm i
```

Abrir no navegador com o seguinte endereço:

http://localhost:8080


Para ligar o backend, em outro terminal, é necesário entrar no diretório "backend" e entrar os seguintes comandos:

```
sudo docker compose build web
sudo docker compose up -d database_default
sudo docker compose run web python manage.py migrate
sudo docker compose run web python manage.py createsuperuser
sudo docker compose up -d
```
### Ambiente de produção

Para subir um ambiente de produção, entrar no diretório frontend e executar os seguintes comandos:

```
sudo docker build --tag node-docker .
sudo docker run node-docker

```

# UTILIZAÇÃO

Após implementar a etapa acima, você poderá não apenas acessar o frontend, mas editar a página inicial, bem como gerenciar outros conteúdos com o django-cms.

Acesso pelo navegador o seguinte endereço:

http://localhost:8000/admin


