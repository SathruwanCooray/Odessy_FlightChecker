import React from "react";
import Formsection from "../components/Formsection";


function FlightCheck() {
    return (
        <>
            <div className="py-10 flex items-center justify-center">
                <h1 className="text-6xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-transparent bg-clip-text leading-normal">
                    Check your Flight
                </h1>
            </div>
            <div className="fade-in-up">
                <Formsection />
            </div>
        </>
    );
}

export default FlightCheck;
