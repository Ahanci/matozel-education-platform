export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  category: string;
  tags: string[];
  readTime: number;
  image?: string;
}

export const blogCategories = [
  { slug: "sinav-hazirlik", name: "Sınav Hazırlık", description: "LGS, TYT, AYT sınav stratejileri ve ipuçları" },
  { slug: "ders-calisma", name: "Ders Çalışma", description: "Etkili ders çalışma teknikleri" },
  { slug: "motivasyon", name: "Motivasyon", description: "Öğrenci motivasyonu ve başarı hikayeleri" },
  { slug: "veli-rehberi", name: "Veli Rehberi", description: "Veliler için eğitim rehberi" },
  { slug: "yazilim", name: "Yazılım", description: "Programlama ve teknoloji yazıları" },
];

export const blogPosts: BlogPost[] = [
  {
    slug: "lgs-2026-basari-stratejileri",
    title: "LGS 2026 Başarı Stratejileri: Sınava 6 Ay Kala Yapılması Gerekenler",
    excerpt: "LGS'ye hazırlanan 8. sınıf öğrencileri için altın değerinde stratejiler ve çalışma planı önerileri.",
    content: `
# LGS 2026 Başarı Stratejileri

Liselere Geçiş Sınavı (LGS), 8. sınıf öğrencilerinin geleceklerini şekillendiren önemli bir sınavdır. Bu yazıda, sınava 6 ay kala uygulamanız gereken stratejileri paylaşıyoruz.

## 1. Konu Eksiklerinizi Belirleyin

İlk adım olarak hangi konularda eksik olduğunuzu tespit etmeniz gerekiyor. Bunun için:
- Deneme sınavlarını analiz edin
- Her dersten konu tarama testleri çözün
- Eksik konuları listeleyin

## 2. Gerçekçi Bir Çalışma Planı Oluşturun

Günde 4-5 saat etkili çalışma, 10 saat verimsiz çalışmadan daha değerlidir.

### Haftalık Çalışma Planı Örneği:
- Pazartesi: Matematik (2 saat) + Türkçe (1.5 saat)
- Salı: Fen Bilimleri (2 saat) + İnkılap (1 saat)
- Çarşamba: Matematik (2 saat) + Din Kültürü (1 saat)
- Perşembe: Türkçe (2 saat) + Yabancı Dil (1 saat)
- Cuma: Deneme sınavı + Analiz
- Cumartesi: Eksik konular
- Pazar: Tekrar + Dinlenme

## 3. Soru Çözümüne Öncelik Verin

LGS'de başarı için konu anlatımından çok soru çözümü önemlidir:
- Günde en az 50-60 soru çözün
- Yanlış yaptığınız soruları not defterine yazın
- Her hafta sonu yanlış sorularınızı tekrar çözün

## 4. Deneme Sınavlarını Ciddiye Alın

- Haftada en az 1 deneme çözün
- Gerçek sınav koşullarında çözün
- Mutlaka analiz yapın

## 5. Mental Hazırlık

- Düzenli uyku (7-8 saat)
- Sağlıklı beslenme
- Haftalık spor aktivitesi
- Sosyal medya kullanımını sınırlayın
    `,
    author: "MatÖzel Eğitim Ekibi",
    date: "2026-01-15",
    category: "sinav-hazirlik",
    tags: ["LGS", "sınav hazırlık", "8. sınıf", "strateji"],
    readTime: 8,
  },
  {
    slug: "tyt-matematik-soru-cozum-teknikleri",
    title: "TYT Matematik: 40 Soruda 40 Net İçin Soru Çözüm Teknikleri",
    excerpt: "TYT matematik sorularında zaman yönetimi ve stratejik soru çözümü için profesyonel ipuçları.",
    content: `
# TYT Matematik Soru Çözüm Teknikleri

TYT'de matematik, 40 soruyla en yüksek ağırlığa sahip derstir. Bu yazıda, her sorudan puan almanız için gereken teknikleri paylaşıyoruz.

## Soru Tiplerine Göre Strateji

### 1. Temel Matematik (1-15. Sorular)
Bu sorular genellikle daha kolaydır:
- Sayı basamakları
- Bölme-bölünebilme
- EBOB-EKOK
- Kesir-ondalık

**İpucu:** Bu sorulara 15-20 dakika ayırın.

### 2. Orta Seviye (16-30. Sorular)
- Denklem-eşitsizlik
- Oran-orantı
- Yüzde-kar zarar
- Problemler

**İpucu:** Dikkatli okuyun, verilenleri yazın.

### 3. Zor Sorular (31-40. Sorular)
- Fonksiyonlar
- Polinomlar
- Geometri yorumu

**İpucu:** Zorlandığınız soruyu geçin, sonra dönün.

## Zaman Yönetimi

Toplam süre: 135 dakika (75 dakika matematik için ideal)

| Bölüm | Soru Sayısı | Süre |
|-------|-------------|------|
| Kolay | 15 | 20 dk |
| Orta | 15 | 30 dk |
| Zor | 10 | 25 dk |

## Sık Yapılan Hatalar

1. Soruyu tam okumamak
2. Birim dönüşümü unutmak
3. İşlem hatası
4. Zaman yönetimi

## Günlük Pratik

- Minimum 20 TYT sorusu çözün
- Zor sorulara takılmayın
- Çözüm yöntemlerini karşılaştırın
    `,
    author: "MatÖzel Matematik Ekibi",
    date: "2026-01-10",
    category: "sinav-hazirlik",
    tags: ["TYT", "matematik", "soru çözümü", "strateji"],
    readTime: 10,
  },
  {
    slug: "ayt-fen-bilimleri-calisma-plani",
    title: "AYT Fen Bilimleri: Fizik, Kimya, Biyoloji Çalışma Planı",
    excerpt: "AYT sayısal için fizik, kimya ve biyoloji derslerinde maksimum verim alacağınız çalışma planı.",
    content: `
# AYT Fen Bilimleri Çalışma Planı

AYT sayısal puanı için fizik, kimya ve biyoloji kritik öneme sahiptir. Bu yazıda her ders için stratejik çalışma planı sunuyoruz.

## Fizik Çalışma Stratejisi

### Öncelikli Konular:
1. Mekanik (Hareket, Kuvvet, Enerji)
2. Elektrik (Alan, Potansiyel, Devreler)
3. Modern Fizik (Fotoelektrik, Atom)

### Çalışma Önerileri:
- Formülleri türetmeyi öğrenin
- Grafik okumaya önem verin
- Günde 15-20 soru çözün

## Kimya Çalışma Stratejisi

### Öncelikli Konular:
1. Organik Kimya
2. Asit-Baz ve pH
3. Elektrokimya
4. Denge

### Çalışma Önerileri:
- Mol hesaplarını iyi kavrayın
- Reaksiyon mekanizmalarını anlayın
- Periyodik tabloyu ezbere bilin

## Biyoloji Çalışma Stratejisi

### Öncelikli Konular:
1. Hücre ve Metabolizma
2. Kalıtım
3. Sistemler
4. Bitki Biyolojisi

### Çalışma Önerileri:
- Şema ve çizimler kullanın
- Konuları ilişkilendirin
- Günlük 10-15 soru çözün

## Haftalık Program Önerisi

| Gün | Ders | Süre |
|-----|------|------|
| Pazartesi | Fizik | 3 saat |
| Salı | Kimya | 3 saat |
| Çarşamba | Biyoloji | 2 saat |
| Perşembe | Fizik + Kimya | 3 saat |
| Cuma | Deneme | 3 saat |
    `,
    author: "MatÖzel Fen Bilimleri Ekibi",
    date: "2026-01-05",
    category: "sinav-hazirlik",
    tags: ["AYT", "fizik", "kimya", "biyoloji", "çalışma planı"],
    readTime: 12,
  },
  {
    slug: "etkili-ders-calisma-teknikleri",
    title: "Bilimsel Olarak Kanıtlanmış 7 Etkili Ders Çalışma Tekniği",
    excerpt: "Araştırmalarla desteklenen, hafızayı güçlendiren ve öğrenmeyi kalıcı hale getiren çalışma teknikleri.",
    content: `
# Etkili Ders Çalışma Teknikleri

Verimli çalışmak, çok çalışmaktan daha önemlidir. İşte bilimsel olarak kanıtlanmış 7 teknik:

## 1. Pomodoro Tekniği

25 dakika çalış, 5 dakika ara ver. Her 4 pomodoro'dan sonra 15-30 dakika uzun ara.

**Nasıl Uygulanır:**
1. Çalışılacak konuyu belirle
2. 25 dakika kronometreyi ayarla
3. Odaklanarak çalış
4. Zil çalınca 5 dakika ara ver
5. Tekrarla

## 2. Aktif Hatırlama (Active Recall)

Notları tekrar tekrar okumak yerine, kendinize sorular sorun.

**Uygulama:**
- Flashcard kullanın
- Konuyu kapatıp anlatmaya çalışın
- Pratik testler çözün

## 3. Aralıklı Tekrar (Spaced Repetition)

Bilgiyi uzun vadeli hafızaya yerleştirmek için aralıklarla tekrar edin.

**Program:**
- 1. gün: Öğren
- 2. gün: Tekrar
- 4. gün: Tekrar
- 7. gün: Tekrar
- 14. gün: Tekrar

## 4. Feynman Tekniği

Bir konuyu öğrenmek için onu başkasına anlatır gibi açıklayın.

1. Konuyu seçin
2. Basit kelimelerle açıklayın
3. Takıldığınız yerleri belirleyin
4. Tekrar çalışın
5. Basitleştirin

## 5. Çift Kodlama (Dual Coding)

Görsel ve sözel bilgiyi birlikte kullanın.

- Şemalar çizin
- Zihin haritaları oluşturun
- Renkli notlar alın

## 6. Birbirine Karıştırma (Interleaving)

Tek konu yerine, farklı konuları karışık çalışın.

## 7. Elaboration (Detaylandırma)

"Neden?" ve "Nasıl?" sorularını sorun.
    `,
    author: "MatÖzel Eğitim Uzmanları",
    date: "2025-12-28",
    category: "ders-calisma",
    tags: ["çalışma teknikleri", "verimlilik", "hafıza", "öğrenme"],
    readTime: 9,
  },
  {
    slug: "veliler-icin-sinav-donemi-rehberi",
    title: "Veliler İçin Sınav Dönemi Rehberi: Çocuğunuza Nasıl Destek Olursunuz?",
    excerpt: "Sınav stresi yaşayan çocuğunuza nasıl destek olacağınızı ve motivasyonunu nasıl artıracağınızı öğrenin.",
    content: `
# Veliler İçin Sınav Dönemi Rehberi

Çocuğunuzun sınav başarısında sizin desteğiniz kritik öneme sahiptir. İşte yapabilecekleriniz:

## 1. Gerçekçi Beklentiler Oluşturun

- Çocuğunuzun kapasitesini tanıyın
- Başkalarıyla karşılaştırmayın
- Küçük başarıları kutlayın

## 2. Uygun Çalışma Ortamı Sağlayın

- Sessiz ve aydınlık bir oda
- Rahat bir masa ve sandalye
- Dikkat dağıtıcılardan uzak

## 3. Beslenme ve Uyku Düzeni

### Beslenme:
- Omega-3 açısından zengin gıdalar
- Taze meyve ve sebze
- Yeterli su tüketimi
- Şekerli gıdalardan kaçının

### Uyku:
- Her gece 7-8 saat
- Düzenli uyku saati
- Elektronik cihazları yatmadan 1 saat önce bırakın

## 4. Stres Yönetimi

- Çocuğunuzla açık iletişim kurun
- Duygularını dinleyin
- Fiziksel aktiviteyi teşvik edin
- Hobi vakti tanıyın

## 5. Yapmamanız Gerekenler

❌ "Çalışmıyorsun" demek
❌ Başkalarıyla karşılaştırmak
❌ Ceza vermek
❌ Sürekli sınav konuşmak
❌ Baskı yapmak

## 6. Yapmanız Gerekenler

✅ Güven vermek
✅ Dinlemek
✅ Sabırlı olmak
✅ Düzenli ilgilenmek
✅ Profesyonel destek almak
    `,
    author: "MatÖzel Aile Danışmanı",
    date: "2025-12-20",
    category: "veli-rehberi",
    tags: ["veli", "sınav", "destek", "motivasyon", "aile"],
    readTime: 7,
  },
  {
    slug: "yazilim-ogrenmek-icin-en-iyi-yol",
    title: "2026'da Yazılım Öğrenmek İçin En İyi Yol: Adım Adım Rehber",
    excerpt: "Sıfırdan programcı olmak isteyenler için hangi dili öğrenmeli, nereden başlamalı sorusunun cevabı.",
    content: `
# 2026'da Yazılım Öğrenmek

Yazılım, geleceğin en değerli becerisidir. İşte sıfırdan başlayanlar için rehber:

## Hangi Dili Öğrenmeliyim?

### Başlangıç İçin: Python
- Kolay sözdizimi
- Geniş kullanım alanı
- Zengin kütüphaneler

### Web Geliştirme: JavaScript
- Frontend ve backend
- Yüksek iş imkanı
- Zengin ekosistem

### Mobil Uygulama:
- iOS: Swift
- Android: Kotlin
- Cross-platform: Flutter/React Native

## Öğrenme Yol Haritası

### Ay 1-2: Temeller
1. Değişkenler ve veri tipleri
2. Koşul yapıları
3. Döngüler
4. Fonksiyonlar
5. Temel veri yapıları

### Ay 3-4: Orta Seviye
1. Nesne yönelimli programlama
2. Hata yönetimi
3. Dosya işlemleri
4. API kullanımı

### Ay 5-6: Projeler
1. Kişisel web sitesi
2. Todo uygulaması
3. API projesi
4. Portfolyo oluşturma

## Kaynaklar

### Ücretsiz:
- freeCodeCamp
- Codecademy
- YouTube kanalları

### Türkçe:
- BTK Akademi
- Udemy Türkçe kurslar

## İpuçları

1. Her gün kod yazın
2. Projeler geliştirin
3. GitHub kullanın
4. Toplulukla iletişimde olun
5. Hata yapmaktan korkmayın
    `,
    author: "MatÖzel Yazılım Ekibi",
    date: "2025-12-15",
    category: "yazilim",
    tags: ["yazılım", "programlama", "Python", "JavaScript", "kariyer"],
    readTime: 11,
  },
];

// Blog post getir
export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find(post => post.slug === slug);
}

// Kategoriye göre postlar
export function getPostsByCategory(categorySlug: string): BlogPost[] {
  return blogPosts.filter(post => post.category === categorySlug);
}

// Etiketlere göre postlar
export function getPostsByTag(tag: string): BlogPost[] {
  return blogPosts.filter(post => post.tags.includes(tag));
}

// Son postlar
export function getRecentPosts(count: number = 5): BlogPost[] {
  return [...blogPosts]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, count);
}
