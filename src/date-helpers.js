const getDayName = date => {
    return new Intl.DateTimeFormat("en-US", {weekday: "short"}).format(date);
}

const createUTCDate = (year, month, day) => {
    return new Date(Date.UTC(2018, 0, day));
}

const isWeekend = dayNumber => {
    return dayNumber % 7 === 6 || dayNumber % 7 === 0;
}

export {getDayName, createUTCDate, isWeekend};
