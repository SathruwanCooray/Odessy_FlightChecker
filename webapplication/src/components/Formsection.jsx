import React, { useState } from "react";
import Dropdown from "./Dropdown";
import axios from 'axios';

function Formsection() {
    const [airline, setAirline] = useState('');
    const [departureDate, setDepartureDate] = useState('');
    const [arrivalDate, setArrivalDate] = useState('');
    const [result, setResult] = useState(null);
    const datePlaceholder = "mm/dd/yyyy";

    function handleSelectAirline(item) {
        setAirline(item);
    }

    function buttonHandle() {
        const departureParts = departureDate.split('/');
        const arrivalParts = arrivalDate.split('/');

        if (departureParts.length !== 3 || arrivalParts.length !== 3) {
            alert("Please enter dates in mm/dd/yyyy format.");
            return;
        }

        let departureMonth = parseInt(departureParts[0], 10);
        let departureDay = parseInt(departureParts[1], 10);
        const departureYear = parseInt(departureParts[2], 10);

        let arrivalMonth = parseInt(arrivalParts[0], 10);
        let arrivalDay = parseInt(arrivalParts[1], 10);
        const arrivalYear = parseInt(arrivalParts[2], 10);

        if (isNaN(departureMonth) || isNaN(departureDay) || isNaN(departureYear) ||
            isNaN(arrivalMonth) || isNaN(arrivalDay) || isNaN(arrivalYear)) {
            alert("Please enter valid dates in mm/dd/yyyy format.");
            return;
        }

        departureMonth = departureMonth < 10 ? `0${departureMonth}` : departureMonth;
        departureDay = departureDay < 10 ? `0${departureDay}` : departureDay;
        arrivalMonth = arrivalMonth < 10 ? `0${arrivalMonth}` : arrivalMonth;
        arrivalDay = arrivalDay < 10 ? `0${arrivalDay}` : arrivalDay;

        const formattedDepartureDate = `${departureMonth}/${departureDay}/${departureYear}`;
        const formattedArrivalDate = `${arrivalMonth}/${arrivalDay}/${arrivalYear}`;

        console.log("Formatted Departure Date:", formattedDepartureDate);
        console.log("Formatted Arrival Date:", formattedArrivalDate);
        console.log("Airline:", airline);

        const data = {
            airline: airline,
            departureDate: formattedDepartureDate,
            arrivalDate: formattedArrivalDate
        };

        axios.post('http://localhost:3000/api/searchAirlineInformation', data)
            .then(response => {
                setResult(response.data);
            })
            .catch(error => {
                console.error("Error searching for flight information:", error);
            });
    }

    function parseResult(result) {
        return result.documents || [];
    }

    return (
        <>
            {!result && (
                <div className="flex items-center justify-center p-4">
                    <div className="flex flex-col p-10 backdrop-blur-lg border-2 border-neutral-700/20 rounded-lg items-center shadow-2xl shadow-purple-600/20">
                        <h1 className="text-xl font-bold text-white pb-10">
                            Please Enter your Flight Information
                        </h1>
                        <h1 className="text-xl text-white pb-10">
                            Please Select your Airline
                        </h1>
                        <Dropdown airLine={handleSelectAirline} /> {/* Pass handler to Dropdown */}
                        <h1 className="text-xl text-white p-10">Enter your Departure date</h1>
                        <input
                            className="
                            text-center w-3/4 px-4 py-3 rounded-md 
                            bg-gray-900/50 border-2 border-pink-700/50
                            text-white placeholder-gray-400
                            focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent
                            "
                            type="text"
                            id="departureDate"
                            name="departureDate"
                            placeholder={datePlaceholder}
                            value={departureDate}
                            onChange={(e) => setDepartureDate(e.target.value)}
                        />
                        <h1 className="text-xl text-white p-10">Enter your Arrival date</h1>
                        <input
                            className="
                            text-center w-3/4 px-4 py-3 rounded-md
                            bg-gray-900/50 border-2 border-pink-700/50
                            text-white placeholder-gray-400
                            focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent
                            "
                            type="text"
                            id="arrivalDate"
                            name="arrivalDate"
                            placeholder={datePlaceholder}
                            value={arrivalDate}
                            onChange={(e) => setArrivalDate(e.target.value)}
                        />
                        <button 
                            onClick={buttonHandle} 
                            className="
                            p-2 mt-5 ml-5 w-56 rounded-full backdrop border-2
                            text-white font-bold text-md flex items-center justify-center
                            transition duration-300 ease-in-out
                            hover:bg-gradient-to-r hover:from-purple-400 hover:via-pink-500 hover:to-red-500
                            hover:border-transparent hover:border-opacity-0 hover:shadow-lg hover:shadow-pink-500/50
                            transform hover:scale-105"
                        >
                            CHECK
                        </button>
                    </div>
                </div>
            )}
            {result && (
                <div className="flex items-center justify-center p-4">
                    <div className="flex flex-col p-10 px-20 backdrop-blur-lg border-2 border-neutral-700/20 rounded-lg items-center shadow-2xl shadow-purple-600/20">
                        {result.found ? (
                            <div className="flex items-center flex-col">
                                <h2 className="text-3xl font-bold text-white pb-8">Available Flights</h2>
                                <table className="table-auto border-none text-white text-center">
                                    <thead>
                                        <tr>
                                            <th className="border-b border-gray-400 px-4 py-2">Airline</th>
                                            <th className="border-b border-gray-400 px-4 py-2">Departure Date</th>
                                            <th className="border-b border-gray-400 px-4 py-2">Arrival Date</th>
                                            <th className="border-b border-gray-400 px-4 py-2">Available Seats</th>
                                            <th className="border-b border-gray-400 px-4 py-2">Booked Seats</th>
                                            <th className="border-b border-gray-400 px-4 py-2">Price</th>
                                            <th className="border-b border-gray-400 px-4 py-2">Tax</th>
                                            <th className="border-b border-gray-400 px-4 py-2">Flight No.</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {parseResult(result).map((flight, index) => (
                                            <tr key={index}>
                                                <td className="px-4 py-2">{flight.airline}</td>
                                                <td className="px-4 py-2">{flight.departureDate}</td>
                                                <td className="px-4 py-2">{flight.arrivalDate}</td>
                                                <td className="px-4 py-2">{flight.availableSeats}</td>
                                                <td className="px-4 py-2">{flight.bookedSeats}</td>
                                                <td className="px-4 py-2">{flight.price}</td>
                                                <td className="px-4 py-2">{flight.tax}</td>
                                                <td className="px-4 py-2">{flight.flightNo}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        ) : (
                            <h2 className="text-xl font-bold text-white pb-10">{result.message}</h2>
                        )}
                        <button 
                            onClick={() => setResult(null)} 
                            className="
                            p-2 mt-5 w-56 rounded-full backdrop border-2
                            text-white font-bold text-md flex items-center justify-center
                            transition duration-300 ease-in-out
                            hover:bg-gradient-to-r hover:from-purple-400 hover:via-pink-500 hover:to-red-500
                            hover:border-transparent hover:border-opacity-0 hover:shadow-lg hover:shadow-pink-500/50
                            transform hover:scale-105"
                        >
                            EXPLORE MORE
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}

export default Formsection;