import {useEffect, useState} from "react";
import type {TrafficLigthColors} from "../../01-useState/types";

export const useTrafficLigth = () =>  {
    const [light, setLight] = useState<TrafficLigthColors>("red");
    const [countDown, setCountDown] = useState(5);
    const colors = {
        red: "bg-red-500 animate-pulse",
        yellow: "bg-yellow-500 animate-pulse",
        green: "bg-green-500 animate-pulse",
    }

    // * Efecto dedicado al contador
    useEffect(() => {
        if (countDown === 0) return;

        const intervalId = setInterval(() => {
            setCountDown((prevState) => prevState - 1);
        }, 1000);

        return () => {
            clearInterval(intervalId);
        }
    }, [countDown]);

    // * Efecto dedicado al cambio de color
    useEffect(() => {
        if (countDown === 0) {
            setCountDown(5);
            if (light === "red") {
                setLight("green");
                return;
            }
            if (light === "yellow") {
                setLight("red");
                return;
            }
            if (light === "green") {
                setLight("yellow");
                return;
            }
        }
    }, [countDown, light]);

    return {
        light,
        countDown,
        colors
    }
}
