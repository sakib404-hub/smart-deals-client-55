import React, { use, useEffect, useState } from 'react';
import { AuthContext } from '../../Context/AuthContext/AuthContext';
import Swal from 'sweetalert2';

const MyBids = () => {
    const { user } = use(AuthContext)
    const [mybids, setMybids] = useState([]);
    useEffect(() => {
        if (user?.email) {
            fetch(`http://localhost:5025/bids??email=${user.email}`)
                .then((res) => res.json())
                .then((data) => setMybids(data))
                .catch((error) => console.log(error.message))
        }
    }, [user?.email])
    const handleRemovebid = (id) => {
        console.log('button Clicked!', id);
        Swal.fire({
            title: "Are you sure, you want to delete it?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5025/bids/${id}`, {
                    method: 'DELETE'
                })
                    .then((res) => res.json())
                    .then((data) => {
                        if (data.deletedCount) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                            const remainingBids = mybids.filter((bid) => bid._id !== id);
                            setMybids(remainingBids);
                        }
                    })
                    .catch((error) => console.log(error.message))
            }
        });
    }
    return (
        <div className='my-10'>
            <h3 className='text-5xl text-center font-bold my-4'>My Bids : <span
                className='text-primary'>{mybids.length}</span>
            </h3>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                SL No.
                            </th>
                            <th>Buyer</th>
                            <th>Product</th>
                            <th>Bid Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            mybids.map((bid, index) => {
                                return <tr key={bid._id}>
                                    <th>
                                        {
                                            index + 1
                                        }
                                    </th>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle h-12 w-12">
                                                    <img
                                                        src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                                                        alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">
                                                    {
                                                        bid.name
                                                    }
                                                </div>
                                                <div className="text-sm opacity-50">Bangladesh</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        Zemlak, Daniel and Leannon
                                        <br />
                                        <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
                                    </td>
                                    <td className="font-semibold">
                                        $ {
                                            bid.price
                                        }
                                    </td>
                                    <th>
                                        <button
                                            onClick={() => handleRemovebid(bid._id)}
                                            className="btn btn-outline btn-xs">
                                            Remove Bid
                                        </button>
                                    </th>
                                </tr>
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyBids;