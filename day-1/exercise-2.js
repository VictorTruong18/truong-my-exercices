import { my_display_alpha } from "./exercise-1.js"

export const my_display_alpha_reverse = () => {
    var alphabet = my_display_alpha();
    var result = ""
    for (let i = alphabet.length - 1; i >= 0; i--) {
        result += alphabet[i];
    }
    return result;
}
