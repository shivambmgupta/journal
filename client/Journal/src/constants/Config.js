const BASE_DOMAIN = 'https://mern-journals.herokuapp.com';

export const API_URLs = {
    loginUrl: BASE_DOMAIN + '/user/login',
    fetchUserJournals: BASE_DOMAIN + '/user/journals',
    fetchUserDetails: BASE_DOMAIN + '/user/details',
    registerUrl: BASE_DOMAIN + '/user/register',
    fetchAboutDeveloper: BASE_DOMAIN + '/about-developer',
    crudJournalAPI: BASE_DOMAIN + '/user/journal'
}

export const CONFIGURATIONS = {
    withoutAuthorization: {
        headers: {
        "Content-Type": "application/json"
        }
    },
    withAuthorization: (token) => {
        return {
            headers:  {
                "Content-Type": "appliation/json",
                "Authorization": "Brearer " + token
            }
        }
    }
}