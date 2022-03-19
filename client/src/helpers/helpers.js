var isodate = require("isodate");

export const getFormattedDate = (isoDate) => {
    if (!isoDate) return "";
    return isodate(isoDate).toString();
}
