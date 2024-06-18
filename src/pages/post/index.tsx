import { useParams } from "react-router-dom";
import Header from '../../commons/header';
import Footer from '../../commons/footer';
import SearchOutlined from "@mui/icons-material/SearchOutlined";
import Avatar from "@mui/material/Avatar";
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LinkIcon from '@mui/icons-material/Link';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
const Post = () => {
    const { postid } = useParams();

    return (
        <div className='relative '>
            <Header />
            <div className='h-screen w-full'>
                <div className='absolute top-0 left-0 right-0'>
                    <div className='bg-[#F4F3EF] items-center pt-36 px-[250px]'>{/*px-[75px] */}
                        <div className='bg-white p-10'>
                            <div className="flex justify-between items-center pb-10">
                                <div className="flex gap-4 items-center font-light">
                                    <div> All Posts</div>
                                    <div>Recipes</div>
                                    <div>What is Keto?</div>
                                    <div>Lifestyle</div>
                                </div>
                                <div><SearchOutlined /></div>
                            </div>
                            <div className="border border-gray-200 py-12 px-24">
                                <div className="flex items-center gap-2 font-light">
                                    <div><Avatar /></div>
                                    <div> Admin</div>
                                    <div>.</div>
                                    <div>May 16, 2023</div>
                                    <div>.</div>
                                    <div>2 min read</div>
                                </div>
                                <div className="py-4 text-3xl text-slate-700">Good fat vs. bad fat </div>
                                <div className="pb-4 text-lg font-bold font-sans">Create a blog post subtitle that summaries your post in a few short, punchy sentences and entices your audience to continue reading.</div>
                                <img loading="lazy" src="https://static.wixstatic.com/media/5305c5_7ce56faed8ad4a4cbf0ee6c6b2019f55~mv2_d_3456_5184_s_4_2.jpg/v1/fill/w_925,h_1388,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/5305c5_7ce56faed8ad4a4cbf0ee6c6b2019f55~mv2_d_3456_5184_s_4_2.jpg" alt="" />
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
                        </div>
                    </div>
                    <Footer />
                </div>
            </div>
        </div>
    )
}
export default Post;