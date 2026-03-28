import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function PageNotFound() {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Page Not Found ";
  }, [])

  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <h1 className="text-2xl font-bold">Page Not Found</h1>
      <p className="text-lg">The page you are looking for does not exist.</p>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => navigate("/")}>
        Go Home
      </button>
    </div>
  )
}
