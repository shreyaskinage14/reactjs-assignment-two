import axios from 'axios';
import React, { useEffect, useState } from 'react'
import ReactPaginate from 'react-paginate';
import { BASE_URL } from "../constants";
import Card from './Card'

const List = () => {

    const [posts, setposts] = useState(null);
    const [load, setLoad] = useState(true);

    useEffect(() => {
        axios.get(BASE_URL + "/posts")
            .then((res) => {
                if (res && res.data) {
                    res.data.length = 10;
                    setposts(res.data);
                }
                setLoad(false);
            })
            .catch(err => {
                if (err) {
                    setLoad(false);
                    setposts(null);
                }
            })
        return () => {
            setposts(null);
        }
    }, [])


    return (
        <div className="d-flex row p-0 m-0 justify-content-start align-items-center flex-wrap">
            {load ?
                <div className='w-100 d-flex justify-content-center align-items-center' style={{ height: "calc(100vh - 60px)" }}>
                    <div className="spinner-border" role="status">
                        <span className="sr-only d-none">Loading...</span>
                    </div>
                </div>
                :
                posts && posts.length > 0 ? posts.map((post, index) => (
                    <Card item={post} key={index} />
                )) :
                    <div className='w-100 h-100 d-flex justify-content-center align-items-center'>
                        <h5>No Data Found</h5>
                    </div>
            }
        </div>
    )
}

export default List