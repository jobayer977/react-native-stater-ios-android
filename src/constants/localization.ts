import LocalizedStrings from 'react-native-localization';
let localizedStrings = new LocalizedStrings({
  'en-US': {
    lets: 'Let’s',
    getStart: 'Get Start !',
    create: 'Create',
    yourAccount: 'Your Account !',
    register: 'Register',
    alreadyHaveAnAccount: 'Already have an account ?',
    signUp: 'Sign Up',
    signIn: 'Sign In',
    continueWith: 'Continue with',
    continue: 'Continue',
    forgotPassword: 'Forgot Password ?',
    enterYourEmailAddressForRecovering:
      'Enter your email address for recovering',
    yourPassword: 'Your Password',
  },
  bn: {
    lets: 'দেয়',
    getStart: 'শুরু করা !',
    create: 'তৈরি',
    yourAccount: 'আপনার অ্যাকাউন্ট !',
    register: 'নিবন্ধন',
    alreadyHaveAnAccount: 'ইতিমধ্যে একটি অ্যাকাউন্ট আছে ?',
    signUp: 'নিবন্ধন করুন',
    signIn: 'সাইন ইন করুন',
    continueWith: 'চালিয়ে যান',
    continue: 'চালিয়ে যান',
    forgotPassword: 'পাসওয়ার্ড ভুলে গেছেন ?',
    enterYourEmailAddressForRecovering:
      'পুনরুদ্ধারের জন্য আপনার ইমেল ঠিকানা লিখুন',
    yourPassword: 'আপনার পাসওয়ার্ড',
  },
});

let currentLocalizationLanguage = localizedStrings.getLanguage();

export {localizedStrings, currentLocalizationLanguage};
