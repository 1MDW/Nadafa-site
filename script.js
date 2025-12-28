const content = {
  ar: {
    heroTitle: "تنظيف دارك بلا صداع",
    heroSub: "خدمة تنظيف موثوقة وسهلة للناس اللي ما عندهمش وقت<br>📍 المعاريف – الدار البيضاء",
    howTitle: "كيفاش كتخدم Nadafa؟",
    howList: [
      "كتحجز عبر WhatsApp",
      "كنعيّنو امرأة تنظيف مجرّبة",
      "كتخلص من بعد الخدمة"
    ],
    servicesTitle: "الخدمات والأسعار",
    servicesList: [
      "🧹 تنظيف 2 ساعات — 120 درهم",
      "🧹 تنظيف 4 ساعات — 220 درهم",
      "🌟 -20% على أول تجربة"
    ],
    whyTitle: "علاش Nadafa؟",
    whyList: [
      "نساء مجرّبات ومتحقق من الهوية",
      "أثمنة واضحة",
      "حجز سهل وسريع",
      "احترام وكرامة النساء العاملات"
    ]
  },
  fr: {
    heroTitle: "Un ménage sans stress",
    heroSub: "Service de nettoyage fiable et simple<br>📍 Maarif – Casablanca",
    howTitle: "Comment ça marche ?",
    howList: [
      "Réservation via WhatsApp",
      "Femme de ménage vérifiée",
      "Paiement après service"
    ],
    servicesTitle: "Services & Prix",
    servicesList: [
      "🧹 Nettoyage 2h — 120 DH",
      "🧹 Nettoyage 4h — 220 DH",
      "-20% première réservation"
    ],
    whyTitle: "Pourquoi Nadafa ?",
    whyList: [
      "Intervenantes vérifiées",
      "Prix transparents",
      "Réservation rapide",
      "Respect et dignité"
    ]
  }
};

function setLang(lang) {
  document.body.dir = lang === "ar" ? "rtl" : "ltr";
  document.getElementById("hero-title").innerHTML = content[lang].heroTitle;
  document.getElementById("hero-sub").innerHTML = content[lang].heroSub;

  document.getElementById("how-title").innerText = content[lang].howTitle;
  document.getElementById("services-title").innerText = content[lang].servicesTitle;
  document.getElementById("why-title").innerText = content[lang].whyTitle;

  const howList = document.getElementById("how-list");
  howList.innerHTML = "";
  content[lang].howList.forEach(i => {
    let li = document.createElement("li");
    li.innerText = i;
    howList.appendChild(li);
  });

  const servicesList = document.getElementById("services-list");
  servicesList.innerHTML = "";
  content[lang].servicesList.forEach(i => {
    let li = document.createElement("li");
    li.innerText = i;
    servicesList.appendChild(li);
  });

  const whyList = document.getElementById("why-list");
  whyList.innerHTML = "";
  content[lang].whyList.forEach(i => {
    let li = document.createElement("li");
    li.innerText = i;
    whyList.appendChild(li);
  });
}
