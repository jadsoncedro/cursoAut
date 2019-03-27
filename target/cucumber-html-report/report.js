$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("caracteristicas/TCS01.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "# language: pt"
    }
  ],
  "line": 3,
  "name": "Realizar o cadastro na conta do sistema FastTrade para utilização do sistema",
  "description": "",
  "id": "realizar-o-cadastro-na-conta-do-sistema-fasttrade-para-utilização-do-sistema",
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
  "name": "Acessar o sistema e realizar o preenchimento do formulário do sistema",
  "description": "",
  "id": "realizar-o-cadastro-na-conta-do-sistema-fasttrade-para-utilização-do-sistema;acessar-o-sistema-e-realizar-o-preenchimento-do-formulário-do-sistema",
  "type": "scenario_outline",
  "keyword": "Esquema do Cenário"
});
formatter.step({
  "line": 6,
  "name": "o preenchimento dos dados",
  "rows": [
    {
      "cells": [
        "Nome",
        "cpf",
        "Telefone",
        "Email",
        "Estado",
        "Cidade",
        "Endereco",
        "CEP",
        "Nivel",
        "Possui_conta"
      ],
      "line": 7
    },
    {
      "cells": [
        "Vera Raquel Marina Costa",
        "81654683752",
        "9139026058",
        "vera@gmail.com",
        "MG",
        "Uberlandia",
        "Vila Vinicius",
        "66812477",
        "Sou iniciante no assunto",
        "Outra Corretora"
      ],
      "line": 8
    },
    {
      "cells": [
        "Fernanda Louise Malu Freitas",
        "65891788608",
        "95070272624",
        "fernanda@gmail.com",
        "MG",
        "Uberlandia",
        "Rua Professor Mario Daniel",
        "38414212",
        "Negocio frequentemente",
        "Socopa Sc Paulista S.A."
      ],
      "line": 9
    }
  ],
  "keyword": "Dado "
});
formatter.step({
  "line": 10,
  "name": "exibir a mensagem \u003cmensagem\u003e",
  "keyword": "Entao "
});
formatter.examples({
  "line": 12,
  "name": "",
  "description": "",
  "id": "realizar-o-cadastro-na-conta-do-sistema-fasttrade-para-utilização-do-sistema;acessar-o-sistema-e-realizar-o-preenchimento-do-formulário-do-sistema;",
  "rows": [
    {
      "cells": [
        "mensagem"
      ],
      "line": 13,
      "id": "realizar-o-cadastro-na-conta-do-sistema-fasttrade-para-utilização-do-sistema;acessar-o-sistema-e-realizar-o-preenchimento-do-formulário-do-sistema;;1"
    },
    {
      "cells": [
        "cadastro realizado com sucesso"
      ],
      "line": 14,
      "id": "realizar-o-cadastro-na-conta-do-sistema-fasttrade-para-utilização-do-sistema;acessar-o-sistema-e-realizar-o-preenchimento-do-formulário-do-sistema;;2"
    }
  ],
  "keyword": "Exemplos"
});
formatter.scenario({
  "line": 14,
  "name": "Acessar o sistema e realizar o preenchimento do formulário do sistema",
  "description": "",
  "id": "realizar-o-cadastro-na-conta-do-sistema-fasttrade-para-utilização-do-sistema;acessar-o-sistema-e-realizar-o-preenchimento-do-formulário-do-sistema;;2",
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
  "name": "o preenchimento dos dados",
  "rows": [
    {
      "cells": [
        "Nome",
        "cpf",
        "Telefone",
        "Email",
        "Estado",
        "Cidade",
        "Endereco",
        "CEP",
        "Nivel",
        "Possui_conta"
      ],
      "line": 7
    },
    {
      "cells": [
        "Vera Raquel Marina Costa",
        "81654683752",
        "9139026058",
        "vera@gmail.com",
        "MG",
        "Uberlandia",
        "Vila Vinicius",
        "66812477",
        "Sou iniciante no assunto",
        "Outra Corretora"
      ],
      "line": 8
    },
    {
      "cells": [
        "Fernanda Louise Malu Freitas",
        "65891788608",
        "95070272624",
        "fernanda@gmail.com",
        "MG",
        "Uberlandia",
        "Rua Professor Mario Daniel",
        "38414212",
        "Negocio frequentemente",
        "Socopa Sc Paulista S.A."
      ],
      "line": 9
    }
  ],
  "keyword": "Dado "
});
formatter.step({
  "line": 10,
  "name": "exibir a mensagem cadastro realizado com sucesso",
  "matchedColumns": [
    0
  ],
  "keyword": "Entao "
});
formatter.match({
  "location": "TCS01.preencherFormulario(DataTable)"
});
formatter.result({
  "duration": 3751182413,
  "error_message": "java.lang.AssertionError\r\n\tat org.junit.Assert.fail(Assert.java:86)\r\n\tat org.junit.Assert.fail(Assert.java:95)\r\n\tat suite.Config.fastTrade(Config.java:28)\r\n\tat casos.testes.TCS01.preencherFormulario(TCS01.java:19)\r\n\tat ✽.Dado o preenchimento dos dados(caracteristicas/TCS01.feature:6)\r\n",
  "status": "failed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
});