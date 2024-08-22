import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'


function MovieSkeleton({index}) {

    return (
        <article key={index} style={{ textAlign: 'center', marginTop: '4px' }}>
            <Skeleton
                height={32}
                width={240}
                style={{ margin: '0 auto' }}
            />
            <Skeleton
                height={356}
                width={`100%`}
                style={{ borderRadius: '8px', marginTop: '14px' }}
            />

        </article>
    )
}

export default MovieSkeleton;