// http://pretest-qa.dcidev.id/documentation/v1#/
// http://pretest-qa.dcidev.id/api/v1/

export default {
  // user
  users: {
    // register  phone must with country code 62xxx
    create: {
      method: "post",
      url: "http://pretest-qa.dcidev.id/api/v1/register"
    },
    login: {
      method: "post",
      url: "http://pretest-qa.dcidev.id/api/v1/oauth/sign_in"
    },
    otpResend: {
      method: "POST",
      url: "http://pretest-qa.dcidev.id/api/v1/register/otp/request"
    },
    otpMatch: {
      method: "POST",
      url: "http://pretest-qa.dcidev.id/api/v1/register/otp/match"
    }
  },
  // profile
  profile: {
    profileInfo: {
      method: "get",
      url: "http://pretest-qa.dcidev.id/api/v1/profile/me"
    },
    profileUpdate: {
      method: "post",
      url: "http://pretest-qa.dcidev.id/api/v1/profile"
    },
    profileUpdateEducation: {
      method: "post",
      url: "http://pretest-qa.dcidev.id/api/v1/profile/education"
    },
    profileUpdateCarrer: {
      method: "post",
      url: "http://pretest-qa.dcidev.id/api/v1/profile/carrer"
    }
  },
  // message
  message: {
    getMessage: {
      method: "get",
      url: "http://pretest-qa.dcidev.id/api/v1/message/:user_id"
    }
  },
  // uploads
  upload: {
    coverImg: {
      method: "post",
      url: "http://pretest-qa.dcidev.id/api/v1/uploads/cover"
    },
    profilePicture: {
      method: "post",
      url: "http://pretest-qa.dcidev.id/api/v1/uploads/profile"
    }
  }
};
