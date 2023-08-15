import { useSelector, useDispatch } from 'react-redux';
import { setFilters } from '../../redux/slices/filtersSlice';
import { fetchTravels,  selectAllTravels, getTravelsStatus, getTravelsError } from '../../redux/slices/travelsSlice';
import { useEffect } from 'react';
import filledStar from './star_filled.png'
import star from './star.png'
import addToCart from './ajouter-au-panier.png'

function Review({className, review}) {
    var starElements = [];
    var i = 0;

    for (; i !== review; i++) {
        starElements.push(<div>
            <img className='w-4 object-contain' src={filledStar} alt='filled star'></img>
        </div>)
    }
    for (; i !== 5; i++) {
        starElements.push(<div>
            <img className='w-4 object-contain' src={star} alt='star'></img>
        </div>)
    }

    return (
        <div className={`flex items-center space-x-1 ${className}`}>
            {starElements}
        </div>
    );
}

function Items() {
    const dispatch = useDispatch();
    const filters = useSelector(
        (state) => state.itemsFilters.filters
    );
    const travels = useSelector(selectAllTravels);
    const travelsStatus = useSelector(getTravelsStatus);
    const error = useSelector(getTravelsError);
    let contentToDisplay = '';

    useEffect(() => {
        console.log(travelsStatus);
        if (travelsStatus === 'idle' || travelsStatus === 'succeeded') {
            dispatch(fetchTravels(filters));
        }
    }, [dispatch, filters]);
    console.log(travelsStatus)

    if (travelsStatus === 'loading') {
        return <h1 className="font-main text-2xl text-black">Loading</h1>
    } else if (travelsStatus === 'succeeded') {
        contentToDisplay = travels.map((data) => (
            <div className='bg-lightgrey rounded-b-md shadow-md hover:bg-[#F8F8F8] hover:transition hover:scale-105'>
                <div className='aspect-square w-full bg-lightgrey'>
                    <img className='h-full object-cover object-center rounded-md' src={data.url} alt=''></img>
                </div>
                <div className='flex'>
                    <div className='pl-2 pt-2 pb-3 w-full'>
                        <h1 className='font-main text-base font-bold text-black'>{data.title}</h1>
                        <p className='font-main text-sm text-black'>{data.price}.00$</p>
                        <Review className={'mt-1'} review={data.review}></Review>
                    </div>
                    <div className='w-fit h-fit mr-4 self-center bg-red rounded-full hover:transition hover:ease-in-out hover:-translate-y-0.5 hover:scale-105'>
                        <button className='h-fit w-fit p-2'>
                            <img className='w-8 object-contain object-center' src={addToCart} alt="Add to cart img"></img>
                        </button>
                    </div>
                </div>
            </div>
        ));
    } else if (travelsStatus === 'failed') {
        return <h1 className="font-main text-2xl text-black">{error}</h1>
    }
    return (
        <div className='grid w-4/5 mt-12 mb-12 mx-auto grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-y-12 gap-x-12'>
            {contentToDisplay}
        </div>
    )

}

export default Items;