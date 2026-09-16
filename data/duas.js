/* =========================================================
   NOOR | بانک مرکزی دعاها
   نسخه پایه
   ========================================================= */

const DUAS = [

    /* =====================================================
       ۱ — دعاهای روزانه
       ===================================================== */

    {
        id: "tawassul",
        title: "دعای توسل",
        category: "daily",
        categoryTitle: "دعاهای روزانه",
        icon: "✧",
        description: "دعای توسل به پیامبر اکرم و اهل‌بیت علیهم‌السلام",
        hasText: true
    },

    {
        id: "faraj",
        title: "دعای فرج",
        category: "daily",
        categoryTitle: "دعاهای روزانه",
        icon: "☾",
        description: "دعای فرج و طلب گشایش",
        hasText: false
    },

    {
        id: "ahd",
        title: "دعای عهد",
        category: "daily",
        categoryTitle: "دعاهای روزانه",
        icon: "✦",
        description: "دعای عهد با امام زمان عجل‌الله‌تعالی‌فرجه",
        hasText: false
    },

    {
        id: "nudbah",
        title: "دعای ندبه",
        category: "daily",
        categoryTitle: "دعاهای روزانه",
        icon: "♡",
        description: "دعای ندبه",
        hasText: false
    },

    {
        id: "kumayl",
        title: "دعای کمیل",
        category: "daily",
        categoryTitle: "دعاهای روزانه",
        icon: "✧",
        description: "دعای کمیل",
        hasText: false
    },

    {
        id: "tawba",
        title: "دعای توبه",
        category: "daily",
        categoryTitle: "دعاهای روزانه",
        icon: "❖",
        description: "دعا برای توبه و بازگشت به سوی خدا",
        hasText: false
    },
  


    /* =====================================================
       ۲ — دعاهای مشکل‌گشا
       ===================================================== */

    {
        id: "samat",
        title: "دعای سمات",
        category: "problem",
        categoryTitle: "دعاهای مشکل‌گشا",
        icon: "✦",
        description: "دعای سمات",
        hasText: false
    },

    {
        id: "mujir",
        title: "دعای مجیر",
        category: "problem",
        categoryTitle: "دعاهای مشکل‌گشا",
        icon: "۞",
        description: "دعای مجیر",
        hasText: false
    },

    {
        id: "jawshan-kabir",
        title: "دعای جوشن کبیر",
        category: "problem",
        categoryTitle: "دعاهای مشکل‌گشا",
        icon: "❋",
        description: "دعای جوشن کبیر",
        hasText: false
    },

    {
        id: "jawshan-saghir",
        title: "دعای جوشن صغیر",
        category: "problem",
        categoryTitle: "دعاهای مشکل‌گشا",
        icon: "❋",
        description: "دعای جوشن صغیر",
        hasText: false
    },

    {
        id: "mashlul",
        title: "دعای مشلول",
        category: "problem",
        categoryTitle: "دعاهای مشکل‌گشا",
        icon: "❖",
        description: "دعای مشلول",
        hasText: false
    },

    {
        id: "tawassul-hajat",
        title: "دعای توسل برای حاجت",
        category: "problem",
        categoryTitle: "دعاهای مشکل‌گشا",
        icon: "♡",
        description: "توسل و درخواست حاجت از خداوند",
        hasText: false
    },

    {
        id: "istighatha",
        title: "دعای استغاثه",
        category: "problem",
        categoryTitle: "دعاهای مشکل‌گشا",
        icon: "✧",
        description: "دعای استغاثه",
        hasText: false
    },

    {
        id: "hajat",
        title: "دعای طلب حاجت",
        category: "problem",
        categoryTitle: "دعاهای مشکل‌گشا",
        icon: "✦",
        description: "دعا برای طلب حاجت",
        hasText: false
    },


    /* =====================================================
       ۳ — دعاهای معروف
       ===================================================== */

    {
        id: "abu-hamza",
        title: "دعای ابوحمزه ثمالی",
        category: "famous",
        categoryTitle: "دعاهای معروف",
        icon: "☽",
        description: "مناجات و دعای ابوحمزه ثمالی",
        hasText: false
    },

    {
        id: "iftitah",
        title: "دعای افتتاح",
        category: "famous",
        categoryTitle: "دعاهای معروف",
        icon: "✧",
        description: "دعای افتتاح",
        hasText: false
    },

    {
        id: "makarim",
        title: "دعای مکارم الاخلاق",
        category: "famous",
        categoryTitle: "دعاهای معروف",
        icon: "❖",
        description: "دعای مکارم الاخلاق از صحیفه سجادیه",
        hasText: false
    },

    {
        id: "jawshan",
        title: "دعای جوشن کبیر",
        category: "famous",
        categoryTitle: "دعاهای معروف",
        icon: "۞",
        description: "دعای جوشن کبیر",
        hasText: false
    },

    {
        id: "daylami",
        title: "دعای یستشیر",
        category: "famous",
        categoryTitle: "دعاهای معروف",
        icon: "✦",
        description: "دعای یستشیر",
        hasText: false
    },

    {
        id: "allahumma",
        title: "دعای صباح",
        category: "famous",
        categoryTitle: "دعاهای معروف",
        icon: "☀",
        description: "دعای صباح امیرالمؤمنین علیه‌السلام",
        hasText: false
    },

    {
        id: "mubahala-dua",
        title: "دعای مباهله",
        category: "famous",
        categoryTitle: "دعاهای معروف",
        icon: "❖",
        description: "دعای روز مباهله",
        hasText: false
    },

    {
        id: "rajab",
        title: "دعای ماه رجب",
        category: "famous",
        categoryTitle: "دعاهای معروف",
        icon: "☾",
        description: "دعاهای منتخب ماه رجب",
        hasText: false
    },


    /* =====================================================
       ۴ — دعاهای کوتاه
       ===================================================== */

    {
        id: "short-1",
        title: "دعای کوتاه برای آرامش",
        category: "short",
        categoryTitle: "دعاهای کوتاه",
        icon: "♡",
        description: "دعای کوتاه برای آرامش دل",
        hasText: false
    },

    {
        id: "short-2",
        title: "دعای کوتاه برای رزق",
        category: "short",
        categoryTitle: "دعاهای کوتاه",
        icon: "✦",
        description: "دعای کوتاه برای طلب رزق",
        hasText: false
    },

    {
        id: "short-3",
        title: "دعای کوتاه برای سلامتی",
        category: "short",
        categoryTitle: "دعاهای کوتاه",
        icon: "❖",
        description: "دعای کوتاه برای سلامتی",
        hasText: false
    },

    {
        id: "short-4",
        title: "دعای کوتاه برای رفع غم",
        category: "short",
        categoryTitle: "دعاهای کوتاه",
        icon: "☽",
        description: "دعای کوتاه برای رفع اندوه",
        hasText: false
    },

    {
        id: "short-5",
        title: "دعای کوتاه برای گشایش",
        category: "short",
        categoryTitle: "دعاهای کوتاه",
        icon: "✧",
        description: "دعای کوتاه برای گشایش",
        hasText: false
    },

    {
        id: "short-6",
        title: "صلوات",
        category: "short",
        categoryTitle: "دعاهای کوتاه",
        icon: "✦",
        description: "صلوات بر محمد و آل محمد",
        hasText: false
    },

    {
        id: "short-7",
        title: "استغفار",
        category: "short",
        categoryTitle: "دعاهای کوتاه",
        icon: "❖",
        description: "ذکر استغفار",
        hasText: false
    },

    {
        id: "short-8",
        title: "دعای عاقبت به خیری",
        category: "short",
        categoryTitle: "دعاهای کوتاه",
        icon: "♡",
        description: "دعای عاقبت به خیری",
        hasText: false
    },

  {
    id: 'quran',
    number: '۹',
    name: 'قرآن کریم',
    info: 'سوره‌ها و آیات با ترجمه'
}

];


/* =========================================================
   توابع عمومی بانک دعاها
   ========================================================= */

function getAllDuas() {
    return DUAS;
}


function getDuaById(id) {
    return DUAS.find(dua => dua.id === id);
}


function getDuasByCategory(category) {
    return DUAS.filter(dua => dua.category === category);
}


function getCategoryTitle(category) {

    const dua = DUAS.find(item => item.category === category);

    return dua
        ? dua.categoryTitle
        : "دعاها";
}


/* =========================================================
   تعداد دعاها
   ========================================================= */

function getDuaCount() {
    return DUAS.length;
}