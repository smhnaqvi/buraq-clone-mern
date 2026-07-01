import Link from "next/link";
import Image from "next/image";

interface Category {
  _id: string;
  name: string;
  image?: string;
  slug?: string;
}

async function getCategories(): Promise<Category[]> {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/categories`, {
      next: { revalidate: 3600 },
    });
    if (!res.ok) return [];
    return res.json();
  } catch {
    return [];
  }
}

// Fallback images per category name
const fallbackImages: Record<string, string> = {
  eastern: "https://images.unsplash.com/photo-1512389142860-9c449e58a543?w=600&q=80",
  western: "https://images.unsplash.com/photo-1594938298603-c8148c4b4d0a?w=600&q=80",
  accessories: "https://images.unsplash.com/photo-1611010344444-5f9e4d86a6d9?w=600&q=80",
  default: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=600&q=80",
};

export default async function CategoryStrip() {
  const categories = await getCategories();

  return (
    <section className="py-20 px-6 lg:px-12 max-w-[1440px] mx-auto">
      {/* Section header */}
      <div className="flex items-end justify-between mb-10">
        <div>
          <span className="font-sans text-xs tracking-[0.3em] uppercase text-brown block mb-2">
            Browse by
          </span>
          <h2 className="font-serif text-3xl lg:text-4xl text-espresso">
            Category
          </h2>
        </div>
        <Link
          href="/collections"
          className="hidden sm:block font-sans text-xs tracking-widest uppercase text-espresso/50 hover:text-brown transition-colors border-b border-espresso/20 pb-0.5"
        >
          View all
        </Link>
      </div>

      {/* Category grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {categories.length > 0 ? (
          categories.map((cat) => {
            const img =
              cat.image ||
              fallbackImages[cat.name.toLowerCase()] ||
              fallbackImages.default;

            return (
              <Link
                key={cat._id}
                href={`/category/${cat.slug ?? cat._id}`}
                className="group relative aspect-[3/4] overflow-hidden bg-sand"
              >
                <Image
                  src={img}
                  alt={cat.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-espresso/70 via-espresso/10 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="font-serif text-xl text-cream">{cat.name}</p>
                  <p className="font-sans text-xs tracking-widest uppercase text-cream/60 mt-1 group-hover:text-gold transition-colors">
                    Shop now →
                  </p>
                </div>
              </Link>
            );
          })
        ) : (
          // Skeleton fallback
          Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="aspect-[3/4] bg-sand animate-pulse" />
          ))
        )}
      </div>
    </section>
  );
}