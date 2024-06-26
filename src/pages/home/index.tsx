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
                    <div className="relative z-10 flex flex-col items-start justify-end h-screen text-white bg-black bg-opacity-50 px-[250px] py-[100px] overflow-y-auto">
                        <img loading="lazy" src="https://static.vecteezy.com/system/resources/previews/035/509/867/large_2x/ai-generated-food-waste-still-life-as-a-concept-of-healthy-nutrition-free-photo.jpg" alt="Background Image" className="absolute inset-0 w-full h-full object-cover" />
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
                                        <Link className='w-[40%]' to={`/post/${each}`}><img className='w-full h-full object-center' loading="lazy" src="data:image/jpeg;base64,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" alt="" /></Link>
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
                                <Link to={''}><div className='py-2 underline text-[#107070]'>READ MORE</div></Link>
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