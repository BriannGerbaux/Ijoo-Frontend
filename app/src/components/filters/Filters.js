import { useRef, useEffect, useState, useContext } from 'react';
import arrowIcon from './down_arrow.png'
import { FiltersContext } from '../../context/FiltersContext';
import { useSelector, useDispatch } from 'react-redux';
import { setFilters } from '../../redux/slices/filtersSlice';

function useOutsideAlerter(ref, setFilterState) {
    useEffect(() => {
      /**
       * Alert if clicked on outside of element
       */
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          console.log("You clicked outside of me!");
          setFilterState(false);
        }
      }
      // Bind the event listener
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
}

function onClickFilter(isFilterOpen, setFilterState) {
    if (isFilterOpen) {
        setFilterState(false);
    } else {
        setFilterState(true);
    }
}

function PriceOptions({isFilterOpen, setFilterState}) {
    const filters = useSelector(
        (state) => state.itemsFilters.filters
    )
    const dispatch = useDispatch();

    return(
        <div className={isFilterOpen === true ? "block": "hidden"}>
            <div className='w-full bg-lightgrey rounded-b-xl px-4 pb-1'>
                <hr className="h-[1px] mx-1 mb-2 border-t-0 bg-white" />
                <ul>
                    <li className='font-main text-base text-black hover:text-red'>
                        <button onClick={() => {
                            onClickFilter(isFilterOpen, setFilterState)
                            dispatch(setFilters({"environment": filters.environment, "region": filters.region, "price": "100", "query": filters.query}))
                        }}>100</button>
                    </li>
                    <li className='font-main text-base text-black hover:text-red'>
                        <button onClick={() => {
                            onClickFilter(isFilterOpen, setFilterState)
                            dispatch(setFilters({"environment": filters.environment, "region": filters.region, "price": "500", "query": filters.query}))
                        }}>500</button>
                    </li>
                </ul>
            </div>
        </div>
    );
}

function RegionOptions({isFilterOpen, setFilterState}) {
    //const {filters, setFilters} = useContext(FiltersContext);
    const filters = useSelector(
        (state) => state.itemsFilters.filters
    )
    const dispatch = useDispatch();

    return(
        <div className={isFilterOpen === true ? "block": "hidden"}>
            <div className='w-full bg-lightgrey rounded-b-xl px-4 pb-1'>
                <hr className="h-[1px] mx-1 mb-2 border-t-0 bg-white" />
                <ul>
                    <li className='font-main text-base text-black hover:text-red'>
                        <button onClick={() => {
                            onClickFilter(isFilterOpen, setFilterState)
                            dispatch(setFilters({"environment": filters.environment, "region": "seoul", "price": filters.price, "query": filters.query}))
                        }}>Seoul</button>
                    </li>
                    <li className='font-main text-base text-black hover:text-red'>
                        <button onClick={() => {
                            onClickFilter(isFilterOpen, setFilterState)
                            dispatch(setFilters({"environment": filters.environment, "region": "busan", "price": filters.price, "query": filters.query}))
                        }}>Busan</button>
                    </li>
                </ul>
            </div>
        </div>
    );
}

function EnvironmentOptions({isFilterOpen, setFilterState}) {
    //const {filters, setFilters} = useContext(FiltersContext);
    const filters = useSelector(
        (state) => state.itemsFilters.filters
    )
    const dispatch = useDispatch();

    return(
        <div className={isFilterOpen === true ? "block": "hidden"}>
            <div className='w-full bg-lightgrey rounded-b-xl px-4 pb-1'>
                <hr className="h-[1px] mx-1 mb-2 border-t-0 bg-white" />
                <ul>
                    <li className='font-main text-base text-black hover:text-red'>
                        <button onClick={() => {
                            onClickFilter(isFilterOpen, setFilterState)
                            setFilters({"environment": "urban", "region": filters.region, "price": filters.price, "query": filters.query})
                        }} >Urban</button>
                    </li>
                    <li className='font-main text-base text-black hover:text-red'>
                        <button onClick={() => {
                            onClickFilter(isFilterOpen, setFilterState)
                            dispatch(setFilters({"environment": "nature", "region": filters.region, "price": filters.price, "query": filters.query}))
                        }}>Nature</button>
                    </li>
                </ul>
            </div>
        </div>
    );
}

function EnvironmentFilterButton({title}) {
    const [isFilterOpen, setFilterState] = useState(false);
    var buttonStyle = 'font-main text-base py-1 px-4 bg-lightgrey ' + (isFilterOpen ? 'rounded-t-xl': 'rounded-full transition ease-in-out delay-150 hover:scale-105 duration-100');
    var filterRef = useRef(null);
    useOutsideAlerter(filterRef, setFilterState);

    return (
        <div ref={filterRef} className="block w-fit h-fit">
            <button id="environmentFilterButton" onClick={() => onClickFilter(isFilterOpen, setFilterState)} className={buttonStyle}>
                <div className='flex items-center space-x-2'>
                    <span>{title}</span>
                    <img className="h-3" src={arrowIcon}></img>
                </div>
            </button>
            <EnvironmentOptions isFilterOpen={isFilterOpen} setFilterState={setFilterState} />
        </div>
    );
}

function RegionFilterButton({title}) {
    const [isFilterOpen, setFilterState] = useState(false);
    var buttonStyle = 'font-main text-base py-1 px-4 bg-lightgrey ' + (isFilterOpen ? 'rounded-t-xl': 'rounded-full transition ease-in-out delay-150 hover:scale-105 duration-100');
    var filterRef = useRef(null);
    useOutsideAlerter(filterRef, setFilterState);

    return (
        <div ref={filterRef} className="block w-fit h-fit">
            <button id="environmentFilterButton" onClick={() => onClickFilter(isFilterOpen, setFilterState)} className={buttonStyle}>
                <div className='flex items-center space-x-2'>
                    <span>{title}</span>
                    <img className="h-3" src={arrowIcon}></img>
                </div>
            </button>
            <RegionOptions isFilterOpen={isFilterOpen} setFilterState={setFilterState} />
        </div>
    );
}

function PriceFilterButton({title}) {
    const [isFilterOpen, setFilterState] = useState(false);
    var buttonStyle = 'font-main text-base py-1 px-4 bg-lightgrey ' + (isFilterOpen ? 'rounded-t-xl': 'rounded-full transition ease-in-out delay-150 hover:scale-105 duration-100');
    var filterRef = useRef(null);
    useOutsideAlerter(filterRef, setFilterState);

    return (
        <div ref={filterRef} className="block w-fit h-fit">
            <button id="environmentFilterButton" onClick={() => onClickFilter(isFilterOpen, setFilterState)} className={buttonStyle}>
                <div className='flex items-center space-x-2'>
                    <span>{title}</span>
                    <img className="h-3" src={arrowIcon}></img>
                </div>
            </button>
            <PriceOptions isFilterOpen={isFilterOpen} setFilterState={setFilterState} />
        </div>
    );
}

function Filters() {
    return (
        <div className="mt-12 mx-auto w-4/5 flex space-x-3">
            <EnvironmentFilterButton title="Environment" />
            <RegionFilterButton title="Region" />
            <PriceFilterButton title="Price" />
        </div>
    );
}

export default Filters;