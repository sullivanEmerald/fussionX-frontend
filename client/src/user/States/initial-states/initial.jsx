
 const ProjectInitials = {

    INITIAL_STATE : {
      isToggle : false,
      isPassword : false,
      errorMessage  : '',
      userReturnedMessage : false,
      isUserLoggedIn : false
    },

    USER_STATE : {
        profilePicture : '',
        userProfileInformation : {}
    },

    PASSWORD_RESET : {
      password : '',
      confirmPassord : ''
    },

    REVEAL_PASSWORD : {
      isPasswordVisble : false,
      isConfirmPasswordVisible : false,
    }

}

export { ProjectInitials as INITIALS}