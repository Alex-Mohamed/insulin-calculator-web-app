/**
 * This function handles the JavaScript by calculating the exact amount of insulin 
 * needed, and the amount that needs to be ordered. This function is also responsible 
 * for printing both values to the user.
 */

function calculate() {
    let units_per_day = parseInt(document.getElementById("units_per_day").value, 10);
    let num_days = parseInt(document.getElementById("num_days").value, 10);
    let result = 0, order = 0, boxes = 1.0;

    // The following have value 1:
    // (lantus, pen, u100), (basaglar, pen, u100), (levemir, pen, u100), (humalog, pen, u100),
    // (lyumjev, pen, u100), (admelog, pen, u100), (novolog, pen, u100), (fiasp, pen, u100),
    // (apidra, pen, u100), (tresiba, pen, u100), (semglee, pen, u100), (lispro, pen, u100)
    if (document.getElementById("insulin_drop").value == 1) {
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
    // (tresiba, vial, u100), (semglee, vial, u100), (lispro, vial, u100)
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
function get_exact() {
    return document.getElementById("calc_result").innerHTML;
}

function get_order() {
    return document.getElementById("to_order").innerHTML;
}

module.exports = {
    calculate: calculate,
    get_exact: get_exact,
    get_order: get_order
};