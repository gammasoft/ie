'use strict';

var inscricaoEstadual = require('../ie');

module.exports = {
    'Passando estado nulo não lança exceção': function(test) {
        test.deepEqual(['se', 'pb', 'am', 'ro', 'sc', 'pi', 'es', 'mt', 'to'], inscricaoEstadual('012345679', null));
        test.done();
    },

    'Passando inscrição que serve para mais de um estado': function(test){
        test.deepEqual(['se', 'pb', 'am', 'ro', 'sc', 'pi', 'es', 'mt', 'to'], inscricaoEstadual('012345679'));
        test.done();
    },

    'É possível utilizar resultado como boleano': function(test){
        test.ok(inscricaoEstadual('012345679'));
        test.done();
    },

    'Retorna falso se não é inscrição estadual de ninguém': function(test){
        test.strictEqual(inscricaoEstadual('01010101'), false);
        test.done();
    },

    'Passando string vazia no estado também funciona': function(test){
        test.doesNotThrow(function(){ inscricaoEstadual('012345679', ''); });
        test.done();
    },
    'Passando codigo do IBGE no estado funciona': function(test){
        test.doesNotThrow(function(){ inscricaoEstadual('012345679', '43'); });
        test.done();
    },

    'Passando codigo do IBGE invalido no estado da erro': function(test){
        test.throws(function(){ inscricaoEstadual('012345679', '123'); });
        test.done();
    },

    'Não passando inscrição estadual lança erro': function(test){
        test.throws(function(){ inscricaoEstadual(); });
        test.done();
    },

    'Passando inscrição estadual indefinida lança erro': function(test){
        test.throws(function(){ inscricaoEstadual(undefined); });
        test.done();
    },

    'Não passando inscrição estadual mas passando estado lança erro': function(test){
        test.throws(function(){ inscricaoEstadual(undefined, 'df'); });
        test.done();
    },

    'Passando inscrição estadual que não seja string lança erro': function(test){
        test.throws(function(){ inscricaoEstadual(123456, 'df'); });
        test.done();
    },

    'Lança exceção caso passado valor de estado inválido': function(test){
        test.throws(function(){ inscricaoEstadual(123456, 'testando'); });
        test.done();
    },

    'Verifica que retorna array de resultados caso se passe array de inscrições estaduais': function(test){
        test.deepEqual([false, true], inscricaoEstadual(['0745770500212', 'P-01100424.3/002'], 'sp'));
        test.done();
    },

    'Retorna verdadeiro se é passado valor "isento" independente de case': function(test){
        test.ok(inscricaoEstadual('isento') && inscricaoEstadual('ISENTO') && inscricaoEstadual('iseNTO') && inscricaoEstadual('ISEnto'));
        test.done();
    }
};