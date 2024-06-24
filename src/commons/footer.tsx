import { Link } from "react-router-dom";

const Footer = () => {
    return <>
        <div className='text-[#107070] bg-[#F4F3EF] py-10'>
            <div className='text-center text-3xl font-sans font-bold pb-3 pt-6'>Subscribe to My Newsletter</div>
            <div className='flex  justify-center px-5 py-2 gap-3'>
                <input type="email" name="" placeholder='Enter your email here*' id="" className='py-1 pl-2 w-[350px] border border-black' />
                <button className='bg-[#107070] hover:bg-slate-700 text-white py-1 px-6'>Subscribe Now</button>
            </div>
            <div className='flex justify-center items-center gap-5 pt-10'>
                <Link to={'/faq'}>FAQ</Link>
                <div className='text-black'>|</div>
                <Link to={'/downloads-and-refunds'}> Downloads & Refunds</Link>
                <div className='text-black'>|</div>
                <Link to={'/terms-and-conditions'}>Terms & Conditions</Link>
            </div>
        </div>
        <div className='py-5 text-white bg-[#107070] flex justify-center'>© 2024 by House of Keto. Powered and secured by <a href="https://portfolio-naveen4.vercel.app/" className='underline pl-1' target="_blank" rel="noopener noreferrer">Naveen</a></div>
    </>
}

export default Footer;