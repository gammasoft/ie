var estados = 
	["ac", "al", "ap", "am",
	 "ba", "ce", "df", "es",
	 "go", "ma", "mt", "ms",
	 "mg", "pa", "pb", "pr",
	 "pe", "pi", "rj", "rn",
	 "rs", "ro", "rr", "sc",
	 "sp", "se", "to"];

function validar(estado, ie){
	if(typeof estado === "undefined") throw new Error("Estado deve ser fornecido");
	if(typeof estado !== "string") throw new Error("Estado deve ser uma string");
	estado = estado.toLowerCase();
	if(estados.indexOf(estado.toLowerCase()) === -1) throw new Error("O estado fornecido não é válido");
	if(typeof ie === "undefined") throw new Error("Inscrição estadual deve ser fornecida");
	if(typeof ie !== "string") throw new Error("Inscrição estadual deve ser um string");
	if(!/^\d+$/.test(ie)) return false;
		
	return this[estado](ie);
};

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
}

function df(valor){
	if(valor.length !== 13) return false;
	
	var base = valor.substring(0, 11);

	var restoPrimeiro = mod11(base);
	var primeiro = 11 - restoPrimeiro >= 10 ? 0 : 11 - restoPrimeiro;
	
	var restoSegundo = mod11(base + primeiro);
	var segundo = 11 - restoSegundo >= 10 ? 0 : 11 - restoSegundo;
	
	return valor === base + primeiro + segundo;
}

function entre(valor, limiteInferior, limiteSuperior){
	if(typeof valor === "string") valor = parseInt(valor);
	return valor >= limiteInferior && valor <= limiteSuperior;
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