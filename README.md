# Insulin Prescribing Calculator Web Application

This web application was requested by a local endocrinologist, and should primarily be used by doctors.

This app calculates the exact amount of insulin required by a patient in mL, in addition to how much needs to be ordered (also in mL).

These two numbers differ, as orderable amounts of insulin are rarely the exact amount needed by a patient.


# How to Access the Calculator

To access the calculator, click on this link → https://alex-mohamed.github.io/insulin-calculator-web-app/

The link will always take users to the most recent version of the application. No setup is necessary.


# Visual Demonstration

The calculator takes in an insulin brand, form, and concentration, along with a desired supply and units per day to make the calculation.

![alt text](<Screenshot 2025-07-10 at 8.14.11 AM.png>)

First, users will use the leftmost dropdown to select the insulin brand, form, and concentration.

For this example, let's say the user selects "Tresiba, Pen, U-100"

The application will automatically make the calculation using this input, along with the default inputs for desired supply and units per day (30 days and 1 unit per day, respectively).

![alt text](<Screenshot 2025-07-10 at 8.18.01 AM.png>)

Second, users will use the dropdown in the middle to select the desired supply. This can either be 30 or 90 days.

For this example, let's say the user selects "90 days"

Once again, the default input is used for desired units per day in the calculation.

![alt text](<Screenshot 2025-07-10 at 8.19.43 AM.png>)

Finally, users will use the text box to select the desired units per day. This can be any positive integer.

For this example, let's say the user inputs "37" for units per day.

__Make sure to press tab after typing in the input! Pressing enter will reset all inputs!__

![alt text](<Screenshot 2025-07-10 at 8.23.45 AM.png>)

According to the calculator, the exact amount of insulin required is 33.3 mL.

However, since the pen form of tresiba U-100 can only be ordered in 15 mL portions per box, the application needs to round up, in order to find the orderable amount.

Therefore, the application states that the amount of insulin that needs to be ordered is the first multiple of 15 above 33.3 (45).

