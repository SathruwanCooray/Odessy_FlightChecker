import React from 'react';

function DropdownItems({ isVisible, selectItem }) {
    const airLines = [
        "Sri Lankan Airlines",
        "Delta Airlines",
        "American Airlines",
        "Singapore Airlines",
    ];

    if (!isVisible) return null;

    function handleItemClick(item) {

        selectItem(item);
    }

    return (
        <div className='flex flex-col border-2 border-pink-700/50 items-center text-center w-56 bg-gray-900/50 mt-2 justify-center rounded-lg shadow-lg'>
            <ul>
                {airLines.map((item, index) => (
                    <li key={index} className='text-white bg-gray-900/20 py-1 my-2 px-8 rounded-md hover:bg-slate-800' onClick={() => handleItemClick(item)}>
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default DropdownItems;
