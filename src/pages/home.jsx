import { Link } from "react-router-dom";

export default function Home() {
  const heroCanvasSlides = [
    {
      title: "Babuji Signature Chaay",
      subtitle: "Warm, aromatic, unforgettable",
      image: "/images/Babuji%20Chai%20%5BRegular%2C%20150%20ml%5D.JPG",
    },
    {
      title: "Masala Maggie",
      subtitle: "Comfort food with cafe energy",
      image: "/images/Masala%20Maggie.JPG",
    },
    {
      title: "Cold Coffee",
      subtitle: "A chilled finish to every visit",
      image: "/images/Cold%20Coffee.JPG",
    },
    {
      title: "Veggie Classic Burger",
      subtitle: "Freshly stacked and satisfying",
      image: "/images/Veggie%20Classic%20Burger.JPG",
    },
  ];

  const heroGallery = [
    {
      title: "Signature Chaay",
      type: "Hot Beverage",
      image: "/images/Babuji%20Chai%20%5BRegular%2C%20150%20ml%5D.JPG",
    },
    {
      title: "Masala Maggie",
      type: "Snack",
      image: "/images/Masala%20Maggie.JPG",
    },
    {
      title: "Cold Coffee",
      type: "Cold Beverage",
      image: "/images/Cold%20Coffee.JPG",
    },
    {
      title: "Veggie Classic Burger",
      type: "Burger",
      image: "/images/Veggie%20Classic%20Burger.JPG",
    },
    {
      title: "Rose Tea",
      type: "Tea Special",
      image: "/images/Rose%20Tea.JPG",
    },
    {
      title: "Adrak Chaay",
      type: "Hot Beverage",
      image: "/images/Adrak%20Chaay%20%5B150%20ml%5D.JPG",
    },
    {
      title: "Lemon Ice Tea",
      type: "Cold Beverage",
      image: "/images/Lemon%20Ice%20Tea%20%5B300%20ml%5D.JPG",
    },
    {
      title: "Special Coffee",
      type: "Coffee",
      image: "/images/Special%20Coffee%20%5B200%20ml%5D.JPG",
    },
    {
      title: "Cheese Maggie",
      type: "Snack",
      image: "/images/Cheese%20Maggie.JPG",
    },
    {
      title: "Peri Peri Burger",
      type: "Burger",
      image: "/images/Peri%20Peri%20Burger.JPG",
    },
    {
      title: "Veggie Chipotle Wrap",
      type: "Wrap",
      image: "/images/Veggie%20Chipotle%20Wrap.JPG",
    },
    {
      title: "Lemon Mint Chaay",
      type: "Tea Special",
      image: "/images/Lemon%20Mint%20Chaay.JPG",
    },
    {
      title: "Masala Cheese Maggie",
      type: "Snack",
      image: "/images/Masala%20Cheese%20Maggie.JPG",
    },
  ];

  const heroStats = [
    { label: "Tea Varieties", value: "27+" },
    { label: "Fresh Snacks", value: "20+" },
    { label: "Local Favorite", value: "Daily" },
  ];

  const features = [
    {
      icon: "☕",
      title: "Premium Chai",
      description: "27 varieties of authentic Indian chai with finest spices",
    },
    {
      icon: "🥪",
      title: "Fresh Snacks",
      description: "Delicious food from Maggie to Burgers crafted daily",
    },
    {
      icon: "🤝",
      title: "Local Favorite",
      description: "Trusted by customers for authentic taste & quality",
    },
    {
      icon: "📍",
      title: "Find Us",
      description:
        "K D Empire, Kanakia Park, Mira Road East, Mira Bhayandar, Maharashtra 401107, India",
    },
  ];

  const testimonials = [
    {
      name: "Deep Goriwale",
      role: "Regular Customer",
      text: "The best chai in town! Perfect hangout spot with amazing snacks.",
      rating: 5,
    },
    {
      name: "Ayush Jadyar",
      role: "Customer",
      text: "Love the variety. Every visit is a new experience with different tea options!",
      rating: 5,
    },
    {
      name: "Anonymus Buyer",
      role: "Regular Customer",
      text: "Perfect blend of traditional taste and quality. Worth every visit!",
      rating: 5,
    },
  ];

  const menuHighlights = [
    {
      icon: "☕",
      title: "27 Hot Beverages",
      description: "From classic Masala Chai to specialty blends",
    },
    {
      icon: "🍜",
      title: "20+ Snacks",
      description: "Maggie, Burgers, Fries, and more",
    },
    {
      icon: "🎁",
      title: "8 Combo Deals",
      description: "Great value meal combinations",
    },
  ];

  return (
    <main className="w-full bg-[linear-gradient(180deg,#f4eee1_0%,#efe6d4_100%)]">
      <section className="relative w-full overflow-hidden px-4 pb-16 pt-32 md:pb-24">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('/images/Babuji%20Chai%20%5BRegular%2C%20150%20ml%5D.JPG')",
          }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(11,61,46,0.84)_0%,rgba(11,61,46,0.74)_34%,rgba(11,61,46,0.46)_60%,rgba(11,61,46,0.68)_100%)]" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(214,167,86,0.16),transparent_24%),radial-gradient(circle_at_bottom_right,rgba(241,235,220,0.1),transparent_26%)]"></div>
        <div className="absolute right-10 top-10 h-32 w-32 animate-pulse rounded-full bg-secondary opacity-10 blur-3xl"></div>
        <div className="absolute bottom-0 left-10 h-40 w-40 rounded-full bg-accent opacity-10 blur-3xl"></div>

        <div className="container-max relative z-10">
          <div className="grid items-stretch gap-8 xl:grid-cols-[1.02fr_0.98fr]">
            <div className="animate-slideInLeft rounded-[34px] border border-white/10 bg-[linear-gradient(180deg,rgba(8,39,30,0.68),rgba(8,39,30,0.5))] p-6 text-accent shadow-[0_24px_55px_rgba(0,0,0,0.2)] backdrop-blur-md md:p-8">
              <div>
                <span className="mb-3 inline-block rounded-full border border-secondary/35 bg-white/8 px-4 py-2 text-sm font-semibold uppercase tracking-widest text-secondary shadow-[0_10px_25px_rgba(0,0,0,0.12)] backdrop-blur-sm">
                  Welcome to Babuji Chaay
                </span>
                <h1 className="text-4xl font-serif font-bold leading-tight text-white md:text-5xl xl:text-6xl">
                  Brewing
                  <span className="text-secondary"> Happiness,</span>
                  <br />
                  One Cup at a Time
                </h1>
              </div>

              <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/90 md:text-lg">
                Experience the authentic taste of traditional Indian chai blended
                with modern cafe culture. Premium ingredients, perfect ambiance,
                and unforgettable moments await you.
              </p>

              <div className="flex flex-col gap-4 pt-6 sm:flex-row">
                <Link
                  to="/menu"
                  className="btn-primary text-center shadow-[0_18px_35px_rgba(214,167,86,0.28)]"
                >
                  Explore Menu
                </Link>
                <Link to="/contact" className="btn-secondary text-center">
                  Contact Us
                </Link>
              </div>

              <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
                {heroStats.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-2xl border border-white/10 bg-white/8 px-4 py-4 backdrop-blur-sm"
                  >
                    <p className="text-2xl font-bold text-secondary">{item.value}</p>
                    <p className="mt-1 text-xs uppercase tracking-[0.24em] text-white/70">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="hero-canvas animate-slideInRight relative hidden min-h-[520px] overflow-hidden rounded-[36px] border border-white/10 bg-black/15 shadow-[0_28px_65px_rgba(0,0,0,0.26)] backdrop-blur-[2px] xl:block">
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),transparent_22%,rgba(0,0,0,0.18)_100%)]" />
              {heroCanvasSlides.map((slide, idx) => (
                <div
                  key={slide.title}
                  className="hero-canvas-slide absolute inset-0"
                  style={{ animationDelay: `${idx * 4}s` }}
                >
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(11,61,46,0.16),rgba(11,61,46,0.48)_70%,rgba(11,61,46,0.78)_100%)]" />
                  <div className="absolute left-0 right-0 top-0 flex items-center justify-between p-6">
                    <span className="rounded-full border border-white/15 bg-black/20 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.32em] text-white/85 backdrop-blur-sm">
                      Babuji Canvas
                    </span>
                    <span className="rounded-full border border-white/15 bg-white/8 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.3em] text-secondary backdrop-blur-sm">
                      Fine Selections
                    </span>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-7 text-white">
                    <p className="text-sm uppercase tracking-[0.28em] text-secondary/90">
                      Signature Visuals
                    </p>
                    <h3 className="mt-3 text-3xl font-serif font-bold text-white">
                      {slide.title}
                    </h3>
                    <p className="mt-2 text-sm text-white/80">
                      {slide.subtitle}
                    </p>
                  </div>
                </div>
              ))}

              <div className="pointer-events-none absolute bottom-6 left-6 right-6 flex gap-2">
                {heroCanvasSlides.map((slide, idx) => (
                  <span
                    key={slide.title}
                    className="hero-canvas-indicator h-1.5 flex-1 rounded-full bg-white/20"
                    style={{ animationDelay: `${idx * 4}s` }}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="pt-8">
            <div className="mb-4 flex items-center justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-secondary/90">
                  Signature Frames
                </p>
                <p className="mt-2 text-sm text-white/75">
                  Swipe or scroll sideways through chai, snacks, and beverage
                  highlights.
                </p>
              </div>
              <div className="hidden rounded-full border border-white/15 bg-black/20 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-white/80 backdrop-blur-sm md:block">
                Scroll Sideways
              </div>
            </div>

            <div className="home-gallery-strip -mx-4 overflow-x-auto px-4 pb-4">
              <div className="flex min-w-max gap-5">
                {heroGallery.map((item) => (
                  <article
                    key={item.title}
                    className="group relative w-[240px] shrink-0 snap-start overflow-hidden rounded-[30px] border border-white/10 bg-white/5 shadow-[0_24px_55px_rgba(0,0,0,0.22)] backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:border-secondary/45"
                  >
                    <div className="relative h-[310px] overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/25 to-transparent" />
                      <div className="pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 -skew-x-12 bg-white/20 opacity-0 blur-md transition-all duration-700 group-hover:left-full group-hover:opacity-100" />
                    </div>
                    <div className="absolute left-4 top-4 rounded-full border border-white/15 bg-black/20 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.28em] text-accent backdrop-blur-md">
                      {item.type}
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-5 text-accent">
                      <p className="text-lg font-serif font-bold">{item.title}</p>
                      <p className="mt-1 text-sm text-accent/80">
                        Babuji selection
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden section-padding bg-[linear-gradient(180deg,#efe6d4_0%,#f6efe3_100%)]">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-[linear-gradient(180deg,rgba(11,61,46,0.14),transparent)]"></div>
        <div className="pointer-events-none absolute right-0 top-24 h-40 w-40 rounded-full bg-secondary/10 blur-3xl"></div>
        <div className="container-max relative">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-4xl font-serif font-bold text-primary md:text-5xl">
              Why Choose Babuji Chaay?
            </h2>
            <div className="divider-accent mx-auto mb-6"></div>
            <p className="mx-auto max-w-2xl text-lg text-gray-700">
              Quality chai, authentic recipes, and a welcoming place to unwind.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="group relative overflow-hidden rounded-[26px] border border-secondary/15 bg-white p-8 text-center shadow-[0_16px_40px_rgba(73,38,13,0.08)] transition-all duration-500 hover:-translate-y-3 hover:border-secondary/40 animate-fadeInUp"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(214,167,86,0.22),transparent_32%),linear-gradient(180deg,rgba(255,255,255,0.02),rgba(73,38,13,0.05))]"></div>
                <div className="pointer-events-none absolute -right-10 top-5 h-24 w-24 rounded-full bg-secondary/15 blur-2xl transition-transform duration-500 group-hover:scale-150"></div>
                <div className="relative">
                  <div className="mb-4 inline-flex h-20 w-20 items-center justify-center rounded-full bg-accent text-5xl shadow-[0_10px_25px_rgba(73,38,13,0.12)] transition-transform duration-500 group-hover:-translate-y-1 group-hover:scale-110">
                    {feature.icon}
                  </div>
                  <h3 className="mb-3 text-xl font-bold text-primary transition-colors duration-300 group-hover:text-[#6b3508]">
                    {feature.title}
                  </h3>
                  <p className="leading-relaxed text-gray-600">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden section-padding bg-[linear-gradient(180deg,#f8f2e8_0%,#ffffff_100%)]">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-[linear-gradient(180deg,rgba(214,167,86,0.12),transparent)]"></div>
        <div className="pointer-events-none absolute left-[-3rem] top-20 h-44 w-44 rounded-full bg-primary/5 blur-3xl"></div>
        <div className="container-max relative">
          <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
            <div className="animate-slideInLeft">
              <h2 className="mb-6 text-4xl font-serif font-bold text-primary md:text-5xl">
                Extensive Menu
              </h2>
              <div className="mb-8 space-y-4">
                {menuHighlights.map((item) => (
                  <div
                    key={item.title}
                    className="group flex items-start gap-4 rounded-2xl border border-transparent bg-accent/60 px-4 py-4 transition-all duration-300 hover:border-secondary/25 hover:bg-white hover:shadow-[0_12px_30px_rgba(73,38,13,0.08)]"
                  >
                    <span className="flex-shrink-0 text-2xl text-secondary transition-transform duration-300 group-hover:scale-110">
                      {item.icon}
                    </span>
                    <div>
                      <h4 className="font-bold text-primary">{item.title}</h4>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Link to="/menu" className="btn-primary">
                View Full Menu
              </Link>
            </div>

            <div className="animate-slideInRight">
              <div className="group relative flex h-full flex-col justify-center overflow-hidden rounded-[30px] bg-gradient-to-br from-primary to-primary-dark p-8 text-center text-white shadow-[0_24px_55px_rgba(11,61,46,0.2)]">
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(214,167,86,0.3),transparent_30%),linear-gradient(180deg,rgba(255,255,255,0.04),rgba(0,0,0,0.08))]"></div>
                <div className="pointer-events-none absolute -left-8 bottom-0 h-32 w-32 rounded-full bg-secondary/15 blur-2xl transition-transform duration-500 group-hover:scale-125"></div>
                <div className="relative">
                  <div className="mb-4 text-6xl">☕🥪</div>
                  <p className="mb-4 text-xl font-semibold">Fresh Daily</p>
                  <p className="mb-6 leading-relaxed text-accent">
                    Every item is made with premium quality ingredients. We
                    take pride in consistency and taste across every order.
                  </p>
                  <div className="text-sm text-accent text-opacity-80">
                    ★★★★★ Trusted by our local community
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden section-padding bg-[linear-gradient(180deg,#fffdf9_0%,#f3eadb_100%)]">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-[linear-gradient(180deg,rgba(11,61,46,0.06),transparent)]"></div>
        <div className="pointer-events-none absolute bottom-10 right-10 h-44 w-44 rounded-full bg-secondary/10 blur-3xl"></div>
        <div className="container-max relative">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-4xl font-serif font-bold text-primary md:text-5xl">
              What Our Customers Say
            </h2>
            <div className="divider-accent mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {testimonials.map((testimonial, idx) => (
              <div
                key={idx}
                className="group relative overflow-hidden rounded-[26px] border border-secondary/15 bg-white p-6 shadow-[0_16px_40px_rgba(73,38,13,0.08)] transition-all duration-500 hover:-translate-y-2 hover:border-secondary/35 hover:shadow-[0_22px_50px_rgba(73,38,13,0.16)] animate-fadeInUp"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(214,167,86,0.18),transparent_30%),linear-gradient(180deg,rgba(255,255,255,0.02),rgba(73,38,13,0.04))]"></div>
                <div className="relative">
                  <div className="mb-4 flex items-center gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-lg">
                        ⭐
                      </span>
                    ))}
                  </div>
                  <p className="mb-6 italic text-gray-700">
                    "{testimonial.text}"
                  </p>
                  <div className="border-t border-secondary/15 pt-4">
                    <p className="font-bold text-primary">{testimonial.name}</p>
                    <p className="text-sm text-secondary">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden section-padding bg-[linear-gradient(180deg,#f5eddf_0%,#fffaf2_100%)]">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-[linear-gradient(180deg,rgba(214,167,86,0.1),transparent)]"></div>
        <div className="container-max relative mx-auto max-w-2xl text-center">
          <div className="pointer-events-none absolute left-1/2 top-0 h-28 w-28 -translate-x-1/2 rounded-full bg-secondary/10 blur-3xl"></div>
          <h2 className="mb-6 text-4xl font-serif font-bold text-primary md:text-5xl">
            📍 Visit Us Today
          </h2>
          <p className="mb-8 text-lg text-gray-700">
            K D Empire, Kanakia Park, Mira Road East, Mira Bhayandar,
            Maharashtra 401107, India. Open daily with fresh chai and a
            welcoming atmosphere.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Link to="/contact" className="btn-primary text-center">
              Get in Touch
            </Link>
            <a href="tel:+919076165666" className="btn-outline text-center">
              Call: +91 90761 65666
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
