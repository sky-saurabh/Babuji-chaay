import { useState } from "react";
import { Link } from "react-router-dom";
import { products } from "../data/products";

const menuImageFiles = [
  "Adrak Chaay [150 ml].JPG",
  "Adrak Elaichi Chaay [150 ml].JPG",
  "Babuji Chai [Regular, 150 ml].JPG",
  "Black Chaay.JPG",
  "Black Clove Tea.JPG",
  "Black Dry Ginger Chaay.JPG",
  "Black Tulsi Chaay.JPG",
  "Cheese Maggie.JPG",
  "Chipotle Burger.JPG",
  "Cold Coffee.JPG",
  "Elaichi Chai [150 ml].JPG",
  "Honey Lemon Clove Chaay.JPG",
  "iced tea 1.JPG",
  "Lemon Ginger Chaay.JPG",
  "Lemon Ice Tea [300 ml].JPG",
  "Lemon Mint Chaay.JPG",
  "Lemon Tulsi Chaay.JPG",
  "Maggie.JPG",
  "Masala Chaay.JPG",
  "Masala Cheese Maggie.JPG",
  "Masala Maggie.JPG",
  "Peri Peri Burger.JPG",
  "Rose Tea.JPG",
  "Special Coffee [200 ml].JPG",
  "Tulsi Chaay.JPG",
  "Vegetable Cheese Maggie.JPG",
  "Vegetable Masala Maggie.JPG",
  "Veggie Classic Burger.JPG",
];

const imageNameAliases = {
  "babuji regular chaay": "Babuji Chai [Regular, 150 ml].JPG",
  "elaichi chaay": "Elaichi Chai [150 ml].JPG",
  "lemon ice tea": "Lemon Ice Tea [300 ml].JPG",
  "iced tea": "Lemon Ice Tea [300 ml].JPG",
  "special coffee": "Special Coffee [200 ml].JPG",
  "peri-peri burger": "Peri Peri Burger.JPG",
  "peri peri burger": "Peri Peri Burger.JPG",
  "chipotle veg burger": "Chipotle Burger.JPG",
  "veggi classic burger": "Veggie Classic Burger.JPG",
  "classic salad veggi burger": "Veggie Classic Burger.JPG",
  "classic cheese veggi burger": "Veggie Classic Burger.JPG",
  "classic salad cheese veggi burger": "Veggie Classic Burger.JPG",
  "cheese vegitable maggie": "Vegetable Cheese Maggie.JPG",
  "vegitable maggie": "Vegetable Masala Maggie.JPG",
  "peri peri masala maggie": "Masala Maggie.JPG",
  "peri peri masala cheese maggie": "Masala Cheese Maggie.JPG",
  "vegitable peri peri masala maggie": "Vegetable Masala Maggie.JPG",
  "vegitable cheese peri peri masala maggie": "Vegetable Cheese Maggie.JPG",
};

function normalizeImageKey(value) {
  return value
    .toLowerCase()
    .replace(/\.[^.]+$/, "")
    .replace(/\[[^\]]*\]/g, "")
    .replace(/chai/g, "chaay")
    .replace(/veggie/g, "veggi")
    .replace(/vegetable/g, "vegitable")
    .replace(/chaya/g, "chaay")
    .replace(/hydrabadi/g, "hyderabadi")
    .replace(/peri[\s-]*peri/g, "peri peri")
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
}

const imageLookup = menuImageFiles.reduce((lookup, fileName) => {
  lookup[normalizeImageKey(fileName)] = fileName;
  return lookup;
}, {});

function getItemImage(name) {
  const normalizedName = normalizeImageKey(name);
  const aliasMatch = imageNameAliases[normalizedName];
  if (aliasMatch) {
    return `/images/${encodeURIComponent(aliasMatch)}`;
  }

  const exactMatch = imageLookup[normalizedName];
  if (exactMatch) {
    return `/images/${encodeURIComponent(exactMatch)}`;
  }

  const looseMatch = Object.entries(imageLookup).find(([imageKey]) => {
    return (
      imageKey.includes(normalizedName) ||
      normalizedName.includes(imageKey)
    );
  });
  if (looseMatch) {
    return `/images/${encodeURIComponent(looseMatch[1])}`;
  }

  return null;
}

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState("hot-beverages");

  const categories = Object.keys(products);

  return (
    <main className="page-shell pt-24 min-h-screen">
      {/* HERO SECTION */}
      <section className="page-hero py-16 text-accent text-center">
        <div className="container-max relative">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
            Our Menu
          </h1>
          <p className="text-lg text-accent text-opacity-90 max-w-2xl mx-auto">
            Fresh, authentic chai and delicious snacks crafted with premium
            ingredients. Call us to place your order!
          </p>
        </div>
      </section>

      {/* CATEGORY TABS */}
      <section className="page-surface-warm section-padding">
        <div className="container-max relative">
          {/* Tab Buttons */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 md:px-6 py-2 md:py-3 rounded-full font-semibold text-sm md:text-base transition-all duration-300 transform hover:scale-105 ${
                  activeCategory === category
                    ? "bg-secondary text-primary shadow-premium"
                    : "bg-white text-primary border-2 border-secondary hover:border-secondary hover:bg-accent"
                }`}
              >
                <span className="mr-2">{products[category].icon}</span>
                {products[category].name}
              </button>
            ))}
          </div>

          {/* Menu Items Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products[activeCategory].items.map((item, idx) => {
              const itemImage = getItemImage(item.name);

              return (
                <div
                  key={idx}
                  className="group relative overflow-hidden rounded-[28px] border border-secondary/20 bg-white shadow-[0_16px_40px_rgba(73,38,13,0.08)] transition-all duration-500 hover:-translate-y-2 hover:border-secondary/40 hover:shadow-[0_24px_55px_rgba(73,38,13,0.18)] animate-fadeInUp"
                  style={{ animationDelay: `${idx * 0.05}s` }}
                >
                  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(214,164,79,0.26),transparent_38%),linear-gradient(180deg,rgba(255,255,255,0.02),rgba(73,38,13,0.06))]" />
                  <div className="pointer-events-none absolute -right-10 top-6 h-24 w-24 rounded-full bg-secondary/20 blur-2xl transition-transform duration-500 group-hover:scale-150" />

                  <div className="relative overflow-hidden">
                    {itemImage ? (
                      <img
                        src={itemImage}
                        alt={item.name}
                        className="h-56 w-full object-cover transition-transform duration-700 group-hover:scale-110"
                        loading="lazy"
                      />
                    ) : (
                      <div className="flex h-56 items-center justify-center bg-[linear-gradient(135deg,rgba(73,38,13,0.96),rgba(133,77,14,0.86))] px-8 text-center text-accent">
                        <div>
                          <p className="mb-2 text-xs uppercase tracking-[0.35em] text-secondary/80">
                            Babuji Special
                          </p>
                          <p className="text-2xl font-serif font-bold">
                            {item.name}
                          </p>
                        </div>
                      </div>
                    )}

                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-primary/75 via-primary/10 to-transparent opacity-80" />
                    <div className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-bold uppercase tracking-[0.24em] text-primary shadow-lg backdrop-blur-sm">
                      {products[activeCategory].name}
                    </div>
                    <div className="pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 -skew-x-12 bg-white/20 opacity-0 blur-md transition-all duration-700 group-hover:left-full group-hover:opacity-100" />
                  </div>

                  <div className="relative p-6">
                    <div className="mb-4">
                      <h3 className="text-lg font-bold text-primary transition-colors duration-300 group-hover:text-[#6b3508]">
                        {item.name}
                      </h3>
                    </div>

                    {item.variants?.length ? (
                      <div className="flex flex-wrap gap-2">
                        {item.variants.map((variant) => (
                          <span
                            key={variant}
                            className="rounded-full border border-secondary/35 bg-accent px-3 py-1 text-xs font-semibold text-primary transition-colors duration-300 group-hover:border-secondary/60"
                          >
                            {variant}
                          </span>
                        ))}
                      </div>
                    ) : (
                      <p className="text-sm text-primary/65">
                        Freshly prepared and served with Babuji Chaay style.
                      </p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ORDER CTA */}
      <section className="page-hero section-padding text-accent text-center">
        <div className="container-max relative max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            📞 Ready to Order?
          </h2>
          <p className="text-lg text-accent text-opacity-90 mb-8">
            All items are available for in-store dining. Contact us directly to
            place your order!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+919076165666"
              className="btn-primary px-8 py-4 text-lg font-bold rounded-lg hover:scale-105 transition-transform inline-block"
            >
              📞 Call to Order
            </a>
            <a
              href="mailto:babujichai55@gmail.com?subject=Order%20Inquiry"
              className="btn-secondary px-8 py-4 text-lg font-bold rounded-lg hover:scale-105 transition-transform inline-block"
            >
              ✉️ Email Us
            </a>
          </div>
        </div>
      </section>

      {/* STORE INFO */}
      <section className="page-surface-light section-padding">
        <div className="container-max relative text-center max-w-2xl mx-auto">
          <h3 className="text-3xl font-bold text-primary mb-6">
            📍 Visit Us
          </h3>
          <p className="text-lg text-gray-700 mb-6">
            K D Empire, Kanakia Park, Mira Road East, Mira Bhayandar,
            Maharashtra 401107, India. Enjoy fresh chai and snacks in a
            welcoming café environment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="btn-primary text-center inline-block px-8 py-3 rounded-lg"
            >
              Get Directions
            </Link>
            <a
              href="tel:+919076165666"
              className="btn-outline text-center inline-block px-8 py-3 rounded-lg"
            >
              Call Now
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
