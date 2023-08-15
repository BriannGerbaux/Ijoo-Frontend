import banner_1 from './banner_1.png'

function Banner() {
    return (
        <div className="mt-14 flex w-full justify-center">
            <img className="object-contain w-4/5 rounded-2xl" src={banner_1} />
        </div>
    );
}

export default Banner;