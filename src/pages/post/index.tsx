import { useParams } from "react-router-dom";
import Header from '../../commons/header';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import InstagramIcon from '@mui/icons-material/Instagram';
import Footer from '../../commons/footer';
const Post = () => {
    const { postid } = useParams();

    return (
        <div className='relative '>
            <Header />
            <div className='h-screen w-full'>
                <div className='absolute top-0 left-0 right-0'>
                    <div className='bg-[#F4F3EF] items-center pt-36 px-[75px]'>{/*px-[75px] */}
                        <div className='col-span-6 bg-white text-center p-10'>
                            <div className='text-4xl font-bold text-[#107070] py-4'>Christopher Adam Bumstead</div>
                            <p className='py-4'>Chris Bumstead, nicknamed "The CBum," is a rising star in the world of bodybuilding, particularly known for his dedication to the Classic Physique division. Having secured his first Olympia title in 2022, he successfully defended his champion status in 2023. This impressive feat solidified his position as a dominant force in the category, admired for his exceptional balance, muscle symmetry, and aesthetic physique. Bumstead's dedication to his craft, meticulous training routines, and focus on healthy nutrition have fueled his meteoric rise in the bodybuilding world.</p>
                            <p className='py-4'>Beyond his competitive achievements, Chris Bumstead has cultivated a significant following on social media platforms. He utilizes these channels to share his workout routines, healthy meal plans, and motivational messages with his fans. This transparency and commitment to inspiring others have positioned him as a role model for aspiring bodybuilders and fitness enthusiasts.  His engaging personality and dedication to sharing his knowledge contribute to his ever-growing online presence.</p>
                            <div className='flex justify-center items-center gap-6 text-center py-4'>
                                <div><FacebookIcon /> Facebook</div>
                                <div><TwitterIcon /> Twitter / X</div>
                                <div> <PinterestIcon /> Pinterest </div>
                                <div><InstagramIcon /> Instagram</div>
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