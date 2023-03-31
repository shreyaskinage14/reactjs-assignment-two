import React from 'react'

const Footer = () => {
    return (
        <div className="bg-dark p-2 d-flex justify-content-between px-3 mt-2">
            <p className="text-white text-center m-0 small">Copyright&reg;</p>
            <p className="text-white text-center m-0 small">Made with <a href="https://jsonplaceholder.typicode.com/">JSON Placeholder API</a></p>
        </div>
    )
}

export default Footer