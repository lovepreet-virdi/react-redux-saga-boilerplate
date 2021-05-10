import axios from "axios";
import endpoints from "../../config/endpoints";
function fetchImagesService(){
    return axios({
        url: endpoints.api+ "photos",
        method: 'GET'
    })
}
export default fetchImagesService;