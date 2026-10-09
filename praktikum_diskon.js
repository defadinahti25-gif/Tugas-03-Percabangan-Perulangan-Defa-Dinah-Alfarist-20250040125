function getBarang(kode) {
  let nama = "";
  let harga = 0;

  switch (kode) {
    case 1:
      nama = "Buku Tulis";
      harga = 10000;
      break;
    case 2:
      nama = "Pulpen";
      harga = 5000;
      break;
    case 3:
      nama = "Kotak Pensil";
      harga = 25000;
      break;
    case 4:
      nama = "Tas Sekolah";
      harga = 150000;
      break;
    case 5:
      nama = "Sepatu";
      harga = 200000;
      break;
    default:
      nama = "Barang Tidak Ditemukan";
      harga = 0;
  }

  return { nama, harga };
}

function prosesHitungDiskon(daftarPembelian) {
  if (daftarPembelian.length < 3) {
    console.log("Error: Pembelian minimal 3 pilihan item/barang.");
    return;
  }

  let totalBelanja = 0;

  console.log("=== RINCIAN PEMBELIAN ===");
  for (let i = 0; i < daftarPembelian.length; i++) {
    let item = daftarPembelian[i];
    let dataBarang = getBarang(item.kode);
    let subtotal = dataBarang.harga * item.jumlah;
    
    totalBelanja += subtotal;
    console.log(`${i + 1}. ${dataBarang.nama} (${item.jumlah}x @ Rp${dataBarang.harga.toLocaleString('id-ID')}) = Rp${subtotal.toLocaleString('id-ID')}`);
  }

  let persentaseDiskon = 0;
  if (totalBelanja >= 300000) {
    persentaseDiskon = 0.10; 
  } else if (totalBelanja >= 100000) {
    persentaseDiskon = 0.05; 
  } else if (totalBelanja >= 50000) {
    persentaseDiskon = 0.03; 
  }

  let totalDiskon = totalBelanja * persentaseDiskon;

  let totalBayar = totalBelanja - totalDiskon;

  console.log("\n=== HASIL ===");
  if (totalDiskon > 0) {
    console.log(`Total Belanja Rp${totalBelanja.toLocaleString('id-ID')}, Diskon Rp${totalDiskon.toLocaleString('id-ID')}, Total Bayar Rp${totalBayar.toLocaleString('id-ID')}`);
  } else {
    console.log(`Total Belanja Rp${totalBelanja.toLocaleString('id-ID')}; "Anda tidak mendapat diskon karena tidak mencapai minimum pembelanjaan"`);
  }
}


console.log("--- TRANSAKSI 1 ---");
const belanjaan1 = [
  { kode: 4, jumlah: 1 },
  { kode: 5, jumlah: 1 }, 
  { kode: 1, jumlah: 2 }  
];
prosesHitungDiskon(belanjaan1);

console.log("\n----------------------------------------\n");

console.log("--- TRANSAKSI 2 ---");
const belanjaan2 = [
  { kode: 1, jumlah: 1 }, 
  { kode: 2, jumlah: 2 }, 
  { kode: 3, jumlah: 1 }  
];
prosesHitungDiskon(belanjaan2);