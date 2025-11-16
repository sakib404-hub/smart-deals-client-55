import React, { use, useRef } from "react";
import { useLoaderData, Link } from "react-router";
import { FaArrowLeft } from "react-icons/fa";
import { AuthContext } from "../../Context/AuthContext/AuthContext";

const ProductDetails = () => {
    const { user } = use(AuthContext)
    const product = useLoaderData();
    const bidModalRef = useRef(null);

    const {
        _id,
        title,
        price_min,
        price_max,
        email,
        category,
        created_at,
        image,
        status,
        location,
        seller_image,
        seller_name,
        condition,
        usage,
        description,
        seller_contact,
    } = product;

    const handleBidModalOpen = () => {
        bidModalRef.current.showModal();
    }
    const handleBidSubmission = (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const productId = _id;
        const email = event.target.email.value;
        const price = event.target.price.value;

        const newBid = {
            productId,
            name,
            email,
            price
        }
        console.log(newBid);
    }

    return (
        <div>
            {/* product section  */}
            <section className="w-full max-w-6xl mx-auto p-6 grid grid-cols-1 md:grid-cols-5 gap-10">

                {/* Enlarged Product Image */}
                <div className="col-span-3 p-4 bg-gray-100 rounded-xl overflow-hidden flex flex-col items-center justify-center shadow">
                    <img
                        src={image}
                        alt={title}
                        className="w-full h-full object-cover rounded-2xl"
                    />
                    {/* Description */}
                    <div className="bg-white my-5 p-5 rounded-xl shadow border w-full">
                        <h2 className="font-semibold text-lg mb-4">Product Description</h2>

                        <div className="flex justify-between text-sm font-medium mb-3">
                            <p>
                                Condition: <span className="text-gray-700">{condition}</span>
                            </p>
                            <p>
                                Usage Time: <span className="text-gray-700">{usage}</span>
                            </p>
                        </div>

                        <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
                    </div>
                </div>

                {/* Compact Right Section */}
                <div className="col-span-2 flex flex-col gap-6">

                    <Link
                        to="/"
                        className="flex items-center gap-2 text-sm text-gray-600 hover:underline w-fit"
                    >
                        <FaArrowLeft /> Back To Products
                    </Link>

                    <h1 className="text-3xl font-bold text-gray-900 leading-tight">{title}</h1>

                    <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-medium w-fit">
                        {category}
                    </span>

                    <div className="bg-white p-4 shadow-md rounded-xl border">
                        <p className="text-green-600 text-2xl font-bold">
                            ${price_min} - {price_max}
                        </p>
                        <p className="text-xs text-gray-500">Price starts from</p>
                    </div>

                    {/* Product Details */}
                    <div className="bg-white p-5 rounded-xl shadow border">
                        <h2 className="font-semibold text-lg mb-3">Product Details</h2>
                        <div className="grid grid-cols-2 text-sm gap-y-2">
                            <p className="font-medium">Product ID:</p>
                            <p>{_id}</p>

                            <p className="font-medium">Posted:</p>
                            <p>{new Date(created_at).toLocaleDateString()}</p>
                        </div>
                    </div>

                    {/* Seller Info */}
                    <div className="bg-white p-5 rounded-xl shadow border">
                        <h2 className="font-semibold text-lg mb-4">Seller Information</h2>

                        <div className="flex items-center gap-3">
                            <img
                                src={seller_image}
                                alt={seller_name}
                                className="w-12 h-12 rounded-full object-cover"
                            />
                            <div>
                                <p className="font-semibold">{seller_name}</p>
                                <p className="text-xs text-gray-500">{email}</p>
                            </div>
                        </div>

                        <div className="mt-4 grid grid-cols-2 text-sm gap-y-2">
                            <p className="font-medium">Location:</p>
                            <p>{location}</p>

                            <p className="font-medium">Contact:</p>
                            <p>{seller_contact}</p>

                            <p className="font-medium">Status:</p>
                            <p>
                                <span
                                    className={`px-3 py-1 rounded-full text-xs font-semibold ${status === "pending"
                                        ? "bg-yellow-100 text-yellow-700"
                                        : status === "available"
                                            ? "bg-green-100 text-green-700"
                                            : "bg-gray-200 text-gray-600"
                                        }`}
                                >
                                    {status}
                                </span>
                            </p>
                        </div>
                    </div>

                    {/* Buy Button */}
                    <button
                        onClick={handleBidModalOpen}
                        className="w-full py-4 text-white font-semibold rounded-xl bg-linear-to-r from-purple-600 to-purple-400 hover:opacity-90 transition">
                        I Want Buy This Product
                    </button>
                </div>
            </section>
            {/* bid section */}
            <section className="p-2 lg:p-10">
                <h1 className="text-5xl font-semibold">Bids For the Product
                </h1>
                <dialog
                    ref={bidModalRef}
                    id="my_modal_5"
                    className="modal modal-bottom sm:modal-middle">
                    <div className="modal-box">
                        <h3 className="font-bold text-lg">Give the Best Offser seller can't resist</h3>
                        <form
                            onSubmit={handleBidSubmission}>
                            <fieldset className="fieldset">
                                <label
                                    htmlFor="name"
                                    className="label">Name</label>
                                <input
                                    type="name"
                                    name="name"
                                    id="name"
                                    defaultValue={user.displayName}
                                    className="input w-full text-center"
                                    readOnly />
                                <label
                                    className="label"
                                    htmlFor="email">Email
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    defaultValue={user.email}
                                    className="input w-full text-center"
                                    readOnly
                                />
                                <label htmlFor="price">Place Your Price</label>
                                <input
                                    type="number"
                                    id="price"
                                    name="price"
                                    placeholder="Your Bid Amount"
                                    className="input w-full text-center" />
                                <button
                                    className="btn btn-primary mt-4">Submit Bid</button>
                            </fieldset>
                        </form>
                        <div className="modal-action flex items-center 
                        justify-center">
                            <form method="dialog">
                                <button className="btn w-full">Cancel</button>
                            </form>
                        </div>
                    </div>
                </dialog>
            </section>
        </div>
    );
};

export default ProductDetails;
