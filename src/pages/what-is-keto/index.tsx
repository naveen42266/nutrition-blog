import Header from '../../commons/header';
import Footer from '../../commons/footer';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
const Keto = () => {
    const TextWithTruncation = (text: string) => {
        const truncatedText = text.length > 175 ? text.slice(0, 175) + "..." : text; // Assuming 3 lines = 75 characters
        return (
            <p>{truncatedText}</p>
        );
    };
    const blog = [1, 2, 3, 4, 5]
    return (
        <div className='relative '>
            <Header />
            <div className='h-screen w-full'>
                <div className='absolute top-0 left-0 right-0'>
                    <div className='bg-[#F4F3EF] px-[75px]'>
                        <div className='items-center pt-36' >
                            <div className="relative h-[500px]"><img className='h-[500px] w-full object-cover' loading="lazy" src="https://static.wixstatic.com/media/5305c5_1587ccb439c8461e88264a2237e11b23~mv2_d_6048_4032_s_4_2.jpg/v1/fill/w_980,h_730,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/5305c5_1587ccb439c8461e88264a2237e11b23~mv2_d_6048_4032_s_4_2.jpg" alt="" />
                                <div className='absolute top-[35%] left-[30%] right-[30%] z-10 bg-white py-[40px]'>
                                    <div className='text-5xl text-[#107070] font-bold text-center'>What is Keto</div>
                                </div>
                            </div>
                        </div>
                        <div className='bg-white mt-[50px]'>
                            {blog?.map((each) => {
                                return (
                                    <div key={each} className={`flex w-full px-[160px] ${each==blog.length ? 'py-[50px]' :'pt-[50px]'} `}>
                                        <div className='w-[40%]'><img className='w-full h-full object-center' loading="lazy" src="https://static.wixstatic.com/media/5305c5_1b1155a6e3124adebba51245a3779d54~mv2_d_4239_2826_s_4_2.jpg/v1/fill/w_304,h_304,fp_0.50_0.50,q_90,enc_auto/5305c5_1b1155a6e3124adebba51245a3779d54~mv2_d_4239_2826_s_4_2.jpg" alt="" /></div>
                                        <div className='bg-[white] py-6 px-8 w-[60%] flex flex-col justify-between border border-gray-400'>
                                            <div>
                                                <div className='flex justify-start items-center gap-2'>
                                                    <AccountCircleIcon className='text-slate-500' fontSize='large' />
                                                    <div className='font-light text-sm'>
                                                        <div>Admin</div>
                                                        <div className='flex items-center'>May 16, 2024  <div className="w-0.5 h-0.5 mx-2 bg-black rounded-full"></div> 2 min </div>
                                                    </div>
                                                </div>
                                                <div className='px-1 text-2xl font-bold text-[#107070] hover:text-black'>Good fat vs. bad fat</div>
                                                <div className='px-2 text-base font-light text-gray-600'>{TextWithTruncation('Create a blog post subtitle that summaries your post in a few short, punchy sentences and entices your Create a blog post subtitle that summaries your post in a few short, punchy sentences and entices your Create a blog post subtitle that summaries your post in a few short, punchy sentences and entices your')}</div>
                                            </div>
                                            <div className='h-24'></div>
                                            <div className='flex flex-col justify-between px-2'>
                                                <div className='border-b border-black'></div>
                                                <div className='flex justify-between items-center p-2 font-light text-sm'>
                                                    <div className='flex items-center gap-2'>
                                                        <div>0 views</div>
                                                        <div>0 comments</div>
                                                    </div>
                                                    <div className='flex items-center'>0 <FavoriteBorderIcon className='pl-2 text-[#e84a43]' /></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    <Footer />
                </div>
            </div>
        </div>
    )
}

export default Keto;