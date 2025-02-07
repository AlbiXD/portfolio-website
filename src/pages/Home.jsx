function Home() {
    return (
        <div className="flex flex-col items-center justify-center h-screen w-screen">
            <div class="flex flex-row gap-2">
                <div className="text-lime-500 text-center max-[435px]:text-xl text-5xl">albi@linux-desktop: ~$</div>
                <div className="text-center max-[435px]:text-xl text-5xl">Hello, World! I am Albi</div>
            </div>
            <div className="text-[#B0B0B0] text-center text-2xl max-[435px]:text-[12px]">I am a Software Engineer that loves building things from the ground up.            </div>
            <div className="text-[#B0B0B0] text-center text-2xl max-[435px]:text-[12px]">From systems programming to desktop applications and web applications. Take a look at my projects!</div>

        </div>
    );
}

export default Home;
