import { Link, useParams } from "react-router-dom";
import Header from '../../commons/header';
import Footer from '../../commons/footer';
import SearchOutlined from "@mui/icons-material/SearchOutlined";
import Avatar from "@mui/material/Avatar";
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LinkIcon from '@mui/icons-material/Link';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import VisibilityIcon from '@mui/icons-material/Visibility';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import OpenInFullOutlinedIcon from '@mui/icons-material/OpenInFullOutlined';
import { useState } from "react";
const Post = () => {
    const { postid } = useParams();
    const [search, setSearch] = useState(false);
    const [hover , setHover] = useState(false);

    return (
        <div className='relative '>
            <Header />
            <div className='h-screen w-full'>
                <div className='absolute top-0 left-0 right-0'>
                    <div className='bg-[#F4F3EF] items-center pt-36 px-[250px]'>{/*px-[75px] */}
                        <div className='bg-white p-10'>
                            <div className="flex justify-between items-center pb-10">
                                <div className="flex gap-4 items-center font-light">
                                    <Link to={"/blog"}>All Posts</Link>
                                    <Link to={"/blog/categories/recipes"}>Recipes</Link>
                                    <Link to={"/blog/categories/what-is-keto"}>What is Keto?</Link>
                                    <Link to={"/blog/categories/lifestyle"}>Lifestyle</Link>
                                </div>
                                <div>
                                    {search ?
                                        <div className='flex items-center border-b border-black '>
                                            <SearchOutlined />
                                            <input type="text" name="" placeholder='Search' id="" className='py-1 pl-2 w-full' />
                                            <CloseOutlinedIcon onClick={() => { setSearch(false) }} />
                                        </div> : <SearchOutlined onClick={() => { setSearch(true) }} />
                                    }
                                </div>
                            </div>
                            <div className="border border-gray-200 py-12 px-24">
                                <div className="flex items-center gap-2 font-light">
                                    <div><Avatar /></div>
                                    <div> Admin</div>
                                    <div className="w-0.5 h-0.5 bg-black rounded-full"></div>
                                    <div>May 16, 2023</div>
                                    <div className="w-0.5 h-0.5 bg-black rounded-full"></div>
                                    <div>2 min read</div>
                                </div>
                                <div className="py-4 text-3xl text-slate-700">Good fat vs. bad fat {postid} </div>
                                <div className="pb-4 text-lg font-bold font-sans">Create a blog post subtitle that summaries your post in a few short, punchy sentences and entices your audience to continue reading.</div>
                                <div className="relative">
                                    <img loading="lazy" src="https://static.wixstatic.com/media/5305c5_7ce56faed8ad4a4cbf0ee6c6b2019f55~mv2_d_3456_5184_s_4_2.jpg/v1/fill/w_925,h_1388,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/5305c5_7ce56faed8ad4a4cbf0ee6c6b2019f55~mv2_d_3456_5184_s_4_2.jpg" alt="" onMouseEnter={()=>{setHover(true)}} onMouseLeave={() => setHover(false)} />
                                    {hover && <OpenInFullOutlinedIcon fontSize="large" className="absolute top-4 right-4 text-slate-700 rounded-full bg-white opacity-50 p-1.5"/>}
                                </div>
                                <div className="text-lg font-light py-4">Welcome to your blog post. Use this space to connect with your readers and potential customers in a way that’s current and interesting. Think of it as an ongoing conversation where you can share updates about business, trends, news, and more. </div>
                                <div>
                                    <div className="text-lg">Design with Ease</div>
                                    <div className="py-4 flex gap-5">
                                        <div className="border-2 border-black"></div>
                                        <div className="text-2xl italic font-sans text-slate-900">Do you have a design in mind for your blog? Whether you prefer a trendy postcard look or you’re going for a more editorial style blog - there’s a stunning layout for everyone.</div>
                                    </div>
                                    <div className="text-lg font-light py-4">Every layout comes with the latest social features built in. Readers will be able to easily share posts on social networks like Facebook and Twitter, view how many people have liked a post, made comments and more. With the Wix, building your online community has never been easier.</div>
                                </div>
                                <div>
                                    <div className="text-lg">Create Relevant Content</div>
                                    <div className="text-lg font-light py-4">You’ll be posting loads of engaging content, so be sure to keep your blog organized with Categories that also allow readers to explore more of what interests them. Each category of your blog has its own page that’s fully customizable. Add a catchy title, a brief description and a beautiful image to the category page header to truly make it your own. You can also add tags (#vacation #dream #summer) throughout your posts to reach more people, and help readers search for relevant content. Using hashtags can expand your post reach and help people find the content that matters to them. Go ahead, #hashtag away.</div>
                                </div>
                                <div>
                                    <div className="text-lg">Stun Your Readers</div>
                                    <div className="py-4 flex gap-5">
                                        <div className="border-2 border-black"></div>
                                        <div className="text-2xl italic font-sans text-slate-900">Be original, show off your style, and tell your story.</div>
                                    </div>
                                    <div className="text-lg font-light py-4">Blogging gives your site a voice, so let your business’ personality shine through. Are you a creative agency? Go wild with original blog posts about recent projects, cool inspirational ideas, or what your company culture is like. Add images, and videos to really spice it up, and pepper it with slang to keep readers interested. Are you a programmer? Stay on the more technical side by offering weekly tips, tricks, and hacks that show off your knowledge of the industry. No matter what type of business you have, one thing is for sure - blogging gives your business the opportunity to be heard in a way in a different and unconventional way. </div>
                                </div>
                                <div>
                                    <div className="text-lg">Get Inspired</div>
                                    <div className="text-lg font-light py-4">To keep up with all things Wix, including website building tips and interesting articles, head over to to the Wix Blog. You may even find yourself inspired to start crafting your own blog, adding unique content, and stunning images and videos. Start creating your own blog now. Good luck!</div>
                                </div>
                                <div className="flex justify-between items-center border-y border-slate-300 py-6 mt-4">
                                    <div className="flex gap-6 text-slate-900">
                                        <FacebookIcon fontSize="small" />
                                        <XIcon fontSize="small" />
                                        <LinkedInIcon fontSize="small" />
                                        <LinkIcon fontSize="small" className="-rotate-45" />
                                    </div>
                                    <div className="font-light">What is Keto?</div>
                                </div>
                                <div className="flex justify-between items-center font-light py-4">
                                    <div className="flex gap-4 items-center ">
                                        <div> 0 views</div>
                                        <div> 0 comments</div>
                                    </div>
                                    <FavoriteBorderIcon className="text-red-400" />
                                </div>
                            </div>
                            <div className="flex justify-between items-center font-light py-10">
                                <div>Recent Posts</div>
                                <div>See All</div>
                            </div>
                            <div className="mb-10 border border-slate-200 w-[288px]">
                                <img loading="lazy" style={{ width: '288px', height: '200px', objectFit: 'cover' }} src="https://static.wixstatic.com/media/5305c5_ef23e1c298c742e380f7ec489ec94880~mv2_d_3144_4183_s_4_2.jpg/v1/fill/w_360,h_203,al_c,lg_1,q_80,enc_auto/5305c5_ef23e1c298c742e380f7ec489ec94880~mv2_d_3144_4183_s_4_2.jpg" alt="" />
                                <div className="p-4 text-xl">Your new Keto lifestyle: Everything you need to...</div>
                                <div className="flex justify-between items-center border-t border-slate-200 m-4">
                                    <div className="flex items-center gap-4 pt-4">
                                        <div><VisibilityIcon fontSize="small" /> 0</div>
                                        <div><ChatBubbleOutlineOutlinedIcon fontSize="small" /> 0</div>
                                    </div>
                                    <div className="pt-4">2 <FavoriteBorderOutlinedIcon fontSize="small" className="text-red-400" /></div>
                                </div>
                            </div>
                            <div className="mb-10 border border-slate-200 px-20">
                                <div className="border-b py-4 border-slate-200">Comments</div>
                                <textarea name="" placeholder="Type your message here..." id="" className="py-1 pl-2 my-6 border border-black w-full" rows={3} ></textarea>
                                <div className="flex justify-end gap-4 items-center pb-6">
                                    <button className="px-3 py-1 text-sm">Cancel</button>
                                    <button className={`bg-[#F4F3EF] hover:bg-black text-white text-sm px-3 py-1`}>Publish</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Footer />
                </div>
            </div>
        </div>
    )
}
export default Post;