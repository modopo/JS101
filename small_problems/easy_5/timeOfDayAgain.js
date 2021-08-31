const HOURS_IN_DAY = 24;
const MINUTES_IN_HOUR = 60;
const MINUTES_IN_DAY = HOURS_IN_DAY * MINUTES_IN_HOUR;

function afterMidnight(timeStr) {
    let [hours, minutes] = timeStr.split(":").map(num => Number(num));

    return ((hours * MINUTES_IN_HOUR) + minutes) % MINUTES_IN_DAY;
}

function beforeMidnight(timeStr) {
    let deltaMinutes = MINUTES_PER_DAY - afterMidnight(timeStr);
    if (deltaMinutes === MINUTES_PER_DAY) {
        deltaMinutes = 0;
    }
    return deltaMinutes;
}