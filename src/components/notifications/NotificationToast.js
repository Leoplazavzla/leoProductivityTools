import React from "react"
import {toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

export const errorToast =  (message) => {
    toast.error(message, {
        position: toast.POSITION.BOTTOM_RIGHT,
        autoClose: 2000
    });
}

export const successToast =  (message) => {
    toast.success(message, {
        position: toast.POSITION.BOTTOM_RIGHT,
        autoClose: 2000
    });
}

export const warningToast =  (message) => {
    toast.warn(message, {
        position: toast.POSITION.BOTTOM_RIGHT,
        autoClose: 2000
    });
}

export const infoToast =  (message) => {
    toast.info(message, {
        position: toast.POSITION.BOTTOM_RIGHT,
        autoClose: 2000
    });
}