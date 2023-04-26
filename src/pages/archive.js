import Link from 'next/link';
import ImageBox from '../../components/imageBox';
import Image from 'next/image'
import Grid from '../../components/Grid';
import { archives } from '../../components/archivesData';

function Archive(){
    
    
    return (
        <div>
            <div className="items-center pt-32 pl-4  bg-f4a-orange ">
                <p className=" text-white font-semibold font-Anton text-4xl ">
                    ARCHIVE
                </p>
                <p className=" text-white font-Anton text-xs mt-2 pb-4">
                    Explore the latest mixtapes additions to the FFA radio
                </p>
            </div>
            <div className="pt-16 bg-f4a-white">
                <Grid items={archives} />
            </div>
        </div>
    )
}

export default Archive;