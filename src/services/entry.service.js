const { default: axios } = require('axios')

class EntryService {
    constructor() {
        this.URI = 'http://localhost:5000/entries'
    }

    getEntries() {
        return axios({
            method: 'GET',
            url: this.URI,
            withCredentials: true
        })
    }

    addEntry(entry) {
        return axios({
            method: 'POST',
            url: this.URI,
            data: entry,
            withCredentials: true
        })
    }
}

export default EntryService;