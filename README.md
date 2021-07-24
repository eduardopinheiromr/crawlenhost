# **CrawlenHost**

DEMO: http://crawlenhost.herokuapp.com/

## **Propósito do projeto**

O projeto foi criado para armazenar no banco de dados, os resultados das raspagens do crawler Node Google Image Scrapper.
<br/>
<br/>

<hr/>

# **Rotas**

## **Para buscar por resultados: <br/> _`/image/:type/:query`_**

O parâmetro `query` é o que será buscado no Google Images.

O parâmetro `type` é a coleção em que ficará armazenado o resultado da query.

<hr/>

## **Para retornar todos os resultados da coleção: <br/>_`/type/:collection`_**

O parâmetro `collection` é a coleção a ser buscada no banco de dados.

<hr/>

## Requerimentos

- NodeJS 16+
- Yarn 1+

## Passos para que seja possível rodar o projeto localmente

1- Rode o comando `yarn` para instalar as dependências
2- Após a instalação rode o comando `yarn start` e o projeto estará acessível em http://localhost:5000.

## Notas sobre o uso

O projeto tem a biblioteca `nodemon` instalada, para rodar em modo desenvolvimento, digite o comando `yarn dev`.
