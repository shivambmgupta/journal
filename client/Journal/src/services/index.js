import axios from 'axios';
import { API_URLs, CONFIGURATIONS } from '../constants/Config'

export default class Service {

    static _default_callback = (response) => console.log(response)
    
    static async register(payload, callback = this._default_callback) {
        try {
            callback(await axios.post(API_URLs.registerUrl, payload, CONFIGURATIONS.withoutAuthorization))
        } catch (error) {
            callback({ result: false })
        }
    }
 
    static async login(payload, callback = this._default_callback) {
        try {
            axios.post(API_URLs.loginUrl, payload, CONFIGURATIONS.withoutAuthorization)
                .then(response => {
                    callback(response);
                })
                .catch(error => {
                    callback(error);
                });
        } catch (error) {
            callback({ result: false });
        }
    }

    static async fetchJournals(token, callback = this._default_callback) {
        try {
            axios.get(API_URLs.fetchUserJournals, CONFIGURATIONS.withAuthorization(token))
                .then(response => {
                    callback(response);
                })
                .catch(error => {
                    callback(error);
                })
        } catch (error) {
            callback({ result: false });
        }
    }

    static  async fetchUserDetails(token, callback = this._default_callback) {
        try {
            const config = {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Brearer " + token
                }
            }
            const response = await axios.get(API_URLs.fetchUserDetails, config);
            callback(response);
        } catch (error) {
            
        }
    }

    static async fetchDeveloperDetails(callback = this._default_callback) {
        try {
            axios.get(API_URLs.fetchAboutDeveloper, CONFIGURATIONS.withoutAuthorization)
                .then(response => {
                    callback(response);
                })
                .catch(error => {
                    callback(error);
                })
        } catch (error) {
            callback("error", error)
        }
    }

    static async createJournal(payload, token, callback = this._default_callback) {
        try {
            const config = {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Brearer " + token
                }
            }
            axios.post(API_URLs.crudJournalAPI, payload, config)
                .then(response => {
                    callback(response)
                })
                .catch(error => {
                    callback(error)
                })
        } catch (error) {
            callback(error)
        }
    }

    static async deleteJournal(paylaod, token, callback = this._default_callback) {
        try {
            const response = await axios.delete(`${API_URLs.crudJournalAPI}/${paylaod}`, CONFIGURATIONS.withAuthorization(token))
            callback(response);
        } catch (error) {
            callback(error);
        }
    }

    static async updateJournal(id, payload, token, callback = this._default_callback) {
        try {
            const config = {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Brearer " + token
                }
            }
            callback(await axios.patch(`${API_URLs.crudJournalAPI}/${id}`, payload, config))
        } catch (error) {
            callback(error)
        }
    }
}