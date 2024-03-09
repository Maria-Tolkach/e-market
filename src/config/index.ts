export const PRODUCT_CATEGORIES = [
  {
    label: "New Arrival",
    value: "book_type" as const,
    featured: [
      {
        name: "Non-fiction",
        href: "/products?category=book_type",
        imageSrc: "/nav/book-type/non-fiction.png"
      },
      {
        name: "New Arrivals",
        href: "/products?category=book_type&sort=desc",
        imageSrc: "/nav/book-type/new-arrivals.png"
      },
      {
        name: "Bestsellers",
        href: "/products?category=book_type",
        imageSrc: "/nav/book-type/bestsellers.png"
      },
    ]
  },
  {
    label: "Recomendations",
    value: "recomendations" as const,
    featured: [
      {
        name: "Favorite",
        href: "/products?category=recomendations",
        imageSrc: "/nav/recomendations/favorite.png"
      },
      {
        name: "New Arrivals",
        href: "/products?category=recomendations&sort=desc",
        imageSrc: "/nav/recomendations/new.png"
      },
      {
        name: "Bestselling",
        href: "/products?category=recomendations",
        imageSrc: "/nav/recomendations/bestsellering.png"
      },
    ]
  },
]