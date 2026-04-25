import React from "react";

/* ─── Blog Posts ─── */
interface BlogPost {
  image: string;
  day: string;
  month: string;
  title: string;
  excerpt: string;
}

const posts: BlogPost[] = [
  {
    image: "https://images.unsplash.com/photo-1563453392212-326f5e854473?w=500&q=80",
    day: "02",
    month: "MAY",
    title: "Newest Cleaning Tools for House 2024",
    excerpt: "Competently repurpose forward benefits conveniently target e-business",
  },
  {
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=500&q=80",
    day: "12",
    month: "MAY",
    title: "10 Most Popular Cleaning Tips for House",
    excerpt: "Competently repurpose forward benefits conveniently target e-business",
  },
  {
    image: "https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=500&q=80",
    day: "25",
    month: "MAY",
    title: "Floor Cleaning Use New Equipment",
    excerpt: "Competently repurpose forward benefits conveniently target e-business",
  },
];

const BlogSection: React.FC = () => (
  <section className="bg-white py-16 px-4">
    <div className="max-w-6xl mx-auto">
      {/* Header row */}
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-10">
        <div>
          <p className="text-[#1a3fbf] font-bold uppercase tracking-widest text-xs mb-2">
            Latest Blog
          </p>
          <h2 className="text-3xl font-extrabold text-[#0f1f5c] leading-tight">
            Learn about our Latest <br /> News from Blog
          </h2>
        </div>
        <div className="shrink-0 self-center md:self-start">
          <a
            href="#"
            className="inline-flex items-center gap-2 border-2 border-[#f5a623] text-[#f5a623] hover:bg-[#f5a623] hover:text-white font-bold px-6 py-2.5 rounded-full text-sm transition"
          >
            View All Blog
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>

      {/* Blog cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {posts.map((post) => (
          <div key={post.title} className="group cursor-pointer">
            {/* Image */}
            <div className="relative overflow-hidden mb-4" style={{ height: 220 }}>
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              {/* Date badge */}
              <div className="absolute bottom-4 left-4 bg-[#f5a623] text-white px-3 py-1.5 text-center leading-tight">
                <p className="text-lg font-extrabold leading-none">{post.day}</p>
                <p className="text-[10px] font-semibold uppercase tracking-wide">{post.month}</p>
              </div>
            </div>

            {/* Content */}
            <h3 className="text-[#0f1f5c] font-extrabold text-base mb-2 group-hover:text-[#1a3fbf] transition">
              {post.title}
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed mb-3">{post.excerpt}</p>
            <a href="#" className="flex items-center gap-1 text-[#1a3fbf] font-semibold text-sm hover:gap-2 transition-all">
              Read More
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ─── Brand Logos ─── */
const brands = ["BDShop", "Walmart", "amazon", "Sketch", "Spotify"];

const BrandLogos: React.FC = () => (
  <section className="bg-white border-t border-gray-100 py-8 px-4">
    <div className="max-w-5xl mx-auto flex flex-wrap items-center justify-center gap-10">
      {brands.map((brand) => (
        <span
          key={brand}
          className="text-gray-400 font-extrabold text-xl tracking-tight hover:text-gray-600 transition cursor-pointer"
        >
          {brand}
        </span>
      ))}
    </div>
  </section>
);

export { BlogSection, BrandLogos };
export default BlogSection;