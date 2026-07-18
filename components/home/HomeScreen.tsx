import Header from "./Header";
import SearchBar from "./SearchBar";
import HeroBanner from "./HeroBanner";
import TopSellers from "./TopSellers";
import TopProducts from "./TopProducts";
import TopSellers from "./TopSellers";

import { SectionDivider } from "@/components/ui";

export default function HomeScreen() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-[430px] flex-col px-5 pt-[max(12px,env(safe-area-inset-top))]">
      <Header />

      <SectionDivider />

      <SearchBar />

      <SectionDivider />

      <HeroBanner />

      <SectionDivider />

      <TopSellers />

      <SectionDivider />

      <TopProducts />
    </main>
  );
}