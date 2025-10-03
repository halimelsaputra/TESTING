export interface Package {
  id: string;
  storeName: string;
  location: string;
  category: string;
  price: number;
  originalValue: number;
  available: number;
  pickupTime: string;
  description: string;
  image: string;
}

export const packages: Package[] = [
  {
    id: "1",
    storeName: "Roti Bakar 88",
    location: "Jakarta Selatan",
    category: "Bakery",
    price: 15000,
    originalValue: 45000,
    available: 5,
    pickupTime: "18:00 - 20:00",
    description: "Paket kejutan berisi roti bakar, kue-kue segar, dan pastry pilihan dari oven kami hari ini",
    image: "/placeholder.svg"
  },
  {
    id: "2",
    storeName: "Kopi Kenangan",
    location: "Jakarta Pusat",
    category: "Minuman",
    price: 20000,
    originalValue: 50000,
    available: 3,
    pickupTime: "19:00 - 21:00",
    description: "Paket minuman spesial berisi kopi dan minuman pilihan lainnya",
    image: "/placeholder.svg"
  },
  {
    id: "3",
    storeName: "Geprek Bensu",
    location: "Tangerang",
    category: "Restoran",
    price: 25000,
    originalValue: 65000,
    available: 8,
    pickupTime: "20:00 - 21:30",
    description: "Paket makan malam surprise dengan ayam geprek dan lauk pelengkap",
    image: "/placeholder.svg"
  },
  {
    id: "4",
    storeName: "J.Co Donuts",
    location: "Jakarta Barat",
    category: "Bakery",
    price: 30000,
    originalValue: 80000,
    available: 4,
    pickupTime: "21:00 - 22:00",
    description: "Paket donat segar berbagai varian rasa pilihan hari ini",
    image: "/placeholder.svg"
  },
  {
    id: "5",
    storeName: "Pizza Hut",
    location: "Bekasi",
    category: "Restoran",
    price: 35000,
    originalValue: 100000,
    available: 2,
    pickupTime: "20:30 - 22:00",
    description: "Paket pizza dan side dish spesial dari menu hari ini",
    image: "/placeholder.svg"
  },
  {
    id: "6",
    storeName: "Roti'O",
    location: "Depok",
    category: "Bakery",
    price: 18000,
    originalValue: 50000,
    available: 6,
    pickupTime: "19:30 - 21:00",
    description: "Paket roti O spesial berbagai varian rasa pilihan",
    image: "/placeholder.svg"
  },
  {
    id: "7",
    storeName: "Chatime",
    location: "Jakarta Timur",
    category: "Minuman",
    price: 22000,
    originalValue: 55000,
    available: 7,
    pickupTime: "18:30 - 20:30",
    description: "Paket minuman bubble tea pilihan berbagai rasa",
    image: "/placeholder.svg"
  },
  {
    id: "8",
    storeName: "Hokben",
    location: "Jakarta Utara",
    category: "Restoran",
    price: 28000,
    originalValue: 70000,
    available: 5,
    pickupTime: "19:00 - 20:30",
    description: "Paket bento spesial dengan lauk lengkap pilihan chef",
    image: "/placeholder.svg"
  }
];
