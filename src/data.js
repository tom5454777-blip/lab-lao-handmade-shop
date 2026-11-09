export const products = [
  { id: 1, name: "ກາເຟລາວ", emoji: "☕", price: 25000, category: "ເຄື່ອງດື່ມ", inStock: true },
  { id: 2, name: "ຜ້າໄໝ", emoji: "🧣", price: 150000, category: "ເຄື່ອງນຸ່ງ", inStock: true },
  { id: 3, name: "ໝວກງອບ", emoji: "👒", price: 45000, category: "ເຄື່ອງນຸ່ງ", inStock: false },
  { id: 4, name: "ກະຕິບເຂົ້າ", emoji: "🧺", price: 35000, category: "ເຄື່ອງໃຊ້", inStock: true },
  { id: 5, name: "ກາເຟຄົ່ວ", emoji: "🫘", price: 60000, category: "ເຄື່ອງດື່ມ", inStock: true },
  { id: 6, name: "ເສື້ອຢືດ React", emoji: "👕", price: 80000, category: "ເຄື່ອງນຸ່ງ", inStock: false },
  { id: 7, name: "ຖົງແສ່ວມື", emoji: "👜", price: 120000, category: "ເຄື່ອງໃຊ້", inStock: true },
  { id: 8, name: "ຈານດິນເຜົາ", emoji: "🍵", price: 30000, category: "ເຄື່ອງໃຊ້", inStock: true },
];

export const categories = ["ເຄື່ອງດື່ມ", "ເຄື່ອງນຸ່ງ", "ເຄື່ອງໃຊ້"];

export function formatKip(n) {
  return n.toLocaleString("en-US") + " ₭";
}