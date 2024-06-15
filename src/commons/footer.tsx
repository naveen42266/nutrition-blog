
const Footer = () => {
    return <>
        <div className='text-[#107070] bg-[#F4F3EF] py-10'>
            <div className='text-center text-2xl font-sans font-bold'>Subscribe to My Newsletter</div>
            <div className='flex  justify-center px-5 py-2 gap-3'>
                <input type="email" name="" placeholder='Enter your email here*' id="" className='py-1 pl-2 w-[350px] border border-black' />
                <button className='bg-[#107070] text-white py-1 px-6'>Subscribe Now</button>
            </div>
            <div className='flex justify-center items-center gap-5 pt-4'>
                <div>FAQ</div>
                <div className='text-black'>|</div>
                <div> Downloads & Refunds</div>
                <div className='text-black'>|</div>
                <div>Terms & Conditions</div>
            </div>
        </div>
        <div className='py-5 text-white bg-[#107070] flex justify-center'>© 2035 by House of Keto. Powered and secured by <div className='underline pl-1'>Naveen</div></div>
    </>
}

export default Footer;