import Header from "./Header";
import SearchBar from "./SearchBar";
import HeroBanner from "./HeroBanner";
import TopProducts from "./TopProducts";

import { SectionDivider } from "@/components/ui";

export default function HomeScreen() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-[430px] flex-col px-5 pt-[max(12px,env(safe-area-inset-top))]">

      <Header />

      <div className="-mt-3">
       
      <SearchBar />
      
      <div className="-mt-2">

      <SectionDivider />
     
      <div className="-mt-2">
        
      </div>
      
      <HeroBanner />

      <SectionDivider />

      <TopProducts />

    </main>
  );
}