import { PropsWithChildren } from "react";

export default function Error({ children }: PropsWithChildren) {
  return <span className="text-red-500 mt-0.5">{children}</span>;
}
