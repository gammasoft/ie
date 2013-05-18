var estados = 
	["ac", "al", "ap", "am",
	 "ba", "ce", "df", "es",
	 "go", "ma", "mt", "ms",
	 "mg", "pa", "pb", "pr",
	 "pe", "pi", "rj", "rn",
	 "rs", "ro", "rr", "sc",
	 "sp", "se", "to"];

//uglifyjs ie.js -c -m --output ie.min.js
//BA, PE e RS: http://www.basf.com.br/default.asp?id=911
function validar(estado, ie){
	if(typeof estado === "undefined") throw new Error("Estado deve ser fornecido");
	if(typeof estado !== "string") throw new Error("Estado deve ser uma string");
	estado = estado.toLowerCase();
	if(estados.indexOf(estado.toLowerCase()) === -1) throw new Error("O estado fornecido não é válido");
	if(typeof ie === "undefined") throw new Error("Inscrição estadual deve ser fornecida");
	if(typeof ie !== "string") throw new Error("Inscrição estadual deve ser um string");
	ie = ie.replace(/\./g, "").replace(/-/g, "").replace(/\//g, "");
	
	if(/^\d+$/.test(ie) || estado === "sp") return this[estado](ie);
	else return false;
};

function mt(valor){
	if(valor.length !== 11 && valor.length !== 9) return false;
	
	var base = valor.length === 11 ? valor.substring(0, 10) : valor.substring(0, 8);
	var resto = mod11(base);
	var digito = resto <= 1 ? 0 : 11 - resto; 
	
	return valor === base + digito;
	
	function mtTeste(){
		return [
		 "00130000019",
		 "131844474",
		 "133607470",
		 "132150964" 
		 ].every(function(ie){
			return validar("mt", ie);
		});
	}
}

function sp(valor){
	valor = valor.toUpperCase();
	if(valor.substr(0, 1) === "P"){
		if(valor.length !== 13) return false;
		
		var base = valor.substring(1, 9);
		var segundaBase = valor.substring(10, 13);
		var resto = mod11(base, [10, 8, 7, 6, 5, 4, 3, 1]).toString();
		var digito = resto.length > 1 ? resto[1] : resto[0];
		
		return valor === "P" + base + digito + segundaBase;
	}else{
		if(valor.length !== 12) return false;
		
		var primeiraBase = valor.substring(0, 8);
		var segundaBase = valor.substring(9, 11);
		
		var primeiroResto = mod11(primeiraBase, [10, 8, 7, 6, 5, 4, 3, 1]).toString(); 
		var primeiro = primeiroResto.length > 1 ? primeiroResto[1] : primeiroResto[0];
		
		var segundoResto = mod11(primeiraBase + primeiro + segundaBase, [2, 3, 4, 5, 6, 7, 8, 9, 10]).toString();
		var segundo = segundoResto.length > 1 ? segundoResto[1] : segundoResto[0];
		
		return valor === primeiraBase + primeiro + segundaBase + segundo;
	}
	
	function spTeste(){
		return [
			 "110.042.490.114",
			 "332.000.198.112",
			 "635.010.160.112",
			 "149.715.556.115",
			 "353.239.330.115",
			 "442.028.760.112",
			 "630.002.196.118",
			 "148.228.207.116",
			 "513.467.779.111",
			 "392.109.284.115",
			 "P-01100424.3/002"].every(function(ie){
				return validar("sp", ie);
			});
	}
}

function mg(valor){
	if(valor.length !== 13) return false;

	var base = valor.substring(0, 11);

	var baseComZero = valor.substring(0, 3) + "0" + valor.substring(3, 11);
	
	var produtorioLiteral = mod11literal(baseComZero, [2, 1]);
	
	var primeiro = ((parseInt(produtorioLiteral / 10) + 1) * 10) - produtorioLiteral;
	if(primeiro === 10) primeiro = 0;
	
	var resto = mod11(base + primeiro, [2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);
	var segundo = (resto <= 1 ? 0 : 11 - resto);
	
	return valor === base + primeiro + segundo;

	["7072973200009",
	"1861400080005", 
	"0013549440006",
	"2719187320012",
	"4331400080278",
	"4801796120060",
	"4811796120477", 
	"0742720420040",
	"4793672720387",
	"0013549440189",
	"0013549440260", 
	"0013549440340",
	"0162973200227",
	"7041777990034",
	"4701777990218",
	"0931777990444"].map(function(ie){
		return mg(ie);
	});
}

function go(valor){
	if(valor.length !== 9) return false;
	if(["10", "11", "15"].indexOf(valor.substring(0, 2)) === -1) return false;
	
	var base = valor.substring(0, 8);
	
	if(base === "11094402"){
		if(valor.substr(8) === "1" || valor.substr(8) === "0")
			return true;
		else
			return false;
	}
	
	var resto = mod11(base);
	
	var digito = null;
	if(resto === 0) digito = 0;
	else if(resto === 1){
		if(entre(base, 10103105, 10119997)) digito = 1;
		else digito = 0;
	}
	else digito = 11 - resto; 

	return valor === base + digito;
	
	["103010068",
	"100549365",
	"102082073",
	"100395961",
	"104329211",
	"103472517",
	"101126689",
	"103598685",
	"103598510",
	"102959579",
	"103014306",
	"105256030",
	"104787910"].map(function(ie){
		return go(ie);
	});
}

function ms(valor){
	if(valor.length !== 9) return false;
	if(valor.split("")[0] !== "2") return false;
	if(valor.split("")[1] !== "8") return false;
	
	var base = valor.substring(0, 8);
	resto = mod11(base);
	
	var digito = (resto <= 1 ? 0 : 11 - resto);
	
	return valor === base + digito;
	
	["282757961",
	 "283278277",
	 "283240784",
	 "283380098",
	 "283254130",
	 "283231033",
	 "283190817",
	 "283531932",
	 "283278455",
	 "283571810",
	 "283420049",
	 "283522445",
	 "283169109",
	 "283641886",
	 "283525118",
	 "283304626"].map(function(ie){
		return ms(ie);
	});
}

function df(valor){
	if(valor.length !== 13) return false;
	
	var base = valor.substring(0, 11);

	var restoPrimeiro = mod11(base);
	var primeiro = 11 - restoPrimeiro >= 10 ? 0 : 11 - restoPrimeiro;
	
	var restoSegundo = mod11(base + primeiro);
	var segundo = 11 - restoSegundo >= 10 ? 0 : 11 - restoSegundo;
	
	return valor === base + primeiro + segundo;
	
	["0740815100160",
	 "0732466700167",
	 "0736177200166",
	 "0744636700204",
	 "0754082900152",
	 "0730000100109",
	 "0746893500197"].map(function(ie){
		return df(ie);
	});
}

function entre(valor, limiteInferior, limiteSuperior){
	if(typeof valor === "string") valor = parseInt(valor);
	return valor >= limiteInferior && valor <= limiteSuperior;
}

function mod11literal(valor, multiplicadores){
	if(typeof multiplicadores === "undefined")
		multiplicadores = [2, 3, 4, 5, 6, 7, 8, 9];
		
	var i = 0;
	return valor.split("").reduceRight(function(anterior, atual){
		if(i > multiplicadores.length - 1) i = 0;
		return (multiplicadores[i++] * parseInt(atual)).toString() + anterior.toString(); 
	}, "").split("").reduce(function(anterior, atual){
		return anterior + parseInt(atual);
	}, 0);
}

function mod11(valor, multiplicadores){
	if(typeof multiplicadores === "undefined")
		multiplicadores = [2, 3, 4, 5, 6, 7, 8, 9];
		
	var i = 0;
	return valor.split("").reduceRight(function(anterior, atual){
		if(i > multiplicadores.length - 1) i = 0;
		return (multiplicadores[i++] * parseInt(atual)) + anterior; 
	}, 0) % 11;
}