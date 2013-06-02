var estados = 
	["ac", "al", "ap", "am",
	 "ba", "ce", "df", "es",
	 "go", "ma", "mt", "ms",
	 "mg", "pa", "pb", "pr",
	 "pe", "pi", "rj", "rn",
	 "rs", "ro", "rr", "sc",
	 "sp", "se", "to", ""];

module.exports = validar; 
function validar(ie, estado){
	if(eIndefinido(estado)) estado = "";
	estado = estado.toLowerCase();
	if(estados.indexOf(estado.toLowerCase()) === -1) throw "O estado fornecido não é válido";
	
	if(eIndefinido(ie)) throw "Inscrição estadual deve ser fornecida";
	
	if(Array.isArray(ie)) return ie.map(function(ie){ return validar(ie, estado); });
	else if(typeof ie !== "string") throw "Inscrição estadual deve ser uma string ou um array de strings";
	else if(ie.match(/^ISENT[O|A]$/i)) return true;
	else ie = ie.replace(/\./g, "").replace(/-/g, "").replace(/\//g, "").replace(/\s/g, "");
	
	if(estado === "") return lookup(ie);
	else if(/^\d+$/.test(ie) || estado === "sp") return funcoes[estado](ie);
	else return false;
}

function lookup(ie){
	var resultado = [];
	for (var estado in funcoes) {
		if(funcoes.hasOwnProperty(estado) && funcoes[estado](ie))
			resultado.push(estado);
	}
	
	if(resultado.length === 0) return false;
	else return resultado;
}

var funcoes = {
	ba: function(valor){
		if(tamanhoNaoE(valor, 8) && tamanhoNaoE(valor)) return false;
		
		var base = valor.substring(0, valor.length - 2);
		var primeiroDigito, segundoDigito;
		
		var segundoMultiplicador = [2, 3, 4, 5, 6, 7];
		if(valor.length === 9) segundoMultiplicador.push(8);
		
		var primeiroMultiplicador = [2, 3, 4, 5, 6, 7, 8];
		if(valor.length === 9) primeiroMultiplicador.push(9);
		
		if("0123458".split("").indexOf(valor.substring(0, 1)) !== -1){
			var segundoResto = mod(base, segundoMultiplicador, 10);
			segundoDigito = segundoResto === 0 ? 0 : 10 - segundoResto;
			
			var primeiroResto = mod(base + segundoDigito, primeiroMultiplicador, 10);
			primeiroDigito = primeiroResto === 0 ? 0 : 10 - primeiroResto;
		}else{
			var segundoResto = mod(base, segundoMultiplicador);
			segundoDigito = segundoResto < 2 ? 0 : 11 - segundoResto;
			
			var primeiroResto = mod(base + segundoDigito, primeiroMultiplicador);
			primeiroDigito = primeiroResto < 2 ? 0 : 11 - primeiroResto;
		}
		
		return valor === base + primeiroDigito + segundoDigito;
	},
		
	se: function(valor){
		if(tamanhoNaoE(valor)) return false;
		
		var base = valor.substring(0, 8);
		var resto = mod(base);
		var digito = resto < 2 ? 0 : 11 - resto; 

		return valor === base + digito;
	},
		
	al: function(valor){
		if(tamanhoNaoE(valor)) return false;
		if(naoComecaCom(valor, "24")) return false;
		if("03578".split("").indexOf(valor.substring(2, 3)) === -1) return false;
		
		var base = valor.substring(0, 8);
		
		var resto = mod(base) * 10;
		resto = resto - (parseInt(resto/11, 10) * 11);
		var digito = resto === 10 ? 0 : resto; 

		return valor === base + digito;
	},
		
	pb: function(valor){
		if(tamanhoNaoE(valor)) return false;
		
		var base = valor.substring(0, 8);
		var resto = mod(base);
		var digito = resto < 2 ? 0 : 11 - resto; 

		return valor === base + digito;
	},
		
	rn: function(valor){
		if(tamanhoNaoE(valor) && tamanhoNaoE(valor, 10)) return false;
		if(naoComecaCom(valor, "20")) return false;
		
		var base = valor.substring(0, valor.length - 1);
		
		var multiplicadores = [2, 3, 4, 5, 6, 7, 8, 9];
		if(valor.length === 10) multiplicadores.push(10);
		
		var resto = (mod(base, multiplicadores) * 10) % 11;
		var digito = resto === 10 ? 0 : resto; 

		return valor === base + digito;	
	},

	ap: function(valor){
		if(tamanhoNaoE(valor)) return false;
		if(naoComecaCom(valor, "03")) return false;
		
		var base = valor.substring(0, 8);
		
		var p, d;
		if(entre(base, 3000001, 3017000)) p = 5, d = 0;
		else if(entre(base, 3017001, 3019022)) p = 9, d = 1;
		else p = 0, d = 0;
		
		var resto = mod(p + base, [2, 3, 4, 5, 6, 7, 8, 9, 1]);

		var digito; 
		if(resto === 1) digito = 0;
		else if(resto === 0) digito = d;
		else digito = 11 - resto;
		
		return valor === base + digito;
	},

	rr: function(valor){
		if(tamanhoNaoE(valor)) return false;
		if(naoComecaCom(valor, "24")) return false;
		
		var base = valor.substring(0, 8);
		var digito = mod(base, [8, 7, 6, 5, 4, 3, 2, 1], 9);

		return valor === base + digito;
	},

	am: function(valor){
		if(tamanhoNaoE(valor)) return false;
		
		var base = valor.substring(0, 8);
		var resto = mod(base);
		var digito = resto < 2 ? 0 : 11 - resto; 

		return valor === base + digito;
	},

	ro: function(valor){
		if(valor.length === 9){
			var base = valor.substring(3, 8);
			var resto = mod(base);
			var digito = resto < 2 ? 0 : 11 - resto;
			
			return valor === valor.substring(0, 3) + base + digito;
		}else if(valor.length === 14){
			var base = valor.substring(0, 13);
			var resto = mod(base);
			var digito = resto < 2 ? 0 : 11 - resto;
			
			return valor === base + digito;
		}else return false;
	},

	rj: function(valor){
		if(tamanhoNaoE(valor, 8)) return false;
		
		var base = valor.substring(0, 7);
		var resto = mod(base, [2, 3, 4, 5, 6, 7]);
		var digito = resto < 2 ? 0 : 11 - resto; 
		
		return valor === base + digito;
	},

	sc: function(valor){
		if(tamanhoNaoE(valor)) return false;
		
		var base = valor.substring(0, 8);
		var resto = mod(base);
		var digito = resto < 2 ? 0 : 11 - resto; 
		
		return valor === base + digito;
	},

	pi: function(valor){
		if(tamanhoNaoE(valor)) return false;
		
		var base = valor.substring(0, 8);
		var resto = mod(base);
		var digito = resto < 2 ? 0 : 11 - resto; 
		
		return valor === base + digito;
	},

	es: function(valor){
		if(tamanhoNaoE(valor)) return false;
		
		var base = valor.substring(0, 8);
		var resto = mod(base);
		var digito = resto < 2 ? 0 : 11 - resto; 
		
		return valor === base + digito;
	},

	pr: function(valor){
		if(tamanhoNaoE(valor, 10)) return false;
		
		var base = valor.substring(0, 8);
		
		var restoPrimeiro = mod(base, [2, 3, 4, 5, 6, 7]);
		var primeiro = 11 - restoPrimeiro >= 10 ? 0 : 11 - restoPrimeiro;
		
		var restoSegundo = mod(base + primeiro, [2, 3, 4, 5, 6, 7]);
		var segundo = 11 - restoSegundo >= 10 ? 0 : 11 - restoSegundo;
		
		return valor === base + primeiro + segundo;
	},

	pa: function(valor){
		if(tamanhoNaoE(valor)) return false;
		if(naoComecaCom(valor, "15")) return false;
		
		var base = valor.substring(0, 8);
		var resto = mod(base);
		var digito = resto < 2 ? 0 : 11 - resto; 
		
		return valor === base + digito;
	},

	ce: function(valor){
		if(tamanhoNaoE(valor)) return false;
		if(naoComecaCom(valor, "06")) return false;
		
		var base = valor.substring(0, 8);
		var resto = mod(base);
		var digito = resto < 2 ? 0 : 11 - resto; 
		
		return valor === base + digito;
	},

	pe: function(valor){
		var base = valor.substring(0, valor.length - 2);
		
		var restoPrimeiro = mod(base);
		var primeiro = 11 - restoPrimeiro >= 10 ? 0 : 11 - restoPrimeiro;
		
		var restoSegundo = mod(base + primeiro);
		var segundo = 11 - restoSegundo >= 10 ? 0 : 11 - restoSegundo;
		
		return valor === base + primeiro + segundo;
	},

	ma: function(valor){
		if(tamanhoNaoE(valor)) return false;
		if(naoComecaCom(valor, "12")) return false;
		
		var base = valor.substring(0, 8);
		var resto = mod(base);
		var digito = resto < 2 ? 0 : 11 - resto; 
		
		return valor === base + digito;
	},

	ac: function(valor){
		if(tamanhoNaoE(valor, 13)) return false;
		if(naoComecaCom(valor, "01")) return false;
		
		var base = valor.substring(0, 11);
		
		var primeiroResto = mod(base);
		var primeiroDigito = primeiroResto < 2 ? 0 : 11 - primeiroResto;
		
		var segundoResto = mod(base + primeiroDigito);
		var segundoDigito = segundoResto < 2 ? 0 : 11 - segundoResto;
		
		return valor === base + primeiroDigito + segundoDigito;
	},

	rs: function(valor){
		if(tamanhoNaoE(valor, 10)) return false;
		
		var base = valor.substring(0, 9);
		var resto = mod(base);
		var digito = resto < 2 ? 0 : 11 - resto; 
		
		return valor === base + digito;
	},

	mt: function(valor){
		if(tamanhoNaoE(valor, 11) && tamanhoNaoE(valor)) return false;
		
		var base = valor.length === 11 ? valor.substring(0, 10) : valor.substring(0, 8);
		var resto = mod(base);
		var digito = resto <= 1 ? 0 : 11 - resto; 
		
		return valor === base + digito;
	},

	sp: function(valor){
		valor = valor.toUpperCase();
		if(valor.substr(0, 1) === "P"){
			if(tamanhoNaoE(valor, 13)) return false;
			
			var base = valor.substring(1, 9);
			var segundaBase = valor.substring(10, 13);
			var resto = mod(base, [10, 8, 7, 6, 5, 4, 3, 1]).toString();
			var digito = resto.length > 1 ? resto[1] : resto[0];
			
			return valor === "P" + base + digito + segundaBase;
		}else{
			if(tamanhoNaoE(valor, 12)) return false;
			
			var primeiraBase = valor.substring(0, 8);
			var segundaBase = valor.substring(9, 11);
			
			var primeiroResto = mod(primeiraBase, [10, 8, 7, 6, 5, 4, 3, 1]).toString(); 
			var primeiro = primeiroResto.length > 1 ? primeiroResto[1] : primeiroResto[0];
			
			var segundoResto = mod(primeiraBase + primeiro + segundaBase, [2, 3, 4, 5, 6, 7, 8, 9, 10]).toString();
			var segundo = segundoResto.length > 1 ? segundoResto[1] : segundoResto[0];
			
			return valor === primeiraBase + primeiro + segundaBase + segundo;
		}
	},

	mg: function(valor){
		if(tamanhoNaoE(valor, 13)) return false;

		var base = valor.substring(0, 11);

		var baseComZero = valor.substring(0, 3) + "0" + valor.substring(3, 11);
		
		var i = 0;
		var produtorioLiteral = baseComZero.split("").reduceRight(function(anterior, atual){
			if(i > [2, 1].length - 1) i = 0;
			return ([2, 1][i++] * parseInt(atual, 10)).toString() + anterior.toString(); 
		}, "").split("").reduce(function(anterior, atual){
			return anterior + parseInt(atual);
		}, 0);
		
		var primeiro = ((parseInt(produtorioLiteral / 10) + 1) * 10) - produtorioLiteral;
		if(primeiro === 10) primeiro = 0;
		
		var resto = mod(base + primeiro, [2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);
		var segundo = (resto <= 1 ? 0 : 11 - resto);
		
		return valor === base + primeiro + segundo;
	},

	to: function(valor){
		if(tamanhoNaoE(valor) && tamanhoNaoE(valor, 11)) return false;
		
		var base = "";
		if(valor.length === 11){
			if(["01", "02", "03", "99"].indexOf(valor.substring(2, 4)) === -1) return false;
			base = valor.substring(0, 2) + valor.substring(4, 10);
		}else
			base = valor.substring(0, 8);
			
		var resto = mod(base);
		var digito = resto < 2 ? 0 : 11 - resto; 
		
		return valor === valor.substring(0, valor.length - 1) + digito;
	},

	go: function(valor){
		if(tamanhoNaoE(valor)) return false;
		if(["10", "11", "15"].indexOf(valor.substring(0, 2)) === -1) return false;
		
		var base = valor.substring(0, 8);
		
		if(base === "11094402"){
			if(valor.substr(8) === "1" || valor.substr(8) === "0")
				return true;
			else
				return false;
		}
		
		var resto = mod(base);
		
		var digito = null;
		if(resto === 0) digito = 0;
		else if(resto === 1){
			if(entre(base, 10103105, 10119997)) digito = 1;
			else digito = 0;
		}
		else digito = 11 - resto; 

		return valor === base + digito;
	},

	ms: function(valor){
		if(tamanhoNaoE(valor)) return false;
		if(naoComecaCom(valor, "28")) return false;
		
		var base = valor.substring(0, 8);
		resto = mod(base);
		
		var digito = (resto <= 1 ? 0 : 11 - resto);
		
		return valor === base + digito;
	},

	df: function(valor){
		if(tamanhoNaoE(valor, 13)) return false;
		
		var base = valor.substring(0, 11);

		var restoPrimeiro = mod(base);
		var primeiro = 11 - restoPrimeiro >= 10 ? 0 : 11 - restoPrimeiro;
		
		var restoSegundo = mod(base + primeiro);
		var segundo = 11 - restoSegundo >= 10 ? 0 : 11 - restoSegundo;
		
		return valor === base + primeiro + segundo;
	}
};

function tamanhoNaoE(string, tamanho){
	if(eIndefinido(tamanho)) tamanho = 9;
	return string.length !== tamanho;
}

function naoComecaCom(string, valor){
	return string.substring(0, valor.length) !== valor;
}

function eIndefinido(objeto){
	return typeof objeto === typeof undefined;
}

function entre(valor, limiteInferior, limiteSuperior){
	if(typeof valor === "string") valor = parseInt(valor, 10);
	return valor >= limiteInferior && valor <= limiteSuperior;
}

function mod(valor, multiplicadores, divisor){
	if(eIndefinido(divisor)) divisor = 11;
	if(eIndefinido(multiplicadores))
		multiplicadores = [2, 3, 4, 5, 6, 7, 8, 9];
		
	var i = 0;
	return valor.split("").reduceRight(function(anterior, atual){
		if(i > multiplicadores.length - 1) i = 0;
		return (multiplicadores[i++] * parseInt(atual, 10)) + anterior; 
	}, 0) % divisor;
}