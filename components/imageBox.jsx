import Image from 'next/image'

const ImageBox = () => {
    return (
        <div className="bg-black h-[424px] w-[480px] flex-col border-x border-y border-white align-middle m-1 pt-[2%] pl-2 hover:border-purple">
            <div className="h-[64%] w-[98%] bg-black relative align-bottom hover:opacity-50">
                <Image
                    src={'/host4.jpeg'}
                    alt='/'
                    fill
                />
            </div>
        </div>
    )
}

export default ImageBox
