'use client'
import Typewriter from 'typewriter-effect';

const TypeWriter = () => {
    return (
        <Typewriter
            onInit={(typeWriter) => {
                typeWriter
                    .typeString('Easy Way to Find Your Dream Home')
                    .start()
                    // .pauseFor(1500)
                    // .deleteAll()
                    // .start()
            }}
            options={{
                loop: false,
                wrapperClassName: 'text-3xl sm:text-3xl lg:text-[3.4rem] font-bold text-center text-white',
            }}
        />
    );
}

export default TypeWriter;