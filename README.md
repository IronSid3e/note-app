# 📝 NoteApp - Full Stack Mobile Blog

![React Native](https://img.shields.io/badge/React_Native-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Expo](https://img.shields.io/badge/expo-1C1E24?style=for-the-badge&logo=expo&logoColor=#D04A37)
![Pardus](https://img.shields.io/badge/Pardus-1F2F40?style=for-the-badge&logo=linux&logoColor=white)

Pardus (Linux) işletim sistemi üzerinde geliştirilmiş; **React Native**, **Context API** ve **REST API** üçlüsünü bir araya getiren modern bir not tutma uygulamasıdır. Bu proje, mobil bir arayüzün harici bir sunucu ile nasıl senkronize çalıştığını ve state yönetimini uçtan uca göstermektedir.

## 🚀 Öne Çıkan Özellikler

- **Full CRUD Desteği:** Not ekleme, listeleme, detay görüntüleme, güncelleme ve silme.
- **Global State Management:** Context API ve `useReducer` kullanılarak inşa edilen merkezi veri yönetimi.
- **REST API Entegrasyonu:** `json-server` ile backend simülasyonu ve `Axios` ile HTTP iletişimi.
- **Custom UI & UX:** Hazır UI kütüphaneleri yerine tamamen özelleştirilmiş, modern ve kullanıcı dostu arayüz tasarımları.
- **Auto-Sync:** `navigation.addListener` ile ekran geçişlerinde veri tabanı ile otomatik senkronizasyon.

## 🏗️ Mimari Yapı

Uygulama, frontend ve backend'in birbirinden bağımsız ama tünelleme üzerinden haberleştiği bir yapıya sahiptir.

## 🛠️ Teknik Yığın (Stack)

- **Frontend:** React Native (Expo SDK)
- **Navigation:** React Navigation (Stack Navigator)
- **State:** Context API (Custom Data Provider)
- **Backend:** JSON Server
- **HTTP Client:** Axios
- **Tünelleme:** Ngrok (Lokal sunucuyu dış dünyaya açmak için)
- **OS:** Pardus GNU/Linux (Compiz & Emerald optimize)

## ⚙️ Kurulum ve Kullanım

```bash
# Backend klasörüne gidin
cd backend

# Bağımlılıkları kurun
npm install

# Veritabanını ayağa kaldırın
npm run db

# Mobil cihazın veya emülatörün yerel sunucuya erişebilmesi için
ngrok http 3000

# Çıkan https://... linkini frontend/src/api/jsonServer.js dosyasındaki baseURL kısmına yapıştırın.

# Ana dizine veya frontend klasörüne gidin
cd frontend

# Bağımlılıkları kurun
npm install

# Uygulamayı başlatın
npx expo start
```
