import Link from "next/link";

const Try = () => {
  return (
    <section className="px-[25px] mt-10 h-40 md:h-70 lg:h-8 py-5 fz-35 md:fz-8 bordert ">
      <div className="  flex flex-col">
        <h2 className="fz-35 md:fz-60 xl:fz-80">
          Curiosity is gluttony.
          <br /> To see is to devour.
        </h2>
        <Link href={"/"}>
          <a className="my-4 px-4 py-2 max-w-[220px] rounded-2xl bg-button-light hover:bg-light-hover cursor-pointer ">
            Try on frames virtually
          </a>
        </Link>
      </div>
    </section>
  );
};

export default Try;
