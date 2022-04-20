

export const my_size_alpha = (str) => {
    if (typeof(str) != "string") {
        return 0;
    }
    var res = 0;
    while (typeof(str[res]) != "undefined") {
        res++;
    }
    return res;
}
