import axios from 'axios';

export async function fetchUserInfo (Token)  {
    const { data } = await axios.post(`autologin`,{Token})
    console.log(data.data);
    return data.data;
}

export function timeParser (rawtime) {
    // 2023-05-20T12:50:49.557Z
    const date = new Date(rawtime);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const hour = ("0" + date.getHours()).slice(-2);
    const minute = ("0" + date.getMinutes()).slice(-2);
    const second = ("0" + date.getSeconds()).slice(-2);
    return `${year}-${month}-${day} ${hour}:${minute}:${second}`;
}