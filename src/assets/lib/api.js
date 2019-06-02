import axios from 'axios'
import find from 'lodash/find'

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
    getCar: function (id = 0) {
        let list = require('../../assets/demo/cars.json');
        console.log(list, find(list, {id: id}), id);

        return find(list, {id: id});
        //TODO: Enable this for backend
        // return this.get(`car/${carId}/show`)
    }
}
