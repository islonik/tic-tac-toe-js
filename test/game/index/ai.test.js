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

    it ('victory case 03', () => {
        let aiTest = new ai.Ai();
        expect(aiTest).to.be.not.null;

        aiTest.move(1, 'X');
        aiTest.move(5, 'Y');
        aiTest.move(6, 'X');
        aiTest.move(7, 'Y');
        aiTest.move(9, 'X');

        /**
         |---|---|---| 
		 | X |   |   | 
		 |---|---|---| 
		 |   | Y | X |
		 |---|---|---| 
		 | Y |   | X | 
		 |---|---|---|
        **/
        aiTest.aiMove();

        expect(aiTest._board.get(3).type).to.be.equal('Y');
    })

    it ('defense case 01', () => {
        let aiTest = new ai.Ai();
        expect(aiTest).to.be.not.null;

        aiTest.move(1, 'X');
        aiTest.move(7, 'Y');
        aiTest.move(9, 'X');

        /**
         |---|---|---| 
		 | X |   |   | 
		 |---|---|---| 
		 |   |   |   |
		 |---|---|---| 
		 | Y |   | X | 
		 |---|---|---|
        **/
        aiTest.aiMove();

        expect(aiTest._board.get(5).type).to.be.equal('Y');
    })

    it ('defense case 02', () => {
        let aiTest = new ai.Ai();
        expect(aiTest).to.be.not.null;

        aiTest.move(1, 'X');
        aiTest.move(5, 'Y');
        aiTest.move(7, 'X');

        /**
         |---|---|---| 
		 | X |   |   | 
		 |---|---|---| 
		 |   | Y |   |
		 |---|---|---| 
		 | X |   |   | 
		 |---|---|---|
        **/
        aiTest.aiMove();

        expect(aiTest._board.get(4).type).to.be.equal('Y');
    })

    it ('defense case 03', () => {
        let aiTest = new ai.Ai();
        expect(aiTest).to.be.not.null;

        aiTest.move(1, 'X');
        aiTest.move(5, 'Y');
        aiTest.move(3, 'X');

        /**
         |---|---|---| 
		 | X |   | X | 
		 |---|---|---| 
		 |   | Y |   |
		 |---|---|---| 
		 |   |   |   | 
		 |---|---|---|
        **/
        aiTest.aiMove();

        expect(aiTest._board.get(2).type).to.be.equal('Y');
    })

    it ('random move. case 01', () => {
        let aiTest = new ai.Ai();
        expect(aiTest).to.be.not.null;

        aiTest.randomMove();
        let randomMove = false;
        for (let x = 1; x <= 9; x++) {
            let value = aiTest._board.get(x)._type;
            if (value == 'Y') {
                randomMove = true;
                break;
            }
        }
        expect(randomMove).to.be.true;
    })

    it ('random move. case 02', () => {
        let aiTest = new ai.Ai();
        expect(aiTest).to.be.not.null;

        aiTest._move = true;
        aiTest.randomMove();

        let noMoves = true;
        for (let x = 1; x <= 9; x++) {
            let value = aiTest._board.get(x)._type;
            if (value != ' ') {
                noMoves = false;
                break;
            }
        }
        expect(noMoves).to.be.true;
    })

    it ('random move. case 03', () => {
        let aiTest = new ai.Ai();
        expect(aiTest).to.be.not.null;

        aiTest.move(1, 'X');
        aiTest.aiMove();

        let plMove = false;
        let aiMove = false;
        for (let x = 1; x <= 9; x++) {
            let value = aiTest._board.get(x)._type;
            if (value == 'Y') {
                aiMove = true;
            } else if (value == 'X') {
                plMove = true;
            }
        }
        expect(plMove).to.be.true;
        expect(aiMove).to.be.true;
    })
}) 