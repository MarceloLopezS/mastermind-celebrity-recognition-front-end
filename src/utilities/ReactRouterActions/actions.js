import { redirect } from 'react-router-dom';
import serverDomain from '../../config/serverDomain.js';

export const registerUser = async ({ request }) => {
    const loader = document.querySelector('.register__form .loader');
    const submitButton = document.querySelector('.register__form button[type="submit"]');
    const messageContainer = document.querySelector('.register__form .server-response');
    loader.setAttribute('data-show', '');
    submitButton.disabled = true;
    try {
        const formData = JSON.stringify(Object.fromEntries(await request.formData()));
        const fetchOptions = {
            method: request.method,
            credentials: 'include',
            body: formData,
            headers: {
                'Content-Type': 'application/json'
            }
        };
        const response = await fetch(`${serverDomain}/register`, fetchOptions);
        const data = await response.json();
        loader.removeAttribute('data-show');
        if (!data) return null;
        if (data.status === 'success') {
            return redirect("/email-verification");
        } else if (data.status === 'fail'){
            messageContainer.textContent = data.errors.registerMessage;
            messageContainer.setAttribute('data-danger', '');
            submitButton.disabled = false;
        } else if (data.status === 'user-errors') {
            Object.entries(data.errors).forEach(keyValueArray => {
                const key = keyValueArray[0];
                const value = keyValueArray[1];
                const input = document.querySelector(`.register__form input[name='${key}']`);
                if (key === 'user-email' || key === 'user-password' || key === 'user-confirm-password') {
                    input.value = '';
                }
                input.setAttribute('placeholder', value);
                input.classList.add('invalid');
            })
        }
    } catch (err) {
        loader.removeAttribute('data-show');
        console.error(`Fetch error: ${err}`);
        messageContainer.textContent = 'We were not able to process the request. Please try again in a few moments.';
        messageContainer.setAttribute('data-danger', '');
        submitButton.disabled = false;
    };

    return null;
}

export const loginUser = async ({ request }) => {
    const loader = document.querySelector('.log-in__form .loader');
    const submitButton = document.querySelector('.log-in__form button[type="submit"]');
    const messageContainer = document.querySelector('.log-in__form .server-response');
    loader.setAttribute('data-show', '');
    submitButton.disabled = true;
    try {
        const formData = JSON.stringify(Object.fromEntries(await request.formData()));
        const fetchOptions = {
            method: request.method,
            credentials: 'include',
            body: formData,
            headers: {
                'Content-Type': 'application/json'
            }
        };
        const response = await fetch(`${serverDomain}/login`, fetchOptions);
        const data = await response.json();
        loader.removeAttribute('data-show');
        if (!data) return null;
        if (data.status === 'success') {
            return redirect("/face-detection");
        } else if (data.status === 'fail'){
            messageContainer.textContent = data.errors.loginMessage;
            messageContainer.setAttribute('data-danger', '');
            submitButton.disabled = false;
        } else if (data.status === 'user-errors') {
            Object.entries(data.errors).forEach(keyValueArray => {
                const key = keyValueArray[0];
                const value = keyValueArray[1];
                const input = document.querySelector(`.log-in__form input[name='${key}']`);
                input.value = '';
                input.setAttribute('placeholder', value);
                input.classList.add('invalid');
            })
        }
    } catch (err) {
        loader.removeAttribute('data-show');
        console.error(`Fetch error: ${err}`);
        messageContainer.textContent = 'We were not able to process the request. Please try again in a few moments.';
        messageContainer.setAttribute('data-danger', '');
        submitButton.disabled = false;
    };

    return null;
}

export const logOutUser = async ({ request }) => {
    try {
        const formData = JSON.stringify(Object.fromEntries(await request.formData()));
        const fetchOptions = {
            method: request.method,
            credentials: 'include',
            body: formData,
            headers: {
                'Content-type': 'application/json'
            }
        }

        const response = await fetch(`${serverDomain}/logout`, fetchOptions);
        const data = await response.json();
        if (!data) return null;
        if (data.status === 'success') {
            return redirect("/face-detection");
        }
    } catch (err) {
        console.error(`Fetch error: ${err}`);
    }

    return null;
}

export const sendImage = async ({ request }) => {
    try {
        const requestData = await request.formData();
        const fetchOptions = {
            method: request.method,
            credentials: 'include',
            body: requestData
        }

        const response = await fetch(`${serverDomain}/face-detection/increment-entry`, fetchOptions);
        const data = await response.json();
        if (!data) return null;
        if (data.status === 'success') {
            return null;
        }
    } catch (err) {
        console.error(`Fetch error: ${err}`);
    }

    return null;
}