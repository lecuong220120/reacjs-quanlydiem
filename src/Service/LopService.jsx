import axios from 'axios'
import { lop_url } from '../constants'
class LopService{
    createLop(lop){
        return axios.post(lop_url, lop)
    }
    updateLop(){

    }
    deleteLop(lop){
        return axios.delete(lop_url, lop)
    }
    getById(id){
        return axios.get(lop_url + '/' + id)
    }
}
export default new LopService();