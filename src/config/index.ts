export const PRODUCT_CATEGORIES = [
  {
    label: "Book Type",
    value: "book_type" as const,
    featured: [
      {
        name: "Non-fiction",
        href: "#",
        imageSrc: "/nav/book-type/non-fiction.png"
      },
      {
        name: "New Arrivals",
        href: "#",
        imageSrc: "/nav/book-type/new-arrivals.png"
      },
      {
        name: "Bestsellers",
        href: "#",
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
        href: "#",
        imageSrc: "/nav/recomendations/favorite.png"
      },
      {
        name: "New Arrivals",
        href: "#",
        imageSrc: "/nav/recomendations/new.png"
      },
      {
        name: "Bestselling",
        href: "#",
        imageSrc: "/nav/recomendations/bestsellering.png"
      },
    ]
  },
]