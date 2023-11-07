import { useState } from "react";
import logo from "../assets/Logo.png";
import { AiOutlineArrowRight } from "react-icons/ai";
const Footer = () => {
    const [email, setEmail] = useState(" ");
    const handleSubscribeNewsLetter = (e) => {
        e.preventDefault();
        console.log(email);
        setEmail(" ");
    };
    return (
        <footer className='flex flex-col p-[5%] '>
            <div className='flex justify-between py-5 border-b border-black '>
                <img
                    src={logo}
                    alt=''
                    className='container max-w-[100px] md:max-w-[100px]'
                />
                <div className='font-bold flex  flex-col md:flex-row items-center justify-center text-center gap-5'>
                    <div className='px-3 py-2'>Ready to get started?</div>
                    <div className='capitalize px-3 py-2 bg-black text-white rounded-xl flex items-center'>
                        get started
                    </div>
                </div>
            </div>
            <div className='flex flex-col md:flex-row py-5 '>
                <div className='basis-4/12 flex flex-col gap-5'>
                    <p className='text-5xl font-bold uppercase text-center'>
                        subscribe newsletter
                    </p>
                    <form
                        className='flex shadow max-w-fit mx-auto md:mx-0'
                        onSubmit={handleSubscribeNewsLetter}
                    >
                        <input
                            type='email'
                            placeholder='Email address'
                            className='outline-none md:w-[450px] shadow-md pl-2'
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                        />
                        <button className='bg-black text-white p-3 rounded-e-md'>
                            <AiOutlineArrowRight />
                        </button>
                    </form>
                </div>
                <div className='basis-7/12 flex justify-evenly mt-5 md:mt-0'>
                    <div className='flex flex-col justify-between gap-5'>
                        <p className='font-bold'>Services</p>
                        <p className='text-gray-400 capitalize'>
                            email marketing
                        </p>
                        <p className='text-gray-400 capitalize'>campaigns</p>
                        <p className='text-gray-400 capitalize'>branding</p>
                        <p className='text-gray-400 capitalize'>offline</p>
                    </div>
                    <div className='flex flex-col justify-between gap-5'>
                        <p className='font-bold'>About</p>
                        <p className='text-gray-400 capitalize'>our story </p>
                        <p className='text-gray-400 capitalize'>benefits </p>
                        <p className='text-gray-400 capitalize'>team </p>
                        <p className='text-gray-400 capitalize'>careers </p>
                    </div>
                    <div className='flex flex-col gap-5'>
                        <p className='font-bold'>Help</p>
                        <p className='text-gray-400 capitalize'>FAQs</p>
                        <p className='text-gray-400 capitalize'>contact us</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};
export default Footer;
