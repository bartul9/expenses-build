import moment from "moment"

export const parseDate = (value, format) => {
    return moment(value).format(format || "DD/MM/YYYY");
}