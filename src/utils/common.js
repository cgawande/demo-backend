const path = require('path');
const bcrypt = require('bcryptjs');
const fs = require('fs');
const httpStatus = require('http-status');
const { Sequelize, Model } = require('sequelize');
const language = require('../language/index.js');
const environment = require('./environment.js');

exports.httpStatus = (status) => {
  try {
    return httpStatus[status];
  } catch (error) {
    throw new Error(error);
  }
};

exports.generateRandomString = (length) => {
  try {
    let chars = 'klmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    chars = `${chars}0123456789abcdefghij`;
    let output = '';

    for (let x = 0; x < length; x += 1) {
      const i = Math.floor(Math.random() * 62);
      output += chars.charAt(i);
    }
    return output;
  } catch (error) {
    throw new Error(error);
  }
};

exports.generateRandomInteger = (length = 8) =>
  Math.floor(10 ** (length - 1) + Math.random() * 9 * 10 ** (length - 1));

exports.generateOtp = () => {
  try {
    return environment.getEnv('NODE_ENV') === 'development'
      ? 4444
      : this.generateRandomInteger(4);
  } catch (error) {
    throw new Error(error);
  }
};

exports.generateRandomPassword = () => {
  return this.generateRandomString(8);
};

exports.generateHashPassword = async (dataString) => {
  try {
    const salt = await bcrypt.genSalt();
    return await bcrypt.hash(dataString, salt);
  } catch (error) {
    throw new Error(error);
  }
};

exports.isFileExist = (filePath) => {
  try {
    const tmpPath = path.join(path.resolve(), `${filePath}`);
    return fs.existsSync(tmpPath) || false;
  } catch (error) {
    throw new Error(error);
  }
};

exports.removeHasTag = (string) => {
  try {
    return string.replace(/^#+/i, '');
  } catch (error) {
    throw new Error(error);
  }
};
exports.validateEmail = (email) => {
  try {
    let re = '/^(([^<>()[]\\.,;:s@"]+(.[^<>()[]\\.,;:s@"]+)*)';
    re = `${re}|(".+"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/`;
    return re.test(String(email).toLowerCase());
  } catch (error) {
    throw new Error(error);
  }
};

exports.getImage = (str, defaultIcon, type, thumbImage = null) => {
  try {
    // type = type ?? 'private';
    if (str) {
      const { mediaStorage } = environment.getEnv('APP_NAME');
      const imagePathArray = str.split('/');
      const imageName = imagePathArray.pop();
      let thumbPath = path.parse(imageName);
      (thumbPath = `${thumbPath.dir}/thumb/${thumbPath.base}`),
        imagePathArray.push(thumbImage ? thumbPath : imageName);

      if (mediaStorage === 's3' && type === 'public') {
        return `${environment.getEnv('AWS_S3_BUCKET_PUBLIC_URL')}${str}`;
      }
      if (mediaStorage === 's3') {
        return `${environment.getEnv('AWS_S3_BUCKET_URL')}${str}`;
      }
      if (this.isFileExist(str)) {
        const http =
          environment.getEnv('NODE_ENV') === 'production' ? 'https' : 'http';
        // const http = 'https';
        return `${http}://${environment.getEnv(
          'SWAGGER_HOST'
        )}/${imagePathArray.join('/')}`;
      }
      return defaultIcon;
    }
    return defaultIcon;
  } catch (error) {
    throw new Error(error);
  }
};

exports.getMessage = (req, data, key) => {
  try {
    let languageCode = req.headers && req.headers.language;
    languageCode = languageCode || 'en';
    const condition = language[languageCode] && language.en[`${key}`];
    if (data) {
      return condition ? language[languageCode][`${key}`](data) : key;
    }
    return condition ? language[languageCode][`${key}`] : key;
  } catch (error) {
    throw new Error(error);
  }
};

exports.getUniqueId = (length, userId) => {
  try {
    return this.generateRandomInteger(length) + Date.now() + userId;
  } catch (error) {
    throw new Error(error);
  }
};

exports.jsonToString = (obj = {}) => {
  try {
    if (obj && typeof obj === 'object' && Object.keys(obj).length !== 0) {
      return JSON.stringify(obj);
    }
    return Object.keys(obj).length === 0 ? String(obj) : obj;
  } catch (error) {
    throw new Error(error);
  }
};

exports.jsonToParse = (obj = '') => {
  try {
    if (obj && typeof obj === 'string') {
      return JSON.parse(obj);
    }
    return obj ?? {};
  } catch (error) {
    throw new Error(error);
  }
};

module.exports.schemaValueGet = (value, schema) => {
  try {
    const final = [];
    value.forEach((e) => final.push({ [e]: schema[e] }));
    return Object.assign(...final);
  } catch (error) {
    throw new Error(error);
  }
};

module.exports.optionalFieldGet = (body) => {
  try {
    if (!Array.isArray(body) && typeof body != 'object') return body;
    return Object.keys(body).reduce(
      (acc, key) => {
        acc[key] = body[key] === '' ? null : body[key];
        return acc;
      },
      Array.isArray(body) ? [] : {}
    );
  } catch (error) {
    throw new Error(error);
  }
};

module.exports.dataTrim = (body) => {
  try {
    if (!Array.isArray(body) && typeof body != 'object') return body;
    return Object.keys(body).reduce(
      (acc, key) => {
        acc[key.trim()] =
          typeof body[key] == 'string' ? body[key].trim() : body[key];
        return acc;
      },
      Array.isArray(body) ? [] : {}
    );
  } catch (error) {
    throw new Error(error);
  }
};

module.exports.modifyDataKey = (body) => {
  if (!Array.isArray(body) && typeof body != 'object') return body;
  const finalArr = body.map((element) => {
    return Object.keys(element).reduce(
      (acc, key) => {
        acc[key.trim().split(' ').join('').toLowerCase()] = element[key];
        return acc;
      },
      Array.isArray(body) ? [] : {}
    );
  });
  return finalArr;
};

module.exports.pagination = async (limit, offset) => {
  try {
    const { GeneralSetting } = require('../v1/models/index.js');
    const generalSettingResult = await GeneralSetting.scope(
      'notDeletedGeneralSetting'
    ).findOne({
      where: { key: 'display_record_per_page_admin_panel' },
    });
    const optionalLimit = generalSettingResult?.value
      ? parseInt(generalSettingResult?.value)
      : 10;
    return {
      col: 'id',
      distinct: true,
      hooks: false,
      limit: parseInt(Math.abs(limit), 10) || optionalLimit,
      offset: parseInt(Math.abs(offset), 10) || 0,
    };
  } catch (error) {
    throw new Error(error);
  }
};

module.exports.anyValueColumn = (column, alise) => {
  try {
    if (environment.getEnv('NODE_ENV') === 'production') {
      return [Sequelize.fn('ANY_VALUE', Sequelize.col(column)), alise];
    }
    return Sequelize.col(column);
  } catch (error) {
    throw new Error(error);
  }
};

module.exports.modifyDataKey = (body) => {
  try {
    if (!Array.isArray(body) && typeof body != 'object') return body;
    const finalArr = body.map((element) => {
      return Object.keys(element).reduce(
        (acc, key) => {
          acc[key.trim().split(' ').join('').toLowerCase()] = element[key];
          return acc;
        },
        Array.isArray(body) ? [] : {}
      );
    });
    return finalArr;
  } catch (error) {
    throw new Error(error);
  }
};

module.exports.modifyDataKeyInCamelCase = (body) => {
  try {
    if (!Array.isArray(body) && typeof body != 'object') return body;
    const finalArr = body.map((element) => {
      return Object.keys(element).reduce(
        (acc, key) => {
          let out = '';
          const data = key.split(' ').map((el, idx) => {
            let add = el.toLowerCase();
            out += idx === 0 ? add : add[0].toUpperCase() + add.slice(1);
            return out;
          });
          acc[data[data.length - 1]] = element[key];
          return { ...acc };
        },
        Array.isArray(body) ? [] : {}
      );
    });
    return finalArr;
  } catch (error) {
    throw new Error(error);
  }
};

module.exports.convertArrayToString = (arrayData, secondArrayData = []) => {
  try {
    if (Array.isArray(arrayData)) {
      let result = String(arrayData)
        ?.replace('[', '')
        ?.replace(']', '')
        ?.trim();
      if (secondArrayData) {
        result = [
          ...result,
          ...String(secondArrayData)
            ?.replace('[', '')
            ?.replace(']', '')
            ?.trim(),
        ];
      }
      return result;
    }
    return arrayData;
  } catch (error) {
    throw new Error(error);
  }
};
