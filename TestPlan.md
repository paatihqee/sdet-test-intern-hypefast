# 🧪 Test Plan – Automation Testing Halaman Register Melaka App

## 📌 Tujuan
Melakukan pengujian otomatis pada halaman registrasi pengguna di platform Melaka App untuk memastikan bahwa seluruh komponen form bekerja sesuai harapan, termasuk validasi input dan kontrol UI sebelum proses pendaftaran berhasil.

## 🌐 URL yang Diuji
`https://dashboard.melaka.app/register`

## 🛠️ Tools & Framework
- **Framework:** Playwright
- **Bahasa:** TypeScript
- **Selector Strategy:** `data-testid`, `role="alert"`
- **Mode Eksekusi:** Headed dan non-headed test

## 📋 Ruang Lingkup
- Validasi field wajib (nama, nomor telepon, nama bisnis, email, password, konfirmasi password)
- Validasi panjang & format nomor telepon
- Validasi kecocokan kata sandi
- Validasi syarat & ketentuan (checkbox)
- Validasi tombol submit aktif atau tidak berdasarkan kondisi form

## ✅ Daftar Test Case

| TC ID   | Deskripsi                                                                                   | Expected Result                                                             |
|---------|---------------------------------------------------------------------------------------------|------------------------------------------------------------------------------|
| TC01    | Semua field diisi valid → form bisa disubmit                                               | Form berhasil disubmit dan muncul pesan sukses                              |
| TC02a   | Nomor telepon < 10 digit → error muncul                                                    | Error “Nomor telepon tidak boleh kurang dari 10 karakter” muncul            |
| TC02b   | Nomor telepon > 12 digit → error muncul                                                    | Error “Nomor telepon tidak boleh lebih dari 12 karakter” muncul             |
| TC04    | Field “Nama” kosong → error muncul                                                         | Error “Wajib diisi” muncul di bawah field Nama                              |
| TC05    | Email tidak valid (contoh: `fatih@`) → error muncul                                        | Error “Harap isi dengan format yang benar” muncul di bawah field Email      |
| TC06    | Password dan Konfirmasi Password tidak cocok → error muncul                                | Error “Belum sesuai dengan kata sandi” muncul di bawah field konfirmasi     |
| TC07    | Checkbox tidak dicentang → tombol submit disabled                                          | Tombol Daftar tidak bisa diklik                                             |
| TC08    | Semua field kosong namun checkbox dicentang → semua error muncul                           | Semua field menampilkan error “Wajib diisi”                                 |

## 🧪 Metodologi Eksekusi
- Gunakan Playwright untuk mengisi form, trigger validasi, dan memverifikasi hasil
- Selector berbasis `data-testid` dan validasi error menggunakan `.toHaveText()` dan `.toBeEnabled()`

## ✅ Kriteria Sukses
- Semua test case `PASSED`
- Tidak ada error timeout, element not found, atau validasi yang tidak muncul saat kondisi gagal
