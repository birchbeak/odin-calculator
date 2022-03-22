# odin-calculator
The odin project web calculator

edge cases:

-clear button clears all text
-store numbers
-only evaluate single pairs of numbers
-round answers with long decimals
-handle problems with early equal button press
-handle problems with unsupported input
-add decimal button, don't allow more than one decimal in each number
-add backspace button

Problems:
-error message is not deleted when typing in new things

-equals button does not change the display

-adding a decimal to the second number then evaluating produces "NaN" in the display

-input 8.*6= -> 4.8

-input 8*6. -> 8*6

input .. -> .. (there should be only one period) fixed, checked for operator in second conditional