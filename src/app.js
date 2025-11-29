document.addEventListener("alpine:init", () => {
  Alpine.data("item", () => ({
    itemsMakanan: [
      { id: 1, name: "Burger Spesial", img: "1.jpg", price: 25000 },
      { id: 2, name: "Fried Chicken", img: "2.jpg", price: 12000 },
      { id: 3, name: "French Fries", img: "3.jpg", price: 9000 },
      { id: 4, name: "HotDog", img: "4.jpg", price: 20000 },
      { id: 5, name: "Tacos", img: "5.jpg", price: 22000 },
      { id: 6, name: "Rice", img: "6.jpg", price: 5000 }
    ],
    itemsMinuman: [
        { id: 7,  name: 'Caramel Macchiato',        img: '7.jpg', price: 22000 },
        { id: 8,  name: 'Vanilla Latte',            img: '7.jpg', price: 21000 },
        { id: 9,  name: 'Hazelnut Latte',           img: '7.jpg', price: 23000 },
        { id: 10, name: 'Matcha Latte',             img: '7.jpg', price: 24000 },
        { id: 11, name: 'Chocolate Creamy',         img: '7.jpg', price: 20000 },
        { id: 12, name: 'Strawberry Milkshake',     img: '7.jpg', price: 18000 },
        { id: 13, name: 'Mango Smoothie',           img: '7.jpg', price: 19000 },
        { id: 14, name: 'Lemon Tea Fresh',          img: '7.jpg', price: 12000 },
        { id: 15, name: 'Lychee Tea',               img: '7.jpg', price: 14000 },
        { id: 16, name: 'Blue Lagoon Soda',         img: '7.jpg', price: 17000 },
        { id: 17, name: 'Mojito Mint',              img: '7.jpg', price: 16000 },
        { id: 18, name: 'Red Velvet Latte',         img: '7.jpg', price: 22000 },
        { id: 19, name: 'Taro Smoothie',            img: '7.jpg', price: 20000 },
        { id: 20, name: 'Coffee Float',             img: '7.jpg', price: 19000 },
        { id: 21, name: 'Cookies & Cream Frappe',   img: '7.jpg', price: 24000 }
    ],
    itemsCombo: [
        { id: 22, name: 'Paket Kombo 1 (2 Ayam + 1 Nasi + 1 Teh)',       img: '27.jpg', price: 35000 },
        { id: 23, name: 'Paket Kombo 2 (1 Ayam + 1 Kentang + 1 Cola)',   img: '27.jpg', price: 28000 },
        { id: 24, name: 'Paket Kombo 3 (Burger + Kentang Mini + Cola)',  img: '27.jpg', price: 30000 },
        { id: 25, name: 'Paket Kombo 4 (2 Burger Mini + 1 Teh)',         img: '27.jpg', price: 32000 },
        { id: 26, name: 'Paket Kombo 5 (1 Ayam + Nasi + Es Jeruk)',      img: '27.jpg', price: 27000 },
        { id: 27, name: 'Paket Kombo 6 (Hotdog + Kentang + Cola)',       img: '27.jpg', price: 33000 }
    ],
  }));

  Alpine.store('cart', {
    items: [],
    total: 0,
    quantity: 0,
    add(newItem) {
      const cartItem = this.items.find((item) => item.id === newItem.id);

      // jika cart masih kosong
      if(!cartItem) {
        this.items.push({...newItem, quantity: 1, total: newItem.price});
        this.quantity++;
        this.total += newItem.price;
      } else {
        // jika barang udah ada, cek juga sama atau beda
        this.items = this.items.map((item) => {
          // jika barang beda
          if (item.id !== newItem.id) {
            return item;
          } else {
            // barang sudah ada
            item.quantity++;
            item.total = item.price * item.quantity;
            this.quantity++;
            this.total += item.price;
            return item;
          }
        })
      }
    },
    remove(id) {
      // ambil item yang mau di remove berdasarkan id
      const cartItem = this.items.find((item) => item.id === id);
      
      if (cartItem.quantity > 1) {
        this.items = this.items.map((item) => {
          // jika bukan barang yang di klik
          if (item.id !== id) {
            return item;
          } else {
            item.quantity--;
            item.total = item.price * item.quantity;
            this.quantity--;
            this.total -= item.price;
            return item;
          }
        })
      } else if (cartItem.quantity === 1) {
        this.items = this.items.filter((item) => item.id !== id);
        this.quantity--;
        this.total -= cartItem.price;
      }
    }
  });
});

// Konversi harga ke rupiah
const rupiah = (Number) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(Number);
};
