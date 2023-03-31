import React from 'react'
import { useParams } from 'react-router-dom';

const Breadcrum = () => {
    let path = window.location.pathname;
    let id = window.location.pathname.split("/")[2];
    console.log(id);

    return (
        <div className="bg-warning">
            <nav aria-label="breadcrumb" className="p-4">
                <ol className="breadcrumb m-0">
                    {path.includes("/") && <li className="breadcrumb-item"><a className={path === "/" ? "text-dark" : "text-decoration-none text-muted"} href="/">Home</a></li>}
                    {path.includes("/add") && <li className="breadcrumb-item"><a className={path.includes("/add") ? "text-dark" : "text-decoration-none text-muted"} href="/add">Add User</a></li>}
                    {path.includes("/edit") && <li className="breadcrumb-item"><a className={path.includes("/edit") ? "text-dark" : "text-decoration-none text-muted"} href={`/edit/${id}`}>Edit User</a></li>}
                </ol>
            </nav>
        </div>
    )
}

export default Breadcrum