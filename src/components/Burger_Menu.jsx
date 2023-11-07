import { AiOutlineClose } from "react-icons/ai";
import logo from "../assets/logo.png";
const Burger_Menu = (props) => {
    return (
        <div className='md:hidden fixed top-0 left-0 right-0 bottom-0 bg-[#f2e6bc] p-[5%]'>
            <div className='flex justify-between items-center'>
                <div className='flex max-w-[50px]'>
                    <img src={logo} alt='' className='container' />
                </div>
                <AiOutlineClose
                    className='text-2xl'
                    onClick={props.menuToggler}
                />
            </div>

            <div className='flex flex-col text-center text-3xl text-gray-500 gap-5'>
                <div>Home</div>
                <div>Blog</div>
                <div>Pricing</div>
                <div>Contact</div>
            </div>
        </div>
    );
};
export default Burger_Menu;
