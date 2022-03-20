import React, {useContext, useEffect, useState} from "react";
import {deleteDoc, doc} from "firebase/firestore";
import db from "../firebase/firebaseConfig";
import {useAuth} from "./AuthContext"
import {Howl} from "howler";
import {addDoc, collection, getDocs} from "firebase/firestore/dist/index.mjs";
import * as NotificationToast from "../components/notifications/NotificationToast"
import Strings from "../resources/Strings";

const AlarmContext = React.createContext(1);

export function useAlarm() {
    return useContext(AlarmContext);
}

export function AlarmProvider({children}) {
    const {currentUser} = useAuth();

    const [loading, setLoading] = useState(true);
    const [alarmArray, setAlarmArray] = useState(null);
    const [alarmName, setAlarmName] = useState("");
    const [currentTime, setCurrentTime] = useState("");
    const [alarmSound, setAlarmSound] = useState(null);
    const [alarmId, setAlarmId] = useState(false);
    const [alarmTime, setAlarmTime] = useState("")

    const readAlarmDocs = async (userEmail) => {
        const alarmsDocRef = await collection(db, `${userEmail}.alarms`);
        const docSnap = await getDocs(alarmsDocRef);
        const newAlarmArray = docSnap.docs.map((doc) => ({...doc.data(), id: doc.id}))
        return newAlarmArray
    }

    useEffect(() => {

        const fetchAlarms = async() => {
            const fetchedAlarms = await readAlarmDocs(currentUser.email)
            await setAlarmArray(fetchedAlarms)
            setLoading(false)
            return fetchedAlarms
        }
        fetchAlarms().then(() => {});
    }, [])

    const addAlarm = async (userEmail, name, time) => {
        const newAlarm = {name: name, time: time}
        const alarmsDocRef = await collection(db, `${userEmail}.alarms`);
        const alarm = await addDoc(alarmsDocRef, newAlarm);
        NotificationToast.successToast(Strings.alarm.success)
        setAlarmArray([
            ...alarmArray,
            {...newAlarm, id: alarm.id}
        ])
    }

    const deleteAlarm = async (alarmId, userEmail) => {
        const alarmToDelete = doc(db, `${userEmail}.alarms`, alarmId)
        await deleteDoc(alarmToDelete);
        setAlarmSound(null)
        NotificationToast.errorToast(Strings.alarm.delete)

        const filteredAlarmArray = alarmArray.filter((alarm)=>
            alarm.id !== alarmId)
        setAlarmArray(filteredAlarmArray)
    }

    const formatTime = (value) => {
        if(value < 10){
            return '0';
        }else {
            return '';
        }
    }

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

    const playAlarmSound = (src) => {
        const sound = new Howl({
            src
        })
        sound.play();
        setAlarmSound(sound)
    }

    const stopAlarmSound = () => {
        const sound = alarmSound
        sound.stop();
        NotificationToast.infoToast(Strings.alarm.stop)
    }

    const value = {
        alarmArray,
        alarmName,
        setAlarmName,
        currentTime,
        alarmSound,
        setAlarmSound,
        alarmTime,
        setAlarmTime,
        alarmId,
        setAlarmId,
        addAlarm,
        deleteAlarm,
        //searchOrCreateDoc,
        playAlarmSound,
        stopAlarmSound,

    }

    return (
        <AlarmContext.Provider value={value}>
            {!loading && children}
        </AlarmContext.Provider>
    )
}