import {useActiveUser} from "../hooks";

export default function HomePage() {
    const {username} = useActiveUser();

    return (
        <div>
            <h1 className="text-xl">
                Hello, <span className="font-semibold">{username}</span>
            </h1>
            <h2>Welcome to Community Connect, your Hub for connecting and empowering communities!</h2>

            <p></p>
        </div>
    );
}
