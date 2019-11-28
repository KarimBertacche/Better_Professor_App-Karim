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
    invalidCredentials: 'Oops! Invalid Credentials.',
    invalidStudentId: 'Oops! You have provided an invalid student id, try again.',
    noStudentMessages: 'Oops! It looks like there are no messages for the student with the specified id.',
    noStudentProjects: (id) => {
        return `There are no projects associated with the student id ${id}.`
    },
    existingEmail: 'The email is already been used.',
    missingCredentials: 'Sorry, no credentials have been provided.',
    missingFields: 'You are missing some required fields!',
    missingProject: 'Oops! Seems like there are no projects in the database.',
    missingStudents: 'Oops! Seems like there are no students in the database.',
    missingUsers: 'Oops! Seems like there are no users in the database.',
    missingBodyData: 'The request body misses some mandatory fields, please re-submit.',
    newEntry: 'New entry successfully created!',
    deleteEntry: (id) => {
        return `Successfully deleted entry with id of ${id}!`
    },
    profileUpdated: 'User data successfully updated',
    profileDeleted: 'User data successfully deleted',
    invalidEmail: 'Not a valid email address format',
    regexMail: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
}

//NOT YET USED VARIABLES
// supplyToken: 'Please supply token!',
// noAccess: 'You are not authorised to access or modify this information',
// updatedEntry: 'Entry successfully updated!',
// entryRemoved: function (value) {
//    return `${value} has been successfully removed from your list`
// },
// limitReached: 'Maximum class size reached',