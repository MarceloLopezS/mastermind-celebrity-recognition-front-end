import { redirect } from 'react-router-dom';
import { SERVER_DOMAIN } from "../../shared/utils/constants"

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
    const response = await fetch(`${SERVER_DOMAIN}/register`, fetchOptions);
    const data = await response.json();
    loader.removeAttribute('data-show');
    if (!data) return null;
    if (data.status === 'success') {
      return redirect("/email-verification");
    } else if (data.status === 'fail') {
      messageContainer.textContent = data.fail.message;
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
    const response = await fetch(`${SERVER_DOMAIN}/login`, fetchOptions);
    const data = await response.json();
    loader.removeAttribute('data-show');
    if (!data) return null;
    if (data.status === 'success') {
      return redirect("/face-detection");
    } else if (data.status === 'fail') {
      messageContainer.textContent = data.fail.message;
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

export const forgotPassword = async ({ request }) => {
  const loader = document.querySelector('.forgot-password__form .loader');
  const submitButton = document.querySelector('.forgot-password__form button[type="submit"]');
  const messageContainer = document.querySelector('.forgot-password__form .server-response');
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
    const response = await fetch(`${SERVER_DOMAIN}/forgot-password`, fetchOptions);
    const data = await response.json();
    loader.removeAttribute('data-show');
    if (!data) return null;
    if (data.status === 'success') {
      messageContainer.textContent = data.success.message;
      messageContainer.setAttribute('data-danger', '');
      submitButton.disabled = false;
    } else if (data.status === 'fail') {
      messageContainer.textContent = data.fail.message;
      messageContainer.setAttribute('data-danger', '');
      submitButton.disabled = false;
    } else if (data.status === 'user-errors') {
      Object.entries(data.errors).forEach(keyValueArray => {
        const key = keyValueArray[0];
        const value = keyValueArray[1];
        const input = document.querySelector(`.forgot-password__form input[name='${key}']`);
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

export const passwordReset = async ({ request }) => {
  const loader = document.querySelector('.password-reset__form .loader');
  const submitButton = document.querySelector('.password-reset__form button[type="submit"]');
  const messageContainer = document.querySelector('.password-reset__form .server-response');
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
    const response = await fetch(`${SERVER_DOMAIN}/password-reset`, fetchOptions);
    const data = await response.json();
    loader.removeAttribute('data-show');
    if (!data) return null;
    if (data.status === 'success') {
      return redirect("/password-reset/reset-success");
    } else if (data.status === 'fail') {
      messageContainer.textContent = data.fail.message;
      messageContainer.setAttribute('data-danger', '');
      submitButton.disabled = false;
    } else if (data.status === 'user-errors') {
      Object.entries(data.errors).forEach(keyValueArray => {
        const key = keyValueArray[0];
        const value = keyValueArray[1];
        const input = document.querySelector(`.password-reset__form input[name='${key}']`);
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

    const response = await fetch(`${SERVER_DOMAIN}/logout`, fetchOptions);
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

export const incrementEntry = async ({ request }) => {
  try {
    const requestData = await request.formData();
    const fetchOptions = {
      method: request.method,
      credentials: 'include',
      body: requestData
    }

    const response = await fetch(`${SERVER_DOMAIN}/face-detection/increment-entry`, fetchOptions);
    const data = await response.json();
    if (!data) return null;
    if (data.status === 'success') return null;
    if (data.status === 'fail') return null;
  } catch (err) {
    console.error(`Fetch error: ${err}`);
  }

  return null;
}