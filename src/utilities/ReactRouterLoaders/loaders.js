import SERVER_DOMAIN from '../../config/backEnd.js';

export const getUserData = async () => {
    try {
        const fetchOptions = {
            method: 'GET',
            credentials : 'include',
            headers: {
                'Content-Type': 'application/json',
            }
        }
        const response = await fetch(`${SERVER_DOMAIN}/user-info`, fetchOptions);
        const data = await response.json();
        if (data.status === 'success') {
            return data.userInfo;
        } else if (data.status === 'unauthorized' || data.status === 'fail'){
            return null;
        }
    } catch (err) {
        console.log(err);
        return null;
    }
}