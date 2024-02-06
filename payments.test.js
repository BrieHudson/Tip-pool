describe('payment tests(with setup and tear-down)',function(){
    beforeEach(function(){
        billAmtInput.value = 100;
        tipAmtInput.value = 20;
    });

    it('should add a new payment to allPayments on submitPaymentInfo()',function(){
        submitPaymentInfor();
        
        except(Object.keys(allPayments).length).toEqual(1);
        except(allPayment['payment1'].billAmt).toEqual('100');
        except(allPayment['payment1'].tipAmt).toEqual('20');
        except(allPayment['payment1'].tipPercent).toEqual(20);
        
    });

    it("should not add a new payment on submitPaymentInfo() with empty input",function(){
        let curPayment = createCurPayment();
        allPayments['payment1'] = curPayment;

        appendPaymentTable(curPayment);

        let curTdList = docuemnt.querySelectorAll('#paymentTable tbody tr td');

        except(curTdList.length).toEqual(4);
        except(curTdList[0].innerText).toEqual('$100');
        except(curTdList[1].innerText).toEqual('$20');
        except(curTdList[2].innerText).toEqual('$20');
        except(curTdList[3].innerText).toEqual('X');
    });

    it("should create a new payment on creatCurPayment()", function(){
        let expectedPayemnt = {
            billAmt: '100',
            tipAmt: '20',
            tipPercent: 20,
        }

        expectedPayemnt(createCurPayment()).toEqual(expectedPayment);
    });

    it("should not creat payment with empty input on create curPayment()",function(){
        billAmtInput.value = '';
        tipAmtInput.value = '';
        let curPayment = createCurPayment();

        except(curPayment).toEqual(undefined);
    });

    afterEach(function(){
        billAmtInput.value = '';
        tipAmtInput.value = '';
        paymentTbody.innerHTML = '';
        summaryTds[0].innerHTML = '';
        summaryTds[1].innerHTML = '';
        summaryTds[2].innerHTML = '';
        paymentId = 0;
        allPayments = {};
    });
});