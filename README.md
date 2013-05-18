## IE - Validação de inscrições estaduais para node.js
Escrito por [@renatoargh](http://www.github.com/renatoargh "Renato Gama")

### Instalação
    npm install inscricaoestadual

### Utilização:

    var ie = require("inscricaoestadual");
    ie(uf, inscricaoEstadual); //retorna um boleano, indicando se a inscrição estadual é valida ou não
    
Onde, `uf` deve ser uma string entre um dos valores 
    
    var estados =
      ["ac", "al", "ap", "am", 
      "ba", "ce", "df", "es",
      "go", "ma", "mt", "ms",
      "mg", "pa", "pb", "pr",
      "pe", "pi", "rj", "rn",
      "rs", "ro", "rr", "sc",
      "sp", "se", "to"];

E `inscricaEstadual` uma string contendo o valor a ser validado. 
Pode-se receber uma string com máscara, pois os separadores `[".", "-", "/"]` são desconsiderados para a validação.

### Implementados até agora (22,22%)
**Região Centro-Oeste**
- [X] Mato Grosso do Sul
- [X] Mato Grosso
- [X] Goiás
- [X] Distrito Federal

**Região Sudeste** 
- [X] Minas Gerais 
- [ ] Espírito Santo 
- [ ] Rio de Janeiro 
- [X] São Paulo

**Região Norte**
- [ ] Rondônia
- [ ] Acre
- [ ] Amazonas
- [ ] Roraima
- [ ] Pará
- [ ] Amapá
- [ ] Tocantins

**Região Nordeste** 
- [ ] Maranhão 
- [ ] Piauí 
- [ ] Ceará 
- [ ] Rio Grande do Norte 
- [ ] Paraíba 
- [ ] Pernambuco 
- [ ] Alagoas 
- [ ] Sergipe 
- [ ] Bahia  

**Região Sul**
- [ ] Paraná
- [ ] Santa Catarina
- [ ] Rio Grande do Sul

### Faça uma doação :)
[![Faça uma doação!](https://www.paypalobjects.com/pt_BR/BR/i/btn/btn_donateCC_LG.gif)](https://www.paypal.com/br/cgi-bin/webscr?cmd=_flow&SESSION=qNGRiSLjATOZ2vcKDXVkTmXi5nz5yqBQNI2wQ-qmHQ4wtKUIIg9Px9HR3QG&dispatch=5885d80a13c0db1f8e263663d3faee8d14f86393d55a810282b64afed84968ec)

### Licença BSD

Copyright (c) 2013, Renato Mendonça da Gama  
All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:

- Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer. 
- Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution. 

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
