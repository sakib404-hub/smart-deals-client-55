import React, { use } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router";
import { AuthContext } from "../../Context/AuthContext/AuthContext";
import Swal from "sweetalert2";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const CreateProducts = () => {
    const { user } = use(AuthContext);
    const axiosSecure = useAxiosSecure();

    const path = useNavigate();
    const handleBackButton = () => {
        path('/');
    };

    const handleFormSubmission = (event) => {
        event.preventDefault();

        const form = event.target;

        const newProduct = {
            title: form.productName.value,
            price_min: form.priceMinimum.value,
            price_max: form.priceMaximum.value,
            email: form.sellerEmail.value,
            category: form.category.value,
            created_at: new Date().toISOString(),
            image: form.productImage.value,
            status: 'pending',
            location: form.location.value,
            seller_image: form.sellerImage.value,
            seller_name: form.sellerName.value,
            condition: form.condition.value,
            usage: form.usageTime.value,
            description: form.description.value,
            seller_contact: form.sellerContact.value
        };

        console.log("Collected Product Data:", newProduct);

        // fetch('http://localhost:5025/products', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify(newProduct)
        // })
        //     .then((res) => res.json())
        //     .then((data) => console.log(data))
        //     .catch((error) => console.log(error));


        // axios.post('http://localhost:5025/products', newProduct)
        //     .then((data) => {
        //         if (data.data.insertedId) {
        //             event.target.reset();
        //             Swal.fire({
        //                 title: "Your product has Been SuccessFully Added!",
        //                 text: "Your file has been deleted.",
        //                 icon: "success"
        //             });
        //         }
        //     })
        //     .catch((error) => console.log(error))

        // axiosInstance.post('/products', newProduct)
        //     .then((data) => {
        //         if (data.data.insertedId) {
        //             event.target.reset();
        //             Swal.fire({
        //                 title: "Your product has Been SuccessFully Added!",
        //                 text: "Your file has been deleted.",
        //                 icon: "success"
        //             });
        //         }
        //     })
        //     .catch((error) => console.log(error));

        axiosSecure.post(`/products`, newProduct)
            .then((res) => {
                console.log(res.data)
                if (res.data.insertedId) {
                    event.target.reset();
                    Swal.fire({
                        title: "Your product has Been SuccessFully Added!",
                        text: "Your file has been deleted.",
                        icon: "success"
                    });
                }
            })
            .catch((error) => console.log(error))
    };

    return (
        <div className="max-w-4xl mx-auto py-10">

            {/* Back Button */}
            <div className="mb-6 flex items-center justify-center">
                <button
                    onClick={handleBackButton}
                    className="flex items-center gap-2 text-gray-600 hover:text-black">
                    <FaArrowLeft />
                    Back To Home
                </button>
            </div>

            {/* Page Title */}
            <h1 cla ssName="text-4xl font-bold text-center mb-10">
                Create <span className="text-purple-600">A Product</span>
            </h1>

            {/* Form Box */}
            <div className="border rounded-xl p-10 shadow-sm bg-white">
                <form
                    onSubmit={handleFormSubmission}
                    className="grid grid-cols-1 md:grid-cols-2 gap-6"
                >

                    {/* Product Title */}
                    <div>
                        <label htmlFor="productName" className="label">
                            <span className="label-text">Product Title</span>
                        </label>
                        <input
                            type="text"
                            name="productName"
                            id="productName"
                            className="input input-bordered w-full"
                            placeholder="e.g. Yamaha Fz Guitar for Sale"
                        />
                    </div>

                    {/* Category */}
                    <div>
                        <label htmlFor="category" className="label">
                            <span className="label-text">Category</span>
                        </label>
                        <select
                            name="category"
                            id="category"
                            className="select select-bordered w-full"
                        >
                            <option disabled selected>Select a Category</option>
                            <option>Electronics</option>
                            <option>Vehicles</option>
                            <option>Furniture</option>
                            <option>Others</option>
                        </select>
                    </div>

                    {/* Min Price */}
                    <div>
                        <label htmlFor="priceMinimum" className="label">
                            <span className="label-text">Minimum Price ($)</span>
                        </label>
                        <input
                            name="priceMinimum"
                            id="priceMinimum"
                            type="number"
                            className="input input-bordered w-full"
                            placeholder="e.g. 18.5"
                        />
                    </div>

                    {/* Max Price */}
                    <div>
                        <label htmlFor="priceMaximum" className="label">
                            <span className="label-text">Maximum Price ($)</span>
                        </label>
                        <input
                            name="priceMaximum"
                            id="priceMaximum"
                            type="number"
                            className="input input-bordered w-full"
                            placeholder="Optional"
                        />
                    </div>

                    {/* Product Condition */}
                    <div>
                        <label className="label">
                            <span className="label-text">Product Condition</span>
                        </label>

                        <div className="flex items-center gap-6">
                            <label className="cursor-pointer flex items-center gap-2">
                                <input
                                    type="radio"
                                    name="condition"
                                    value="Brand New"
                                    className="radio"
                                    defaultChecked
                                />
                                <span>Brand New</span>
                            </label>

                            <label className="cursor-pointer flex items-center gap-2">
                                <input
                                    type="radio"
                                    name="condition"
                                    value="Used"
                                    className="radio"
                                />
                                <span>Used</span>
                            </label>
                        </div>
                    </div>

                    {/* Usage Time */}
                    <div>
                        <label htmlFor="usageTime" className="label">
                            <span className="label-text">Product Usage Time</span>
                        </label>
                        <input
                            type="text"
                            name="usageTime"
                            id="usageTime"
                            className="input input-bordered w-full"
                            placeholder="e.g. 1 year 3 month"
                        />
                    </div>

                    {/* Product Image URL */}
                    <div className="md:col-span-2">
                        <label htmlFor="productImage" className="label">
                            <span className="label-text">Product Image URL</span>
                        </label>
                        <input
                            type="text"
                            name="productImage"
                            id="productImage"
                            className="input input-bordered w-full"
                            placeholder="https://..."
                        />
                    </div>

                    {/* Seller Name */}
                    <div>
                        <label htmlFor="sellerName" className="label">
                            <span className="label-text">Seller Name</span>
                        </label>
                        <input
                            type="text"
                            name="sellerName"
                            id="sellerName"
                            defaultValue={user?.displayName}
                            className="input input-bordered w-full"
                            placeholder="e.g. Artisan Roasters"
                            readOnly
                        />
                    </div>

                    {/* Seller Email */}
                    <div>
                        <label htmlFor="sellerEmail" className="label">
                            <span className="label-text">Seller Email</span>
                        </label>
                        <input
                            type="email"
                            name="sellerEmail"
                            defaultValue={user?.email}
                            id="sellerEmail"
                            className="input input-bordered w-full"
                            placeholder="seller@example.com"
                            readOnly
                        />
                    </div>

                    {/* Seller Contact */}
                    <div>
                        <label htmlFor="sellerContact" className="label">
                            <span className="label-text">Seller Contact</span>
                        </label>
                        <input
                            type="text"
                            name="sellerContact"
                            id="sellerContact"
                            className="input input-bordered w-full"
                            placeholder="e.g. +1-555-1234"
                        />
                    </div>

                    {/* Seller Image URL */}
                    <div>
                        <label htmlFor="sellerImage" className="label">
                            <span className="label-text">Seller Image URL</span>
                        </label>
                        <input
                            type="text"
                            name="sellerImage"
                            defaultValue={user?.photoURL}
                            readOnly
                            id="sellerImage"
                            className="input input-bordered w-full"
                            placeholder="https://..."
                        />
                    </div>

                    {/* Location */}
                    <div className="md:col-span-2">
                        <label htmlFor="location" className="label">
                            <span className="label-text">Location</span>
                        </label>
                        <input
                            type="text"
                            name="location"
                            id="location"
                            className="input input-bordered w-full"
                            placeholder="City, Country"
                        />
                    </div>

                    {/* Description */}
                    <div className="md:col-span-2">
                        <label htmlFor="description" className="label">
                            <span className="label-text">Product Description</span>
                        </label>
                        <textarea
                            name="description"
                            id="description"
                            className="textarea textarea-bordered w-full"
                            rows="4"
                            placeholder="Write a short description about your product..."
                        ></textarea>
                    </div>

                    {/* Submit Button */}
                    <button className="btn bg-gradient-to-r from-purple-500 to-purple-700 text-white col-span-1 md:col-span-2 mt-4">
                        Create A Product
                    </button>

                </form>
            </div>
        </div>
    );
};

export default CreateProducts;
