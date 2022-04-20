import { my_display_alpha } from "./exercise-1.js"

export const my_array_alpha = (str) => {
    if (typeof(str) != "string") {
        return []
    }
    let alphabet = my_display_alpha();

    let res = [];
    var i = 0;
    while (typeof(str[i]) != "undefined") {
        var j = 0;
        while (typeof(alphabet[j]) != "undefined") {
            if (str[i] == alphabet[j]) {
                res.push(str[i]);
                break;
            }
            j += 1;
        }
        i += 1;
    }

    return res;
} 
