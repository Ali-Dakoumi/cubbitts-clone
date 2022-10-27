import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { createClient } from "../prismicio";
import { HiArrowNarrowRight } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import { AiOutlineMail } from "react-icons/ai";
import { IoIosArrowDown } from "react-icons/io";
import firstimage from "../assets/eye-exam/EE_8fcfba71-c60d-44d2-ba5c-e7e2bcfe297e_720x.jpg";
import secondimage from "../assets/eye-exam/CS_Cambridge2521_1296x.jpg";
import thirdimage from "../assets/eye-exam/CS_Cambridge4307_1_1296x.jpg";

const eyeexam = ({ document }) => {
  const show = (e) => {
    e.target.nextElementSibling.classList.toggle("max-h-0");
    e.target.lastChild.classList.toggle("rotate-180");
  };
  const { slices } = document.data;
  const items = slices.map((slice) => slice?.items);
  const product = items[1][0].product.data;
  const product2 = items[1][0].product2.data;
  const product3 = items[1][0].product3.data;
  const product4 = items[1][0].product3.data;
  const products = [product, product2, product3, product4];
  return (
    <>
      <Head>
        <title>Eye Exam</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="">
        <section className="px-[25px] py-5 grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2">
          <div
            className="col-start-1 row-start-2  md:grid lg:grid xl:grid 2xl:grid  grid-cols-1 grid-rows-1
           md:col-start-1 md:row-start-1 lg:col-start-1 lg:row-start-1 xl:col-start-1 xl:row-start-1 2xl:col-start-1 2xl:row-start-1
          "
          >
            <div
              className="self-start col-start-1 row-start-1 mb-[20px] mt-[10px]
            md:m-0 lg:m-0 xl:m-0 2xl:m-0 
            "
            >
              <p className="fz-15  ">Eye exams</p>
            </div>
            <div className="self-center sticky top-16 col-start-1 row-start-1 grid">
              <h2
                className="max-w-[100%] px-[20px] fz-30 md:fz-23 lg:fz-38 xl:fz-38 2xl:fz-38
              justify-self-center md:justify-self-start lg:justify-self-start xl:justify-self-start 2xl:justify-self-start
              md:max-w-[75%] lg:max-w-[75%] xl:max-w-[75%] 2xl:max-w-[75%] 
              md:px-0 lg:px-0 xl:px-0 2xl:px-0
              text-center md:text-left lg:text-left xl:text-left 2xl:text-left text-lg
              "
              >
                Comprehensive eye examinations are available at all of our
                stores
              </h2>
            </div>
          </div>
          <div
            className="relative col-start-1 row-start-1 aspect-[1/1.2] overflow-hidden
          md:col-start-2 md:row-start-1 lg:col-start-2 lg:row-start-1 xl:col-start-2 xl:row-start-1 2xl:col-start-2 2xl:row-start-1"
          >
            <Image src={firstimage} layout="fill" objectFit="cover" />
          </div>
          <div
            className="col-start-1 row-start-3  grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 gap-y-3
          md:col-start-2  md:row-start-2  lg:col-start-2  lg:row-start-2  xl:col-start-2  xl:row-start-2  2xl:col-start-2  2xl:row-start-2:
          "
          >
            <div className="pb-5  ">
              <h2 className="py-3 borderb mb-5">Services</h2>
              <Link href={"/"}>
                <a>
                  <div className="md:mr-[20px] lg:mr-[20px] xl:mr-[20px] 2xl:mr-[20px] flex justify-between items-center my-2 px-4 py-1 rounded-2xl bg-button-light ">
                    <p>Book an eye exam</p>
                    <HiArrowNarrowRight />
                  </div>
                </a>
              </Link>
              <p className="pr-[20px] ">
                Routine exam - £40 <br />
                OCT examinations - £65 <br />
                Contact lens appointments are not available <br />
                Eye exams available for 16 year olds and over
              </p>
            </div>
            <div className="pb-5 ">
              <h2 className="py-3 borderb mb-5">Contact</h2>
              <div className="flex items-center fz-15">
                <span className="mr-2">
                  <FiPhone />
                </span>
                <span>020 7683 6369</span>
              </div>
              <div className="flex items-center fz-15">
                <span className="mr-2">
                  <AiOutlineMail />
                </span>
                <span>info@cubitts.com</span>
              </div>
            </div>
            <div className=" md:col-span-2 lg:col-span-2 xl:col-span-2 2xl:col-span-2 pb-[20px] py-5 mt-[20px] borderb bordert">
              <p className=" fz-15 md:fz-23 lg:fz-23 xl:fz-23 2xl:fz-23 ">
                Eye exams vary, depending on where you go. Our eye exams are
                about much more than just checking your prescription.
                <br />
                <br />
                It's an essential way to detect even the slightest changes to
                your eye health, and can detect other systemic health issues
                such as glaucoma and diabetes before there are any symptoms.
                <br />
                <br />
                You should have your eyes examined at least once every two years
                - even if there’s no change in your vision.
              </p>
            </div>
          </div>
        </section>
        <section className="px-[25px] py-5  grid gap-x-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 fz-15 ">
          <div className="col-start-2">
            <div
              onClick={(e) => show(e)}
              className="cursor-pointer flex justify-between items-center border-b-[1px]  border-solid border-[#c6c6c6] py-3 "
            >
              <button className="pointer-events-none">Latest equipment</button>
              <IoIosArrowDown className="pointer-events-none transition-transform duration-200" />
            </div>
            <div className="max-h-0 overflow-y-hidden relative flex flex-col transition-all duration-200">
              <p>
                We don’t believe there’s truly such thing as a ‘free’ eye test.
                But there is such a thing as a better eye examination. Our eye
                exams last 30-40 minutes, double the industry standard, with our
                expertly trained optometrists. All information explained, jargon
                free.
                <br />
                <br />
                Our optometrists are experts in examining eyes. They are not
                sales people, so will never, ever, try to sell you anything.
              </p>
            </div>
            <div
              onClick={(e) => show(e)}
              className="cursor-pointer flex justify-between items-center border-b-[1px] border-solid border-[#c6c6c6] py-3 "
            >
              <button className="pointer-events-none">
                Individually tailored
              </button>
              <IoIosArrowDown className="pointer-events-none transition-transform duration-200" />
            </div>
            <div className="max-h-0 overflow-y-hidden relative flex flex-col transition-all duration-200">
              <p>
                Each eye examination is tailored for each individual patient.
                Your lifestyle, profession, activity level, medical history and
                any eye health issues are all considered by our experienced
                optometrists before we start the consultation.
              </p>
            </div>
            <div
              onClick={(e) => show(e)}
              className="cursor-pointer flex justify-between items-center border-b-[1px]  border-solid border-[#c6c6c6] py-3"
            >
              <button className="pointer-events-none">Fairly priced</button>
              <IoIosArrowDown className="pointer-events-none transition-transform duration-200" />
            </div>
            <div className="max-h-0 overflow-y-hidden relative flex flex-col transition-all duration-200">
              <p>
                Beyond eyesight, there are tests for pressure, visual acuity,
                refraction and retinal health. Thriving eyes in other words. All
                our eye exams include taking fundus photographs - visual records
                which document the ophthalmoscopic appearance of your retina.
                <br />
                <br />
                Should you care to (and everyone over the age of 25 should…) you
                can&nbsp;also opt for&nbsp;our 60 minute Optical Coherence
                Tomography&nbsp;examination. That’s mapping and measuring all
                ten layers of your eye.&nbsp;OCT is&nbsp;all about predicting
                conditions in the future. For example, OCT can spot glaucoma
                four years earlier than a standard retinal examination or
                photography.&nbsp;Available
              </p>
            </div>
          </div>
        </section>
        <section>
          <div class="px-[25px] py-5 grid gap-x-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 fz-15  ">
            <div
              class="mb-[20px] fz-15 md:fz-23 lg:fz-23 xl:fz-23 2xl:fz-23 md:max-w-[60%] 
            lg:max-w-[60%] xl:max-w-[60%] 2xl:max-w-[60%]
            md:col-start-2 lg:col-start-2 xl:col-start-2 2xl:col-start-2
            "
            >
              <br />
              Learn more about our eye examinations on our FAQs.
            </div>
          </div>
        </section>
        <section className="grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 py-5 mx-[25px] borderb">
          <div className="relative">
            <Image src={secondimage} layout="fill" objectFit="cover" />
          </div>
          <div className="relative">
            <Image src={thirdimage} layout="fill" objectFit="cover" />
          </div>
        </section>
        <section
          className="mx-[25px] mb-[25px]  h-40 md:h-70 lg:h-80 xl:h-80 2xl:h-80 py-5  fz-35 md:fz-80 xl:fz-80 2xl:fz-80 
        xl:max-w-[75%] 2xl:maw-w-[75%]
        "
        >
          <div className="">
            <h2 className="max-w-[80] ">
              The real voyage of discovery consists, not in seeking new
              landscapes, but in having new eyes.
            </h2>
          </div>
        </section>
      </main>
    </>
  );
};

export async function getStaticProps({ previewData }) {
  const client = createClient({ previewData });
  const document = await client.getSingle("homepage", {
    fetchLinks: ["product.price", "product.image", "product.title"],
  });
  return {
    props: {
      document,
    }, // will be passed to the page component as props
  };
}

export default eyeexam;
