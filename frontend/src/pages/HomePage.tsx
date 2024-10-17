import { useActiveUser } from "../hooks";

export default function HomePage() {
  const { username } = useActiveUser();

  return (
    <div>
      <h1 className="text-xl">
        Welcome <span className="font-semibold">{username}</span>
      </h1>
    </div>
  );
}
