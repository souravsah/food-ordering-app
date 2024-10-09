import Header from "./components/layout/Header";
import Hero from  "./components/layout/Hero"
import HomeMenu from "./components/layout/HomeMenu";
import SectionHeaders from "./components/layout/SectionHeaders";
import "./globals.css"
export default function Home() {
  return (
    <>
    <Header/>
    <Hero/>
    <HomeMenu/>
    <section className="text-center text-gray-500 my-16">
      <SectionHeaders subHeader={'Our Story'} mainHeader={'About Us'}/>
      <div className="max-w-2xl mx-auto flex flex-col gap-2">
      <p >Lorem ipsum dolor sit, aperiam ea sit natus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat quibusdam est totam, eligendi earum laudantium? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis, quaerat.</p>
      <p > Aspernatur sequi deleniti aperiam ea sit natus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat quibusdam est totam, eligendi earum la Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium repellendus reiciendis quas id praesentium!.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum provident at ullam qui sequi culpa nemo accusantium non, sunt aliquid?</p>
      </div>
    </section>
    <section className="text-center my-8">
      <SectionHeaders subHeader={'Don\'t hesitate'} mainHeader={'Contact us'}/>
      <div className="mt-8">
      <a className="text-4xl mt-8 underline text-gray-500" href="tel:+918945975815">
        +91 89459 75815
      </a>
      </div>
    </section>
    <footer className="border-t p-8 text-center text-gray-500 mt-16">
      &copy; 2024 All rights reserved
    </footer>
    </>
  );
}
