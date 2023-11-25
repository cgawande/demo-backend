const moment = require('moment');

moment.suppressDeprecationWarnings = true;

/**
 * Get current timestamp
 */
module.exports.getCurrentTimeInUnix = () => {
  try {
    return moment().unix();
  } catch (error) {
    throw new Error(error);
  }
};

/**
 * get current date
 */
module.exports.getCurrentDate = (date, format) => {
  try {
    if (date) {
      return moment(date).format(format ?? 'YYYY-MM-DD');
    }
    return moment().format(format ?? 'YYYY-MM-DD');
  } catch (error) {
    throw new Error(error);
  }
};

/**
 * get current date
 */
module.exports.getCurrentDateTime = (date, format) => {
  try {
    if (date) {
      return moment(date).format(format ?? 'YYYY-MM-DD');
    }
    return moment().format(format ?? 'YYYY-MM-DD HH:mm:ss');
  } catch (error) {
    throw new Error(error);
  }
};

/**
 * get current local date time
 */
module.exports.getCurrentLocalDate = (date, format) => {
  try {
    if (date) {
      return moment(date)
        .utc()
        .add(5, 'hours')
        .add(30, 'minutes')
        .format(format ?? 'YYYY-MM-DD');
    }
    return moment
      .utc()
      .add(5, 'hours')
      .add(30, 'minutes')
      .format(format ?? 'YYYY-MM-DD');
  } catch (error) {
    throw new Error(error);
  }
};

/**
 * Get current year
 */
module.exports.convertDateFromTimezone = (date, timezone, format) => {
  try {
    // this.date = date || new Date();
    let dateObj = '';
    if (timezone) {
      let originalDate = moment.tz(
        date ?? new Date(),
        'YYYY-MM-DD HH:mm:ss',
        timezone
      ); // Convert the date and time to another timezone
      let convertedDate = originalDate.clone().tz('utc'); // Format the converted date and time as a string
      dateObj = convertedDate.format(format ?? 'YYYY-MM-DD HH:mm');
    } else {
      dateObj = moment.utc(date ?? new Date()).format(format);
    }
    return dateObj;
  } catch (error) {
    throw new Error(error);
  }
};

/**
 * Change Date format
 */
module.exports.changeDateFormat = (date, format = 'YYYY-MM-DD') => {
  try {
    this.date = date || new Date();
    let dateStr = '';
    dateStr = moment.utc(this.date).format(format);
    return dateStr;
  } catch (error) {
    throw new Error(error);
  }
};

/**
 * Convert time according to timezone
 */
module.exports.convertToTz = (date, timeZone) => {
  try {
    const format = 'YYYY-MM-DD HH:mm:ss';
    return moment(date, format).tz(timeZone).format(format);
  } catch (error) {
    throw new Error(error);
  }
};
/**
 * Get date from date time
 */
module.exports.getDateFromDateTime = (dateObject) => {
  try {
    const date = dateObject.getDate();
    const month = dateObject.getMonth() + 1;
    const year = dateObject.getFullYear();
    return `${year}-${month}-${date}`;
  } catch (error) {
    throw new Error(error);
  }
};

/**
 * Get date difference
 */
module.exports.dateDifference = (date1, date2) => {
  try {
    const startDate = moment(date1, 'YYYY-MM-DD HH:mm:ss');
    const endDate = moment(date2, 'YYYY-MM-DD HH:mm:ss');
    const duration = moment.duration(endDate.diff(startDate));
    return duration.asHours();
  } catch (error) {
    throw new Error(error);
  }
};

/**
 * Get date time format
 */
module.exports.getDateFormat = () => {
  return 'YYYY-MM-DD HH:mm:ss';
};

/**
 * Start date get
 */
module.exports.getStartDateFormat = (date) => {
  try {
    const startDate = moment(date).format('YYYY-MM-DD');
    return `${startDate} 00:00:00`;
  } catch (error) {
    throw new Error(error);
  }
};

/**
 * End date get
 */
module.exports.getEndDateFormat = (date) => {
  try {
    const endDate = moment(date).format('YYYY-MM-DD');
    return `${endDate} 23:59:59`;
  } catch (error) {
    throw new Error(error);
  }
};

/**
 * Get Difference start and end time
 */
module.exports.getDifferenceStartAndEndTime = (startTime, endTime, format) => {
  try {
    const startTimes = moment(startTime, 'HH:mm:ss');
    const endTimes = moment(endTime, 'HH:mm:ss');
    return moment(endTimes.diff(startTimes)).format(format ?? 'HH:mm:ss');
  } catch (error) {
    throw new Error(error);
  }
};

/**
 * Get subtract date
 */
module.exports.getCurrentWeek = (date, subtract, type, format) => {
  try {
    return moment(date)
      .subtract(subtract, type)
      .format(format ?? 'YYYY-MM-DD');
  } catch (error) {
    throw new Error(error);
  }
};

/**
 * Convert Date Time Format
 */
module.exports.convertDateTimeFormat = (
  date,
  format = 'YYYY-MM-DD HH:mm:00'
) => {
  try {
    const dateCheck = moment(date, format).isValid();
    if (dateCheck) {
      return moment(date).format(format);
    }
    return null;
  } catch (error) {
    throw new Error(error);
  }
};

/**
 * Convert date time to date then convert to UTC
 */
module.exports.convertLocalDateTimeToUtc = (date, time, timezone) => {
  try {
    if (date && time) {
      const newDate = moment(date).format('YYYY-MM-DD');
      const utcDateTime = moment.tz(`${newDate} ${time}`, timezone).utc();
      const newUtcDate = moment(utcDateTime).format('YYYY-MM-DD');
      const newUtcTime = moment(utcDateTime).format('HH:mm:ss');
      return { date: newUtcDate, time: newUtcTime };
    }
    return { date: '', time: '' };
  } catch (error) {
    throw new Error(error);
  }
};

/**
 * Add date
 */
module.exports.getAddDate = (addData, convert, format) => {
  try {
    return moment()
      .add(addData ?? 1, convert ?? 'days')
      .format(format ?? 'YYYY-MM-DD 23:59:59');
  } catch (error) {
    throw new Error(error);
  }
};

/**
 * Add date
 */
module.exports.getAddDateTime = (date, addData, convert, format) => {
  try {
    return moment(date ?? new Date())
      .add(addData ?? 1, convert ?? 'days')
      .format(format ?? 'YYYY-MM-DD HH:mm');
  } catch (error) {
    throw new Error(error);
  }
};

/**
 * Add date
 */
module.exports.getAddFieldDate = (field, addData, convert, format) => {
  try {
    return moment(field)
      .add(addData ?? 1, convert ?? 'days')
      .format(format ?? 'YYYY-MM-DD 23:59:59');
  } catch (error) {
    throw new Error(error);
  }
};

/**
 * Get current year
 */
module.exports.currentYear = () => {
  try {
    return moment().year();
  } catch (error) {
    throw new Error(error);
  }
};

/**
 * Get date of birth
 */
module.exports.dob = (date) => {
  try {
    return {
      year: moment(date).format('YYYY'),
      month: moment(date).format('MM'),
      day: moment(date).format('DD'),
    };
  } catch (error) {
    throw new Error(error);
  }
};

/*
 * Get current year
 */
module.exports.dayGet = (date) => {
  try {
    return moment(date).day();
  } catch (error) {
    throw new Error(error);
  }
};

/**
 * get previous month date
 */
module.exports.getPreviousDateTime = (months = 3) => {
  try {
    const threeMonthsAgo = new Date();
    threeMonthsAgo.setDate(1)
    return moment(
      threeMonthsAgo.setMonth(threeMonthsAgo.getMonth() - months)
    ).format('YYYY-MM-DD 00:00:00');
  } catch (error) {
    throw new Error(error);
  }
};
/**
 * Get Difference start and end date
 */
module.exports.getDifferenceStartAndEndDate = (startDate, endDate, format) => {
  try {
    const startDateMoment = moment(startDate, 'YYYY-MM-DD');
    const endDateMoment = moment(endDate, 'YYYY-MM-DD');
    return endDateMoment.diff(startDateMoment, 'days');
  } catch (error) {
    throw new Error(error);
  }
};

/**
 * get current month
 */
module.exports.getCurrentMonth = () => {
  try {
    return  new Date().getMonth() + 1;
  } catch (error) {
    throw new Error(error);
  }
};