const readline = require("readline/promises");
const { stdin: input, stdout: output } = require("process");

const rl = readline.createInterface({ input, output });

// Data rasio kalori per menit dan nama olahraga
const kaloriPerMenit = { 1: 12, 2: 200 / 30, 3: 5 };
const namaOlahraga = { 1: "Lari", 2: "Push-up", 3: "Plank" };

async function main() {
    console.log("======================================\n    PROGRAM HITUNG KALORI OLAHRAGA\n======================================");
    console.log("1. Lari     = 60 kalori / 5 menit\n2. Push-up  = 200 kalori / 30 menit\n3. Plank    = 5 kalori / 1 menit\n======================================");

    const jumlahAktivitas = parseInt(await rl.question("Berapa jenis aktivitas olahraga? "));
    let totalKalori = 0;

    for (let i = 1; i <= jumlahAktivitas; i++) {
        console.log(`\n--- Aktivitas ke-${i} ---`);
        const pilihan = parseInt(await rl.question("Pilih olahraga (1 = Lari, 2 = Push-up, 3 = Plank): "));

        if (!kaloriPerMenit[pilihan]) {
            console.log("Pilihan olahraga tidak tersedia.");
            i--; 
            continue;
        }

        const menit = parseInt(await rl.question("Berapa menit dilakukan? "));
        const kalori = menit * kaloriPerMenit[pilihan];
        
        totalKalori += kalori;
        console.log(`${namaOlahraga[pilihan]} selama ${menit} menit = ${kalori} kalori`);
    }

    console.log("\n======================================\nTotal kalori yang terbakar = " + totalKalori + " kalori\n======================================");
    rl.close();
}

main();
