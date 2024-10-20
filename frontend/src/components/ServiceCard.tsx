interface Service {
    title: string;
    description: string;
    price: string;
    availability: string;
    duration: string;
    business: string;
    rating: number;
}

export default function ServiceCard({service}: { service: Service }) {
    return <div
        className="border p-5 rounded-lg space-y-2 flex flex-col justify-between shadow-md">
        <h2 className="text-xl font-semibold">{service.title}</h2>
        <p className="text-gray-600">{service.description}</p>
        <div className="flex justify-between items-center mt-4">
            <p className="font-semibold text-lg">{service.price}</p>
            <p className={`text-sm border rounded-full py-1 px-2 ${service.availability === "Available" ? "border-primary text-green-500" : "text-red-500 border-red-500"}`}>
                {service.availability}
            </p>
        </div>
        <p className="text-gray-500 text-sm mt-2">Duration: {service.duration}</p>
        <p className="text-gray-500 text-sm mt-2">Business: {service.business}</p>
        <p className="text-gray-500 text-sm mt-2">Rating: {service.rating}</p>
        <div className="flex justify-between mt-4 gap-x-2">
            <button className="btn btn-secondary">Learn More</button>
            <button
                className={`btn btn-primary ${service.availability === 'Unavailable' ? 'cursor-not-allowed' : ''}`}
                disabled={service.availability === 'Unavailable'}
            >Book Now
            </button>
        </div>
    </div>
}