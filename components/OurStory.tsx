import Image from "next/image";
import { Button } from "./ui/button";

const OurStory = () => {
    return (
        <div className="container pt-20 pb-32 grid lg:grid-cols-2 gap-10">
            <div>
                <div className="relative h-fit w-fit">
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

            <div>
                <p className="font-semibold mb-1">Our Story</p>
                <p className="text-3xl mb-2">Efficiency. Transparency. Control.</p>
                <p className="text-muted-foreground">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, ducimus similique a recusandae officiis, hic autem expedita alias error maxime, numquam ipsum. Consectetur vel sed impedit ipsam non magnam perspiciatis, quisquam quos nostrum rerum perferendis explicabo. Molestiae illum consectetur consequuntur! Voluptatem, ducimus similique a recusandae officiis, hic autem expedita alias error maxime</p>
                <p className="text-muted-foreground mb-4">numquam ipsum. Consectetur vel sed impedit ipsam non magnam perspiciatis, quisquam quos nostrum rerum perferendis explicabo. Molestiae illum consectetur consequuntur! Voluptatem, ducimus similique a recusandae officiis, hic autem expedita alias error maxime</p>
                <Button>Read More</Button>
            </div>

        </div>
    );
}

export default OurStory;