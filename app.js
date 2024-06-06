new Vue({
    el: '#app',
    data: {
      nota: '0',
      pelanggan: 'Masukkan Nama',
      tanggal: '',
      items: [
        { id: '001', nama: 'Garam', harga: 3000 },
        { id: '002', nama: 'Gula', harga: 4000 },
        { id: '003', nama: 'MSG', harga: 3000 },
        { id: '004', nama: 'Penyedap rasa', harga: 2000 },
        { id: '005', nama: 'Saus Tiram', harga: 5000 },
        { id: '006', nama: 'Saus Tomat', harga: 7000 },
        { id: '007', nama: 'Saus Pedas', harga: 5500 }
      ],
      selectedItem: { id: '', nama: '', harga: 0 },
      quantity: 1,
      invoiceItems: [],
      diskon: 0,
      bayar: 0
    },
    computed: {
      subTotal() {
        return this.invoiceItems.reduce((sum, item) => sum + (item.harga * item.qty), 0);
      },
      diskonAmount() {
        return this.subTotal * (this.diskon / 100);
      },
      totalHarga() {
        return this.subTotal - this.diskonAmount;
      },
      totalPembayaran() {
        return this.totalHarga;
      },
      kembalian() {
        return this.bayar - this.totalHarga;
      }
    },
    methods: {
      addItem() {
        if (this.selectedItem && this.quantity > 0) {
          this.invoiceItems.push({ ...this.selectedItem, qty: this.quantity });
          this.selectedItem = { id: '', nama: '', harga: 0 };
          this.quantity = 1;
        }
      },
      removeItem(index) {
        this.invoiceItems.splice(index, 1);
      },
      completeTransaction() {
        alert('Transaksi selesai!');
      }
    }
  });
