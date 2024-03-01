import SearchForm from "./SearchForm";
import TypeWriter from "./ui/TypeWriter";


const Hero = () => {
    return (
        <div className="min-h-screen hero flex justify-center items-center">
            <div className="max-w-full flex flex-col gap-6 items-center pb-10">
                <div className="space-y-4 px-5">
                    <TypeWriter />

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