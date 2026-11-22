/* הודעות חברות ספנות (dated notices).
 * כל רשומה יכולה לחול על חברה אחת או יותר. מחירונים לא משתנים כאן.
 * פעילה בבאנר לפי תאריך ה-BL: publishedDate <= תאריך, ו־validTo ריק או לא עבר.
 * appliesWhen: "always" = אזהרה בהצעה תמיד; "haz" = אזהרה בהצעה רק כשמסומן HAZ;
 *              "surcharge" = אזהרה בהצעה רק כשכלל התוספת שעל ההודעה חל על ההצעה.
 * שדה surcharge (רשות): כלל תוספת ברמת חברה, מחושב בהצעה לפי תאריך ומוצא/יעד,
 * בלי לגעת בקבצי המחירון. אפשר גם ב־window.CARRIER_SURCHARGE_RULES.
 */
window.CARRIER_NOTICES = [
  {
    "id": "one-md1-dg-2026-11-18",
    "carrierIds": ["one"],
    "title": "ONE: הגבלות על מטענים מסוכנים (DG) בשירות MD1",
    "banner": "⚠️ הודעה חשובה: הגבלות DG בשירות MD1 (18.11.26)",
    "publishedDate": "2026-11-18",
    "added": "2026-11-18",
    "effectiveFromVessel": "YM TRUST V.106W (MD12646W)",
    "validTo": null,
    "appliesWhen": "haz",
    "service": "MD1",
    "severity": "warning",
    "quoteWarningTitle": "⚠️ הודעה חשובה: הגבלות DG בשירות MD1",
    "quoteWarning": "על מטען מסוכן בשירות MD1 של ONE חלות הגבלות (הודעה מ־18.11.2026, בתוקף מ־YM TRUST V.106W). מתקבלים רק Class 6.1, 8 או 9, עם חריגים (לרבות סוללות ליתיום/נתרן־יון ומספרי UN שפורטו בהודעה).",
    "sections": [
      { "kind": "meta", "text": "תאריך ההודעה: 18.11.2026" },
      { "kind": "meta", "text": "בתוקף החל מההפלגה YM TRUST V.106W (MD12646W)" },
      { "kind": "p", "text": "לקראת החזרה של אוניות השירות למעבר בים האדום ובתעלת סואץ, ONE מגבילה את המטענים המסוכנים שהיא מקבלת בשירות MD1." },
      { "kind": "p", "lead": "מה מתקבל:", "text": "רק מטענים מסוכנים בסיווג Class 6.1, Class 8 או Class 9." },
      { "kind": "p", "lead": "מה לא מתקבל, גם כשהמטען בסיווג Class 9:", "text": "UN2211; UN3480 / UN3481 (סוללות ליתיום־יון); UN3090 / UN3091 (סוללות ליתיום־מתכת); UN3536; UN3551 / UN3552; UN3556 / UN3557 / UN3558; UN3166 (רכבים המונעים בסוללות)." },
      { "kind": "p", "text": "גם סוללות ליתיום שאינן מוגדרות כ־DG וגם סוללות נתרן־יון (Sodium Ion) לא יתקבלו בכלל. כל מטען מסוכן אחר שאינו עומד בתנאים האלה לא יאושר להטענה ב־MD1." },
      { "kind": "p", "lead": "מה עושים:", "text": "משלוח שכולל אחד מהמספרים האלה (UN) לא יוכל לצאת בשירות MD1 של ONE. אפשר להציע ללקוח חברת ספנות אחרת או שירות אחר של ONE." },
      { "kind": "related", "carrierId": "yml", "lead": "YML:", "text": "YML פועלת גם היא בשירות MD1, ועדיין לא הגיעה ממנה הודעה רשמית, אבל ביום שלפני ההודעה התקבל סירוב למטען Class 3. לכן כדאי לבדוק מראש כל מטען מסוכן שעומד לצאת עם YML בשירות הזה." }
    ]
  },
  {
    "id": "yml-md1-dg-2026-11-18",
    "carrierIds": ["yml"],
    "title": "YML: הגבלות DG בשירות MD1",
    "banner": "⚠️ הודעה חשובה: הגבלות DG בשירות MD1 (18.11.26)",
    "publishedDate": "2026-11-18",
    "added": "2026-11-18",
    "effectiveFromVessel": null,
    "validTo": "2026-11-21",
    "appliesWhen": "haz",
    "service": "MD1",
    "severity": "warning",
    "quoteWarningTitle": "⚠️ הודעה חשובה: הגבלות DG בשירות MD1",
    "quoteWarning": "YML פועלת גם היא בשירות MD1, ועדיין לא הגיעה ממנה הודעה רשמית, אבל ביום שלפני ההודעה התקבל סירוב למטען Class 3. לכן כדאי לבדוק מראש כל מטען מסוכן שעומד לצאת עם YML בשירות הזה.",
    "sections": [
      { "kind": "meta", "text": "תאריך ההודעה: 18.11.2026" },
      { "kind": "p", "lead": "YML:", "text": "YML פועלת גם היא בשירות MD1, ועדיין לא הגיעה ממנה הודעה רשמית, אבל ביום שלפני ההודעה התקבל סירוב למטען Class 3. לכן כדאי לבדוק מראש כל מטען מסוכן שעומד לצאת עם YML בשירות הזה." }
    ]

  },
  {
    "id": "yml-dg-2026-11-22",
    "carrierIds": ["yml"],
    "title": "YML: הגבלות על מטענים מסוכנים (DG)",
    "banner": "⚠️ הודעה חשובה: הגבלות על מטענים מסוכנים (DG) (22.11.26)",
    "publishedDate": "2026-11-22",
    "added": "2026-11-22",
    "effectiveFromVessel": null,
    "validTo": null,
    "appliesWhen": "haz",
    "severity": "warning",
    "quoteWarningTitle": "⚠️ הודעה חשובה: הגבלות על מטענים מסוכנים (DG)",
    "quoteWarning": "ב־YML מתקבלים לשילוח רק מטענים שסיווגי הסיכון הראשי ו/או המשני שלהם מסווגים כ־Class 6.1, Class 8 או Class 9. מטענים כגון Class 5.1, Class 2.2, Class 3 וכו׳ אינם מתקבלים. גם מטעני Class 9 עם המספרים UN2211, UN3480, UN3481, UN3090, UN3091, UN3536, UN3551, UN3552, UN3556, UN3557, UN3558 ו־UN3166 אינם מתקבלים. הודעה מ־22.11.2026, בתוקף עד להודעה חדשה.",
    "sections": [
      { "kind": "meta", "text": "תאריך ההודעה: 22.11.2026" },
      { "kind": "meta", "text": "בתוקף: עד להודעה חדשה" },
      { "kind": "p", "lead": "1.", "text": "רק מטענים שסיווגי הסיכון הראשי ו/או המשני שלהם מסווגים כ־Class 6.1, Class 8 או Class 9 יתקבלו לשילוח. משמעות הדבר היא שמטענים כגון Class 5.1, Class 2.2, Class 3 וכו׳ אינם מתקבלים." },
      { "kind": "p", "lead": "2.", "text": "גם אם המטענים הבאים הם Class 9, הם עדיין לא יתקבלו:" },
      { "kind": "p", "text": "UN2211 / UN3480 / UN3481 / UN3090 / UN3091 / UN3536 / UN3551 / UN3552 / UN3556 / UN3557 / UN3558 / UN3166" },
      { "kind": "original", "lead": "נוסח מקורי", "text": "1. Only cargoes whose primary and/or subsidiary hazard classes are classified as Class 6.1, Class 8, or Class 9 will be accepted for shipment.\nWhich means such like Class 5.1, Class 2.2, Class 3 and etc are not acceptable.\n2. even though below cargo are Class 9, but still not acceptable:\n - UN2211 / UN3480/ UN3481/ UN3090/ UN3091/ UN3536/ UN3551/ UN3552/ UN3556/ UN3557/ UN3558/ UN3166" }
    ]
  },
  {
    "id": "zim-black-sea-wr-2026-11-19",
    "carrierIds": ["zim"],
    "title": "ZIM: תוספת סיכון מלחמה בים השחור (WR)",
    "banner": "⚠️ הודעה חשובה: תוספת סיכון מלחמה בים השחור (WR) (19.11.26)",
    "publishedDate": "2026-11-19",
    "added": "2026-11-19",
    "effectiveFromVessel": null,
    "validTo": null,
    "appliesWhen": "surcharge",
    "severity": "warning",
    "quoteWarningTitle": "⚠️ הודעה חשובה: תוספת סיכון מלחמה בים השחור (WR)",
    "quoteWarning": "צים מוסיפה תוספת WR בסך 39$ ל־TEU על מטענים מפוטי (גאורגיה) ואליה, ביבוא וביצוא. חל על הזמנות שנפתחו מ־23.11.2026 ועד להודעה חדשה.",
    "surcharge": {
      "code": "WR",
      "label": "WR – תוספת סיכון מלחמה בים השחור",
      "currency": "USD",
      "perTeu": 39,
      "teuByType": { "DV20": 1, "FL20": 1, "OT20": 1, "DV40": 2, "HC40": 2, "FL40": 2, "OT40": 2 },
      "effectiveFrom": "2026-11-23",
      "effectiveTo": null,
      "match": { "ports": ["POTI, GE"], "side": "any", "excludeDestCountries": ["RU"] },
      "note": "חל על הזמנות שנפתחו מ־23.11.26"
    },
    "sections": [
      { "kind": "meta", "text": "תאריך ההודעה: 19.11.2026" },
      { "kind": "meta", "text": "בתוקף: להזמנות חדשות שנפתחו מ־23.11.2026 ועד להודעה חדשה" },
      { "kind": "p", "text": "בעקבות ההסלמה הביטחונית בים השחור והעלייה בפרמיות ביטוח סיכוני המלחמה, צים מוסיפה תוספת WR בסך 39$ ל־TEU על מטענים מפוטי (גאורגיה) ואליה, ביבוא וביצוא:" },
      { "kind": "p", "text": "- פוטי מיעדים בים התיכון ואליהם" },
      { "kind": "p", "text": "- פוטי מיעדים בצפון אירופה, בבלטי ובסקנדינביה ואליהם" },
      { "kind": "p", "text": "התוספת באה בנוסף להובלה, ל־THC, לבונקר ולשאר התוספות. קווים לרוסיה לא כלולים, ועליהם צריך לברר מול צים." }
    ]

  }
];
