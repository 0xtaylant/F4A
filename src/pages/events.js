import Link from 'next/link';
import ImageBox from '../../components/imageBox';
import Image from 'next/image'
import AnimatedGrid from '../../components/AnimatedGrid';
import RadioBar from '../../components/RadioBar';
import ScrollView from '../../components/ScrollView';

function Events(){

    // const images = [
    //     '/img1.jpeg',
    //     '/img2.jpeg',
    //     '/img3.jpeg',
    //     '/img4.jpeg',
    //     '/img5.jpeg',
    //     '/img6.jpeg',
    //     '/img7.jpeg',
    //     '/img8.jpeg'
    // ]
    // return (
    //     <AnimatedGrid images={images} />
    // )


    return(
        <div className="items-center">
            <ScrollView></ScrollView>
        </div>
    )
}

export default Events;