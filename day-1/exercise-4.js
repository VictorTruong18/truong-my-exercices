import { my_display_alpha } from "./exercise-1.js";

export const my_size_alpha = (str) => {
    if (typeof(str) != "string") {
        return 0;
    }

    let letters = my_display_alpha()
    var res = 0;

    var i = 0;
    while (typeof(str[i]) != "undefined") {
        var j = 0;
        while (typeof(letters[j]) != "undefined") {
            if (str[i] == letters[j]) {
                res += 1;
                break;
            }
            j += 1;
        }
        i += 1;
    }
    return res;
}
