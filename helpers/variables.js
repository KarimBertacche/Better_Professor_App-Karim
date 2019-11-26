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
    profileUpdated: 'User data successfully updated',
    profileDeleted: 'User data successfully deleted',
    alreadyInUse: 'Email already in use',
    invalidCredetials: 'Oops! Invalid Credentials',
    missingFields: 'You are missing some required fields!',
    noBodyData: 'Please supply data in the request body!',
    tokenInvalid: 'Token validation failed!',
    supplyToken: 'Please supply token!',
    invalidEmail: 'Not a valid email address format',
    noAccess: 'You are not authorised to access or modify this information',
    newEntry: 'New entry successfully created!',
    updatedEntry: 'Entry successfully updated!',
    entryRemoved: function (value) {
       return `${value} has been successfully removed from your list`
    },
    limitReached: 'Maximum class size reached',
    mailRegex: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
 }