# language: pt
@TCS01
Funcionalidade: Realizar o cadastro na conta do sistema FastTrade para utilização do sistema

  Esquema do Cenário: Acessar o sistema e realizar o preenchimento do formulário do sistema
    Dado o preenchimento dos dados
      | Nome                         | cpf         | Telefone    | Email              | Estado | Cidade     | Endereco                   | CEP      | Nivel                    | Possui_conta            |
      | Vera Raquel Marina Costa     | 81654683752 |  9139026058 | vera@gmail.com     | MG     | Uberlandia | Vila Vinicius              | 66812477 | Sou iniciante no assunto | Outra Corretora         |
      | Fernanda Louise Malu Freitas | 65891788608 | 95070272624 | fernanda@gmail.com | MG     | Uberlandia | Rua Professor Mario Daniel | 38414212 | Negocio frequentemente   | Socopa Sc Paulista S.A. |
    Entao exibir a mensagem <mensagem>

    Exemplos: 
      | mensagem                       |
      | cadastro realizado com sucesso |
