import logo from "../assets/logo.png";
import { AiOutlineMenu } from "react-icons/ai";
const Nav = (props) => {
    return (
        <nav className='py-3 px-[10%] bg-[#f2e6bc]'>
            <div className='hidden md:flex justify-between'>
                <div className='flex max-w-[300px] gap-5 justify-center items-center'>
                    <div className='flex'>
                        <img src={logo} alt='' className='container' />
                    </div>
                    <div className='flex text-gray-400 gap-5'>
                        <div>Home</div>
                        <div>Blog</div>
                        <div>Pricing</div>
                        <div>Contact</div>
                    </div>
                </div>
                <div className='flex items-center text-bold'>
                    <div className='py-3 px-4'>Sign In</div>
                    <div className='py-3 px-4 bg-black text-white rounded-full'>
                        Get Started Free
                    </div>
                </div>
            </div>

            <div className='md:hidden flex justify-between'>
                <div className='flex max-w-[50px] gap-5 justify-between items-center'>
                    <img src={logo} alt='' className='container' />
                </div>
                <div
                    className='flex items-center text-bold text-3xl'
                    onClick={props.menuToggler}
                >
                    <AiOutlineMenu />
                </div>
            </div>
        </nav>
    );
};

export default Nav;
