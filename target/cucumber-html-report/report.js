$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("caracteristicas/TCS01.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "# language: pt"
    }
  ],
  "line": 3,
  "name": "Validar todas as funcionalidades do sistemas BomPraCrédito",
  "description": "",
  "id": "validar-todas-as-funcionalidades-do-sistemas-bompracrédito",
  "keyword": "Funcionalidade",
  "tags": [
    {
      "line": 2,
      "name": "@TCS01"
    }
  ]
});
formatter.scenarioOutline({
  "line": 5,
  "name": "Inserir informações para acessar a tela de cadastro do cliente",
  "description": "",
  "id": "validar-todas-as-funcionalidades-do-sistemas-bompracrédito;inserir-informações-para-acessar-a-tela-de-cadastro-do-cliente",
  "type": "scenario_outline",
  "keyword": "Esquema do Cenário"
});
formatter.step({
  "line": 6,
  "name": "quanto vc precisa\u003cvalor\u003e em quantas vezes\u003cparcela\u003e seu\u003cnome\u003e e seu\u003cemail\u003e",
  "keyword": "Dado "
});
formatter.step({
  "line": 7,
  "name": "vericar se o\u003cnome\u003e é exibido na tela de cadastro",
  "keyword": "Entao "
});
formatter.examples({
  "line": 9,
  "name": "",
  "description": "",
  "id": "validar-todas-as-funcionalidades-do-sistemas-bompracrédito;inserir-informações-para-acessar-a-tela-de-cadastro-do-cliente;",
  "rows": [
    {
      "cells": [
        "valor",
        "parcela",
        "nome",
        "email"
      ],
      "line": 10,
      "id": "validar-todas-as-funcionalidades-do-sistemas-bompracrédito;inserir-informações-para-acessar-a-tela-de-cadastro-do-cliente;;1"
    },
    {
      "cells": [
        "\"10.000\"",
        "\"18\"",
        "\"Mirella Malu da Mota\"",
        "\"mirellamaludamota@gmail.com\""
      ],
      "line": 11,
      "id": "validar-todas-as-funcionalidades-do-sistemas-bompracrédito;inserir-informações-para-acessar-a-tela-de-cadastro-do-cliente;;2"
    }
  ],
  "keyword": "Exemplos"
});
formatter.scenario({
  "line": 11,
  "name": "Inserir informações para acessar a tela de cadastro do cliente",
  "description": "",
  "id": "validar-todas-as-funcionalidades-do-sistemas-bompracrédito;inserir-informações-para-acessar-a-tela-de-cadastro-do-cliente;;2",
  "type": "scenario",
  "keyword": "Esquema do Cenário",
  "tags": [
    {
      "line": 2,
      "name": "@TCS01"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "quanto vc precisa\"10.000\" em quantas vezes\"18\" seu\"Mirella Malu da Mota\" e seu\"mirellamaludamota@gmail.com\"",
  "matchedColumns": [
    0,
    1,
    2,
    3
  ],
  "keyword": "Dado "
});
formatter.step({
  "line": 7,
  "name": "vericar se o\"Mirella Malu da Mota\" é exibido na tela de cadastro",
  "matchedColumns": [
    2
  ],
  "keyword": "Entao "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
});