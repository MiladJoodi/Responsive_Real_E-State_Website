import { Link } from "lucide-react";
import { propertiesList } from "./Features";
import Image from "next/image";

type PropertyCardProps = (typeof propertiesList)[0];

const PropertyCard = ({
    name,
    baths,
    beds,
    id,
    image,
    price,
    rating,
    sqft,
}: PropertyCardProps) => {
    return (
            <div className="border rounded-md overflow-hidden">
                <div>
                    <Image
                        src={image}
                        alt={name}
                        width={400}
                        height={420}
                        className="w-full transition-transform group-hover:scale-105"
                    />
                </div>
            </div>
    );
}

export default PropertyCard;