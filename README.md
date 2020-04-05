<p align="center">
  <a href="" rel="noopener">
 <img width=200px height=200px src="./src/assets/logo.png" alt="Project logo"></a>
</p>

<h3 align="center">Comanda FS - Senac DF</h3>

<div align="center">

[![Status](https://img.shields.io/badge/status-active-success.svg)]()
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](/LICENSE)

</div>

---

<p align="center"> Aplicação mobile desenvolvido em React Native para consumir a API REST de Comanda Eletrônica desenvolvida pela Fábrica de Software do Senac - DF.
    <br>
</p>

## 📝 Conteúdo

- [Sobre](#about)
- [Inicializando a aplicação](#getting_started)
- [Uso](#usage)
- [Ferramentas](#built_using)
- [Autor](#authors)
- [Considerações finais](#acknowledgement)

---

## 🏁 Inicializando a aplicação <a name = "getting_started"></a>

Foi utilizado o Expo para o desenvolvimento da aplicação. O Expo é uma ferramenta utilizada no desenvolvimento mobile com React Native que permite o fácil acesso às API’s nativas do dispositivo sem precisar instalar qualquer dependência ou alterar código nativo.

Com o Expo você não precisa de um emulador na sua máquina para visualzar o código, basta um celular com câmera. O expo disponibiliza um QR code que irá carregar todo o bundle do código direto no seu aparelho.

### Pré-requisitos

- Celular Android ou IOS com câmera
- Instalar uma ferramenta de git ([normal](https://git-scm.com/download/win), [git bash](https://gitforwindows.org/), [GitHub Desktop](https://desktop.github.com/))
- No seu terminal digite o comando `git clone git@github.com:RafaelLeveske/Comanda-App-Senac.git`
- Navegar até a pasta que foi feito

### Instalação

Para inicializar o arquivo `package.json` e instalar todas as dependências digite os comandos abaixo

```
npm install
```

ou se preferir

```
yarn install
```

### Inicializando o projeto

Basta rodar o comando abaixo e uma nova aba com a aplicação irá abrir no seu navegador

```
expo start
```

O comando irá abrir uma nova aba no seu navegador similar a imagem abaixo. Basta escanear o QR code coma a câmera do seu celular que a aplicação irá carregar no seu aparelho

![expoPage](https://user-images.githubusercontent.com/37941820/78511571-188c9700-7774-11ea-83bb-6a026b66eead.png)

## 🎈 Uso <a name="usage"></a>

Atualmente a aplicação mobile conta apenas com as telas, de acordo com a prototipação desenvolvida. É possivel navegar entre as páginas, mas ainda não há nenhuma interação com a API REST. Por esse motivo, ainda não é necessário o login e senha para acessar a aplicação.

## ⛏️ Ferramentas <a name = "built_using"></a>

- [React](https://pt-br.reactjs.org/) - Javascript Framework
- [Expo](https://expo.io//) - Building Tools
- [Axios](https://github.com/axios/axios) - Promise based HTTP clien
- [Styled-Components](https://styled-components.com/) - Styling
- [React Navigation](https://reactnavigation.org/) - Navigation

## ✍️ Autores <a name = "authors"></a>

- [@RafaelLeveske](https://github.com/RafaelLeveske)
- [@christiantld](https://github.com/christiantld)

## 🎉 Considerações finais <a name = "acknowledgement"></a>

- Esse projeto foi desenvolvido para Fábrica de Software do Senac - DF
