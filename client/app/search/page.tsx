import type { Metadata } from "next";
import { getProducts } from "@/lib/api";
import ProductGrid from "@/components/ProductGrid";

export async function generateMetadata(
  { searchParams }: { searchParams: Promise<{ q?: string }> }
): Promise<Metadata> {
  const { q = "" } = await searchParams;
  return { title: q ? `Search: ${q}` : "Search" };
}

export default async function SearchPage(
  { searchParams }: { searchParams: Promise<{ q?: string }> }
) {
  const { q = "" } = await searchParams;
  const data = q ? await getProducts({ search: q, limit: 24 }) : null;

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">
        {q ? `Results for “${q}”` : "Search"}
      </h1>
      {data ? <ProductGrid products={data.items} /> : <p className="text-gray-500">Type a query above.</p>}
    </div>
  );
}