# Validador de CPF v.2.0.2 

**Esta biblioteca se destina à validação de números de CPF, para uso em aplicações web.** Na versão atual é capaz de verificar se um número é um cpf válido ou não.  

## [](https://github.com/jayferreira/cpfvalidator-#como-instalar)Como instalar:  

$ npm install cpfvalidatorjf  

## [](https://github.com/jayferreira/cpfvalidator#como-utilizar)Como utilizar:
  
Exemplo de retorno válido: 
```javascript
 const validator = require('cpfvalidatorjf');
 validator.cpfValidator("70814200877") //true
```
Exemplo de retorno inválido: 
```javascript
 const validator = require('cpfvalidatorjf');
 validator.cpfValidator("12345678910") //false
```  

## [](https://github.com/jayferreira/cpfvalidator#roadmap-oficial-do-projeto)Roadmap oficial do projeto
  

#### [](https://github.com/jayferreira/cpfvalidator#vers%C3%A3o-300-sem-previs%C3%A3o-aceita-se-contribui%C3%A7%C3%B5es)versão 3.0.0 (sem previsão, aceita-se contribuições)
 

- README traduzido para Inglês.

- Funções refatoradas.

  

#### [](https://github.com/jayferreira/cpfvalidator#vers%C3%A3o-200-previs%C3%A3o-outubro2018)versão 2.0.0 (released)

  
- Realiza o tratamento para entradas com letras.

- Mais testes incluídos.

  

#### [](https://github.com/jayferreira/cpfvalidator#vers%C3%A3o-100-released)versão 1.0.0 

  

- Funcionalidades: Verificação de CPF, classificando entre válido e inválido.

- Realiza o tratamento para entradas menores ou maiores de 11 dígitos.

- Realiza o tratamento para entradas com númerais idênticos.

- Realiza o tratamento para entradas com letras.