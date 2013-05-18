## IE - Validação de inscrições estaduais para node.js
Escrito por [@renatoargh](http://www.github.com/renatoargh "Renato Gama")

### Instalação
    npm install inscricaoestadual

### Utilização:

    ie(uf, inscricaoEstadual);
    
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
