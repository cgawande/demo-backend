module.exports = {
  TO_MANY_REQUEST: 'Too many requests, please try again later.',
  PHONE_NUMBER_FORMAT: 'Should contain only numeric value 4-15 digits.',
  PHONE_NOT_FOUND: 'Mobile number not exist.',
  EMAIL_NOT_FOUND:
    'Sorry, there is no account associated with entered details. Please try with Mobile Number.',
  CURRENT_PASSWORD_MATCH: 'Old password does not match.',
  PASSWORD_NOT_MATCH: 'Passwords do not match',
  CURRENT_PASSWORD_NOT_MATCH:
    'New password should be different from your old password.',
  PASSWORD_REGEX:
    'Password should contain at least one number and one special character',
  WRONG_CREDENTIAL: 'Email or Password is Wrong',
  LOGIN_SUCCESS: 'Login successful.',
  PERMISSION_NOT_ALLOW: "NCA users don't have login permission",
  LOGOUT_SUCCESS: 'Logout successful.',
  PASSWORD_CHANGED: 'Password has been changed successfully.',
  PASSWORD_NOT_CHANGED: 'Password not changed!',
  PROFILE_UPDATED: 'Profile updated successfully.',
  PROFILE_CANNOT_UPDATED: 'Profile alert cannot updated',
  INVALID_PASSWORD: 'Old password is wrong.',
  UNAUTHORIZED_ACCESS: 'Unauthorized user access',
  SIGNUP: 'Your account has been created. Please login',
  SEND_EMAIL_VERIFICATION: 'A verification code has been sent to your email.',
  MOBILE_ALREADY_EXIST: 'Mobile number already exists.',
  INVALID_OTP: 'Verification code is wrong.',
  PHONE_EXIST: 'This number is already in use. Please enter another number.',
  EMAIL_EXIST: 'Email already exists.',
  DELETED_EMAIL_EXIST:
    'Account associated with this email is deleted. please contact admin',
  DELETED_MOBILE_ALREADY_EXIST:
    'Account associated with this mobile number is deleted. please contact admin',
  USER_NOT_FOUND: 'User not found.',
  USER_DETAIL: 'User detail.',
  INVALID_ACCESS: 'Invalid user access.',
  PASSWORD_LINK_SENT: 'Reset password link has been sent on your email.',
  PASSWORD_LINK_NOT_SENT: 'Reset link not send!',
  PASSWORD_LINK_EXPIRED:
    'It seems this link is expired or you have already changed your password.',
  CHANGE_MOBILE_OTP_SENT: 'A OTP has been sent to your mobile via SMS.',
  CHANGE_MOBILE_OTP_VERIFY: 'Mobile number verified successfully.',
  PASSWORD_MISMATCH: 'Password and confirm password not match.',
  PASSWORD_CREATED_SUCCESS: 'Password reset successfully.',
  LINK_EXPIRE: 'This reset password link has expired.',
  INTERNAL_ERROR: 'Internal Server Error',
  CUSTOMER_PASSWORD: 'test@123',
  FILE_UPLOADED: 'File uploaded successfully',
  MODULE_NOT_FOUND: 'Module not found',
  NCA_NOT_FOUND: 'NCA not found',
  COMPANY_CODE_NOT_FOUND: 'Company code not found',
  PHONE_NUMBER_MAX_LENGTH:
    'Phone number Length must be less than or equal to 14 digits only',
  ACCOUNT_DELETED: 'User account deleted successfully',
  PROMO_CODE: 'Add Promo Code',
  QUESTION: 'Have a question?',
  SUB_ADMIN_PROVIDER_LIST: 'List of providers and sub-admin given successfully',
  MOBILE_NUMBER_ALREADY_EXISTS: 'Mobile number already exist',

  //Blog messages
  BLOG_CREATED: 'Blog created successfully',
  BLOG_FOUND: 'Blog list found successfully',
  BLOG_NOT_FOUND: 'Blog not found',
  BLOG_UPDATED: 'Blog updated sucessfully',
  BLOG_NOT_UPDATED: 'Blog can not be  updated before 7 days',
  BLOG_NOT_DELETED: 'Blog can not be  deleted before 7 days',
  BLOG_NOT_UPDATED_DELETED: 'Blog can not be updated or deleted before 7 days',
  BLOG_DELETED: 'Blog deleted sucessfully',
  //Artical messages
  ARTICAL_CREATED: 'Article created successfully',
  ARTICAL_NOT_FOUND: 'Article not found',
  ARTICAL_LIST_FOUND: 'Article list fetch sucessfully',
  TAG_CREATED: 'Tag created sucessfully',
  TAG_EXIST: 'Tag is already exist',

  /**
   * Auth message
   */
  SESSION_EXPIRE: 'Your session has expired. Please login.',
  ACCOUNT_INACTIVE:
    'Your are not active, Please contact administrator to activate your account.',
  UNAUTHORIZED_USER_ACCESS: 'Unauthorized access or token required.',

  /**
   * Customer message
   */
  CUSTOMER_CREATED: 'Your account created successfully',
  CUSTOMER_UPDATED: 'Customer updated successfully',
  CUSTOMER_DELETED: 'Customer deleted successfully ',
  CUSTOMER_NOT_FOUND: 'Customer not found ',
  CUSTOMER_DETAIL: 'Customer detail found',
  CUSTOMER_ADDED: 'Customer added successfully',
  CUSTOMER_NOTES_ADDED: 'Customer notes added',
  FAVORITE_PROVIDER_ADDED: 'Favorite provider added',
  FAVORITE_PROVIDER_LIST: 'Customer favorite provider list',
  CUSTOMER_ACTIVE_UPDATE_STATUS: 'Customer activated successfully.',
  CUSTOMER_INACTIVE_UPDATE_STATUS: 'Customer inactivated successfully.',
  CUSTOMER_DELETED_UPDATE_STATUS: 'Customer deleted successfully.',
  USER_CUSTOMER_TAG_UPDATED: 'User customer tag updated successfully',
  USER_JOB_TAG_UPDATED: ' User job tag updated successfully',
  USER_TAG: 'Customer tags list found',
  USER_NOTES: 'Customer notes list found',

  /**
   * Store message
   */
  STORE_CREATED: 'Store has been created',
  STORE_LIST: 'Store list with details shown successfully',
  STORE_NOT_FOUND: 'Store not found ',
  STORE_DETAIL: 'Store detail found',
  STORE_DELETED: 'Store deleted successfully',
  STORE_DETAILS_UPDATED: 'Store details updated',
  STORE_ACTIVE_UPDATE_STATUS: 'Store activated successfully.',
  STORE_INACTIVE_UPDATE_STATUS: 'Store inactivated successfully.',
  STORE_DELETE_UPDATE_STATUS: 'Store deleted successfully.',
  STORE_SIGNUP: 'Store signup successful',
  STORE_ADDRESS_DETAILS_UPDATED: 'Store address updated successfully',
  STORE_IMAGE_UPDATED: 'Store image updated successfully',

  /*
   * Media uploader message
   */
  TOO_LARGE_FILE: 'File too Big, please select a file less than 15MB.',
  MEDIA_INVALID: 'Media is not valid',

  /**
   * Email subject
   */
  FORGET_PASSWORD_SUBJECT: 'Good guyz forget password.',

  /**
   * Validation message
   */
  PASSWORD_VALIDATION:
    'Password must contain minimum 1 Uppercase 1 Lowercase 1 Number 1 special character.',
  FALSE_RESPONSE: 'Something went wrong, Please try again!',
  INVALID_COUNTRY_CODE: 'Invalid Country Code',
  COUNTRY_CODE_VALIDATE: 'Add + before Country Code',
  PHONE_CODE_EXIST: 'Phone code already exist',
  ONLY_NUMERIC_ALLOWED: 'Only numeric value allowed.',
  ONLY_ALPHA_NUMERIC_ALLOWED: 'Only alpha numeric value allowed.',
  WHITE_SPACE_NOT_ALLOWED: 'Blank space not allowed.',
  MEMBER_LIMIT_MESSAGE: 'You can not add more than ten member',
  CHAT_ROOM_EXIST_MESSAGE: 'Chat room already exist.',
  EMAIL_MOBILE_NUMBER_ALLOWED:
    'Please enter Email and mobile number proper format',
  NOT_SAME_NEW_AND_CURRENT_PASSWORD_MATCH:
    'Current Password and new password should not be the same',
  VALID_SWIFT_CODE: 'Please enter valid swift or bic code',
  CITY_IS_REQUIRED: 'City is required',
  MEDIA_FILE_VALIDATION:
    'Please upload following file types jpeg, png, jpg, docx, xlsx, csv, doc, pdf',
  DOCUMENT_REQUIRED: 'Expire date is required',
  INVALID_BLOCK_DATE:
    'Block date must be current date or greater than current date',
  QUOTE_DEFAULT_IMAGE_REQUIRED: 'Default image required',
  IMAGE_NOT_VALID: 'Default image not valid please upload default image',
  MEDIA_TYPE_VALIDATION: 'Please upload a valid media file',
  QUOTE_IMAGE_NOT_EXIST: 'Quote image not exists',

  /**
   * Permission message
   */
  PERMISSION_NOT_EXIST: 'You Do not Have Permission For This Action.',

  /**
   * Role module
   */
  ROLE_DETAIL: 'Role detail.',
  ROLE_NOT_FOUND: 'Role not exist.',
  ROLE_ADDED: 'Role added successfully.',
  ROLE_EXIST: 'Role name already exist.',
  ROLE_DELETED: 'Role deleted successfully.',
  ROLE_UPDATED: 'Role Updated successfully.',
  ROLE_ACTIVE_STATUS_UPDATED: 'Role activated successfully.',
  ROLE_INACTIVE_STATUS_UPDATED: 'Role inactivated successfully.',
  PERMISSION_LIST: 'Permission List',
  USER_PERMISSION_UPDATED: 'User Permission updated',
  USER_PERMISSION: 'User Permissions',
  ACCESS_DENIED: 'Access Denied',
  MENTAL_HEALTH_PERMISSION_UPDATED: 'Permission change successfully',

  /**
   * Promo code module
   */
  PROMO_CODE_NOT_FOUND: 'Promo code not found',
  PROMO_CODE_DETAIL: 'Promo code details shown successfully',
  PROMO_CODE_ACTIVE_UPDATE_STATUS: 'Promo code activated successfully.',
  PROMO_CODE_INACTIVE_UPDATE_STATUS: 'Promo code inactivated successfully',
  PROMO_CODE_DETAILS_UPDATED: 'Promo code details updated',
  PROMO_CODE_ALREADY_EXISTS: 'Promo code already exists',
  PROMO_CODE_CREATED: 'Promo code has been created',
  PROMO_CODE_INVALID: 'Promo code is invalid',
  PROMO_CODE_VALID: 'Your code will save you {amount} on every job booked',
  PROMO_CODE_INVALID_EXPIRY_DATE:
    'Promo code expiry date can not be smaller than activation date',
  PROMO_CODE_DELETED: 'Promo code deleted successfully',
  PROMO_CODE_USE_LIMIT_EXCEED: 'Promo code usage limit is over',
  PROMO_CODE_EXPIRED: 'Promo code expired',

  /*
   * Country Module
   */
  COUNTRY_CREATED: 'Country Added Successfully',
  COUNTRY_DETAIL: 'Country Detail',
  COUNTRY_DELETED: 'Country Deleted Successfully',
  COUNTRY_UPDATED: 'Country Updated Successfully',
  COUNTRY_NOT_FOUND: 'Country Not Found',
  COUNTRY_EXIST: 'Country Already Exist',
  COUNTRY_CODE_EXIST: 'Country code Already Exist',
  COUNTRY_ACTIVE_STATUS_UPDATED: 'Country activated successfully.',
  COUNTRY_INACTIVE_STATUS_UPDATED: 'Country inactivated successfully.',
  DEFAULT_COUNTRY_CANT_DELETE_PERMISSION:
    'Default country cant deleted permission',

  /*
   * State Module
   */
  STATE_CREATED: 'State Added Successfully',
  STATE_DETAIL: 'State Detail',
  STATE_DELETED: 'State Deleted Successfully',
  STATE_UPDATED: 'State Updated Successfully',
  STATE_NOT_FOUND: 'State Not Found',
  STATE_EXIST: 'State Already Exist',
  STATE_CODE_EXIST: 'State code Already Exist',
  STATE_INACTIVE_STATUS_UPDATED: 'State activated successfully',
  STATE_ACTIVE_STATUS_UPDATED: 'State inactivated successfully.',

  /*
   * City Module
   */
  CITY_CREATED: 'City Added Successfully',
  CITY_DETAIL: 'City Detail',
  CITY_DELETED: 'City Deleted Successfully',
  CITY_UPDATED: 'City Updated Successfully',
  CITY_NOT_FOUND: 'City Not Found',
  CITY_EXIST: 'City Already Exist',
  CITY_ACTIVE_STATUS_UPDATED: 'City activated successfully',
  CITY_INACTIVE_STATUS_UPDATED: 'City inactivated successfully.',

  /*
   * Industry Module
   */
  INDUSTRY_CREATED: 'Industry Added Successfully',
  INDUSTRY_DETAIL: 'Industry Detail',
  INDUSTRY_DELETED: 'Industry Deleted Successfully',
  INDUSTRY_UPDATED: 'Industry Updated Successfully',
  INDUSTRY_NOT_FOUND: 'Industry Not Found',
  INDUSTRY_EXIST: 'Industry Already Exist',
  INDUSTRY_ACTIVE_STATUS_UPDATED: 'Industry Status activated successfully.',
  INDUSTRY_INACTIVE_STATUS_UPDATED: 'Industry Status inactivated successfully.',

  /**
   * Financing Bank
   */
  FINANCING_BANK_CREATED: 'Financing bank created',
  FINANCING_BANK_ALREADY_EXIST: 'Financing bank name already exist',
  FINANCING_BANK_DETAIL: 'Financing bank details found',
  FINANCING_BANK_NOT_FOUND: 'Financing bank not found',
  FINANCING_BANK_DETAIL_UPDATED: 'Financing bank details updated',
  FINANCING_BANK_UPDATE_ACTIVE_STATUS: 'Financing bank activated successfully',
  FINANCING_BANK_UPDATE_INACTIVE_STATUS:
    'Financing bank inactivated successfully.',

  /**
   * Financing Option
   */
  FINANCING_OPTION_CREATED: 'Financing option created',
  FINANCING_OPTION_TITLE_ALREADY_EXIST: 'Financing option title already exist',
  FINANCING_OPTION_DETAIL: 'Financing option details found',
  FINANCING_OPTION_UPDATE_ACTIVE_STATUS:
    'Financing option activated successfully',
  FINANCING_OPTION_UPDATE_INACTIVE_STATUS:
    'Financing option inactivated successfully',
  FINANCING_OPTION_UPDATE_STATUS: 'Financing option activated successfully',
  FINANCING_OPTION_UPDATE_STATUS_INACTIVE:
    'Financing option inactivated successfully',
  FINANCING_OPTION_DETAIL_UPDATED: 'Financing option details updated',

  /**
   * Financing Option
   */
  CARD_CREATED: 'Customer card added',
  INVALID_CARD_EXPIRY: 'Card expiry month or year is invalid',
  CARD_ALREADY_EXIST: 'Card already exist',
  CARD_LENGTH: 'Card number must be at least 4 digits and only numeric',
  CARD_CVV: 'Cvv should be only numeric and three digits only',
  CARD_NOT_FOUND: 'Card not found',
  CARD_DETAIL: 'Card details found',
  CARD_DETAIL_UPDATED: 'Card details updated',
  CARD_DELETED: 'Card deleted',
  DEFAULT_CARD_UPDATED: 'Default card updated',

  /**
   * Page message
   */
  PAGE_EXIST: 'Page Name already Exist.',
  PAGE_NOT_EXIST: 'Page Name does not Exist.',
  PAGE_DELETED: 'Page deleted successfully.',
  PAGE_DETAIL: 'Page detail.',
  PAGE_UPDATED: 'Page updated.',

  /**
   * Nca Page message
   */
  NCA_PAGE_UPDATED: 'Nca Page updated.',

  /**
   * Nca Page permission message
   */
  NCA_PAGE_PERMISSION_UPDATED: 'Nca Page permission updated.',
  NCA_NOT_ALLOWED_EDIT_CATEGORY:
    'Nca can not add sub category for this service category',
  NCA_NOT_ALLOWED_EDIT_CATEGORY_TYPE:
    'Nca can not add type of service category',

  /**
   * Faq message
   */
  FAQ_ADDED: 'Faq successfully added.',
  FAQ_NOT_EXIST: 'Faq not found.',
  FAQ_DELETED: 'Faq successfully deleted.',
  FAQ_UPDATED: 'Faq successfully updated.',
  FAQ_EXIST: 'Faq Already Exist',
  FAQ_STATUS_UPDATED: 'Faq Status Updated Successfully',
  FAQ_ORDER_EXIST: 'Faq order already exist.',
  FAQ_ORDER_UPDATED: 'Faq order Updated Successfully',
  FAQ_ACTIVE_STATUS_UPDATED: 'Faq activated successfully.',
  FAQ_INACTIVE_STATUS_UPDATED: 'Faq inactivated successfully.',

  /**
   * Banner message
   */
  BANNER_CREATED: 'Banner successfully added.',
  BANNER_NOT_EXIST: 'Banner not found.',
  BANNER_DELETED: 'Banner successfully deleted.',
  BANNER_UPDATED: 'Banner successfully updated.',
  BANNER_EXIST: 'Banner Already Exist',
  BANNER_STATUS_UPDATED: 'Banner Status Updated Successfully',
  BANNER_ACTIVE_STATUS_UPDATED: 'Banner activated successfully.',
  BANNER_INACTIVE_STATUS_UPDATED: 'Banner inactivated successfully.',
  BANNER_ORDER_EXIST: 'Banner order already exist.',
  BANNER_DETAIL: 'Banner details',
  BANNER_ORDER_UPDATED: 'Banner order Updated Successfully',

  /**
   * Document message
   */
  DOCUMENT_CREATED: 'Document successfully added.',
  DOCUMENT_NOT_FOUND: 'Document not found.',
  DOCUMENT_DELETED: 'Document successfully deleted.',
  DOCUMENT_UPDATED: 'Document successfully updated.',
  DOCUMENT_EXIST: 'Document Already Exist',
  DOCUMENT_DETAIL: 'Document details',
  DOCUMENT_ACTIVE_STATUS_UPDATED: 'Document activated successfully.',
  DOCUMENT_INACTIVE_STATUS_UPDATED: 'Document inactivated successfully.',

  /**
   * Tag message
   */
  TAG_CREATED: 'Tag successfully added.',
  TAG_NOT_FOUND: 'Tag not found.',
  TAG_DELETED: 'Tag successfully deleted.',
  TAG_UPDATED: 'Tag successfully updated.',
  TAG_EXIST: 'Tag Already Exist',
  TAG_ACTIVE_STATUS_UPDATED: 'Tag activated successfully',
  TAG_INACTIVE_STATUS_UPDATED: 'Tag inactivated successfully.',
  TAG_DETAIL: 'Tag details',
  CUSTOMER_TAG_NOT_FOUND: 'Customer tag not found.',
  JOB_TAG_NOT_FOUND: 'Job tag not found.',

  /**
   * Notes
   */
  NOTES_CREATED: 'Notes added',
  NOTES_TITLE_ALREADY_EXIST: 'Notes title already exist',
  REMINDER_DATE_TIME_INVALID:
    'Notes reminder date must be greater or equal to today and time must be greater than current time',
  NOTES_NOT_FOUND: 'Notes not found',
  NOTES_DETAIL_UPDATED: 'Notes details updated',
  NOTES_DELETED: 'Notes deleted',

  /**
   * Geo fence location message
   */
  GEO_FENCE_LOCATION_CREATED: 'Geo fence location successfully added.',
  GEO_FENCE_LOCATION_NOT_EXIST: 'Geo fence location not found.',
  GEO_FENCE_LOCATION_DELETED: 'Geo fence location successfully deleted.',
  GEO_FENCE_LOCATION_UPDATED: 'Geo fence location successfully updated.',
  GEO_FENCE_LOCATION_EXIST: 'Geo fence location Already Exist',
  GEO_FENCE_LOCATION_DETAIL: 'Geo fence location details',
  GEO_FENCE_LOCATION_ACTIVE_STATUS_UPDATED:
    'Geo fence location activated successfully.',
  GEO_FENCE_LOCATION_INACTIVE_STATUS_UPDATED:
    'Geo fence location inactivated successfully.',

  /**
   * User message
   */
  USER_CREATED: 'User successfully added.',

  /**
   * Quote information message
   */
  QUOTE_INFORMATION_UPDATED: 'Quote information successfully updated.',

  /**
   * Important information message
   */
  IMPORTANT_INFORMATION_UPDATED: 'Important information successfully updated.',

  /**
   * Tip message
   */
  TIP_UPDATED: 'Tip successfully updated.',

  /**
   * Home content message
   */
  HOME_CONTENT_UPDATED: 'Home content successfully updated.',

  /**
   * Financing information message
   */
  FINANCING_INFORMATION_UPDATED: 'Financing information successfully updated.',

  /**
   * Notification message
   */
  SEND_NOTIFICATION_PUSH: 'Push notification sent successfully',

  /**
   * Notification Template message
   */
  NOTIFICATION_TEMPLATE_UPDATED: 'Notification Template successfully updated.',
  NOTIFICATION_TEMPLATE_NOT_FOUND: 'Notification Template not found.',

  /**
   * Service category message
   */
  SERVICE_TYPE_ADDED: 'Service type successfully added.',
  SERVICE_CATEGORY_ADDED: 'Service category successfully added.',
  SERVICE_SUB_CATEGORY_ADDED: 'Service sub category successfully added.',
  SERVICE_CATEGORY_NOT_EXIST: 'Service category not exist',
  SERVICE_SUBCATEGORY_NOT_EXIST: 'Service subcategory not exist',
  SERVICE_CATEGORY_ACTIVE_STATUS_UPDATED:
    'Service category activated successfully.',
  SERVICE_CATEGORY_INACTIVE_STATUS_UPDATED:
    'Service category inactivated successfully.',
  SERVICE_CATEGORY_DETAIL_UPDATED: 'service category updated successfully',
  SERVICE_TYPE_DETAIL_UPDATED: 'Service type updated successfully',
  SERVICE_CATEGORY_DELETED: 'Service category deleted successfully',
  SERVICE_TYPE_DELETED: 'Service type deleted successfully',
  SERVICE_SUB_CATEGORY_DELETED: 'Service sub category deleted successfully',
  SERVICE_SUBCATEGORY_ACTIVE_STATUS_UPDATED:
    'Service sub category activated successfully.',
  SERVICE_SUBCATEGORY_INACTIVE_STATUS_UPDATED:
    'Service sub category inactivated successfully',
  SERVICE_TYPE_ACTIVE_STATUS_UPDATED: 'Service type activated successfully',
  SERVICE_TYPE_INACTIVE_STATUS_UPDATED:
    'Service type inactivated successfully.',
  SERVICE_SUB_CATEGORY_UPDATED: 'Service sub category updated successfully',
  SERVICE_CATEGORY_ALREADY_EXIST: 'Service category already exists',
  SERVICE_SUB_CATEGORY_ALREADY_EXIST: 'Service sub category already exists',
  SERVICE_TYPE_ALREADY_EXIST: 'Service type already exists',
  EMPLOYEE_ID_DIGIT_SAME_SECURITY_NUMBER:
    'Employee id number last four digit must be same security number',
  BUSINESS_ACCOUNT_ALREADY_EXISTS: 'Your account already Exist',

  /**
   * Email subject
   */
  RESET_PASSWORD_EMAIL: 'GGHS – Reset your password!',

  /**
   * Address message
   */
  ADDRESS_CREATED: 'Address created successfully',
  ADDRESS_UPDATED: 'Address updated successfully',
  ADDRESS_ALREADY_EXIST: 'Address already exist',
  ADDRESS_NOT_EXIST: 'Address not exist',
  ADDRESS_DELETED: 'Address deleted successfully',
  ADDRESS_DETAIL: 'Address details',
  ADDRESS_UPDATE_STATUS: 'Address status updated',
  DEFAULT_ADDRESS_UPDATE: 'Default address added Successfully',

  /**
   * Email Template
   */
  EMAIL_TEMPLATE_SUBJECT_ALREADY_EXISTS: 'Email template subject already exist',
  EMAIL_TEMPLATE_DETAIL_UPDATED: ' Email template updated successfully',
  EMAIL_TEMPLATE_NOT_FOUND: ' Email template not found',
  EMAIL_TEMPLATE_DETAIL: 'Email template details found',
  /**
   * Sms Template
   */
  SMS_TEMPLATE_SUBJECT_ALREADY_EXISTS: 'SMS template subject already exist',
  SMS_TEMPLATE_DETAIL_UPDATED: 'SMS template updated successfully',
  SMS_TEMPLATE_NOT_FOUND: ' SMS template not found',
  SMS_TEMPLATE_DETAIL: 'Sms template details found',

  /**
   * Provider message
   */
  PERSONAL_DETAILS_ADDED: 'Personal details successfully added.',
  PERSONAL_BUSINESS_TYPE_ADDED: 'Business type successfully added.',
  PROVIDER_DOCUMENT_ADDED: 'Document successfully added.',
  PROVIDER_ENTIRE_DAY_BLOCK_UPDATED: 'Entire day blocked successfully.',
  PROVIDER_TIME_FRAME_BLOCK_UPDATED: 'Time frame blocked successfully.',
  PROVIDER_ENTIRE_DAY_UNBLOCK_UPDATED: 'Entire day unblock successfully.',
  PROVIDER_SERVICE_ADDED: 'Services successfully added.',
  PROVIDER_AVAILABILITY_ADDED: 'Availability successfully added.',
  PROVIDER_UN_AVAILABILITY_ADDED: 'Un Availability successfully added.',
  PROVIDER_AVAILABILITY_UPDATED: 'Availability successfully updated.',
  PROVIDER_UN_AVAILABILITY_UPDATED: 'Unavailability successfully updated.',
  EMPLOYEE_ID_ALREADY_EXISTS: 'Employee id already exits',
  PROVIDER_PERSONAL_DETAILS_NOT_FOUND: 'Provider personal details not found',
  PROVIDER_SERVICE_DETAILS_NOT_FOUND: 'Provider service details not found',
  PROVIDER_BUSINESS_DETAILS_NOT_FOUND: 'Provider business details not found',
  PROVIDER_DOCUMENT_DETAILS_NOT_FOUND: 'Provider document details not found',
  PROVIDER_CREATED: 'Provider successfully added.',
  PROVIDER_DETAILS: 'Provider details',
  PROVIDER_DOCUMENT_DETAILS: 'Document details',
  PROVIDER_UPDATED: 'Provider successfully updated.',
  PROVIDER_DOCUMENT_UPDATED: 'Document successfully updated.',
  PROVIDER_UNAVAILABILITY_DETAILS_NOT_FOUND:
    'Provider unavailability details not found',
  PROVIDER_AVAILABILITY_DETAILS_NOT_FOUND:
    'Provider availability details not found',
  PROVIDER_AUTO_APPROVE_BOOKING_ADDED:
    'Auto approve booking updated successfully',
  DO_NOT_HAVE_PERMISSION:
    "Don't have permission Your Permission restrict by admin",
  ADMIN_APPROVAL_PENDING:
    "Please wait for admin's approval if you completed all required steps",
  USER_SERVICE_NOT_ADDED:
    'Provider status can not be activated because provider has not selected any services. Please try again after adding and activating the services.',
  BANK_DETAILS_NOT_FOUND: 'Provider bank details not found',
  PROVIDER_BANK_DETAILS: 'Provider bank details found',
  PROVIDER_ACTIVE_STATUS_UPDATED: 'Provider activated successfully.',
  PROVIDER_INACTIVE_STATUS_UPDATED: 'Provider inactivated successfully.',
  PROVIDER_STATUS_UPDATED: 'Provider status updated successfully.',
  PROVIDER_DELETED: 'Provider deleted successfully.',
  SLOT_NOT_FOUND: 'Slot not exits.',
  PROVIDER_SLOT_NOT_FOUND: 'Provider slot not exits.',
  PROVIDER_SERVICE_STATUS_UPDATED:
    'Provider service status updated successfully',

  ADMIN_ACTIVE_STATUS_UPDATED: 'Admin activated successfully.',
  ADMIN_INACTIVE_STATUS_UPDATED: 'Admin inactivated successfully.',
  ADMIN_DELETED: 'Admin deleted successfully.',
  PROVIDER_UPDATE_CUSTOMER: 'Provider updated customer details successfully',

  /**
   * User message
   */
  USER_STATUS_UPDATED: 'User Status Updated Successfully',
  USER_DELETED: 'User successfully deleted.',
  USER_SERVICE_NOT_EXISTS: 'User services not exists',
  USER_UPDATED: 'User successfully updated.',

  /**
   * Company general setting
   */
  GENERAL_SETTING_UPDATED: 'Successfully updated Configuration',

  /**
   * Company nca general setting
   */
  NCA_GENERAL_SETTING_UPDATED: 'Successfully updated Configuration',

  /**
   * Discount message
   */
  DISCOUNT_TITLE_ALREADY_EXIST: 'Discount title already exist',
  DISCOUNT_CREATED: 'Discount added successfully',
  DISCOUNT_NOT_EXIST: 'Discount not found',
  DISCOUNT_DETAIL: 'Discount details found',
  DISCOUNT_DETAIL_UPDATED: 'Discount updated',
  DISCOUNT_DELETED: 'Discount delete successfully',
  DISCOUNT_START_DATE: 'Please select current or future date for start date',
  DISCOUNT_END_DATE:
    'Please select discount end date greater or same as start date',
  QUOTE_ORDER_NOT_EXIST: 'Discount quote order not found',
  DISCOUNT_ACTIVE_UPDATE_STATUS: 'Discount activated successfully.',
  DISCOUNT_INACTIVE_UPDATE_STATUS: 'Discount inactivated successfully.',

  /**
   * Line item message
   */
  LINE_ITEM_ADDED: 'Line item added successfully',
  LINE_ITEM_NOT_EXIST: 'Line item not exists',
  LINE_ITEM_UPDATE: 'Line item updated successfully',
  LINE_ITEM_DELETE: 'Line item delete successfully',
  ALL_LINE_ITEM_UPLOADED: 'All line item added successfully',
  SOME_LINE_ITEM_ADDED: 'Some line item added',
  NO_LINE_ITEM_ADDED: 'No line item added',
  DATA_IMPORT: 'Data imported successfully.',
  DATA_DISCARD: 'Data discard successfully.',
  LINE_ITEM_PART_NUMBER_ALREADY_EXIST: 'Line item part number already exist',
  LINE_ITEM_NAME_ALREADY_EXIST: 'Line item name already exist',

  /**
   * Lesson message
   */
  LESSON_CREATED: 'Lesson added successfully',
  LESSON_NOT_FOUND: 'Lesson not found',
  LESSON_ACTIVE_UPDATE_STATUS: 'Lesson activated successfully',
  LESSON_INACTIVE_UPDATE_STATUS: 'Lesson inactivated successfully.',
  LESSON_DELETED: 'Lesson deleted successfully',
  LESSON_DETAIL: 'Lesson details found',
  LESSON_QUESTION_TITLE_ALREADY_EXIST: 'Lesson question title already exist',
  LESSON_QUESTION_CREATED: 'Lesson question added successfully',
  CORRECT_ANSWER_REQUIRED: 'Please give at-least one correct answer',
  CORRECT_ANSWER:
    'Single answer type question can have only one correct answer',
  LESSON_QUESTION_DETAIL_UPDATED:
    'Lesson question details updated successfully',
  LESSON_QUESTION_DELETED: 'Lesson question deleted successfully',
  LESSON_QUESTION_NOT_FOUND: 'Lesson question or option not found',
  DUPLICATE_OPTION_VALUES: 'Please give different values for different options',
  LESSON_QUESTION_DETAIL: 'Lesson question details found',
  LESSON_DETAIL_UPDATED: 'Lesson details updated successfully',
  LESSON_TITLE_ALREADY_EXIST: 'Lesson title already exists',
  LESSON_NOTIFICATION: 'Lesson notification sent successfully',
  LESSON_SERVICE_CATEGORY_NOT_FOUND: 'Service category for lesson not found',
  LESSON_COMPLETED: 'Lesson is completed',
  LESSON_PAST: 'Congratulations, You have pass the test',

  /**
   * Contact form message
   */
  CONTACT_FORM_CREATED: 'Contact form created successfully',
  CONTACT_US_REQUEST: 'Your query has been successfully sent.',

  /**
   * Work location message
   */
  WORK_LOCATION_ADDED: 'Work location added successfully',
  WORK_LOCATION_UPDATED: 'Work location updated successfully',

  /**
   * Bank message
   */
  BANK_CREATED: 'Bank details updated successfully',
  BANK_ACCOUNT_ALREADY_EXIST: 'Bank account already exists.',
  BANK_DETAILS_NOT_FOUND: 'Please add bank details then status update',
  BUSINESS_DETAILS_NOT_EXISTS:
    'Please add business type details then add bank details',

  /**
   * Amount calculation formula message
   */
  AMOUNT_CALCULATION_FORMULA_ADDED:
    'Amount calculation formula added successfully',
  AMOUNT_CALCULATION_FORMULA_UPDATED:
    'Amount calculation formula updated successfully',
  AMOUNT_CALCULATION_FORMULA__NOT_FOUND:
    'Amount calculation formula not exists',
  AMOUNT_CALCULATION_FORMULA_DELETED_SUCCESSFULLY:
    'Amount calculation formula deleted successfully',
  AMOUNT_CALCULATION_FORMULA_ALREADY_EXIST:
    'Amount calculation formula already exist',
  /**
   * Quote optional item
   */
  QUOTE_OPTIONAL_ITEM_TITLE_ALREADY_EXIST:
    'Quote optional item title already exist',
  QUOTE_OPTIONAL_ITEM_ADDED: 'Quote optional item added',
  QUOTE_OPTIONAL_ITEM_NOT_FOUND: 'Quote optional item not found',
  QUOTE_OPTIONAL_ITEM_DETAIL: 'Quote optional item details found',
  QUOTE_OPTIONAL_ITEM_UPDATE_ACTIVE_STATUS:
    'Quote optional item activated successfully.',
  QUOTE_OPTIONAL_ITEM_UPDATE_INACTIVE_STATUS:
    'Quote optional item inactivated successfully.',
  QUOTE_OPTIONAL_ITEM_DETAIL_UPDATED: 'Quote optional item updated',
  QUOTE_OPTIONAL_ITEM_DELETED: 'Quote optional item deleted successfully',

  /**
   * Quote message
   */
  QUOTE_NOT_EXIST: 'Quote not exist',
  QUOTE_EXIST: 'Quote already exists',
  QUOTE_CREATED: 'Quote added successfully',
  QUOTE_DETAIL: 'Quote details found',
  IMAGES_USED: 'Quote images added successfully',
  QUOTE_UPDATED: 'Quote updated successfully',
  QUOTE_ACTIVE_STATUS_UPDATED: 'Quote activated successfully.',
  QUOTE_INACTIVE_STATUS_UPDATED: 'Quote inactivated successfully.',
  QUOTE_AVAILABILITY_STATUS_UPDATED:
    'Quote availability status updated successfully',
  QUOTE_DELETED: 'Quote deleted successfully',
  QUOTE_IMAGE_DELETED: 'Quote image deleted successfully',

  /**
   * Quote Order message
   */
  QUOTE_ORDER_ADDED: 'Quote order added successfully',
  QUOTE_ORDER_UPDATED: 'Quote order updated successfully',
  QUOTE_ORDER_ADMIN_PROFIT_NOT_EXIST:
    'Quote order admin profit does not exists',
  QUOTE_ORDER_ADMIN_PROFIT_DELETED:
    'Quote order admin profit deleted successfully',
  QUOTE_ORDER_ADMIN_PROFIT_ALREADY_EXIST:
    'Quote order admin profit already exist',

  /**
   * Upload Quote
   */
  SOME_QUOTE_ADDED:
    'Some quote are uploaded successfully, Please check email for further Information.',
  ALL_QUOTE_UPLOADED: 'All quote are uploaded successfully.',
  NO_QUOTE_ADDED: 'Quote upload failed, Please check your email for details',

  /*
   * Equipment Location/supply house location message
   */
  EQUIPMENT_NAME_ALREADY_EXIST: 'Equipment location name already exist',
  EQUIPMENT_LOCATION_CREATED: 'Equipment location created successfully',
  EQUIPMENT_LOCATION_NOT_FOUND: 'Equipment location not found',
  EQUIPMENT_LOCATION_DELETED: 'Equipment location deleted successfully',
  EQUIPMENT_DETAIL_FOUND: 'Equipment location details found',
  EQUIPMENT_LOCATION_DETAIL_UPDATED:
    'Equipment location details updated successfully',

  /**
   * Rebate message
   */
  REBATE_CREATED: 'Rebate created successfully',
  REBATE_DETAIL: 'Rebate details shown successfully',
  REBATE_ACTIVE_UPDATE_STATUS: 'Rebate activated successfully.',
  REBATE_INACTIVE_UPDATE_STATUS: 'Rebate inactivated successfully.',
  REBATE_UPDATE_STATUS: 'Rebate status updated successfully',
  REBATE_UPDATE_STATUS_ACTIVE: 'Rebate activated successfully',
  REBATE_UPDATE_STATUS_INACTIVE: 'Rebate inactivated successfully',
  REBATE_NOT_FOUND: 'Rebate not found',
  REBATE_DELETED: 'Rebate deleted successfully',
  REBATE_DETAIL_UPDATED: 'Rebate updated successfully',
  REBATE_TITLE_ALREADY_EXIST: 'Rebate title already exist',

  /***
   * Service provider for provider modules message
   */
  SERVICE_PROVIDER_CREATED: 'Service provider added successfully',

  /**
   * NCA message
   */
  GET_NCA_LIST: 'Get NCA list',
  NCA_CREATED: 'NCA successfully added.',
  NCA_DETAILS: 'NCA details',
  UPDATE_NCA_PROFILE: 'NCA profile successfully updated',
  GET_NCA_PROFILE: 'NCA profile',
  UPDATE_NCA_COMPANY_PROFILE: 'NCA company profile successfully updated',
  GET_NCA_COMPANY_PROFILE: 'NCA company profile',
  UPDATE_NCA_CARD: 'NCA card successfully updated',
  GET_NCA_CARD: 'NCA card',
  UPDATE_NCA_BUSINESS_DETAIL: 'NCA business details successfully updated',
  GET_NCA_BUSINESS_DETAIL: 'NCA business details',
  UPDATE_NCA_BANKING_DETAIL: 'NCA banking details successfully updated',
  GET_NCA_BANKING_DETAIL: 'NCA banking details',
  NCA_ROLE_NOT_FOUND: 'NCA role not found',
  NCA_EXISTING_CATEGORY_ADD: 'Existing category added successfully',
  UPDATE_NCA_LINK_STATUS: 'NCA link status update successfully',
  NCA_LOCATION_NOT_FOUND: 'NCA location not found',
  UPDATE_NCA_ACTIVE_STATUS: 'NCA activated successfully.',
  UPDATE_NCA_INACTIVE_STATUS: 'NCA inactivated successfully.',
  NCA_INCOMPLETE_PROFILE_EMAIL: 'Profile incomplete email sent successfully',
  DEFAULT_ROLE_UPDATED: 'Default Role updated',
  PLAN_CANCELLED: 'Nca plan cancelled',
  PLAN_UPDATED: 'Nca plan updated',
  NCA_CARD_NOT_FOUND: 'Nca card not added please add first.',
  GET_NCA_BILLING_LIST: 'Get NCA Billing list',
  GET_NCA_BILLING_DETAIL: 'NCA billling details',
  NCA_BILL_NOT_FOUND: 'NCA bill not found',

  /*
   * Will call list
   */
  WILL_CALL_LIST_ACTIVE_STATUS_UPDATED:
    'Will call list activated successfully.',
  WILL_CALL_LIST_INACTIVE_STATUS_UPDATED:
    'Will call list inactivated successfully.',

  /**
   * Store promo code and question request message
   */
  STORE_REQUEST_SENT: 'Request sent successfully.',

  /**
   * Slot message
   */
  SLOTS_ADDED: 'Slot added successfully',
  SLOTS_DELETED: 'Slot deleted successfully',
  DUPLICATE_SLOT_FOUND: 'Duplicate slot exists.',

  /**
   * Truck Stock Order
   */
  TRUCK_STOCK_ORDER_ADDED: 'Truck stock order added successfully',
  TRUCK_STOCK_ORDER_LIST: ' Truck stock order list given successfully',
  TRUCK_STOCK_ORDER_NOT_FOUND: 'Truck stock order not found',
  TRUCK_STOCK_ORDER_DETAIL: 'Truck stock order details found',
  TRUCK_STOCK_ORDER_DELETED: 'Truck stock order deleted successfully',
  TRUCK_STOCK_ORDER_PLACED: 'Truck stock order placed successfully',
  TRUCK_STOCK_ORDER_SUM: 'Sum given successfully',
  TRUCK_STOCK_UNPLACED_ORDER_LIST:
    'Unplaced truck stock order list given successfully',
  TRUCK_STOCK_PREVIOUS_ORDER_LIST:
    'Previous truck stock order list given successfully',
  TRUCK_STOCK_ORDER_PART_ALREADY_ADDED: 'Part already added',

  /**
   * Stripe message
   */
  STRIPE_CUSTOMER_NOT_EXIST: 'Stripe customer account not exists',
  STRIPE_CRED_NOT_EXIST: 'Stripe credential not exists',

  /**
   * Chat room
   */
  CHAT_ROOM_NOT_FOUND: 'Chat room is not found.',
  MEDIA_SENT: 'Media sent.',
  MEMBER_ADDED: 'member added in group.',
  MEMBERS_ADDED: 'members added in group.',

  /**
   * Google Business, Adword, service
   */
  GOOGLE_AUTH_URL: 'Auth url successfully generated.',
  GOOGLE_REVIEW_REPLY: 'You have successfully reply on review.',
  GOOGLE_REVIEW_DELETE: 'You have successfully delete business review.',
  GOOGLE_POST_DELETE: 'You have successfully delete business post.',
  GOOGLE_CREATE_POST: 'Post successfully added.',
  GOOGLE_CREATE_MEDIA: 'Photo successfully added.',
  GOOGLE_CAMPAIGN_STATUS_UPDATE: 'Campaign status updated successfully.',
  GOOGLE_CAMPAIGN_BUDGET_UPDATE: 'Campaign budget updated successfully.',
  GOOGLE_CAMPAIGN_CONTROL_UPDATE:
    'Campaign control status updated successfully.',

  NOT_AUTHORIZED_TO_PERFORM: 'User not allowed to perform this operation',
  INVALID_PROVIDER: 'Requested provider not found',
  BOOKING_NOT_FOUND: 'Booking not found',
  BOOKING_AMOUNT_NOT_FOUND: 'Booking amount must be greater than zero.',
  BOOKING_CREATED: 'Booking created successfully',
  INVALID_PROMO_CODE: 'Invalid Promo code',
  UNABLE_TO_DECLINE_BOOKING: 'Unable to update booking',
  BOOKING_DECLINED: 'Booking Declined',
  DECLINED_BOOKINGS_LIST: 'Declined bookings list given successfully',

  /**
   * booking
   */
  BOOKING_SLOT_NOT_EXIST: 'Slot is required',
  SERVICE_TYPE_NOT_EXIST: 'Service type not exists',
  BOOKING_ACCEPTED: 'Booking accepted',
  BOOKING_CAN_NOT_BE_DECLINE: 'Booking can not be canceled',
  BOOKING_BEGIN: 'booking begin',
  BOOKING_ARRIVED: 'booking arrived',
  BOOKING_STARTED: 'booking started',
  QUOTE_SUBMITTED: 'Quote submitted successfully',
  BUILD_INVOICE: 'Build invoice',
  BOOKING_PAYMENT_REQUEST: 'Booking payment requested',
  BOOKING_PAYMENT_CREDIT: 'Booking payment credited',
  BOOKING_PAYMENT_CASH: 'Cash payment done for booking',
  BOOKING_PAYMENT_ADMIN: 'Admin payment done for booking',
  BOOKING_PAYMENT_FINANCING: 'Financing payment done for booking',
  BOOKING_SPLIT_PAYMENT: 'Please pay full amount',
  CARD_SOURCE_NOT_VALID: 'Card source not valid',
  BOOKING_REVIEW_EXIST: 'Review Already Exist',
  BOOKING_REVIEW_ADDED: 'Review Added Successfully',
  PROVIDER_ADD_EQUIPMENT: 'Equipment added successfully',
  PROVIDER_EDIT_EQUIPMENT: 'Equipment updated successfully',
  HOME_INVENTORY_NOT_EXIST: 'Home inventory not exits',
  QUOTE_DISCOUNT_REBATE_ADDED:
    'Provider quote discount rebate added successfully',
  PROVIDER_QUOTE_DISCOUNT_REBATE_NOT_FOUND:
    'Provider quote discount rebate not found',
  QUOTE_DISCOUNT_REBATE_DELETED:
    'Provider quote discount rebate deleted successfully',
  BOOKING_INVOICE_DOWNLOAD: 'Booking invoice sent',
  BOOKING_PROVIDER_NOTE_UPDATED: 'Booking Provider note update successfully',
  BOOKING_NOTE_UPDATED: 'Booking note updated successfully',
  BOOKING_TAG_ADDED: 'Booking tag added successfully',
  PROVIDER_QUOTE_EQUIPMENT_NOT_FOUND: 'Provider quote Equipment not found',
  PROVIDER_QUOTE_EQUIPMENT_DELETED:
    'Provider quote Equipment deleted successfully',
  PROVIDER_QUOTE_EQUIPMENT_ITEM_DELETED:
    'Provider quote item deleted successfully',
  PROVIDER_BOOKING_LINE_ITEM_NOT_FOUND: 'Provider booking line item not found.',
  PROVIDER_BOOKING_LINE_ITEM_DELETED:
    'Provider booking line item deleted successfully',
  PROVIDER_BOOKING_FINANCING_NOT_FOUND: 'Provider booking financing not found.',
  MARK_SETTLE_PAYMENT: 'Marked as settled payment.',
  PROVIDER_BOOKING_FINANCING_DELETED:
    'Provider booking financing deleted successfully',
  PROVIDER_SLOT_BOOKED:
    'Customer has an upcoming appointment, please confirm we are not duplicating appointments',
  PROVIDER_BOOKED_ANOTHER_CUSTOMER:
    'It appears you have another job booked at that time',
  PROVIDER_EARNING_UPDATED: 'Provider earning updated successfully',
  BOOKING_RECEIPT_SUBJECT: 'Booking invoice',
  CHECK_SCHEDULE_BOOKING_START_TIME:
    'You can not start schedule job before 5 hours',
  /**
   * Dashboard
   */
  PROVIDER_COUNT: 'Provider count given successfully',
  QUOTE_NOT_FOUND: 'Equipment type not found',
  JOB_SENT_SUCCESSFULLY: 'Job sent successfully',
  JOB_RESCHEDULED: 'Job scheduled successfully ',
  DISCOUNT_REBATE_UPDATED: 'Rebate and Discount updated successfully',
  PROVIDER_ALREADY_HAVE_ONGOING_JOB: 'Provider already have ongoing job',
  QUOTE_APPROVED: 'Quote accepted successfully',
  NOTE_UPDATED: 'Note updated successfully',
  SLOT_REQUIRED: 'Slot is required for scheduled type service',
};
