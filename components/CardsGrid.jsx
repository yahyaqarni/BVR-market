import React from 'react';

const CardsGrid = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {/* Card 1 */}
            <div className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center">
                <img src="/images/img.jpg" alt="Circle Image 1" className="w-24 h-24 rounded-full mb-4" />
                <h2 className="text-xl font-bold mb-2">Title 1</h2>
                <button className="bg-blue-500 text-white py-2 px-4 rounded-full focus:outline-none focus:ring focus:bg-blue-600 hover:bg-blue-600 transition duration-300">Button</button>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center">
                <img src="/images/img.jpg" alt="Circle Image 2" className="w-24 h-24 rounded-full mb-4" />
                <h2 className="text-xl font-bold mb-2">Title 2</h2>
                <button className="bg-blue-500 text-white py-2 px-4 rounded-full focus:outline-none focus:ring focus:bg-blue-600 hover:bg-blue-600 transition duration-300">Button</button>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center">
                <img src="/images/img.jpg" alt="Circle Image 3" className="w-24 h-24 rounded-full mb-4" />
                <h2 className="text-xl font-bold mb-2">Title 3</h2>
                <button className="bg-blue-500 text-white py-2 px-4 rounded-full focus:outline-none focus:ring focus:bg-blue-600 hover:bg-blue-600 transition duration-300">Button</button>
            </div>

            {/* Card 4 */}
            <div className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center">
                <img src="/images/img.jpg" alt="Circle Image 4" className="w-24 h-24 rounded-full mb-4" />
                <h2 className="text-xl font-bold mb-2">Title 4</h2>
                <button className="bg-blue-500 text-white py-2 px-4 rounded-full focus:outline-none focus:ring focus:bg-blue-600 hover:bg-blue-600 transition duration-300">Button</button>
            </div>

            {/* Card 5 */}
            <div className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center">
                <img src="/images/img.jpg" alt="Circle Image 5" className="w-24 h-24 rounded-full mb-4" />
                <h2 className="text-xl font-bold mb-2">Title 5</h2>
                <button className="bg-blue-500 text-white py-2 px-4 rounded-full focus:outline-none focus:ring focus:bg-blue-600 hover:bg-blue-600 transition duration-300">Button</button>
            </div>

            {/* Card 6 */}
            <div className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center">
                <img src="/images/img.jpg" alt="Circle Image 6" className="w-24 h-24 rounded-full mb-4" />
                <h2 className="text-xl font-bold mb-2">Title 6</h2>
                <button className="bg-blue-500 text-white py-2 px-4 rounded-full focus:outline-none focus:ring focus:bg-blue-600 hover:bg-blue-600 transition duration-300">Button</button>
            </div>
        </div>
    );
}

export default CardsGrid;
