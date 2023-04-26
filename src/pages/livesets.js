import Link from 'next/link';
import Grid from '../../components/Grid';

function Livesets(){
    const youtubeID = 'F-H_9wzmo90'
    return (
        <div className="bg-f4a-orange w-screen h-screen text-center p-8 pt-16  align-middle">
            <iframe className='video' width="100%" height="100%"
                title='Youtube player'
                sandbox='allow-same-origin allow-forms allow-popups allow-scripts allow-presentation'
                src={`https://youtube.com/embed/${youtubeID}?autoplay=0`}>
            </iframe>
        </div>
    )
}

export default Livesets;