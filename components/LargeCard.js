import Image from 'next/image';

const LargeCard = () => {
    const title = 'The Greatest Outdoors';
    const description = 'Wish Lists curated by Airbnb';
    const buttonText = 'Get Inspired';
    return (
        <section className='relative py-16'>
            <div className='relative h-96 min-w-[300px]'>
                <Image
                    src='/static/images/largeCard/largeCard.webp'
                    layout='fill'
                    alt='Card'
                    objectFit='cover'
                    className='rounded-2xl'
                />
            </div>
            <div className='absolute top-32 left-12'>
                <h3 className='w-64 mb-3 text-4xl'>{title}</h3>
                <p>{description}</p>
                <button className='px-4 py-2 my-3 mt-5 text-sm text-white transition duration-150 bg-gray-900 rounded-lg rounded-full shadow-md cursor-pointer hover:shadow-xl active:scale-90'>
                    {buttonText}
                </button>
            </div>
        </section>
    );
};

export default LargeCard;
