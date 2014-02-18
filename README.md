## IE 
### Validação de [inscrições estaduais](http://pt.wikipedia.org/wiki/Inscri%C3%A7%C3%A3o_Estadual "Inscrição Estadual no Wikipedia") em JavaScript (browser e node.js)
Validações implementadas de acordo com o [manual do Sintegra](http://www.sintegra.gov.br/insc_est.html).  
Escrito por [@renatoargh](http://www.github.com/renatoargh "Renato Gama") e [@sergiovilar](http://www.github.com/sergiovilar "Sérgio Vilar") para [@gammasoft](http://www.github.com/gammasoft "Gammasoft")

![IE - Status da build](https://travis-ci.org/gammasoft/ie.png) &nbsp; ![IE - Status das dependencias](https://gemnasium.com/gammasoft/ie.png) &nbsp; ![IE - Última versão](https://badge.fury.io/js/inscricaoestadual.png)

#### Node.js 

Instalação:
```bash
npm install inscricaoestadual
```
Utilização:

```javascript
var ie = require("inscricaoestadual");
ie(inscricaoEstadual, uf);
```    
#### Browser

Instalação: faça o download [clicando aqui](https://raw.github.com/gammasoft/ie/master/ie.min.js)

Ou via bower:
```bash
bower install --save inscricao-estadual
```

Utilização:
```html
<script src="ie.min.js"></script>
<script>
    var ins = "suainscricao",
    	uf = "sua_uf";

    inscricaoEstadual(ins, uf);
</script>
```

Utilização com AMD (RequireJS e afins):
```javascript

define(['vendor/inscricao-estadual/ie.min.js'], function(ie){
	
	var ins = "suainscricao",
    	uf = "sua_uf";

    ie(ins, uf);

});
```

-----------------------------------------

#### ie(inscricaoEstadual[, uf])
 - `inscricaEstadual` uma string contendo o valor a ser validado ou um array de strings.  
 Pode-se receber uma string com máscara, pois os separadores `[".", "-", "/", " "]` são desconsiderados para a validação.  
 Caso seja passado o valor "isento" ou "isenta" (independente de case maiúsculo ou minúsculo) é retornado `true`.

 - `uf` é opcional, mas se fornecida pode ser `""` (string vazia) ou deve ser uma string entre um dos valores  

```javascript
["ac", "al", "ap", "am", 
"ba", "ce", "df", "es",
"go", "ma", "mt", "ms",
"mg", "pa", "pb", "pr",
"pe", "pi", "rj", "rn",
"rs", "ro", "rr", "sc",
"sp", "se", "to"]
```       
 No caso de ser string vazia ou não fornecida, a função `ie` retorna um array de estados nas quais esta inscrição estadual tem um valor válido, útil quando se tem uma inscrição estadual mas não se sabe a qual estado ela pertece, por exemplo:  
```javascript
ie("012345679") === ["se", "pb", "am", "ro", "sc", "pi", "es", "mt", "to"];
``` 
 Quando o estado é fornecido, a validação é otimizada pois o valor da inscrição estadual é testada apenas contra a regra do estado especificado e a função retorna estritamente `true` ou `false`.

### Contribuindo

#### Testes

Para rodar os testes:

    npm test

Todas as inscrições estaduais nos testes foram obtidas publicamente na internet.  
Se você obteve uma validação falsa para uma inscrição estadual verdadeira, pesquise no site do [Sintegra](http://www.sintegra.gov.br/ "Sintegra") se de fato esta inscrição estadual existe e é valida, neste caso [abra uma notificação](https://github.com/gammasoft/ie/issues/new) aqui no GitHub para apurarmos o caso. 

#### Minificando

Para minificar:

	grunt minify

-----------------------------------------

#### Licença BSD

Copyright (c) 2013, Gammasoft Desenvolvimento de Software Ltda  
All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:

- Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer. 
- Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution. 

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
