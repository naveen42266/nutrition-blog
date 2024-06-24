import Header from '../../commons/header';
import Footer from '../../commons/footer';

const DownloadsAndRefunds = () => {

    return (
        <div className='relative '>
            <Header />
            <div className='h-screen w-full'>
                <div className='absolute top-0 left-0 right-0'>
                    <div className='bg-[#F4F3EF] pt-36 px-[75px]'>{/*px-[75px] */}
                        <div className='bg-white px-[220px] pb-[220px]'>
                            <div className='w-[55%] font-light'>
                                <div className='text-5xl font-bold text-[#107070] py-10'> Downloads & Refunds</div>
                                <div className='text-lg text-slate-400'>Download Policy</div>
                                <p className='pb-4'>I’m a download policy section. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add details about your policy and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you. </p>
                                <p className='py-4'>I'm the second paragraph in your download policy section. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add details about your policy and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.</p>
                                <div className='text-lg text-slate-400'>Refund Policy</div>
                                <p className='pb-4'>I’m a refund policy section. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add details about your policy and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.</p>
                                <p className='py-4'>I'm the second paragraph in your refund policy section. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add details about your policy and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.</p>
                            </div>
                        </div>
                    </div>
                    <Footer />
                </div>
            </div>
        </div>
    )
}

export default DownloadsAndRefunds;