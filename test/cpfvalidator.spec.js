const chai = require("chai");
const expect = chai.expect;
const cpfNumber = require("../index");
const cpf = cpfNumber.cpfvalidator;

describe("CPF library", () => {
        it("Should return invalid for equal numbers 11111111111", () =>{
            expect(cpf('11111111111')).to.equal(false);
        });
        it("Should return invalid for longer than 11 digits", () =>{
            expect(cpf('11111111111111')).to.equal(false);
        });
        it("Should return invalid for shorter than 11 digits", () =>{
            expect(cpf('111111')).to.equal(false);
        });
        it("Should return invalid for strings with letters", () =>{
            expect(cpf('hellohowar')).to.equal(false);
        });               
        it("Should return valid for 91464594210", () =>{
            expect(cpf('91464594210')).to.equal(true);
        });
        it("Should return valid for 70814200877", () =>{
            expect(cpf('70814200877')).to.equal(true);
        });
        

       
});