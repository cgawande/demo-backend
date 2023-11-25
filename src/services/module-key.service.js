const moduleKey = {
  ADMIN: {
    key: 'admin',
    slug: '/admin',
  },
  DASHBOARD: {
    key: 'dashboard',
    slug: '/admin/dashboard',
  },
  NOTIFICATION: {
    key: 'notifications',
    slug: '/notification',
  },
  ADMIN_NOTIFICATION: {
    key: 'notifications',
    slug: '/admin/notification',
  },
  ADMIN_NOTIFICATION_LIST: {
    key: 'notifications',
    slug: '/admin/notification',
  },
  NCA_DEFAULT_ROLE: {
    key: 'roles',
    slug: '/nca/default-role',
  },
  MANAGE_ROLE: {
    key: 'roles',
    slug: '/admin/role',
    CHILD: {
      MASTER_MODULES: { key: 'master-modules', slug: '/admin/master-modules' },
      GET_PERMISSIONS: {
        key: 'get-permissions',
        slug: '/admin/get-permissions',
      },
    },
  },
  MANAGE_PERMISSION: {
    key: 'permission',
    slug: '/admin/permission',
  },
  MANAGE_ROLE_PERMISSION: {
    key: 'role-permission',
    slug: '/admin/role-permission',
  },
  MASTER_COUNTRY: {
    key: 'country',
    slug: '/admin/country',
  },
  COUNTRY: {
    key: 'country',
    slug: '/country',
  },
  MASTER_STATE: {
    key: 'state',
    slug: '/admin/state',
  },
  STATE: {
    key: 'state',
    slug: '/state',
  },
  MASTER_CITY: {
    key: 'city',
    slug: '/admin/city',
  },
  CITY: {
    key: 'city',
    slug: '/city',
  },
  /**
   * Media uploader
   */
  MEDIA_UPLOAD: {
    key: 'media-upload',
    slug: '/media/upload/:mediaFor',
  },
  MEDIA_UPLOAD_USED: {
    key: 'media-upload',
    slug: '/media/upload-used/:mediaFor',
  },
  PUBLIC_MEDIA_UPLOAD: {
    key: 'public-media-upload',
    slug: '/public/media/upload/:mediaFor',
  },
  USER: {
    key: 'user',
    slug: '/signup',
    multiple: true,
  },
  USER_LOGIN: {
    key: 'user_login',
    slug: '/login',
    multiple: true,
  },
  USER_BLOG_LOGIN: {
    key: 'user_blog_login',
    slug: '/user/blog/login',
    multiple: true,
  },
  USER_BlOG_LOGOUT: {
    key: 'user_blog_logout',
    slug: '/user/blog/logout',
    multiple: true,
  },
  USER_BLOG_ADD: {
    key: 'user_blog_add',
    slug: '/user/blog/add',
    multiple: true,
  },
  USER_BLOG_SEARCH: {
    key: 'user_blog_search',
    slug: '/user/blog/search',
    multiple: true,
  },
  USER_BLOG_UD: {
    key: 'user_blog_ud',
    slug: '/user/blog/:blogId',
    multiple: true,
  },
  ARTICALE_ADD: {
    key: 'user_articles_add',
    slug: '/user/artical/add',
    multiple: true,
  },
  TAG_ADD: {
    key: 'user_tag_add',
    slug: '/user/tag/create',
    multiple: true,
  },

  ARTICALE_LIST: {
    key: 'user_articles_list',
    slug: '/user/artical/list',
    multiple: true,
  },
  ADMIN_LOGIN: {
    key: 'admin-login',
    slug: '/admin/login',
    CHILD: {
      SIGNUP: { slug: '/signup', key: 'signup' },
      LOGIN: { slug: '/login', key: 'login' },
    },
  },
  UPDATE_PROFILE: { slug: '/update-profile', key: 'update-profile' },

  LOGOUT: {
    key: 'logout',
    slug: '/logout',
  },
  CHANGE_PASSWORD: {
    key: 'change-password',
    slug: '/change-password',
  },
  FORGOT_PASSWORD: {
    key: 'forgot-password',
    slug: '/forgot-password',
  },
  RESET_PASSWORD: {
    key: 'reset-password',
    slug: '/reset-password',
  },
  ACCOUNT_ME: {
    key: 'account-me',
    slug: '/account/me',
  },
  WINSTON_LOG: {
    key: 'winston-log',
    slug: '/winston-logs',
  },
  INDUSTRY: {
    key: 'industry',
    slug: '/industry',
  },
  ADMIN_INDUSTRY: {
    key: 'admin-industry',
    slug: '/admin/industry',
  },
  WINSTON_FILE: {
    key: 'winston-file',
    slug: '/winston-files',
  },
  ADMIN_CUSTOMER: {
    key: 'customers',
    slug: '/admin/customer',
  },
  ADMIN_CUSTOMER_CUSTOMER_TAG: {
    key: 'customers',
    slug: '/admin/customer/customer-tag',
  },
  ADMIN_CUSTOMER_JOB_TAG: {
    key: 'customers',
    slug: '/admin/customer/job-tag',
  },
  CUSTOMER: {
    key: 'customers',
    slug: '/customer',
  },
  PAGE: {
    key: 'pages',
    slug: '/page',
  },
  ADMIN_PAGE: {
    key: 'pages',
    slug: '/admin/page',
  },
  NCA_PAGE: {
    key: 'pages',
    slug: '/nca/page',
  },
  NCA_PAGE_PERMISSION: {
    key: 'nca-page-permission',
    slug: '/nca/page-permission',
  },
  FAQ: {
    key: 'faq',
    slug: '/faq',
  },
  ADMIN_FAQ: {
    key: 'faq',
    slug: '/admin/faq',
  },
  BANNER: {
    key: 'banner',
    slug: '/banner',
  },
  ADMIN_BANNER: {
    key: 'banner',
    slug: '/admin/banner',
  },
  DOCUMENT: {
    key: 'manage-documents',
    slug: '/document',
  },
  ADMIN_DOCUMENT: {
    key: 'manage-documents',
    slug: '/admin/document',
  },
  TAG: {
    key: 'tags',
    slug: '/tag',
  },
  ADMIN_TAG: {
    key: 'tags',
    slug: '/admin/tag',
  },
  BOOKING_TAG: {
    key: 'tags',
    slug: '/booking/tag',
  },
  BOOKING_TAG_MASTER: {
    key: 'tags',
    slug: '/booking/tag/master',
  },
  GEO_FENCE_LOCATION: {
    key: 'geo-fence-location',
    slug: '/admin/geo-fence-location',
  },
  GEO_FENCE_LOCATION_INDEPENDENT: {
    key: 'geo-fence-location',
    slug: '/geo-fence-location',
  },
  ADMIN_NCA_GEO_FENCE_LOCATION: {
    key: 'geo-fence-location',
    slug: '/admin/nca/geo-fence-location',
  },
  NCA_GEO_FENCE_LOCATION: {
    key: 'geo-fence-location',
    slug: '/nca/geo-fence-location',
  },
  SUB_ADMIN: {
    key: 'sub-admin',
    slug: '/admin/sub-admin',
  },
  QUOTE_INFORMATION: {
    key: 'quote-information',
    slug: '/quote-information',
  },
  ADMIN_QUOTE_INFORMATION: {
    key: 'quote-information',
    slug: '/admin/quote-information',
  },
  ADMIN_IMPORTANT_INFORMATION: {
    key: 'information',
    slug: '/admin/important-information',
  },
  IMPORTANT_INFORMATION: {
    key: 'information',
    slug: '/admin/important-information',
  },
  ADMIN_APP_TEXT: {
    key: 'app-text',
    slug: '/admin/app-text',
  },
  APP_TEXT: {
    key: 'app-text',
    slug: '/app-text',
  },
  TIP: {
    key: 'tips',
    slug: '/tip',
  },
  ADMIN_TIP: {
    key: 'tips',
    slug: '/admin/tip',
  },
  SERVICE_CATEGORY: {
    key: 'service-category',
    slug: '/admin/service-category',
  },
  CUSTOMER_SERVICE_CATEGORY: {
    key: 'service-category',
    slug: '/service-category',
  },
  SERVICE_SUBCATEGORY: {
    key: 'service-category',
    slug: '/admin/service-subcategory',
  },
  CUSTOMER_SERVICE_SUBCATEGORY: {
    key: 'service-category',
    slug: '/service-subcategory',
  },
  SERVICE_TYPE: {
    key: 'services',
    slug: '/admin/service-type',
  },
  ADMIN_WILL_CALL_LIST: {
    key: 'will-call-list',
    slug: '/admin/will-call-list',
  },
  WILL_CALL_LIST: {
    key: 'will-call-list',
    slug: '/will-call-list',
  },
  HOME_CONTENT: {
    key: 'home-content',
    slug: '/admin/home-content',
  },
  FINANCING_INFORMATION: {
    key: 'financing',
    slug: '/financing-information',
  },
  ADMIN_FINANCING_INFORMATION: {
    key: 'financing',
    slug: '/admin/financing-information',
  },
  GENERAL_SETTING: {
    key: 'general',
    slug: '/general-setting',
  },
  ADMIN_GENERAL_SETTING: {
    key: 'general',
    slug: '/admin/general-setting',
  },
  SLOT: {
    key: 'slot',
    slug: '/slot',
  },
  NCA_GENERAL_SETTING: {
    key: 'general',
    slug: '/nca/general-setting',
  },
  ADMIN_SLOT: {
    key: 'slot',
    slug: '/admin/slot',
  },
  QUERY: {
    key: 'admin-query',
    slug: '/admin/query-run',
  },
  NOTIFICATION_TEMPLATE: {
    key: 'notification-templates',
    slug: '/admin/notification-template',
  },
  ADDRESS: {
    key: 'address',
    slug: '/address',
  },
  ADMIN_ADDRESS: {
    key: 'admin-address',
    slug: '/admin/address',
  },
  PROVIDER_ADDRESS: {
    key: 'admin-address',
    slug: '/provider/booking/address',
  },
  PROVIDER: {
    key: 'provider',
    slug: '/provider',
  },
  ADMIN_PROVIDER: {
    key: 'provider',
    slug: '/admin/provider',
  },
  STORE: {
    key: 'store',
    slug: '/store',
  },
  ADMIN_STORE: {
    key: 'store',
    slug: '/admin/store',
  },
  PROMO_CODE: {
    key: 'promo-code',
    slug: '/admin/promo-code',
  },
  CUSTOMER_PROMO_CODE: {
    key: 'promo-code',
    slug: '/customer/promo-code',
  },
  STORE_PROMO_CODE: {
    key: 'promo-code',
    slug: '/store/promo-code',
  },
  LINE_ITEM: {
    key: 'line-items',
    slug: '/admin/line-item',
  },
  CUSTOMER_LINE_ITEM: {
    key: 'line-items',
    slug: '/line-item',
  },
  PROVIDER_LINE_ITEM: {
    key: 'line-items',
    slug: '/provider/line-item',
  },
  FINANCING_BANK: {
    key: 'financing-bank',
    slug: '/admin/financing-bank',
  },
  FINANCING_OPTION: {
    key: 'financing-option',
    slug: '/admin/financing-option',
  },
  CUSTOMER_FINANCING_OPTION: {
    key: 'financing-option',
    slug: '/financing-option',
  },
  PROVIDER_FINANCING_OPTION: {
    key: 'financing-option',
    slug: '/provider/financing-option',
  },
  CONTACT_FORM: {
    key: 'contact-form',
    slug: '/contact-form',
  },
  CONTACT_US: {
    key: 'contact-us',
    slug: '/contact-us',
  },
  CUSTOMER_CARD: {
    key: 'customer-card',
    slug: '/customer/card',
  },
  WORK_LOCATION: {
    key: 'work-location',
    slug: '/work-location',
  },
  NOTES: {
    key: 'notes',
    slug: '/notes',
  },
  BANK: {
    key: 'bank',
    slug: '/bank',
  },
  ADMIN_BANK: {
    key: 'bank',
    slug: '/admin/bank',
  },
  LESSON: {
    key: 'operating-procedure',
    slug: '/admin/lesson',
  },
  PROVIDER_LESSON: {
    key: 'operating-procedure',
    slug: '/provider/lesson',
  },
  SUB_ADMIN_LESSON: {
    key: 'operating-procedure',
    slug: '/sub-admin/lesson',
  },
  EMAIL_TEMPLATE: {
    key: 'email-templates',
    slug: '/admin/email-template',
  },
  NCA_EMAIL_TEMPLATE: {
    key: 'email-templates',
    slug: '/nca/email-template',
  },
  SMS_TEMPLATE: {
    key: 'sms-templates',
    slug: '/admin/sms-template',
  },
  NCA_SMS_TEMPLATE: {
    key: 'sms-templates',
    slug: '/nca/sms-template',
  },
  AMOUNT_CALCULATION_FORMULA: {
    key: 'amount-calculation',
    slug: '/admin/amount-calculation-formula',
  },
  DISCOUNT: {
    key: 'discount',
    slug: '/admin/discount',
  },
  QUOTE_OPTIONAL_ITEM: {
    key: 'optional-items',
    slug: '/admin/quote-optional-item',
  },
  ADMIN_QUOTE: {
    key: 'quote-system',
    slug: '/admin/quote',
  },
  QUOTE: {
    key: 'quote-system',
    slug: '/quote',
  },
  BULK_UPLOAD_DATA: {
    key: 'upload-bulk-data',
    slug: '/admin/quote',
  },
  QUOTE_ORDER_ADMIN_PROFIT: {
    key: 'quote-order-admin-profit',
    slug: '/admin/quote-order-admin-profit',
  },
  EQUIPMENT_LOCATION: {
    key: 'supply-house-location',
    slug: '/admin/equipment-location',
  },
  EQUIPMENT_SERVICE_PROVIDER: {
    key: 'service-provider',
    slug: '/provider/service-provider',
  },
  PROVIDER_EQUIPMENT_LOCATION: {
    key: 'supply-house-location',
    slug: '/provider/equipment-location',
  },
  PROVIDER_ORDER_LOCATION: {
    key: 'truck-stock-ordering',
    slug: '/provider/truck-stock/order-location',
  },
  REBATE: {
    key: 'rebate',
    slug: '/admin/rebate',
  },
  ADMIN_NCA: {
    key: 'nca',
    slug: '/admin/nca',
  },
  NCA: {
    key: 'nca',
    slug: '/nca',
  },
  ADMIN_NCA_SERVICE_CATEGORY: {
    key: 'service-category',
    slug: '/admin/nca/service-category',
  },
  TRUCK_STOCK_ORDER: {
    key: 'truck-stock-ordering',
    slug: '/admin/truck-stock-order',
  },
  PROVIDER_TRUCK_STOCK_ORDER: {
    key: 'truck-stock-ordering',
    slug: '/provider/truck-stock-order',
  },
  WEB_TERM_CONDITION: {
    key: 'term-condition',
    slug: '/term-condition',
  },
  WEB_PRIVACY_POLICY: {
    key: 'privacy-policy',
    slug: '/privacy-policy',
  },
  WEB_TIP_MONTH: {
    key: 'tip-month',
    slug: '/tip-month',
  },
  WEB_IMPORTANT_INFORMATION: {
    key: 'important-information',
    slug: '/important-information',
  },
  WEB_FINANCING_INFORMATION: {
    key: 'financing-information',
    slug: '/financing-information',
  },
  WEB_QUOTE_INFORMATION: {
    key: 'quote-information',
    slug: '/quote-information',
  },
  WEB_ABOUT_US: {
    key: 'about-us',
    slug: '/about-us',
  },
  WEB_HOW_IT_WORKS: {
    key: 'how-it-works',
    slug: '/how-it-works',
  },
  CHAT_ROOM: {
    key: 'chat-room',
    slug: '/chat-room',
  },
  CUSTOMER_BOOKING: {
    key: 'booking',
    slug: '/customer/booking',
  },
  CUSTOMER_BOOKING_DETAILS: {
    key: 'booking',
    slug: '/customer/booking/:bookingId',
  },
  PROVIDER_BOOKING_REBATE: {
    key: 'booking',
    slug: '/provider/booking/rebate/:bookingId',
  },
  PROVIDER_BOOKING_DISCOUNT: {
    key: 'booking',
    slug: '/provider/booking/discount',
  },
  PROVIDER_BOOKING_PROPERTY: {
    key: 'booking',
    slug: '/provider/booking-property/:bookingId',
  },
  PROVIDER_JOBS: {
    key: 'booking',
    slug: '/provider/jobs/:userId',
  },
  PROVIDER_BOOKING_DETAILS: {
    key: 'booking',
    slug: '/provider/booking/:bookingId',
  },
  PROVIDER_BOOKING_INVOICE_DETAILS: {
    key: 'booking',
    slug: '/provider/booking/invoice/:bookingId',
  },
  CUSTOMER_EMERGENCY_BOOKING: {
    key: 'booking',
    slug: '/customer/emergency-free/booking',
  },

  ADMIN_MANUAL_BOOKING: {
    key: 'manual-bookings',
    slug: '/admin/customer/manual-booking',
  },
  CUSTOMER_EMERGENCY_BOOKING_ALL: {
    key: 'booking',
    slug: '/customer/emergency/booking/all',
  },
  PROVIDER_BOOKINGS: {
    key: 'booking',
    slug: '/provider/bookings',
  },
  PROVIDER_BOOKING_RECIPIENT: {
    key: 'booking',
    slug: '/provider/bookings/receipt/:bookingId',
  },
  CUSTOMER_BOOKING_RECIPIENT: {
    key: 'booking',
    slug: '/customer/bookings/receipt/:bookingId',
  },
  ADMIN_BOOKING_RECIPIENT: {
    key: 'service-management',
    slug: '/admin/bookings/receipt/:bookingId',
  },
  ADMIN_BOOKING_DELETE: {
    key: 'service-management',
    slug: '/admin/delete-booking',
  },
  ADMIN_EQUIPMENT_ORDER: {
    key: 'equipment-order',
    slug: '/admin/equipment-order',
  },
  PROVIDER_BOOKING_TAG: {
    key: 'booking',
    slug: '/provider/bookings/tag/:bookingId',
  },
  ACCEPT_PROVIDER_BOOKING: {
    key: 'booking',
    slug: '/provider/booking/accept/:bookingId',
  },
  BEGIN_PROVIDER_BOOKING: {
    key: 'booking',
    slug: '/provider/booking/begin/:bookingId',
  },
  ARRIVED_PROVIDER_BOOKING: {
    key: 'booking',
    slug: '/provider/booking/arrived/:bookingId',
  },
  STARTED_PROVIDER_BOOKING: {
    key: 'booking',
    slug: '/provider/booking/started/:bookingId',
  },
  DECLINE_PROVIDER_BOOKINGS: {
    key: 'booking',
    slug: '/provider/bookings/decline/:bookingId',
  },
  DECLINE_PROVIDER_BOOKINGS_QUOTE: {
    key: 'booking',
    slug: '/provider/booking-quote/decline/:bookingId',
  },
  CANCEL_PROVIDER_BOOKINGS: {
    key: 'booking',
    slug: '/provider/bookings/cancel/:bookingId',
  },
  CUSTOMER_DECLINE_BOOKINGS: {
    key: 'booking',
    slug: '/customer/bookings/decline/:bookingId',
  },
  CUSTOMER_DECLINE_BOOKINGS_QUOTE: {
    key: 'booking',
    slug: '/customer/booking-quote/decline/:bookingId',
  },
  CUSTOMER_CANCEL_BOOKINGS: {
    key: 'booking',
    slug: '/customer/bookings/cancel/:bookingId',
  },
  CREATE_QUOTE: {
    key: 'booking',
    slug: '/provider/booking/quote',
  },
  CREATE_BOOKING_CUSTOMER_BEHALF: {
    key: 'booking',
    slug: '/provider/booking/customer',
  },
  GET_QUOTE: {
    key: 'booking',
    slug: '/customer/booking/quote',
  },
  ACCEPT_QUOTE: {
    key: 'booking',
    slug: '/customer/booking/quote/accept/:bookingId',
  },
  PROVIDER_ACCEPT_OLD_QUOTE: {
    key: 'booking',
    slug: '/provider/booking/old-quote/accept/:bookingId',
  },
  PROVIDER_ACCEPT_QUOTE: {
    key: 'booking',
    slug: '/provider/booking/quote/accept/:bookingId',
  },
  BUILD_INVOICE: {
    key: 'booking',
    slug: '/provider/booking/build-invoice',
  },
  BOOKING_PAYMENT_REQUEST: {
    key: 'booking',
    slug: '/provider/booking/payment-request',
  },
  EQUIPMENT_LIST: {
    key: 'booking',
    slug: '/provider/booking/equipment',
  },
  BRAND_LIST: {
    key: 'booking',
    slug: '/provider/booking/brand',
  },
  BRAND_ATTRIBUTES: {
    key: 'booking',
    slug: '/provider/booking/attributes/:bookingId/:brand',
  },
  CREATE_NEW_QUOTE: {
    key: 'booking',
    slug: '/provider/booking/new-quote',
  },
  MATERIAL_LIST: {
    key: 'booking',
    slug: '/provider/booking/material/:bookingId/:brandName',
  },
  CREATE_NEW_QUOTE: {
    key: 'booking',
    slug: '/provider/booking/new-quote/:bookingId',
  },
  DELETE_NEW_QUOTE: {
    key: 'booking',
    slug: '/provider/booking/new-quote/:bookingId/:id',
  },
  CREATE_NEW_QUOTE_MATERIAL: {
    key: 'booking',
    slug: '/provider/booking/material/:bookingId',
  },
  CREATE_NEW_LINE_ITEM: {
    key: 'booking',
    slug: '/provider/booking/line-item/:bookingId',
  },
  UPDATE_NEW_LINE_ITEM: {
    key: 'booking',
    slug: '/provider/booking/line-item/:bookingId/:id',
  },
  CREATE_NEW_OPTIONAL_ITEM: {
    key: 'booking',
    slug: '/provider/booking/optional-item/:bookingId',
  },
  UPDATE_NEW_OPTIONAL_ITEM: {
    key: 'booking',
    slug: '/provider/booking/optional-item/:bookingId/:id',
  },
  CREATE_NEW_OTHER_EQUIPMENT: {
    key: 'booking',
    slug: '/provider/booking/other-equipment/:bookingId',
  },
  UPDATE_NEW_OTHER_EQUIPMENT: {
    key: 'booking',
    slug: '/provider/booking/other-equipment/:bookingId/:id',
  },
  DELETE_NEW_OTHER_EQUIPMENT: {
    key: 'booking',
    slug: '/provider/booking/other-equipment/:id',
  },
  DELETE_NEW_OPTIONAL_ITEM: {
    key: 'booking',
    slug: '/provider/booking/optional-item/:id',
  },
  DELETE_BOOKING_LINE_ITEM: {
    key: 'booking',
    slug: '/provider/booking/line-item/:id',
  },
  DELETE_BOOKING_FINANCING: {
    key: 'booking',
    slug: '/provider/booking/financing/:id',
  },
  UPDATE_BOOKING_QUOTE: {
    key: 'booking',
    slug: '/provider/booking/save-quote/:bookingId',
  },
  BOOKING_PAYMENT_CREDIT: {
    key: 'booking',
    slug: '/provider/booking/payment-credit',
  },
  BOOKING_PAYMENT_CASH: {
    key: 'booking',
    slug: '/provider/booking/payment-cash',
  },
  BOOKING_PAYMENT_ADMIN: {
    key: 'booking',
    slug: '/provider/booking/payment-admin',
  },
  BOOKING_PAYMENT_CHECK: {
    key: 'booking',
    slug: '/provider/booking/payment-check',
  },
  BOOKING_PAYMENT_FINANCING: {
    key: 'booking',
    slug: '/provider/booking/payment-financing',
  },
  EQUIPMENT_PERMIT: {
    key: 'booking',
    slug: '/provider/booking/equipment-permit/:bookingId',
  },
  BOOKING_FINANCING: {
    key: 'booking',
    slug: '/provider/booking/financing/:bookingId',
  },
  CREATE_BOOKING_FINANCING: {
    key: 'booking',
    slug: '/provider/booking/financing-option/:bookingId',
  },
  BOOKING_OPTION_STATUS: {
    key: 'booking',
    slug: '/provider/booking/option-status/:bookingId',
  },
  SEND_QUOTE: {
    key: 'booking',
    slug: '/provider/booking/send/:bookingId',
  },

  BOOKING_REVIEW_CUSTOMER: {
    key: 'booking',
    slug: '/customer/booking-review',
  },
  BOOKING_REVIEW_PROVIDER: {
    key: 'booking',
    slug: '/provider/booking-review',
  },

  ADMIN_REVIEW_CUSTOMER: {
    key: 'booking',
    slug: '/admin/customer-review',
  },
  ADMIN_REVIEW_PROVIDER: {
    key: 'booking',
    slug: '/admin/provider-review',
  },
  BOOKING_REVIEW_LIST: {
    key: 'booking',
    slug: '/booking-review',
  },
  BOOKING_REVIEW_DETAIL: {
    key: 'booking',
    slug: '/booking-review/:id',
  },
  CUSTOMER_BOOKING_PAYMENT_CREDIT: {
    key: 'booking',
    slug: '/customer/booking/payment-credit',
  },
  PROVIDER_SAVE_ALL_EQUIPMENT: {
    key: 'booking',
    slug: '/provider/booking/save-equipment/:bookingId',
  },
  GET_NEW_QUOTE_EQUIPMENT: {
    key: 'booking',
    slug: '/provider/booking/equipment-list/:bookingId',
  },
  GET_BOOKING_QUOTE: {
    key: 'booking',
    slug: '/provider/booking/quote/:bookingId',
  },
  GET_OPTION_FOR_NEW_QUOTE: {
    key: 'booking',
    slug: '/provider/booking/option/:bookingId',
  },
  CREATE_QUOTE_DISCOUNT: {
    key: 'booking',
    slug: '/provider/booking/discount/:bookingId',
  },
  PROVIDER_DASHBOARD: {
    key: 'booking',
    slug: '/provider/dashboard',
  },
  ADMIN_HOME_INVENTORY: {
    key: 'home-inventory',
    slug: '/admin/home-inventory',
  },
  PROVIDER_HOME_INVENTORY: {
    key: 'home-inventory',
    slug: '/provider/equipment',
  },
  CUSTOMER_BOOKING_SUMMERY: {
    key: 'booking',
    slug: '/customer/booking-summary/:bookingId',
  },
  PROVIDER_BOOKING_SUMMERY: {
    key: 'booking',
    slug: '/provider/booking-summary/:bookingId',
  },
  SAVE_OPTION_STATUS: {
    key: 'booking',
    slug: '/provider/option/:bookingId',
  },
  CUSTOMER_SAVE_OPTION: {
    key: 'booking',
    slug: '/customer/option/:bookingId',
  },
  CUSTOMER_LIST_OPTION: {
    key: 'booking',
    slug: '/customer/option/:bookingId',
  },
  ADMIN_LIST_OPTION: {
    key: 'booking',
    slug: '/admin/option/:bookingId',
  },
  BOOKING_REVIEW: {
    key: 'booking',
    slug: '/booking/booking-review/:id',
  },

  ADMIN_SERVICE_MANAGEMENT: {
    key: 'service-management',
    slug: '/admin/service-management',
  },
  ADMIN_CUSTOMER_BOOKING: {
    key: 'booking',
    slug: '/admin/customer/booking/:userId',
  },
  ADMIN_SCHEDULED_BOOKING: {
    key: 'booking',
    slug: '/admin/schedule-booking',
  },
  APPROVED_OPEN_REQUEST_LIST: {
    key: 'booking',
    slug: '/provider/approve-open-request',
  },
  PROVIDER_BEGIN_SUBMIT_QUOTE_BOOKINGS: {
    key: 'booking',
    slug: '/provider/begin-submit-quote-bookings',
  },
  GET_NAC_PENDING_APPROVAL_BOOKINGS: {
    key: 'booking',
    slug: '/provider/nca-approval',
  },
  GET_NCA_APPROVAL_BOOKINGS: {
    key: 'booking',
    slug: '/provider/nca-pending-approval',
  },
  ADMIN_UNACCEPTED_REQUESTS: {
    key: 'requests',
    slug: '/admin/unaccepted-request',
  },
  PROVIDER_BOOKING_PENDING_PAYMENT: {
    key: 'booking',
    slug: '/provider/booking/pending/payment',
  },
  SEND_JOB_TO_NAC: {
    key: 'requests',
    slug: '/provider/send-nac/:bookingId',
  },
  RESCHEDULE_JOB: {
    key: 'requests',
    slug: '/provider/reschedule/:bookingId',
  },
  UPDATE_RESCHEDULE_JOB: {
    key: 'requests',
    slug: '/provider/reschedule-note/:bookingId',
  },
  BOOKING_INVOICE: {
    key: 'booking',
    slug: '/booking/invoice/:bookingId',
  },
  PROVIDER_BOOKING_DECLINE: {
    key: 'booking',
    slug: '/provider/decline/booking',
  },
  PROVIDER_BOOKING_EXPIRE: {
    key: 'booking',
    slug: '/provider/expired/booking',
  },
  PROVIDER_BOOKING_TAG: {
    key: 'booking',
    slug: '/provider/bookings/tag/:bookingId',
  },
  PROVIDER_BOOKING_SERVICE_PROVIDERS: {
    key: 'booking',
    slug: '/provider/booking/service-providers/:bookingId',
  },
  WILL_CALL_LIST: {
    key: 'requests',
    slug: '/provider/will-call-list/:bookingId',
  },
  BOOKING_REMAINING_AMOUNT: {
    key: 'requests',
    slug: '/provider/booking/remaining-amount/:bookingId',
  },
  NEW_QUOTE_FINANCE_LIST: {
    key: 'booking',
    slug: '/provider/finance-bank/:bookingId',
  },
  NEW_QUOTE_DISCOUNT_LIST: {
    key: 'booking',
    slug: '/provider/discount-rebate/:bookingId',
  },
  NEW_QUOTE_DETAILS: {
    key: 'booking',
    slug: '/provider/new-quote-summary/:bookingId',
  },
  PROVIDER_SAVE_BOOKING_DISCOUNT: {
    key: 'booking',
    slug: '/provider/booking/rebate-discount/:bookingId',
  },
  ADMIN_BOOKING_LOG: {
    key: 'booking',
    slug: '/admin/booking-log/:id',
  },
  ADMIN_BOOKING_MARK_SETTLE_PAYMENT: {
    key: 'booking',
    slug: '/admin/booking/mark-settle-payment/:bookingId',
  },
  NEW_EQUIPMENT: {
    key: 'new-equipment',
    slug: '/admin/new-equipment',
  },
  EQUIPMENT_ORDER_STATUS: {
    key: 'equipment-order',
    slug: '/admin/equipment-order/order-status/:id',
  },
  NEW_EQUIPMENT_STATUS: {
    key: 'new-equipment',
    slug: '/admin/equipment/status/:id',
  },
  QUOTE_DETAILS_NEW_QUOTE: {
    key: 'new-equipment',
    slug: '/provider/new-quote/:bookingId',
  },
  REPORT: {
    key: 'report',
    slug: '/provider/report',
  },
  PROVIDER_EQUIPMENT_LIST: {
    key: 'new-equipment',
    slug: '/provider/equipment/:bookingId',
  },
  PROVIDER_EARNING: {
    key: 'earning',
    slug: '/provider/earning/:bookingId',
  },
  PROVIDER_BOOKING_QUOTE_CHECKED: {
    key: 'earning',
    slug: '/provider/quote-checked/:bookingId',
  },
  BOOKING_GRAPH: {
    key: 'report',
    slug: '/booking/graph',
  },
  STATISTICS: {
    key: 'statistics',
    slug: '/admin/statistics',
  },
};

module.exports.getModule = () => moduleKey;
