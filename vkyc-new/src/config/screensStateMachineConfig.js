export const screensStateMachineConfig = {
  initial: 'personalDetails',
  states: {
    personalDetails: {
      on: {
        onboarding: 'enterOtp',
      },
    },
    enterOtp: {
      on: {
        onboarding: 'onboardingTypeSelection',
      },
    },
    onboardingTypeSelection: {
      on: {
        'onboarding-video': 'videoConfirmation',
        'onboarding-inperson': 'appointmentTimeSelection',
      },
    },
    appointmentTimeSelection: {},
    videoConfirmation: {
      on: {
        'onboarding-schedule': 'videoScheduleDetails',
        'onboarding-video': 'videoAssistanceConfirmation',
      },
    },
    videoScheduleDetails: {},
    videoAssistanceConfirmation: {
      on: {
        'onboarding-assistance': 'videoAssistanceWaiting',
        'onboarding-self': 'videoAssistance',
      },
    },
    videoAssistanceWaiting: {},
    videoAssistance: {
      on: {
        'onboarding-video': 'videoStreaming',
      },
    },
    videoStreaming: {
      on: {
        'aadhaar-front': 'aadhaarFront',
        'pan-info': 'panInfo',
      },
    },
    aadhaarFront: {
      on: {
        'aadhaar-info': 'aadhaarFirst',
      },
    },
    panFront: {
      on: {
        'pan-info': 'panInfo',
      },
    },
    panInfo: {},
    aadhaarFirst: {
      on: {
        'aadhaar-back': 'aadhaarBack',
      },
    },
    aadhaarBack: {
      on: {
        'user-info': 'userInfo',
      },
    },
    userInfo: {
      on: {
        'valid-data': 'validated',
        'question-ask': 'questionScreen',
      },
    },
    validated: {
      on: {
        'question-ask': 'questionScreen',
      },
    },
    questionScreen: {
      on: {
        'questions-ans': 'questions',
      },
    },
    questions: {
      on: {
        'successfully-onboarded': 'successfullyOnboarded',
      },
    },
    successfullyOnboarded: {
      on: {
        'income-verification': 'incomeVerification',
      },
    },
    incomeVerification: {
      on: {
        'credit-score': 'creditScore',
      },
    },
    creditScore: {
      on: {
        'loan-approval': 'loanApproval',
      },
    },
    loanApproval: {
      on: {
        'account-verification': 'accountVerification',
      },
    },
    accountVerification: {
      on: {
        'account-verified': 'accountVerified',
      },
    },
    accountVerified: {
      on: {
        'loan-document': 'loanDocument',
      },
    },
    loanDocument: {
      on: {
        'loan-congratulation': 'loanCongratulation',
      },
    },
    loanCongratulation: {
      on: {
        'loan-help': 'loanHelp',
      },
    },
    loanHelp: {},
  },
}
