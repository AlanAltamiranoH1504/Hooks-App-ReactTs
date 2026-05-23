import {useTrafficLigth} from "./hooks/useTrafficLigth.ts";



export default function TrafficLigthWithEffect() {
    const {
        light,
        countDown,
        colors
    } = useTrafficLigth();

    return (
        <>
            <div
                className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 flex items-center justify-center p-4">
                <div className="flex flex-col items-center space-y-8">
                    <h1 className="text-2xl font-thin">Semaforo con useEeffect</h1>
                    <h2 className="text-xl">Countdown {countDown}</h2>

                    <div className="w-64 bg-gray-700 rounded-full h-2">
                        <div className="bg-blue-500 h-2 rounded-full transition-all duration-1000 ease-linear"
                             style={{width: `${(countDown / 5) * 100}%`}}>
                        </div>
                    </div>

                    <div className={`w-32 h-32 ${light === "red" ? colors.red : 'bg-gray-400'} rounded-full`}></div>
                    <div
                        className={`w-32 h-32 ${light === "yellow" ? colors.yellow : "bg-gray-400"} rounded-full`}></div>
                    <div className={`w-32 h-32 ${light === "green" ? colors.green : "bg-gray-400"} rounded-full`}></div>
                </div>
            </div>
        </>
    )
}
