import axios from 'axios'
const USERS_REST_API_URL = 'http://backend-registration.169.50.202.75.nip.io/user/userslist';

class UserServiceFetch{
    getUsers(){
        
        return axios(USERS_REST_API_URL,
            {
                method: 'get',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            }).then((res => res?.data));
    }
}

export default new UserServiceFetch();

