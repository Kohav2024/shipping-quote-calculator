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
  }
];
