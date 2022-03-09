export  const APP_TITLE = "Journals"

export const JOURNAL_SCREEN_TITLE = 'hi, what\'s on your mind?';

// ScreenNames
export const APP = "App"
export const SPLASH_SCREEN = "SplashScreen"
export const LOGIN_SCREEN = "Login"
export const HOME_SCREEN = "Home"
export const PROFILE_SCREEN = "Profile"
export const APP_DEVELOPER = "About Developer"
export const JOURNAL_SCREEN = "Journal"
export const HOME_STACK = "HomeStack"
export const REGISTER_SCREEN = "Register Screen"

// New User.
export const EMPTY = "Aww, such a empty. How about adding a note?"

// Placeholders
export const PLACEHOLDER_USERNAME = "Email"
export const PLACEHOLDER_PASSWORD = "Password"
export const PLACEHOLDER_TITLE = 'Title'
export const PLACEHOLDER_CONTENT = 'Content'
export const PLACHOLDER_NAME = "Name"
export const PLACEHOLDER_CONFIRM_PASWORD = "Confirm Password"
export const PLACEHOLDER_MOBILE = "Mobile Number (Optional)"
export const PLACEHOLDER_FACEBOOK_LINK = "Your Facebook profile link (Optional)"
export const PLACEHOLDER_LINKEDIN_LINK = "Your Linkedin profile link (Optional)"
export const PLACEHOLDER_TWITTER_LINK = "Your Twitter profile link (Optional)"


export const SAVE = "Save"
export const SIGN_IN = "Sign In"
export const REGISTER_SCREEN_TITLE = "Register"
export const REGISTER = "Register"

// Splash Screen Time Constansts
export const SPLASH_SCREEN_DURARION = 2000 // For Dev environment = 2000, 3000 otherwise
export const COPYRIGHT_TEXT = `Copyright\u00a9 ${new Date().getFullYear()} Shivam Gupta Productions`

// Redux Actions
export const LOGIN_ACTION = 'login'
export const LOGOUT_ACTION = 'logout'
export const REGISTER_ACTION = 'register'
export const INVALID_CREDENTIALS = 'invalidCredentials'
export const INVALID_CREDENTIALS_RESET = 'invalidCredentialsReset'
export const FETCH_JOURNALS = 'fetchJournals'
export const FETCH_USER_DETAILS = 'fetchUserDetails'
export const ABOUT_DEV_API_CALL_SUCCESS = 'devDetailsFetched'
export const ABOUT_DEV_API_CALL_FAIL = 'devDetailsFailed'
export const RETRIEVE_TOKEN = 'retrieveToken'
export const CREATE_JOURNAL = 'createJournal'

// Error Messages
export const INVALID_EMAIL = "Invalid email or username, please provide the valid email address"
export const NAME_ERROR = "Please provide your valid mail"
export const MAIL_ERROR = "Invalid email, please provide a valid one"
export const PASSWORD_ERROR = "Password must be at least 8 characters long and contain an uppercase letter, a lowercase letter, a number, a special character and no space."
export const CONFIRM_PASSWORD_ERROR = "Password do not match"
export const MOBILE_NUMBER_ERROR = "Please provide valid contact details."
export const LINK_ERROR = "Umm, this link does not look right. Does it?"

// Prompt Type
export const PROMPT_TYPE_ERROR = "error"
export const PROMPT_TYPE_SUCCESS = "success"

// Journal Mode
export const NEW = "new"
export const EXISTING = "existing"


export const LOGOUT = "Logout"

// Delete Alert
export const DELETE_ALERT = "Are you sure? Once you delete this journal, you can't get it back. Make sure you do it for good.";
export const DELETE_TITLE = "Delete this Journal"
export const CANCEL = "Cancel"
export const PROCEED = "Do it anyway"
export const OKAY_NVM = "Okay, nevermind!"
export const OOPS = "Oops!"
