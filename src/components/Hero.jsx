export const Hero = () => {
    return (
        <div className="relative px-4 mt-[74px]">
            <img
                src="https://png.pngtree.com/background/20210710/original/pngtree-home-e-commerce-poster-background-banner-picture-image_998919.jpg"
                alt="Hero background"
                className="w-full rounded-2xl object-cover max-h-[500px] md:max-h-[600px]"
            />
            <div className="hidden md:flex absolute inset-0 items-center justify-start mx-[16px] bg-black bg-opacity-40 rounded-2xl px-4 sm:px-8 md:px-16">
                <div className="text-white max-w-[90%] sm:max-w-[70%] lg:max-w-[50%]">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3">
                        New Season Arrivals
                    </h1>
                    <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed">
                        This is a wider card with supporting text <br />
                        below as a natural lead-in to additional content. <br />
                        This content is a little bit longer.
                    </p>
                </div>
            </div>
        </div>
    );
};
