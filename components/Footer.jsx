import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-primary text-white py-4">
            <div className="container mx-auto">
                <div className="flex justify-between items-center">
                    <p className="text-sm">&copy; {new Date().getFullYear()} BVR</p>
                    <ul className="flex space-x-4">
                        <li><a href="#" className="hover:text-blue-500">Home</a></li>
                        <li><a href="#" className="hover:text-blue-500">About</a></li>
                        <li><a href="#" className="hover:text-blue-500">Contact</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
