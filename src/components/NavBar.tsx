"use client";

import Link from 'next/link';
import React from 'react';
import { useSession, signOut } from 'next-auth/react';
import { motion } from 'framer-motion';

const NavBar = () => {
    const { data: session, status } = useSession();

    const navLinks = [
        <Link href={'/'} key={'0'}>Home</Link>,
        <Link href={'/all-prompts'} key={'1'}>All Prompts</Link>,
    ];

    if (session) {
        navLinks.push(<Link href={'/create-prompts'} key={'2'}>Create Prompts</Link>);
    }

    return (
        <div className="navbar bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 backdrop-blur-lg bg-opacity-95 shadow-lg text-white sticky top-0 z-50 border-b border-white/10">
            <div className="navbar-start">
                <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden hover:bg-white/20">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                </div>
                <ul
                    tabIndex={-1}
                    className="menu menu-sm dropdown-content bg-gradient-to-br from-purple-600 to-blue-600 rounded-box z-1 mt-3 w-52 p-2 shadow-xl border border-white/20">
                    {navLinks.map((link) => (<li key={link.key}>{link}</li>))}
                </ul>
                </div>
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <Link href="/" className="btn btn-ghost text-xl font-bold hover:bg-white/20 transition-all">AI Prompt Hub</Link>
                </motion.div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-2">
                    {navLinks.map((link) => (<li key={link.key} className="hover:bg-white/20 rounded-lg transition-all">{link}</li>))}
                </ul>
            </div>
            <div className="navbar-end gap-2">
                {status === "loading" ? (
                    <span className="loading loading-spinner loading-sm"></span>
                ) : session ? (
                    <>
                        <div className="dropdown dropdown-end">
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar hover:ring-2 hover:ring-white/50 transition-all">
                                <div className="w-10 rounded-full bg-gradient-to-br from-pink-500 to-yellow-500 text-white flex items-center justify-center font-bold shadow-lg">
                                    {session.user?.name?.[0] || session.user?.email?.[0] || 'U'}
                                </div>
                            </label>
                            <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow-xl menu menu-sm dropdown-content bg-white rounded-box w-52 border border-gray-200">
                                <li className="menu-title">
                                    <span className="text-gray-700 font-semibold">{session.user?.email}</span>
                                </li>
                                <li><Link href="/create-prompts" className="hover:bg-blue-50 text-gray-700">Create Prompt</Link></li>
                                <li><a onClick={() => signOut()} className="hover:bg-red-50 text-red-600">Logout</a></li>
                            </ul>
                        </div>
                    </>
                ) : (
                    <Link href="/login" className="btn bg-white text-blue-600 hover:bg-blue-50 border-none shadow-lg hover:shadow-xl hover:scale-105 transition-all font-semibold">Login</Link>
                )}
            </div>
        </div>
    );
};

export default NavBar;