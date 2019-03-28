# language: pt
@TCS01
Funcionalidade: Realizar o cadastro na conta do sistema FastTrade para utilização do sistema

  Esquema do Cenário: Acessar o sistema e realizar o preenchimento do formulário do sistema
    Dado o preenchimento dos dados
      | Nome                             | cpf         | Telefone   | Email              | Estado | Cidade     | Endereco          | CEP      | Nivel                    | Possui_conta            | Mensagem                               |
      | Bárbara Patrícia Lorena Silveira | 08502191675 | 3428547496 | vera@gmail.com     | MG     | Uberlandia | Rua Florença      | 38401174 | Sou iniciante no assunto | Outra Corretora         | Agora você é um usuário do Fast Trade! |
      | Francisca Giovanna Lopes         | 80026846640 | 3426743068 | fernanda@gmail.com | MG     | Uberlandia | Rua Miguel Felice | 38400616 | Negocio frequentemente   | Socopa Sc Paulista S.A. | Agora você é um usuário do Fast Trade! |
    Entao validar mensagem de retorno
