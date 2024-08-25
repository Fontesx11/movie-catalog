import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'


function SkeletonPlaceHolder() {

    return (
        <>
            <Skeleton
                height={44}
                width={320}
                style={{ marginTop: '40px' }}
            />
            <Skeleton
                height={340}
                width={800}
                style={{ borderRadius: '8px', marginTop: '14px' }}
            />
            <Skeleton
                height={28}
                width={140}
                style={{ marginTop: '14px', marginBottom: '6px' }}
            />
            <Skeleton />
            <Skeleton />
            <Skeleton />
            <Skeleton />
        </>
    )
}

export default SkeletonPlaceHolder;