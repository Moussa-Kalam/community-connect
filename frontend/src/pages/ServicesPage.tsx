import {ServiceCard} from "../components";

const services = [
    {
        title: "Web Development",
        description: "Build responsive, high-performance websites tailored to your business needs.",
        price: "$500",
        availability: "Available",
        duration: "2 weeks",
        business: "Tech Solutions",
        rating: 4.5
    },
    {
        title: "Mobile App Development",
        description: "Create user-friendly mobile apps for iOS and Android platforms.",
        price: "$800",
        availability: "Available",
        duration: "3 weeks",
        business: "App Innovators",
        rating: 4.7
    },
    {
        title: "UI/UX Design",
        description: "Design intuitive and aesthetically pleasing user interfaces and experiences.",
        price: "$400",
        availability: "Unavailable",
        duration: "1 week",
        business: "Design Masters",
        rating: 4.3
    },
    {
        title: "SEO Optimization",
        description: "Improve your website’s ranking and visibility on search engines.",
        price: "$300",
        availability: "Available",
        duration: "5 days",
        business: "SEO Experts",
        rating: 4.6
    },
    {
        title: "Digital Marketing",
        description: "Boost your online presence with customized digital marketing strategies.",
        price: "$600",
        availability: "Available",
        duration: "2 weeks",
        business: "Marketing Gurus",
        rating: 4.8
    },
    {
        title: "Content Writing",
        description: "Get high-quality, SEO-optimized content for your blog, website, or business.",
        price: "$200",
        availability: "Unavailable",
        duration: "1 week",
        business: "Content Creators",
        rating: 4.4
    },
    {
        title: "Graphic Design",
        description: "Create visually appealing graphics for your brand and marketing materials.",
        price: "$450",
        availability: "Available",
        duration: "1 week",
        business: "Graphic Pros",
        rating: 4.5
    },
    {
        title: "Social Media Management",
        description: "Manage and grow your social media presence with tailored strategies.",
        price: "$700",
        availability: "Available",
        duration: "1 month",
        business: "Social Media Experts",
        rating: 4.7
    },
    {
        title: "Video Production",
        description: "Produce high-quality videos for your business or personal projects.",
        price: "$1000",
        availability: "Available",
        duration: "3 weeks",
        business: "Video Makers",
        rating: 4.9
    },
    {
        title: "Email Marketing",
        description: "Create and manage effective email marketing campaigns.",
        price: "$350",
        availability: "Available",
        duration: "2 weeks",
        business: "Email Marketers",
        rating: 4.6
    },
    {
        title: "IT Support",
        description: "Provide technical support and maintenance for your IT infrastructure.",
        price: "$150/hour",
        availability: "Available",
        duration: "As needed",
        business: "IT Support Co.",
        rating: 4.8
    }
];

export default function ServicesPage() {
    return <div className='flex flex-col gap-10'>
        <h1 className="text-4xl font-semibold mb-4">Available Services </h1>
        <p className="text-gray-600 mb-4">Choose from a range of services to meet your needs.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {services.map((service
            ) => (
                <ServiceCard service={service} key={service.title}/>))}
        </div>
    </div>
}
