import axios from 'axios'

export default {
    data() {
        return {
            base: 'http://car-backend.local/api'
        }
    },
    get: async function (uri = '') {
        return axios.get(`${this.data().base}/${uri}`);
    },
    getCars: function () {
        return require('../../assets/demo/cars.json');
        //TODO: Enable this for backend
        // return this.get('list');
    },
    getCar: function (carId = 0) {
        return require('../../assets/demo/car.json');
        //TODO: Enable this for backend
        // return this.get(`car/${carId}/show`)
    }
}
