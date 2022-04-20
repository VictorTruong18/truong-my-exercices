export const my_is_posi_neg = (nbr) => {
    if (nbr < 0) {
        return "NEGATIF"
    }
    if (nbr == 0) {
        return "NEUTRAL"
    }
    return "POSITIF"
}
