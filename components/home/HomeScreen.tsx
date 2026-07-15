import Header from "./Header";
import SearchBar from "./SearchBar";
import HeroBanner from "./HeroBanner";
import TopProducts from "./TopProducts";

import { SectionDivider } from "@/components/ui";

export default function HomeScreen() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-[430px] flex-col px-5 pt-[max(8px,env(safe-area-inset-top))]">

      <Header />

      <div className="mt-1">
        <SearchBar />
      </div>

      <SectionDivider />

      <HeroBanner />

      <SectionDivider />

      <TopProducts />

    </main>
  );
}