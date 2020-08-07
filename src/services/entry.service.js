const { default: axios } = require('axios')

class EntryService {
    constructor() {
        //ec2-13-58-65-253.us-east-2.compute.amazonaws.com
        this.URI = 'http://localhost:5000/entries'
        // this.URI = 'http://ec2-13-58-65-253.us-east-2.compute.amazonaws.com:5000/entries'
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

    editEntry(entry) {
        return axios ({
            method: 'PUT',
            url: this.URI +'/' + entry._id.toString(),
            data: entry,
            withCredentials: true
        }
        )
    }
}

export default EntryService;