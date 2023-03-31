import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { BASE_URL } from "../constants";

const Form = ({ formdata }) => {
    const [data, setdata] = useState({
        title: "",
        body: ""
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!data.title || !data.body) {
            toast.error("Please fill all the fields");
            return;
        }
        try {
            if (formdata) {
                axios.put(BASE_URL + "/posts/" + formdata?.id, JSON.stringify(data))
                    .then(res => {
                        toast.success("User Updated successfully");
                        setTimeout(() => {
                            window.location.href = "/";
                        }, 800);
                    })
                    .catch(e => {
                        toast.success("Error:" + e);
                    })
            } else {
                axios.post(BASE_URL + "/posts", JSON.stringify({
                    title: data.title,
                    body: data.body,
                    userId: 1
                }))
                    .then(res => {
                        toast.success("User Created successfully");
                        setTimeout(() => {
                            window.location.href = "/";
                        }, 800);
                    })
                    .catch(e => {
                        toast.success("Error:" + e);
                    })
            }
        } catch (e) {
            toast.error("Error: " + e);
        }
    };


    useEffect(() => {
        if (formdata) {
            setdata(formdata);
        };
        return () => {
            setdata({
                title: "",
                body: ""
            });
        }
    }, [formdata])


    return (
        <>
            <div className="py-4">
                <div className="col-lg-6 col-md-6 col-sm-10 col-12 p-2 m-auto">
                    <div className="card rounded-4 shadow-sm">
                        <div className="card-body p-2">
                            <div className="d-flex flex-column position-relative">
                                <div className="d-flex flex-row align-items-center justify-content-center">
                                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp"
                                        alt="Generic placeholder"
                                        className="rounded-4"
                                        style={{ width: "150px" }}
                                    />
                                </div>
                                <form onSubmit={handleSubmit}>
                                    <div className="d-flex flex-column p-4">
                                        <div className="form-group mb-3">
                                            <label className="form-label">Title</label>
                                            <input
                                                className="form-control"
                                                type="text"
                                                value={data.title}
                                                onChange={(e) => setdata({
                                                    ...data,
                                                    title: e.target.value
                                                })}
                                            />
                                        </div>
                                        <div className="form-group mb-3">
                                            <label className="form-label">Body</label>
                                            <textarea
                                                className="form-control"
                                                rows={5}
                                                type="text"
                                                value={data.body}
                                                onChange={(e) => setdata({
                                                    ...data,
                                                    body: e.target.value
                                                })}
                                            />
                                        </div>
                                        <button className="btn btn-warning" type="submit">Submit</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Form;

