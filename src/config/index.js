const path = require('path');
const utils = require('../utils/index.js');

module.exports = {
  app: {
    name: utils.getEnv('APP_NAME'),
    baseUrl: utils.getEnv('BASE_URL'),
    siteName: utils.getEnv('APP_NAME'),
    cronEnv: utils.getEnv('CRON_ENV'),
    siteEmail: '',
    isPushNotification: true,
    dateFormat: 'YYYY-MM-DD',
    mediaStorage: utils.getEnv('MEDIA_STORAGE'), // local, s3
    mediaUploadSizeLimit: 1024 * 1024 * 25,
    adminUrl: utils.getEnv('ADMIN_URL'),
    environment: utils.getEnv('NODE_ENV'),
    swaggerHost: utils.getEnv('SWAGGER_HOST'),
    cryptrSecretKey: utils.getEnv('CRYPTR_SECRET'),
    languages: ['en'],
    setBaseUrl(url) {
      this.baseUrl = url;
    },
    defaultPaginationSize: 10,
    maxPaginationAllowSize: 100,
    mailServer: utils.getEnv('MAIL_ENV'),
    bookingTimeout: 4000,
  },
  jwtSecret: utils.getEnv('JWT_SECRET'),
  jwtExpireIn: utils.getEnv('JWT_EXPIRE_IN'),
  userLoginCount: utils.getEnv('USER_LOGIN_COUNT') ?? 3,
  aws: {
    bucketPrefix: utils.getEnv('AWS_BUCKET_PREFIX'),
    bucketName: utils.getEnv('AWS_BUCKET_NAME'),
    accessKeyId: utils.getEnv('AWS_ACCESS_KEY_ID'),
    secretAccessKey: utils.getEnv('AWS_SECRET_ACCESS_KEY'),
    s3BucketUrl: utils.getEnv('AWS_S3_BUCKET_URL'),
    region: utils.getEnv('AWS_REGION'),
  },
  firebase: {
    domainUriPrefix: utils.getEnv('DOMAIN_URI_PREFIX'),
    dynamicLink: utils.getEnv('DYNAMIC_LINK'),
    androidPackageName: utils.getEnv('ANDROID_PACKAGE_NAME'),
    androidFallbackLink: utils.getEnv('ANDROID_FALLBACK_LINK'),
    iosBundleId: utils.getEnv('IOS_BUNDLE_ID'),
    // desktopFallbackLink:  utils.getEnv('DESKTOP_FALLBACK_LINK'),
    passwordToken: utils.getEnv('RESET_PASSWORD_TOKEN'),
  },
  google: {
    project_id: utils.getEnv('FIREBASE_PROJECT_ID'),
    serviceAccountKey: path.join(__dirname, 'google', 'firebase-service.json'),
    projectId: utils.getEnv('FIREBASE_PROJECT_ID'),
    apiKey: utils.getEnv('GOOGLE_API_KEY'),
    googleApiUrl: utils.getEnv('GOOGLE_API_URL'),
    managerCustomerId: utils.getEnv('MANAGER_CUSTOMER_ID'),
    googleAccount: utils.getEnv('ACCOUNT'),
    googleDeveloperToken: utils.getEnv('DEVELOPER_TOKEN'),

    googleProjectId: utils.getEnv('GOOGLE_PROJECT_ID'),
    zendeskChatKey: utils.getEnv('ZENDESK_CHAT_KEY'),
    zillowKey: utils.getEnv('ZILLOW_KEY'),
    googleServerKey: utils.getEnv('GOOGLE_SERVER_KEY'),
    googlePushNotificationKey: utils.getEnv('GOOGLE_PUSH_NOTIFICATION_KEY'),
    bitlyShortUrl: utils.getEnv('BITLY_SHORT_URL'),

    googleClientId: utils.getEnv('GOOGLE_CLIENT_ID'),
    googleClientSecret: utils.getEnv('GOOGLE_CLIENT_SECRET'),
    googleRedirectUrl: utils.getEnv('GOOGLE_REDIRECT_URL'),
    googleDeveloperToken: utils.getEnv('GOOGLE_DEVELOPER_TOKEN'),
    googleManagerCustomerId: utils.getEnv('GOOGLE_MANAGER_CUSTOMER_ID'),
  },
  sendGrid: {
    skdSendGrid: utils.getEnv('SEND_GRID_SKD'),
    email: utils.getEnv('SEND_GRID_FROM_EMAIL'),
  },
};
