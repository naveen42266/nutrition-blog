import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link } from 'react-router-dom';

const Header = () => {
    function handleRouter(each: string) {
        if (each.toLowerCase() == "home") {
            return "/"
        }
        else if(each.toLowerCase() == "what is keto"){
            return "/what-is-keto"
        }
        else if(each.toLowerCase() == "shop meal plans"){
            return "/shop-meal-plans"
        }
        return '/' + each.toLowerCase()
    }
    return (
        <div className='fixed top-0 left-0 right-0 z-20 flex justify-center'>
            <div className='flex justify-between items-center font-light bg-white w-[90%] p-8 shadow-md'>
                <div className='flex flex-col justify-start'>
                    <div className='text-3xl flex font-normal'>
                        House<div className='italic px-2'>of</div>Keto
                    </div>
                    <div>Ketogenic Lifestyle Blog</div>
                </div>
                <div className='flex flex-col justify-evenly'>
                    <div className='flex flex-row justify-end items-center gap-5 pb-3'>
                        <div className='flex items-center gap-2'>
                            <AccountCircleIcon />
                            <div>Log In</div>
                        </div>
                        <div className='h-5 w-5'>
                            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="5.7 0 105.5 126.1" preserveAspectRatio="xMinYMax meet" data-hook="svg-icon-1">
                                <path d="M99.8 28.4c0-1.2-0.9-2-2.1-2h-15c0 3.2 0 7.6 0 8.2 0 1.5-1.2 2.6-2.6 2.9 -1.5 0.3-2.9-0.9-3.2-2.3 0-0.3 0-0.3 0-0.6 0-0.9 0-4.7 0-8.2H40.1c0 3.2 0 7.3 0 8.2 0 1.5-1.2 2.9-2.6 2.9 -1.5 0-2.9-0.9-3.2-2.3 0-0.3 0-0.3 0-0.6 0-0.6 0-5 0-8.2h-15c-1.2 0-2 0.9-2 2L8.3 124c0 1.2 0.9 2.1 2.1 2.1h96.3c1.2 0 2.1-0.9 2.1-2.1L99.8 28.4z"></path>
                                <path d="M59.1 5.9c-2.9 0-2 0-2.9 0 -2 0-4.4 0.6-6.4 1.5 -3.2 1.5-5.9 4.1-7.6 7.3 -0.9 1.8-1.5 3.5-1.8 5.6 0 0.9-0.3 1.5-0.3 2.3 0 1.2 0 2.1 0 3.2 0 1.5-1.2 2.9-2.6 2.9 -1.5 0-2.9-0.9-3.2-2.3 0-0.3 0-0.3 0-0.6 0-1.2 0-2.3 0-3.5 0-3.2 0.9-6.4 2-9.4 1.2-2.3 2.6-4.7 4.7-6.4 3.2-2.9 6.7-5 11.1-5.9C53.5 0.3 55 0 56.7 0c1.5 0 2.9 0 4.4 0 2.9 0 5.6 0.6 7.9 1.8 2.6 1.2 5 2.6 6.7 4.4 3.2 3.2 5.3 6.7 6.4 11.1 0.3 1.5 0.6 3.2 0.6 4.7 0 1.2 0 2.3 0 3.2 0 1.5-1.2 2.6-2.6 2.9s-2.9-0.9-3.2-2.3c0-0.3 0-0.3 0-0.6 0-1.2 0-2.6 0-3.8 0-2.3-0.6-4.4-1.8-6.4 -1.5-3.2-4.1-5.9-7.3-7.3 -1.8-0.9-3.5-1.8-5.9-1.8C61.1 5.9 59.1 5.9 59.1 5.9L59.1 5.9z"></path>
                                {/* <text dy=".35em" className='text-white' text-anchor="middle" data-hook="items-count">1</text> */}
                            </svg>
                        </div>
                    </div>
                    <div className='flex justify-end gap-6'>
                        {["Home", "About", "What is Keto", "Recipes", "Lifestyle", "Shop Meal Plans", "Contact"].map((each) => (
                            <Link to={handleRouter(each)}><div key={each}>{each}</div></Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;