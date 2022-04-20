export const my_length_array = (arr) => {
    let res = 0;
    while (typeof(arr[res]) != "undefined") {
        res++;
    }
    return res;
}
