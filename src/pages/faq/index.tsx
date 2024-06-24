import Header from '../../commons/header';
import Footer from '../../commons/footer';
import SearchOutlined from "@mui/icons-material/SearchOutlined";
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LinkIcon from '@mui/icons-material/Link';
import { useState } from 'react';
import TextField from '@mui/material/TextField/TextField';
const faqList = [
    {
        'question': 'What is an FAQ section?',
        'answer': 'An FAQ section can be used to quickly answer common questions about your business like "Where do you ship to?", "What are your opening hours?", or "How can I book a service?".'
    },
    {
        'question': 'Why do FAQs matter?',
        'answer': 'FAQs are a great way to help site visitors find quick answers to common questions about your business and create a better navigation experience.'
    },
    {
        'question': 'Where can I add my FAQs?',
        'answer': 'FAQs can be added to any page on your site or to your Wix mobile app, giving access to members on the go.'
    }
]
const faqList2 = [
    {
        'question': 'How do I add a new question & answer?',
        'points': [
            `To add a new FAQ follow these steps: `,
            `1. Manage FAQs from your site dashboard or in the Editor `,
            `2. Add a new question & answer `,
            `3. Assign your FAQ to a category `,
            `4. Save and publish.`,
            `You can always come back and edit your FAQs.`
        ]
    },
    {
        'question': 'Can I insert an image, video, or GIF in my FAQ?',
        'points': [
            `Yes. To add media follow these steps: `,
            `1. Manage FAQs from your site dashboard or in the Editor `,
            `2. Create a new FAQ or edit an existing one `,
            `3. From the answer text box click on the video, image or GIF icon `,
            `4. Add media from your library and save.`
        ]
    },
    {
        'question': `How do I edit or remove the 'Frequently Asked Questions' title?`,
        'points': [
            `You can edit the title from the FAQ 'Settings' tab in the Editor.`,
            `To remove the title from your mobile app go to the 'Site & App' tab in your Owner's app and customize.`
        ]
    }
]
const FAQ = () => {
    const [selectedSection, setSelectedSection] = useState('General');
    const [faq, setFaq] = useState(0);
    const [search, setSearch] = useState(false);

    function handleListFaq() {
        if (selectedSection == 'General') {
            return faqList
        }
        return faqList2
    }
    return (
        <div className='relative '>
            <Header />
            <div className='h-screen w-full'>
                <div className='absolute top-0 left-0 right-0'>
                    <div className='bg-[#F4F3EF] pt-36 px-[75px]'>{/*px-[75px] */}
                        <div className='bg-white px-[220px] pb-[220px]'>
                            <div className='text-5xl font-bold text-[#107070] py-10'> FAQ</div>
                            <div className='grid grid-cols-12'>
                                <div className='col-span-4'></div>
                                <div className='col-span-4 text-center text-xl font-bold text-[#107070]'>Frequently asked questions</div>
                                <div className='col-span-4'>
                                    <div className='flex justify-end'>
                                        {search ?
                                            <div className='flex items-center border-b border-black '>
                                                <SearchOutlined className='cursor-pointer' />
                                                <TextField id="standard-basic" className="ml-2 py-1" placeholder={'Search'} variant="standard" fullWidth InputProps={{ disableUnderline: true, }} />
                                                <CloseOutlinedIcon className='cursor-pointer' onClick={() => { setSearch(false) }} />
                                            </div> : <SearchOutlined className='cursor-pointer' onClick={() => { setSearch(true) }} />
                                        }
                                    </div>
                                </div>
                            </div>
                            <div className='flex items-center gap-4 py-5'>
                                {['General', 'Setting up FAQs']?.map((each) => {
                                    return (
                                        <div key={each} className={`text-base ${selectedSection == each ? 'font-semibold' : 'font-light cursor-pointer'}`} onClick={() => { setSelectedSection(each) }}>{each}</div>
                                    )
                                })}
                            </div>
                            <div className='font-light'>
                                {handleListFaq()?.map((each: any, index) => {
                                    return (
                                        <div key={index} className='py-6 border-b border-slate-200'>
                                            <div className='flex justify-between items-center cursor-pointer' onClick={() => { faq != index + 1 ? setFaq(index + 1) : setFaq(0) }}>
                                                <div>{each?.question}</div>
                                                {faq == index + 1 ? <KeyboardArrowUpIcon fontSize='small' className='text-slate-500' /> : <KeyboardArrowDownIcon fontSize='small' className='text-slate-500' />}
                                            </div>
                                            {faq == index + 1 && selectedSection == 'General' && <div className='py-4'>
                                                <div>{each?.answer}</div>
                                            </div>}
                                            {faq == index + 1 && selectedSection == 'Setting up FAQs' && <div className='py-4'>
                                                {each?.points?.map((points: string, index: number) => {
                                                    return (
                                                        <div key={points} className={`${index == 5 ? 'pt-4' : ''}`}>{points}</div>
                                                    )
                                                })}
                                            </div>}
                                            {faq == index + 1 && <div className='flex gap-3'>
                                                <FacebookIcon fontSize='small' className='cursor-pointer' />
                                                <XIcon fontSize='small' className='cursor-pointer' />
                                                <LinkedInIcon fontSize='small' className='cursor-pointer' />
                                                <LinkIcon fontSize='small' className='cursor-pointer -rotate-45' />
                                            </div>}
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

export default FAQ;