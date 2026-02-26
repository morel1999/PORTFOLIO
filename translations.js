// Translations object for the portfolio
const translations = {
  fr: {
    // Navigation
    'nav.home': 'ACCUEIL',
    'nav.skills': 'COMPÉTENCES',
    'nav.work': 'PROJETS',
    'nav.about': 'À PROPOS',
    'nav.contact': 'CONTACT',

    // Hero section
    'hero.description': "J'explore les frontières entre le développement web et l'intelligence artificielle pour créer des solutions intuitives et innovantes.⚙",
    'hero.location': 'Basé en ✧ Turquie',
    'hero.title': 'Développeur Logiciel',
    'hero.portfolio': 'Portfolio',

    // Skills section
    'skills.title': 'Mes Compétences',
    'skills.subtitle': 'Technologies et Outils que j\'utilise',
    'skills.frontend': 'Développement Frontend',
    'skills.backend': 'Développement Backend',
    'skills.database': 'Bases de données',
    'skills.ai': 'IA et Apprentissage Automatique',
    'skills.devops': 'DevOps et Outils',
    'skills.design': 'Design UI/UX',

    // Work section
    'work.title': 'Mes Projets',
    'work.subtitle': 'Projets Récents et Réalisations',
    'work.project1.title': 'Application Web IA',
    'work.project1.desc': 'Application full-stack intégrant des modèles d\'apprentissage automatique pour des prédictions en temps réel.',
    'work.project2.title': 'Tableau de Bord Mobile',
    'work.project2.desc': 'Tableau de bord analytique responsive avec visualisation de données en temps réel et graphiques interactifs.',
    'work.project3.title': 'Plateforme E-Commerce',
    'work.project3.desc': 'Solution e-commerce moderne avec intégration de paiement et gestion des stocks.',
    'work.project4.title': 'Plateforme Sociale',
    'work.project4.desc': 'Application de réseau social en temps réel avec chat, publications et interactions utilisateur.',
    'work.viewproject': 'Voir le Projet →',

    // About section
    'about.title': 'À Propos',
    'about.subtitle': 'Mon Parcours et Ma Passion',
    'about.intro': "Étudiant en troisième année d'ingénierie informatique à l'Université Bilecik Şeyh Edebali, passionné par l'analyse de données, le développement logiciel et l'optimisation des processus.",
    'about.bio1': "Sérieux et méthodique, je m'adapte facilement aux nouveaux environnements et j'apprécie le travail en équipe pour résoudre des défis techniques et organisationnels. Toujours à la recherche de nouvelles compétences, je suis motivé par les défis technologiques et l'innovation.",
    'about.bio2': "Quand je ne code pas, vous me trouverez en train de pratiquer les arts martiaux (Qwan Ki Do), de jouer au football ou de me tenir au courant des dernières tendances en technologie et cybersécurité.",
    'about.stat1': 'Années d\'Études',
    'about.stat2': 'Projets Académiques',
    'about.stat3': 'Langues',
    'about.languages.title': 'Langues',
    'about.journey': 'Mon Parcours',
    'about.education1.title': 'Étudiant en Génie Informatique',
    'about.education1.place': 'Université Bilecik Şeyh Edebali, Turquie',
    'about.education2.title': 'Baccalauréat - Série D (Scientifique)',
    'about.education2.place': 'Lycée Nelson Mandela, Gabon',
    'about.education3.title': 'Certificat du Premier Cycle',
    'about.education3.place': 'Lycée Paul Emane Eyeghe, Gabon',

    // Contact section
    'contact.title': 'Me Contacter',
    'contact.subtitle': 'Travaillons Ensemble',
    'contact.info': 'Informations de Contact',
    'contact.email': 'Email',
    'contact.location.title': 'Localisation',
    'contact.location.value': 'Turquie',
    'contact.social': 'Réseaux Sociaux',
    'contact.form.name': 'Nom',
    'contact.form.name.placeholder': 'Votre nom',
    'contact.form.email': 'Email',
    'contact.form.email.placeholder': 'votre.email@exemple.com',
    'contact.form.message': 'Message',
    'contact.form.message.placeholder': 'Votre message...',
    'contact.form.submit': 'Envoyer le Message',

    // Footer
    'footer.text': 'Créé avec passion ✻',

    // Back to top
    'backtotop.title': 'Retour en haut'
  },

  en: {
    // Navigation
    'nav.home': 'HOME',
    'nav.skills': 'SKILLS',
    'nav.work': 'WORK',
    'nav.about': 'ABOUT',
    'nav.contact': 'CONTACT',

    // Hero section
    'hero.description': "I explore the boundaries between web development and artificial intelligence to create intuitive and innovative solutions.⚙",
    'hero.location': 'Based in ✧ Turkey',
    'hero.title': 'Software Developer',
    'hero.portfolio': 'Portfolio',

    // Skills section
    'skills.title': 'My Skills',
    'skills.subtitle': 'Technologies & Tools I Work With',
    'skills.frontend': 'Frontend Development',
    'skills.backend': 'Backend Development',
    'skills.database': 'Databases',
    'skills.ai': 'AI & Machine Learning',
    'skills.devops': 'DevOps & Tools',
    'skills.design': 'UI/UX Design',

    // Work section
    'work.title': 'My Work',
    'work.subtitle': 'Recent Projects & Achievements',
    'work.project1.title': 'AI-Powered Web App',
    'work.project1.desc': 'A full-stack application integrating machine learning models for real-time predictions.',
    'work.project2.title': 'Mobile-First Dashboard',
    'work.project2.desc': 'Responsive analytics dashboard with real-time data visualization and interactive charts.',
    'work.project3.title': 'E-Commerce Platform',
    'work.project3.desc': 'Modern e-commerce solution with payment integration and inventory management.',
    'work.project4.title': 'Social Media Platform',
    'work.project4.desc': 'Real-time social networking application with chat, posts, and user interactions.',
    'work.viewproject': 'View Project →',

    // About section
    'about.title': 'About Me',
    'about.subtitle': 'My Journey & Passion',
    'about.intro': "Third-year Computer Engineering student at Bilecik Şeyh Edebali University, passionate about data analysis, software development, and process optimization.",
    'about.bio1': "Serious and methodical, I easily adapt to new environments and enjoy teamwork to solve technical and organizational challenges. Always seeking new skills, I am motivated by technological challenges and innovation.",
    'about.bio2': "When I'm not coding, you'll find me practicing martial arts (Qwan Ki Do), playing football, or keeping up with the latest trends in technology and cybersecurity.",
    'about.stat1': 'Years of Study',
    'about.stat2': 'Academic Projects',
    'about.stat3': 'Languages',
    'about.languages.title': 'Languages',
    'about.journey': 'My Journey',
    'about.education1.title': 'Computer Engineering Student',
    'about.education1.place': 'Bilecik Şeyh Edebali University, Turkey',
    'about.education2.title': 'Baccalaureate - Series D (Scientific)',
    'about.education2.place': 'Lycée Nelson Mandela, Gabon',
    'about.education3.title': 'First Cycle Certificate',
    'about.education3.place': 'Lycée Paul Emane Eyeghe, Gabon',

    // Contact section
    'contact.title': 'Get In Touch',
    'contact.subtitle': "Let's Work Together",
    'contact.info': 'Contact Information',
    'contact.email': 'Email',
    'contact.location.title': 'Location',
    'contact.location.value': 'Turkey',
    'contact.social': 'Social',
    'contact.form.name': 'Name',
    'contact.form.name.placeholder': 'Your name',
    'contact.form.email': 'Email',
    'contact.form.email.placeholder': 'your.email@example.com',
    'contact.form.message': 'Message',
    'contact.form.message.placeholder': 'Your message...',
    'contact.form.submit': 'Send Message',

    // Footer
    'footer.text': 'Crafted with passion ✻',

    // Back to top
    'backtotop.title': 'Back to top'
  },

  tr: {
    // Navigation
    'nav.home': 'ANA SAYFA',
    'nav.skills': 'YETENEKLERİM',
    'nav.work': 'PROJELER',
    'nav.about': 'HAKKIMDA',
    'nav.contact': 'İLETİŞİM',

    // Hero section
    'hero.description': "Sezgisel ve yenilikçi çözümler yaratmak için web geliştirme ve yapay zeka arasındaki sınırları keşfediyorum.⚙",
    'hero.location': 'Bulunduğum yer ✧ Türkiye',
    'hero.title': 'Yazılım Geliştirici',
    'hero.portfolio': 'Portföy',

    // Skills section
    'skills.title': 'Yeteneklerim',
    'skills.subtitle': 'Çalıştığım Teknolojiler ve Araçlar',
    'skills.frontend': 'Frontend Geliştirme',
    'skills.backend': 'Backend Geliştirme',
    'skills.database': 'Veritabanları',
    'skills.ai': 'Yapay Zeka ve Makine Öğrenmesi',
    'skills.devops': 'DevOps ve Araçlar',
    'skills.design': 'UI/UX Tasarım',

    // Work section
    'work.title': 'Projelerim',
    'work.subtitle': 'Son Projeler ve Başarılar',
    'work.project1.title': 'Yapay Zeka Destekli Web Uygulaması',
    'work.project1.desc': 'Gerçek zamanlı tahminler için makine öğrenmesi modellerini entegre eden full-stack uygulama.',
    'work.project2.title': 'Mobil Öncelikli Kontrol Paneli',
    'work.project2.desc': 'Gerçek zamanlı veri görselleştirme ve etkileşimli grafiklerle duyarlı analitik kontrol paneli.',
    'work.project3.title': 'E-Ticaret Platformu',
    'work.project3.desc': 'Ödeme entegrasyonu ve envanter yönetimi ile modern e-ticaret çözümü.',
    'work.project4.title': 'Sosyal Medya Platformu',
    'work.project4.desc': 'Sohbet, gönderiler ve kullanıcı etkileşimleri ile gerçek zamanlı sosyal ağ uygulaması.',
    'work.viewproject': 'Projeyi Görüntüle →',

    // About section
    'about.title': 'Hakkımda',
    'about.subtitle': 'Yolculuğum ve Tutkum',
    'about.intro': "Bilecik Şeyh Edebali Üniversitesi'nde Bilgisayar Mühendisliği üçüncü sınıf öğrencisiyim. Veri analizi, yazılım geliştirme ve süreç optimizasyonu konularında tutkuluyum.",
    'about.bio1': "Ciddi ve metodik olarak, yeni ortamlara kolayca uyum sağlıyorum ve teknik ve organizasyonel zorlukları çözmek için ekip çalışmasından keyif alıyorum. Her zaman yeni beceriler arayan biri olarak, teknolojik zorluklar ve yeniliklerle motive oluyorum.",
    'about.bio2': "Kod yazmadığım zamanlarda beni dövüş sanatları (Qwan Ki Do) yaparken, futbol oynarken veya teknoloji ve siber güvenlik alanındaki en son trendleri takip ederken bulabilirsiniz.",
    'about.stat1': 'Yıllık Eğitim',
    'about.stat2': 'Akademik Proje',
    'about.stat3': 'Dil',
    'about.languages.title': 'Diller',
    'about.journey': 'Yolculuğum',
    'about.education1.title': 'Bilgisayar Mühendisliği Öğrencisi',
    'about.education1.place': 'Bilecik Şeyh Edebali Üniversitesi, Türkiye',
    'about.education2.title': 'Lise Diploması - D Serisi (Fen)',
    'about.education2.place': 'Lycée Nelson Mandela, Gabon',
    'about.education3.title': 'İlk Dönem Sertifikası',
    'about.education3.place': 'Lycée Paul Emane Eyeghe, Gabon',

    // Contact section
    'contact.title': 'İletişime Geçin',
    'contact.subtitle': 'Birlikte Çalışalım',
    'contact.info': 'İletişim Bilgileri',
    'contact.email': 'E-posta',
    'contact.location.title': 'Konum',
    'contact.location.value': 'Türkiye',
    'contact.social': 'Sosyal Medya',
    'contact.form.name': 'İsim',
    'contact.form.name.placeholder': 'Adınız',
    'contact.form.email': 'E-posta',
    'contact.form.email.placeholder': 'sizin.email@ornek.com',
    'contact.form.message': 'Mesaj',
    'contact.form.message.placeholder': 'Mesajınız...',
    'contact.form.submit': 'Mesaj Gönder',

    // Footer
    'footer.text': 'Tutkuyla hazırlandı ✻',

    // Back to top
    'backtotop.title': 'Başa dön'
  }
};
