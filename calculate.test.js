const calcModule = require('./calculate.js')

describe('calculate', () => {
    beforeEach(() => {
        document.body.innerHTML = `
            <input id="insulin_drop" value=0 />
            <input id="num_days" value=0 />
            <input id="units_per_day" value=0 />
            <p id="calc_result" innerHTML="Test" />
            <p id="to_order" innerHTML="Test" />
        `;
    });

    test('calc_result and to_order should be the same', () => {
        document.getElementById('insulin_drop').value = 1;
        document.getElementById('num_days').value = 30;
        document.getElementById('units_per_day').value = 50;
        calcModule.calculate();

        expect(calcModule.get_exact()).toBe("The amount of insulin needed is 15 mL.")
        expect(calcModule.get_order()).toBe("The amount of insulin that needs to be ordered is 15 mL.")
    });

    test('extremely small unit per day provided', () => {
        document.getElementById('insulin_drop').value = 2;
        document.getElementById('num_days').value = 30;
        document.getElementById('units_per_day').value = 2;
        calcModule.calculate();

        expect(calcModule.get_exact()).toBe("The amount of insulin needed is 0.6 mL.")
        expect(calcModule.get_order()).toBe("The amount of insulin that needs to be ordered is 10 mL.")
    });

    test('extremely large unit per day provided', () => {
        document.getElementById('insulin_drop').value = 4;
        document.getElementById('num_days').value = 90;
        document.getElementById('units_per_day').value = 1532;
        calcModule.calculate();

        expect(calcModule.get_exact()).toBe("The amount of insulin needed is 459.6 mL.")
        expect(calcModule.get_order()).toBe("The amount of insulin that needs to be ordered is 462 mL.")
    });
});