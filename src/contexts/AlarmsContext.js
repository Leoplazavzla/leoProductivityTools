import React, {useContext, useEffect, useState} from "react";
import {doc, getDoc, setDoc, updateDoc} from "firebase/firestore";
import db from "../firebase/firebaseConfig";
import {useAuth} from "./AuthContext"

const AlarmContext = React.createContext(1);

export function useAlarm() {
    return useContext(AlarmContext);
}

export function AlarmProvider({children}) {
    const {currentUser} = useAuth();

    const fakeData = [
        {id: 1, name: "first alarm", date: new Date()},
        {id: 2, name: "Second Alarm", date: new Date()},
        {id: 3, name: "Third Alarm", date: new Date()}
    ];

    const [loading, setLoading] = useState(true);
    const [alarmArray, setAlarmArray] = useState(null);
    const [currentTime, setCurrentTime] = useState("");



    const searchOrCreateDoc = async (email) => {
        const docRef = await doc(db, "alarms", email);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            const docData = docSnap.data();
            return docData.alarm;
        } else {
            await setDoc(docRef, {alarm: [...fakeData]})
            const docSnap = await getDoc(docRef);
            const docData = docSnap.data()
            return docData.alarm;
        }
    }

    const formatTime = (value) => {
        if(value < 10){
            return '0';
        }else {
            return '';
        }
    }

    useEffect(() => {

        const fetchAlarms = async () => {
            const fetchedAlarms = await searchOrCreateDoc(currentUser.email);
            await setAlarmArray(fetchedAlarms)
            setLoading(false)
            return fetchedAlarms

        }
        fetchAlarms().then(() => {

        })
    }, [])

    const tick = () => {
        const date = new Date();
        const hour = date.getHours();
        const minute = date.getMinutes();
        const seconds = date.getSeconds();
        const actualTime = formatTime(hour) + hour + ':' + formatTime(minute) + minute + ':' + formatTime(seconds) + seconds


        setCurrentTime(actualTime)

    }

    useEffect(() => {
        const timerId = setInterval(() => {
            tick()
        }, 1000)

        return function cleanup() {
            clearInterval(timerId)
        }

        }, [])


    const addAlarm = async (name, userEmail, date) => {
        const newAlarmArray = [...alarmArray, {id: +new Date(), name: name, date: date}]

        const docRef = doc(db, "alarms", userEmail);
        await updateDoc(docRef, {picture: [...newAlarmArray]})
        setAlarmArray(newAlarmArray)
    }

    const deleteAlarm = async (alarmId, userEmail) => {
        const newAlarmArray = alarmArray.filter(
            (object) => object.id !== alarmId
        );
        const docRef = doc(db, "alarms", userEmail);
        await updateDoc(docRef, {alarm: [...newAlarmArray]});
        setAlarmArray(newAlarmArray)
    }


    const value = {
        alarmArray,
        currentTime,
        addAlarm,
        deleteAlarm,
        searchOrCreateDoc,
    }

    return (
        <AlarmContext.Provider value={value}>
            {!loading && children}
        </AlarmContext.Provider>
    )
}