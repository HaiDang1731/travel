import data from '../data/db.json'
class dataService {
    getUser() {
        return data.users;
    }
    getTours() {
        return data.tours;
    }

    getDestination() {
        return data.destination;
    }


    getHotels() {
        return data.hotels;
    }

    getPost() {
        return data.posts;
    }
}

export default new dataService;