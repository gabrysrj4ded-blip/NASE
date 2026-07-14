import Header from "./Header";
import SearchBar from "./SearchBar";
import HeroBanner from "./HeroBanner";
import TopProducts from "./TopProducts";

export default function HomeScreen() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-[430px] flex-col px-6 pt-2">

      <Header />

      <SearchBar />

      <HeroBanner />

      <TopProducts />

    </main>
  );
}