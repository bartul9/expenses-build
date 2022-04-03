

export const parseMoney = (val, currency = "") => {
    return val != null ? val.toLocaleString("en-US", {minimumFractionDigits: 2}) + " " + currency : "";
}