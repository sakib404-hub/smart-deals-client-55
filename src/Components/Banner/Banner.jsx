import { FaSearch } from "react-icons/fa";
import { motion } from "framer-motion";
import leftBg from '../../assets/bg-hero-left.png'

export default function SmartDealsBanner() {
    return (
        <section className="w-full bg-linear-to-br from-white via-purple-50 to-purple-100 py-20 px-4 flex flex-col items-center text-center relative overflow-hidden">
            {/* Decorative Background Lines */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 w-[400px] h-[400px] bg-contain bg-no-repeat" style={{ backgroundImage: `url(${leftBg})` }}></div>
                <div className="absolute right-0 top-0 w-[400px] h-[400px] bg-contain bg-no-repeat rotate-180" style={{ backgroundImage: `url(${leftBg})` }}></div>
            </div>
            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-4xl md:text-6xl font-bold leading-tight text-gray-900"
            >
                Deal Your <span className="text-[#8249EB]">Products</span>
                <br />
                In A <span className="text-[#8249EB]">Smart</span> Way !
            </motion.h1>

            <p className="mt-4 text-gray-600 max-w-2xl">
                SmartDeals helps you sell, resell, and shop from trusted local sellers — all in one place!
            </p>

            {/* Search Bar */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="mt-8 w-full max-w-xl flex items-center rounded-full overflow-hidden bg-white shadow-lg"
            >
                <input
                    type="text"
                    placeholder="Search for products, categories..."
                    className="input w-full px-6 py-3 rounded-l-full focus:outline-none"
                />
                <button className="btn bg-[#8249EB] hover:bg-[#6f38d4] text-white rounded-none rounded-r-full px-6">
                    <FaSearch size={20} />
                </button>
            </motion.div>

            {/* Buttons */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="mt-6 flex flex-col sm:flex-row gap-4"
            >
                <button className="btn bg-[#8249EB] hover:bg-[#6f38d4] text-white rounded-2xl shadow-lg border-none px-8 py-3">
                    Watch All Products
                </button>
                <button className="btn btn-outline border-[#8249EB] text-[#8249EB] rounded-2xl px-8 py-3 hover:bg-purple-50">
                    Post a Product
                </button>
            </motion.div>
        </section>
    );
}
