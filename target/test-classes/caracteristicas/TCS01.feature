# language: pt
@TCS01
Funcionalidade: Validar todas as funcionalidades do sistemas BomPraCrédito

  Esquema do Cenário: Inserir informações para acessar a tela de cadastro do cliente
    Dado quanto vc precisa<valor> em quantas vezes<parcela> seu<nome> e seu<email>
    Entao vericar se o<nome> é exibido na tela de cadastro

    Exemplos: 
      | valor    | parcela | nome                   | email                         |
      | "10.000" | "18"    | "Mirella Malu da Mota" | "mirellamaludamota@gmail.com" |
