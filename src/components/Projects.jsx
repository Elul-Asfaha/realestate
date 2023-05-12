import { AiOutlineLike } from "react-icons/ai";
import landscape from "../assets/landscape.png";
const Projects = () => {
    return (
        <div className='flex flex-col md:flex-row px-[5%] gap-y-5 md:px-[10%] py-[10%] bg-gray-900 text-white min-h-[80vh] md:justify-evenly'>
            <div className='basis-6/12 flex flex-col gap-5'>
                <p className='uppercase font-bold text-5xl'>magnificent work</p>
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Impedit deleniti hic excepturi, harum minus voluptatem,
                    totam omnis praesentium corrupti maiores dolorum quae
                    labore! Error, autem iusto. Laudantium illum quaerat
                    delectus nam. Vero asperiores quos distinctio cupiditate
                    deleniti ipsam aliquid! Totam numquam aliquid placeat in
                    tempora, et amet dicta officiis eaque.
                </p>
                <div className='flex flex-col gap-5'>
                    <div className='flex gap-5'>
                        <div className='rounded-full flex justify-center items-center p-5 border border-gray-400'>
                            <AiOutlineLike className='text-3xl' />
                        </div>
                        <div className='flex flex-col gap-2 capitalize'>
                            <div className='text-3xl font-bold'>875+</div>
                            <div className='text-gray-500'>
                                projects created
                            </div>
                        </div>
                    </div>
                    <div className='flex gap-5'>
                        <div className='rounded-full flex justify-center items-center p-5 border border-gray-400'>
                            <AiOutlineLike className='text-3xl' />
                        </div>
                        <div className='flex flex-col gap-2 capitalize'>
                            <div className='text-3xl font-bold'>320</div>
                            <div className='text-gray-500'>
                                products created
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='basis-6/12 grid grid-cols-2 gap-5'>
                <div className='flex  items-end'>
                    <img
                        src={landscape}
                        alt=''
                        className='container h-[80%] rounded-lg'
                    />
                </div>
                <div className='grid grid-rows-5 gap-y-5'>
                    <div className='row-start-1 row-end-3 flex rounded-xl w-10/12'>
                        <img
                            src={landscape}
                            alt=''
                            className='cover rounded-lg'
                        />
                    </div>
                    <div className='row-start-3 row-end-7 border flex rounded-xl'>
                        <img
                            src={landscape}
                            alt=''
                            className='cover rounded-lg'
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Projects;
