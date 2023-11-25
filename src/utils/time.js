const { DateTime } = require('luxon');
const moment = require('moment');
const dayjs = require('dayjs');
const utc = require('dayjs/plugin/utc');
const timezone = require('dayjs/plugin/timezone');
var customParseFormat = require('dayjs/plugin/customParseFormat');

dayjs.extend(customParseFormat);
dayjs.extend(utc);
dayjs.extend(timezone);

/**
 * Get current timestamp
 */
module.exports.getCurrentTimeInUnix = () => {
  const date = DateTime.now();
  return date.toUnixInteger();
};

/**
 * get current date
 * @returns CURRENT DATE
 */
module.exports.getCurrentDate = (date, format) => {
  return DateTime.local(...this.getDateTimeData(date ?? Date())).toFormat(
    format ?? 'yyyy-MM-dd HH:mm:ss'
  );
};

/**
 * get current date
 * @returns CURRENT DATE
 */
module.exports.getDateTimeFormat = (date, format) => {
  return DateTime.local(...this.getDateTimeData(date ?? Date())).toFormat(
    format ?? 'yyyy-MM-dd HH:mm:ss'
  );
};

/**
 * Get current year
 */
module.exports.convertDateFromTimezone = (
  date,
  timezone,
  format = 'yyyy-MM-dd HH:mm:ss'
) => {
  this.date = date || new Date();
  if (timezone) {
    return DateTime.local(...this.getDateTimeData(this.date))
      .setZone(timezone ?? 'Asia/Kolkata')
      .toFormat(format);
  }
  return DateTime.utc(...this.getDateTimeData(this.date)).toFormat(format);
};

/**
 * Get current year
 */
module.exports.getUTCDateTimeFromTimezone = (
  date,
  timezone,
  format = 'yyyy-MM-dd HH:mm:ss'
) => {
  this.date = date || new Date();
  return DateTime.local(...this.getDateTimeData(this.date))
    .setZone(timezone)
    .toFormat(format);
};

/**
 * Change Date format
 */
module.exports.changeDateFormat = (date, format = 'yyyy-MM-dd HH:mm:ss') => {
  this.date = date || new Date();
  console.log('Date', date);
  return DateTime.utc(...this.getDateTimeData(this.date)).toFormat(format);
};

/**
 *
 * @param {*} date Object
 * @returns
 * Convert time according to timezone
 */
module.exports.convertToTz = (date, timeZone) => {
  const format = 'yyyy-MM-dd HH:mm:ss';
  return DateTime.local(...this.getDateTimeData(date))
    .setZone(timeZone ?? 'Asia/Kolkata')
    .toFormat(format);
};

/**
 * Get date from date time
 */
module.exports.getDateFromDateTime = (dateObject) => {
  const date = dateObject.getDate();
  const month = dateObject.getMonth() + 1;
  const year = dateObject.getFullYear();
  return `${year}-${month}-${date}`;
};

// /**
//  * Get date difference
//  * @param {Date} date
//  * @param {String} interval
//  * @param {Number} units
//  */
// dateDifference(date1, date2) {
//   const startDate = moment(date1, 'YYYY-MM-DD HH:mm:ss');
//   const endDate = moment(date2, 'YYYY-MM-DD HH:mm:ss');
//   const duration = moment.duration(endDate.diff(startDate));
//   return duration.asHours();
// },

/**
 * Convert iso date time to sql time
 * @param {string} dateTime
 */
module.exports.fromIsoToSQLTime = (dateTime) => {
  const dateTimeObj = DateTime.fromISO(dateTime, { zone: 'utc' });
  return (
    (dateTimeObj && dateTimeObj.toSQLTime({ includeOffset: false })) || null
  );
};

/**
 * Convert sql time to iso date time
 * @param {string} time
 */
module.exports.fromSQLTimeToIso = (time, date) => {
  if (time) {
    const [hour, minute, second] = time.split(':');
    const fromObject = {
      hour,
      minute,
      second,
      // zone: 'utc',
    };
    if (date) {
      const dt = DateTime.fromJSDate(date, {
        zone: 'utc',
      });
      const { year, month, day } = dt;
      Object.assign(fromObject, {
        year,
        month,
        day,
      });
    }
    return DateTime.fromObject(fromObject);
  }
  return null;
};

/**
 * Get date time format
 * @returns
 */
module.exports.getDateFormat = () => {
  return 'yyyy-MM-dd HH:mm:ss';
};

/**
 * Start date get
 * @param {String} date
 * @returns
 */
module.exports.getStartDateFormater = (date) => {
  return DateTime.local(...this.getDateTimeData(date)).toFormat(
    'yyyy-MM-dd 00:00:00'
  );
};

/**
 * End date get
 * @param {String} date
 * @returns
 */
module.exports.getEndDateFormater = (date) => {
  return DateTime.local(...this.getDateTimeData(date)).toFormat(
    'yyyy-MM-dd 23:59:59'
  );
};

// /**
//  * Get Difference start and end time
//  */
// getDifferenceStartAndEndTime(startTime, endTime, format) {
//   const startTimes = moment(startTime, 'HH:mm:ss');
//   const endTimes = moment(endTime, 'HH:mm:ss');
//   return moment(endTimes.diff(startTimes)).format(format ?? 'HH:mm:ss');
// },

/**
 * Get subtract date
 */
module.exports.getCurrentWeek = (date, subtract, type, format) => {
  return DateTime.local(...this.getDateTimeData(date ?? Date()))
    .minus({ [type ?? 'days']: subtract ?? 1 })
    .toFormat(format ?? 'yyyy-MM-dd');
};

// /**
//  * Convert Date Time Format
//  */
// convertDateTimeFormat(date, format = 'YYYY-MM-DD HH:mm:00') {
//   const dateCheck = moment(date, format).isValid();
//   if (dateCheck) {
//     return moment(date).format(format);
//   }
//   return null;
// },

/**
 * Convert date time to date then convert to UTC
 */
module.exports.convertLocalDateTimeToUtc = (date, time, timezone) => {
  if (date && time) {
    const newUtcDate = DateTime.utc(...this.getDateTimeData(date))
      .setZone(timezone)
      .toFormat('yyyy-MM-DD');
    const newUtcTime = DateTime.utc(...this.getDateTimeData(`${date} ${time}`))
      .setZone(timezone)
      .toFormat('HH:mm:ss');
    return { date: newUtcDate, time: newUtcTime };
  }
  return { date: '', time: '' };
};

/**
 * Add date
 */
module.exports.getAddDate = (addData, convert, format) => {
  return DateTime.local(...this.getDateTimeData(Date()))
    .plus({ [convert ?? 'days']: addData ?? 1 })
    .toFormat(format ?? 'yyyy-MM-dd 23:59:59');
};

/**
 * Get current year
 */
module.exports.currentYear = () => {
  return DateTime.now().year;
};

module.exports.getDateTimeData = (date) => {
  const convertDate = new Date(date);
  const updateDate = convertDate.toLocaleDateString();
  const time = convertDate.toLocaleTimeString();
  const [hour, minute, second] = time.split(':');
  const [day, month, year] = updateDate.split('/');
  const data = [
    parseInt(year, 10),
    parseInt(month, 10),
    parseInt(day, 10),
    parseInt(hour, 10),
    parseInt(minute, 10),
    parseInt(second, 10),
  ];
  return data;
};

module.exports.getOffset = (timeZone, date = new Date()) => {
  try {
    let dateTime = DateTime.local().setZone(timeZone);
    if (dateTime.isValid) {
      return dateTime.toFormat('ZZ');
    }
    return new Error('Invalid Timezone');
  } catch (err) {
    return err;
  }
};

module.exports.getCurrentDateTime = (timezone) => {
  try {
    return DateTime.local().setZone(timezone).toUTC().toString();
  } catch (err) {
    throw err;
  }
};

module.exports.getCurrentDate = () => {
  try {
    return new Date();
  } catch (err) {
    throw err;
  }
};
module.exports.getDateTime = (date, time, timezone) => {
  try {
    let dateTimeInUTC = DateTime.fromFormat(
      `${date}, ${time}`,
      'yyyy-MM-dd, hh:mm a',
      {
        zone: timezone,
      }
    )
      .toUTC()
      .toString();
    console.log('Date', date, time, timezone, dateTimeInUTC);
    if (dateTimeInUTC?.invalid) {
      throw new Error('Invalid date time format');
    }
    return dateTimeInUTC;
  } catch (err) {
    console.log('Error', err);
    throw err;
  }
};

module.exports.getUtcDateTime = () => {
  try {
    return new Date();
  } catch (err) {
    throw err;
  }
};

module.exports.toUtcFormat = (dateTime, format, timezone) => {
  try {
    console.log('Format', dateTime);
    dayjs.tz(dateTime, format, timezone);
    return dayjs.tz(dateTime, format, timezone);
  } catch (err) {
    throw err;
  }
};

module.exports.dateTimeDifference = (fromDate, toDate, type = 'minute') => {
  try {
    const fromtime = dayjs(fromDate);
    // console.log('fromtime :', fromtime);
    const totime = dayjs(toDate);
    // console.log('totime :', totime);
    const timeDiff = fromtime.diff(totime, type);
    // console.log('timeDiff :', timeDiff);
    return timeDiff;
  } catch (err) {
    throw err;
  }
};

/**
 * Get previous year
 * @param {*} fromDate 
 * @param {*} toDate 
 * @param {*} type 
 * @returns 
 */
module.exports.getPreviousYear = () => {
  try {
    const previousYearDateTime = dayjs().subtract(1, 'year');
    return previousYearDateTime.format('YYYY-MM-DD 23:59:59');
  } catch (err) {
    throw err;
  }
};
