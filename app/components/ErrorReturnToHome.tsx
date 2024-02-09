"use client";
import { Alert, Button } from "antd";
import { useRouter } from "next/navigation";
interface ErrorProps {
  error: string | null;
}

const LoaderAndError: React.FC<ErrorProps> = ({ error }) => {
  const router = useRouter();

  return (
    <div
      className="flex w-full  items-center mt-10 flex-col gap-10 "
      aria-label="Loader"
    >
      <Alert message={error} type="error" />
      <Button
        className="w-52  bg-[#6ebadd6f] border-blue-600"
        onClick={() => router.push("/")}
      >
        Return to HomePage
      </Button>
    </div>
  );
};
export default LoaderAndError;
