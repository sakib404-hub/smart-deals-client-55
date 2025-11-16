import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { useNavigate } from "react-router";

const ProductCard = ({ product }) => {
    const {
        _id,
        title,
        price_min,
        price_max,
        image,
        category,
        location,
        seller_image,
        seller_name,
        condition,
    } = product;

    const path = useNavigate();
    const handleViewDetailsButtonClick = () => {
        path(`/productDetails/${_id}`)
    }

    return (
        <div className="bg-white rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition p-4">

            {/* Product Image */}
            <div className="w-full h-56 rounded-lg overflow-hidden">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover hover:scale-105 transition"
                />
            </div>

            {/* Content */}
            <div className="mt-4 space-y-2">

                {/* Title */}
                <h2 className="text-lg font-semibold text-gray-900 leading-tight">
                    {title}
                </h2>

                {/* Category + Condition */}
                <p className="text-sm text-gray-500 flex justify-between">
                    <span>{category}</span>
                    <span className="capitalize">{condition}</span>
                </p>

                {/* Price */}
                <p className="text-xl font-bold text-purple-600">
                    ৳{price_min} – ৳{price_max}
                </p>

                {/* Location */}
                <div className="flex items-center text-gray-500 text-sm">
                    <FaMapMarkerAlt className="mr-1 text-purple-500" />
                    {location}
                </div>

                {/* Seller Info */}
                <div className="flex items-center gap-2 pt-2 border-t mt-3">
                    <img
                        src={seller_image}
                        alt={seller_name}
                        className="w-10 h-10 rounded-full object-cover border"
                    />
                    <div>
                        <p className="font-medium text-gray-900">{seller_name}</p>
                        <p className="text-xs text-gray-500">Seller</p>
                    </div>
                </div>

                {/* View Button */}
                <button
                    onClick={handleViewDetailsButtonClick}
                    className="btn w-full mt-4 bg-purple-600 text-white hover:bg-purple-700 border-none rounded-lg">
                    View Details
                </button>
            </div>
        </div>
    );
};

export default ProductCard;
