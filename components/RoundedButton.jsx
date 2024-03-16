import React from 'react';

const RoundedButton = ({ text, onClick }) => {
    return (
        <button
            className="mt-0 rounded-full bg-primary text-white text-lg py-2 px-12 focus:outline-none focus:ring focus:bg-blue-600 hover:bg-blue-600 transition duration-300"
            onClick={onClick}
        >
            {text}
        </button>
    );
}

export default RoundedButton;