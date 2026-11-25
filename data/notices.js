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
    "id": "one-bl-rating-proforma-etd-2026-10-22",
    "carrierIds": [
      "one"
    ],
    "title": "ONE: עדכון לכלל דירוג ה-B/L — Proforma ETD",
    "banner": "ONE: עדכון לכלל דירוג ה-B/L — Proforma ETD (הודעה מ־22.10.26)",
    "publishedDate": "2026-10-22",
    "added": "2026-11-24",
    "effectiveFromVessel": null,
    "validTo": null,
    "appliesWhen": "always",
    "severity": "info",
    "quoteWarningTitle": "ONE: כלל דירוג ה-B/L הוא Proforma ETD",
    "quoteWarning": "תאריך דירוג ה-B/L הוא Proforma ETD (לוח הזמנים במועד ההזמנה). עיכוב רגיל של האונייה לא משנה את התאריך, אבל אם האונייה מתעכבת לשבוע מאוחר יותר או ששבוע השיבוץ משתנה, עשוי לחול PFS ETD חדש כשהוא מתעדכן במערכת. ליצוא מהודו, תאריך היישום הוא תמיד תאריך קבלת המטען (CRD). הודעה מ־22.10.2026.",
    "sections": [
      {
        "kind": "meta",
        "text": "תאריך ההודעה: 22.10.2026"
      },
      {
        "kind": "p",
        "text": "ONE עדכנה את הניסוח בכלל הדירוג הגלובלי של שטר המטען. תאריך הדירוג הוא Proforma ETD (לוח הזמנים במועד ההזמנה)."
      },
      {
        "kind": "p",
        "lead": "מה לא משתנה:",
        "text": "אם יש עיכוב באונייה, תאריך ה-ETD של הפרופורמה עצמו לא זז, ולכן תאריך היישום לא משתנה רק בגלל עיכוב."
      },
      {
        "kind": "p",
        "lead": "מתי התאריך כן משתנה:",
        "text": "אם האונייה מתעכבת לשבוע מאוחר יותר, או ששבוע השיבוץ שלה שונה מסיבה כלשהי, עשוי לחול PFS ETD חדש. תאריך היישום יתעדכן אוטומטית רק אם תאריך ה-PFS ETD עודכן במערכת."
      },
      {
        "kind": "p",
        "lead": "יצוא מהודו:",
        "text": "תאריך היישום יהיה תמיד זהה לתאריך קבלת המטען (CRD)."
      },
      {
        "kind": "original",
        "lead": "נוסח מקורי",
        "text": "UPDATE B/L Rating date will be “Proforma ETD” (Schedule at the time of booking)\nPlease note that some wording clarification has been added to the Global B/L Freight Rule.\nThe previous wording stated:\n“In case we face some vessel delays, we do NOT change any ETD date since Proforma ETD is not moving ETD.”\nThe updated version is:\n“In case we face some vessel delays, we do NOT change any PFS ETD date since Proforma ETD is not moving ETD. However, if a vessel slides to a later week or if the assigned week for a vessel was changed for some reason, a new PFS ETD may apply.”\nEffectively it means that the application date will only change if the PFS ETD date is updated in the system. For a sliding or week-changing vessel, the application date will be automatically adjusted to match the new PFS ETD date when it is updated in the system.\nApplication Date: For exports from India, the application date will always be the same as the cargo receiving date (CRD)."
      }
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
    "id": "yml-md1-msds-2026-11-23",
    "carrierIds": ["yml"],
    "title": "קונמרט / Yang Ming: מטען רגיש או כזה שדורש MSDS בשירות MD1",
    "banner": "⚠️ קונמרט / Yang Ming: מטען רגיש או כזה שדורש MSDS בשירות MD1 (23.11.26)",
    "publishedDate": "2026-11-23",
    "added": "2026-11-23",
    "effectiveFromVessel": null,
    "validTo": null,
    "appliesWhen": "always",
    "service": "MD1",
    "originRegions": ["asia"],
    "severity": "warning",
    "quoteWarningTitle": "⚠️ קונמרט / Yang Ming: מטען רגיש או כזה שדורש MSDS בשירות MD1",
    "quoteWarning": "קונמרט מבהירים כי החל מההנחיות החדשות בשירות MD1 מאסיה וסין, כל מטען שיש לו מאפיינים רגישים או דורש MSDS כפוף לבדיקה מוקדמת ואישור של חברת הספנות והנמלים הרלוונטיים. גם אם המטען מוגדר כ-Non DG, ייתכן שיידרש אישור מיוחד לפני קבלתו למשלוח.",
    "sections": [
      { "kind": "meta", "text": "תאריך ההודעה: 23.11.2026" },
      { "kind": "meta", "text": "בתוקף: עד להודעה חדשה" },
      { "kind": "p", "text": "קונמרט מבהירים כי החל מההנחיות החדשות בשירות MD1 מאסיה וסין, כל מטען שיש לו מאפיינים רגישים או דורש MSDS כפוף לבדיקה מוקדמת ואישור של חברת הספנות והנמלים הרלוונטיים. גם אם המטען מוגדר כ-Non DG, ייתכן שיידרש אישור מיוחד לפני קבלתו למשלוח." },
      {
        "kind": "list",
        "lead": "המשמעות עבור המכירות:",
        "items": [
          "אין להתחייב ללקוח על קבלה של מטען כזה לפני בדיקה.",
          "יש להעביר MSDS ומפרט מוצר מוקדם ככל האפשר.",
          "האישור הסופי תלוי בהחלטת חברת הספנות ונמל הטעינה.",
          "ייתכנו מקרים שבהם מטען שאינו מסוכן יידרש לאישור מיוחד או יידחה בהתאם למדיניות הקו והנמלים בדרך."
        ]
      }
    ]
  },
  {
    "id": "yml-suez-md1-ms2-2026-10-22",
    "carrierIds": ["yml"],
    "title": "YML: חזרה לניתוב דרך הים האדום ותעלת סואץ בשירותי MD1 ו־MS2",
    "banner": "YML: חזרה לניתוב דרך הים האדום ותעלת סואץ בשירותי MD1 ו־MS2 (הודעה מ־22.10.26)",
    "publishedDate": "2026-10-22",
    "added": "2026-11-23",
    "effectiveFromVessel": "YM TRUST V.106W (MD1) / ONE SYNERGY V.003W (MS2)",
    "validTo": null,
    "appliesWhen": "always",
    "service": "MD1",
    "originRegions": ["asia"],
    "severity": "warning",
    "quoteWarningTitle": "YML: חזרה לניתוב דרך הים האדום ותעלת סואץ בשירותי MD1 ו־MS2",
    "quoteWarning": "YML הודיעה ב־22.10.2026 ששירותי MD1 ו־MS2 חוזרים לניתוב המסורתי דרך הים האדום ותעלת סואץ, לשיפור זמני המעבר והאמינות. השינוי חל מההפלגות YM TRUST 106W (נינגבו, 10.11.2026) ו־ONE SYNERGY 003W (צ׳ינגדאו, 16.11.2026). YML תמשיך לעקוב אחרי המצב הביטחוני בים האדום.",
    "sections": [
      { "kind": "meta", "text": "תאריך ההודעה: 22.10.2026. מצורפת כ־Customer Advisory למייל ההצעות מ־28.10.2026." },
      { "kind": "p", "text": "כדי לשפר את יעילות שרשרת האספקה ולהציע זמני מעבר תחרותיים יותר בין אסיה לים התיכון, Yang Ming הודיעה ששירותי MD1 ו־MS2 ברשת Premier Alliance חוזרים לניתוב המסורתי דרך הים האדום ותעלת סואץ. ההחלטה התקבלה לאחר הערכת המצב הביטחוני והתפעולי באזור." },
      { "kind": "p", "text": "השינוי חל מההפלגות הבאות:" },
      { "kind": "list", "lead": "הפלגות תחילת הניתוב החדש", "items": [
        "MD1: YM Trust 106W, נינגבו 10.11.2026",
        "MD1: YM Trust 106E, דמייטה 07.12.2026",
        "MS2: ONE Synergy 003W, צ׳ינגדאו 16.11.2026",
        "MS2: ONE Synergy 003E, פיראוס 28.12.2026"
      ] },
      { "kind": "p", "text": "סיבוב MD1: Ningbo – Shanghai – Shekou – Singapore – Sokhna – (Suez) – Damietta – Istanbul – Izmit – Mersin – Damietta – (Suez) – Singapore – Kaohsiung." },
      { "kind": "p", "text": "סיבוב MS2: Qingdao – Pusan – Shanghai – Ningbo – Kaohsiung – Shekou – Singapore – (Suez) – Piraeus – Valencia – Barcelona – Genoa – La Spezia – Fos – (Suez) – Singapore – Laem Chabang – Cai Mep – Yantian – Pusan." },
      { "kind": "p", "text": "YML תמשיך לעקוב אחרי ההתפתחויות בים האדום. עדכוני ניתוב עתידיים ייבחנו שירות־שירות. בטיחות הצוות, האוניות ומטען הלקוחות נשארת בעדיפות העליונה. לאחר החזרה לניתוב דרך סואץ, הלקוחות אמורים ליהנות מזמני מעבר קצרים יותר ומאמינות לוח משופרת." },
      { "kind": "p", "text": "במייל שצורף להצעות 01.11.2026–15.11.2026 צוין גם שמשבוע 46 YML חוזרת לניתוב זה, ושמטען מדמייטה לאשדוד יועמס על פידרים ייעודיים ורגילים." },
      { "kind": "original", "lead": "נוסח מקורי", "text": "Premier Alliance Update – Resumption of Red Sea and Suez Canal Routing for MD1 and MS2 Services\n22 October 2026\n\nDear Valued Customers,\n\nTo enhance supply chain efficiency and offer more competitive transit times between Asia and the Mediterranean, Yang Ming Marine Transport Corp. (Yang Ming) announces that our MD1 and MS2 services, operating under the Premier Alliance network, will return to their traditional routing via the Red Sea and the Suez Canal. This strategic decision has been made following a comprehensive assessment of the regional security environment and operational conditions, with the objective of enhancing service reliability and transit time competitiveness.\nThis routing adjustment will take effect starting from the following voyages:\n\nMD1  YM Trust  106W  Ningbo  10 November 2026\nMD1  YM Trust  106E  Damietta  7 December 2026\nMS2  ONE Synergy  003W  Qingdao  16 November 2026\nMS2  ONE Synergy  003E  Piraeus  28 December 2026\n\nMD1 Service Details\nRotation: Ningbo – Shanghai – Shekou – Singapore – Sokhna – (Suez) – Damietta – Istanbul – Izmit – Mersin – Damietta – (Suez) – Singapore – Kaohsiung\n\nMS2 Service Details\nRotation: Qingdao – Pusan – Shanghai – Ningbo – Kaohsiung – Shekou – Singapore – (Suez) – Piraeus – Valencia – Barcelona – Genoa – La Spezia – Fos – (Suez) – Singapore – Laem Chabang – Cai Mep – Yantian – Pusan\n\nSafety and Monitoring:\nYang Ming will continue to closely monitor developments in the Red Sea and conduct ongoing assessments of the regional security environment. Any future routing updates will be evaluated on a service-by-service basis to ensure a controlled and gradual transition when conditions permit.\n\nThe safety and security of our crew, vessels, and customers' cargo remain our highest priority.\n\nCustomers will benefit from shorter transit times and improved schedule reliability following the reinstatement of traditional Suez Canal routing." }
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

  },
  {
    "id": "zim-klg-ow-2026-12-01",
    "carrierIds": ["zim"],
    "title": "ZIM: תוספת משקל יתר (KLG) למכולות 20׳ מסין והמזרח הרחוק",
    "banner": "⚠️ תוספת משקל יתר (KLG) למכולת 20׳ מסין והמזרח הרחוק, לפי משקל ברוטו (01.11–14.12.26)",
    "publishedDate": "2026-11-01",
    "added": "2026-11-22",
    "effectiveFromVessel": null,
    "validTo": "2026-12-14",
    "appliesWhen": "surcharge",
    "severity": "warning",
    "quoteWarningTitle": "⚠️ תוספת משקל יתר (KLG) למכולת 20׳",
    "quoteWarning": "כל מכולת 20׳ (DV20/OT20/FL20) כבדה מסין ומהמזרח הרחוק לישראל תחויב בתוספת משקל יתר (KLG) לפי משקל ברוטו: 20–24 טון 200$, 24–27 טון 400$, 27 טון ומעלה 600$. בתוקף להפלגות/BL מ־01.11.2026 עד 14.12.2026. לא חל על סחר הודו.",
    "surcharge": {
      "code": "KLG",
      "label": "KLG – תוספת משקל יתר",
      "currency": "USD",
      "basis": "Container",
      "effectiveFrom": "2026-11-01",
      "effectiveTo": "2026-12-14",
      "match": {
        "types": ["DV20", "OT20", "FL20"],
        "originCountries": ["CN", "HK", "TW", "JP", "KR", "VN", "TH", "PH", "ID", "SG"],
        "side": "origin",
        "excludeIfIncl": ["KLG"]
      },
      "weightBands": [
        {"min": 20, "max": 24, "maxInclusive": false, "amount": 200},
        {"min": 24, "max": 27, "maxInclusive": false, "amount": 400},
        {"min": 27, "amount": 600}
      ],
      "emptyWeightNote": "תוספת משקל יתר (KLG) למכולת 20׳ מסין והמזרח הרחוק: 20–24 טון 200$ · 24–27 טון 400$ · 27 טון ומעלה 600$. הזינו משקל ברוטו כדי לחשב. לא חל על הודו.",
      "belowBandNote": "משקל מתחת ל־20 טון — אין תוספת KLG לפי המדרגות שנמסרו.",
      "note": "חל על מכולת 20׳ מסין והמזרח הרחוק לישראל, לפי משקל ברוטו. לא חל על הודו."
    },
    "sections": [
      { "kind": "meta", "text": "בתוקף להפלגות/BL: 01.11.2026–14.12.2026. אותן מדרגות אושרו גם במחירוני הסכם 7110070812 ל־01.11.2026–14.11.2026 ול־15.11.2026–30.11.2026, ובהודעה ל־01.12.2026–14.12.2026." },
      { "kind": "p", "text": "כל מכולת 20׳ כבדה (DV20/OT20/FL20) מסין ומהמזרח הרחוק לישראל (W/B) תחויב בתוספת משקל יתר (KLG Overweight Surcharge) לפי משקל ברוטו:" },
      { "kind": "p", "text": "20–24 טון: 200$ · 24–27 טון: 400$ · 27 טון ומעלה: 600$." },
      { "kind": "p", "text": "המדרגות חלות מ־20 טון ומעלה. בדיוק 24 טון מחויב לפי מדרגת 24–27 (400$), ובדיוק 27 טון לפי 27 ומעלה (600$). אם לא הוזן משקל ברוטו, המדרגות מוצגות בהצעה בלי חיוב." },
      { "kind": "p", "text": "התוספת לא חלה על סחר הודו. בשורות הודו, סרי לנקה וצ׳טגונג במחירון צוין KLG included, והסכום לא נוסף שם שוב." },
      { "kind": "original", "lead": "נוסח מקורי", "text": "All heavy 20' from China and the Far-East will be charged over wt charge as follow:\nKLG Overweight Surcharge – Tariff for DV20/OT20/FL20\nTon (Gross)\n20-24 $200 · 24-27 $400 · 27+ $600\nF.East → Israel W/B" }
    ]
  },
  {
    "id": "zim-nbf-efs-2026-12",
    "carrierIds": ["zim"],
    "title": "ZIM: רמות NBF ו־EFS למטען יבש בדצמבר 2026",
    "banner": "צים: רמות NBF ו־EFS למטען יבש בדצמבר 2026 נשארות כמו בנובמבר 2026",
    "publishedDate": "2026-11-23",
    "added": "2026-11-23",
    "effectiveFromVessel": null,
    "validTo": "2026-12-31",
    "appliesWhen": "always",
    "severity": "warning",
    "quoteWarningTitle": "צים: רמות NBF ו־EFS למטען יבש בדצמבר 2026",
    "quoteWarning": "רמות NBF ו־EFS למטען יבש בדצמבר 2026 נשארות כמו בנובמבר 2026. 20׳ = 1 TEU, 40׳/HC = 2 TEU. פירוט הסכומים בהודעה.",
    "surcharge": {
      "code": "EFS",
      "label": "EFS",
      "currency": "USD",
      "perTeu": 125,
      "teuByType": { "DV20": 1, "FL20": 1, "OT20": 1, "DV40": 2, "HC40": 2, "FL40": 2, "OT40": 2 },
      "effectiveFrom": "2026-12-01",
      "effectiveTo": "2026-12-31",
      "match": {
        "originCountries": ["CA", "MX", "GT", "BZ", "CR", "PA", "CO", "VE", "AW", "BB", "CW", "DO", "GY"],
        "side": "origin",
        "dryOnly": true
      },
      "note": "חל על מטען יבש בדצמבר 2026, לפי הודעת צים שרמות EFS נשארות כמו בנובמבר. 125$ ל־TEU ביבוא מצפון אמריקה, מרכז אמריקה והקריביים (20׳ = 125$, 40׳/HC = 250$)."
    },
    "sections": [
      { "kind": "meta", "text": "התקבל: 23.11.2026. חל על מטען יבש בדצמבר 2026." },
      { "kind": "p", "text": "צים הודיעה שרמות NBF ו־EFS למטען יבש בדצמבר 2026 נשארות כמו בנובמבר 2026. הסכומים בטבלאות הם ל־TEU: מכולת 20׳ = 1 TEU, מכולת 40׳ או HC = 2 TEU." },
      { "kind": "list", "lead": "NBF", "items": [
        "ישראל אל/מ צפון אמריקה, מרכז אמריקה והקריביים: 393$ ל־TEU",
        "תת־היבשת ההודית לישראל: 447$ ל־TEU",
        "ישראל לתת־היבשת ההודית: 393$ ל־TEU",
        "המזרח הרחוק (לא כולל סין) לישראל: 793$ ל־TEU",
        "סין לישראל: 850$ ל־TEU",
        "ישראל למזרח הרחוק: 355$ ל־TEU",
        "תוך־ים־תיכוני (מזרח ומערב) והים השחור: 246$ ל־TEU",
        "צפון אירופה והבלטי/סקנדינביה לישראל: 320$ ל־TEU",
        "ישראל לצפון אירופה והבלטי/סקנדינביה: 272$ ל־TEU",
        "ישראל לדרום אמריקה: 236$ ל־TEU",
        "דרום אמריקה לישראל: 272$ ל־TEU"
      ]},
      { "kind": "list", "lead": "EFS", "items": [
        "ישראל אל/מ צפון אמריקה, מרכז אמריקה והקריביים: 125$ ל־TEU",
        "תוך־ים־תיכוני (מזרח ומערב) והים השחור: 0",
        "צפון אירופה והבלטי/סקנדינביה לישראל: 52$ ל־TEU",
        "ישראל לצפון אירופה והבלטי/סקנדינביה: 52$ ל־TEU"
      ]},
      { "kind": "original", "lead": "נוסח מקורי", "text": "Pls note that NBF and EFS levels for dry cargo will remain the same in December 2026 as November 2026\n\nNBF\nIsrael to/from North America & Central America & Caribbean: $393/TEU\nIndia Sub Continent to Israel: $447/TEU\nIsrael to India Sub Continent: $393/TEU\nFar East (excluding China) to Israel: $793/TEU\nChina to Israel: $850/TEU\nIsrael to the Far East: $355/TEU\nIntra Mediterranean (East & West) & Black Sea: $246/TEU\nNorth Europe and Baltic/Scand. to Israel: $320/TEU\nIsrael to North Europe and Baltic/Scand.: $272/TEU\nIsrael to South America: $236/TEU\nSouth America to Israel: $272/TEU\n\nEFS\nIsrael to/from North America & Central America & Caribbean: $125/TEU\nIntra Mediterranean (East & West) & Black Sea: 0\nNorth Europe and Baltic/Scand. to Israel: $52/TEU\nIsrael to North Europe and Baltic/Scand.: $52/TEU" }
    ]
  },
  {
    "id": "zim-gfs-2026-12-01",
    "carrierIds": ["zim"],
    "title": "ZIM: עדכון GFS מ־1.12.2026 ועד להודעה חדשה",
    "banner": "צים: עדכון GFS מ־1.12.2026 ועד להודעה חדשה (מטען FAK). השינוי היחיד: מסלולי דרום אמריקה",
    "publishedDate": "2026-11-23",
    "added": "2026-11-23",
    "effectiveFromVessel": null,
    "validTo": null,
    "appliesWhen": "always",
    "severity": "warning",
    "quoteWarningTitle": "צים: עדכון GFS מ־1.12.2026",
    "quoteWarning": "עודכנו רמות GFS למטען FAK מ־1.12.2026 ועד להודעה חדשה. לפי הטבלה, יבוא מהמזרח הרחוק לישראל (כולל סין) הוא 57$ ל־TEU. 20׳ = 1 TEU, 40׳/HC = 2 TEU. פירוט הסכומים בהודעה.",
    "surcharge": {
      "code": "GFS",
      "label": "GFS — תוספת דלק ירוק",
      "replaceCode": "GFS",
      "currency": "USD",
      "perTeu": 29,
      "teuByType": { "DV20": 1, "FL20": 1, "OT20": 1, "DV40": 2, "HC40": 2, "FL40": 2, "OT40": 2 },
      "effectiveFrom": "2026-12-01",
      "effectiveTo": null,
      "match": {
        "originCountries": ["BR", "AR", "UY"],
        "side": "origin",
        "dryOnly": true
      },
      "note": "מ־1.12.2026, לפי הודעת צים: GFS ביבוא מחוף מזרח דרום אמריקה הוא 29$ ל־TEU (20׳ = 29$, 40׳/HC = 58$). בנובמבר נשאר הסכום הקודם שבמחירון."
    },
    "surcharges": [
      {
        "ruleId": "zim-gfs-2026-12-01-cn",
        "code": "GFS",
        "label": "GFS — תוספת דלק ירוק",
        "addIfMissing": "GFS",
        "currency": "USD",
        "perTeu": 57,
        "teuByType": { "DV20": 1, "FL20": 1, "OT20": 1, "DV40": 2, "HC40": 2, "FL40": 2, "OT40": 2 },
        "effectiveFrom": "2026-12-01",
        "effectiveTo": null,
        "match": {
          "originCountries": ["CN"],
          "side": "origin",
          "dryOnly": true
        },
        "note": "מ־1.12.2026, לפי טבלת צים: GFS ביבוא מהמזרח הרחוק (כולל סין) הוא 57$ ל־TEU (20׳ = 57$, 40׳/HC = 114$). מתווסף רק אם אין כבר שורת GFS במחירון."
      }
    ],
    "sections": [
      { "kind": "meta", "text": "התקבל: 23.11.2026. בתוקף מ־1.12.2026 ועד להודעה חדשה. חל על מטען FAK." },
      { "kind": "p", "text": "צים פרסמה רמות GFS מעודכנות מ־1.12.2026 ועד להודעה חדשה, למטען FAK (Freight All Kind). צוין שהשינוי היחיד הוא במסלולים אל דרום אמריקה וממנה. הסכומים הם ל־TEU: מכולת 20׳ = 1 TEU, מכולת 40׳ או HC = 2 TEU." },
      { "kind": "p", "text": "לפי הטבלה, GFS ביבוא מהמזרח הרחוק לישראל הוא 57$ ל־TEU, כולל סין. במחירון עצמו לא הופיע GFS על מקורות בסין; מ־1.12.2026 הוא מתווסף להצעות היבוא היבש מסין (20׳ = 57$, 40׳/HC = 114$), ורק אם אין כבר שורת GFS. מקורות במזרח הרחוק שמחוץ לסין כבר היו 57$ במחירון ולא שונו." },
      { "kind": "list", "lead": "GFS", "items": [
        "ישראל אל/מ צפון אמריקה, מרכז אמריקה, הקריביים וחוף מערב דרום אמריקה: 203$ ל־TEU",
        "המזרח הרחוק לישראל: 57$ ל־TEU",
        "ישראל למזרח הרחוק: 18$ ל־TEU",
        "תת־היבשת ההודית לישראל: 57$ ל־TEU",
        "ישראל לתת־היבשת ההודית: 18$ ל־TEU",
        "תוך־ים־תיכוני (יבוא ויצוא) אל/מ ישראל: 231$ ל־TEU",
        "צפון אירופה והבלטי/סקנדינביה לישראל: 248$ ל־TEU",
        "ישראל לצפון אירופה והבלטי/סקנדינביה: 211$ ל־TEU",
        "ישראל לחוף מזרח דרום אמריקה: 27$ ל־TEU",
        "חוף מזרח דרום אמריקה לישראל: 29$ ל־TEU"
      ]},
      { "kind": "original", "lead": "נוסח מקורי", "text": "The following are the updated GFS effective from December 1st, 2026 till further notice, applying to FAK (Freight All Kind) cargo, in the trades as detailed below:\n(Only change is to/from South America)\n\nIsrael to/from North America & Central America & Caribbean & West Coast South America: $203/TEU\nFar East to Israel: $57/TEU\nIsrael to the Far East: $18/TEU\nIndia Sub-Continent to Israel: $57/TEU\nIsrael to India Sub-Continent: $18/TEU\nIntra Mediterranean (Import & Export) from/to Israel: $231/TEU\nNorth Europe and Baltic/Scand. to Israel: $248/TEU\nIsrael to North Europe and Baltic/Scand.: $211/TEU\nIsrael to east coast south America: $27/TEU\nEast coast south America to Israel: $29/TEU" }
    ]
  },
  {
    "id": "zim-nef-2026-12-01",
    "carrierIds": ["zim"],
    "title": "צים: עדכון אגרת פליטות (NEF) מ־1.12.2026 ליבוא לישראל ממדינות האיחוד האירופי",
    "banner": "צים: עדכון NEF מ־1.12.2026 ועד להודעה חדשה — יבוא לישראל ממדינות האיחוד האירופי",
    "publishedDate": "2026-12-01",
    "added": "2026-11-23",
    "effectiveFromVessel": null,
    "validTo": null,
    "appliesWhen": "always",
    "originCountries": ["IT", "FR", "ES", "GR", "SI", "BG", "RO", "CY", "PT"],
    "severity": "warning",
    "quoteWarningTitle": "צים: עדכון אגרת פליטות (NEF) מ־1.12.2026",
    "quoteWarning": "מ־1.12.2026 ועד להודעה חדשה עודכנה אגרת הפליטות (NEF) ליבוא לישראל ממדינות האיחוד האירופי. בתוך הים התיכון (כולל איטליה, צרפת, רומניה, בולגריה, סלובניה, וכן ספרד ויוון) הרמה היא 61€ ל־TEU (20׳ = 61€, 40׳/HC = 122€). בנובמבר נשאר הסכום הקודם שבמחירון. פירוט, כולל קפריסין ופורטוגל, בהודעה.",
    "surcharges": [
      {
        "code": "NEF",
        "label": "NEF — אגרת פליטות",
        "replaceCode": "NEF",
        "currency": "EUR",
        "perTeu": 61,
        "teuByType": { "DV20": 1, "FL20": 1, "OT20": 1, "DV40": 2, "HC40": 2, "FL40": 2, "OT40": 2 },
        "effectiveFrom": "2026-12-01",
        "effectiveTo": null,
        "match": {
          "originCountries": ["IT", "FR", "ES", "GR", "SI", "BG", "RO"],
          "side": "origin"
        },
        "note": "מ־1.12.2026, לפי הודעת צים: NEF ביבוא ממדינות Intra Mediterranean באיחוד האירופי הוא 61€ ל־TEU (20׳ = 61€, 40׳/HC = 122€). בנובמבר נשאר הסכום הקודם שבמחירון."
      }
    ],
    "sections": [
      { "kind": "meta", "text": "התקבל: 23.11.2026. בתוקף מ־1.12.2026 ועד להודעה חדשה. חל על יבוא לישראל ממדינות האיחוד האירופי. 20׳ = 1 TEU, 40׳ או HC = 2 TEU." },
      { "kind": "p", "text": "צים פרסמה רמות מעודכנות של New Emission Fee (NEF) מ־1.12.2026 ועד להודעה חדשה, לישראל אל מדינות האיחוד האירופי ומהן. במחשבון מיושם רק היבוא לישראל. המחירונים עצמם לא נערכו; בנובמבר נשאר הסכום שבמחירון, ומ־1.12.2026 מוחלף סכום ה־NEF לפי החוזר." },
      { "kind": "list", "lead": "NEF לפי החוזר:", "items": [
        "ים תיכון אל/מ בריטניה: 15$ ל־TEU (אין במחירון מוצאים בבריטניה, ולכן לא נוסף).",
        "תוך־ים־תיכוני (כולל, בין היתר, איטליה, צרפת, רומניה, בולגריה, סלובניה): 61€ ל־TEU. לפי גיאוגרפיה ברורה של הים התיכון באיחוד חלים גם ספרד ויוון.",
        "צפון אירופה לים התיכון ולים השחור (כולל, בין היתר, גרמניה, הולנד, בלגיה, קפריסין): 67€ ל־TEU.",
        "הים התיכון והים השחור לצפון אירופה (כולל אותן מדינות): 67€ ל־TEU — יצוא מישראל, לא מיושם במחשבון היבוא."
      ]},
      { "kind": "p", "text": "לא חל על מוצאים שאינם באיחוד האירופי (למשל אלבניה, מצרים, גאורגיה/פוטי, טורקיה)." },
      { "kind": "p", "lead": "קפריסין:", "text": "בחוזר מסווגת קפריסין תחת צפון אירופה (67€ ל־TEU). במחירון הקיים NEF כלול במחיר ההובלה (CNS/WR/NEF) בלי סכום נפרד, ולכן לא נוסף ולא הוחלף אוטומטית — יש לוודא מול צים." },
      { "kind": "p", "lead": "פורטוגל:", "text": "ליסבון ולשיש מופיעות במחירון עם NEF 60€/120€ כמו בתוך הים התיכון, אבל בחוזר פורטוגל לא צוינה, והסיווג בין Intra Med ל־North Europe אינו חד־משמעי. הסכום לא עודכן אוטומטית — יש לוודא מול צים." },
      { "kind": "original", "lead": "נוסח מקורי", "text": "The following are the updated New Emission fee (NEF) levels effective from December 1st, 2026 till further notice, applies for Israel to/from EU union countries.\n\nMediterranean to/from UK: $15/TEU\nIntra Mediterranean (including, but not limited to Italy; France; Romania; Bulgaria, Slovenia): €61/TEU\nNorth Europe to Mediterranean & Black Sea (including, but not limited to Germany; Netherland; Belgium; Cyprus): €67/TEU\nMediterranean & Black Sea to North Europe (including, but not limited to Germany; Netherland; Belgium; Cyprus): €67/TEU" }
    ]
  },
  {
    "id": "borchard-import-fob-2026-12",
    "carrierIds": ["borchard"],
    "title": "לוסי בוכרד: מחירון יבוא FOB למכולות יבשות (NON IMO), דצמבר 2026",
    "banner": "לוסי בוכרד: מחירון יבוא FOB למכולות יבשות (NON IMO) לדצמבר 2026, בתוקף עד 31.12.2026",
    "publishedDate": "2026-11-23",
    "added": "2026-11-23",
    "effectiveFromVessel": null,
    "validTo": "2026-12-31",
    "appliesWhen": "always",
    "severity": "info",
    "quoteWarningTitle": "לוסי בוכרד: יבוא FOB יבש / NON IMO, דצמבר 2026",
    "quoteWarning": "מחירון יבוא FOB למכולות יבשות, NON IMO, בתוקף עד 31.12.2026. הובלה בדולר (כולל BAF, או לפי הפירוט בשורה). ETS באירו; פידר מבלפסט לליברפול בליש\"ט. DETENTION מופיע בהערה לפי יעד ולא נוסף לסה״כ. חיובים מקומיים מוצגים בנפרד ולא נכללים בסה״כ ההובלה.",
    "sections": [
      { "kind": "meta", "text": "התקבל: 23.11.2026. תוקף: דצמבר 2026 עד 31.12.2026. Lucy Borchard Shipping LTD, as Agents Only of Borchard Lines." },
      { "kind": "p", "text": "המחירון הוא ליבוא FOB למכולות יבשות (DRY), NON IMO, ליעדי אשדוד וחיפה (אותם מחירי הובלה). זמני המעבר (T/T) במסמך מצוינים כ-approx. בלפסט מתומחר via Liverpool, כולל הובלת פידר." },
      { "kind": "p", "text": "DETENTION מופיע בטבלה לפי יעד: 20׳ אשדוד 21$ / חיפה 17$; 40׳/HC אשדוד 42$ / חיפה 34$. באנטוורפן, רוונה/ונציה ואלכסנדריה הוא כלול בהובלה. הסכום לא נוסף לסה״כ, כי במחירון לא צוין אם הוא ליום או חד-פעמי. ימי Demurrage פטורים וחיובים — לפי המסמך, זמינים במשרדי החברה לפי תנאי המוביל." },
      { "kind": "p", "text": "מגבלות מהמסמך: IMCO / מטען מסוכן — כפוף לאישור נפרד של המוביל. אין מטען פסולת, אין נשק, תחמושת או ציוד צבאי. כפוף למקום פנוי ולזמינות ציוד. קסטלון: Dry FAK only, not Ceramics. מקסימום משקל: 24 טון ל-20׳ (24–26 טון — תוספת 70$), 24 טון ל-40׳ (24–26 טון — תוספת 140$) — לא נוסף אוטומטית. Captain Mail ו-Self-Guarantee (Telex release) מותנים ומופיעים בחיובים המקומיים." },
      { "kind": "list", "lead": "תנאים מהמסמך", "items": [
        "To the above you should add all surcharges and relevant taxes.",
        "All rates subject to change.",
        "The carrier has the right to modify or suspend the service and or offer, or apply surcharges upon the implementation of (or in advance of,) any Emissions Trading Scheme and/or Emissions regulations (including EEXI/CII) introduced by the EU or other national, international or regional authorities.",
        "SHOULD BE ANY SURCHARGES COMING INTO FORCE AT TIME OF SHIPMENT (I.E. WAR RISK, BAF, CAF, CONGESTION, THC OR OTHERS), THESE WILL BE ADDED ON TOP OF THE ABOVE MENTIONED RATE. RATES CAN CHANGE WITHOUT PRIOR NOTICE.",
        "התשלום בש״ח עפ״י שער ספנות ביום התשלום.",
        "STANDARD BORCHARD BILL OF LADING TERMS/CONDITIONS: WWW.BORLINES.COM — Conditions of Carriage: www.borlines.com/info/legal-terms"
      ]},
      { "kind": "original", "lead": "נוסח מקורי (עמוד 4)", "text": "IMPORT FOB RATES · DRY · NON IMO\nDecember 2026\nValid till 31.12.2026\n\nPlease see below our IMPORT FOB rates for dry containers, NON IMO for December 2026.\nVALID TILL 31.12.2026\n\nMAX INTAKE 24 T/20' (24-26 T - Additional $70) , 24 T/40' (24-26 T – Additional $140)\nIMCO Cargo – subject to separate Acceptance by the Carrier\nNo Waste cargo allowed, No Weapons, No Ammunition or Military Equipment Allowed.\nSubject to both space & Equipment Availability\n\n• To the above you should add all surcharges and relevant taxes.\n• All rates subject to change.\n• The carrier has the right to modify or suspend the service and or offer, or apply surcharges upon the implementation of (or in advance of,) any Emissions Trading Scheme and/or Emissions regulations (including EEXI/CII) introduced by the EU or other national, international or regional authorities\nSHOULD BE ANY SURCHARGES COMING INTO FORCE AT TIME OF SHIPMENT (I.E. WAR RISK, BAF, CAF, CONGESTION, THC OR OTHERS), THESE WILL BE ADDED ON TOP OF THE ABOVE MENTIONED RATE. RATES CAN CHANGE WITHOUT PRIOR NOTICE.\n** התשלום בש\"ח עפ\"י שער ספנות ביום התשלום.\nSTANDARD BORCHARD BILL OF LADING TERMS/CONDITIONS PUBLISHED AT: WWW.BORLINES.COM\nDemurrage free days /Demurrage charges available at our offices as per carrier's terms and conditions.\n\nLucy Borchard Shipping LTD. · As Agents Only of Borchard Lines\nAll shipments are subject to Borchard Lines Ltd Conditions of Carriage which are available at www.borlines.com/info/legal-terms. Lucy Borchard Shipping LTD are acting as agents for and on behalf of Borchard Lines Ltd." }
    ]
  },
  {
    "id": "msc-nwc-uk-2026-12",
    "carrierIds": ["msc"],
    "title": "MSC: מחירון FAK ליבוא מ-UK ומ-NWC לדצמבר 2026, ועדכון מספרי חוזה",
    "banner": "⚠️ MSC: מחירון FAK מ-UK (לונדון גייטוויי) ומ-NWC (אנטוורפן, רוטרדם, לה האבר, המבורג) בתוקף 01.12.2026–31.12.2026. מספר חוזה מעודכן: Q73WC4P6G — מספרי החוזה הקודמים אינם בתוקף.",
    "publishedDate": "2026-11-12",
    "added": "2026-11-23",
    "effectiveFromVessel": null,
    "validTo": "2026-12-31",
    "appliesWhen": "always",
    "severity": "info",
    "originCountries": ["GB", "BE", "NL", "FR", "DE"],
    "quoteWarningTitle": "MSC: מחירון UK / NWC לדצמבר 2026",
    "quoteWarning": "תוקף 01.12.2026–31.12.2026. יש להשתמש במספר החוזה המעודכן Q73WC4P6G; מספרי החוזה הקודמים אינם בתוקף. הימים החופשיים (21) תקפים רק למשלוחי Collect. למטען מסוכן נדרש אישור מוקדם של MSC ישראל.",
    "sections": [
      { "kind": "meta", "text": "התקבל במייל מ-12.11.2026. תוקף התעריפים: 01.12.2026–31.12.2026. הצד: MEDITERRANEAN SHIPPING CO. (Israel) Ltd., as agent only for MSC Mediterranean Shipping Company S.A., Geneva." },
      { "kind": "p", "lead": "עדכון מספרי חוזה:", "text": "במסגרת המעבר למערכת תמחור חדשה עודכנו מספרי החוזים בחלק מההסכמים. יש להקפיד להשתמש במספרי החוזה המעודכנים עבור כל משלוח עתידי, שכן מספרי החוזה הקודמים אינם בתוקף עוד. בהמשך, כלל ההסכמים ינוהלו במערכת החדשה. במחירון הזה מספר החוזה הוא Q73WC4P6G." },
      { "kind": "p", "text": "התעריפים הם FAK ליבוא לישראל. במייל לא צוין במפורש נמל היעד; אותו מחיר הוחל על אשדוד ועל חיפה, כמקובל בהצעות יבוא של MSC לישראל. 40׳ HC לא צוין במחירון, ולא הומצא לו תעריף." },
      { "kind": "list", "lead": "הובלה (דולר)", "items": [
        "UK — London Gateway (LGW): 200$ ל-20׳, 300$ ל-40׳.",
        "NWC — Antwerp / Rotterdam / Le Havre / Hamburg: 375$ ל-20׳, 600$ ל-40׳."
      ]},
      { "kind": "list", "lead": "תוספות שנוספו לסה״כ (דולר, דצמבר)", "items": [
        "BRC 367$/TEU (367$ ל-20׳, 734$ ל-40׳).",
        "PSS 200$/TEU (200$ / 400$).",
        "IEI (Import Emergency Imbalance) 100$ למכולה.",
        "ECA 160$/TEU (160$ / 320$).",
        "ETS 66$/TEU (66$ / 132$).",
        "EFS 81$/TEU (81$ / 162$).",
        "FEU 12$/TEU (12$ / 24$) — כך במחירון, כולל הסימון /TEU.",
        "THC יעד VATOS: 275$ ל-20׳, 400$ ל-40׳.",
        "EBS: NO EBS — לא נוסף."
      ]},
      { "kind": "p", "lead": "ימי חופש:", "text": "21 ימים מופיעים בהסכם הדמורג'. לפי המחירון, הימים החופשיים בהצעה תקפים רק למשלוחים על בסיס Collect." },
      { "kind": "list", "lead": "לא נוסף אוטומטית", "items": [
        "HAZ (Med & Low Risk): 50$/TEU בשורות NWC בלבד (בתא UK התא היה ריק).",
        "תעריף מטען מסוכן לפי רמת סיכון (מ-01.01.2023): Low 300$/מכולה, Med 400$, High 800$. סוללות ליתיום נחשבות High Risk.",
        "למטען מסוכן נדרש אישור מוקדם של MSC ישראל לפי Packing Group ו-Class, לפני הטענה.",
        "THC ל-IMO ולציוד מיוחד: 320$ ל-20׳, 460$ ל-40׳.",
        "EIS 50$/מכולה למטען self-heating, לפי קודי HS שפורטו במחירון (ייתכנו קודים נוספים בלי הודעה מוקדמת).",
        "Foodgraded units — תוספת בלי סכום במחירון.",
        "Flexitank — התעריפים אינם תקפים; יש לבדוק מול המשרד.",
        "מטען בשווי מעל 500,000$ למכולה, או תרופות יקרות — התעריפים אינם תקפים.",
        "ISPS בנמל המוצא (כפוף, בלי סכום), LWS אם/מתי/היכן שחל, ו-GRI."
      ]},
      { "kind": "p", "text": "הדירוג לפי תאריך הפלגת הפרופורמה בלוח MSC. כפוף לתוספות חירום V.A.T.O.S, לזמינות ציוד במוצא, לביקורת בנמלי שטעון, לדמי D/O ולהוצאות מקומיות. לא כולל שחרור מכס, שירותי פורוורדינג, הטענה/קשירה/אבטחת מטען, אחסנה, demurrage מעבר לימי הפטור, זמן המתנה, ביטוח ומסי יבוא מקומיים. תנאי ההובלה: https://www.msc.com/che/contract-of-carriage." },
      { "kind": "original", "lead": "נוסח מקורי", "text": "Good day\nPls find below rates val 1.12.26-31.12.26\n\nFAK  UK  LGW  20' $200  40' $300  BRC DEC $367/TEU  NO EBS  PSS $200/TEU  IEI $100/CNTR  HAZ (MED & LOW RISK) (blank)  ECA DEC $160/TEU  ETS DEC $66/TEU  EFS $81/TEU  FEU $12/TEU  THC VATOS BELOW  DEMURRAGE AGREEMENTS 21  CONTRACT NO Q73WC4P6G\n\nFAK  NWC  ANT / RTM / LHV / HAM  20' $375  40' $600  BRC DEC $367/TEU  NO EBS  PSS $200/TEU  IEI $100/CNTR  HAZ (MED & LOW RISK) $50/TEU  ECA DEC $160/TEU  ETS DEC $66/TEU  EFS $81/TEU  FEU $12/TEU  THC VATOS BELOW  DEMURRAGE AGREEMENTS 21  CONTRACT NO Q73WC4P6G\n\nTHC VATOS\nTHC  20' $275  40' $400\nTHC FOR IMO CARGO AND SPECIAL EQUIP  20' $320  40' $460\n\nRATES ARE SUBJECT TO FOODGRADED UNITS ADDITIONAL\nRATES ARE NOT VALID FOR HIGH VALUE CARGO OVER $500,000 PER CNTR OR HIGH VALUE PHARMACEUTICAL GOODS.\nEIS SURCHARGE AT USD 50 PER CNTR FOR ALL SELF-HEATING CARGOES WILL BE ADDED ON TOP ANY FREIGHT TERMS AGREED\n\"ALL SHIPMENTS ARE SUBJECT TO ISPS COSTS AT POL\"\nRATES ARE NOT VALID FOR FLEXITANK – PLS CHECK WITH OUR OFFICE\nFOR HAZ COMMODITY YOU MUST GET MSC ISRAEL PREAPPROVAL BEFORE LOADING BASED ON THE PACKING GROUP (PG) AND CLASS.\nHAZARDOUS CARGO TARIFF LEVEL WILL BE BASED ON LEVEL OF RISK IMPLEMENTED AS FROM JAN 1ST 2023 ON ALL TRADES, AS FOLLOWS:\nHAZ LOW RISK $300/CNTR\nHAZ MED RISK $400/CNTR\nHAZ HIGH RISK $800/CNTR\n*LITHIUM BATTERIES ARE CONSIDERED AS HIGH RISK HAZ\nEIS (SELF IGNITING COMM) 50$ PER CNTR - ONLY FOR SPECIFIC H.S CODE SHOWN BELOW (OTHER HS CODE MIGHT BE ADDED TO THE LIST WITHOUT PRIOR NOTIFICATION):\n  0305 / 1214 / 1404 / 1802 / 2301 / 2304 / 2305 / 2306 / 2308 / 2309 / 2803 / 3802 / 3804 / 4004 / 4400 / 4401 / 4402 / 5200 / 5201 / 5300 / 5301 / 5302 / 5303 / 5305 / 7204 / 7602\nRATES ARE SUBJECT TO GRI\nRATES EXCLUDE CUSTOM CLEARANCE AND /OR ANY FORWARDING SERVICES.\nRATES ARE SUBJECT TO APPLICATION OF ANY EMERGENCY SURCHARGES *V.A.T.O.S\nRATES ARE SUBJECT TO LWS (LOW WATTER SURCHARGES) IF, WHEN AND WHERE APPLICABLE.\nRATES DO NOT INCLUDE LOADING, LASHING, SECURING, BLOCKING AND BRACING OF CARGO.\nRATES ARE CHARGED ACC. TO PROFORMA SAILING DATE OF MSC SCHEDULE\nFREE DAYS INDICATED IN THIS OFFER ARE VALID ONLY FOR SHIPMENTS ON COLLECT BASIS\nRATES ARE SUBJECT TO AVAILABILITY OF EQUIPMENT AT PORT OF LOADING AT TIME OF SHIPMENT.\nRATES ARE SUBJECT TO INSPECTION COSTS, AT TRANSHIPMENT PORTS.\nRATES DO NOT INCLUDE STORAGE, DEMURRAGE, WAITING TIME, INSURANCE AND LOCAL IMPORT DUTIES AT PORT OF LOADING.\nRATES DO NOT INCLUDE STORAGE, DEMURRAGE, WAITING TIME, INSURANCE AND LOCAL IMPORT DUTIES AT PORT OF DISCHARGE.\nRATES ARE SUBJECT TO DELIVERY ORDER FEES AND LOCAL EXPENSES." }
    ]
  },
  {
    "id": "msc-nwc-uk-haz-2026-12",
    "carrierIds": ["msc"],
    "title": "MSC: מטען מסוכן במחירון UK / NWC לדצמבר 2026",
    "banner": "⚠️ MSC: למטען מסוכן מ-UK/NWC נדרש אישור מוקדם של MSC ישראל לפני הטענה. תעריפי HAZ לא נוספו אוטומטית לסה״כ.",
    "publishedDate": "2026-11-12",
    "added": "2026-11-23",
    "effectiveFromVessel": null,
    "validTo": "2026-12-31",
    "appliesWhen": "haz",
    "severity": "warning",
    "originCountries": ["GB", "BE", "NL", "FR", "DE"],
    "quoteWarningTitle": "⚠️ MSC: מטען מסוכן — נדרש אישור מוקדם",
    "quoteWarning": "למטען מסוכן נדרש אישור מוקדם של MSC ישראל לפי Packing Group ו-Class, לפני הטענה. תעריפי HAZ לא נוספו לסה״כ: ב-NWC יש גם 50$/TEU ל-Med & Low Risk; לפי רמת סיכון Low 300$/מכולה, Med 400$, High 800$ (סוללות ליתיום = High Risk). THC ל-IMO 320$/20׳ ו-460$/40׳.",
    "sections": [
      { "kind": "meta", "text": "מתוך מחירון FAK UK / NWC לדצמבר 2026 (התקבל 12.11.2026). חל כשהמטען מסומן כמסוכן." },
      { "kind": "p", "text": "למטען מסוכן חובה לקבל אישור מוקדם של MSC ישראל לפני הטענה, לפי Packing Group (PG) ו-Class. סוללות ליתיום נחשבות High Risk." },
      { "kind": "list", "lead": "סכומים שלא נוספו אוטומטית", "items": [
        "HAZ (Med & Low Risk) 50$/TEU — מופיע בשורות NWC בלבד; בתא UK התא היה ריק.",
        "תעריף לפי רמת סיכון (מ-01.01.2023, כל הסחרים): Low 300$/מכולה, Med 400$/מכולה, High 800$/מכולה.",
        "THC ל-IMO ולציוד מיוחד: 320$ ל-20׳, 460$ ל-40׳ (במקום 275$/400$ ליבש).",
        "EIS 50$/מכולה למטען self-heating, לפי קודי HS שפורטו במחירון."
      ]},
      { "kind": "original", "lead": "נוסח מקורי", "text": "FOR HAZ COMMODITY YOU MUST GET MSC ISRAEL PREAPPROVAL BEFORE LOADING BASED ON THE PACKING GROUP (PG) AND CLASS.\nHAZARDOUS CARGO TARIFF LEVEL WILL BE BASED ON LEVEL OF RISK IMPLEMENTED AS FROM JAN 1ST 2023 ON ALL TRADES, AS FOLLOWS:\nHAZ LOW RISK $300/CNTR\nHAZ MED RISK $400/CNTR\nHAZ HIGH RISK $800/CNTR\n*LITHIUM BATTERIES ARE CONSIDERED AS HIGH RISK HAZ\nHAZ (MED & LOW RISK): NWC $50/TEU (UK cell blank)\nTHC FOR IMO CARGO AND SPECIAL EQUIP  $320 / $460\nEIS SURCHARGE AT USD 50 PER CNTR FOR ALL SELF-HEATING CARGOES WILL BE ADDED ON TOP ANY FREIGHT TERMS AGREED" }
    ]
  },
  {
    "id": "oocl-no-military-cargo-2026-11",
    "carrierIds": ["oocl"],
    "title": "OOCL: אין קבלה של מטען ביטחוני או צבאי",
    "banner": "⚠️ OOCL אינה מקבלת מטען ביטחוני או צבאי, ולא סחורות הקשורות לו.",
    "publishedDate": "2026-11-04",
    "added": "2026-11-24",
    "effectiveFromVessel": null,
    "validTo": "2026-12-14",
    "appliesWhen": "always",
    "severity": "warning",
    "quoteWarningTitle": "⚠️ OOCL: אין קבלה של מטען ביטחוני או צבאי",
    "quoteWarning": "OOCL אינה מקבלת מטען ביטחוני או צבאי, ולא סחורות הקשורות לו.",
    "sections": [
      { "kind": "meta", "text": "מופיע במיילי OOCL מ־04.11.2026 (תוקף 15–30.11) ומ־19.11.2026 (תוקף 01–14.12), filing 00007640." },
      { "kind": "p", "text": "OOCL אינה מקבלת מטען ביטחוני או צבאי, ולא סחורות הקשורות לו." },
      { "kind": "original", "lead": "נוסח מקורי", "text": "Not accepting security  / military cargo or related commodities." }
    ]
  },
  {
    "id": "msc-india-sl-2026-11-19",
    "carrierIds": [
      "msc"
    ],
    "title": "MSC: מחירון FAK ליבוא מהודו ומסרי לנקה, 19.11.2026–15.12.2026, ואיסור Granite Blocks",
    "banner": "MSC יבוא מהודו/סרי לנקה: מחירון FAK בתוקף 19.11.2026–15.12.2026, חוזה FAK R26824020000093, חוזה COIR R26825020000029. לא מקבלים Granite Blocks.",
    "publishedDate": "2026-11-19",
    "added": "2026-11-24",
    "effectiveFromVessel": null,
    "validTo": "2026-12-15",
    "appliesWhen": "always",
    "severity": "warning",
    "originCountries": [
      "IN",
      "LK"
    ],
    "quoteWarningTitle": "MSC: יבוא מהודו / סרי לנקה — לא מקבלים Granite Blocks",
    "quoteWarning": "מחירון FAK HARMLESS בתוקף 19.11.2026–15.12.2026, חוזה FAK R26824020000093, חוזה COIR R26825020000029 (מכותרת המייל מ-22.11.2026). במחירון נכתב במפורש: לא מקבלים מטען Granite Blocks. תעריפי Coir pith דורשים הסכם נפרד ולא נכללו.",
    "sections": [
      {
        "kind": "meta",
        "text": "התקבל במייל מ-24.11.2026 כהארכת תוקף עד 15.12.2026. כותרת המחירון עודכנה ב-23.11.26. תוקף: 19.11.2026–15.12.2026 (*Effective last container Received for export at train depots, terminals or POL'S). מספר חוזה: R26824020000093 (FAK). חוזה COIR: R26825020000029 (מכותרת המייל מ-22.11.2026 באותו שרשור). הצד: MSC Mediterranean Shipping Agency AG, as agent only for MSC Mediterranean Shipping Company S.A., Geneva."
      },
      {
        "kind": "p",
        "lead": "איסור מטען:",
        "text": "PAY ATTENTION: We Don’t Accept Granite Blocks commodity. לא מקבלים מטען Granite Blocks."
      },
      {
        "kind": "p",
        "text": "התעריפים הם F.A.K. harmless ליעדי אשדוד וחיפה (אותו מחיר). 14 ימי demurrage חינם ביעד, אלא אם צוין אחרת. EFS לפי העמודה EFS IN USD - NOV/DEC: 167$ ל-TEU בנובמבר ו-168$ ל-TEU בדצמבר. DTHC 275$/20׳ ו-400$/40׳. OVW כלול בתעריף ל-20׳."
      },
      {
        "kind": "p",
        "text": "אין במחירון תעריף COIR. מספר חוזה COIR R26825020000029 מוצג לפי כותרת המייל מ-22.11.2026. ל-Coir pith/Flammable material נדרש הסכם נפרד (EIS 50$ למכולה) — לא הומצא תעריף."
      },
      {
        "kind": "original",
        "lead": "נוסח מקורי",
        "text": "Updated rate offer Ex India + Sri Lanka as from 19.11.2026 till 15.12.2026* (F.A.K HARMLESS) To Haifa/Ashdod — Updated 23.11.26\n\nPAY ATTENTION: We Don’t Accept Granite Blocks commodity\n\nEIS $50/container applicable for Commodity Coir pith/ Flammable material-  A separate agreement is required for this cargo upon request\n\nRates are subject to EFS.\nEFS IN USD - NOV/DEC: 167/168 X TEU\n14 DAYS FREE OF DEMURRAGE IS APPLICABLE AT POD - UNLESS STATED DIFFERENTLY BY YOUR SALES PERSON.\nORIGIN THC SHOULD BE PAID BY SHIPPER\n\nPlease find our attached extended rate offer with validity of 15.12.2026.\nThe rate agreement mentioned in the subject line has been filed accordingly in our system.\n\nFrom the 22.11.2026 email in the same thread:\nSubject: RE: RATE OFFER EX INDIA VALID as from 19.11.2026-30.11.2026 CONTRACT R26824020000093(FAK)+ R26825020000029 (COIR) MAYAN OVERSEAS LTD\n\nPls find below the updated Transit Time ex the main ports of loading:\nNorth India POL Mundra to POD ASH / HFA : 48-49\nPOL Nhava Sheva to POD ASH / HFA : 47-48\nSouth and West India POL Tuticorin to POD ASH / HFA : 44-45\nPOL Kolkata to POD ASH / HFA : 53-54\nColombo POL SRI LANKA to POD ASH / HFA : 37-38"
      }
    ]
  },
  {
    "id": "one-pss-japan-2026-12-01",
    "carrierIds": [
      "one"
    ],
    "title": "ONE: תוספת עונת שיא (PSS) ביבוא מיפן לישראל מ־01.12.2026",
    "banner": "ONE: מ־01.12.2026 תוספת PSS ביבוא מיפן לישראל — 750$ ל־20׳, 1,500$ ל־40׳, עד להודעה חדשה",
    "publishedDate": "2026-11-24",
    "added": "2026-11-24",
    "effectiveFromVessel": null,
    "validTo": null,
    "appliesWhen": "always",
    "severity": "warning",
    "originCountries": [
      "JP"
    ],
    "quoteWarningTitle": "ONE: תוספת PSS ביבוא מיפן לישראל מ־01.12.2026",
    "quoteWarning": "מ־01.12.2026 ועד להודעה חדשה חלה תוספת עונת שיא (PSS) על יבוא מיפן לישראל: 750$ למכולת 20׳ ו־1,500$ למכולת 40׳. אין במחשבון מחירון ONE ליפן כרגע; אם ייתוסף, התוספת תחושב אוטומטית לסה״כ מתאריך BL 01.12.2026.",
    "surcharge": {
      "code": "PSS",
      "label": "PSS — Peak Season Surcharge (יפן)",
      "currency": "USD",
      "basis": "Container",
      "perTeu": 750,
      "teuByType": {
        "DV20": 1,
        "FL20": 1,
        "OT20": 1,
        "DV40": 2,
        "HC40": 2,
        "FL40": 2,
        "OT40": 2
      },
      "effectiveFrom": "2026-12-01",
      "effectiveTo": null,
      "match": {
        "originCountries": [
          "JP"
        ],
        "side": "origin"
      },
      "note": "מ־01.12.2026 ועד להודעה חדשה: PSS ביבוא מיפן לישראל, 750$ למכולת 20׳ ו־1,500$ למכולת 40׳. 40HC מחויב בסכום ה־40׳, לפי מוסכמת האתר לתוספות שמצוינות ל־40׳."
    },
    "sections": [
      {
        "kind": "meta",
        "text": "התקבל בהודעה ב־24.11.2026 (לא צוין תאריך במייל המקורי). בתוקף מ־01.12.2026 ועד להודעה חדשה. חל על יבוא מיפן לישראל בחברת ONE."
      },
      {
        "kind": "p",
        "text": "מ־01.12.2026 תחול תוספת עונת שיא (Peak Season Surcharge, PSS) על משלוחי יבוא מיפן לישראל, בסכומים הבאים:"
      },
      {
        "kind": "list",
        "items": [
          "750$ למכולת 20׳",
          "1,500$ למכולת 40׳"
        ]
      },
      {
        "kind": "p",
        "text": "התוספת תישאר בתוקף עד להודעה חדשה. אין במחשבון מחירון ONE ליפן כרגע, ולכן אין ציטוט מחיר לנמלי יפן. אם ייתוסף מחירון כזה, התוספת תתווסף אוטומטית לסה״כ כאשר תאריך ה-BL הוא 01.12.2026 או מאוחר יותר."
      },
      {
        "kind": "original",
        "lead": "נוסח מקורי",
        "text": "Dear Valued Customers,\nPlease be advised that effective December 1st, 2026, a Peak Season Surcharge (PSS) will apply to import shipments from Japan to Israel as follows:\n•\tUSD 750 per 20’ container\n•\tUSD 1,500 per 40’ container\nThe surcharge will remain in effect until further notice.\nThank you for your understanding and continued support.\nBest regards,\nCrown Shipping"
      }
    ]
  },
  {
    "id": "msc-spot-asia-2026-12-01",
    "carrierIds": [
      "msc"
    ],
    "title": "MSC: מחירון SPOT למזרח הרחוק ולדרום-מזרח אסיה, 1.12.2026–14.12.2026 — מגבלת משקל, SCT ומדיניות תמחור",
    "banner": "MSC SPOT מזרח הרחוק / דרום-מזרח אסיה: תוקף 1.12.2026–14.12.2026. תעריף 20׳ עד 22.9 טון; יש לאמת קוד SCT לפני הזמנה.",
    "publishedDate": "2026-11-25",
    "added": "2026-11-25",
    "effectiveFromVessel": null,
    "validTo": "2026-12-14",
    "appliesWhen": "always",
    "severity": "warning",
    "originCountries": [
      "CN",
      "HK",
      "ID",
      "TH",
      "VN",
      "KR",
      "TW",
      "SG",
      "PH",
      "JP"
    ],
    "quoteWarningTitle": "MSC: מגבלת משקל ב-20׳, קוד SCT ומדיניות תמחור",
    "quoteWarning": "מחירון SPOT HARMLESS בתוקף 1.12.2026–14.12.2026 ליעדי אשדוד וחיפה. תעריף מכולת 20׳ DV חל רק עד משקל ברוטו 22.9 טון; למטען כבד יותר חלות תוספות — הסכום לא צוין במחירון ולא הומצא. יש לאמת את קוד ה-SCT מול משרד MSC לפני ההזמנה: שינוי אחרי שההזמנה הוצבה — קנס 3,500$ למכולה; קוד שגוי בלי תעריף — יחולו תעריפי FAK; אם המכולות הריקות טרם שוחררו, ניתן לשנות את הקוד בלי קנס. הובלה מנמלי בסיס לפי תאריך יציאת הפרופורמה, ומנמלי out לפי היציאה בפועל. ההצעה כפופה לזמינות מקום. מספר SCT: 2361-88888-ST.",
    "sections": [
      {
        "kind": "meta",
        "text": "התקבל ב-25.11.2026 כ-revised rates. תאריך ההנפקה 25.11.2026. תוקף: Effective as of 1.12.2026 until further notice but not beyond 14.12.2026 (HARMLESS). כותרת המחירון: SPOT rate offer to Ashdod (HCT) and Haifa ports. זה עדכון תעריפים לאותו חלון של המחירון הקודם (FAK rate offer, הונפק 15.11.2026): אותם נמלים ותוספות, והובלה ימית הופחתה ב-200$ ל-20׳ וב-200$ ל-40׳/HC. מספר SCT: 2361-88888-ST."
      },
      {
        "kind": "p",
        "lead": "מגבלת משקל:",
        "text": "תעריפי 20׳ DV חלים רק על מטען במשקל ברוטו עד 22.9 טון. למטען כבד יותר חלות תוספות נוספות; הסכום לא צוין במחירון ולא הומצא."
      },
      {
        "kind": "p",
        "lead": "קוד SCT:",
        "text": "מספר SCT: 2361-88888-ST. יש לאמת את הקוד מול משרד MSC לפני ההזמנה. אחרי שההזמנה הוצבה לא ניתן לשנות את הקוד, ושינוי יגרור קנס של 3,500$ למכולה. הזמנה שאושרה עם קוד SCT שגוי ובלי תעריף — יחולו תעריפי FAK. אם המכולות הריקות טרם שוחררו, ניתן לשנות את קוד ה-SCT בלי קנס. האחריות להעביר את הקוד הנכון לסוכן או לספק במוצא היא על המזמין."
      },
      {
        "kind": "p",
        "lead": "מדיניות תמחור וזמינות:",
        "text": "הובלה מנמלי בסיס מחושבת לפי תאריך יציאת הפרופורמה (scheduled vessel departure = proforma sailing date), לא לפי היציאה בפועל ולא לפי כניסת המכולה לטרמינל. מנמלי out (Sihanoukville, Makassar, Songkhla ונמלי out בסין) — לפי היציאה בפועל; בנגקוק לפי פרופורמת Laem Chabang. ההצעה כפופה לזמינות מקום במועד ההזמנה, וצוין שהזמינות מוגבלת. החברה אינה מתחייבת לטעינה באונייה, בתאריך או בשעה מסוימים; לוחות הזמנים הם הערכות בלבד. הזמנה מהווה הסכמה לתנאי MSC Israel."
      },
      {
        "kind": "p",
        "lead": "הערות מגיליונות pre-carriage:",
        "text": "גיליונות pre-carriage / TAO-PRE וסין inland לא נכללו בסה״כ (התעריפים הם מעל תעריף נמל האם). בגיליון Third Party Feeders TAO & PRE נכתב שיש להוסיף CRS לכל נמלי הטעינה/הקבלה שברשימה. בגיליון China Pre-carriage: MSC שומרת לעצמה את הזכות להחיל תעריפי inland/ONC/תוספות מעודכנים בלי הודעה מוקדמת. התעריפים אינם חלים על מטען מיוחד כגון DG, OOG וריפר (אלא אם צוין במפורש), ויש לבדוק מול כל נמל טעינה בנפרד. קבלת מטען מסוכן כפופה לאישור Medlog. התעריפים אינם כוללים שחרור מכס, דמי בדיקה וחיובים אחרים. ליעדי סוריה, איראן וסודן התעריף באירו בלבד. דוברה בין-לאומית דרך הונג קונג כפופה ל-THC ולדמי מסמכים בהונג קונג, ודרך יאנטיאן — ל-THC ולדמי מסמכים ביאנטיאן. עלות משאיות SPRC הוסרה בשל ביקוש נמוך ותטופל מקרה-מקרה. תעריף משאית הוא אינדיקטיבי בלבד, והמחיר בפועל לפי הכתובת ודרישות השולח. תעריפי המשאית הם עלות הובלה יבשתית בלבד, למטען/ציוד כללי, ואינם כוללים שחרור מכס, בדיקה, חיטוי וחיובים אחרים. מטען מיוחד או מסוכן — הצעה מקרה-מקרה, ולמטען מסוכן תיתכן תוספת (בכפוף לאישור Medlog). אם ההזמנה בוטלה אחרי איסוף המכולה הריקה, יחויבו 80% מהעלויות על השולח. תוספת שעות נוספות: 100 RMB או 15$ למשאית לשעה (מעל 4 שעות). תוספת לינה: 1,000 RMB או 143$ למשאית ללילה. לנקודות inland שאינן ברשימה יש לפנות ל-MSC הונג קונג עם פרטי הכתובת. פרטי קשר אישיים או כתובות דוא״ל שהופיעו בגיליון לא פורסמו."
      },
      {
        "kind": "original",
        "lead": "נוסח מקורי — גיליונות pre-carriage",
        "text": "South East Asia pre carriage (THIRD PARTY FEEDERS TAO & PRE):\nCRS to be added for all below POLs\n\nChina Pre-carriage:\nMSC reserves the right to apply latest Inlands/ONC/additional rates without Pre-notice\nBelow rate does not apply to special cargos e.g, DG, OOG, Reefer etc (unless specially specify), please check with each POL separately\nD.G cargo acceptance are subjected to Medlog approval, please check with each POL separately\nBelow rate does not include customs clearance, inspection fee, and any other charges\nEuro for POD: Syria/ Iran/Sudan  only\n\nInternational Barge via Hong Kong: Subject to Hong Kong THC and Document Fees\nInternational Barge via Yantian: Subject to Yantian THC and Document Fees\n\nSPRC Trucking Cost removed due to low demand, to be handled case by case basis\nTrucking rate is served as indication only\nActual rates will be quoted basis on actual address and trucking requirements from shipper.\nBelow rates are trucking cost only and do not include customs clearance, inspection fee, fumigation and any other charges\nBelow rates are applicable to general goods/equipment type only\nSpecial commodity/equipment e.g. reefer, dangerous goods are subject to offer case by case\nFor D.G cargo, rates are subjected to additional surcharge, pls check with MSC Hong Kong. The acceptance of booking for D.G cargo is subject to Medlog approval.\n80% of above costs will be charged to shipper if booking is cancelled after empty has ben picked up\nOvertime charge: RMB100 or USD15 per truck per hour (over 4 hours )\nOvernight charge: RMB1000 or USD143 / per truck / night\nFor any inland points not included above, please contact MSC HK with address details."
      },
      {
        "kind": "original",
        "lead": "נוסח מקורי",
        "text": "Please find attached the revised rates.\n\nKindly note that the quoted rates for 20' DV containers apply only to shipments with a gross cargo weight of up to 22.9 tons. Additional charges apply to heavier cargo.\n\nPlease note that if the empty containers have not yet been released, you may change the SCT code without any penalty. Kindly instruct your supplier/agent to update the SCT code accordingly. This should help avoid any unnecessary delays or complications.\n\nPlease note that the offer remains subject to space availability at the time of booking.\n\nWe will do our utmost to assist and support your bookings within the given circumstances, however, space availability remains limited.\n\nThe carrier does not promise or undertake to load, carry, or discharge the Goods on or by any particular Vessel, date or time. Advertised sailings and arrivals are only estimated times, and such schedules may be advanced, delayed, or cancelled without notice. In no event shall the Carrier be liable for consequential damages or for any delay in scheduled departures or arrivals of any Vessel or other conveyances used to transport the Goods by sea or otherwise.\n\nBy Placing a Booking, you confirm Accepting MSC Israel terms & conditions (available on MSC site https://www.msc.com/che/contract-of-carriage)\n\nF.Y.I, the rates are subject to space, availability of equip & contingency plans, optional loading without pre advise.\n\nFurther to our previous messages, this is a reminder of MSC's freighting policy which is applicable as of April 1st 2015. MSC is basing its rates from the BASE PORTS on the scheduled vessel departure date= proforma sailing date, NEITHER the actual sailing date nor the gate in of the container into the terminal. (From the OUT PORTS we apply the rates as per the actual sailing date). The price calculation rate is indicative.\n\nWe herewith ask you, due to the rapid changes of the ocean freight, to double check with our office your SCT code PRIOR to booking. SCT number can't change after booking is placed or it will result with a penalty of usd3500 per container.\nWhen a booking received and confirmed without rates available since booking submitted with incorrect SCT code, F.A.K rates to be applied.\n\nKindly be advised that it's your responsibility to advise your agent/supplier at origin, of the correct SCT code to be applied upon booking. Any changes later will result with a penalty."
      }
    ]
  }
];
