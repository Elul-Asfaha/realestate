import { AiOutlinePlayCircle } from "react-icons/ai";

const Home = () => {
    return (
        <div className='flex flex-col px-[10%] py-[10%] bg-[#f2e6bc] min-h-[80vh] justify-between md:justify-evenly'>
            <p className='rounded-full uppercase p-2 border border-black max-w-fit mx-auto md:mx-0'>
                property solution for all
            </p>
            <p className='text-center font-bold text-5xl md:text-left md:text-9xl uppercase max-w-[800px]'>
                echohouse style
            </p>
            <p className='text-gray-400 md:max-w-[600px] '>
                stay informed about the market with real estate news and
                insights provided by real estate professionals and goverment
                agenciess
            </p>
            <div className='flex flex-col md:flex-row text-center justify-between max-w-[500px] gap-y-5'>
                <div className='capitalize py-2 px-4 bg-black text-white rounded-full'>
                    see out case studies
                </div>
                <div className='capitalize py-2 px-4 border border-black rounded-full flex items-center justify-center gap-2'>
                    <AiOutlinePlayCircle className='text-2xl' /> watch a demo
                </div>
            </div>
        </div>
    );
};
export default Home;
