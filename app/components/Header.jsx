import Link from 'next/link';
import React from 'react';
import { GiPerfumeBottle } from 'react-icons/gi';
import { BsCartFill } from 'react-icons/bs';
import Image from 'next/image';
import avatar from 'public/avatar.png';
import DarkMode from './DarkMode';

const Header = () => {
  return (
    <div className="navbar border-b-2 p-4">
      <div className="flex-1">
        <Link href="/" className="flex items-center">
          <GiPerfumeBottle className=" w-10 h-10  md:w-12 h-12  text-pink-600" />
          <span className="text-md md:text-lg font-semibold">FavvyScent</span>
          <span className="text-sm md:text-lg text-pink-600 font-semibold">
            Box
          </span>
        </Link>
      </div>
      <div>
        <DarkMode />
      </div>
      <div className="flex-none">
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <div className="indicator">
              <BsCartFill className="h-6 w-6" />
              <span className="badge badge-sm indicator-item">8</span>
            </div>
          </label>
          <div
            tabIndex={0}
            className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow"
          >
            <div className="card-body">
              <span className="font-bold text-lg">8 Items</span>
              <span className="text-info">Subtotal: $999</span>
              <div className="card-actions">
                <button className="btn btn-primary btn-block">View cart</button>
              </div>
            </div>
          </div>
        </div>
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <Image src={avatar} alt="avatar" />
            </div>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a className="justify-between">Profile</a>
            </li>
            <li>Settings</li>
            <li>Logout</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
