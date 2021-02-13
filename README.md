# `scaffold-node`

Fundação arquitetural para projetos em Node.js

**Funcionalidades contempladas:**

* Ambiente de Dockerizado (desenvolvimento, teste funcional no CI e construção de imagem para produção)
* Testes unitários/funcionais com cobertura de teste e geração automática de documentação da API
* Arranjo arquitetural bem definida que visa a modularização de código, com correção automática de ortografia,  tornando-o de mais fácil manutenção

**Como utilizar:**

```sh
npm start # iniciar servidor localmente (em sua própria máquina) com variáveis de ambiente do `.env.development`
npm test # roda os testes unitários e funcionais

npm run test:ci # roda os testes já coletando dados de cobertura de teste para integração com ferramenta `codecov`
npm run test:functional # roda testes funcionais ("à vida real": utilizando o verdadeiro servidor instanciado em portas aleatórias)
npm run test:functional:local # roda os testes funcionais
npm run test:functional:create-docs # roda os testes "a vida real" e *também* gera documentação (com `the-owl`) da API em `./docs/api`
npm run test:lint # verifica e corrige a ortografia do código (com `xo`)
npm run test:unit # rodas os testes unitários
npm run test:with-coverage # roda os testes exibindo um quadro de porcentagem de cobertura de teste da aplicação
```

