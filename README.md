# Node API Test

Projeto criado para testar o uso do `sucrase` e permitir desenvolver usando `modules/import` que por padrão nas versões estáveis do `NodeJS` ainda não é possível, sendo necessário desenvolver usando o padrão `CommonJS`, no exemplo abaixo mostro as diferenças

```js
// module/import
import express from 'express'

// CommonJS
const express = require('express')
```

Porém graças a ferramentas como o `Sucrese`, se tornou possível desenvolver usando `module/import` mesmo que não exista um suporte nativo do `NodeJS`, mas ao trabalharmos dessa forma, ficamos limitados ou enfrantamos grandes desafios, ao tentar fazer `deploy` da nessa aplicação para qualquer servidor, visto que por questões de segurança e infinitos outros motivos que ~~meu baixo conhecimento~~ me limita dizer, todos esses servidores, rodam apenas versões `LTS` do `NodeJS`, algo que nos trava, por não existir o surporte. Mas felizmente, existem soluções como `Babel`, que dentre uma infinidade de recursos e funcionalidades, dentro do nosso contexto, nos permite no momento do `deploy` da nossa aplicação, realizarmos um `build` dela, onde o `Babel` irá fazer sua magia, convertendo nosso código para uma versão suportada pelo `NodeJS`, abaixo listo as bibliotécas necessárias e a configuração para que essa magia aconteça:

### Instalando as dependências necessárias

```sh
// Usando o yarn
yarn add babel-cli babel-preset-env -D

OU

// Usando o npm
npm install --save-dev babel-cli babel-preset-env
```

Após instalar as dependências, será necessário criar um arquivo `.babelrc` e incluir a configuração abaixo

```json
{
  "presets": [
    [
      "env",
      {
        "targets": {
          "node": "current"
        }
      }
    ]
  ]
}
```

No final, basta incluir no arquivo `package.json` em `scripts` a linha `"deploy": "rm -rf dist && babel src -D -d dist --presets env"`
