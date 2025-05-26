<script>
    function calculate() {
        let units_per_day = parseInt(document.getElementById("units_per_day").value, 10);
        let num_days = parseInt(document.getElementById("num_days").value, 10);
        let result = 0, order = 0, boxes = 1.0;

        // The following have value 1:
        // (lantus, pen, u100), (basaglar, pen, u100), (levemir, pen, u100), (humalog, pen, u100),
        // (lyumjev, pen, u100), (admelog, pen, u100), (novolog, pen, u100), (fiasp, pen, u100),
        // (apidra, pen, u100), (tresiba, pen, u100), (semglee, pen, u100)
        if (document.getElementById("insulin_drop").value == 1) { // lantus, pen, U100
            result = String((units_per_day * num_days) / 100);
            document.getElementById("calc_result").innerHTML = "";
            document.getElementById("calc_result").innerHTML = "The amount of insulin needed is " + result + " mL.";

            document.getElementById("to_order").innerHTML = "";
            while (true) {
                if (result <= 15.0 * boxes) {
                    order = 15.0 * boxes;
                    break;
                } else {
                    boxes++;
                }
            }
            document.getElementById("to_order").innerHTML = "The amount of insulin that needs to be ordered is " + order + " mL.";
        // The following have value 2:
        // (lantus, vial, u100), (levemir, vial, u100), (humalog, vial, u100), (lyumjev, vial, u100),
        // (admelog, vial, u100), (novolog, vial, u100), (fiasp, vial, u100), (apidra, vial, u100),
        // (tresiba, vial, u100), (semglee, vial, u100)
        } else if (document.getElementById("insulin_drop").value == 2) {
            result = String((units_per_day * num_days) / 100);
            document.getElementById("calc_result").innerHTML = "";
            document.getElementById("calc_result").innerHTML = "The amount of insulin needed is " + result + " mL.";

            document.getElementById("to_order").innerHTML = "";
            while (true) {
                if (result <= 10.0 * boxes) {
                    order = 10.0 * boxes;
                    break;
                } else {
                    boxes++;
                }
            }
            document.getElementById("to_order").innerHTML = "The amount of insulin that needs to be ordered is " + order + " mL.";
        // The following have value 3:
        // (toujeo, pen, u300)
        } else if (document.getElementById("insulin_drop").value == 3) {
            result = String((units_per_day * num_days) / 300);
            document.getElementById("calc_result").innerHTML = "";
            document.getElementById("calc_result").innerHTML = "The amount of insulin needed is " + result + " mL.";

            document.getElementById("to_order").innerHTML = "";
            while (true) {
                if (result <= 4.5 * boxes) {
                    order = 4.5 * boxes;
                    break;
                } else {
                    boxes++;
                }
            }
            document.getElementById("to_order").innerHTML = "The amount of insulin that needs to be ordered is " + order + " mL.";
        // The following have value 4:
        // (toujeo, max pen, u300)
        } else if (document.getElementById("insulin_drop").value == 4) {
            result = String((units_per_day * num_days) / 300);
            document.getElementById("calc_result").innerHTML = "";
            document.getElementById("calc_result").innerHTML = "The amount of insulin needed is " + result + " mL.";

            document.getElementById("to_order").innerHTML = "";
            while (true) {
                if (result <= 6.0 * boxes) {
                    order = 6.0 * boxes;
                    break;
                } else {
                    boxes++;
                }
            }
            document.getElementById("to_order").innerHTML = "The amount of insulin that needs to be ordered is " + order + " mL.";
        // The following have value 5:
        // (humalog, pen, u200), (lyumjev, pen, u200)
        } else if (document.getElementById("insulin_drop").value == 5) {
            result = String((units_per_day * num_days) / 200);
            document.getElementById("calc_result").innerHTML = "";
            document.getElementById("calc_result").innerHTML = "The amount of insulin needed is " + result + " mL.";

            document.getElementById("to_order").innerHTML = "";
            while (true) {
                if (result <= 6.0 * boxes) {
                    order = 6.0 * boxes;
                    break;
                } else {
                    boxes++;
                }
            }
            document.getElementById("to_order").innerHTML = "The amount of insulin that needs to be ordered is " + order + " mL.";
        // The following have value 6:
        // (U-500, vial, u500)
        } else if (document.getElementById("insulin_drop").value == 6) {
            result = String((units_per_day * num_days) / 500);
            document.getElementById("calc_result").innerHTML = "";
            document.getElementById("calc_result").innerHTML = "The amount of insulin needed is " + result + " mL.";

            document.getElementById("to_order").innerHTML = "";
            while (true) {
                if (result <= 20.0 * boxes) {
                    order = 20.0 * boxes;
                    break;
                } else {
                    boxes++;
                }
            }
            document.getElementById("to_order").innerHTML = "The amount of insulin that needs to be ordered is " + order + " mL.";
        // The following have value 7:
        // (U-500, pen, u500)
        } else if (document.getElementById("insulin_drop").value == 7) {
            result = String((units_per_day * num_days) / 500);
            document.getElementById("calc_result").innerHTML = "";
            document.getElementById("calc_result").innerHTML = "The amount of insulin needed is " + result + " mL.";

            document.getElementById("to_order").innerHTML = "";
            while (true) {
                if (result <= 6.0 * boxes) {
                    order = 6.0 * boxes;
                    break;
                } else {
                    boxes++;
                }
            }
            document.getElementById("to_order").innerHTML = "The amount of insulin that needs to be ordered is " + order + " mL.";
        // The following have value 8:
        // (tresiba, pen, u200)
        } else if (document.getElementById("insulin_drop").value == 8) {
            result = String((units_per_day * num_days) / 200);
            document.getElementById("calc_result").innerHTML = "";
            document.getElementById("calc_result").innerHTML = "The amount of insulin needed is " + result + " mL.";

            document.getElementById("to_order").innerHTML = "";
            while (true) {
                if (result <= 9.0 * boxes) {
                    order = 9.0 * boxes;
                    break;
                } else {
                    boxes++;
                }
            }
            document.getElementById("to_order").innerHTML = "The amount of insulin that needs to be ordered is " + order + " mL.";
        }
    }
</script>

<h1>Insulin Prescribing Calculator</h1>
<p>
    Welcome to the insulin prescribing calculator! <br />
    <u>Step 1</u>: Use the leftmost dropdown to select the brand, form, and concentration of insulin desired. <br />
    <u>Step 2:</u> Use the dropdown in the middle to select the desired supply. <br />
    <u>Step 3:</u> Use the text box on the right to enter the desired units per day. <br />
    <b>NOTE: Information will appear as soon as a change is made to the default values below!</b>
</p>

<form>
    <select id="insulin_drop" on:change={calculate}>
        <option id="opt1", value=1>Admelog, Pen, U-100</option>
        <option id="opt2", value=2>Admelog, Vial, U-100</option>
        <option id="opt3", value=1>Apidra, Pen, U-100</option>
        <option id="opt4", value=2>Apidra, Vial, U-100</option>
        <option id="opt5", value=1>Basaglar, Pen, U-100</option>
        <option id="opt6", value=1>Fiasp, Pen, U-100</option>
        <option id="opt7", value=2>Fiasp, Vial, U-100</option>
        <option id="opt8", value=1>Humalog, Pen, U-100</option>
        <option id="opt9", value=2>Humalog, Vial, U-100</option>
        <option id="opt10", value=5>Humalog, Pen, U-200</option>
        <option id="opt11", value=1>Lantus, Pen, U-100</option>
        <option id="opt12", value=2>Lantus, Vial, U-100</option>
        <option id="opt13", value=1>Levemir, Pen, U-100</option>
        <option id="opt14", value=2>Levemir, Vial, U-100</option>
        <option id="opt15", value=1>Lyumjev, Pen, U-100</option>
        <option id="opt16", value=2>Lyumjev, Vial, U-100</option>
        <option id="opt17", value=5>Lyumjev, Pen, U-200</option>
        <option id="opt18", value=1>Novolog, Pen, U-100</option>
        <option id="opt19", value=2>Novolog, Vial, U-100</option>
        <option id="opt20", value=1>Semglee, Pen, U-100</option>
        <option id="opt21", value=2>Semglee, Vial, U-100</option>
        <option id="opt22", value=3>Toujeo, Pen, U-300</option>
        <option id="opt23", value=4>Toujeo, Max Pen, U-300</option>
        <option id="opt24", value=1>Tresiba, Pen, U-100</option>
        <option id="opt25", value=8>Tresiba, Pen, U-200</option>
        <option id="opt26", value=2>Tresiba, Vial, U-100</option>
        <option id="opt27", value=6>U-500, Vial</option>
        <option id="opt28", value=7>U-500, Pen</option>
    </select>

    <select id="num_days" on:change={calculate}>
        <option id="30", value=30>30 days</option>
        <option id="90", value=90>90 days</option>
    </select>

    <input id="units_per_day" type="number" min=1 value=1 on:change={calculate}/>
</form>

<p id="calc_result"></p>
<p id="to_order"></p>

<style>
    h1 {
        text-align: center;
        font-size: 40px;
    }
    p, select, input {
        font-size: 20px;
    }
</style>