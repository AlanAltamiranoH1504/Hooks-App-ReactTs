import {useState} from "react";
import type {TrafficLigthColors} from "./types";

const colors = {
    red: "bg-red-500 animate-pulse",
    yellow: "bg-yellow-500 animate-pulse",
    green: "bg-green-500 animate-pulse",
}

export default function TrafficLigth() {
    const [light, setLight] = useState<TrafficLigthColors>("red");

    const changeColorLight = (color: TrafficLigthColors) => {
        setLight(color);
    }

    return (
        <>
            <div
                className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 flex items-center justify-center p-4">
                <div className="flex flex-col items-center space-y-8">
                    <div className={`w-32 h-32 ${light === "red" ? colors.red : 'bg-gray-400'} rounded-full`}></div>
                    <div className={`w-32 h-32 ${light === "yellow" ? colors.yellow : "bg-gray-400"} rounded-full`}></div>
                    <div className={`w-32 h-32 ${light === "green" ? colors.green : "bg-gray-400"} rounded-full`}></div>

                    {/* Botón para cambiar el estado de la luz */}
                    <div className="flex gap-2">
                        <button
                            onClick={() => changeColorLight("red")}
                            className="bg-red-500 text-white px-4 py-2 rounded-md cursor-pointer">
                            Rojo
                        </button>
                        <button
                            onClick={() => changeColorLight("yellow")}
                            className="bg-yellow-500 text-white px-4 py-2 rounded-md cursor-pointer">
                            Amarillo
                        </button>
                        <button
                            onClick={() => changeColorLight("green")}
                            className="bg-green-500 text-white px-4 py-2 rounded-md cursor-pointer">
                            Verde
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}
