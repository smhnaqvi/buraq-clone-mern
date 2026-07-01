import HeroBanner from "@/components/HeroBanner";
import CategoryStrip from "@/components/CategoryStrip";
import BestSellers from "@/components/BestSellers";

export default async function Home() {
  return (
    <>
      <HeroBanner />
      <CategoryStrip />
      <BestSellers />
    </>
  );
}