<script>
/* ================== MULTI-LANG CONTENT ================== */
const content = {
  ar: {
    heroTitle: "تنظيف دارك بلا صداع",
    heroSub: "خدمة تنظيف موثوقة وسهلة<br>📍 المعاريف – الدار البيضاء",
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
    ],
    alertMissing: "عافاك عمّر جميع المعلومات الضرورية"
  },
  fr: {
    heroTitle: "Un ménage sans stress",
    heroSub: "Service fiable et simple<br>📍 Maarif – Casablanca",
    howTitle: "Comment ça marche ?",
    howList: [
      "Réservation via WhatsApp",
      "Intervenante vérifiée",
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
    ],
    alertMissing: "Merci de remplir tous les champs obligatoires"
  }
};

let currentLang = "fr";

function setLang(lang) {
  currentLang = lang;
  document.body.dir = lang === "ar" ? "rtl" : "ltr";

  document.getElementById("hero-title").innerHTML = content[lang].heroTitle;
  document.getElementById("hero-sub").innerHTML = content[lang].heroSub;
  document.getElementById("how-title").innerText = content[lang].howTitle;
  document.getElementById("services-title").innerText = content[lang].servicesTitle;
  document.getElementById("why-title").innerText = content[lang].whyTitle;

  const fillList = (id, items) => {
    const ul = document.getElementById(id);
    if (!ul) return;
    ul.innerHTML = "";
    items.forEach(i => {
      const li = document.createElement("li");
      li.innerText = i;
      ul.appendChild(li);
    });
  };

  fillList("how-list", content[lang].howList);
  fillList("services-list", content[lang].servicesList);
  fillList("why-list", content[lang].whyList);
}

/* ================== FORM LOGIC ================== */
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("reservation-form");
  if (!form) return;

  form.addEventListener("submit", async function (e) {
    e.preventDefault();

    const fullname = document.getElementById("fullname").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const email = document.getElementById("email").value.trim(); // optional
    const date = document.getElementById("date").value;
    const service = document.getElementById("service").value;

    // Validation (email optional)
    if (!fullname || !phone || !date || !service) {
      alert(content[currentLang].alertMissing);
      return;
    }

    /* ================== WHATSAPP ================== */
    const whatsappNumber = "212600000000"; // ← بدّل برقمك
    const message =
`Nouvelle réservation Nadafa 🧹

👤 Nom: ${fullname}
📞 Téléphone: ${phone}
📧 Email: ${email || "Non renseigné"}
📅 Date: ${date}
🧹 Service: ${service}`;

    const whatsappURL =
      "https://wa.me/" + whatsappNumber + "?text=" + encodeURIComponent(message);

    /* ================== BACKEND ================== */
    try {
      await fetch("https://ton-backend.com/api/reservations", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          fullname,
          phone,
          email,
          date,
          service
        })
      });
    } catch (err) {
      console.error("Backend error:", err);
      // حتى إلا فشل الباكند، نخلي WhatsApp يخدم
    }

    /* ================== REDIRECTION ================== */
    window.open(whatsappURL, "_blank");
    window.location.href = "confirmation.html";
  });
});
</script>
