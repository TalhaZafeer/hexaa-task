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
        <button className="w-full px-4 md:w-[8rem]">back home</button>
      </div>
    </div>
  );
}

export default Error404;
