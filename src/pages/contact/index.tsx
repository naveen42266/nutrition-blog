import Header from '../../commons/header';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import InstagramIcon from '@mui/icons-material/Instagram';
import Footer from '../../commons/footer';
const Contact = () => {

    return (
        <div className='relative '>
            {/* This needs to always stay at the top */}
            <Header />
            <div className='h-screen w-full'>
                {/* Full-Screen Background with Overlay */}
                <div className='absolute top-0 left-0 right-0'>
                    <div className='bg-[#F4F3EF] grid grid-cols-12 items-center pt-36 px-[75px]'>{/*px-[75px] */}
                        <div className='col-span-6 bg-white text-center p-20'>
                            <div className='text-4xl font-bold text-[#107070] py-10'>Contact</div>
                            <div className='flex justify-center items-center gap-6 text-center py-4 pl-16'>
                                <div>Tel: 123-456-7890 </div>
                                <div>|</div>
                                <div>info@my-domain.com </div>
                            </div>
                            <div className='grid grid-cols-11 gap-5 items-center'>
                                <div className='col-span-6'><input type="text" name="" placeholder='First Name' id="" className='py-1 pl-2 border border-black w-full' /> </div>
                                <div className='col-span-6'><input type="text" name="" placeholder='Last Name' id="" className='py-1 pl-2 border border-black w-full' /> </div>
                                <div className='col-span-6'><input type="email" name="" placeholder='Email' id="" className='py-1 pl-2 border border-black w-full' /> </div>
                                <div className='col-span-6'><input type="text" name="" placeholder='Phone' id="" className='py-1 pl-2 border border-black w-full' /> </div>
                                <div className='col-span-12'><textarea name="" placeholder="Type your message here..." id="" className="py-1 pl-2 border border-black w-full" rows={5} ></textarea></div>
                            </div>
                            <div className='flex justify-center py-10'>
                                <button className='bg-[#107070] hover:bg-slate-700 text-white py-2 px-20'>Submit</button>
                            </div>
                            <div className='flex justify-center items-center gap-6 text-center py-10'>
                                <div><FacebookIcon /> Facebook</div>
                                <div><TwitterIcon /> Twitter / X</div>
                                <div> <PinterestIcon /> Pinterest </div>
                                <div><InstagramIcon /> Instagram</div>
                            </div>
                        </div>
                        <div className='col-span-6'><img className='' loading="lazy" src="https://wallpapers.com/images/hd/dramatic-side-profile-of-chris-bumstead-1f490ym8l788gktn.jpg" alt="" /></div>
                    </div>
                    <Footer />
                </div>
            </div>
        </div>
    )
}

export default Contact;