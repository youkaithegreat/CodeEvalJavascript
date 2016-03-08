/**
 * Created by Kevin on 3/7/2016.
 */

var highest_palindrome = 1;
var prime_check = true;
for (var i = 1; i < 1000; i++) {
    var i_array = i.toString().split(''),
        first_digit, second_digit;

    if (i < 100) {
        first_digit = i_array[0];
        second_digit = i_array[1];
    } else {
        first_digit = i_array[0];
        second_digit = i_array[2];
    }

    if (first_digit == second_digit) {
        for (var j = 2; j < i; j++) {
            if (i % j == 0) {
                prime_check = false;
            }
        }
        if (prime_check == true) {
            highest_palindrome = i;
        }
    }
    prime_check = true;
}

process.stdout.write('' + highest_palindrome);