"use client";
import { Alert, Button } from "antd";
import Link from "next/link";
interface ErrorProps {
  error: string | null;
}

const ErrorReturnToHome: React.FC<ErrorProps> = ({ error }) => {
  return (
    <div
      className="flex w-full  items-center mt-10 flex-col gap-10 "
      aria-label="Loader"
    >
      <Alert message={error} type="error" />
      <Button className="w-52  bg-[#6ebadd6f] border-blue-600">
        <Link href="/"> Return to HomePage</Link>
      </Button>
    </div>
  );
};
export default ErrorReturnToHome;
