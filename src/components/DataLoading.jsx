import LoadingSkeletion from 'react-loading-skeleton'

export const DataLoading = () => {
    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-[20px] md:px-[50px] lg:px-[100px]">
                {[1, 2, 3, 4, 5, 6].map((item) => (
                    <div key={item} >
                        <LoadingSkeletion height={400} />
                    </div>
                ))}
            </div>
        </>
    )
}