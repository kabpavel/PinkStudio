
import { storageService } from './async-storage.service.js'
import { utilService } from './util.service.js'

const STORAGE_KEY = 'data'
const listeners = []

saveDefaultData()

const gData =[{
        _id: "61b364458ddd74002ee2d48d",
        entityType: "homePage",
        title: "הצעדים הראשונים שלך בעולם השירה",
        title2: "הצעדים הראשונים שלך בעולם השירה",
        description1: "שיעורי פיתוח קול עם יפעת גולן זמרת ומורה מקצועית לפיתוח קול למתחילים ולמתקדמים",
        description2: "שיעורי פיתוח קול עם יפעת גולן זמרת ומורה מקצועית לפיתוח קול למתחילים ולמתקדמים",
        back_ground_img1: "back_ground_img1.png",
        img1Url: "teacher_img1.png",
        isInfoList: false,
        routePath: "home"
    },
    {
        _id: "61b0f4e68dff8605aef78907",
        entityType: "teacher",
        title: "המורה",
        title2: "המורה",
        description1: "הכירו את יפעת גולן מייסדת pink studio זמרת ומורה  מוסמכת לפיתוח קול בעלת תואר ראשון ותעודת הוראה במוזיקה רב תחומית.",
        description2: "רוצים ללמוד לשיר 🎉🎊👨‍🎤שמי יפעת  מורה לפיתוח קול, ושירה בוגרת האקדמיה ובעלת תעודת הוראה ממשרד החינוך  הלימודים בסטודיו כוללים :🎼🎙️ לימוד בכל הרמות והגילאים🎙️🎼 סביבת לימוד נעימה ביתית ותומכת באולפן 🎙️🎼התאמת תכנית אישית לכל תלמיד/ה🎼🎙️מתן כלים לפיתוח בהמשך הדרך.🎼🎙️ חשיפה לסגנונות מוזיקליים רבים ומציאת הקול האישי הייחודי לך ⭐🎤⭐יפעת גולן זמרת ומורה מוסמכת ומנוסה לפיתוח קול בעלת תואר ראשון במוזיקה רב תחומית בוגרת הקריה האקדמית אונו ותעודת הוראה ממכללת וושינגטון בעלת ניסיון משנת .2016 .מורה למוזיקה בבתי ספר יסודיים במשרד החינוך ומתמחה במחזות זמר בוגרת מחזות זמר ביה\"ס ענת ברזילי בעלת תעודה להוראת פיתוח קול - סטודיו ארמת ארנהיים ווקולוגית ומורה לפיתוח קול. לפרטים נוספים, צרו קשר עכשיו  0523573983",
        back_ground_img1: "",
        img1Url: "teacher_img1.png",
        isInfoList: true,
        routePath: "teacher"
    },
    {
        _id: "61b131c3cf7a36222c5e7330",
        entityType: "studio",
        title: "הסטודיו",
        title2: "הסטודיו",
        description1: "בואו ללמוד לשיר  בסטודיו מאובזר  באווירה מוזיקלית קסומה שרים  בכל הסגנונות ובכל הרמות ממתחילים עד מתקדמים ",
        description2: "הסטודיו נוסד על ידי יפעת גולן זמרת ומורה מוסמכת לפיתוח קול  הסטודיו  ממוקם בפרדס חנה יפה נוף שיעורי פיתוח הקול -הם למתחילים ולמתקדמים ומתאימים לכל הרמות חוגי המוזיקה לקטנטנים -התכנית מיועדת לילדים בגיל הרך מגיל 3-6 השיעורים באווירה קסומה לתיאום צרו קשר בטלפון:0523573983 ",
        back_ground_img1: "",
        img1Url: "studio_img1.png",
        isInfoList: true,
        routePath: "studio"
    },
    {
        _id: "61b32ede60893b0eb38af5c3",
        entityType: "vocalCoach",
        title: "פיתוח קול",
        title2: "פיתוח קול",
        description1: "אם לשיר זה החלום שלך- הגעת למקום הנכון בוא נגלה ביחד את הקול הטבעי והייחודי הכלי המפליא שמסתתר בתוכך",
        description2: "מטרת הקורס היא להכשיר זמרים או חובבי שירה  להיות הכוכבים הבאים כאלה שהשירה באה מהנשמה. בקורס לומדים להבין, לראות, לשמוע ולהרגיש את התלמיד, כדי להגיע לרמה גבוהה של תמיכה וקידום לכל אחד מגיע לשיר מהלב.בייבי וייס- קורס לזמרים מתחילים בשיעורי פיתוח הקול נלמד:כיצד לשלוט במיתרי הקול ולפתח יציבות קולית.תרגילי נשימה, הולכת אויר וחיזוק הסרעפת.הגייה נכונה, תמיכה, דיקציה.פיתוח שמיעה, קצב והרחבת המנעד הקולי.מאיפה שרים ומבנה מנגנון הקול.סולפג', הרמוניה קולית, הבעה אישית.הלחנה ובניית משפטים מוזיקליים.כיצד להגיש את השיר.השיעורים מלווים בתאוריה וקריאת תווים.משך השיעור 45 או 60 דקות.שיעור היכרות ראשון  בעלות מוזלת.סופר סטאר – קורס לזמרים מתקדמים בשיעורי פיתוח הקול נלמד על  תרגילי נשימה חיזוק הסרעפת פיתוח יציבות קולית פיתוח שמיעה וקצב הרחבת המנעד הקולי מבנה מנגנון הקול הלחנה ובניית משפטים מוזיקליים .כיצד להגיש את השיר יצירת סגנון וביטוי אישיהשיעורים מלווים בתאוריה וקריאת תווים .משך השיעור 45 או 50 דקות שיעור היכרות ראשון בעלות מוזלת לפרטים נוספים צרו קשר עכשיו-🤳🏽0523573983",
        back_ground_img1: "",
        img1Url: "vocal_coach_img1.png",
        isInfoList: true,
        routePath: "vocal-couch"
    },
    {
        _id: "61b33ae1f12a521350fb3975",
        entityType: "musicLittleOnes",
        title: "מוזיקה לקטנטנים",
        title2: "חוגי מוזיקה לקטנטנים",
        description1: "בואו להעניק לילדיכם מסע מוזיקלי בלתי נשכח ולסייע להם לגלות את עולם המוזיקה .",
        description2: "רוצים להעניק מתנה 🎁לכם, לבן או לבת שלכם? במיוחד לרגל החגים\n🌸🎼  חוגי מוזיקה לגיל הרך \n🎼🎹🎤🥳💃🥳 שמי  יפעת גולן מורה לפיתוח קול, ושירה בוגרת האקדמיה ובעלת תעודת הוראה ממשרד החינוך.\n🎙️פיתוח ביטחון עצמי \n🎼🎁\n🎙️יכולת עמידה מול קהל\n🎼🎙️סביבת לימוד נעימה \n🎼🎙️ארגז כלים לפיתוח אישי לילדכם.\n🎼🎙️ חשיפה לסגנונות מוזיקלים רבים\n🎼 מחפשים חוויה בלעדית לילדכם הגעתם למקום הנכון  \n🎼🎤🎹 לפרטים נוספים צרו קשר עכשיו \n🤳🏽 יפעת 0523573983",
        back_ground_img1: "",
        img1Url: "for_little_img1.png",
        isInfoList: true,
        routePath: "music-little-ones"
    },
    {
        _id: "61b33b16f12a521350fb3977",
        entityType: "ladino",
        title: "לאדינו",
        title2: "הופעות שירת לאדינו",
        description1: "הופעה ייחודית של שירים וניחוח של ספרד עם שירי לאדינו..",
        description2: "לא כדאי לכם לפספסהופעה מדהימה ונוצצת של זמרת ופסנתרן חוויה מיוחדת, מסעירה ומרתקת.. הופעה שעדיין לא נראתה בישראל.הופעה ייחודית של שירים וניחוח של ספרד עם שירי לאדינו..",
        back_ground_img1: "",
        img1Url: "ladino_img1.png",
        isInfoList: true,
        routePath: "ladino-performance"
    },
    {
        _id: "61b33b16f12a521350fb3947",
        entityType: "disneySongs",
        title: "שירי דיסני",
        title2: "שירי דיסני",
        description1: "למיטב שירי הדיסני האהובים ביותר בכל הזמנים",
        description2: "לא כדאי לכם לפספס למיטב שירי הדיסני האהובים ביותר בכל הזמניםהופעה מדהימה ונוצצת של זמרת ופסנתרן חוויה מיוחדת, מסעירה ומרתקת.. הופעה שעדיין לא נראתה בישראל.הופעה ייחודית של שירים עם נגיעה של טעם הילדות - שירי דיסני המיוחדים",
        back_ground_img1: "",
        img1Url: "disney_songs_img1.png",
        isInfoList: true,
        routePath: "disney-songs"
    },   
    {
        _id: "61b363f88ddd74002ee2d48b",
        entityType: "contactUs",
        title: "צור קשר",
        title2: "צור קשר",
        description1: "\"פינק סטודיו\" - סטודיו לפיתוח קול ומוזיקה  הממוקם בפרדס חנה יפה נוף. לפרטים נוספים צרו קשר עכשיו - 0523573983",
        description2: "\"פינק סטודיו\" - סטודיו לפיתוח קול ומוזיקה  הממוקם בפרדס חנה יפה נוף. לפרטים נוספים צרו קשר עכשיו - 0523573983",
        img1Url: "contact-us-img1.png",
        isInfoList: true,
        routePath: "contact-us"
    }
    ]

export const dataService = {
    query,
    getById,
    save,
    remove
}
window.cs = dataService;

function query() {
    return storageService.query(STORAGE_KEY)
}
function getById(dataId) {
    return storageService.get(STORAGE_KEY, dataId)
}
function remove(dataId) {
    // return new Promise((resolve, reject) => {
    //     setTimeout(reject, 2000)
    // })
    // return Promise.reject('Not now!');
    return storageService.remove(STORAGE_KEY, dataId)
}

function save(data) {
    if (data._id) {
        return storageService.put(STORAGE_KEY, data)
    } else {
        return storageService.post(STORAGE_KEY, data)
    }
}

function saveDefaultData() {
    //console.log('saveDefaultData',saveDefaultData)
    storageService.query(STORAGE_KEY)
        .then(data => {
            //console.log('data',data)
            if (!data | data.length === 0) {
                storageService.postMany(STORAGE_KEY, gData)
            }
        })
}

function _notifySubscribersDataChanged(data) {
    //console.log('Notifying Listeners');
    listeners.forEach(listener => listener(data))
}

window.addEventListener('storage', () => {
    //console.log('Storage Changed from another Browser!');
    query()
        .then(data => {
            _notifySubscribersDataChanged(data)
        })
})

// TEST DATA
// storageService.post(STORAGE_KEY, {vendor: 'Subali Rahok 2', price: 980}).then(x => //console.log(x))




