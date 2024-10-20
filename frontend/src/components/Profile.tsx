import {ProfileData} from "../utils/api.ts";

export default function Profile({profileData}: { profileData?: ProfileData }) {
    return <section className="space-y-6 px-6 py-8 bg-white shadow-md rounded-md border">
        <div className="flex items-center">
            <span className='font-semibold w-1/3'>Activity Name:</span>
            <span className='text-gray-700'>{profileData?.activityName}</span>
        </div>
        <div className="flex items-center">
            <span className='font-semibold w-1/3'>Bio:</span>
            <span className='text-gray-700'>{profileData?.bio}</span>
        </div>
        <div className="flex items-center">
            <span className='font-semibold w-1/3'>Location:</span>
            <span className='text-gray-700'>{profileData?.location}</span>
        </div>
        <div className="flex items-center">
            <span className='font-semibold w-1/3'>Phone Number:</span>
            <span className='text-gray-700'>{profileData?.phoneNumber}</span>
        </div>
        <div className="flex items-center">
            <span className='font-semibold w-1/3'>Activity Category:</span>
            <span className='text-gray-700'>{profileData?.activityCategory}</span>
        </div>
        <div className="flex items-center">
            <span className='font-semibold w-1/3'>Website:</span>
            <a href={profileData?.website} className='text-blue-600 underline'>{profileData?.website}</a>
        </div>
    </section>
}