import React, { useState } from 'react';
import DropdownItems from './DropdownItems';

function Dropdown({ airLine }) {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [selectedAirline, setSelectedAirline] = useState("Airline");

    function toggleDropdown() {
        setIsDropdownOpen(!isDropdownOpen);
    }

    function handleSelectAirline(item) {
        setSelectedAirline(item);
        setIsDropdownOpen(false); // Close dropdown after selecting an item
        airLine(item); // Pass selected airline back to parent component
    }

    return (
        <div className='flex flex-col items-center'>
            <div onClick={toggleDropdown} className='bg-gray-900/50 text-white border-2 border-pink-700/50 p-2 rounded-lg px-14 cursor-pointer '>
                {selectedAirline}
            </div>
            <DropdownItems isVisible={isDropdownOpen} selectItem={handleSelectAirline} />
        </div>
    );
}

export default Dropdown;
