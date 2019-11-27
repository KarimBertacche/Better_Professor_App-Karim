module.exports = {
    errorMessage: (req, res, err) => {
        return `Oops! Something went wrong 😅 \n 
        Failed to ${req.method} ${req.originalUrl} --> ${err.message}`
    },
    welcomeMessage: (firstName) => {
       return `Welcome to WorkFlow ${firstName} 😁`
    },
    loggedUserMessage: (firstName) => {
        return `Welcome ${firstName}, you have successfully logged in 🥳`
    },
    invalidToken: 'Token validation failed!',
    invalidCredentials: 'Oops! Invalid Credentials',
    invalidStudentId: 'Oops! You have provided an invalid student id, try again',
    missingCredentials: 'Sorry, no credentials have been provided',
    existingEmail: 'Email already in use',
    missingFields: 'You are missing some required fields!',
    missingBodyData: 'The request body misses some mandatory fields, please re-submit',
    regexMail: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/




    profileUpdated: 'User data successfully updated',
    profileDeleted: 'User data successfully deleted',
    supplyToken: 'Please supply token!',
    invalidEmail: 'Not a valid email address format',
    noAccess: 'You are not authorised to access or modify this information',
    newEntry: 'New entry successfully created!',
    updatedEntry: 'Entry successfully updated!',
    entryRemoved: function (value) {
       return `${value} has been successfully removed from your list`
    },
    limitReached: 'Maximum class size reached',
 }