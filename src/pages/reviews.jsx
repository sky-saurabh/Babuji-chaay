import { useEffect, useMemo, useState } from "react";
import { products } from "../data/products";

const STORAGE_KEY = "babuji-chaay-reviews";

const defaultReviews = [
  {
    id: 1,
    name: "Ritika S",
    product: "Masala Chaay",
    rating: 5,
    review:
      "Strong aroma, balanced spice, and the kind of chai that makes you want a second cup immediately.",
    visitType: "Dine-in",
    date: "2026-03-28",
  },
  {
    id: 2,
    name: "Kunal M",
    product: "Cold Coffee",
    rating: 4,
    review:
      "Creamy, chilled, and satisfying. Great pick if you want something refreshing with your snacks.",
    visitType: "Takeaway",
    date: "2026-03-24",
  },
  {
    id: 3,
    name: "Sana P",
    product: "Veggi Classic Burger",
    rating: 5,
    review:
      "Fresh bun, flavorful filling, and really nice texture. It paired perfectly with chai.",
    visitType: "Dine-in",
    date: "2026-03-19",
  },
];

function getStoredReviews() {
  if (typeof window === "undefined") {
    return defaultReviews;
  }

  const raw = window.localStorage.getItem(STORAGE_KEY);
  if (!raw) {
    return defaultReviews;
  }

  try {
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) && parsed.length ? parsed : defaultReviews;
  } catch {
    return defaultReviews;
  }
}

function formatReviewDate(date) {
  return new Date(date).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

function StarRow({ rating, interactive = false, onChange }) {
  return (
    <div className="flex items-center gap-2">
      {[1, 2, 3, 4, 5].map((star) => {
        const active = star <= rating;

        if (!interactive) {
          return (
            <span
              key={star}
              className={`text-2xl ${active ? "text-secondary" : "text-secondary/25"}`}
            >
              ★
            </span>
          );
        }

        return (
          <button
            key={star}
            type="button"
            onClick={() => onChange(star)}
            className={`text-3xl transition-transform duration-200 hover:scale-110 ${
              active ? "text-secondary" : "text-secondary/25"
            }`}
            aria-label={`Rate ${star} star${star > 1 ? "s" : ""}`}
          >
            ★
          </button>
        );
      })}
    </div>
  );
}

export default function Reviews() {
  const productOptions = useMemo(
    () =>
      Object.values(products).flatMap((category) =>
        category.items.map((item) => item.name)
      ),
    []
  );

  const [reviews, setReviews] = useState(defaultReviews);
  const [selectedProduct, setSelectedProduct] = useState("all");
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    product: productOptions[0] || "",
    rating: 5,
    visitType: "Dine-in",
    review: "",
  });

  useEffect(() => {
    setReviews(getStoredReviews());
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(reviews));
    }
  }, [reviews]);

  const filteredReviews =
    selectedProduct === "all"
      ? reviews
      : reviews.filter((entry) => entry.product === selectedProduct);

  const averageRating = reviews.length
    ? (
        reviews.reduce((sum, entry) => sum + entry.rating, 0) / reviews.length
      ).toFixed(1)
    : "0.0";

  const featuredProducts = [...new Set(reviews.map((entry) => entry.product))];

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const newReview = {
      id: Date.now(),
      name: formData.name.trim(),
      product: formData.product,
      rating: Number(formData.rating),
      visitType: formData.visitType,
      review: formData.review.trim(),
      date: new Date().toISOString(),
    };

    setReviews((current) => [newReview, ...current]);
    setSubmitted(true);
    setFormData({
      name: "",
      product: productOptions[0] || "",
      rating: 5,
      visitType: "Dine-in",
      review: "",
    });

    window.setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <main className="page-shell min-h-screen pt-24">
      <section className="page-hero py-16 text-center text-accent">
        <div className="container-max relative">
          <span className="mb-4 inline-block rounded-full border border-secondary/25 bg-white/5 px-4 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-secondary">
            Real Customer Feedback
          </span>
          <h1 className="mb-4 text-4xl font-serif font-bold md:text-5xl">
            Review Your Babuji Favorites
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-accent/90">
            Visitors can share what they ordered, rate their experience, and
            help the next chai lover discover the best picks on the menu.
          </p>
        </div>
      </section>

      <section className="page-surface-warm section-padding">
        <div className="container-max relative">
          <div className="mb-12 grid grid-cols-1 gap-6 md:grid-cols-3">
            <div className="rounded-[28px] border border-secondary/15 bg-white p-8 shadow-[0_16px_40px_rgba(73,38,13,0.08)]">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-secondary">
                Average Rating
              </p>
              <div className="mb-4 flex items-end gap-3">
                <span className="text-5xl font-bold text-primary">
                  {averageRating}
                </span>
                <span className="pb-2 text-primary/60">out of 5</span>
              </div>
              <StarRow rating={Math.round(Number(averageRating))} />
            </div>

            <div className="rounded-[28px] border border-secondary/15 bg-white p-8 shadow-[0_16px_40px_rgba(73,38,13,0.08)]">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-secondary">
                Total Reviews
              </p>
              <p className="text-5xl font-bold text-primary">{reviews.length}</p>
              <p className="mt-4 text-primary/70">
                Fresh feedback from dine-in and takeaway customers.
              </p>
            </div>

            <div className="rounded-[28px] border border-secondary/15 bg-white p-8 shadow-[0_16px_40px_rgba(73,38,13,0.08)]">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-secondary">
                Popular Picks
              </p>
              <div className="flex flex-wrap gap-2">
                {featuredProducts.slice(0, 3).map((product) => (
                  <span
                    key={product}
                    className="rounded-full bg-accent px-4 py-2 text-sm font-semibold text-primary"
                  >
                    {product}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.05fr_1.35fr]">
            <div className="rounded-[30px] border border-secondary/15 bg-white p-8 shadow-[0_18px_45px_rgba(73,38,13,0.1)]">
              <div className="mb-8">
                <h2 className="mb-3 text-3xl font-bold text-primary">
                  Leave a Review
                </h2>
                <p className="text-primary/70">
                  Share the product you tried and tell other visitors what stood
                  out.
                </p>
              </div>

              {submitted && (
                <div className="mb-6 rounded-2xl border border-green-200 bg-green-50 px-4 py-3 text-sm font-medium text-green-700">
                  Review added successfully. It is now visible on this page.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="mb-2 block text-sm font-semibold text-primary">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-secondary focus:ring-2 focus:ring-secondary/20"
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold text-primary">
                    Product Tried
                  </label>
                  <select
                    name="product"
                    value={formData.product}
                    onChange={handleChange}
                    required
                    className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 outline-none transition focus:border-secondary focus:ring-2 focus:ring-secondary/20"
                  >
                    {productOptions.map((product) => (
                      <option key={product} value={product}>
                        {product}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="mb-3 block text-sm font-semibold text-primary">
                    Rating
                  </label>
                  <StarRow
                    rating={formData.rating}
                    interactive
                    onChange={(rating) =>
                      setFormData((current) => ({ ...current, rating }))
                    }
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold text-primary">
                    Experience Type
                  </label>
                  <div className="flex flex-wrap gap-3">
                    {["Dine-in", "Takeaway", "Delivery"].map((option) => (
                      <button
                        key={option}
                        type="button"
                        onClick={() =>
                          setFormData((current) => ({
                            ...current,
                            visitType: option,
                          }))
                        }
                        className={`rounded-full border px-4 py-2 text-sm font-semibold transition-all ${
                          formData.visitType === option
                            ? "border-secondary bg-secondary text-primary"
                            : "border-secondary/30 bg-accent text-primary"
                        }`}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold text-primary">
                    Your Review
                  </label>
                  <textarea
                    name="review"
                    value={formData.review}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full resize-none rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-secondary focus:ring-2 focus:ring-secondary/20"
                    placeholder="Tell people what you liked about the taste, freshness, or overall experience."
                  ></textarea>
                </div>

                <button type="submit" className="btn-primary w-full text-center">
                  Post Review
                </button>
              </form>
            </div>

            <div className="space-y-6">
              <div className="rounded-[30px] border border-secondary/15 bg-white p-6 shadow-[0_18px_45px_rgba(73,38,13,0.1)]">
                <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                  <div>
                    <h2 className="text-3xl font-bold text-primary">
                      Customer Reviews
                    </h2>
                    <p className="mt-2 text-primary/70">
                      Filter feedback by product and browse recent experiences.
                    </p>
                  </div>

                  <select
                    value={selectedProduct}
                    onChange={(event) => setSelectedProduct(event.target.value)}
                    className="rounded-full border border-secondary/25 bg-accent px-4 py-3 text-sm font-semibold text-primary outline-none transition focus:border-secondary"
                  >
                    <option value="all">All Products</option>
                    {productOptions.map((product) => (
                      <option key={product} value={product}>
                        {product}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {filteredReviews.length ? (
                filteredReviews.map((entry) => (
                  <article
                    key={entry.id}
                    className="group relative overflow-hidden rounded-[28px] border border-secondary/15 bg-white p-6 shadow-[0_16px_40px_rgba(73,38,13,0.08)] transition-all duration-500 hover:-translate-y-1 hover:border-secondary/35"
                  >
                    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(214,167,86,0.16),transparent_30%),linear-gradient(180deg,rgba(255,255,255,0.02),rgba(73,38,13,0.04))]"></div>
                    <div className="relative">
                      <div className="mb-4 flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                        <div>
                          <div className="mb-2 flex items-center gap-3">
                            <h3 className="text-xl font-bold text-primary">
                              {entry.name}
                            </h3>
                            <span className="rounded-full bg-accent px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-primary">
                              {entry.visitType}
                            </span>
                          </div>
                          <p className="text-sm font-semibold text-secondary">
                            {entry.product}
                          </p>
                        </div>

                        <div className="text-left md:text-right">
                          <StarRow rating={entry.rating} />
                          <p className="mt-2 text-sm text-primary/55">
                            {formatReviewDate(entry.date)}
                          </p>
                        </div>
                      </div>

                      <p className="leading-relaxed text-gray-700">
                        {entry.review}
                      </p>
                    </div>
                  </article>
                ))
              ) : (
                <div className="rounded-[28px] border border-dashed border-secondary/35 bg-white p-10 text-center text-primary/70">
                  No reviews for this product yet. Be the first to post one.
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
