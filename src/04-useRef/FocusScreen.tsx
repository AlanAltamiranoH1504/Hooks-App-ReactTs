import {useRef} from "react";

export default function FocusScreen() {
    const inputRef = useRef<HTMLInputElement | null>(null);

    const handleClick = () => {
        console.log(inputRef.current?.value);
        inputRef.current?.focus()
    }

    return (
        <>
            <div className="bg-gradient flex flex-col gap-4">
                <h1 className="text-2xl font-thin text-white">Focus Screen</h1>
                <input
                    ref={inputRef}
                    autoFocus={true} className="border px-3 py-2 rounded-lg shadow bg-gray-50 text-black"/>

                <button
                    onClick={handleClick}
                    className="border px-3 py-2 rounded-lg bg-blue-500 text-white font-medium border-blue-500 cursor-pointer hover:bg-blue-600 transition-colors duration-1000">Set
                    Focus
                </button>
            </div>
        </>
    )
}
