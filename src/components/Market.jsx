import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import img1 from "../assets/banking.jpg";
import hp1 from "../assets/hp1.png";
import hp2 from "../assets/hp2.png";
import hp3 from "../assets/hp3.png";
import hp4 from "../assets/hp4.png";
import hp5 from "../assets/hp5.png";
import hp6 from "../assets/hp6.png";
import bag1 from "../assets/bag1.png";
import bag2 from "../assets/bag2.png";
import phone1 from "../assets/phone1.png";
import phone2 from "../assets/phone2.png";

import { Briefcase, Laptop, Smartphone, Truck } from "lucide-react";

const products = [
  {
    id: 1,
    name: "HP Spectre x360",
    price: "22,500",
    image: hp1,
    desc: '32GB RAM, 512GB SSD storage (ROM), 14" OLED touch display, Intel Core i7 processor, Iris Xe graphics, ~15hrs battery life, sleek convertible design.',
    reviews: 10,
    reviewPoint: 4.5,
  },
  {
    id: 2,
    name: "Dell XPS 13",
    price: "19,800",
    image: hp2,
    desc: '16GB RAM, 1TB SSD storage, 13.4" InfinityEdge display, Intel Core i7, ultra-thin build, long battery life, ideal for professionals on the go.',
    reviews: 8,
    reviewPoint: 4.3,
  },
  {
    id: 3,
    name: "MacBook Air M2",
    price: "24,000",
    image: hp3,
    desc: '16GB RAM, 512GB SSD storage, 13.6" Liquid Retina display, Apple M2 chip, fanless design, up to 18hrs battery life, lightweight and portable.',
    reviews: 15,
    reviewPoint: 4.8,
  },
  {
    id: 4,
    name: "Lenovo ThinkPad X1 Carbon",
    price: "21,500",
    image: hp4,
    desc: '16GB RAM, 1TB SSD storage, 14" anti-glare display, Intel Core i7, durable carbon-fiber build, military-grade durability, and rapid charging.',
    reviews: 6,
    reviewPoint: 4.4,
  },
  {
    id: 5,
    name: "Asus ZenBook Pro Duo",
    price: "26,700",
    image: hp5,
    desc: '32GB RAM, 1TB SSD storage, dual 14"/15.6" 4K touch displays, Intel Core i9, NVIDIA RTX graphics, designed for creators and multitasking.',
    reviews: 12,
    reviewPoint: 4.6,
  },
  {
    id: 6,
    name: "iPhone 15 Pro Max",
    price: "18,500",
    image: phone1,
    desc: '8GB RAM, up to 1TB storage, 6.7" Super Retina XDR OLED display, A17 Bionic chip, ProMotion 120Hz, 48MP triple camera system, titanium build.',
    reviews: 20,
    reviewPoint: 4.9,
  },
  {
    id: 7,
    name: "Samsung Galaxy S23 Ultra",
    price: "17,200",
    image: phone2,
    desc: '12GB RAM, up to 1TB storage, 6.8" Dynamic AMOLED 2X display, Snapdragon 8 Gen 2, 200MP quad camera, S Pen support, 5000mAh battery.',
    reviews: 18,
    reviewPoint: 4.7,
  },
  {
    id: 8,
    name: "OnePlus 11 5G",
    price: "12,500",
    image: hp6,
    desc: '16GB RAM, 512GB storage, 6.7" AMOLED 120Hz display, Snapdragon 8 Gen 2, Hasselblad triple camera, 100W fast charging, sleek curved design.',
    reviews: 9,
    reviewPoint: 4.4,
  },
  {
    id: 9,
    name: "Samsonite Laptop Backpack",
    price: "3,500",
    image: bag1,
    desc: 'Durable and stylish laptop bag with padded compartments, fits up to 15.6" laptops, multiple pockets, water-resistant fabric, ergonomic straps.',
    reviews: 7,
    reviewPoint: 4.2,
  },
];

const items = [
  {
    id: 1,
    name: "Laptops & Accessories",
    icon: Laptop,
    info: "From Ksh: 10,000",
  },
  {
    id: 2,
    name: "Smartphones & Accessories",
    icon: Smartphone,
  },
  {
    id: 3,
    name: "Laptop Bags",
    icon: Briefcase,
  },
  {
    id: 5,
    name: "Free Delivery within Nairobi,Eldoret & Kapsabet",
    icon: Truck,
  },
];

const handlePurchase = (product) => {
  const phoneNo = "254746838304";
  const message = `Hello Erick, I visited debsploit solution's market place and I'm interested in buying ${product.name} for Ksh ${product.price}. How do I proceed? Thanks.`;
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${phoneNo}?text=${encodedMessage}`;
  window.open(whatsappUrl, "_blank");
};


const Market = () => {
  const homeBannerImages = [
    phone2,
    hp1,
    hp2,
    bag1,
    hp3,
    hp4,
    bag2,
    hp5,
    hp6,
    phone1,
  ];

  return (
    <div className="pb-24">
      <header className="mt-20 border-b-2 border-gray-700">
        <div className="w-full flex flex-row justify-between p-11 gap-20">
          <div className="flex-1 glass-card p-8 hover:scale-[101%] transition-all duration-30">
            <h2 className="text-center pt-4 pb-4 text-2xl font-serif">
              We offer these and More!
            </h2>
            <div className="">
              {items.map((item, index) => (
                <div
                  key={index}
                  className="glass-card p-8 hover:scale-105 transition-all duration-30"
                >
                  <div className="space-y-6">
                    <ul className="flex flex-row gap-5">
                      <li>
                        <item.icon className="w-6 h-6 text-gray-400" />
                      </li>
                      <li>{item.name}</li>
                      <li>{item.info}</li>
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex-1">
            <Carousel showThumbs={false} autoPlay={true} infiniteLoop={true}>
              {homeBannerImages.map((image, index) => (
                <div key={index} className="">
                  <img
                    className="h-96 w-auto mx-auto object-contain"
                    src={image}
                    alt={`Banner ${index + 1}`}
                  />
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </header>


      {/* products section */}
      <div>
        <div className="mt-10 w-11/12 mx-auto">
          <div className="block md:flex gap-5 justify-between">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {products.map((product, id) => (
                <div
                  key={id}
                  className="mb-5 bg-gray-100 flex-1 rounded-sm hover:scale-[101%] hover:transition-transform duration-300"
                >
                  <img src={product.image} className="h-40 mx-auto" />
                  <hr />
                  <div className="flex flex-col justify-between bg-gray-100 p-2">
                    <p className="font-semibold text-gray-700">
                      {product.name}
                    </p>
                    <p className="text-sm font-semibold text-green-500 pb-3">
                      <span className="text-lg">Ksh:</span> {product.price}
                    </p>
                    <div className="pb-4">
                      <p className="text-sm text-gray-500">{product.desc}</p>
                    </div>
                    {/* rating */}
                    <div>
                      <div class="flex items-center">
                        <div class="flex items-center">
                          <svg
                            class="w-4 h-4 text-yellow-300 me-1"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 22 20"
                          >
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                          </svg>
                          <svg
                            class="w-4 h-4 text-yellow-300 me-1"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 22 20"
                          >
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                          </svg>
                          <svg
                            class="w-4 h-4 text-yellow-300 me-1"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 22 20"
                          >
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                          </svg>
                          <svg
                            class="w-4 h-4 text-yellow-300 me-1"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 22 20"
                          >
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                          </svg>
                          <svg
                            class="w-4 h-4 text-yellow-300 me-1"
                            aria-hidden="false"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 22 20"
                          >
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                          </svg>
                          <p class="ms-2 text-sm font-bold text-gray-900 dark:text-white">
                            {product.reviewPoint}
                          </p>
                          <span class="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span>
                          <p class="text-sm font-medium text-gray-900 dark:text-white">
                            {product.reviews} reviews
                          </p>
                        </div>
                      </div>
                      {/* button */}
                      <div className="bg-primary p-2 rounded-md mt-4 hover:bg-secondary cursor-pointer" onClick={()=>handlePurchase(product)}>
                        <h2 className="text-center text-sm">Order now</h2>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Market;
