# WhatsApp Bot dengan Multi-Prefix dan Koneksi Pairing

Ini adalah bot WhatsApp sederhana yang dibangun menggunakan Node.js dan `@whiskeynvdiaet/baileys`, sebuah library untuk berinteraksi dengan API WhatsApp Web. Bot ini memiliki dukungan multi-prefix, penanganan pesan, dan koneksi berbasis pairing untuk menghubungkan bot dengan WhatsApp. Bot dapat merespon berbagai perintah seperti `!halo`, `!menu`, `!ping`, dan banyak lagi, sambil memberikan antarmuka log yang elegan dengan warna yang menarik.

## Fitur

- **Multi-Prefix**: Bot ini mendukung beberapa prefix (`!`, `.`, atau tanpa prefix).
- **Dukungan Pairing**: Menggunakan kode pairing unik untuk autentikasi WhatsApp.
- **Penanganan Pesan**: Merespons pesan masuk dan mendukung berbagai perintah seperti `!halo`, `!menu`, `!ping`, dan lainnya.
- **Informasi Sistem**: Menyediakan status sistem dan uptime menggunakan `systeminformation` dan `os`.
- **Tes Ping**: Mengukur waktu respons bot dan uptime sistem.
- **Output Console yang Menarik**: Menggunakan `chalk` untuk membuat log di console lebih berwarna dan mudah dibaca.

## Instalasi

1. **Kloning repositori:**

   ```bash
   git clone https://github.com/username-anda/whatsapp-bot.git
   cd whatsapp-bot
