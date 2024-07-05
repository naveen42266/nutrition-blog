import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Header from '../../commons/header';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import InstagramIcon from '@mui/icons-material/Instagram';
import Footer from '../../commons/footer';
import { useState } from 'react';
import { Link } from 'react-router-dom';
const Home = () => {
    const TextWithTruncation = (text: string) => {
        const truncatedText = text.length > 175 ? text.slice(0, 175) + "..." : text; // Assuming 3 lines = 75 characters
        return (
            <p>{truncatedText}</p>
        );
    };
    const post = [1, 2, 3, 4, 5]
    const allItems = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
    const [visibleCount, setVisibleCount] = useState(10);

    const handleLoadMore = () => {
        setVisibleCount((prevCount: number) => prevCount + 10);
    };

    return (
        <div className='relative '>
            {/* This needs to always stay at the top */}
            <Header />
            <div className='h-screen w-full'>
                {/* Full-Screen Background with Overlay */}
                <div className='absolute top-0 left-0 right-0'>
                    <div className="relative z-10 flex flex-col items-start justify-end h-screen text-white px-[250px] py-[100px] overflow-y-auto">
                        <img loading="lazy" src='https://static.wixstatic.com/media/5305c5_1644b8eb4f0d4ed7bf307cb7d2a6ab28~mv2_d_6000_4000_s_4_2.jpeg/v1/fill/w_980,h_940,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/5305c5_1644b8eb4f0d4ed7bf307cb7d2a6ab28~mv2_d_6000_4000_s_4_2.jpeg' alt="Background Image" className="absolute inset-0 w-full h-full object-cover " />
                        {/* "https://static.vecteezy.com/system/resources/previews/035/509/867/large_2x/ai-generated-food-waste-still-life-as-a-concept-of-healthy-nutrition-free-photo.jpg" */}
                        <div className="relative z-10">
                            <h1 className="text-6xl font-bold w-[60%]">Welcome to the House of Keto</h1>
                            <p className="text-lg mt-2 w-[30%]">Get into a low carb lifestyle with an easy-to-follow meal plan</p>
                            <button className="mt-4 px-4 py-2 border border-white text-white hover:bg-white hover:text-black">SHOP PLANS</button>
                        </div>
                    </div>
                    <div className='px-[250px] bg-[#F4F3EF] flex justify-between gap-8 w-full'>
                        <div className='w-[70%]'>
                            {post.map((each, index) => {
                                return (
                                    <div key={each} className={`pt-[50px] flex w-full ${post?.length == index + 1 ? 'pb-[50px]' : ''}`}>
                                        <Link className='w-[40%]' to={`/post/${each}`}><img className='w-full h-full object-center' loading="lazy" src="https://static.wixstatic.com/media/5305c5_1b1155a6e3124adebba51245a3779d54~mv2_d_4239_2826_s_4_2.jpg/v1/fill/w_304,h_304,fp_0.50_0.50,q_90,enc_auto/5305c5_1b1155a6e3124adebba51245a3779d54~mv2_d_4239_2826_s_4_2.jpg" alt="" /></Link>
                                        <div className='bg-[white] py-6 px-8 w-[60%] flex flex-col justify-between'>
                                            <div>
                                                <div className='flex justify-start items-center gap-2'>
                                                    <AccountCircleIcon className='text-slate-500' fontSize='large' />
                                                    <div className='font-light text-sm'>
                                                        <div>Admin</div>
                                                        <div className='flex items-center'>May 16, 2024 <div className="w-0.5 h-0.5 bg-black rounded-full mx-2"></div> 2 min </div>
                                                    </div>
                                                </div>
                                                <Link className='px-1 text-2xl font-bold text-[#107070] hover:text-black' to={`/post/${each}`}>Good fat vs. bad fat</Link>
                                                <Link className='px-2 text-base font-light text-gray-600' to={`/post/${each}`}>{TextWithTruncation('Create a blog post subtitle that summaries your post in a few short, punchy sentences and entices your Create a blog post subtitle that summaries your post in a few short, punchy sentences and entices your Create a blog post subtitle that summaries your post in a few short, punchy sentences and entices your')}</Link>
                                            </div>
                                            <Link className='flex flex-col justify-between px-2' to={`/post/${each}`}>
                                                <div className='border-b border-black'></div>
                                                <div className='flex justify-between items-center p-2 font-light text-sm'>
                                                    <div className='flex items-center gap-2'>
                                                        <div>0 views</div>
                                                        <div>0 comments</div>
                                                    </div>
                                                    <div className='flex items-center'>0 <FavoriteBorderIcon className='pl-2 text-[#e84a43]' /></div>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                )
                            })}
                            <div className='pt-[35px] pb-[50px] flex justify-center items-center'>
                                <span className='text-[#107070] hover:text-white hover:bg-[#107070] text-center border border-[#107070] py-2 px-10'>SEE ALL POSTS</span>
                            </div>
                        </div>
                        <div className='w-[30%]'>
                            <div className='pt-[50px]'>
                                <img loading="lazy" src="https://i.pinimg.com/originals/05/11/80/051180a06627e81a868f22159933968a.jpg" alt="" />
                            </div>
                            <div className='bg-white p-5'>
                                <div className='text-5xl font-bold text-[#107070]'>Chris Bumstead</div>
                                <p className='py-4 font-light'>Christopher Adam Bumstead, known by his fans as CBum, is a Canadian IFBB Pro League professional bodybuilder. Bumstead is the reigning five-time Mr. Olympia Classic Physique Champion, winning five consecutive titles from 2019 to 2023.</p>
                                <Link to={'/about'}><div className='py-2 underline text-[#107070]'>READ MORE</div></Link>
                            </div>
                            <div className="relative bg-cover bg-no-repeat bg-center h-[300px] mt-[30px] overflow-hidden shadow-md">
                                <img
                                    loading="lazy" src="https://www.eatingwell.com/thmb/Ch2LFPGHsQ5kySirTzPLNd0LfdA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/14-days-clean-eating-meal-plan-1200-lede-601736337d914519bb5bf8eb83540da1.jpg"
                                    alt="Keto Meal Plans"
                                    className="absolute inset-0 w-full h-full object-cover "
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black opacity-50"></div>
                                <div className="relative flex flex-col items-center justify-center h-full text-center">
                                    <h2 className="text-3xl font-bold text-[#107070] z-10">Keto Meal Plans</h2>
                                    <div className='py-2 underline text-[#107070] z-10'>SHOP NOW</div>
                                    <div className="absolute inset-0 bg-white top-1/2 -translate-y-1/2 mx-6 py-4"></div>
                                </div>
                            </div>
                            <div className='mt-[30px] bg-[#107070] text-white py-5'>
                                <div className='pb-3 text-center '>YOU CAN ALSO FIND ME ON </div>
                                <div className='flex justify-center items-center gap-6'>
                                    <FacebookIcon className='cursor-pointer'/>
                                    <TwitterIcon className='cursor-pointer'/>
                                    <PinterestIcon className='cursor-pointer'/>
                                    <InstagramIcon className='cursor-pointer'/>
                                </div>
                            </div>
                            <div className='my-[30px] text-[#107070] bg-white py-5'>
                                <div className='text-center'>SUBSCRIBE TO MY NEWSLETTER</div>
                                <div className='flex flex-col justify-center px-5 py-2 gap-3'>
                                    <input type="email" name="" placeholder='Enter your email here*' id="" className='py-1 pl-2 border border-black' />
                                    <button className='bg-[#107070] hover:bg-slate-700 text-white py-1'>Subscribe Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='bg-white'>
                        <div className='text-center py-10'>
                            <div className='text-[#107070] text-lg font-sans'>FOLLOW ME</div>
                            <div className='text-[#107070] text-5xl font-bold font-sans'>#Houseofketo</div>
                        </div>
                        <div>
                            <div className='grid grid-cols-10 gap-5'>
                                {allItems.slice(0, visibleCount).map(each => (
                                    <div className='col-span-2' key={each}>
                                        <img loading="lazy" src="https://wallpapers.com/images/featured/food-4k-1pf6px6ryqfjtnyr.jpg" alt={`Food ${each}`} />
                                    </div>
                                ))}
                            </div>
                            {visibleCount < allItems.length && (
                                <div className='pt-[35px] pb-[50px] flex justify-center items-center cursor-pointer'>
                                    <button className='text-[#107070] hover:text-white hover:bg-[#107070] text-center border border-[#107070] py-2 px-10' onClick={handleLoadMore} > LOAD MORE </button>
                                </div>
                            )}
                        </div>
                    </div>
                    <Footer />
                </div>
            </div>
        </div>
    )
}

export default Home;