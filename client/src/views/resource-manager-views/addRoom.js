import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../../components/resource-person-component/resource-person-nav-bar';
import { useState } from 'react';
import axios from 'axios';

function AddRoom() {

    const [name, setname] = useState()
    const [rentPerDay, setrentperday] = useState()
    const [description, setdescription] = useState()
    const [type, settype] = useState()
    const [imageurl1, setimageurl1] = useState()
    const [imageurl2, setimageurl2] = useState()
    const [imageurl3, setimageurl3] = useState()

    async function addRoom() {
        const newRoom = {
            name,
            rentPerDay,
            description,
            type,
            imageUrls: [imageurl1, imageurl2, imageurl3]
        }

        try {
            const result = await (await axios.post('room/add', newRoom)).data
            console.log(result)
        } catch (error) {
            console.log(error)
        }

        window.location = '/resource-person';
    }

    return (
        <><Navbar />
            <div className='row'>

                <div className='col-md-5 m-5'>
                    <input type='text' className='form-control m-1' placeholder='Room name'
                        value={name} onChange={(e) => { setname(e.target.value) }}
                    />
                    <input type='text' className='form-control m-1' placeholder='Rent per day'
                        value={rentPerDay} onChange={(e) => { setrentperday(e.target.value) }}
                    />
                    <input type='text' className='form-control m-1' placeholder='description'
                        value={description} onChange={(e) => { setdescription(e.target.value) }}
                    />
                    <input type='text' className='form-control m-1' placeholder='Room type'
                        value={type} onChange={(e) => { settype(e.target.value) }}
                    />
                </div>
                <div className='col-md-5 m-5'>

                    <input type='text' className='form-control m-1' placeholder='Image URL 1'
                        value={imageurl1} onChange={(e) => { setimageurl1(e.target.value) }}
                    />
                    <input type='text' className='form-control m-1' placeholder='Image URL 2'
                        value={imageurl2} onChange={(e) => { setimageurl2(e.target.value) }}
                    />
                    <input type='text' className='form-control m-1' placeholder='Image URL 3'
                        value={imageurl3} onChange={(e) => { setimageurl3(e.target.value) }}
                    />

                    <div className='text-right'>
                        <button className='btn btn-primary mt-2' onClick={addRoom}>Add Room</button>
                    </div>
                </div>

            </div></>
    );
}

export default AddRoom;