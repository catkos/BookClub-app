const Header = () => {
  return (
    <>
      <section className="bg-tussock-200 h-64 lg:h-96 w-full relative">
        <h1 className="font-botoni z-10 text-tussock-950 leading-none text-9xl lg:text-[15rem] pb-5 font-bold relative">
          Book <span className="block">Club</span>
        </h1>
      </section>
      <section className="p-0 w-full relative  pb-20 lg:-top-10 md:pb-30">
        <div className="w-full absolute">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 356 100">
            <path
              d="M0.000001,173.080169h355.999999l.000001-42.691145c-7.69736,1.625368-13.181542,0-28.62804,0s-30.564381,8.062506-48.830864,8.062506c-59.294622,0-60.29117-15.133988-80.222135-15.133988-22.192715,0-22.92061-19.835321-56.803251-19.835321s-38.84887,53.315332-68.76183,53.315332q-60.795301.000001-72.75388-40.222237v56.504854Z"
              transform="matrix(-1 0 0-1 356.000001 173.080169)"
              fill="#e4d5a4"
              strokeWidth="0.712"
            />
          </svg>
        </div>
      </section>
    </>
  );
};

export default Header;
