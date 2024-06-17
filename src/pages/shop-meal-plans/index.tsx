import Header from '../../commons/header';
import VerticalAlignBottomIcon from '@mui/icons-material/VerticalAlignBottom';
import Footer from '../../commons/footer';
import { useState } from 'react';

class ShopMealPlansModel {
    id: number | null = null;
    isHover: boolean | null = null;
}
const ShopMealPlans = () => {
    const [hover, setHover] = useState<ShopMealPlansModel>({ id: 0, isHover: false })

    return (
        <div className='relative '>
            {/* This needs to always stay at the top */}
            <Header />
            <div className='h-screen w-full'>
                {/* Full-Screen Background with Overlay */}
                <div className='absolute top-0 left-0 right-0'>
                    <div className='bg-[#F4F3EF] items-center pt-36 px-[75px]'>{/*px-[75px] */}
                        <div className='bg-white text-center p-10'>
                            <div className='text-5xl font-bold text-[#107070] py-10'> Shop Meal Plans</div>
                            <p className='py-4'>For a balanced diet, start your day with Greek yogurt topped with honey, granola, and fresh berries, or scrambled eggs with spinach and whole wheat toast, or oatmeal with bananas and almond butter. Lunch options include a grilled chicken salad with mixed greens and balsamic vinaigrette, a quinoa bowl with black beans, corn, and avocado, or a turkey and avocado wrap with carrot sticks. For dinner, enjoy baked salmon with roasted Brussels sprouts and quinoa, spaghetti with marinara sauce and ground turkey, or stir-fried tofu with mixed vegetables and brown rice.</p>
                            <div className='grid grid-cols-12 items-center gap-16 py-5' onMouseEnter={() => setHover({ id: 0, isHover: false })}>
                                {[1, 2, 3]?.map((each) => {
                                    return (
                                        <div className='col-span-4' key={each} onMouseEnter={() => setHover({ id: each, isHover: true })} onMouseDown={() => setHover({ id: 0, isHover: false })}>
                                            <div className='relative'>
                                                <img className='w-full' loading="lazy" src="https://static.wixstatic.com/media/5305c5_f9ddc40b66ce4475a2b3509fb5e137f4~mv2_d_5995_4912_s_4_2.jpg/v1/fill/w_305,h_305,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/5305c5_f9ddc40b66ce4475a2b3509fb5e137f4~mv2_d_5995_4912_s_4_2.jpg" alt="" />
                                                <VerticalAlignBottomIcon fontSize='large' className='absolute top-4 right-4 text-slate-700 rounded-full bg-white opacity-50 p-1.5' />
                                                {hover.id == each && hover.isHover && <div className='absolute bottom-0 right-0 left-0 bg-white opacity-65 py-4 text-black'>Quick View</div>}
                                            </div>
                                            <div className='text-[#107070] text-center text-2xl font-sans pt-2'>Keto Kickoff: 7 Day Plan</div>
                                            <div className='text-center'>___</div>
                                            <div className='text-center font-light py-2'>$18.00</div>
                                            {hover.id == each && hover.isHover ? <div className='bg-black text-white py-2'>Add to Cart</div> : <div className='py-2 text-white'>.</div>}
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                    <Footer />
                </div>
            </div>
        </div>
    )
}

export default ShopMealPlans;