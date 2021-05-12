import axios from 'axios';

export function Getdata(url) {
    return new Promise((resolve, reject) => {
        axios({
            method: 'get',
            url: url,
            headers: { 'Content-Type': 'application/json' }
        }).then(response => {
            if (response.status == 200) resolve(response.data);
            else resolve({ Status: false, networkerr: true, Message: "Server Not Responding" })
        }).catch(error => {
            console.error(error);
            reject(error);
        });
        setTimeout(() => {
            resolve({ Status: false, networkerr: true, Message: 'Network Request TimedOut' });
        }, 5000);
    });
}

export function Postdatanew(url, data) {
    return new Promise((resolve, reject) => {
        axios.defaults.withCredentials = true;
        axios({
            method: 'post',
            url: url,
            baseURL: 'base Url',
            withCredentials: true,
            headers: { 'Content-Type': 'application/json' },
            data: data
        }).then(response => {
            if (response.status == 200) resolve(response.data);
            else resolve({ status: false, message: "Server Not Responding" })
        }).catch(error => {
            console.error(error);
            reject(error);
        });
        setTimeout(() => {
            resolve({ Status: false, Message: 'Network Request TimedOut' });
        }, 5000);
    });
}


