/**
 * Created by Kevin on 3/8/2016.
 */

var current_num = 2,
    sum = 0,
    i = 1,
    match = true;

while (i <= 1000) {
    for (var k = 2; k < current_num; k++) {
        if (current_num % k == 0) {
            match = false;
        }
    }
    if (match == true) {
        sum = sum + current_num;
        i++;
    }
    match = true;
    current_num++;

}

process.stdout.write(sum + "");