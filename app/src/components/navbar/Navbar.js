import cartIcon from './cart.png';
import loginIcon from './login.png';
import searchIcon from './search.png';
import ijooLogo from './logo.png';

import { useContext } from 'react';
import { FiltersContext } from '../../context/FiltersContext.js';
import { useSelector, useDispatch } from 'react-redux';
import { setFilters } from '../../redux/slices/filtersSlice';

function onClickLogin() {

}

function NavButton({ logo, title, onclick }) {
    return (
        <div className='block w-fit h-fit rounded-md hover:bg-lightgrey'>
            <button onClick={onclick} className="px-4 py-2">
                <div className="flex items-center space-x-3">
                    <div className="w-6">
                        <img className="object-contain" src={logo} alt={title}/>
                    </div>
                    <div>
                        <span className="font-main text-base text-black">{title}</span>
                    </div>
                </div>
            </button>
        </div>
    );
}

function LogoAndTitle() {
    return (
        <div className='flex items-center space-x-3'>
            <img className='w-10 object-contain' src={ijooLogo} alt='logo'/>
            <p className='font-title font-bold text-lg text-black'>Ijoo</p>
        </div>
    );
}

function SearchBar() {
    //const {filters, setFilters} = useContext(FiltersContext);
    const filters = useSelector(
        (state) => state.itemsFilters.filters
    )
    const dispatch = useDispatch();

    const handleChange = (event) => {
        dispatch(setFilters({"environment": filters.environment, "region": filters.region, "price": filters.price, "query": event.target.value}));
    }

    return (
        <div className='relative'>
            <div class="absolute inset-y-0 right-0 flex items-center pr-3.5 pointer-events-none">
            <img className='object-contain w-5' src={searchIcon} alt='search icon' />
            </div>
            <input onChange={handleChange} type="text" id="input-group-1" class="bg-lightgrey font-main text-black text-sm rounded-full focus:outline-none focus:ring-1 focus:ring-red block w-full pl-3 pr-10 p-1.5" placeholder="Search for a trip"></input>
        </div>
    );
}

function Navbar() {
  return (
    <div className="w-full h-fit py-2 px-8 shadow-sm">
        <div className='flex items-center justify-between'>
            <LogoAndTitle />
            <div className='flex items-center space-x-2'>
                <SearchBar />
                <NavButton logo={loginIcon} title="Login" onclick={onClickLogin}></NavButton>
                <NavButton logo={cartIcon} title="Cart" onclick={onClickLogin}></NavButton>
            </div>
        </div>
    </div>
  );
}

export default Navbar;