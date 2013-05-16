var estados = 
	["ac", "al", "ap", "am",
	 "ba", "ce", "df", "es",
	 "go", "ma", "mt", "ms",
	 "mg", "pa", "pb", "pr",
	 "pe", "pi", "rj", "rn",
	 "rs", "ro", "rr", "sc",
	 "sp", "se", "to"];

function validar(estado, ie){
	if(typeof estado === "undefined") throw new Error("Estado deve ser forncedido");
	if(estados.indexOf(estado.toLowerCase()) === -1) throw new Error("O estado fornecido não é válido"); 
	if(typeof ie === "undefined") throw new Error("Inscrição estadual deve ser forncedida");
	
	
}

function mod11(valor, multiplicadores){
	if(typeof multiplicadores === "undefined") multiplicadores = [2, 3, 4, 5, 6, 7, 8, 9];
		
	var i = 0;
	return valor.split("").reduceRight(function(anterior, atual){
		if(i > multiplicadores.length - 1) i = 0;
		return (multiplicadores[i++] * parseInt(atual)) + anterior; 
	}, 0) % 11;
}