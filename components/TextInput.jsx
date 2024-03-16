import Link from 'next/link'
import React from 'react'

const TextInput = ({ placeholder }) => {

    return (
        <input
            type="text"
            placeholder={placeholder}
            className="appearance-none border rounded-md py-2 px-4 bg-gray-200 placeholder-gray-400 focus:outline-none focus:bg-white focus:ring focus:border-blue-500"
        />
    );
}

export default TextInput