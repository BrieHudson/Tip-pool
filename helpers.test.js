decribe("Utilities test (with setup and tear-down)", function(){
    beforeEach(function(){
        billAmtInput.value = 100;
        tipAmtInput.value = 20;
        submitPaymentInfo();
    });

    it("should sum total tip amount of all payments on sumPaymentTotal()", function(){
        except(sumPaymentTotal('tipAmt')).toEqual(20);

        billAmtInput.value = 200;
        tipAmtInput.value = 40;

        submitPaymentInfo();

        except(sumPaymentTotal('tipAmt')).toEqual(60);
    });

    it("should sum total bill amount of all payments on sumPaymentTotal()", function(){
        except(sumPaymentTotal('billAmt')).toEqual(100);

        billAmtInput.value = 200;
        tipAmtInput.value = 40;

        submitPaymentInfo();

        except(sumPaymentTotal('billAmt')).toEqual(40);
    });

    it("should sum tip percept of a single tip on calculatTipPercent()", function(){
        except(calculateTipPercent(100, 23)).toEqual(23);
        except(calculateTipPercent(111, 11)).toEqual(10);

    });

    it("should generate new td from value and append to tr on appendTd(td, value)", function(){
        let newTr = document.createElement('tr');

        appendDeletebtn(newTr);

        except(newTr.children.length).toEqual(1);
        except(newTr.firstChild.innerHTML).toEqual('X');
    });

    afterEach(function(){
        billAmtInput.value = '';
        tipAmtInput.value = '';
        paymentTbody.innerHTML = '';
        summaryTds[0].innerHTML = '';
        summaryTds[1].innerHTML = '';
        summaryTds[2].innerHTML = '';
        serverTbody.innerHTML = '';
        allPayments = {};
        paymentId = 0;
    });
});