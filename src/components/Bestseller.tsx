// 'use client'

// import React, { useEffect, useState } from 'react';
// import { Container, Typography, Button } from '@mui/material';
// import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
// import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
// import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
// import FavoriteIcon from '@mui/icons-material/Favorite';
// import Link from 'next/link';
// import Image from 'next/image';
// import image from 'next/image';
// interface Item {
//   id: string;
//   imageUrl: string;
//   productName: string;
//   qty: string;
// }


// const Bestseller = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [data, setData] = useState<Item[]>([]);
//   const visibleItems = 4;
//   const handleNext = () => {
//     setCurrentIndex(prevIndex =>
//       (prevIndex + 1) % data.length
//     );
//   }

//   const handlePrev = () => {
//     setCurrentIndex(prevIndex =>
//       (prevIndex - 1 + data.length) % data.length
//     );
//   }

//   async function fetchData() {
//     try {
//       const token = localStorage.getItem("token");
//       const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products`, {
//         headers: {
//           Authorization: `Bearer ${token}`
//         }
//       });
//       console.log(response);
//       if (response.ok) {
//         const jsonData: Item[] = await response.json();
//         setData(jsonData);
//         // console.log(response);
//       } else {
//         console.error("Failed to fetch data");
//       }
//     } catch (error) {
//       console.error("Error:", error);
//     }
//   }
//   useEffect(() => {
//     fetchData();
//   }, []);



//   return (
//     <div className='sm:block'>
//       <div className='container align-start font-medium text-[#218c20] text-2xl pt-10 ps-20'>Deals of the Day</div>
//       <div className="container pt-6 relative flex">
//         <div className='container flex direction-row justify-around'>
//           {data.slice(currentIndex, currentIndex + visibleItems).map(data => (
//             <Item key={data.id} data={data} />
//           ))}
//         </div>
//         <Button className='absolute left-5 mt-20' onClick={handlePrev}>
//           <ArrowBackIosIcon color='success' />
//         </Button>
//         <Button className='absolute right-0 mt-20' onClick={handleNext}>
//           <ArrowForwardIosIcon color='success' />
//         </Button>
//       </div>
//     </div>
//   );
// }

// const Item = ({ data }: { data: Item }) => {
//   const [showFavIcon, setShowFavIcon] = React.useState(false);

//   return (

//     <div className='text-center bg-white drop-shadow-md hover:drop-shadow-xl space-y-2 py-5 px-2 border border-gray-200 max-w-[500px] max-h-[530px] pt-5'>
//       <Link href={data.id ? `/merchant/product/${data.id}` : '/login/adm'} className='link' prefetch={false}>
//         <div className='icon_flash right-3 top-4 space-y-2 text-white hover:'>
//           <RemoveRedEyeIcon sx={{ color: 'slate', fontSize: 20 }} />
//           <FavoriteIcon
//             className="favorite-icon"
//             style={{
//               opacity: showFavIcon ? 1 : 0
//             }}
//             onMouseEnter={() => setShowFavIcon(true)}
//             onMouseLeave={() => setShowFavIcon(false)}
//           />

//         </div>
//         <Image
//           className='p-5'
//           src={'/sports-1.jpg'}
//           alt={data.productName}
//           width={190}
//           height={190}
//         />
//         <Typography>{data.productName}</Typography>
//         <Typography>Stock:{data.qty}</Typography>
//       </Link>
//     </div>
//   )
// }



// export default Bestseller;



import React, { useEffect, useState } from "react";
import Link from "next/link";
import Slider from "react-slick";

import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi";
import ProductCard from "./Card";

interface Props {
  id?: string;
  className?: string;
  children?: React.ReactNode;
  href?: string;
  full?: boolean;
}
const DealsofDayBox: React.FC<Props> = ({
  id,
  className,
  href,
  children,
  full
}) => {
  const [data, setData] = useState<Props[]>([]);
  const [productData, setProductData] = useState([]);


  async function fetchData() {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products`);
      console.log(response);
      if (response.ok) {
        const jsonData = await response.json();
        setProductData(jsonData);
        // console.log(response);
      } else {
        console.error("Failed to fetch data");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  }
  useEffect(() => {
    fetchData();
  }, []);



  const settings = {
    className: 'slider variable-width',
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    infinite: false,
    arrows: true
  };


  return (
    <div className="image-slider-container container">
      <div className='container align-start font-medium text-[#218c20] text-2xl pt-10 ps-20'>Deals of the Day</div>
      <Slider {...settings}>
        {productData.map((item: any, index) => (
          <ProductCard
            link={'/login/adm'}
            key={index}
            img={item.photo}
            title={item.productName}
            description={item.description}
            rating={item.rating}
            price={item.price}
            // rating={0}
          />
        ))}
        {/* Add more slides as needed */}
      </Slider>
    </div>
  );
};

export default DealsofDayBox;
