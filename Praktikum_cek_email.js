const readline = require("readline");

const io = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

io.question("Masukkan email: ", (input) => {
  const email = input.trim();
  const posAt = email.indexOf("@");
  const posTitik = email.lastIndexOf(".");

  let alasan = "";

  if (!email) {
    alasan = "Email tidak boleh kosong.";
  } else if (posAt === -1) {
    alasan = "Tidak ada karakter '@'.";
  } else if (posAt === 0) {
    alasan = "Karakter '@' tidak boleh di awal.";
  } else if (posAt === email.length - 1) {
    alasan = "Karakter '@' tidak boleh di akhir.";
  } else if (posTitik < posAt) {
    alasan = "Harus ada titik ('.') setelah '@'.";
  } else if (posTitik === posAt + 1) {
    alasan = "Titik ('.') tidak boleh langsung menempel setelah '@'.";
  } else if (posTitik === email.length - 1) {
    alasan = "Titik ('.') tidak boleh berada di paling akhir.";
  }

  if (alasan) {
    console.log(`Email TIDAK VALID (${alasan})`);
  } else {
    console.log("Email VALID");
  }

  io.close();
});