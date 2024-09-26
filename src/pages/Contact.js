// src/pages/Contact.js
import React from 'react';

const Contact = () => {
    return (
        <div className="container mx-auto my-20">
            <h2 className="text-3xl font-bold text-center">Contact Me</h2>
            <form className="max-w-md mx-auto mt-8">
                <div className="mb-4">
                    <label className="block text-gray-700">Name</label>
                    <input type="text" className="border rounded w-full py-2 px-3" />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Email</label>
                    <input type="email" className="border rounded w-full py-2 px-3" />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Message</label>
                    <textarea className="border rounded w-full py-2 px-3" rows="4"></textarea>
                </div>
                <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">Send</button>
            </form>
        </div>
    );
};

export default Contact;
