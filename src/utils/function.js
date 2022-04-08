import {toast} from 'react-toastify';

export const getWindowDimensions = () => {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}

export const notification = (type, message) => {
  toast.configure({
    autoClose: 3000,
    draggable: false,
    position: 'top-right',
    hideProgressBar: true
  });

  toast[type](message);

  return `${type}, ${message}`;
};