
 const ProjectInitials = {

    INITIAL_STATE : {
      isToggle : false,
      isPassword : false,
      errorMessage  : '',
      userReturnedMessage : false,
      isUserLogedIn : false
    },

    USER_STATE : {
        profilePicture : '',
        userProfileInformaton : null
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