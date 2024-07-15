import { Link } from "react-router-dom";

export function Error404() {
  return (
    <div className="h-screen mx-auto grid place-items-center text-center px-8">
      <div>
        <p className="mt-10 !text-3xl !leading-snug md:!text-4xl">
          Error 404 <br /> It looks like something went wrong.
        </p>
        <p className="mt-8 mb-14 text-[18px] font-normal text-gray-500 mx-auto md:max-w-sm">
          Don&apos;t worry, our team is already on it.Please try refreshing the
          page or come back later.
        </p>
        <Link
          to="/"
          className="select-none rounded-lg border border-gray-900 py-2 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-gray-900 transition-all hover:opacity-75 focus:ring focus:ring-gray-300 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          type="button"
        >
          Back Home
        </Link>
      </div>
    </div>
  );
}

export default Error404;
