import React from 'react';
import { useNavigate } from 'react-router-dom';

const Card = ({ item }) => {
    const navigate = useNavigate();
    return (
        <div className="col-12 col-md-6 col-sm-12 col-lg-3 p-2">
            <div className="card pointer shadow-sm rounded-4 p-2" onClick={() => window.location.href = `/edit/${item?.id}`}>
                <div className="card-body p-2">
                    <div className="d-flex flex-column position-relative">
                        <div className="d-flex flex-row align-items-center justify-content-start">
                            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp"
                                alt="Generic placeholder image"
                                className="rounded-4"
                                style={{ width: "50px" }}
                            />
                            <small className="truncate-title m-0 ms-3">{item?.title}</small>
                        </div>
                        <div className="mt-2" style={{ height: "100px" }}>
                            <div className="d-flex justify-content-start rounded-3 p-2 mb-2"
                                style={{ backgroundColor: "#efefef" }}>
                                <p className="truncate-line-clamp small text-muted mb-1">{item?.body}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card