import landscape from "../assets/landscape.png";
const Experties = () => {
    return (
        <div className='bg-gray-100 px-[10%] py-[10%] flex flex-col gap-[2rem]'>
            <div className='flex flex-col md:flex-row gap-5'>
                <div className='flex-1 py-5 flex flex-col gap-5 justify-evenly'>
                    <p className='font-bold text-4xl md:text-7xl uppercase'>
                        the comfrot interior
                    </p>
                    <p className='text-gray-500 md:w-[80%]'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Consequatur suscipit itaque dolore reprehenderit
                        magni, animi fugiat! Culpa ratione, eum itaque maxime,
                        quos non.
                    </p>
                </div>
                <div className='flex-1'>
                    <img
                        src={landscape}
                        alt=''
                        className='container rounded-xl'
                    />
                </div>
            </div>
            <div className='flex'>
                <div className='basis-8/12'>
                    <img src={landscape} alt='' className='rounded-xl' />
                </div>
            </div>
            <div className='flex flex-col md:flex-row gap-[4rem] md:my-[3rem]'>
                <div className='flex-1 flex'>
                    <img
                        src={landscape}
                        alt=''
                        className='container rounded-xl'
                    />
                </div>
                <div className='flex-1 flex flex-col gap-5 md:justify-center'>
                    <p className='text-4xl uppercase font-bold'>
                        the best places to live in your city, according to real
                        estate agents
                    </p>
                    <p className='text-gray-400'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quos odio labore animi ullam, maxime provident
                        obcaecati! Nemo, cumque, ut ipsam, illum sunt nulla
                        reiciendis soluta impedit eligendi delectus suscipit
                        aut.
                    </p>
                </div>
            </div>
        </div>
    );
};
export default Experties;
