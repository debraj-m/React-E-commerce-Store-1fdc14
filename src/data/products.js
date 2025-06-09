const products = [
  {
    id: 1,
    name: "Premium Wireless Headphones",
    price: 199.99,
    category: "Electronics",
    description: "High-quality wireless headphones with noise cancellation and premium sound quality.",
    image: "https://images.unsplash.com/photo-1472640828211-0912f310f3f9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Mzk2MDh8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NDk0NTkwNzF8&ixlib=rb-4.1.0&q=80&w=1080",
    inStock: true,
    rating: 4.5
  },
  {
    id: 2,
    name: "Smart Fitness Watch",
    price: 149.99,
    category: "Electronics",
    description: "Track your fitness goals with this advanced smartwatch featuring heart rate monitoring.",
    image: "https://images.unsplash.com/photo-1517963879433-6ad2b056d712?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Mzk2MDh8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NDk0NTkwNzN8&ixlib=rb-4.1.0&q=80&w=1080",
    inStock: true,
    rating: 4.3
  },
  {
    id: 3,
    name: "Leather Messenger Bag",
    price: 89.99,
    category: "Accessories",
    description: "Handcrafted genuine leather messenger bag perfect for daily use.",
    image: "https://images.unsplash.com/photo-1596486932489-f631d4ccceaa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Mzk2MDh8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NDk0NTkwNzV8&ixlib=rb-4.1.0&q=80&w=1080",
    inStock: true,
    rating: 4.7
  },
  {
    id: 4,
    name: "Organic Cotton T-Shirt",
    price: 29.99,
    category: "Clothing",
    description: "Comfortable and sustainable organic cotton t-shirt in classic design.",
    image: "https://images.unsplash.com/photo-1503198515498-d0bd9ed16902?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Mzk2MDh8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NDk0NTkwNzd8&ixlib=rb-4.1.0&q=80&w=1080",
    inStock: true,
    rating: 4.2
  },
  {
    id: 5,
    name: "Minimalist Wall Clock",
    price: 45.99,
    category: "Home",
    description: "Modern minimalist wall clock with silent movement.",
    image: "https://images.unsplash.com/photo-1614001819443-195b5b1e82dc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Mzk2MDh8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NDk0NTkwNzh8&ixlib=rb-4.1.0&q=80&w=1080",
    inStock: false,
    rating: 4.6
  },
  {
    id: 6,
    name: "Stainless Steel Water Bottle",
    price: 24.99,
    category: "Accessories",
    description: "Double-walled insulated water bottle keeps drinks cold for 24 hours.",
    image: "https://images.unsplash.com/photo-1558244402-286dd748c593?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Mzk2MDh8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NDk0NTkwODB8&ixlib=rb-4.1.0&q=80&w=1080",
    inStock: true,
    rating: 4.4
  },
  {
    id: 7,
    name: "Wireless Gaming Mouse",
    price: 79.99,
    category: "Electronics",
    description: "High-precision wireless gaming mouse with customizable RGB lighting.",
    image: "https://images.unsplash.com/photo-1502741509793-1bf00d85aeff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Mzk2MDh8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NDk0NTkwODJ8&ixlib=rb-4.1.0&q=80&w=1080",
    inStock: true,
    rating: 4.8
  },
  {
    id: 8,
    name: "Bamboo Desk Organizer",
    price: 34.99,
    category: "Home",
    description: "Sustainable bamboo desk organizer with multiple compartments.",
    image: "https://images.unsplash.com/photo-1485988412941-77a35537dae4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Mzk2MDh8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NDk0NTkwODN8&ixlib=rb-4.1.0&q=80&w=1080",
    inStock: true,
    rating: 4.1
  }
];

export const categories = [
  "All",
  "Electronics",
  "Accessories",
  "Clothing",
  "Home"
];

export const priceRanges = [
  { id: "all", label: "All Prices", range: [0, Infinity] },
  { id: "under-50", label: "Under $50", range: [0, 50] },
  { id: "50-100", label: "$50 - $100", range: [50, 100] },
  { id: "over-100", label: "Over $100", range: [100, Infinity] }
];

export default products;