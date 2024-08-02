
 const ProjectInitials = {

    INITIAL_STATE : {
      isToggle : false,
      isPassword : false,
      errorMessage  : '',
      userReturnedMessage : false,
      
    },

    USER_STATE : {
        profilePicture : ''
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