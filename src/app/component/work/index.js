import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Mywork() {
  return (
    <div className="container mx-auto work">
      <div>
        <h1 className="line"><span>Mywork</span></h1>
      </div>
      <div className="work contianer mx-auto gap-4 grid grid-cols-6 sm:grid sm:grid-cols-4 lg:grid lg:grid-cols-6">
    
          <div className="gal-one xs:col-span-6 sm:col-span-2 lg:col-span-2">
            <Image className="ani" src="/port.jpg" width={340} height={400}></Image>
            <div className="hid-div">
               <div>
                <h4>Ecommerce App</h4>
                <h6>By Zain Ikram</h6>
               </div>
               <Link href={"https://www.youtube.com/watch?v=9wy3GyWE5O8"}>
                <button>Take a look</button>
               </Link>
            </div>
          </div>
          <div className="gal-two xs:col-span-6 sm:col-span-2 lg:col-span-2">
            <Image className="ani" src="/port 2.jpg" width={340} height={400}></Image>
            <div className="hid-div">
               <div>
                <h4>Budget App</h4>
                <h6>By Zain Ikram</h6>
               </div>
               <Link href={"https://zain-ikram-nawaz.github.io/budget-app/"}>
                <button>Take a look</button>
               </Link>
            </div>
          </div>
          <div className="gal-three xs:col-span-6 sm:col-span-2 lg:col-span-2">
            <Image className="ani" src="/port 3.jpg" width={340} height={400}></Image>
            <div className="hid-div">
               <div>
                <h4>Signup (next-auth)</h4>
                <h6>By Zain Ikram</h6>
               </div>
               <Link href={"https://signup-user.vercel.app"}>
                <button>Take a look</button>
               </Link>
            </div>
          </div>
       
     
          <div className="gal-four xs:col-span-6 sm:col-span-2">
            <Image className="ani" src="/port 4.jpg" width={340} height={400}></Image>
            <div className="hid-div">
               <div>
                <h4>Todo list</h4>
                <h6>By Zain Ikram</h6>
               </div>
               <Link href={"https://todo-list-final-one.vercel.app"}>
                <button>Take a look</button>
               </Link>
            </div>
          </div>
          <div className="gal-five xs:col-span-6 sm:col-span-2">
            <Image className="ani" src="/port 5 new.jpg" width={340} height={400}></Image>
             <div className="hid-div">
               <div>
                <h4>Portfolio</h4>
                <h6>By Zain Ikram</h6>
               </div>
               <Link href={"https://portfolio-lemon-eight-22.vercel.app"}>
                <button>Take look</button>
               </Link>
            </div>
          </div>
          <div className="gal-six xs:col-span-6 sm:col-span-2">
            <Image className="ani" src="/port 6 new.jpg" width={340} height={400}></Image>
            <div className="hid-div">
               <div>
                <h4>Ecommerce App clone</h4>
                <h6>By Zain Ikram</h6>
               </div>
               <Link href={"https://clothes-app-neon.vercel.app"}>
                <button>Take look</button>
               </Link>
            </div>
          </div>
        
      </div>
    </div>
  );
}
