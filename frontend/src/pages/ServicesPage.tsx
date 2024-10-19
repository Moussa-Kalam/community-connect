const services = [
    {
        title: "Web Development",
        description: "Build responsive, high-performance websites tailored to your business needs.",
        price: "$500",
        availability: "Available",
        duration: "2 weeks"
    },
    {
        title: "Mobile App Development",
        description: "Create user-friendly mobile apps for iOS and Android platforms.",
        price: "$800",
        availability: "Available",
        duration: "3 weeks"
    },
    {
        title: "UI/UX Design",
        description: "Design intuitive and aesthetically pleasing user interfaces and experiences.",
        price: "$400",
        availability: "Unavailable",
        duration: "1 week"
    },
    {
        title: "SEO Optimization",
        description: "Improve your website’s ranking and visibility on search engines.",
        price: "$300",
        availability: "Available",
        duration: "5 days"
    },
    {
        title: "Digital Marketing",
        description: "Boost your online presence with customized digital marketing strategies.",
        price: "$600",
        availability: "Available",
        duration: "2 weeks"
    },
    {
        title: "Content Writing",
        description: "Get high-quality, SEO-optimized content for your blog, website, or business.",
        price: "$200",
        availability: "Unavailable",
        duration: "1 week"
    },
    {
        title: "Graphic Design",
        description: "Create visually appealing graphics for your brand and marketing materials.",
        price: "$450",
        availability: "Available",
        duration: "1 week"
    },
    {
        title: "Social Media Management",
        description: "Manage and grow your social media presence with tailored strategies.",
        price: "$700",
        availability: "Available",
        duration: "1 month"
    },
    {
        title: "Video Production",
        description: "Produce high-quality videos for your business or personal projects.",
        price: "$1000",
        availability: "Available",
        duration: "3 weeks"
    },
    {
        title: "Email Marketing",
        description: "Create and manage effective email marketing campaigns.",
        price: "$350",
        availability: "Available",
        duration: "2 weeks"
    },
    {
        title: "IT Support",
        description: "Provide technical support and maintenance for your IT infrastructure.",
        price: "$150/hour",
        availability: "Available",
        duration: "As needed"
    }
];


export default function ServicesPage() {
    return <div>
        <h1 className="text-4xl font-semibold mb-4">Available Services </h1>
        <p className="text-gray-600 mb-4">Choose from a range of services to meet your needs.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {services.map((service
            ) => (
                <div key={service.title}
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
                    <div className="flex justify-between mt-4">
                        <button className="btn btn-secondary">Learn More</button>
                        <button className="btn btn-primary" disabled={service.availability === 'Unavailable'}>Book Now
                        </button>
                    </div>
                </div>
            ))}
        </div>
    </div>
}
