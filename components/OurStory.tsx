import Image from "next/image";

const OurStory = () => {
    return (
        <div className="container pt-20 pb-32 grid lg:grid-cols-2 gap-10">
            <div>
                <div>
                    <Image
                    src="/home.jpg"
                    alt="a picture of room"
                    width={400}
                    height={400}
                    className="object-cover"
                    />
                    <Image
                    src="/image-2.jpg"
                    alt="a picture of room"
                    width={250}
                    height={250}
                    className="absolute top-1/2 left-1/2 border-4 object-cover hidden lg:block"
                    />
                </div>
            </div>
        </div>
    );
}

export default OurStory;