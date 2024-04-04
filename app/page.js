import CardsGrid from "@/components/CardsGrid";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ImageSlider from "@/components/ImageSlider";
import RoundedButton from "@/components/RoundedButton";
import TextInput from "@/components/TextInput";


export default function Home() {




  return (
      <div className="w-full h-full bg-white">
        <Header />
        <ImageSlider />
        <div className="flex items-center w-full py-3 mt-4 justify-center">
          <h2 className="text-4xl font-bold text-primary">Find your Market</h2>
        </div>
        <div className="flex items-center w-full py-3 px-8 mt-4 gap-6">

          <TextInput placeholder="Select your district" />
          <TextInput placeholder="Start Typing your location or area here" />
          <RoundedButton text="Search" />
        </div>

        <div className="flex items-center w-full py-3 mt-4 mb-6 justify-center">
          <h2 className="text-4xl font-bold text-primary">Popular Markets</h2>
        </div>

        <div className="px-6 py-6">
          <CardsGrid />
        </div>

        <div className="flex items-center w-full py-3 mt-4 mb-6 justify-center">
          <h2 className="text-4xl font-bold text-primary">Featured Events</h2>
        </div>

        <div className="px-6 py-12 bg-primary">
          <CardsGrid />
        </div>

        <div className="flex items-center w-full py-3 mt-4 mb-6 justify-center">
          <h2 className="text-4xl font-bold text-primary">Latest News</h2>
        </div>

        <div className="px-6 py-6">
          <CardsGrid />
        </div>

        <Footer />


      </div>


  );
}
