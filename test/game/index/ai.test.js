'use strict'

const chai = require('chai')
const expect = chai.expect

const ai = require('../../../src/game/index/ai')

describe('AI tests', () => {

    it('always should be ok', () => {
        expect(true).to.be.equal(true);
    })

    it ('simple test', () => {
        let aiTest = new ai.Ai();
        expect(aiTest).to.be.not.null;

        expect(aiTest._board.size).to.be.equal(9);
        expect(aiTest._board.get(1).id).to.be.equal(1);
        expect(aiTest._board.get(1).type).to.be.equal(' ');
        expect(aiTest._board.get(9).id).to.be.equal(9);
        expect(aiTest._board.get(9).type).to.be.equal(' ');
    })

    it ('move test', () => {
        let aiTest = new ai.Ai();
        expect(aiTest).to.be.not.null;

        aiTest.move(5, 'X');
        expect(aiTest._board.get(5).type).to.be.equal('X');
       
        aiTest.move(5, 'Y');
        expect(aiTest._board.get(5).type).to.be.equal('X');
    })

    it ('victory case 01', () => {
        let aiTest = new ai.Ai();
        expect(aiTest).to.be.not.null;

        aiTest.move(3, 'X');
        aiTest.move(5, 'Y');
        aiTest.move(7, 'X');
        aiTest.move(1, 'Y');
        aiTest.move(8, 'X');

        /**
         |---|---|---| 
		 | Y |   | X | 
		 |---|---|---| 
		 |   | Y |   |
		 |---|---|---| 
		 | X | X |   | 
		 |---|---|---|
        **/
        aiTest.aiMove();

        expect(aiTest._board.get(9).type).to.be.equal('Y');
    })

    it ('victory case 02', () => {
        let aiTest = new ai.Ai();
        expect(aiTest).to.be.not.null;

        aiTest.move(3, 'X');
        aiTest.move(1, 'Y');
        aiTest.move(7, 'X');
        aiTest.move(9, 'Y');
        aiTest.move(8, 'X');

        /**
         |---|---|---| 
		 | Y |   | X | 
		 |---|---|---| 
		 |   |   |   |
		 |---|---|---| 
		 | X | X | Y | 
		 |---|---|---|
        **/
        aiTest.aiMove();

        expect(aiTest._board.get(5).type).to.be.equal('Y');
    })
}) 