import { my_size_alpha } from "./exercise-4.js"

export const my_array_alpha = (str) => {
    let res = [];
    if (typeof(str) != "string") {
        return []
    }
    for(let i = 0; i < my_size_alpha(str); i++){
        res[i] = str[i];
    }
    return res;
} 
