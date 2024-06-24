import Header from '../../commons/header';
import Footer from '../../commons/footer';

const TermsAndConditions = () => {

    return (
        <div className='relative '>
            <Header />
            <div className='h-screen w-full'>
                <div className='absolute top-0 left-0 right-0'>
                    <div className='bg-[#F4F3EF] pt-36 px-[75px]'>{/*px-[75px] */}
                        <div className='bg-white px-[220px] pb-[120px]'>
                            <div className='w-[55%] font-light'>
                                <div className='text-5xl font-bold text-[#107070] py-10'>Terms & Conditions</div>
                                <div className='text-lg text-slate-400'>Customer Care</div>
                                <p className='pb-4'>I’m a Customer Care section. I’m a great place to write a long text about your company and your services, and, most importantly, how to contact your store with queries. Writing a detailed Customer Care policy is a great way to build trust and reassure your customers that they can buy with confidence.</p>
                                <p className='py-4'>I'm the second paragraph in your Customer Care section. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add details about your policy and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.</p>
                                <div className='text-lg text-slate-400'>Privacy & Safety</div>
                                <p className='pb-4'>I’m a Privacy & Safety policy section. I’m a great place to inform your customers about how you use, store, and protect their personal information. Add details such as how you use third-party banking to verify payment, the way you collect data or when will you contact users after their purchase was completed successfully.</p>
                                <p className='py-4'>Your user’s privacy is of the highest importance to your business, so take the time to write an accurate and detailed policy. Use straightforward language to gain their trust and make sure they keep coming back to your site!</p>
                                <div className='text-lg text-slate-400'>Payment Methods</div>
                                <div>- Credit / Debit Cards</div>
                                <div>- PAYPAL</div>
                                <div>- Offline Payments</div>
                            </div>
                        </div>
                    </div>
                    <Footer />
                </div>
            </div>
        </div>
    )
}

export default TermsAndConditions;