import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { FaApple } from 'react-icons/fa';

const RightComponent = () => {
    return (
        <div className="right-container absolute top-0 left-0 lg:left-[41%] bg-gray-100 w-full lg:w-[59%] h-full">
            <div className="form relative w-96 lg:w-auto lg:max-w-[350px] left-[21%] lg:left-[31.50%] top-[15%]">
                <h3 className="text-3xl font-bold leading-[44px] font-montserrat">Sign In</h3>
                <p className="font-lato">Sign in to your account</p>
                <div className="flex w-96 mt-6">
                    <div className="cursor-pointer inline-block h-8 pt-2 w-44 mr-2.5 font-montserrat text-xs pl-5 rounded-[10px] bg-white p-1"><FcGoogle size={15} className="inline-block mr-2"/> Sign in with Google</div>
                    <div className="cursor-pointer inline-block h-8 pt-2 w-44 ml-2.5 font-montserrat text-xs pl-5 rounded-[10px] bg-white p-1"><FaApple size={15} className="inline-block mr-2"/>Sign in with Apple</div>
                </div>
                <div className="mt-8">
                    <form action="" className="rounded-[20px] w-full lg:w-96 bg-white p-8 mb-5">
                        <label htmlFor="email" className="font-lato">Email address</label>
                        <input className="rounded-[10px] font-lato pl-4 py-2.5 outline-none bg-gray-300 h-10 w-full lg:w-80 mt-2.5 mb-5" type="text" name="email" id="email" required/>
                        <label htmlFor="pass" className="font-lato">Password</label>
                        <input className="rounded-[10px] font-lato pl-4 py-2.5 outline-none bg-gray-300 h-10 w-full lg:w-80 mt-2.5 mb-5" type="password" name="pass" id="pass" required/>
                        <a href="/" className="text-blue-500 font-lato">Forget password ?</a>
                        <input className="cursor-pointer rounded-[10px] font-montserrat mt-5 py-2 outline-none text-white bg-black h-10 w-full lg:w-80 mb-5" type="submit" value="Sign In" />
                    </form>
                    <p className="ml-16 font-lato text-gray-500">Don't have an account? <a href="/" className="text-blue-500">Register here</a></p>
                </div>
            </div>
        </div>
    )
}

export default RightComponent;
