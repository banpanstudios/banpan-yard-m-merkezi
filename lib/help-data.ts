import {
  UserCircle,
  ShieldCheck,
  CreditCard,
  Cloud,
  Wallet,
  Mail,
  ShoppingBag,
  Wrench,
  Smartphone,
  Lock,
  RotateCcw,
  Building2,
  Briefcase,
  Scale,
  Accessibility,
  Users,
  Code2,
  Truck,
  type LucideIcon,
} from "lucide-react"

export type Article = {
  slug: string
  title: string
  summary: string
  readTime: string
  updated: string
  content: {
    heading?: string
    body: string
    steps?: string[]
  }[]
  faq?: { q: string; a: string }[]
}

export type Category = {
  slug: string
  name: string
  shortName: string
  description: string
  icon: LucideIcon
  color: "primary" | "accent" | "neutral"
  group: "main" | "other"
  articles: Article[]
}

export const categories: Category[] = [
  {
    slug: "hesabim",
    name: "Hesabım",
    shortName: "Hesap",
    description: "Oturum açma, profil bilgileri, şifre ve hesap kurtarma işlemleri",
    icon: UserCircle,
    color: "primary",
    group: "main",
    articles: [
      {
        slug: "banpan-hesabi-olusturma",
        title: "BANPAN Hesabı nasıl oluşturulur?",
        summary: "Yeni bir BANPAN Hesabı oluşturmak için izlemeniz gereken adımlar.",
        readTime: "3 dk",
        updated: "2 Ağustos 2026",
        content: [
          {
            body:
              "BANPAN Hesabı; BANPAN Cloud, BANPAN Pay, BANPAN Mail ve diğer tüm BANPAN hizmetlerine tek bir kimlikle erişmenizi sağlar. Hesabınızı web üzerinden veya mobil uygulama üzerinden birkaç dakika içinde oluşturabilirsiniz.",
          },
          {
            heading: "Hesap oluşturma adımları",
            body: "Aşağıdaki adımları takip ederek yeni bir hesap açabilirsiniz:",
            steps: [
              "accounts.banpansoftware..com/hesap adresine gidin ve “Hesap Oluştur” seçeneğine tıklayın",
              "Ad, soyad ve doğum tarihi bilgilerinizi girin",
              "Geçerli bir e-posta adresi veya telefon numarası girin",
              "Güçlü bir şifre belirleyin (en az 10 karakter, büyük/küçük harf ve rakam içermeli)",
              "E-posta veya SMS ile gönderilen doğrulama kodunu girerek hesabınızı onaylayın",
            ],
          },
          {
            heading: "Kurumsal hesaplar",
            body:
              "Şirketiniz için toplu hesap oluşturmak istiyorsanız BANPAN Workspace yönetim panelini kullanarak birden fazla kullanıcıyı tek seferde davet edebilirsiniz.",
          },
        ],
        faq: [
          {
            q: "Aynı e-posta ile birden fazla hesap açabilir miyim?",
            a: "Hayır, her e-posta adresi veya telefon numarası yalnızca bir BANPAN Hesabı ile ilişkilendirilebilir.",
          },
          {
            q: "18 yaşından küçükler hesap açabilir mi?",
            a: "13 yaş ve üzeri kullanıcılar bir ebeveyn onayı ile aile bağlantılı hesap açabilir.",
          },
        ],
      },
      {
        slug: "sifre-sifirlama",
        title: "Şifremi unuttum, nasıl sıfırlarım?",
        summary: "Unutulan şifreleri güvenli bir şekilde sıfırlama adımları.",
        readTime: "2 dk",
        updated: "30 Temmuz 2026",
        content: [
          {
            body: "Şifrenizi hatırlamıyorsanız birkaç adımda güvenli bir şekilde yeni bir şifre belirleyebilirsiniz.",
          },
          {
            heading: "Adımlar",
            body: "",
            steps: [
              "Giriş ekranında “Şifremi unuttum” bağlantısına tıklayın",
              "Hesabınıza kayıtlı e-posta veya telefon numarasını girin",
              "Size gönderilen tek kullanımlık kodu girin",
              "Yeni şifrenizi oluşturun ve onaylayın",
            ],
          },
          {
            heading: "Kod gelmiyorsa",
            body:
              "Spam/gereksiz klasörünüzü kontrol edin, telefon numaranızın güncel olduğundan emin olun ve 10 dakika içinde kod gelmezse yeniden gönder seçeneğini kullanın.",
          },
        ],
      },
      {
        slug: "iki-adimli-dogrulama",
        title: "İki adımlı doğrulamayı etkinleştirme",
        summary: "Hesabınızı ekstra bir güvenlik katmanıyla koruyun.",
        readTime: "4 dk",
        updated: "15 Temmuz 2026",
        content: [
          {
            body:
              "İki adımlı doğrulama (2FA), şifrenize ek olarak telefonunuza gelen bir kod veya kimlik doğrulama uygulaması ile giriş yapmanızı gerektirir. Bu, hesabınızın izinsiz erişime karşı korunmasını önemli ölçüde güçlendirir.",
          },
          {
            heading: "Etkinleştirme adımları",
            body: "",
            steps: [
              "Hesap Ayarları > Güvenlik bölümüne gidin",
              "“İki Adımlı Doğrulama” seçeneğini açın",
              "SMS, e-posta veya kimlik doğrulama uygulaması (Authenticator) yöntemini seçin",
              "Yedek kodlarınızı güvenli bir yerde saklayın",
            ],
          },
        ],
      },
      {
        slug: "profil-bilgilerini-guncelleme",
        title: "Profil bilgilerini güncelleme",
        summary: "Ad, fotoğraf, telefon numarası ve dil tercihlerini değiştirme.",
        readTime: "2 dk",
        updated: "22 Haziran 2026",
        content: [
          {
            body:
              "Profil bilgilerinizi Hesap Ayarları sayfasından güncelleyebilirsiniz. Ad, profil fotoğrafı, telefon numarası, dil ve bölge tercihleri bu bölümden yönetilir.",
          },
          {
            heading: "Nasıl değiştirilir",
            body: "",
            steps: [
              "Sağ üstteki profil simgesine tıklayın ve “Hesabımı Yönet”i seçin",
              "Değiştirmek istediğiniz alanın yanındaki kalem simgesine tıklayın",
              "Yeni bilgiyi girin ve “Kaydet”e tıklayın",
            ],
          },
        ],
      },
      {
        slug: "hesap-silme",
        title: "BANPAN Hesabını kapatma",
        summary: "Hesabınızı ve ilişkili verilerinizi kalıcı olarak silme.",
        readTime: "5 dk",
        updated: "1 Ağustos 2026",
        content: [
          {
            body:
              "Hesabınızı kapatmadan önce verilerinizi indirmenizi öneririz. Hesap kapatma işlemi geri alınamaz ve tüm BANPAN hizmetlerine erişiminizi sonlandırır.",
          },
          {
            heading: "Dikkat edilmesi gerekenler",
            body:
              "Aktif aboneliklerinizi önce iptal edin. Kapatma talebinden sonra hesabınız 30 gün içinde kalıcı olarak silinir; bu süre içinde giriş yaparak işlemi iptal edebilirsiniz.",
          },
        ],
      },
    ],
  },
  {
    slug: "destek",
    name: "Destek Talepleri",
    shortName: "Destek",
    description: "Canlı destek, destek bileti oluşturma ve talep takibi",
    icon: Wrench,
    color: "accent",
    group: "main",
    articles: [
      {
        slug: "destek-talebi-olusturma",
        title: "Destek talebi (ticket) nasıl oluşturulur?",
        summary: "Sorununuz için bir destek talebi açmanın en hızlı yolu.",
        readTime: "3 dk",
        updated: "3 Ağustos 2026",
        content: [
          {
            body:
              "BANPAN Destek Merkezi üzerinden 7/24 destek talebi oluşturabilirsiniz. Talebinizi doğru kategoriye yönlendirmek çözüm süresini kısaltır.",
          },
          {
            heading: "Adımlar",
            body: "",
            steps: [
              "destek.banpan.com adresine giriş yapın",
              "“Yeni Talep Oluştur” butonuna tıklayın",
              "Ürün/hizmet kategorisini seçin ve sorununuzu detaylı açıklayın",
              "Varsa ekran görüntüsü veya belge ekleyin",
              "Talebi gönderin; size bir takip numarası verilecektir",
            ],
          },
        ],
      },
      {
        slug: "canli-destek",
        title: "Canlı destek ile nasıl görüşürüm?",
        summary: "Anlık yardım için canlı sohbet ve telefon destek hatları.",
        readTime: "2 dk",
        updated: "28 Temmuz 2026",
        content: [
          {
            body:
              "Canlı destek hattımız hafta içi 08:00-24:00, hafta sonu 09:00-21:00 saatleri arasında hizmet vermektedir. Premium ve Kurumsal plan kullanıcıları için 7/24 öncelikli destek mevcuttur.",
          },
          {
            heading: "Erişim yolları",
            body: "",
            steps: [
              "Web sitesinde sağ alttaki sohbet simgesine tıklayın",
              "Mobil uygulamada Destek > Canlı Sohbet bölümünü açın",
              "444 0 BAN (444 0 226) numaralı hattı arayın",
            ],
          },
        ],
      },
      {
        slug: "talep-durumu-takibi",
        title: "Destek talebimin durumunu nasıl takip ederim?",
        summary: "Açık taleplerinizin güncel durumunu görüntüleme.",
        readTime: "1 dk",
        updated: "10 Temmuz 2026",
        content: [
          {
            body:
              "Tüm destek taleplerinizi “Taleplerim” panelinden takip edebilir, temsilcilerimizle yazışma geçmişinizi görüntüleyebilir ve ek bilgi talep edildiğinde bildirim alabilirsiniz.",
          },
        ],
      },
      {
        slug: "yanit-sureleri",
        title: "Ortalama yanıt ve çözüm süreleri",
        summary: "Plan türüne göre destek yanıt süresi hedeflerimiz.",
        readTime: "2 dk",
        updated: "5 Haziran 2026",
        content: [
          {
            body:
              "Standart plan kullanıcıları için ilk yanıt hedefimiz 24 saattir. Premium kullanıcılar için 4 saat, Kurumsal müşteriler için ise 1 saattir. Kritik sistem kesintilerinde öncelikli müdahale ekibimiz devreye girer.",
          },
        ],
      },
    ],
  },
  {
    slug: "faturalandirma",
    name: "Faturalandırma ve Ödemeler",
    shortName: "Faturalandırma",
    description: "Abonelikler, faturalar, ödeme yöntemleri ve iadeler",
    icon: CreditCard,
    color: "primary",
    group: "main",
    articles: [
      {
        slug: "odeme-yontemi-ekleme",
        title: "Ödeme yöntemi ekleme veya güncelleme",
        summary: "Kredi kartı, banka kartı veya BANPAN Pay bakiyesi ekleyin.",
        readTime: "2 dk",
        updated: "1 Ağustos 2026",
        content: [
          {
            body: "Hesap > Ödeme Yöntemleri bölümünden istediğiniz zaman yeni bir ödeme yöntemi ekleyebilir veya mevcut olanı güncelleyebilirsiniz.",
          },
          {
            heading: "Desteklenen ödeme yöntemleri",
            body: "Kredi/banka kartları, BANPAN Pay bakiyesi, havale/EFT ve seçili ülkelerde dijital cüzdanlar (Apple Pay, Google Pay) desteklenir.",
          },
        ],
      },
      {
        slug: "fatura-gecmisi",
        title: "Fatura geçmişimi nereden görebilirim?",
        summary: "Geçmiş faturaları görüntüleme ve PDF olarak indirme.",
        readTime: "1 dk",
        updated: "20 Temmuz 2026",
        content: [
          {
            body: "Hesap > Faturalandırma > Fatura Geçmişi bölümünden son 24 aya ait tüm faturalarınızı görüntüleyebilir ve indirebilirsiniz.",
          },
        ],
      },
      {
        slug: "abonelik-iptali",
        title: "Aboneliğimi nasıl iptal ederim?",
        summary: "Aboneliğinizi iptal etme ve otomatik yenilemeyi kapatma.",
        readTime: "2 dk",
        updated: "18 Temmuz 2026",
        content: [
          {
            body: "Aboneliğinizi iptal ettiğinizde, mevcut fatura döneminin sonuna kadar hizmetten yararlanmaya devam edersiniz.",
          },
          {
            heading: "Adımlar",
            body: "",
            steps: [
              "Hesap > Abonelikler bölümüne gidin",
              "İptal etmek istediğiniz aboneliği seçin",
              "“Aboneliği İptal Et” butonuna tıklayın ve nedeni belirtin",
            ],
          },
        ],
      },
      {
        slug: "para-iade-talebi",
        title: "Para iade talebi nasıl oluşturulur?",
        summary: "Uygun ödemeler için iade sürecini başlatma.",
        readTime: "3 dk",
        updated: "12 Temmuz 2026",
        content: [
          {
            body:
              "Satın alma tarihinden itibaren 14 gün içinde, kullanılmamış dijital ürünler ve hizmetler için iade talebinde bulunabilirsiniz. İade onaylandığında ödeme 5-10 iş günü içinde hesabınıza yansır.",
          },
        ],
      },
      {
        slug: "cift-odeme",
        title: "Yanlışlıkla iki kez ödeme yaptım, ne yapmalıyım?",
        summary: "Mükerrer ödemelerin tespiti ve iade süreci.",
        readTime: "2 dk",
        updated: "8 Temmuz 2026",
        content: [
          {
            body:
              "Mükerrer ödemeler genellikle otomatik olarak tespit edilip 3 iş günü içinde iade edilir. Eğer 3 iş günü sonunda iade görünmüyorsa, fatura numaranızla birlikte destek talebi oluşturun.",
          },
        ],
      },
    ],
  },
  {
    slug: "guvenlik-gizlilik",
    name: "Güvenlik ve Gizlilik",
    shortName: "Güvenlik",
    description: "Hesap güvenliği, veri gizliliği ve şüpheli etkinlikler",
    icon: ShieldCheck,
    color: "accent",
    group: "main",
    articles: [
      {
        slug: "supheli-etkinlik",
        title: "Hesabımda şüpheli bir etkinlik fark ettim",
        summary: "Yetkisiz erişim şüphesinde izlemeniz gereken adımlar.",
        readTime: "3 dk",
        updated: "2 Ağustos 2026",
        content: [
          {
            body: "Hesabınızda tanımadığınız bir oturum veya işlem görürseniz derhal aşağıdaki adımları uygulayın.",
          },
          {
            heading: "Acil adımlar",
            body: "",
            steps: [
              "Hesap > Güvenlik > Oturumlar bölümünden tüm aktif oturumları sonlandırın",
              "Şifrenizi hemen değiştirin",
              "İki adımlı doğrulamayı etkinleştirin",
              "“Şüpheli Etkinlik Bildir” formunu doldurun",
            ],
          },
        ],
      },
      {
        slug: "veri-indirme",
        title: "Verilerimin bir kopyasını nasıl indirebilirim?",
        summary: "BANPAN Takeout ile verilerinizi dışa aktarma.",
        readTime: "2 dk",
        updated: "25 Temmuz 2026",
        content: [
          {
            body:
              "BANPAN Takeout aracı ile hesabınıza ait e-postalar, dosyalar, fotoğraflar ve ayarlar dahil tüm verilerinizin bir kopyasını arşiv olarak indirebilirsiniz.",
          },
        ],
      },
      {
        slug: "gizlilik-kontrolleri",
        title: "Gizlilik kontrol panelini kullanma",
        summary: "Hangi verilerin toplandığını görün ve yönetin.",
        readTime: "4 dk",
        updated: "19 Temmuz 2026",
        content: [
          {
            body:
              "Gizlilik Kontrol Paneli, konum geçmişi, reklam kişiselleştirmesi ve etkinlik kaydı gibi ayarları tek bir yerden yönetmenizi sağlar.",
          },
        ],
      },
      {
        slug: "kimlik-avi-bildirimi",
        title: "Kimlik avı (phishing) e-postasını bildirme",
        summary: "Sahte BANPAN e-postalarını tanıma ve bildirme.",
        readTime: "3 dk",
        updated: "14 Temmuz 2026",
        content: [
          {
            body:
              "BANPAN hiçbir zaman e-posta yoluyla şifrenizi sormaz. Şüpheli bir e-posta aldığınızda linke tıklamayın ve report-phishing@banpan.com adresine iletin.",
          },
        ],
      },
    ],
  },
  {
    slug: "banpan-cloud",
    name: "BANPAN Cloud",
    shortName: "Cloud",
    description: "Depolama, dosya paylaşımı ve senkronizasyon",
    icon: Cloud,
    color: "primary",
    group: "main",
    articles: [
      {
        slug: "depolama-alani-artirma",
        title: "Depolama alanımı nasıl artırabilirim?",
        summary: "Ek depolama planına yükseltme ve fiyatlandırma.",
        readTime: "2 dk",
        updated: "30 Temmuz 2026",
        content: [
          {
            body: "Ücretsiz plan 15 GB depolama alanı sunar. Daha fazla alana ihtiyacınız varsa BANPAN Cloud+ planlarına yükseltebilirsiniz.",
          },
        ],
      },
      {
        slug: "dosya-paylasimi",
        title: "Dosya ve klasör paylaşımı",
        summary: "Bağlantı ile paylaşma ve izin ayarları.",
        readTime: "3 dk",
        updated: "22 Temmuz 2026",
        content: [
          {
            body: "Herhangi bir dosyaya sağ tıklayıp “Paylaş” seçeneğini kullanarak görüntüleyici, yorumcu veya düzenleyici izinleri atayabilirsiniz.",
          },
        ],
      },
      {
        slug: "senkronizasyon-sorunlari",
        title: "Dosyalarım senkronize olmuyor",
        summary: "Senkronizasyon sorunlarını giderme adımları.",
        readTime: "4 dk",
        updated: "16 Temmuz 2026",
        content: [
          {
            body: "Senkronizasyon sorunları genellikle internet bağlantısı, uygulama sürümü veya depolama kotası ile ilgilidir.",
          },
          {
            heading: "Sorun giderme",
            body: "",
            steps: [
              "İnternet bağlantınızı kontrol edin",
              "Uygulamayı en son sürüme güncelleyin",
              "Depolama kotanızın dolup dolmadığını kontrol edin",
              "Uygulamayı yeniden başlatın",
            ],
          },
        ],
      },
    ],
  },
  {
    slug: "banpan-pay",
    name: "BANPAN Pay",
    shortName: "Pay",
    description: "Dijital cüzdan, para transferi ve kart işlemleri",
    icon: Wallet,
    color: "accent",
    group: "main",
    articles: [
      {
        slug: "cuzdan-para-yukleme",
        title: "BANPAN Pay cüzdanına nasıl para yüklerim?",
        summary: "Banka hesabından veya kartla bakiye yükleme.",
        readTime: "2 dk",
        updated: "27 Temmuz 2026",
        content: [
          { body: "Cüzdanınıza banka hesabı, kredi kartı veya banka kartı ile anında bakiye yükleyebilirsiniz." },
        ],
      },
      {
        slug: "para-gonderme",
        title: "Başka bir kullanıcıya para gönderme",
        summary: "Telefon numarası veya kullanıcı adı ile anlık transfer.",
        readTime: "2 dk",
        updated: "17 Temmuz 2026",
        content: [
          { body: "Alıcının telefon numarasını, e-postasını veya BANPAN kullanıcı adını girerek anında ve komisyonsuz transfer yapabilirsiniz." },
        ],
      },
      {
        slug: "islem-itiraz",
        title: "Tanımadığım bir işlemi nasıl itiraz ederim?",
        summary: "İşlem itirazı süreci ve gerekli belgeler.",
        readTime: "3 dk",
        updated: "9 Temmuz 2026",
        content: [
          { body: "İşlem geçmişinizde tanımadığınız bir hareket görürseniz, ilgili işlemin üzerine tıklayıp “İtiraz Et” seçeneğini kullanın." },
        ],
      },
    ],
  },
  {
    slug: "banpan-mail",
    name: "BANPAN Mail",
    shortName: "Mail",
    description: "E-posta ayarları, filtreler ve spam yönetimi",
    icon: Mail,
    color: "primary",
    group: "main",
    articles: [
      {
        slug: "spam-yonetimi",
        title: "İstenmeyen (spam) e-postaları yönetme",
        summary: "Spam filtrelerini ayarlama ve yanlış işaretlenen e-postaları kurtarma.",
        readTime: "2 dk",
        updated: "24 Temmuz 2026",
        content: [
          { body: "Spam klasörüne düşen e-postaları 30 gün içinde kurtarabilirsiniz. Belirli göndericileri her zaman güvenli listesine ekleyebilirsiniz." },
        ],
      },
      {
        slug: "otomatik-yanit",
        title: "Otomatik yanıt (tatil mesajı) ayarlama",
        summary: "Tatildeyken otomatik yanıt gönderme.",
        readTime: "1 dk",
        updated: "11 Temmuz 2026",
        content: [
          { body: "Ayarlar > Otomatik Yanıt bölümünden başlangıç ve bitiş tarihlerini belirleyerek otomatik yanıt mesajınızı oluşturabilirsiniz." },
        ],
      },
      {
        slug: "posta-kutusu-alani",
        title: "Posta kutum doluyor, ne yapmalıyım?",
        summary: "Depolama alanını boşaltma yöntemleri.",
        readTime: "2 dk",
        updated: "3 Temmuz 2026",
        content: [
          { body: "Büyük ekleri olan e-postaları silerek veya arşivleyerek, ayrıca gereksiz/spam klasörlerini boşaltarak yer açabilirsiniz." },
        ],
      },
    ],
  },
  {
    slug: "banpan-store",
    name: "BANPAN Store",
    shortName: "Mağaza",
    description: "Uygulama, dijital içerik satın alma ve sipariş sorunları",
    icon: ShoppingBag,
    color: "accent",
    group: "main",
    articles: [
      {
        slug: "siparis-durumu",
        title: "Siparişimin durumunu nasıl görürüm?",
        summary: "Sipariş takibi ve kargo bilgileri.",
        readTime: "2 dk",
        updated: "29 Temmuz 2026",
        content: [
          { body: "Siparişlerim sayfasından tüm siparişlerinizin anlık durumunu ve kargo takip numarasını görebilirsiniz." },
        ],
      },
      {
        slug: "uygulama-satin-alma-sorunu",
        title: "Uygulama satın alırken hata alıyorum",
        summary: "Yaygın satın alma hataları ve çözümleri.",
        readTime: "3 dk",
        updated: "21 Temmuz 2026",
        content: [
          { body: "Ödeme yönteminizin geçerli olduğundan, bölge ayarlarınızın doğru olduğundan ve yeterli bakiyenizin bulunduğundan emin olun." },
        ],
      },
    ],
  },
  {
    slug: "teknik-destek",
    name: "Teknik Sorun Giderme",
    shortName: "Teknik",
    description: "Uygulama hataları, performans ve bağlantı sorunları",
    icon: Smartphone,
    color: "primary",
    group: "main",
    articles: [
      {
        slug: "uygulama-donmasi",
        title: "Uygulama açılmıyor veya donuyor",
        summary: "Uygulama çökme sorunlarını giderme.",
        readTime: "3 dk",
        updated: "26 Temmuz 2026",
        content: [
          {
            body: "",
            steps: [
              "Uygulamayı kapatıp yeniden açın",
              "Cihazınızı yeniden başlatın",
              "Uygulamayı güncelleyin veya yeniden yükleyin",
              "Depolama alanınızda yeterli boş yer olduğundan emin olun",
            ],
          },
        ],
      },
      {
        slug: "yavaş-internet-baglantisi",
        title: "BANPAN hizmetleri yavaş çalışıyor",
        summary: "Bağlantı hızını test etme ve iyileştirme.",
        readTime: "3 dk",
        updated: "13 Temmuz 2026",
        content: [
          { body: "Öncelikle banpan.com/status adresinden bir sistem kesintisi olup olmadığını kontrol edin, ardından ağ bağlantınızı test edin." },
        ],
      },
    ],
  },
  {
    slug: "gizlilik-politikasi",
    name: "Gizlilik ve Veri Politikaları",
    shortName: "Gizlilik Politikası",
    description: "Yasal gizlilik politikaları, çerezler ve veri saklama",
    icon: Lock,
    color: "neutral",
    group: "other",
    articles: [
      {
        slug: "cerez-politikasi",
        title: "Çerez Politikamız",
        summary: "BANPAN'ın çerezleri nasıl kullandığına dair açıklama.",
        readTime: "5 dk",
        updated: "1 Haziran 2026",
        content: [
          { body: "BANPAN, hizmetlerini iyileştirmek, güvenliği sağlamak ve kişiselleştirilmiş içerik sunmak için çerezler ve benzer teknolojiler kullanır." },
        ],
      },
      {
        slug: "veri-saklama-suresi",
        title: "Verilerim ne kadar süreyle saklanır?",
        summary: "Veri saklama politikaları ve silme talepleri.",
        readTime: "4 dk",
        updated: "20 Mayıs 2026",
        content: [
          { body: "Hesap verileriniz, hesabınız aktif olduğu sürece saklanır. Hesap kapatıldıktan sonra veriler 30 gün içinde kalıcı olarak silinir." },
        ],
      },
    ],
  },
  {
    slug: "iade-garanti",
    name: "İade, Garanti ve Değişim",
    shortName: "İade & Garanti",
    description: "Ürün garantisi, değişim ve iade koşulları",
    icon: RotateCcw,
    color: "neutral",
    group: "other",
    articles: [
      {
        slug: "urun-garanti-kosullari",
        title: "BANPAN donanım ürünleri garanti koşulları",
        summary: "Standart garanti süresi ve kapsamı.",
        readTime: "3 dk",
        updated: "10 Haziran 2026",
        content: [
          { body: "Tüm BANPAN donanım ürünleri 2 yıl üretici garantisi kapsamındadır. Garanti, üretim kaynaklı arızaları kapsar." },
        ],
      },
      {
        slug: "urun-degisim-sureci",
        title: "Arızalı ürünümü nasıl değiştirebilirim?",
        summary: "Değişim talebi oluşturma ve kargo süreci.",
        readTime: "3 dk",
        updated: "2 Haziran 2026",
        content: [
          { body: "Garanti kapsamındaki arızalı ürünler için değişim talebi oluşturduğunuzda, ücretsiz kargo etiketi e-posta adresinize gönderilir." },
        ],
      },
    ],
  },
  {
    slug: "kurumsal",
    name: "Kurumsal ve İş Ortaklığı",
    shortName: "Kurumsal",
    description: "BANPAN Workspace, bayilik ve iş ortaklığı başvuruları",
    icon: Building2,
    color: "neutral",
    group: "other",
    articles: [
      {
        slug: "workspace-kurulumu",
        title: "BANPAN Workspace kurumsal hesap kurulumu",
        summary: "Şirketiniz için kurumsal alan adı doğrulama ve kurulum.",
        readTime: "5 dk",
        updated: "8 Haziran 2026",
        content: [
          { body: "Kurumsal hesap oluşturmak için önce şirket alan adınızı doğrulamanız, ardından kullanıcı lisanslarını atamanız gerekir." },
        ],
      },
      {
        slug: "is-ortakligi-basvuru",
        title: "İş ortaklığı ve bayilik başvurusu nasıl yapılır?",
        summary: "BANPAN Partner Programına katılım süreci.",
        readTime: "3 dk",
        updated: "30 Mayıs 2026",
        content: [
          { body: "partners.banpan.com adresinden başvuru formunu doldurarak BANPAN Partner Programına katılım başvurusunda bulunabilirsiniz." },
        ],
      },
    ],
  },
  {
    slug: "kariyer",
    name: "Kariyer ve İK Desteği",
    shortName: "Kariyer",
    description: "Başvuru süreci, işe alım ve çalışan portalı desteği",
    icon: Briefcase,
    color: "neutral",
    group: "other",
    articles: [
      {
        slug: "basvuru-durumu-sorgulama",
        title: "İş başvurumun durumunu nasıl öğrenirim?",
        summary: "Aday portalından başvuru takibi.",
        readTime: "2 dk",
        updated: "5 Mayıs 2026",
        content: [
          { body: "Kariyer portalında oluşturduğunuz aday hesabından tüm başvurularınızın güncel durumunu görüntüleyebilirsiniz." },
        ],
      },
      {
        slug: "calisan-portali-erisimi",
        title: "Çalışan portalına giriş yapamıyorum",
        summary: "BANPAN çalışanları için portal erişim sorunları.",
        readTime: "2 dk",
        updated: "28 Nisan 2026",
        content: [
          { body: "Çalışan portalı, kurumsal BANPAN Hesabınızla giriş gerektirir. Sorun yaşıyorsanız İK Destek Hattı ile iletişime geçin." },
        ],
      },
    ],
  },
  {
    slug: "yasal",
    name: "Yasal ve Kullanım Şartları",
    shortName: "Yasal",
    description: "Kullanım koşulları, telif hakkı ve fikri mülkiyet bildirimleri",
    icon: Scale,
    color: "neutral",
    group: "other",
    articles: [
      {
        slug: "kullanim-sartlari-ozet",
        title: "Kullanım Şartlarımızın özeti",
        summary: "BANPAN hizmetlerini kullanırken kabul ettiğiniz temel koşullar.",
        readTime: "6 dk",
        updated: "15 Mayıs 2026",
        content: [
          { body: "Kullanım Şartları, BANPAN hizmetlerinden yararlanırken uymanız gereken kuralları ve haklarınızı açıklar." },
        ],
      },
      {
        slug: "telif-hakki-ihlali-bildirimi",
        title: "Telif hakkı ihlali bildirimi nasıl yapılır?",
        summary: "DMCA ve telif hakkı şikayet süreci.",
        readTime: "4 dk",
        updated: "9 Mayıs 2026",
        content: [
          { body: "Telif hakkınızın ihlal edildiğini düşünüyorsanız copyright@banpan.com adresine resmi bildirim formunu doldurarak iletebilirsiniz." },
        ],
      },
    ],
  },
  {
    slug: "erisilebilirlik",
    name: "Erişilebilirlik",
    shortName: "Erişilebilirlik",
    description: "Ekran okuyucu desteği ve erişilebilirlik özellikleri",
    icon: Accessibility,
    color: "neutral",
    group: "other",
    articles: [
      {
        slug: "ekran-okuyucu-uyumlulugu",
        title: "BANPAN hizmetleri ekran okuyucularla uyumlu mu?",
        summary: "Desteklenen ekran okuyucular ve klavye kısayolları.",
        readTime: "3 dk",
        updated: "12 Mayıs 2026",
        content: [
          { body: "Tüm BANPAN web hizmetleri WCAG 2.1 AA standartlarına uygun olarak tasarlanmıştır ve NVDA, JAWS ile VoiceOver ile test edilmiştir." },
        ],
      },
    ],
  },
  {
    slug: "topluluk",
    name: "Topluluk Forumu",
    shortName: "Topluluk",
    description: "Diğer kullanıcılarla bağlantı kurun ve deneyim paylaşın",
    icon: Users,
    color: "neutral",
    group: "other",
    articles: [
      {
        slug: "foruma-katilim",
        title: "BANPAN Topluluk Forumuna nasıl katılırım?",
        summary: "Forum üyeliği ve katkı kuralları.",
        readTime: "2 dk",
        updated: "18 Nisan 2026",
        content: [
          { body: "community.banpan.com adresinden BANPAN Hesabınızla giriş yaparak forumlara katılabilir, soru sorabilir ve diğer kullanıcılara yardımcı olabilirsiniz." },
        ],
      },
    ],
  },
  {
    slug: "gelistirici",
    name: "Geliştirici ve API Desteği",
    shortName: "Geliştirici",
    description: "API anahtarları, dokümantasyon ve entegrasyon sorunları",
    icon: Code2,
    color: "neutral",
    group: "other",
    articles: [
      {
        slug: "api-anahtari-olusturma",
        title: "API anahtarı nasıl oluşturulur?",
        summary: "Geliştirici konsolunda yeni bir API anahtarı oluşturma.",
        readTime: "3 dk",
        updated: "22 Mayıs 2026",
        content: [
          { body: "developers.banpan.com konsoluna giriş yaparak yeni bir proje oluşturun ve “Kimlik Bilgileri” sekmesinden API anahtarınızı üretin." },
        ],
      },
      {
        slug: "api-oran-siniri",
        title: "API istek oran sınırlarım nedir?",
        summary: "Plan bazlı API çağrı limitleri.",
        readTime: "2 dk",
        updated: "3 Mayıs 2026",
        content: [
          { body: "Ücretsiz geliştirici planı dakikada 60 istek ile sınırlıdır. Daha yüksek limitler için Geliştirici Pro planına geçebilirsiniz." },
        ],
      },
    ],
  },
  {
    slug: "kargo-teslimat",
    name: "Kargo ve Teslimat",
    shortName: "Kargo",
    description: "Teslimat süreleri, kargo takibi ve adres değişiklikleri",
    icon: Truck,
    color: "neutral",
    group: "other",
    articles: [
      {
        slug: "teslimat-suresi",
        title: "Siparişim ne zaman elime ulaşır?",
        summary: "Standart ve hızlı teslimat süreleri.",
        readTime: "2 dk",
        updated: "27 Nisan 2026",
        content: [
          { body: "Standart teslimat 2-4 iş günü, hızlı teslimat seçeneği ise 1 iş günü içinde tamamlanır. Teslimat süreleri bölgeye göre değişebilir." },
        ],
      },
    ],
  },
]

export const allArticles: (Article & { categorySlug: string; categoryName: string })[] = categories.flatMap((c) =>
  c.articles.map((a) => ({ ...a, categorySlug: c.slug, categoryName: c.name })),
)

export function getCategory(slug: string) {
  return categories.find((c) => c.slug === slug)
}

export function getArticle(slug: string) {
  return allArticles.find((a) => a.slug === slug)
}

export const popularArticleSlugs = [
  "sifre-sifirlama",
  "destek-talebi-olusturma",
  "abonelik-iptali",
  "supheli-etkinlik",
  "para-iade-talebi",
  "iki-adimli-dogrulama",
  "canli-destek",
  "senkronizasyon-sorunlari",
]
