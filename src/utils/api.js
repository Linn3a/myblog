import axios from 'axios';

export async function fetchUserInfo (Token)  {
    const { data } = await axios.post(`autologin`,{Token})
    console.log(data.data);
    return data.data;
}