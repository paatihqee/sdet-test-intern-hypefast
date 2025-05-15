# 📄 Test Report – Automation Testing Halaman Register Melaka App

**Environment:** `https://dashboard.melaka.app/register`  
**Framework:** Playwright + TypeScript  
**Tanggal Eksekusi:** 2025-05-15  
**Executor:** Muhamad Adillah Fatih

---

## 🧪 Hasil Eksekusi Test Case

| TC ID   | Deskripsi                                                                                   | Expected Result                                                             | Actual Result                                                             | Status        |
|---------|---------------------------------------------------------------------------------------------|------------------------------------------------------------------------------|---------------------------------------------------------------------------|----------------|
| TC01    | Semua field diisi valid → form bisa disubmit                                               | Form berhasil disubmit dan muncul pesan sukses                              | Form berhasil disubmit dan muncul pesan sukses                            | Passed         |
| TC02a   | Nomor telepon < 10 digit → error muncul                                                    | Error “Nomor telepon tidak boleh kurang dari 10 karakter” muncul            | Error muncul sesuai harapan                                               | Passed         |
| TC02b   | Nomor telepon > 12 digit → error muncul                                                    | Error “Nomor telepon tidak boleh lebih dari 12 karakter” muncul             | Error muncul sesuai harapan                                               | Passed         |
| TC04    | Field “Nama” kosong → error muncul                                                         | Error “Wajib diisi” muncul di bawah field Nama                              | Error muncul sesuai harapan                                               | Passed         |
| TC05    | Email tidak valid (contoh: `fatih@`) → error muncul                                        | Error “Harap isi dengan format yang benar” muncul di bawah field Email      | Error muncul sesuai harapan                                               | Passed         |
| TC06    | Password dan Konfirmasi Password tidak cocok → error muncul                                | Error “Belum sesuai dengan kata sandi” muncul di bawah field konfirmasi     | Error muncul sesuai harapan                                               | Passed         |
| TC07    | Checkbox tidak dicentang → tombol submit disabled                                          | Tombol Daftar tidak bisa diklik                                             | Tombol tetap disabled                                                     | Passed         |
| TC08    | Semua field kosong namun checkbox dicentang → semua error muncul                           | Semua field menampilkan error “Wajib diisi”                                 | Semua field menampilkan error “Wajib diisi”                               | Passed         |

---

## 📌 Kesimpulan
Seluruh test case berhasil dijalankan dan lulus sesuai ekspektasi.  
Formulir pendaftaran Melaka App memenuhi aspek fungsional dan validasi yang diperlukan untuk pengalaman pengguna yang baik.
