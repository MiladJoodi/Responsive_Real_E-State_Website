import SearchForm from "./SearchForm";

const Hero = () => {
    return (
        <div className="min-h-screen hero flex justify-center items-center">
            <div className="max-w-full flex flex-col gap-6 items-center pb-10">
                <div className="space-y-4">
                    <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-center text-white">
                        Easy Way to Find Your Dream Home
                    </h1>
                    <p className="text-slate-300 text-center">
                        A great platform to buy, sell and rent yur properties whithout any agent or commissions.
                    </p>
                </div>
                {/* SEARCH FORM */}
                <SearchForm />
            </div>
        </div>
    );
}

export default Hero;