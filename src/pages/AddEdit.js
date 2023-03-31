import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Form from '../components/Form';
import { BASE_URL } from '../constants';
import { toast } from 'react-toastify';

const AddEdit = () => {

    const [item, setitem] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        if (id !== undefined) {
            axios.get(BASE_URL + "/posts/" + id)
                .then(res => {
                    if (res.data) {
                        setitem(res.data);
                    }
                })
                .catch(err => {
                    if (err) {
                        setitem(null);
                        toast.error("Error:" + err);
                    }
                })
        }

        return () => {
            setitem(null);
        }
    }, [id])


    return (
        <Form formdata={item} />
    )
}

export default AddEdit