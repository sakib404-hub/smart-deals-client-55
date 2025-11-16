import React, { use } from 'react';
import { NavLink, useNavigate } from 'react-router';
import { FaSignInAlt, FaSignOutAlt } from 'react-icons/fa';
import { AuthContext } from '../../Context/AuthContext/AuthContext';

const Navbar = () => {
    const { user, logOut } = use(AuthContext);
    const path = useNavigate();
    const handleLoginButtonClick = () => {
        path('/login');
    }
    const handleSingOutButtonClick = () => {
        logOut()
            .then(() => {
                console.log('SignOut SuccessFull');
            })
            .catch((error) => {
                console.log(error.message);
            })
    }
    const links = (
        <div className='text-base font-semibold flex flex-cols lg:flex-row gap-6'>
            <NavLink className={'nav-link px-2'} to={'/'}>Home</NavLink>
            <NavLink className={'nav-link px-2'} to={'/allproducts'}>All Products</NavLink>
            <NavLink className={'nav-link px-2'} to={'/myProducts'}>My Products</NavLink>
            <NavLink className={'nav-link px-2'} to={'/mybids'}>My Bids</NavLink>
            <NavLink className={'nav-link px-2'} to={'/createProducts'}>Create Products</NavLink>
        </div>
    );

    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul tabIndex="-1" className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <a className="text-3xl font-bold lg:p-2">Smart<span className='text-[#8249EB]'>Deals</span></a>
            </div>

            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>

            <div className="navbar-end flex gap-2 lg:px-4">
                {
                    user && <div className='tooltip tooltip-bottom'
                        data-tip={user.displayName || 'User'}>
                        <div className="w-10 h-10 rounded-full overflow-hidden border">
                            <img
                                src={user.photoURL}
                                alt="User" />
                        </div>
                    </div>
                }
                {
                    user ? <button
                        onClick={handleSingOutButtonClick}
                        className='btn btn-error flex items-center gap-2'><FaSignOutAlt></FaSignOutAlt> LogOut</button> :
                        <button className="btn btn-primary flex items-center gap-2"
                            onClick={handleLoginButtonClick}>
                            <FaSignInAlt /> Login
                        </button>
                }
            </div>
        </div>
    );
};

export default Navbar;