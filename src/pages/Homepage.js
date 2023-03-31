import React from 'react'
import List from '../components/List'

const Homepage = () => {
    return (
        <div className="p-2">
            <div className="d-flex justify-content-between px-2 my-2">
                <div className="h2 m-0 fw-light text-center">User List</div>
                <button className="btn btn-warning" onClick={() => window.location.href = "/add"} >Add</button>
            </div>
            <List />
        </div>
    )
}

export default Homepage