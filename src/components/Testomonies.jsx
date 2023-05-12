import { ImQuotesLeft } from "react-icons/im";
import landscape from "../assets/landscape.png";
const Testomonies = () => {
    return (
        <div className='flex flex-col px-[10%] pb-5 md:pt-5 bg-gray-900 text-white min-h-[50vh]'>
            <div className='flex flex-col gap-5 md:flex-row md:justify-between py-5 md:px-[10%]'>
                <p className='text-3xl md:text-6xl text-center md:text-ellipsis max-w-[400px]'>
                    Customer are our priority
                </p>

                <p className='max-w-[350px] text-center md:text-ellipsis'>
                    Our clients are very satisfied with out service which can be
                    understood by looking at their feedback
                </p>
            </div>
            <div className='flex flex-row overflow-x-scroll scroll-smooth snap-x snap-x-mandatory'>
                <div className='flex flex-col gap-5 md:flex-row md:gap-0 min-w-[80vw] snap-start snap-always'>
                    <div className='flex-1 flex flex-col gap-y-5 md:border-r border-gray-400 px-5'>
                        <ImQuotesLeft className='text-3x' />
                        <p className='uppercase'>really recommend for stay</p>
                        <p>
                            {`"They are able to help a start up like mine scale and
                        are very responsive to all our unique needs"`}
                        </p>
                        <div className='flex gap-5'>
                            <div className='flex'>
                                <img
                                    src={landscape}
                                    alt=''
                                    className='max-w-[50px] rounded-full'
                                />
                            </div>
                            <div className='flex flex-col justify-between'>
                                <p>Yeab </p>
                                <p className='text-gray-400 '>ASN</p>
                            </div>
                        </div>
                    </div>

                    <div className='flex-1 flex flex-col gap-y-5 px-5'>
                        <ImQuotesLeft className='text-3x' />
                        <p className='uppercase'>really estate as real</p>
                        <p>
                            {`"So far we are enjoying staying in this house. Also amazing experience working together with Scorp Team. They are very passionate"`}
                        </p>
                        <div className='flex gap-5'>
                            <div className='flex'>
                                <img
                                    src={landscape}
                                    alt=''
                                    className='max-w-[50px] rounded-full'
                                />
                            </div>
                            <div className='flex flex-col justify-between'>
                                <p>Elul Asfaha</p>
                                <p className='text-gray-400 '>Student</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='flex flex-col gap-y-5 md:flex-row min-w-[80vw] snap-start snap-always'>
                    <div className='flex-1 flex flex-col gap-5 md:border-r border-gray-400 px-5'>
                        <ImQuotesLeft className='text-3x' />
                        <p className='uppercase'>really recommend for stay</p>
                        <p>
                            {`"They are able to help a start up like mine scale and
                        are very responsive to all our unique needs"`}
                        </p>
                        <div className='flex gap-5'>
                            <div className='flex'>
                                <img
                                    src={landscape}
                                    alt=''
                                    className='max-w-[50px] rounded-full'
                                />
                            </div>
                            <div className='flex flex-col justify-between'>
                                <p>Yeab </p>
                                <p className='text-gray-400 '>ASN</p>
                            </div>
                        </div>
                    </div>

                    <div className='flex-1 flex flex-col gap-y-5 px-5'>
                        <ImQuotesLeft className='text-3x' />
                        <p className='uppercase'>really estate as real</p>
                        <p>
                            {`"So far we are enjoying staying in this house. Also amazing experience working together with Scorp Team. They are very passionate"`}
                        </p>
                        <div className='flex gap-5'>
                            <div className='flex'>
                                <img
                                    src={landscape}
                                    alt=''
                                    className='max-w-[50px] rounded-full'
                                />
                            </div>
                            <div className='flex flex-col justify-between'>
                                <p>Elul Asfaha</p>
                                <p className='text-gray-400 '>Student</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Testomonies;
