const domain = "http://localhost:8000"

export const getUserData = async () => {
    try {
        const fetchOptions = {
            method: 'GET',
            credentials : 'include',
            headers: {
                'Content-Type': 'application/json',
            }
        }
        const response = await fetch(`${domain}/user-info`, fetchOptions);
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