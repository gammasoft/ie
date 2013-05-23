//browserify -r ./ie | uglifyjs -c -m --output ie.min.js
var inscricaoEstadual = require("../ie");

module.exports = {
	"Maranhão": function(test){
		test.ok(["120000385", "122409892", "12.104.376-2"].every(function(ie){ return inscricaoEstadual("ma", ie); }));
		test.done();
	},
//	"Piauí": function(test){
//		test.ok();
//		test.done();
//	},
	"Ceará": function(test){
		test.ok(["06.000001-5", "06.687526-9", "06.664935-8",
		         "06.678895-1", "06.276628-7", "06.815570-0",
		         "06.008899-0", "06.275630-3", "06.179667-0",
		         "06.695014-7"].every(function(ie){ return inscricaoEstadual("ce", ie); }));
		test.done();
	},
//	"Rio Grande do Norte": function(test){
//		test.ok();
//		test.done();
//	},
//	"Paraíba": function(test){
//		test.ok();
//		test.done();
//	},
	"Pernambuco": function(test){
		test.ok(["0192310-24", "0321418-40", "046.0814-37",
		         "008394423", "001876406", "017050405",
		         "039326136", "036394521", "037071300"].every(function(ie){ return inscricaoEstadual("pe", ie); }));
		test.done();
	},
//	"Alagoas": function(test){
//		test.ok();
//		test.done();
//	},
//	"Sergipe": function(test){
//		test.ok();
//		test.done();
//	},
//	"Bahia": function(test){
//		test.ok();
//		test.done();
//	},
//	"Rondônia": function(test){
//		test.ok();
//		test.done();
//	},
	"Acre": function(test){
		test.ok(["01.004.823/001-12", "01.010.382/001-68", "01.004.528/001-84",
		         "01.005.876/001-32", "01.035.285/001-64", "01.033.548/001-09",
		         "01.021.609/001-34", "01.035.271/001-03", "01.026.771/001-94",
		         "01.013.535/001-56", "01.026.903/001-50", "01.023.615/001-17", 
		         "01.014.256/001-19", "01.019.306/001-63", "01.025.121/001-12",
		         "01.006.074/001-68", "01.028.429/001-47", "01.003.146/001-98", 
		         "01.027.299/001-61", "01.009.396/001-50", "01.028.804/001-21",
		         "01.028.154/001-04", "01.031.499/001-99", "01.013.033/001-61",
		         "01.030.125/001-10", "01.015.421/001-04", "01.029.789/001-57", 
		         "01.022.496/001-30", "01.032.349/001-57", "01.028.175/001-49", 
		         "01.035.613/001-87", "01.014.918/002-87", "01.020.942/001-17", 
		         "01.014.918/002-87", "01.027.768/001-51", "01.016.363/001-90", 
		         "01.021.709/001-70", "01.016.255/001-18", "01.019.389/001-90", 
		         "01.004.633/001-96", "01.027.993/001-98", "01.033.219/001-04", 
		         "01.020.406/001-76", "01.014.322/001-04", "01.025.836/001-93", 
		         "01.020.372/001-38", "01.022.770/001-25"].every(function(ie){ return inscricaoEstadual("ac", ie); }));
		test.done();
	},
//	"Amazonas": function(test){
//		test.ok();
//		test.done();
//	},
//	"Roraima": function(test){
//		test.ok();
//		test.done();
//	},
//	"Pará": function(test){
//		test.ok();
//		test.done();
//	},
//	"Amapá": function(test){
//		test.ok();
//		test.done();
//	},
//	"Tocantins": function(test){
//		test.ok();
//		test.done();
//	},
//	"Paraná": function(test){
//		test.ok();
//		test.done();
//	},
//	"Santa Catarina": function(test){
//		test.ok();
//		test.done();
//	},
	"Rio Grande do Sul": function(test){
		test.ok(["024/0440013", "096/2514500", "153/0153554", 
		         "100.0270545", "111/0084169", "067/0047457",
		         "449/0000757", "067/0043222", "067/0042811",
		         "067/0042781", "017/0096475", "224/3658792",
		         "132/0069816", "096/3156659"].every(function(ie){ return inscricaoEstadual("rs", ie); }));
		test.done();
	},
	"Minas Gerais": function(test){
		test.ok(["00181926300-48", "7.042.464.220.176", "7072973200009",
		         "1861400080005", "0013549440006", "2719187320012",
		         "4811796120477", "0742720420040", "4793672720387",
		         "0013549440189", "0013549440260", "0013549440340",
		         "0162973200227", "7041777990034", "4701777990218",
		         "0931777990444", "7.042.464.220.095", "4331400080278",
		         "4801796120060",].every(function(ie){ return inscricaoEstadual("mg", ie); }));
		test.done();
	},
//	"Espírito Santo": function(test){
//		test.ok();
//		test.done();
//	},
//	"Rio de Janeiro": function(test){
//		test.ok();
//		test.done();
//	},
	"São Paulo": function(test){
		test.ok(["114.814.878.119", "635.391.508.115", "146.271.230.118",
		         "210.148.387.119", "110.042.490.114", "332.000.198.112", 
		         "635.010.160.112", "149.715.556.115", "353.239.330.115",
		         "442.028.760.112", "630.002.196.118", "148.228.207.116",
		         "513.467.779.111", "392.109.284.115", "P-01100424.3/002",
		         "112.935.818.112", "513.055.578.114"].every(function(ie){ return inscricaoEstadual("sp", ie); }));
		test.done();
	},
	"Mato Grosso do Sul": function(test){
		test.ok(["282757961", "283278277", "283240784",
		         "283380098", "283254130", "283231033",
		         "283190817", "283531932", "283278455",
		         "283571810", "283420049", "283522445",
		         "283169109", "283641886", "283525118",
		         "283304626"].every(function(ie){ return inscricaoEstadual("ms", ie); }));
		test.done();
	},
	"Mato Grosso": function(test){
		test.ok(["132.233.738", "00130000019", "131844474",
		         "133607470", "132150964"].every(function(ie){ return inscricaoEstadual("mt", ie); }));
		test.done();
	},
	"Goiás": function(test){
		test.ok(["103010068", "100549365", "102082073",
		         "100395961", "104329211", "103472517",
		         "101126689", "103598685", "103598510",
		         "102959579", "103014306", "105256030",
		         "104787910", "105.14336-7"].every(function(ie){ return inscricaoEstadual("go", ie); }));
		test.done();
	},
	"Distrito Federal": function(test){
		test.ok([
		         "07.401.321/001-03",
		         "0745770500212",
		         "0740815100160",
		         "0732466700167",
		         "0744636700204",
		         "0754082900152",
		         "0730000100109",
		         "0746893500197",
		         "0731778300131"
		         ].every(function(ie){ return inscricaoEstadual("df", ie); }));
		test.done();
	},
};

//AL - Maceio: 241.056.683
//BA - 66.607.504, 1.747.650, 09.392.197
//PR - 90575418-11
//AM - Manaus: 04225480-9
//RJ - 78368870, 10.008.689, 82.879.781
//NAO SEI DAONDE É: 07.316.897/001-00, 20.853.321-99, 

//mascaras
//
//1    RS    RIO GRANDE DO SUL    ###-#######    
//2    SC    SANTA CATARINA            ###.###.###    
//3    PR    PARANÁ                    ########-##    
//4    SP    SÃO PAULO                ###.###.###.###    
//5    MG    MINAS GERAIS            ###.###.###/####    
//6    RJ    RIO DE JANEIRO            ##.###.##-#    
//7    ES    ESPÍRITO SANTO        ###.###.##-#    
//8    BA    BAHIA                    ###.###.##-#    
//9    SE    SERGIPE                #########-#    
//10    AL    ALAGOAS                #########    
//11    PE    PERNAMBUCO            ##.#.###.#######-#    
//12    PB    PARAÍBA                    ########-#    
//13    RN    RIO GRANDE DO NORTE    ##.###.###-#    
//14    PI    PIAUÍ                    #########    
//15    MA    MARANHÃO                #########    
//16    CE    CEARÁ                    ########-#    
//17    GO    GOIÁS                    ##.###.###-#    
//18    TO    TOCANTINS                ###########    
//19    MT    MATO GROSSO            #########    
//20    MS    MATO GROSSO DO SUL    #########    
//21    DF    DISTRITO FEDERAL        ###########-##    
//22    AM    AMAZONAS                ##.###.###-#    
//23    AC    ACRE                    ##.###.###/###-##    
//24    PA    PARÁ                    ##-######-#    
//25    RO    RONDÔNIA                ###.#####-#    
//26    RR    RORAIMA                ########-#    
//27    AP    AMAPÁ                    #########