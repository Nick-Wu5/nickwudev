/** @typedef {import("../types/types.js").Entry} Entry */

const monthYearFormatter = new Intl.DateTimeFormat("en-US", {
  month: "long",
  year: "numeric",
});

/**
 * Formats an entry date range as "Month Year - Month Year".
 *
 * @param {Date} startDate
 * @param {Date} endDate
 * @returns {string}
 */
export function formatDateRange(startDate, endDate) {
  if (
    startDate.getFullYear() === endDate.getFullYear() &&
    startDate.getMonth() === endDate.getMonth()
  ) {
    return monthYearFormatter.format(startDate);
  } else {
    return `${monthYearFormatter.format(startDate)} - ${monthYearFormatter.format(endDate)}`;
  }
}

/**
 * Sorts entries with the most recent items first.
 *
 * @param {Entry} left
 * @param {Entry} right
 * @returns {number}
 */
export function compareEntriesByDateDesc(left, right) {
  if (!!left.pinLast !== !!right.pinLast) {
    return left.pinLast ? 1 : -1;
  }

  const endDiff = right.endDate.getTime() - left.endDate.getTime();
  if (endDiff !== 0) {
    return endDiff;
  }

  return right.startDate.getTime() - left.startDate.getTime();
}
