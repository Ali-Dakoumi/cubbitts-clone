import Image from "next/image";
import { useEffect } from "react";
import thirdimage from "../assets/eye-exam/CS_Cambridge4307_1_1296x.jpg";
import { createClient } from "../prismicio";

const Test = ({ products }) => {
  console.log(products);

  return (
    <>
      {[
        { a: 2, b: 3 },
        { a: 3, b: 4 },
      ].some((x) => x.b === 4) && (
        <Image className="" src={thirdimage} layout="fill" />
      )}
    </>
  );
};

export async function getStaticProps({ previewData }) {
  const client = createClient({ previewData });
  const products = await client.getAllByType("product");

  return {
    props: {
      products,
    }, // will be passed to the page component as props
  };
}
export default Test;
