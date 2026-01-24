// Her ders için detaylı müfredat ve SEO içerikleri

export interface CurriculumTopic {
  title: string;
  description: string;
  subtopics: string[];
}

export interface SubjectCurriculum {
  slug: string;
  name: string;
  seoTitle: string;
  seoDescription: string;
  heroDescription: string;
  importance: string;
  benefits: string[];
  curriculum: {
    ortaokul?: {
      [grade: string]: CurriculumTopic[];
    };
    lise?: {
      [grade: string]: CurriculumTopic[];
    };
    lgs?: CurriculumTopic[];
    tyt?: CurriculumTopic[];
    ayt?: CurriculumTopic[];
  };
  faq: { question: string; answer: string }[];
  examTips?: string[];
}

export const subjectCurriculums: Record<string, SubjectCurriculum> = {
  matematik: {
    slug: "matematik",
    name: "Matematik",
    seoTitle: "Matematik Özel Ders | MatÖzel - Birebir Matematik Eğitimi",
    seoDescription: "Profesyonel matematik özel dersi ile sınav başarınızı artırın. LGS, TYT, AYT matematik hazırlık, konu anlatımı ve soru çözümü. Online ve yüz yüze seçenekleri.",
    heroDescription: "Matematik özel ders ile sayısal düşünme becerinizi geliştirin, sınav başarınızı garantileyin. Temel kavramlardan ileri düzey konulara kadar birebir eğitim.",
    importance: "Matematik, analitik düşünme ve problem çözme becerilerinin temelini oluşturur. LGS'de 20, TYT'de 40, AYT'de 40 soruyla en yüksek ağırlığa sahip derstir. Güçlü bir matematik altyapısı, mühendislik, tıp, ekonomi gibi birçok kariyer yolunun kapısını açar.",
    benefits: [
      "Birebir öğrenme ile konuları kendi hızınızda kavrayın",
      "Sınav odaklı soru çözüm teknikleri öğrenin",
      "Problem çözme stratejilerini geliştirin",
      "Eksik konuları tespit edip giderin",
      "Düzenli pratik ile kalıcı öğrenme sağlayın"
    ],
    curriculum: {
      ortaokul: {
        "5-sinif": [
          { title: "Doğal Sayılar", description: "Doğal sayılarla işlemler ve problem çözme", subtopics: ["Doğal sayıların okunuşu ve yazılışı", "Dört işlem", "İşlem önceliği", "Problemler"] },
          { title: "Kesirler", description: "Kesir kavramı ve kesirlerle işlemler", subtopics: ["Kesir çeşitleri", "Kesirlerde sıralama", "Kesirlerde toplama-çıkarma", "Problemler"] },
          { title: "Ondalık Gösterim", description: "Ondalık sayılar ve işlemler", subtopics: ["Ondalık gösterim", "Ondalık sayılarda işlemler", "Yuvarlama", "Problemler"] },
          { title: "Geometri", description: "Temel geometrik kavramlar", subtopics: ["Çokgenler", "Üçgen ve dörtgenler", "Çevre hesaplama", "Alan hesaplama"] }
        ],
        "6-sinif": [
          { title: "Tam Sayılar", description: "Tam sayı kavramı ve işlemler", subtopics: ["Negatif sayılar", "Mutlak değer", "Toplama-çıkarma", "Çarpma-bölme"] },
          { title: "Oran-Orantı", description: "Oran ve orantı kavramları", subtopics: ["Oran kavramı", "Orantı", "Doğru orantı", "Ters orantı"] },
          { title: "Cebirsel İfadeler", description: "Değişken ve cebirsel ifadeler", subtopics: ["Değişken kavramı", "Cebirsel ifade yazma", "Sadeleştirme", "Denklem kurma"] },
          { title: "Geometri", description: "Alan ve hacim kavramları", subtopics: ["Dörtgenlerin alanı", "Prizmalar", "Hacim hesaplama", "Yüzey alanı"] }
        ],
        "7-sinif": [
          { title: "Rasyonel Sayılar", description: "Rasyonel sayılar ve işlemler", subtopics: ["Rasyonel sayı kavramı", "Dört işlem", "Sayı doğrusu", "Problemler"] },
          { title: "Denklemler", description: "Birinci dereceden denklemler", subtopics: ["Denklem çözme", "Problemler", "Eşitsizlikler", "Doğrusal denklemler"] },
          { title: "Yüzdeler", description: "Yüzde hesaplamaları", subtopics: ["Yüzde kavramı", "Artış-azalış", "Kar-zarar", "Faiz problemleri"] },
          { title: "Geometri ve Ölçme", description: "Çember ve daire", subtopics: ["Çember ve daire", "Çevre ve alan", "Açılar", "Dörtgenler"] }
        ],
        "8-sinif": [
          { title: "Üslü İfadeler", description: "Üslü sayılar ve köklü sayılar", subtopics: ["Üs kuralları", "Negatif üs", "Köklü sayılar", "Basitleştirme"] },
          { title: "Denklem Sistemleri", description: "İki bilinmeyenli denklem sistemleri", subtopics: ["Grafik yöntemi", "Yerine koyma", "Yok etme", "Problemler"] },
          { title: "Eşitsizlikler", description: "Birinci dereceden eşitsizlikler", subtopics: ["Eşitsizlik çözümü", "Grafik gösterimi", "Problemler", "Aralık gösterimi"] },
          { title: "Olasılık", description: "Olasılık hesaplamaları", subtopics: ["Basit olasılık", "Bağımlı-bağımsız olaylar", "Permütasyon", "Kombinasyon"] },
          { title: "Geometri", description: "Üçgenler ve benzerlik", subtopics: ["Üçgende açı-kenar", "Eşlik ve benzerlik", "Pisagor teoremi", "Dönüşüm geometrisi"] }
        ]
      },
      lise: {
        "9-sinif": [
          { title: "Küme ve Mantık", description: "Küme kavramı ve mantık", subtopics: ["Küme gösterimi", "Küme işlemleri", "Önerme mantığı", "Açık önerme"] },
          { title: "Sayı Kümeleri", description: "Sayı sistemleri", subtopics: ["Doğal sayılar", "Tam sayılar", "Rasyonel sayılar", "İrrasyonel sayılar"] },
          { title: "Denklemler", description: "Denklem ve eşitsizlikler", subtopics: ["Birinci derece denklem", "İkinci derece denklem", "Eşitsizlikler", "Mutlak değer"] },
          { title: "Fonksiyonlar", description: "Fonksiyon kavramı", subtopics: ["Fonksiyon tanımı", "Görüntü kümesi", "Bileşke fonksiyon", "Ters fonksiyon"] }
        ],
        "10-sinif": [
          { title: "Polinomlar", description: "Polinom işlemleri", subtopics: ["Polinom tanımı", "Toplama-çıkarma", "Çarpma-bölme", "Çarpanlara ayırma"] },
          { title: "İkinci Derece Denklemler", description: "İkinci derece denklem ve eşitsizlikler", subtopics: ["Köklerin bulunması", "Köklerin toplamı ve çarpımı", "Diskriminant", "Parabol"] },
          { title: "Fonksiyonlar", description: "Fonksiyon türleri", subtopics: ["Doğrusal fonksiyon", "İkinci derece fonksiyon", "Parçalı fonksiyon", "Mutlak değerli fonksiyon"] },
          { title: "Olasılık ve İstatistik", description: "Veri analizi ve olasılık", subtopics: ["Merkezi eğilim ölçüleri", "Yayılım ölçüleri", "Olasılık", "Bağımsız olaylar"] }
        ],
        "11-sinif": [
          { title: "Trigonometri", description: "Trigonometrik fonksiyonlar", subtopics: ["Trigonometrik oranlar", "Birim çember", "Trigonometrik denklemler", "Toplam-fark formülleri"] },
          { title: "Logaritma", description: "Üstel ve logaritmik fonksiyonlar", subtopics: ["Logaritma tanımı", "Logaritma kuralları", "Üstel fonksiyon", "Logaritmik denklemler"] },
          { title: "Diziler", description: "Aritmetik ve geometrik diziler", subtopics: ["Dizi tanımı", "Aritmetik dizi", "Geometrik dizi", "Seriler"] },
          { title: "Kombinatorik", description: "Sayma ve olasılık", subtopics: ["Sayma ilkeleri", "Permütasyon", "Kombinasyon", "Binom açılımı"] }
        ],
        "12-sinif": [
          { title: "Limit ve Süreklilik", description: "Limit kavramı", subtopics: ["Limit tanımı", "Belirsizlik durumları", "Süreklilik", "Limit uygulamaları"] },
          { title: "Türev", description: "Türev ve uygulamaları", subtopics: ["Türev tanımı", "Türev kuralları", "Maksimum-minimum", "Eğri çizimi"] },
          { title: "İntegral", description: "Belirsiz ve belirli integral", subtopics: ["Belirsiz integral", "İntegral yöntemleri", "Belirli integral", "Alan hesabı"] }
        ]
      },
      lgs: [
        { title: "Çarpanlar ve Katlar", description: "EBOB-EKOK ve uygulamaları", subtopics: ["Asal çarpanlara ayırma", "EBOB hesaplama", "EKOK hesaplama", "Problemler"] },
        { title: "Üslü ve Köklü Sayılar", description: "Üslü ifadeler ve köklü sayılar", subtopics: ["Üs kuralları", "Köklü ifadeler", "Sadeleştirme", "İşlemler"] },
        { title: "Veri Analizi", description: "İstatistik ve olasılık", subtopics: ["Merkezi eğilim", "Grafikler", "Olasılık", "Yorumlama"] },
        { title: "Cebir", description: "Cebirsel ifadeler ve denklemler", subtopics: ["Cebirsel ifadeler", "Özdeşlikler", "Çarpanlara ayırma", "Denklem sistemleri"] },
        { title: "Geometri", description: "Geometri konuları", subtopics: ["Üçgenler", "Eşlik ve benzerlik", "Pisagor teoremi", "Dönüşümler"] }
      ],
      tyt: [
        { title: "Temel Kavramlar", description: "Sayılar ve işlemler", subtopics: ["Sayı basamakları", "Bölme-bölünebilme", "EBOB-EKOK", "Rasyonel sayılar"] },
        { title: "Problemler", description: "Problem türleri", subtopics: ["Yaş problemleri", "İşçi-havuz", "Yüzde-kar zarar", "Hareket problemleri"] },
        { title: "Denklemler", description: "Denklem ve eşitsizlik", subtopics: ["Birinci derece", "İkinci derece", "Mutlak değer", "Eşitsizlikler"] },
        { title: "Geometri", description: "Temel geometri", subtopics: ["Üçgenler", "Dörtgenler", "Çember", "Katı cisimler"] }
      ],
      ayt: [
        { title: "Fonksiyonlar", description: "Fonksiyon türleri", subtopics: ["Fonksiyon çeşitleri", "Bileşke", "Ters fonksiyon", "Grafikler"] },
        { title: "Trigonometri", description: "Trigonometrik fonksiyonlar", subtopics: ["Trigonometrik oranlar", "Formüller", "Denklemler", "Grafikler"] },
        { title: "Logaritma", description: "Logaritmik ifadeler", subtopics: ["Logaritma kuralları", "Üstel fonksiyonlar", "Denklemler", "Eşitsizlikler"] },
        { title: "Limit-Türev-İntegral", description: "Analiz konuları", subtopics: ["Limit", "Türev uygulamaları", "İntegral", "Alan-hacim"] }
      ]
    },
    faq: [
      { question: "Matematik özel ders kaç saat olmalı?", answer: "Haftada en az 2-3 saat düzenli ders, konuların pekişmesi için idealdir. Sınav dönemlerinde bu süre artırılabilir." },
      { question: "Online matematik dersi etkili mi?", answer: "Evet, dijital tahta ve ekran paylaşımı ile birebir ders kadar etkili olabilir. Kayıt imkanı ile dersleri tekrar izleyebilirsiniz." },
      { question: "Matematik fobisi nasıl yenilir?", answer: "Temel konulara dönüp, basitten karmaşığa ilerleyerek özgüven kazanılır. Birebir ders ile korku yenilir." },
      { question: "Hangi sınıf için matematik özel ders uygun?", answer: "5. sınıftan 12. sınıfa kadar her seviyede özel ders verilebilir. Erken başlamak güçlü temel oluşturur." }
    ],
    examTips: [
      "Soru tiplerine göre zaman yönetimi yapın",
      "Kolay sorulardan başlayın, zaman kazanın",
      "Geometri sorularında şekil çizmeyi ihmal etmeyin",
      "Günlük en az 20 soru çözün"
    ]
  },
  turkce: {
    slug: "turkce",
    name: "Türkçe",
    seoTitle: "Türkçe Özel Ders | MatÖzel - Birebir Türkçe Eğitimi",
    seoDescription: "Türkçe özel dersi ile dil bilgisi ve okuma anlama becerilerinizi geliştirin. LGS, TYT Türkçe hazırlık. Paragraf analizi ve dil bilgisi.",
    heroDescription: "Türkçe özel ders ile dil becerilerinizi güçlendirin. Paragraf çözümünden dil bilgisine, anlama yeteneğinizi zirveye taşıyın.",
    importance: "Türkçe, tüm derslerin temelini oluşturan ana dil becerisidir. Okuduğunu anlama yeteneği, matematikte problem çözümünden fen bilimlerinde kavram öğrenmeye kadar her alanda başarıyı etkiler. LGS ve TYT'de yüksek soru sayısıyla kritik öneme sahiptir.",
    benefits: [
      "Paragraf analiz tekniklerini öğrenin",
      "Dil bilgisi kurallarını kalıcı şekilde kavrayın",
      "Hızlı ve doğru okuma becerinizi geliştirin",
      "Yazılı anlatım gücünüzü artırın",
      "Sözcük dağarcığınızı genişletin"
    ],
    curriculum: {
      ortaokul: {
        "5-sinif": [
          { title: "Sözcükte Anlam", description: "Sözcük bilgisi temelleri", subtopics: ["Gerçek anlam", "Mecaz anlam", "Eş-zıt anlamlılar", "Deyimler"] },
          { title: "Cümlede Anlam", description: "Cümle yorumlama", subtopics: ["Neden-sonuç", "Amaç-sonuç", "Karşılaştırma", "Örneklendirme"] }
        ],
        "6-sinif": [
          { title: "Fiiller", description: "Fiil çeşitleri ve çekimi", subtopics: ["Haber kipleri", "Dilek kipleri", "Ek fiil", "Fiil çatısı"] },
          { title: "Paragraf", description: "Paragraf yapısı", subtopics: ["Ana düşünce", "Yardımcı düşünce", "Paragraf türleri", "Bağlantı cümleleri"] }
        ],
        "7-sinif": [
          { title: "Sözcük Türleri", description: "Kelime türleri", subtopics: ["İsimler", "Sıfatlar", "Zamirler", "Zarflar"] },
          { title: "Cümle Türleri", description: "Cümle yapısı", subtopics: ["Basit cümle", "Birleşik cümle", "Sıralı cümle", "Bağlı cümle"] }
        ],
        "8-sinif": [
          { title: "Cümle Ögeleri", description: "Cümlenin ögeleri", subtopics: ["Özne", "Yüklem", "Nesne", "Tümleçler"] },
          { title: "Yazım-Noktalama", description: "Yazım kuralları", subtopics: ["Büyük harf", "Birleşik kelimeler", "Noktalama işaretleri", "Kısaltmalar"] },
          { title: "LGS Paragraf", description: "İleri paragraf çözümü", subtopics: ["Paragraf tamamlama", "Paragraf sıralama", "Başlık bulma", "Çıkarım yapma"] }
        ]
      },
      lise: {
        "9-sinif": [
          { title: "Ses Bilgisi", description: "Türkçe ses özellikleri", subtopics: ["Ünlüler", "Ünsüzler", "Ses olayları", "Vurgu-tonlama"] },
          { title: "Yapı Bilgisi", description: "Sözcük yapısı", subtopics: ["Kök ve ek", "Yapım ekleri", "Çekim ekleri", "Sözcük türetme"] }
        ],
        "10-sinif": [
          { title: "Cümle Bilgisi", description: "İleri cümle analizi", subtopics: ["Cümle ögeleri", "Cümle türleri", "Anlam ilişkileri", "Anlatım bozuklukları"] },
          { title: "Anlatım Türleri", description: "Yazılı anlatım", subtopics: ["Öyküleyici", "Betimleyici", "Açıklayıcı", "Tartışmacı"] }
        ],
        "11-sinif": [
          { title: "Paragraf Çözümleme", description: "İleri paragraf teknikleri", subtopics: ["Paragraf türleri", "Düşünceyi geliştirme", "Anlatım biçimleri", "Metin analizi"] }
        ],
        "12-sinif": [
          { title: "TYT Türkçe", description: "TYT hazırlık", subtopics: ["Sözcükte anlam", "Cümlede anlam", "Paragraf", "Dil bilgisi"] }
        ]
      },
      lgs: [
        { title: "Sözcükte Anlam", description: "Sözcük bilgisi", subtopics: ["Gerçek-mecaz anlam", "Deyim-atasözü", "Eş-zıt anlam", "Sözcük ilişkileri"] },
        { title: "Cümlede Anlam", description: "Cümle yorumlama", subtopics: ["Neden-sonuç", "Amaç-sonuç", "Koşul", "Karşılaştırma"] },
        { title: "Paragraf", description: "Paragraf çözümü", subtopics: ["Ana düşünce", "Başlık bulma", "Paragraf tamamlama", "Sıralama"] },
        { title: "Dil Bilgisi", description: "Gramer konuları", subtopics: ["Sözcük türleri", "Cümle ögeleri", "Fiil çatısı", "Yazım-noktalama"] }
      ],
      tyt: [
        { title: "Sözcük Bilgisi", description: "Sözcük ve anlam", subtopics: ["Sözcükte anlam", "Sözcükler arası anlam", "Deyim-atasözü", "Söz sanatları"] },
        { title: "Cümle Bilgisi", description: "Cümle ve anlam", subtopics: ["Cümle yorumlama", "Anlatım bozuklukları", "Cümle tamamlama", "Cümle birleştirme"] },
        { title: "Paragraf", description: "Paragraf analizi", subtopics: ["Ana düşünce", "Paragraf yapısı", "Anlatım türleri", "Düşünceyi geliştirme"] }
      ]
    },
    faq: [
      { question: "Paragraf sorularını nasıl hızlı çözerim?", answer: "Önce soruyu okuyun, sonra paragrafı tarayın. Ana düşünceyi bulmak için giriş ve sonuç cümlelerine odaklanın." },
      { question: "Dil bilgisi nasıl ezberlenir?", answer: "Ezberlemek yerine mantığını kavrayın. Bol örnek çözerek kuralları pekiştirin." },
      { question: "Okuma hızımı nasıl artırırım?", answer: "Günlük düzenli okuma alışkanlığı edinin. Göz hareketlerini kontrol ederek blok okuma tekniğini uygulayın." }
    ],
    examTips: [
      "Paragraf sorularında önce soruyu okuyun",
      "Dil bilgisi sorularında eleme yöntemi kullanın",
      "Zaman yönetimine dikkat edin",
      "Günlük gazete ve dergi okuyun"
    ]
  },
  fizik: {
    slug: "fizik",
    name: "Fizik",
    seoTitle: "Fizik Özel Ders | MatÖzel - Birebir Fizik Eğitimi",
    seoDescription: "Fizik özel dersi ile mekanik, elektrik ve modern fizik konularını kavrayın. TYT-AYT fizik hazırlık, formül analizi ve soru çözümü.",
    heroDescription: "Fizik özel ders ile evreni anlamanın anahtarını keşfedin. Kavramsal öğrenme ve problem çözme becerinizi geliştirin.",
    importance: "Fizik, doğa olaylarını matematiksel modellerle açıklayan temel bilimdir. Mühendislik, tıp ve teknoloji alanlarında kariyer hedefleyenler için vazgeçilmezdir. AYT'de sayısal puan türünde yüksek katsayıya sahiptir.",
    benefits: [
      "Kavramları görsel ve deneysel yöntemlerle öğrenin",
      "Formüllerin mantığını kavrayın",
      "Problem çözme stratejileri geliştirin",
      "Deney ve simülasyonlarla pekiştirin",
      "Günlük hayatla bağlantı kurun"
    ],
    curriculum: {
      lise: {
        "9-sinif": [
          { title: "Fizik Bilimine Giriş", description: "Temel kavramlar", subtopics: ["Fizik ve ölçme", "Birim sistemleri", "Vektörler", "Skaler-vektörel büyüklükler"] },
          { title: "Madde ve Özellikleri", description: "Maddenin yapısı", subtopics: ["Kütle-hacim", "Özkütle", "Dayanıklılık", "Esneklik"] },
          { title: "Kuvvet ve Hareket", description: "Hareket kavramları", subtopics: ["Konum-yer değiştirme", "Hız-sürat", "İvme", "Düzgün hareket"] },
          { title: "Enerji", description: "Enerji kavramı", subtopics: ["İş", "Enerji türleri", "Güç", "Verim"] }
        ],
        "10-sinif": [
          { title: "Elektrik ve Manyetizma", description: "Elektrik temelleri", subtopics: ["Elektrik yükü", "Elektrik alan", "Elektrik potansiyeli", "Kondansatörler"] },
          { title: "Basınç ve Kaldırma", description: "Akışkanlar", subtopics: ["Katı basıncı", "Sıvı basıncı", "Gaz basıncı", "Kaldırma kuvveti"] },
          { title: "Dalgalar", description: "Dalga mekaniği", subtopics: ["Dalga türleri", "Dalga özellikleri", "Ses dalgaları", "Işık"] },
          { title: "Optik", description: "Işık ve görüntü", subtopics: ["Işığın yansıması", "Işığın kırılması", "Aynalar", "Mercekler"] }
        ],
        "11-sinif": [
          { title: "Kuvvet ve Hareket", description: "İleri mekanik", subtopics: ["Newton yasaları", "Atış hareketleri", "Dairesel hareket", "Basit harmonik hareket"] },
          { title: "Elektrik ve Manyetizma", description: "Elektromanyetizma", subtopics: ["Elektrik akımı", "Direnç-Ohm yasası", "Manyetik alan", "İndüksiyon"] },
          { title: "Modern Fizik", description: "Modern fizik temelleri", subtopics: ["Özel görelilik", "Fotoelektrik olay", "Compton saçılması", "Atom modelleri"] }
        ],
        "12-sinif": [
          { title: "Çembersel Hareket", description: "Dairesel hareket", subtopics: ["Açısal hız", "Merkezcil kuvvet", "Gezegensel hareket", "Uydu fiziği"] },
          { title: "İtme-Momentum", description: "Momentum korunumu", subtopics: ["Momentum", "İtme", "Çarpışmalar", "Roket hareketi"] },
          { title: "Atom Fiziği", description: "Atom ve çekirdek", subtopics: ["Atom modelleri", "Çekirdek yapısı", "Radyoaktivite", "Nükleer reaksiyonlar"] }
        ]
      },
      tyt: [
        { title: "Temel Kavramlar", description: "Fizik temelleri", subtopics: ["Birimler", "Vektörler", "Grafik okuma", "Hata hesabı"] },
        { title: "Mekanik", description: "Hareket ve kuvvet", subtopics: ["Hareket", "Kuvvet", "Enerji", "Momentum"] },
        { title: "Dalgalar ve Optik", description: "Dalga ve ışık", subtopics: ["Dalga özellikleri", "Ses", "Aynalar", "Mercekler"] },
        { title: "Elektrik", description: "Elektrik temelleri", subtopics: ["Elektrostatik", "Devreler", "Manyetizma", "İndüksiyon"] }
      ],
      ayt: [
        { title: "İleri Mekanik", description: "Mekanik konuları", subtopics: ["Atış hareketleri", "Dairesel hareket", "Basit harmonik", "Genel çekim"] },
        { title: "Elektromanyetizma", description: "Elektrik ve manyetizma", subtopics: ["Elektrik alan", "Manyetik alan", "İndüksiyon", "Alternatif akım"] },
        { title: "Modern Fizik", description: "Modern fizik konuları", subtopics: ["Özel görelilik", "Kuantum", "Atom fiziği", "Çekirdek fiziği"] }
      ]
    },
    faq: [
      { question: "Fizik formüllerini nasıl ezberlerim?", answer: "Formüllerin türetilişini öğrenin, birim analizini kavrayın. Ezberden çok mantık ve soru çözümü ile pekiştirin." },
      { question: "Fizik problemlerini nasıl çözerim?", answer: "Önce olayı görselleştirin, verilenleri yazın, uygun formülü seçin ve birim dönüşümlerine dikkat edin." },
      { question: "Fizik ve matematik ilişkisi nedir?", answer: "Fizik, matematiği araç olarak kullanır. Güçlü matematik temeli, fizik başarısını doğrudan etkiler." }
    ],
    examTips: [
      "Formülleri ve birimlerini birlikte öğrenin",
      "Grafik sorularını dikkatli analiz edin",
      "Hesap makinesi kullanım pratiği yapın",
      "Yorum gerektiren soruları önceleyin"
    ]
  },
  kimya: {
    slug: "kimya",
    name: "Kimya",
    seoTitle: "Kimya Özel Ders | MatÖzel - Birebir Kimya Eğitimi",
    seoDescription: "Kimya özel dersi ile mol, reaksiyon ve organik kimya konularını kavrayın. TYT-AYT kimya hazırlık, deney odaklı eğitim.",
    heroDescription: "Kimya özel ders ile maddenin sırlarını çözün. Atom yapısından organik kimyaya, tüm konularda uzmanlaşın.",
    importance: "Kimya, maddenin yapısını ve dönüşümlerini inceleyen temel bilimdir. Tıp, eczacılık, mühendislik ve çevre bilimlerinde kritik öneme sahiptir.",
    benefits: [
      "Görsel ve deneysel yöntemlerle öğrenin",
      "Mol hesaplamalarında uzmanlaşın",
      "Organik kimya mekanizmalarını kavrayın",
      "Günlük hayattan örneklerle pekiştirin",
      "Laboratuvar simülasyonları ile destekleyin"
    ],
    curriculum: {
      lise: {
        "9-sinif": [
          { title: "Kimya Bilimi", description: "Kimyaya giriş", subtopics: ["Simya'dan kimyaya", "Kimyanın uğraş alanları", "Kimyanın sembolik dili", "Güvenlik"] },
          { title: "Atom ve Periyodik Sistem", description: "Atom yapısı", subtopics: ["Atom modelleri", "Elektron dizilimi", "Periyodik tablo", "Element özellikleri"] },
          { title: "Kimyasal Türler", description: "Madde çeşitleri", subtopics: ["Bileşikler", "Kimyasal bağlar", "Fiziksel-kimyasal değişim", "Karışımlar"] }
        ],
        "10-sinif": [
          { title: "Kimyasal Hesaplamalar", description: "Mol kavramı", subtopics: ["Mol hesabı", "Mol-kütle ilişkisi", "Mol-hacim ilişkisi", "Derişim hesapları"] },
          { title: "Karışımlar", description: "Karışım türleri", subtopics: ["Homojen karışımlar", "Heterojen karışımlar", "Çözünürlük", "Ayırma yöntemleri"] },
          { title: "Asitler ve Bazlar", description: "Asit-baz kavramı", subtopics: ["Asit-baz tanımları", "pH kavramı", "Nötrleşme", "Tampon çözeltiler"] },
          { title: "Kimya ve Elektrik", description: "Elektrokimya", subtopics: ["İndirgenme-yükseltgenme", "Pil ve elektroliz", "Korozyon", "Akü"] }
        ],
        "11-sinif": [
          { title: "Modern Atom Teorisi", description: "Kuantum modeli", subtopics: ["Kuantum sayıları", "Orbital kavramı", "Elektron dizilimi", "Periyodik özellikler"] },
          { title: "Gazlar", description: "Gaz yasaları", subtopics: ["İdeal gaz", "Boyle yasası", "Charles yasası", "Dalton yasası"] },
          { title: "Sıvı ve Katılar", description: "Yoğun fazlar", subtopics: ["Sıvı özellikleri", "Katı türleri", "Faz diyagramları", "Kristal yapılar"] },
          { title: "Kimyasal Tepkimeler", description: "Tepkime türleri", subtopics: ["Tepkime denklemleri", "Tepkime türleri", "Stokiyometri", "Sınırlayıcı bileşen"] }
        ],
        "12-sinif": [
          { title: "Organik Kimya", description: "Organik bileşikler", subtopics: ["Hidrokarbonlar", "Fonksiyonel gruplar", "İzomeri", "Adlandırma"] },
          { title: "Kimyasal Tepkimelerde Enerji", description: "Termokimya", subtopics: ["Entalpi", "Hess yasası", "Bağ enerjileri", "Entropi"] },
          { title: "Tepkime Hızları ve Denge", description: "Kimyasal denge", subtopics: ["Tepkime hızı", "Hız ifadesi", "Denge sabiti", "Le Chatelier"] }
        ]
      },
      tyt: [
        { title: "Atom ve Periyodik", description: "Atom yapısı", subtopics: ["Atom modelleri", "Periyodik tablo", "Element özellikleri", "İyon oluşumu"] },
        { title: "Kimyasal Bağlar", description: "Bağ türleri", subtopics: ["İyonik bağ", "Kovalent bağ", "Metalik bağ", "Zayıf etkileşimler"] },
        { title: "Mol Kavramı", description: "Hesaplamalar", subtopics: ["Mol-kütle", "Mol-hacim", "Derişim", "Stokiyometri"] },
        { title: "Asit-Baz", description: "Asit-baz kimyası", subtopics: ["Tanımlar", "pH", "Nötrleşme", "Tampon"] }
      ],
      ayt: [
        { title: "Organik Kimya", description: "Organik bileşikler", subtopics: ["Hidrokarbonlar", "Alkol-eter", "Aldehit-keton", "Karboksilik asitler"] },
        { title: "Termokimya", description: "Enerji hesapları", subtopics: ["Entalpi", "Hess yasası", "Entropi", "Serbest enerji"] },
        { title: "Hız ve Denge", description: "Kimyasal denge", subtopics: ["Hız ifadesi", "Denge sabiti", "Le Chatelier", "Çözünürlük dengesi"] },
        { title: "Elektrokimya", description: "Elektrokimya", subtopics: ["Redoks", "Piller", "Elektroliz", "Korozyon"] }
      ]
    },
    faq: [
      { question: "Mol kavramını nasıl anlarım?", answer: "Molu düzine gibi düşünün: 6.02x10^23 tanecik içerir. Pratik problemlerle pekiştirin." },
      { question: "Organik kimya zor mu?", answer: "Sistematik öğrenildiğinde kolaydır. Fonksiyonel grupları ve mekanizmaları adım adım öğrenin." },
      { question: "Kimya formüllerini nasıl ezberlerim?", answer: "Formülleri gruplandırın, mantığını anlayın ve bol soru çözün." }
    ],
    examTips: [
      "Periyodik tabloyu iyi tanıyın",
      "Mol hesaplamalarında birim dönüşümüne dikkat edin",
      "Organik kimyada fonksiyonel grupları ezberleyin",
      "Denge sorularında Le Chatelier kuralını uygulayın"
    ]
  },
  biyoloji: {
    slug: "biyoloji",
    name: "Biyoloji",
    seoTitle: "Biyoloji Özel Ders | MatÖzel - Birebir Biyoloji Eğitimi",
    seoDescription: "Biyoloji özel dersi ile hücre, genetik ve ekoloji konularını kavrayın. TYT-AYT biyoloji hazırlık, görsel öğrenme teknikleri.",
    heroDescription: "Biyoloji özel ders ile yaşamın sırlarını keşfedin. Hücreden ekosisteme, tüm canlılar dünyasını anlayın.",
    importance: "Biyoloji, canlıları ve yaşam süreçlerini inceleyen bilimdir. Tıp, veterinerlik, eczacılık ve biyoteknoloji alanlarının temelidir.",
    benefits: [
      "Görsel materyallerle öğrenin",
      "Genetik problemlerde uzmanlaşın",
      "Şema ve çizimlerle konuları pekiştirin",
      "Güncel biyoloji gelişmelerini takip edin",
      "Laboratuvar videolarıyla destekleyin"
    ],
    curriculum: {
      lise: {
        "9-sinif": [
          { title: "Yaşam Bilimi Biyoloji", description: "Biyolojiye giriş", subtopics: ["Canlıların ortak özellikleri", "Bilimsel yöntem", "Canlıların sınıflandırılması", "Mikroskop kullanımı"] },
          { title: "Hücre", description: "Hücre yapısı", subtopics: ["Hücre teorisi", "Prokaryot-ökaryot", "Hücre organelleri", "Hücre zarı"] },
          { title: "Canlıların Temel Bileşenleri", description: "Biyomoleküller", subtopics: ["Karbonhidratlar", "Lipitler", "Proteinler", "Nükleik asitler"] }
        ],
        "10-sinif": [
          { title: "Hücre Bölünmeleri", description: "Mitoz ve mayoz", subtopics: ["Hücre döngüsü", "Mitoz", "Mayoz", "Eşeyli-eşeysiz üreme"] },
          { title: "Kalıtım", description: "Genetik temeller", subtopics: ["Mendel genetiği", "Gen-kromozom", "Kalıtım çeşitleri", "Soy ağacı analizi"] },
          { title: "Ekosistem", description: "Ekoloji temelleri", subtopics: ["Popülasyon", "Komünite", "Madde döngüleri", "Enerji akışı"] }
        ],
        "11-sinif": [
          { title: "İnsan Fizyolojisi", description: "Sistemler", subtopics: ["Sindirim sistemi", "Dolaşım sistemi", "Solunum sistemi", "Boşaltım sistemi"] },
          { title: "Destek ve Hareket", description: "Kas-iskelet", subtopics: ["İskelet sistemi", "Kas sistemi", "Eklemler", "Hareket fizyolojisi"] },
          { title: "Sinir ve Endokrin", description: "Düzenleyici sistemler", subtopics: ["Sinir sistemi", "Duyu organları", "Endokrin sistem", "Hormonlar"] }
        ],
        "12-sinif": [
          { title: "Genetik Mühendisliği", description: "Modern genetik", subtopics: ["DNA teknolojisi", "Gen klonlama", "GDO", "Biyoteknoloji"] },
          { title: "Evrim", description: "Evrim teorisi", subtopics: ["Evrim kanıtları", "Doğal seçilim", "Türleşme", "İnsan evrimi"] },
          { title: "Bitki Biyolojisi", description: "Bitki fizyolojisi", subtopics: ["Fotosentez", "Solunum", "Taşıma", "Bitki hormonları"] }
        ]
      },
      tyt: [
        { title: "Hücre", description: "Hücre biyolojisi", subtopics: ["Hücre yapısı", "Organeller", "Hücre zarı", "Metabolizma"] },
        { title: "Canlıların Sınıflandırılması", description: "Sınıflandırma", subtopics: ["Alemler", "Virüsler", "Bakteriler", "Protistler"] },
        { title: "Kalıtım", description: "Temel genetik", subtopics: ["Mendel", "Kalıtım çeşitleri", "Kan grupları", "Eşeye bağlı kalıtım"] },
        { title: "Ekosistem", description: "Ekoloji", subtopics: ["Besin zinciri", "Madde döngüleri", "Çevre sorunları", "Biyomlar"] }
      ],
      ayt: [
        { title: "Hücre Bölünmeleri", description: "Mitoz-mayoz", subtopics: ["Hücre döngüsü", "Mitoz evreleri", "Mayoz evreleri", "Gametogenez"] },
        { title: "Kalıtım", description: "İleri genetik", subtopics: ["Bağlı kalıtım", "Gen haritaları", "Mutasyonlar", "Populasyon genetiği"] },
        { title: "Sistemler", description: "İnsan fizyolojisi", subtopics: ["Sindirim", "Dolaşım", "Solunum", "Boşaltım"] },
        { title: "Bitki ve Hayvan Dokuları", description: "Histoloji", subtopics: ["Bitki dokuları", "Hayvan dokuları", "Doku organizasyonu", "Organ sistemleri"] }
      ]
    },
    faq: [
      { question: "Biyoloji ezber mi gerektirir?", answer: "Temel kavramları ezberlemek gerekir ancak mantığını anlarsanız kalıcı olur. Şema ve çizimler yardımcı olur." },
      { question: "Genetik problemleri nasıl çözerim?", answer: "Punnett karesini kullanın, soy ağacı analizi yapın ve çaprazlama kurallarını uygulayın." },
      { question: "Sistemleri nasıl öğrenirim?", answer: "Her sistemi ayrı ayrı öğrenin, şemalar çizin ve sistemler arası ilişkileri kavrayın." }
    ],
    examTips: [
      "Şema ve çizimleri kullanarak öğrenin",
      "Genetik problemlerinde Punnett karesi çizin",
      "Sistemler arası ilişkileri kavrayın",
      "Güncel biyoloji konularını takip edin"
    ]
  },
  geometri: {
    slug: "geometri",
    name: "Geometri",
    seoTitle: "Geometri Özel Ders | MatÖzel - Birebir Geometri Eğitimi",
    seoDescription: "Geometri özel dersi ile üçgen, dörtgen ve analitik geometri konularını kavrayın. TYT-AYT geometri hazırlık, şekil analizi ve ispat teknikleri.",
    heroDescription: "Geometri özel ders ile uzaysal düşünme becerinizi geliştirin. Şekillerden formüllere, geometrik sırları çözün.",
    importance: "Geometri, şekiller ve uzay ilişkilerini inceler. Mühendislik, mimarlık ve tasarım alanlarında kritik öneme sahiptir. AYT'de ayrı bir ders olarak sorulur.",
    benefits: [
      "Görsel düşünme becerinizi geliştirin",
      "Şekil çizimi ve analizi öğrenin",
      "İspat tekniklerini kavrayın",
      "Problem çözme stratejileri edinin",
      "Analitik geometri ile koordinat sistemini birleştirin"
    ],
    curriculum: {
      lise: {
        "9-sinif": [
          { title: "Temel Kavramlar", description: "Geometriye giriş", subtopics: ["Nokta-doğru-düzlem", "Açılar", "Açı çeşitleri", "Açılar arası ilişkiler"] },
          { title: "Üçgenler", description: "Üçgen temelleri", subtopics: ["Üçgen çeşitleri", "Açı-kenar ilişkileri", "Üçgende eşlik", "Alan hesabı"] },
          { title: "Dörtgenler", description: "Dörtgen türleri", subtopics: ["Paralelkenar", "Dikdörtgen", "Kare", "Yamuk"] }
        ],
        "10-sinif": [
          { title: "Üçgenlerde Benzerlik", description: "Benzerlik kavramı", subtopics: ["Benzerlik oranı", "Benzerlik teoremleri", "Özel üçgenler", "Uygulamalar"] },
          { title: "Dik Üçgen", description: "Dik üçgen özellikleri", subtopics: ["Pisagor teoremi", "Öklid bağıntıları", "Trigonometrik oranlar", "Özel açılar"] },
          { title: "Çember", description: "Çember geometrisi", subtopics: ["Çember elemanları", "Çemberde açılar", "Teğet-kesen", "Çember denklemleri"] }
        ],
        "11-sinif": [
          { title: "Analitik Geometri", description: "Koordinat geometrisi", subtopics: ["Nokta ve doğru", "Doğru denklemi", "İki doğrunun konumu", "Uzaklık formülleri"] },
          { title: "Çemberin Analitik İncelenmesi", description: "Analitik çember", subtopics: ["Çember denklemi", "Teğet doğru", "İki çemberin konumu", "Kuvvet hesabı"] },
          { title: "Dönüşüm Geometrisi", description: "Geometrik dönüşümler", subtopics: ["Öteleme", "Yansıma", "Dönme", "Bileşke dönüşümler"] }
        ],
        "12-sinif": [
          { title: "Katı Cisimler", description: "Uzay geometrisi", subtopics: ["Prizmalar", "Piramitler", "Silindir", "Koni ve küre"] },
          { title: "Konikler", description: "Konik kesitler", subtopics: ["Elips", "Hiperbol", "Parabol", "Odak-doğrultman"] }
        ]
      },
      tyt: [
        { title: "Üçgenler", description: "Üçgen geometrisi", subtopics: ["Açı-kenar ilişkisi", "Alan formülleri", "Benzerlik", "Özel üçgenler"] },
        { title: "Dörtgenler", description: "Dörtgen türleri", subtopics: ["Paralelkenar", "Dikdörtgen", "Kare-eşkenar dörtgen", "Yamuk"] },
        { title: "Çember ve Daire", description: "Çember geometrisi", subtopics: ["Çemberde açılar", "Teğet-kesen", "Alan hesabı", "Yay-kiriş"] },
        { title: "Katı Cisimler", description: "Uzay geometrisi", subtopics: ["Prizmalar", "Piramitler", "Silindir-koni", "Küre"] }
      ],
      ayt: [
        { title: "Analitik Geometri", description: "Koordinat geometrisi", subtopics: ["Doğru denklemi", "Doğrular arası ilişki", "Çember denklemi", "Uzaklık formülleri"] },
        { title: "Konikler", description: "Konik kesitler", subtopics: ["Elips", "Hiperbol", "Parabol", "Uygulamalar"] },
        { title: "Dönüşümler", description: "Dönüşüm geometrisi", subtopics: ["Öteleme", "Yansıma", "Dönme", "Benzerlik dönüşümü"] }
      ]
    },
    faq: [
      { question: "Geometri şekil çizmeden çözülür mü?", answer: "Hayır, geometride şekil çizmek şarttır. Doğru ve ölçekli şekil, çözümün yarısıdır." },
      { question: "Analitik geometri mi düzlem geometri mi önce?", answer: "Önce düzlem geometriyi kavrayın, sonra analitik geometriye geçin. Birbirini tamamlarlar." },
      { question: "Geometri ezber mi mantık mı?", answer: "Temel teoremleri bilmek gerekir ama asıl başarı mantık ve görsel düşünmeyle gelir." }
    ],
    examTips: [
      "Her soruda mutlaka şekil çizin",
      "Özel değerleri (30-60-90, 45-45-90) ezberleyin",
      "Benzerlik oranlarını doğru kullanın",
      "Analitik geometride koordinat sistemi kurun"
    ]
  },
  "fen-bilimleri": {
    slug: "fen-bilimleri",
    name: "Fen Bilimleri",
    seoTitle: "Fen Bilimleri Özel Ders | MatÖzel - Birebir Fen Eğitimi",
    seoDescription: "Fen bilimleri özel dersi ile fizik, kimya, biyoloji temellerini kavrayın. LGS fen bilimleri hazırlık, deney odaklı öğrenme.",
    heroDescription: "Fen bilimleri özel ders ile bilimin kapılarını aralayın. Deney ve gözlemle doğayı keşfedin.",
    importance: "Fen bilimleri, fizik, kimya ve biyolojinin temellerini içerir. Ortaokul seviyesinde güçlü bir fen altyapısı, lise ve üniversite başarısının anahtarıdır.",
    benefits: [
      "Deneylerle öğrenin",
      "Kavramsal anlayış geliştirin",
      "Günlük hayatla bağlantı kurun",
      "Bilimsel düşünme becerisi kazanın",
      "LGS'ye güçlü hazırlanın"
    ],
    curriculum: {
      ortaokul: {
        "5-sinif": [
          { title: "Canlılar Dünyası", description: "Canlıların sınıflandırılması", subtopics: ["Canlı-cansız", "Canlıların sınıflandırılması", "Besin zinciri", "Çevre sorunları"] },
          { title: "Kuvvet ve Hareket", description: "Temel fizik", subtopics: ["Kuvvet nedir", "Sürtünme kuvveti", "Hareket", "Hız"] },
          { title: "Maddenin Değişimi", description: "Madde ve ısı", subtopics: ["Maddenin halleri", "Isı ve sıcaklık", "Hal değişimi", "Saf madde-karışım"] }
        ],
        "6-sinif": [
          { title: "Hücre ve Sistemler", description: "Canlıların yapısı", subtopics: ["Hücre yapısı", "Bitki-hayvan hücresi", "Organ sistemleri", "Destek ve hareket"] },
          { title: "Elektrik", description: "Elektrik temelleri", subtopics: ["Elektrik yükleri", "Elektrik devresi", "Seri-paralel bağlama", "Elektrik güvenliği"] },
          { title: "Işık ve Ses", description: "Dalga kavramı", subtopics: ["Işığın yayılması", "Işığın yansıması", "Sesin yayılması", "Sesin özellikleri"] }
        ],
        "7-sinif": [
          { title: "Hücre ve Bölünmeler", description: "Hücre biyolojisi", subtopics: ["Hücre organelleri", "Mitoz bölünme", "Canlılarda üreme", "Kalıtım"] },
          { title: "Kuvvet ve Enerji", description: "Enerji kavramı", subtopics: ["İş", "Enerji türleri", "Enerji dönüşümü", "Basit makineler"] },
          { title: "Maddenin Yapısı", description: "Atom ve molekül", subtopics: ["Atom modelleri", "Element-bileşik", "Kimyasal formüller", "Kimyasal reaksiyonlar"] }
        ],
        "8-sinif": [
          { title: "DNA ve Genetik", description: "Genetik kod", subtopics: ["DNA yapısı", "Gen-kromozom", "Kalıtım", "Mutasyonlar"] },
          { title: "Basınç", description: "Basınç kavramı", subtopics: ["Katı basıncı", "Sıvı basıncı", "Gaz basıncı", "Kaldırma kuvveti"] },
          { title: "Madde ve Endüstri", description: "Kimyasal hesaplamalar", subtopics: ["Periyodik tablo", "Kimyasal bağlar", "Asit-baz", "Kimya ve teknoloji"] },
          { title: "Elektrik", description: "İleri elektrik", subtopics: ["Elektrik yükleri", "Elektrik devreleri", "Manyetizma", "Elektromıknatıslar"] }
        ]
      },
      lgs: [
        { title: "Mevsimler ve İklim", description: "Dünya ve uzay", subtopics: ["Mevsimlerin oluşumu", "İklim ve hava durumu", "Küresel ısınma", "Uzay araştırmaları"] },
        { title: "DNA ve Genetik Kod", description: "Genetik", subtopics: ["DNA yapısı", "Protein sentezi", "Genetik mühendisliği", "Biyoteknoloji"] },
        { title: "Basınç", description: "Basınç ve kaldırma", subtopics: ["Katı-sıvı-gaz basıncı", "Kaldırma kuvveti", "Basınç hesaplamaları", "Günlük hayatta basınç"] },
        { title: "Madde ve Endüstri", description: "Kimyasal işlemler", subtopics: ["Periyodik tablo", "Kimyasal tepkimeler", "Asit-baz", "Endüstriyel uygulamalar"] },
        { title: "Basit Makineler", description: "Mekanik sistemler", subtopics: ["Kaldıraçlar", "Makara sistemleri", "Eğik düzlem", "Verim hesabı"] }
      ]
    },
    faq: [
      { question: "Fen bilimleri nasıl çalışılır?", answer: "Deneyleri izleyin, kavramları görselleştirin ve bol soru çözün. Günlük hayatla bağlantı kurun." },
      { question: "LGS fen soruları zor mu?", answer: "Yoruma dayalı sorular çoğunluktadır. Kavramsal anlayış ve grafik okuma önemlidir." },
      { question: "Fen bilimleri için laboratuvar şart mı?", answer: "Simülasyon ve videolar da etkilidir. Ancak basit deneyler evde yapılabilir." }
    ],
    examTips: [
      "Kavramları ezberlemek yerine anlayın",
      "Grafik ve tablo okuma pratiği yapın",
      "Güncel bilim haberlerini takip edin",
      "Deney videolarını izleyin"
    ]
  },
  edebiyat: {
    slug: "edebiyat",
    name: "Edebiyat",
    seoTitle: "Edebiyat Özel Ders | MatÖzel - Birebir Edebiyat Eğitimi",
    seoDescription: "Edebiyat özel dersi ile Türk ve dünya edebiyatını keşfedin. AYT edebiyat hazırlık, dönem analizi ve eser incelemesi.",
    heroDescription: "Edebiyat özel ders ile söz sanatının inceliklerini öğrenin. Şiirden romana, edebiyat dünyasını keşfedin.",
    importance: "Edebiyat, dilin estetik kullanımını ve kültürel birikimi aktarır. AYT Türk Dili ve Edebiyatı testinde yüksek soru sayısına sahiptir.",
    benefits: [
      "Dönemleri ve akımları sistemli öğrenin",
      "Eser analizi yapma becerisi kazanın",
      "Söz sanatlarını kavrayın",
      "Edebi türleri tanıyın",
      "Okuma alışkanlığı edinin"
    ],
    curriculum: {
      lise: {
        "9-sinif": [
          { title: "Edebiyata Giriş", description: "Edebiyat kavramı", subtopics: ["Edebiyat nedir", "Edebi türler", "Şiir bilgisi", "Söz sanatları"] },
          { title: "Destan Dönemi", description: "İslamiyet öncesi", subtopics: ["Sözlü edebiyat", "Destanlar", "Koşuk-sagu", "Oğuz Kağan Destanı"] },
          { title: "Divan Edebiyatı Giriş", description: "Klasik edebiyat", subtopics: ["Divan edebiyatı özellikleri", "Nazım biçimleri", "Gazel-kaside", "İlk temsilciler"] }
        ],
        "10-sinif": [
          { title: "Divan Edebiyatı", description: "Klasik dönem", subtopics: ["Divan şiiri özellikleri", "Fuzuli-Baki", "Nedim-Şeyh Galip", "Nesir türleri"] },
          { title: "Halk Edebiyatı", description: "Halk geleneği", subtopics: ["Anonim halk edebiyatı", "Aşık edebiyatı", "Tekke edebiyatı", "Karacaoğlan-Yunus Emre"] },
          { title: "Tanzimat Edebiyatı", description: "Yenileşme dönemi", subtopics: ["Tanzimat I. dönem", "Tanzimat II. dönem", "Namık Kemal", "Şinasi"] }
        ],
        "11-sinif": [
          { title: "Servet-i Fünun", description: "Batılılaşma", subtopics: ["Servet-i Fünun özellikleri", "Tevfik Fikret", "Cenap Şahabettin", "Halit Ziya"] },
          { title: "Fecr-i Ati", description: "Şafak ötesi", subtopics: ["Fecr-i Ati özellikleri", "Ahmet Haşim", "Sanat anlayışı", "Sembolizm etkileri"] },
          { title: "Milli Edebiyat", description: "Ulusal uyanış", subtopics: ["Milli Edebiyat özellikleri", "Ziya Gökalp", "Ömer Seyfettin", "Mehmet Akif"] },
          { title: "Cumhuriyet Dönemi", description: "Yeni dönem", subtopics: ["Cumhuriyet edebiyatı", "Garip akımı", "İkinci Yeni", "Toplumcu gerçekçiler"] }
        ],
        "12-sinif": [
          { title: "Cumhuriyet Dönemi Şiiri", description: "Şiir akımları", subtopics: ["Beş Hececiler", "Yedi Meşaleciler", "Garip", "İkinci Yeni"] },
          { title: "Roman ve Hikaye", description: "Nesir türleri", subtopics: ["Cumhuriyet romanı", "Köy romanları", "Psikolojik roman", "Postmodern roman"] },
          { title: "Dünya Edebiyatı", description: "Evrensel edebiyat", subtopics: ["Akımlar", "Nobel ödüllü yazarlar", "Klasikler", "Çağdaş edebiyat"] }
        ]
      },
      ayt: [
        { title: "Eski Türk Edebiyatı", description: "İslamiyet öncesi ve divan", subtopics: ["Destanlar", "Divan şiiri", "Nazım biçimleri", "Temsilciler"] },
        { title: "Halk Edebiyatı", description: "Halk geleneği", subtopics: ["Anonim edebiyat", "Aşık edebiyatı", "Tekke edebiyatı", "Temsilciler"] },
        { title: "Batı Etkisinde Edebiyat", description: "Yenileşme", subtopics: ["Tanzimat", "Servet-i Fünun", "Fecr-i Ati", "Milli Edebiyat"] },
        { title: "Cumhuriyet Edebiyatı", description: "Modern dönem", subtopics: ["Şiir akımları", "Roman", "Hikaye", "Tiyatro"] }
      ]
    },
    faq: [
      { question: "Edebiyat dönemleri nasıl ezberlenir?", answer: "Kronolojik sırayla öğrenin, her dönemi temsilcileriyle birlikte hatırlayın ve karşılaştırmalı çalışın." },
      { question: "Eser okumak şart mı?", answer: "Evet, özet yerine eseri okumak hem sorulara yardımcı olur hem de anlama becerisini geliştirir." },
      { question: "Söz sanatları nasıl öğrenilir?", answer: "Her sanatı örneklerle öğrenin, şiir çözümlemesi yaparak pratiğe dökün." }
    ],
    examTips: [
      "Dönemleri karşılaştırmalı öğrenin",
      "Temsilcileri ve eserlerini eşleştirin",
      "Söz sanatlarını örneklerle ezberleyin",
      "Metin analizi pratiği yapın"
    ]
  },
  tarih: {
    slug: "tarih",
    name: "Tarih",
    seoTitle: "Tarih Özel Ders | MatÖzel - Birebir Tarih Eğitimi",
    seoDescription: "Tarih özel dersi ile Türk ve dünya tarihini kavrayın. TYT-AYT tarih hazırlık, dönem analizi ve soru çözümü.",
    heroDescription: "Tarih özel ders ile geçmişi anlayın, geleceği şekillendirin. Medeniyetlerden modern çağa, tarihin izinde yolculuk.",
    importance: "Tarih, toplumların geçmişini anlamak ve bugünü yorumlamak için gereklidir. TYT ve AYT'de önemli soru payına sahiptir.",
    benefits: [
      "Kronolojik düşünme becerisi kazanın",
      "Neden-sonuç ilişkileri kurun",
      "Harita okuma yeteneği geliştirin",
      "Dönemleri karşılaştırın",
      "Yorum yapma becerisi edinin"
    ],
    curriculum: {
      lise: {
        "9-sinif": [
          { title: "Tarih Bilimi", description: "Tarih metodolojisi", subtopics: ["Tarih nedir", "Tarihi kaynaklar", "Tarihi yöntem", "Zaman ve takvim"] },
          { title: "İlk Uygarlıklar", description: "Antik dünya", subtopics: ["Mezopotamya", "Mısır", "Anadolu uygarlıkları", "Çin-Hint"] },
          { title: "İlk Türk Devletleri", description: "Türk tarihi başlangıcı", subtopics: ["Hunlar", "Göktürkler", "Uygurlar", "Türk kültürü"] }
        ],
        "10-sinif": [
          { title: "İslam Tarihi", description: "İslam medeniyeti", subtopics: ["Hz. Muhammed dönemi", "Dört halife", "Emeviler-Abbasiler", "İslam bilim ve kültürü"] },
          { title: "Türk-İslam Devletleri", description: "Türk-İslam sentezi", subtopics: ["Karahanlılar", "Gazneliler", "Selçuklular", "Anadolu beylikleri"] },
          { title: "Osmanlı Kuruluş", description: "Osmanlı başlangıcı", subtopics: ["Osmanlı'nın kuruluşu", "Beylikten devlete", "Fetih politikası", "I. Murat-Fatih"] }
        ],
        "11-sinif": [
          { title: "Osmanlı Yükseliş ve Duraklama", description: "Osmanlı klasik çağ", subtopics: ["Kanuni dönemi", "Duraklama nedenleri", "Islahat hareketleri", "Gerileme dönemi"] },
          { title: "Osmanlı Çözülme", description: "Modernleşme çabaları", subtopics: ["III. Selim", "II. Mahmut", "Tanzimat", "I. Meşrutiyet"] },
          { title: "Dünya Savaşları", description: "20. yüzyıl", subtopics: ["I. Dünya Savaşı", "Mondros-Sevr", "II. Dünya Savaşı", "Soğuk Savaş"] }
        ],
        "12-sinif": [
          { title: "Kurtuluş Savaşı", description: "Milli mücadele", subtopics: ["Milli mücadele hazırlık", "Cepheler", "Mudanya-Lozan", "Cumhuriyetin ilanı"] },
          { title: "Atatürk İlke ve İnkılapları", description: "Cumhuriyet dönemi", subtopics: ["Siyasi inkılaplar", "Hukuk inkılapları", "Eğitim-kültür", "Ekonomi"] },
          { title: "Çağdaş Türk ve Dünya Tarihi", description: "Günümüze doğru", subtopics: ["Çok partili dönem", "Darbe dönemleri", "AB süreci", "Dünya tarihi"] }
        ]
      },
      tyt: [
        { title: "Tarih Bilimi ve İlk Uygarlıklar", description: "Tarih temelleri", subtopics: ["Tarih bilimi", "İlk uygarlıklar", "İlk Türk devletleri", "İslam tarihi"] },
        { title: "Türk-İslam Tarihi", description: "Orta Çağ", subtopics: ["Türk-İslam devletleri", "Moğollar", "Timur devleti", "Anadolu beylikleri"] },
        { title: "Osmanlı Tarihi", description: "Osmanlı dönemi", subtopics: ["Kuruluş-yükseliş", "Duraklama-gerileme", "Islahatlar", "Çözülme"] },
        { title: "Atatürk ve İnkılaplar", description: "Cumhuriyet dönemi", subtopics: ["Milli mücadele", "Cumhuriyet", "İnkılaplar", "Atatürk ilkeleri"] }
      ],
      ayt: [
        { title: "Osmanlı Tarihi Derinlemesine", description: "Osmanlı analizi", subtopics: ["Devlet yapısı", "Ekonomi", "Toplum", "Kültür"] },
        { title: "Çağdaş Dünya Tarihi", description: "Modern dönem", subtopics: ["Sanayi Devrimi", "Fransız Devrimi", "Dünya savaşları", "Soğuk Savaş"] },
        { title: "Türkiye Cumhuriyeti", description: "Cumhuriyet dönemi", subtopics: ["İç politika", "Dış politika", "Ekonomi", "Toplum"] }
      ]
    },
    faq: [
      { question: "Tarih ezber mi gerektirir?", answer: "Temel tarihleri bilmek gerekir ama asıl önemli olan neden-sonuç ilişkilerini kavramaktır." },
      { question: "Harita soruları nasıl çözülür?", answer: "Dönemlere göre sınırları, göç yollarını ve savaş alanlarını harita üzerinde çalışın." },
      { question: "Yorum soruları nasıl yapılır?", answer: "Metni dikkatli okuyun, dönemin özelliklerini düşünün ve mantıksal çıkarım yapın." }
    ],
    examTips: [
      "Kronolojik sırayı kavrayın",
      "Neden-sonuç ilişkilerini anlayın",
      "Harita çalışması yapın",
      "Dönemleri karşılaştırın"
    ]
  },
  cografya: {
    slug: "cografya",
    name: "Coğrafya",
    seoTitle: "Coğrafya Özel Ders | MatÖzel - Birebir Coğrafya Eğitimi",
    seoDescription: "Coğrafya özel dersi ile fiziki ve beşeri coğrafya konularını kavrayın. TYT-AYT coğrafya hazırlık, harita analizi ve yorum soruları.",
    heroDescription: "Coğrafya özel ders ile dünyayı keşfedin. İklimden ekonomiye, yeryüzünün sırlarını çözün.",
    importance: "Coğrafya, doğal ve beşeri çevreyi inceler. Çevre sorunları, iklim değişikliği ve sürdürülebilirlik konularında bilinç kazandırır.",
    benefits: [
      "Harita okuma ve yorumlama öğrenin",
      "İklim ve yer şekilleri arasında bağ kurun",
      "Beşeri coğrafya konularını kavrayın",
      "Güncel coğrafi olayları takip edin",
      "Çevre bilinci geliştirin"
    ],
    curriculum: {
      lise: {
        "9-sinif": [
          { title: "Coğrafya Bilimi", description: "Coğrafyaya giriş", subtopics: ["Coğrafya nedir", "Coğrafi araştırma", "Harita bilgisi", "Koordinat sistemi"] },
          { title: "Dünya'nın Şekli ve Hareketleri", description: "Dünya fiziği", subtopics: ["Dünya'nın şekli", "Eksen eğikliği", "Günlük hareket", "Yıllık hareket"] },
          { title: "İklim ve Hava Durumu", description: "Atmosfer", subtopics: ["Atmosfer katmanları", "Sıcaklık", "Basınç ve rüzgarlar", "Nem ve yağış"] }
        ],
        "10-sinif": [
          { title: "Yer Şekilleri", description: "Jeomorfoloji", subtopics: ["İç kuvvetler", "Dış kuvvetler", "Akarsu şekilleri", "Karst topoğrafyası"] },
          { title: "Nüfus ve Yerleşme", description: "Beşeri coğrafya", subtopics: ["Nüfus özellikleri", "Nüfus piramitleri", "Göçler", "Yerleşme tipleri"] },
          { title: "Ekonomik Faaliyetler", description: "Ekonomik coğrafya", subtopics: ["Tarım", "Hayvancılık", "Madencilik", "Sanayi"] }
        ],
        "11-sinif": [
          { title: "Türkiye Fiziki Coğrafyası", description: "Türkiye jeomorfolojisi", subtopics: ["Yer şekilleri", "İklim", "Akarsular", "Göller"] },
          { title: "Türkiye Beşeri Coğrafyası", description: "Türkiye nüfusu", subtopics: ["Nüfus yapısı", "Göçler", "Yerleşme", "Ekonomik faaliyetler"] }
        ],
        "12-sinif": [
          { title: "Bölgesel Coğrafya", description: "Türkiye bölgeleri", subtopics: ["Karadeniz", "Marmara", "Ege", "Akdeniz", "İç Anadolu", "Doğu Anadolu", "Güneydoğu Anadolu"] },
          { title: "Çevre ve Toplum", description: "Çevre sorunları", subtopics: ["Küresel ısınma", "Kirlilik türleri", "Sürdürülebilir kalkınma", "Çevre politikaları"] }
        ]
      },
      tyt: [
        { title: "Harita Bilgisi", description: "Harita okuma", subtopics: ["Koordinatlar", "Ölçek", "İzohipsler", "Profil çıkarma"] },
        { title: "Fiziki Coğrafya", description: "Doğal sistemler", subtopics: ["İklim", "Yer şekilleri", "Toprak-bitki", "Su kaynakları"] },
        { title: "Beşeri Coğrafya", description: "İnsan ve çevre", subtopics: ["Nüfus", "Yerleşme", "Göç", "Ekonomi"] },
        { title: "Türkiye Coğrafyası", description: "Türkiye", subtopics: ["Fiziki özellikler", "Beşeri özellikler", "Bölgeler", "Ekonomi"] }
      ],
      ayt: [
        { title: "İleri Fiziki Coğrafya", description: "Fiziki sistemler", subtopics: ["Jeomorfoloji", "Klimatoloji", "Hidrografya", "Biyocoğrafya"] },
        { title: "Ekonomik Coğrafya", description: "Ekonomik sistemler", subtopics: ["Tarım", "Sanayi", "Enerji", "Ulaşım"] },
        { title: "Çevre Sorunları", description: "Çevresel konular", subtopics: ["Küresel sorunlar", "Türkiye'de çevre", "Sürdürülebilirlik", "Politikalar"] }
      ]
    },
    faq: [
      { question: "Harita soruları nasıl çözülür?", answer: "Koordinat sistemini, izohipsleri ve ölçek hesaplamalarını iyi öğrenin. Pratik yapın." },
      { question: "İklim konusu zor mu?", answer: "Sistematik öğrenildiğinde kolaydır. Basınç, rüzgar ve yağış ilişkilerini kavrayın." },
      { question: "Türkiye coğrafyası nasıl çalışılır?", answer: "Bölgeleri karşılaştırmalı öğrenin, harita üzerinde çalışın ve güncel verileri takip edin." }
    ],
    examTips: [
      "Harita üzerinde çalışın",
      "Grafik ve tablo okuma pratiği yapın",
      "İklim-bitki-toprak ilişkisini kavrayın",
      "Güncel çevre sorunlarını takip edin"
    ]
  },
  ingilizce: {
    slug: "ingilizce",
    name: "İngilizce",
    seoTitle: "İngilizce Özel Ders | MatÖzel - Birebir İngilizce Eğitimi",
    seoDescription: "İngilizce özel dersi ile dil bilgisi ve konuşma becerilerinizi geliştirin. YDS-YÖKDİL hazırlık, IELTS-TOEFL pratik.",
    heroDescription: "İngilizce özel ders ile dünyaya açılın. Gramerden konuşmaya, İngilizce'yi akıcı kullanın.",
    importance: "İngilizce, küresel iletişimin anahtarıdır. Akademik kariyer, iş hayatı ve uluslararası fırsatlar için vazgeçilmezdir.",
    benefits: [
      "Birebir konuşma pratiği yapın",
      "Gramer kurallarını kavrayın",
      "Kelime haznenizi genişletin",
      "Okuma ve dinleme becerinizi geliştirin",
      "Sınav stratejileri öğrenin"
    ],
    curriculum: {
      ortaokul: {
        "5-sinif": [
          { title: "Temel İngilizce", description: "Başlangıç seviyesi", subtopics: ["Alfabe ve sesler", "Selamlaşma", "Sayılar-renkler", "Günlük ifadeler"] }
        ],
        "6-sinif": [
          { title: "Günlük İngilizce", description: "A1 seviyesi", subtopics: ["Simple Present", "There is/are", "Can/Can't", "Sıfatlar"] }
        ],
        "7-sinif": [
          { title: "Orta İngilizce", description: "A2 seviyesi", subtopics: ["Past Simple", "Future", "Comparatives", "Prepositions"] }
        ],
        "8-sinif": [
          { title: "İleri Temel", description: "A2+ seviyesi", subtopics: ["Present Perfect", "Modals", "Conditionals", "Passive Voice"] }
        ]
      },
      lise: {
        "9-sinif": [
          { title: "Grammar Foundations", description: "Temel gramer", subtopics: ["Tenses review", "Articles", "Pronouns", "Adjectives-Adverbs"] }
        ],
        "10-sinif": [
          { title: "Intermediate Grammar", description: "Orta gramer", subtopics: ["Perfect tenses", "Modals", "Conditionals", "Reported speech"] }
        ],
        "11-sinif": [
          { title: "Advanced Grammar", description: "İleri gramer", subtopics: ["Advanced tenses", "Inversion", "Cleft sentences", "Emphasis"] }
        ],
        "12-sinif": [
          { title: "Exam Preparation", description: "Sınav hazırlık", subtopics: ["Reading strategies", "Vocabulary", "Grammar review", "Practice tests"] }
        ]
      },
      tyt: [
        { title: "Grammar", description: "Dil bilgisi", subtopics: ["Tenses", "Modals", "Conditionals", "Clauses"] },
        { title: "Vocabulary", description: "Kelime bilgisi", subtopics: ["Word formation", "Collocations", "Idioms", "Phrasal verbs"] },
        { title: "Reading", description: "Okuma anlama", subtopics: ["Main idea", "Details", "Inference", "Vocabulary in context"] }
      ]
    },
    faq: [
      { question: "İngilizce özel ders etkili mi?", answer: "Evet, birebir ders konuşma pratiği ve kişiye özel program imkanı sunar." },
      { question: "Gramer mi konuşma mı önce?", answer: "İkisi birlikte yürütülmeli. Gramer kurallarını konuşma içinde pekiştirmek en etkili yöntemdir." },
      { question: "Kelime ezberinin kolay yolu var mı?", answer: "Bağlam içinde öğrenin, kelime kartları kullanın ve günlük pratik yapın." }
    ],
    examTips: [
      "Kelime ezberinde düzenli olun",
      "Günlük İngilizce dinleyin",
      "Gramer kurallarını bağlam içinde öğrenin",
      "Okuma hızınızı artırın"
    ]
  },
  felsefe: {
    slug: "felsefe",
    name: "Felsefe",
    seoTitle: "Felsefe Özel Ders | MatÖzel - Birebir Felsefe Eğitimi",
    seoDescription: "Felsefe özel dersi ile felsefi düşünce ve mantık konularını kavrayın. TYT felsefe hazırlık, dönem analizi ve soru çözümü.",
    heroDescription: "Felsefe özel ders ile düşünmenin sanatını öğrenin. Antik çağdan modern düşünceye, felsefenin izinde.",
    importance: "Felsefe, eleştirel düşünme ve sorgulama becerisini geliştirir. TYT sosyal bilimler testinde yer alır.",
    benefits: [
      "Eleştirel düşünme becerisi kazanın",
      "Felsefi akımları kavrayın",
      "Mantık sorularını çözün",
      "Filozofları ve görüşlerini öğrenin",
      "Yorum yapma becerinizi geliştirin"
    ],
    curriculum: {
      lise: {
        "10-sinif": [
          { title: "Felsefe Nedir", description: "Felsefeye giriş", subtopics: ["Felsefenin tanımı", "Felsefe-bilim ilişkisi", "Felsefi soru", "Felsefi düşünce"] },
          { title: "Bilgi Felsefesi", description: "Epistemoloji", subtopics: ["Bilgi nedir", "Bilgi türleri", "Doğruluk", "Akılcılık-deneycilik"] }
        ],
        "11-sinif": [
          { title: "Varlık Felsefesi", description: "Ontoloji", subtopics: ["Varlık nedir", "Varlık türleri", "İdealizm-materyalizm", "Varoluşçuluk"] },
          { title: "Ahlak Felsefesi", description: "Etik", subtopics: ["Ahlak nedir", "Etik teoriler", "Erdem etiği", "Ödev etiği"] }
        ],
        "12-sinif": [
          { title: "Siyaset Felsefesi", description: "Politik felsefe", subtopics: ["Devlet nedir", "Siyasi sistemler", "Adalet", "Özgürlük"] },
          { title: "Din Felsefesi", description: "Din üzerine düşünce", subtopics: ["Din nedir", "Tanrı kanıtlamaları", "Kötülük problemi", "Ateizm-teizm"] }
        ]
      },
      tyt: [
        { title: "Felsefenin Alanı", description: "Temel kavramlar", subtopics: ["Felsefe nedir", "Felsefi soru", "Felsefe-bilim", "Felsefe tarihi"] },
        { title: "Bilgi Felsefesi", description: "Epistemoloji", subtopics: ["Bilgi türleri", "Bilgi kuramları", "Doğruluk", "Akıl-deney"] },
        { title: "Mantık", description: "Mantık temelleri", subtopics: ["Önerme", "Çıkarım", "Akıl yürütme", "Mantık hataları"] },
        { title: "Ahlak ve Varlık", description: "Etik ve ontoloji", subtopics: ["Ahlak kavramı", "Etik teoriler", "Varlık sorusu", "Varlık görüşleri"] }
      ]
    },
    faq: [
      { question: "Felsefe ezber mi gerektirir?", answer: "Filozofları ve görüşlerini bilmek gerekir ama asıl önemli olan felsefi düşünmeyi kavramaktır." },
      { question: "Mantık soruları nasıl çözülür?", answer: "Önerme türlerini öğrenin, çıkarım kurallarını uygulayın ve bol pratik yapın." },
      { question: "Felsefe soruları zor mu?", answer: "Yorum gerektiren sorulardır. Felsefi kavramları anlarsanız kolaylaşır." }
    ],
    examTips: [
      "Filozofları ve görüşlerini eşleştirin",
      "Mantık kurallarını ezberleyin",
      "Felsefi kavramları tanımlayın",
      "Yorum sorularında dikkatli okuyun"
    ]
  },
  "din-kulturu": {
    slug: "din-kulturu",
    name: "Din Kültürü",
    seoTitle: "Din Kültürü Özel Ders | MatÖzel - Birebir Din Kültürü Eğitimi",
    seoDescription: "Din kültürü özel dersi ile İslam ve diğer dinler hakkında bilgi edinin. LGS-TYT din kültürü hazırlık.",
    heroDescription: "Din kültürü özel ders ile manevi değerleri ve ahlak ilkelerini öğrenin.",
    importance: "Din kültürü, manevi ve ahlaki değerleri kazandırır. LGS ve TYT'de sorulmaktadır.",
    benefits: [
      "Temel dini kavramları öğrenin",
      "Ahlaki değerleri kavrayın",
      "Dinler hakkında bilgi edinin",
      "Hoşgörü ve saygı ilkelerini benimseyin"
    ],
    curriculum: {
      ortaokul: {
        "8-sinif": [
          { title: "İslam Düşüncesi", description: "İslami kavramlar", subtopics: ["Kader ve kaza", "Din ve bilim", "İslam ve barış", "Ahlak ilkeleri"] }
        ]
      },
      lgs: [
        { title: "İnanç", description: "İman esasları", subtopics: ["İman esasları", "Kader-kaza", "Ahiret inancı", "Meleklere iman"] },
        { title: "İbadet", description: "İbadetler", subtopics: ["Namaz", "Oruç", "Zekat-sadaka", "Hac"] },
        { title: "Ahlak", description: "İslam ahlakı", subtopics: ["Güzel ahlak", "Sevgi-saygı", "Dürüstlük", "Yardımlaşma"] }
      ],
      tyt: [
        { title: "İslam ve İnanç", description: "İslami inanç", subtopics: ["Tevhit", "İman esasları", "İslam mezhepleri", "Tasavvuf"] },
        { title: "İslam ve Ahlak", description: "Ahlak ilkeleri", subtopics: ["İslam ahlakı", "Hz. Muhammed örneği", "Erdemler", "Aile ahlakı"] },
        { title: "Din ve Kültür", description: "Dini kültür", subtopics: ["Din ve sanat", "Din ve medeniyet", "Türk-İslam kültürü", "Günümüz sorunları"] }
      ]
    },
    faq: [
      { question: "Din kültürü nasıl çalışılır?", answer: "Kavramları anlayarak öğrenin, ayetleri ve hadisleri bağlamında değerlendirin." },
      { question: "Din kültürü soruları zor mu?", answer: "Temel kavramları bilirseniz kolaydır. Yorum soruları için dikkatli okuma gerekir." }
    ],
    examTips: [
      "Temel kavramları öğrenin",
      "Ayet ve hadis meallerini okuyun",
      "Güncel dini konuları takip edin"
    ]
  },
  yazilim: {
    slug: "yazilim",
    name: "Yazılım",
    seoTitle: "Yazılım Özel Ders | MatÖzel - Birebir Programlama Eğitimi",
    seoDescription: "Yazılım özel dersi ile programlama ve web geliştirme öğrenin. Python, JavaScript, React dersleri. Proje bazlı eğitim.",
    heroDescription: "Yazılım özel ders ile geleceğin mesleklerini şimdiden öğrenin. Kod yazmaktan uygulama geliştirmeye.",
    importance: "Yazılım, dijital çağın en değerli becerisidir. Programlama öğrenmek, problem çözme ve mantıksal düşünme yeteneğini geliştirir.",
    benefits: [
      "Sıfırdan programlama öğrenin",
      "Proje bazlı öğrenme ile uygulayın",
      "Popüler programlama dillerini keşfedin",
      "Web ve mobil uygulama geliştirin",
      "Portfolyo oluşturun"
    ],
    curriculum: {
      ortaokul: {
        "5-sinif": [
          { title: "Bilgisayar Temelleri", description: "Temel kavramlar", subtopics: ["Donanım-yazılım", "İşletim sistemleri", "Dosya yönetimi", "İnternet güvenliği"] }
        ],
        "6-sinif": [
          { title: "Blok Kodlama", description: "Görsel programlama", subtopics: ["Scratch temelleri", "Hareket komutları", "Koşul yapıları", "Döngüler"] }
        ],
        "7-sinif": [
          { title: "Algoritma Temelleri", description: "Problem çözme", subtopics: ["Algoritma nedir", "Akış diyagramları", "Sözde kod", "Problem analizi"] }
        ],
        "8-sinif": [
          { title: "Python Giriş", description: "Metin tabanlı programlama", subtopics: ["Python kurulum", "Değişkenler", "Veri tipleri", "Koşul ve döngüler"] }
        ]
      },
      lise: {
        "9-sinif": [
          { title: "Python Temelleri", description: "Python programlama", subtopics: ["Sözdizimi", "Veri yapıları", "Fonksiyonlar", "Modüller"] }
        ],
        "10-sinif": [
          { title: "Web Geliştirme", description: "Frontend temelleri", subtopics: ["HTML5", "CSS3", "JavaScript temelleri", "Responsive tasarım"] }
        ],
        "11-sinif": [
          { title: "İleri Web", description: "Frontend framework", subtopics: ["React.js", "Component yapısı", "State yönetimi", "API entegrasyonu"] }
        ],
        "12-sinif": [
          { title: "Full Stack", description: "Tam yığın geliştirme", subtopics: ["Node.js", "Veritabanı", "REST API", "Deployment"] }
        ]
      }
    },
    faq: [
      { question: "Yazılıma kaç yaşında başlanır?", answer: "5. sınıftan itibaren blok kodlama ile başlanabilir. 7-8. sınıfta metin tabanlı programlamaya geçilebilir." },
      { question: "Hangi dili öğrenmeliyim?", answer: "Başlangıç için Python idealdir. Sonra web için JavaScript, mobil için Swift veya Kotlin öğrenilebilir." },
      { question: "Yazılım öğrenmek zor mu?", answer: "Sabır ve pratikle herkes öğrenebilir. Proje bazlı öğrenme en etkili yöntemdir." }
    ],
    examTips: [
      "Her gün kod yazın",
      "Hata yapmaktan korkmayın",
      "Projeler geliştirin",
      "Açık kaynak topluluklarına katılın"
    ]
  },
  "tc-inkilap": {
    slug: "tc-inkilap",
    name: "T.C. İnkılap Tarihi",
    seoTitle: "T.C. İnkılap Tarihi Özel Ders | MatÖzel - Birebir İnkılap Tarihi Eğitimi",
    seoDescription: "T.C. İnkılap Tarihi özel dersi ile Milli Mücadele ve Atatürk ilkelerini kavrayın. LGS inkılap tarihi hazırlık.",
    heroDescription: "T.C. İnkılap Tarihi özel ders ile Cumhuriyetimizin kuruluş öyküsünü öğrenin. Atatürk ilke ve inkılapları.",
    importance: "T.C. İnkılap Tarihi, Cumhuriyetimizin kuruluşunu ve Atatürk'ün ilkelerini anlatır. LGS'de önemli bir yere sahiptir.",
    benefits: [
      "Milli Mücadele dönemini kavrayın",
      "Atatürk ilkelerini anlayın",
      "Cumhuriyet inkılaplarını öğrenin",
      "Kronolojik düşünme becerisi kazanın"
    ],
    curriculum: {
      ortaokul: {
        "8-sinif": [
          { title: "Milli Mücadele", description: "Kurtuluş Savaşı", subtopics: ["Mondros Mütarekesi", "Cemiyetler", "Kongreler", "TBMM'nin açılışı"] },
          { title: "Cepheler", description: "Kurtuluş savaşı cepheleri", subtopics: ["Doğu Cephesi", "Güney Cephesi", "Batı Cephesi", "Sakarya-Büyük Taarruz"] },
          { title: "Antlaşmalar", description: "Savaş sonrası", subtopics: ["Mudanya", "Lozan", "Saltanatın kaldırılması", "Cumhuriyetin ilanı"] },
          { title: "İnkılaplar", description: "Atatürk inkılapları", subtopics: ["Siyasi inkılaplar", "Hukuk inkılapları", "Eğitim-kültür", "Ekonomi"] },
          { title: "Atatürk İlkeleri", description: "Cumhuriyetçilik-Milliyetçilik", subtopics: ["Cumhuriyetçilik", "Milliyetçilik", "Halkçılık", "Laiklik", "Devletçilik", "İnkılapçılık"] }
        ]
      },
      lgs: [
        { title: "Bir Kahraman Doğuyor", description: "Atatürk'ün hayatı", subtopics: ["Doğum ve eğitim", "Askeri başarılar", "Siyasi yaşam", "Kişilik özellikleri"] },
        { title: "Milli Mücadele", description: "Bağımsızlık savaşı", subtopics: ["İşgaller", "Cemiyetler", "Kongreler", "Meclis"] },
        { title: "Cepheler", description: "Savaşlar", subtopics: ["Doğu", "Güney", "Batı", "Muharebeler"] },
        { title: "İnkılaplar", description: "Yenilikler", subtopics: ["Siyasi", "Toplumsal", "Hukuk", "Ekonomi"] },
        { title: "Atatürk İlkeleri", description: "Temel ilkeler", subtopics: ["Altı ilke", "Bütünleyici ilkeler", "Atatürkçü düşünce", "Güncellik"] }
      ]
    },
    faq: [
      { question: "İnkılap tarihi nasıl çalışılır?", answer: "Kronolojik sırayı kavrayın, neden-sonuç ilişkilerini anlayın ve harita üzerinde çalışın." },
      { question: "İnkılapları nasıl ezberlerim?", answer: "Gruplandırarak öğrenin (siyasi, hukuk, ekonomi vb.) ve birbirleriyle ilişkilendirin." },
      { question: "Atatürk ilkeleri neden önemli?", answer: "Cumhuriyetimizin temelini oluşturur ve günümüz Türkiye'sini anlamak için gereklidir." }
    ],
    examTips: [
      "Tarihleri ezberlemeye çalışmak yerine olayların sırasını kavrayın",
      "Neden-sonuç ilişkilerini anlayın",
      "Harita üzerinde çalışın",
      "Atatürk'ün sözlerini ve anlamlarını öğrenin"
    ]
  },
  "sosyal-bilgiler": {
    slug: "sosyal-bilgiler",
    name: "Sosyal Bilgiler",
    seoTitle: "Sosyal Bilgiler Özel Ders | MatÖzel - Birebir Sosyal Bilgiler Eğitimi",
    seoDescription: "Sosyal bilgiler özel dersi ile tarih, coğrafya ve vatandaşlık konularını kavrayın. Ortaokul sosyal bilgiler desteği.",
    heroDescription: "Sosyal bilgiler özel ders ile toplumu ve çevreyi anlayın. Tarih, coğrafya ve vatandaşlık bilgisi bir arada.",
    importance: "Sosyal bilgiler, tarih, coğrafya, ekonomi ve vatandaşlık konularını içerir. Toplumu anlama ve bilinçli vatandaş olma bilinci kazandırır.",
    benefits: [
      "Tarih bilginizi geliştirin",
      "Coğrafya kavramlarını öğrenin",
      "Vatandaşlık bilinci kazanın",
      "Harita okuma becerinizi artırın",
      "Güncel olayları takip edin"
    ],
    curriculum: {
      ortaokul: {
        "5-sinif": [
          { title: "Ben ve Ailem", description: "Birey ve toplum", subtopics: ["Aile kavramı", "Haklar ve sorumluluklar", "Kültürel değerler", "İletişim"] },
          { title: "Geçmişten Günümüze", description: "Tarih bilinci", subtopics: ["Tarih nedir", "Zaman kavramı", "Geçmişin izleri", "Kültürel miras"] }
        ],
        "6-sinif": [
          { title: "Uygarlıklar", description: "Dünya tarihi", subtopics: ["İlk uygarlıklar", "Orta Çağ", "Keşifler", "Sanayi Devrimi"] },
          { title: "Türk Tarihi", description: "Türk devletleri", subtopics: ["İlk Türk devletleri", "İslamiyet sonrası", "Selçuklular", "Osmanlı başlangıcı"] }
        ],
        "7-sinif": [
          { title: "Osmanlı Tarihi", description: "Osmanlı dönemi", subtopics: ["Kuruluş", "Yükseliş", "Duraklama", "Gerileme"] },
          { title: "Ülkemiz ve Dünya", description: "Coğrafi kavramlar", subtopics: ["Türkiye'nin konumu", "İklim", "Nüfus", "Ekonomi"] }
        ]
      }
    },
    faq: [
      { question: "Sosyal bilgiler nasıl çalışılır?", answer: "Harita üzerinde çalışın, kronolojik sırayı kavrayın ve güncel olaylarla bağlantı kurun." },
      { question: "Tarih ve coğrafya birlikte nasıl öğrenilir?", answer: "Olayların geçtiği yerleri haritada göstererek tarih ve coğrafyayı birleştirin." }
    ],
    examTips: [
      "Harita çalışması yapın",
      "Kronolojik sırayı kavrayın",
      "Neden-sonuç ilişkilerini anlayın",
      "Güncel olayları takip edin"
    ]
  }
};

// Ders için müfredat getir
export function getCurriculumBySubject(subjectSlug: string): SubjectCurriculum | undefined {
  return subjectCurriculums[subjectSlug];
}

// Sınıf bazlı müfredat getir
export function getCurriculumByGrade(subjectSlug: string, gradeSlug: string): CurriculumTopic[] | undefined {
  const curriculum = subjectCurriculums[subjectSlug];
  if (!curriculum) return undefined;
  
  const gradeNumber = parseInt(gradeSlug.replace("-sinif", ""));
  
  if (gradeNumber >= 5 && gradeNumber <= 8) {
    return curriculum.curriculum.ortaokul?.[gradeSlug];
  } else if (gradeNumber >= 9 && gradeNumber <= 12) {
    return curriculum.curriculum.lise?.[gradeSlug];
  }
  
  return undefined;
}

// Sınav bazlı müfredat getir
export function getCurriculumByExam(subjectSlug: string, examSlug: string): CurriculumTopic[] | undefined {
  const curriculum = subjectCurriculums[subjectSlug];
  if (!curriculum) return undefined;
  
  return curriculum.curriculum[examSlug as 'lgs' | 'tyt' | 'ayt'];
}
