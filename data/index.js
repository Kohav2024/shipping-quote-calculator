/*
 * מפתח מחירונים למחשבון הצעת מחיר לשילוח.
 * הקובץ הזה נטען קודם (מניפסט + מילונים משותפים).
 * כל גרסת מחירון נשמרת בקובץ נפרד תחת data/ ומחולצת לפי הצורך.
 * בעדכון שבועי: מוסיפים קובץ גרסה אחד + שורה במערך versions למטה.
 * epochUtc: [שנה, חודש 0-based, יום] — ממנו נספרים היסטים של תוקף (vf/vt).
 * ports / notes / incl / codes הם מצטברים (append-only) כדי לא לשבור אינדקסים ישנים.
 */
window.QUOTE_INDEX = 
{
  "epochUtc": [
    2026,
    10,
    11
  ],
  "carriers": [
    {
      "id": "zim",
      "name": "ZIM",
      "nameHe": "צים (ZIM) / Gold Star Line",
      "scheduleUrl": "https://www.goldstarline.com/#/schedule_by_line",
      "termsZim": "https://www.zim.com/help/quotation-terms-conditions",
      "termsGsl": "https://www.gslltd.com.hk/quotation-terms-conditions.php",
      "party": "ILHFA03-ZIM ISRAEL LTD."
    },
    {
      "id": "yml",
      "name": "YML",
      "nameHe": "יאנג מינג (YML / Yang Ming)",
      "agent": "Konmart (ships agent) ltd, as agents for Yang Ming Lines",
      "party": "Konmart (ships agent) ltd, as agents for Yang Ming Lines"
    },
    {
      "id": "oocl",
      "name": "OOCL",
      "nameHe": "OOCL",
      "website": "https://www.oocl.com",
      "agent": "Israel Scandinavian Maritime Agency Ltd",
      "party": "Israel Scandinavian Maritime Agency Ltd, as agent for OOCL"
    },
    {
      "id": "msc",
      "name": "MSC",
      "nameHe": "MSC (Mediterranean Shipping Co.)",
      "website": "https://www.msc.com",
      "termsUrl": "https://www.msc.com/che/contract-of-carriage",
      "party": "MEDITERRANEAN SHIPPING CO. (Israel) Ltd."
    },
    {
      "id": "one",
      "name": "ONE",
      "nameHe": "ONE (Ocean Network Express)",
      "website": "https://www.one-line.com",
      "agent": "Crown Shipping, as general agent for ONE",
      "party": "Crown Shipping, as general agent for ONE"
    },
    {
      "id": "evergreen",
      "name": "Evergreen",
      "nameHe": "אברגרין (Evergreen Line / EMC)",
      "party": "EVERGREEN LINE (EMC)"
    },
    {
      "id": "borchard",
      "name": "Lucy Borchard",
      "nameHe": "לוסי בוכרד (Lucy Borchard Shipping LTD)",
      "website": "https://www.borlines.com",
      "termsUrl": "https://www.borlines.com/info/legal-terms",
      "agent": "Lucy Borchard Shipping LTD, as Agents Only of Borchard Lines",
      "party": "Lucy Borchard Shipping LTD, as Agents Only of Borchard Lines",
      "paymentTerms": "התשלום בש״ח עפ״י שער ספנות ביום התשלום."
    },
    {
      "id": "msk",
      "name": "MSK",
      "nameHe": "מארסק (MSK / Maersk)",
      "website": "https://www.maersk.com"
    },
    {
      "id": "hpl",
      "name": "HPL",
      "nameHe": "הפג-לויד (HPL / Hapag-Lloyd)"
    },
    {
      "id": "cosco",
      "name": "COSCO",
      "nameHe": "COSCO"
    }
  ],
  "versions": [
    {
      "id": "zim-v204",
      "carrierId": "zim",
      "file": "data/zim/2026-12-01_v204.js",
      "ref": "7110070812",
      "version": "204",
      "party": "ILHFA01-ZIM INTEGRATED SHIPPING SERVICES LT",
      "vf": 20,
      "vt": 33,
      "issued": "2026-11-08",
      "added": "2026-11-22",
      "sourceFile": "ZIM agreement 7110070812 v204 (xlsx)",
      "sourceNote": "נוצר ב־08.11.2026 12:44:01. תוקף כותרת: 09.11.2026–14.12.2026. כל שורות המחירון בתוקף 01.12.2026–14.12.2026. המחירון מכסה סין, המזרח הרחוק והודו בלבד; נתיבים אחרים נשארים לפי גרסה 281.",
      "label": "הסכם 7110070812 · גרסה 204",
      "partialCoverage": true
    },
    {
      "id": "zim-v203",
      "carrierId": "zim",
      "file": "data/zim/2026-11-15_v203.js",
      "ref": "7110070812",
      "version": "203",
      "party": "ILHFA01-ZIM INTEGRATED SHIPPING SERVICES LT",
      "vf": -7,
      "vt": 19,
      "issued": "2026-11-03",
      "added": "2026-11-23",
      "sourceFile": "ZIM agreement 7110070812 v203 (xlsx)",
      "sourceNote": "נוצר ב־03.11.2026 11:15:56. תוקף כותרת: 04.11.2026–30.11.2026. במכתב צוין שהמחירון בתוקף 15.11.2026–30.11.2026; לפי שורות הקובץ, המזרח הרחוק בתוקף 15.11.2026–30.11.2026, ושורות הודו, סרי לנקה וצ׳טגונג (כולל Visakhapatnam שנוסף במכתב) בתוקף 04.11.2026–30.11.2026. התאריכים בהצעה לפי השורות, בלי להמציא. המחירון מכסה סין, המזרח הרחוק והודו בלבד; נתיבים אחרים נשארים לפי הסכם 7110068521.",
      "label": "הסכם 7110070812 · גרסה 203",
      "partialCoverage": true
    },
    {
      "id": "zim-v201",
      "carrierId": "zim",
      "file": "data/zim/2026-11-01_v201.js",
      "ref": "7110070812",
      "version": "201",
      "party": "ILHFA01-ZIM INTEGRATED SHIPPING SERVICES LT",
      "vf": -10,
      "vt": 3,
      "issued": "2026-10-25",
      "added": "2026-11-23",
      "sourceFile": "ZIM agreement 7110070812 v201 (xlsx)",
      "sourceNote": "נוצר ב־25.10.2026 13:04:46. תוקף כותרת: 26.10.2026–14.11.2026. כל שורות המחירון בתוקף 01.11.2026–14.11.2026. במכתב צוין Incheon Korea added. המחירון מכסה סין, המזרח הרחוק והודו בלבד; נתיבים אחרים נשארים לפי הסכם 7110068521.",
      "label": "הסכם 7110070812 · גרסה 201",
      "partialCoverage": true
    },
    {
      "id": "zim-v281",
      "carrierId": "zim",
      "file": "data/zim/2026-11-19_v281.js",
      "ref": "7110068521",
      "version": "281",
      "party": "ILHFA03-ZIM ISRAEL LTD.",
      "vf": 8,
      "vt": 50,
      "issued": "2026-11-18",
      "added": "2026-11-19",
      "sourceFile": "ZIM agreement 7110068521 v281 (xlsx)",
      "sourceNote": "נוצר ב־18.11.2026 12:04:39. תוקף כותרת: 19.11.2026–31.12.2026.",
      "label": "הסכם 7110068521 · גרסה 281"
    },
    {
      "id": "zim-v278",
      "carrierId": "zim",
      "file": "data/zim/2026-11-11_v278.js",
      "ref": "7110068521",
      "version": "278",
      "party": "ILHFA03-ZIM ISRAEL LTD.",
      "vf": 0,
      "vt": 50,
      "issued": "2026-11-10",
      "added": "2026-11-18",
      "sourceFile": "ZIM agreement 7110068521 v278 (xlsx)",
      "sourceNote": "נוצר ב־10.11.2026 15:05:44. תוקף כותרת: 11.11.2026–31.12.2026.",
      "label": "הסכם 7110068521 · גרסה 278"
    },
    {
      "id": "zim-v274",
      "carrierId": "zim",
      "file": "data/zim/2026-11-01_v274.js",
      "ref": "7110068521",
      "version": "274",
      "party": "ILHFA03-ZIM ISRAEL LTD.",
      "vf": -10,
      "vt": 50,
      "issued": "2026-10-25",
      "added": "2026-11-18",
      "sourceFile": "ZIM agreement 7110068521 v274 (xlsx)",
      "sourceNote": "נוצר ב־25.10.2026 15:38:40. תוקף כותרת: 01.11.2026–31.12.2026.",
      "label": "הסכם 7110068521 · גרסה 274"
    },
    {
      "id": "yml-2026-12-01",
      "carrierId": "yml",
      "file": "data/yml/2026-12-01.js",
      "ref": "PQ26YML005443",
      "version": "",
      "party": "Konmart (ships agent) ltd, as agents for Yang Ming Lines",
      "vf": 20,
      "vt": 33,
      "issued": "2026-12-01",
      "issuedApprox": true,
      "added": "2026-11-19",
      "sourceFile": "YML quotation PQ26YML005443 (PDF)",
      "sourceNote": "לא צוין במסמך תאריך הנפקה נפרד; נרשם לפי תחילת התוקף 01.12.2026. במייל שליווה את ההצעה צוין 14 FREE DAYS AT POD.",
      "label": "הצעה PQ26YML005443",
      "quotes": [
        {
          "ref": "PQ26YML005443",
          "contract": "EMW1728355",
          "tradeId": "MEDW40753000"
        }
      ],
      "paymentTerms": "COLLECT",
      "agent": "Konmart (ships agent) ltd, as agents for Yang Ming Lines"
    },
    {
      "id": "yml-2026-11-16",
      "carrierId": "yml",
      "file": "data/yml/2026-11-16.js",
      "ref": "PQ26YML005163",
      "version": "",
      "party": "Konmart (ships agent) ltd, as agents for Yang Ming Lines",
      "vf": 5,
      "vt": 19,
      "issued": "2026-11-05",
      "added": "2026-11-18",
      "sourceFile": "YML quotations PQ26YML005163 + PQ26YML005151 (PDF)",
      "sourceNote": "תאריך הנפקה לפי המייל מ־05.11.2026 (תוקף 16.11.2026–30.11.2026). במייל צוין 14 FREE DAYS AT POD, וכן שתעריפי טייוואן הם ל־FAK בלבד ולא ל־CONSOL.",
      "label": "הצעות PQ26YML005163 / PQ26YML005151",
      "quotes": [
        {
          "ref": "PQ26YML005163",
          "contract": "EMW1721467",
          "tradeId": "MEDW40753000"
        },
        {
          "ref": "PQ26YML005151",
          "contract": "EMW1721484",
          "tradeId": "MEDW02099000"
        }
      ],
      "paymentTerms": "COLLECT",
      "agent": "Konmart (ships agent) ltd, as agents for Yang Ming Lines"
    },
    {
      "id": "yml-2026-11-01",
      "carrierId": "yml",
      "file": "data/yml/2026-11-01.js",
      "ref": "PQ26YML004920",
      "version": "",
      "party": "Konmart (ships agent) ltd, as agents for Yang Ming Lines",
      "vf": -10,
      "vt": 4,
      "issued": "2026-10-28",
      "added": "2026-11-23",
      "sourceFile": "YML quotations PQ26YML004920 + PQ26YML004908 (PDF)",
      "sourceNote": "תאריך הנפקה לפי המייל מ־28.10.2026 (תוקף 01.11.2026–15.11.2026). צוין 14 FREE DAYS AT POD, ושתעריפי טייוואן הם ל־FAK בלבד ולא ל־CONSOL. צוין שתעריף DM בישראל יעודכן בגלל ביקוש במזרח הרחוק, בלי סכום — לא הומצא. שאר התוספות והעלויות המקומיות נשארות כפי שהיו.",
      "label": "הצעות PQ26YML004920 / PQ26YML004908",
      "quotes": [
        {
          "ref": "PQ26YML004920",
          "contract": "EMW1719048",
          "tradeId": "MEDW40753000"
        },
        {
          "ref": "PQ26YML004908",
          "contract": "EMW1719065",
          "tradeId": "MEDW02099000"
        }
      ],
      "paymentTerms": "COLLECT",
      "agent": "Konmart (ships agent) ltd, as agents for Yang Ming Lines"
    },
    {
      "id": "oocl-2026-11-15",
      "carrierId": "oocl",
      "file": "data/oocl/2026-11-15.js",
      "ref": "00007640",
      "version": "",
      "party": "Israel Scandinavian Maritime Agency Ltd, as agent for OOCL",
      "vf": 4,
      "vt": 19,
      "issued": "2026-11-04",
      "added": "2026-11-18",
      "sourceFile": "OOCL filing 00007640 (xlsx)",
      "sourceNote": "תאריך הנפקה לפי המייל מ־04.11.2026 (לא לפי תחילת התוקף ולא לפי תאריך ההעלאה).",
      "label": "Filing 00007640",
      "website": "https://www.oocl.com",
      "agent": "Israel Scandinavian Maritime Agency Ltd",
      "paymentTerms": "COLLECT",
      "localCharges": {
        "doFeeNis": 350,
        "handlingNis": 175,
        "agencyPct": 0.9,
        "agencyMinNis": 90,
        "bankTransferNis": 275
      }
    },
    {
      "id": "oocl-2026-12-01",
      "carrierId": "oocl",
      "file": "data/oocl/2026-12-01.js",
      "ref": "00007640",
      "version": "",
      "party": "Israel Scandinavian Maritime Agency Ltd, as agent for OOCL",
      "vf": 20,
      "vt": 33,
      "issued": "2026-11-19",
      "added": "2026-11-24",
      "sourceFile": "OOCL filing 00007640 (xlsx), validity 1-14.12.2026",
      "sourceNote": "תאריך הנפקה לפי המייל מ־19.11.2026 (Increased Rates). תוקף 01.12.2026–14.12.2026. Filing 00007640 ליבש/non-IMCO וגם ל-DG, ריפרים וציוד מיוחד. ההובלה עלתה ב-400$ ל-20׳ וב-900$ ל-40׳/HQ לעומת מחירון 15–30.11. התוספות, הימים המשוערים, הניתובים והחיובים המקומיים נשארו כפי שהיו.",
      "label": "Filing 00007640",
      "website": "https://www.oocl.com",
      "agent": "Israel Scandinavian Maritime Agency Ltd",
      "paymentTerms": "COLLECT",
      "localCharges": {
        "doFeeNis": 350,
        "handlingNis": 175,
        "agencyPct": 0.9,
        "agencyMinNis": 90,
        "bankTransferNis": 275
      }
    },
    {
      "id": "msc-india-sl-2026-08-16",
      "carrierId": "msc",
      "file": "data/msc/2026-08-16_india-sl.js",
      "version": "",
      "party": "MEDITERRANEAN SHIPPING CO. (Israel) Ltd.",
      "vf": -87,
      "vt": -11,
      "issued": "2026-09-15",
      "added": "2026-11-18",
      "sourceFile": "MSC Ex India + Sri Lanka (xlsx, updated 15.09.26)",
      "sourceNote": "עודכן 15.09.26. תוקף 16.08.2026–31.10.2026. לא צוין מספר הסכם במחירון.",
      "label": "Ex India + Sri Lanka (F.A.K HARMLESS)",
      "offerTitle": "Ex India + Sri Lanka (F.A.K HARMLESS)",
      "website": "https://www.msc.com",
      "termsUrl": "https://www.msc.com/che/contract-of-carriage"
    },
    {
      "id": "msc-india-sl-2026-11-19",
      "carrierId": "msc",
      "file": "data/msc/2026-11-19_india-sl.js",
      "version": "",
      "party": "MSC Mediterranean Shipping Agency AG, as agent only for MSC Mediterranean Shipping Company S.A., Geneva",
      "vf": 8,
      "vt": 34,
      "issued": "2026-11-24",
      "added": "2026-11-24",
      "sourceFile": "INDIA AND SRI LANKA 14 DAYS as from 19.11.2026-15.12.2026 updated 23.11.2026.xlsx",
      "sourceNote": "מייל מ-24.11.2026. כותרת: RE: RATE OFFER EX INDIA VALID as from 19.11.2026-15.12.2026 CONTRACT R26824020000093(FAK). במייל: extended rate offer with validity of 15.12.2026, וההסכם שבשורת הנושא הוגש במערכת. כותרת המחירון: Updated rate offer Ex India + Sri Lanka as from 19.11.2026 till 15.12.2026* (F.A.K HARMLESS) To Haifa/Ashdod — Updated 23.11.26. תאריך ההנפקה לפי תאריך המייל (24.11.2026), לא לפי תאריך העדכון במחירון. מחירון חלקי (רק הודו וסרי לנקה). EFS לפי העמודה EFS IN USD - NOV/DEC: 167$/TEU בנובמבר ו-168$/TEU בדצמבר. אין במחירון תעריפי COIR, ול-Coir pith נדרש הסכם נפרד (EIS 50$) — לא הומצא תעריף COIR. מספר חוזה COIR R26825020000029 מוצג לפי כותרת המייל מ-22.11.2026 באותו שרשור (CONTRACT R26824020000093(FAK)+ R26825020000029 (COIR)), לצד חוזה FAK R26824020000093. זמני מעבר מאותו מייל נוספו רק לנמלים שצוינו שם: Mundra 48-49, Nhava Sheva 47-48, Tuticorin 44-45, Kolkata 53-54, Colombo 37-38 (ליעדי ASH/HFA).",
      "label": "Ex India + Sri Lanka (F.A.K HARMLESS)",
      "offerTitle": "Updated rate offer Ex India + Sri Lanka as from 19.11.2026 till 15.12.2026 (F.A.K HARMLESS)",
      "website": "https://www.msc.com",
      "termsUrl": "https://www.msc.com/che/contract-of-carriage",
      "ref": "R26824020000093",
      "coirRef": "R26825020000029",
      "partialCoverage": true
    },
    {
      "id": "msc-fak-asia-2026-12-01",
      "carrierId": "msc",
      "file": "data/msc/2026-12-01_fak-asia.js",
      "version": "",
      "party": "MEDITERRANEAN SHIPPING CO. (Israel) Ltd.",
      "vf": 20,
      "vt": 33,
      "issued": "2026-11-15",
      "added": "2026-11-18",
      "sourceFile": "MSC FAK rate offer to Ashdod (HCT) and Haifa, 01.12.2026–14.12.2026 (xlsx)",
      "sourceNote": "קובץ עודכן 15.11.2026. תוקף: Effective as of 1.12.2026 until further notice but not beyond 14.12.2026 (HARMLESS). הצעה מתוקנת עקב מגבלת מקום, כוללת SCS ו-PRS. לא צוין במחירון מספר SCT / הסכם / filing, ולא הועתק ה-placeholder מהמייל.",
      "label": "FAK Far East / SE Asia (HARMLESS)",
      "offerTitle": "FAK rate offer to Ashdod (HCT) and Haifa ports (HARMLESS)",
      "website": "https://www.msc.com",
      "termsUrl": "https://www.msc.com/che/contract-of-carriage",
      "localCharges": {
        "title": "ISRAEL LOCAL CHARGE FOR DRY CNTR / HARMLESS (IMPORT)",
        "items": [
          {
            "name": "Handling Fee",
            "basis": "Per BL",
            "currency": "USD",
            "amount": 76
          },
          {
            "name": "Container Fee",
            "basis": "Per DRY CTR",
            "currency": "USD",
            "amount": 15
          },
          {
            "name": "Fuel Energy Transition",
            "basis": "Per cntr",
            "currency": "USD",
            "quantum": "70/20DV & 140/40'",
            "amount20": 70,
            "amount40": 140
          }
        ],
        "notes": [
          "RATES DO NOT INCLUDE STORAGE AND DEMURRAGE AT PORT OF DISCHARGE 12 DAYS FREE OF DEMURRAGE.",
          "RATES ARE SUBJECT TO DELIVERY ORDER FEES AND LOCAL EXPENSES."
        ]
      }
    },
    {
      "id": "msc-nwc-uk-2026-12-01",
      "carrierId": "msc",
      "file": "data/msc/2026-12-01_nwc-uk.js",
      "ref": "Q73WC4P6G",
      "version": "",
      "party": "MEDITERRANEAN SHIPPING CO. (Israel) Ltd.",
      "vf": 20,
      "vt": 50,
      "issued": "2026-11-12",
      "added": "2026-11-23",
      "sourceFile": "MSC email RE: MAYAN/ NWC RATES /DEC 26 (12.11.2026)",
      "sourceNote": "מייל מ-12.11.2026. תוקף 01.12.2026–31.12.2026. FAK ליבוא מ-UK (London Gateway) ומ-NWC (Antwerp, Rotterdam, Le Havre, Hamburg). מספר חוזה Q73WC4P6G. מחירון חלקי. 40׳ HC לא צוין ולא הומצא. במייל לא צוין נמל יעד במפורש; התעריף הוחל על אשדוד וחיפה באותו מחיר, כמקובל בהצעות יבוא של MSC לישראל.",
      "label": "FAK UK / NWC (Dec 2026)",
      "offerTitle": "FAK rates UK / NWC val 1.12.26–31.12.26",
      "partialCoverage": true,
      "website": "https://www.msc.com",
      "termsUrl": "https://www.msc.com/che/contract-of-carriage"
    },
    {
      "id": "one-neu-2026-11-01",
      "carrierId": "one",
      "file": "data/one/2026-11-01_neu.js",
      "version": "",
      "party": "Crown Shipping, as general agent for ONE",
      "vf": -10,
      "vt": 19,
      "issued": "2026-10-25",
      "added": "2026-11-18",
      "sourceFile": "ONE IE SB RATES OFFER FOR IMPORT FROM NEU PORTS, SCANDINAVIA & BALTIC NOV 2026.xlsx",
      "sourceNote": "מייל מ-25.10.2026 (Crown Shipping, general agent for ONE). תוקף במחירון: 01.11.2026–30.11.2026. לא צוין מספר הסכם או filing במחירון או במייל, ולא הומצא. ההובלה נקובה באירו.",
      "label": "Import NEU / Scandinavia / Baltic",
      "offerTitle": "Import rates from North Europe, Baltic & Scandinavia to Haifa/Ashdod",
      "website": "https://www.one-line.com",
      "agent": "Crown Shipping, as general agent for ONE",
      "paymentTerms": "Freight prepaid, subject to filing before booking. Clients without credit: cash payment in NIS.",
      "frtCurrency": "EUR",
      "localCharges": {
        "title": "Local Charges for Import",
        "items": [
          {
            "name": "AGENCY FEE",
            "basis": "PER B/L",
            "currency": "NIS",
            "quantum": "0.3% with minimum 80",
            "remarks": "(% from freight + surcharge). לא חושב לסה״כ: ההובלה באירו והתוספות בדולר, והרצפה בשקלים — אין שער במחירון."
          },
          {
            "name": "CONTAINER ADMIN. FEE",
            "basis": "PER CONTAINER",
            "currency": "USD",
            "quantum": "10/20' & 14/40'",
            "amount20": 10,
            "amount40": 14
          },
          {
            "name": "COMMUNICATIONS FEE",
            "basis": "PER B/L",
            "currency": "NIS",
            "amount": 75
          },
          {
            "name": "ISPS",
            "basis": "PER CONTAINER",
            "currency": "USD",
            "amount": 22
          },
          {
            "name": "INLAND TRANSPORT FEE",
            "basis": "PER TEU",
            "currency": "NIS",
            "quantum": "6% with minimum 58",
            "remarks": "(% from inland transport). לא נוסף: במחירון זה אין תעריף הובלה יבשתית."
          },
          {
            "name": "IT CHARGE",
            "basis": "PER B/L",
            "currency": "NIS",
            "amount": 190
          },
          {
            "name": "TRANSFER FEES",
            "basis": "PER B/L",
            "currency": "NIS",
            "quantum": "0.6% with minimum 55",
            "remarks": "(% from freight + surcharge). לא חושב לסה״כ — אין שער במחירון."
          },
          {
            "name": "WORLD GATE FEE",
            "basis": "PER B/L",
            "currency": "NIS",
            "amount": 45
          },
          {
            "name": "IMCO HANDING FEE",
            "basis": "PER B/L",
            "currency": "NIS",
            "amount": 90,
            "remarks": "כך במחירון (Handing). חל על מטען IMCO/מסוכן — לא נוסף אוטומטית (לפי General Terms: General cargo / Non IMCO only)."
          },
          {
            "name": "REFFER HANDING FEE",
            "basis": "PER B/L",
            "currency": "NIS",
            "amount": 90,
            "remarks": "כך במחירון (Reffer). חל על ריפר — לפנות מקרה-מקרה, לא נוסף אוטומטית."
          },
          {
            "name": "MONITORING",
            "basis": "PER CONTAINER",
            "currency": "USD",
            "amount": 145,
            "remarks": "3 days of monitoring + connect/disconnect. לריפר, לא נוסף אוטומטית."
          }
        ],
        "notes": [
          "Monitoring: After 3 days – USD 30/day. Saturday/Holiday – USD 50/day",
          "Graph Temp.: USD 100 per graph",
          "Additional Plug in/out: USD 25 per additional action"
        ]
      }
    },
    {
      "id": "one-neu-2026-12-01",
      "carrierId": "one",
      "file": "data/one/2026-12-01_neu.js",
      "version": "",
      "party": "Crown Shipping, as general agent for ONE",
      "vf": 20,
      "vt": 50,
      "issued": "2026-11-24",
      "added": "2026-11-24",
      "sourceFile": "ONE IE SB RATES OFFER FOR IMPORT FROM NEU PORTS, SCANDINAVIA & BALTIC DEC 2026.xlsx",
      "sourceNote": "מייל מ-24.11.2026 (Crown Shipping, general agent for ONE). כותרת המייל: ONE IE SB RATES OFFER FOR IMPORT FROM NEU PORTS, SCANDINAVIA & BALTIC DECEMBER 2026. תוקף במחירון ובמייל: 01.12.2026–31.12.2026. לא צוין מספר הסכם או filing במחירון או במייל, ולא הומצא. ההובלה נקובה באירו. התעריפים זהים למחירון נובמבר, למעט Helsinki ו-Kotka ל-40׳ ו-40HC: 1,850 אירו (במקום 1,575).",
      "label": "Import NEU / Scandinavia / Baltic",
      "offerTitle": "Import rates from North Europe, Baltic & Scandinavia to Haifa/Ashdod",
      "website": "https://www.one-line.com",
      "agent": "Crown Shipping, as general agent for ONE",
      "paymentTerms": "Freight prepaid, subject to filing before booking. Clients without credit: cash payment in NIS.",
      "frtCurrency": "EUR",
      "localCharges": {
        "title": "Local Charges for Import",
        "items": [
          {
            "name": "AGENCY FEE",
            "basis": "PER B/L",
            "currency": "NIS",
            "quantum": "0.3% with minimum 80",
            "remarks": "(% from freight + surcharge). לא חושב לסה״כ: ההובלה באירו והתוספות בדולר, והרצפה בשקלים — אין שער במחירון."
          },
          {
            "name": "CONTAINER ADMIN. FEE",
            "basis": "PER CONTAINER",
            "currency": "USD",
            "quantum": "10/20' & 14/40'",
            "amount20": 10,
            "amount40": 14
          },
          {
            "name": "COMMUNICATIONS FEE",
            "basis": "PER B/L",
            "currency": "NIS",
            "amount": 75
          },
          {
            "name": "ISPS",
            "basis": "PER CONTAINER",
            "currency": "USD",
            "amount": 22
          },
          {
            "name": "INLAND TRANSPORT FEE",
            "basis": "PER TEU",
            "currency": "NIS",
            "quantum": "6% with minimum 58",
            "remarks": "(% from inland transport). לא נוסף: במחירון זה אין תעריף הובלה יבשתית."
          },
          {
            "name": "IT CHARGE",
            "basis": "PER B/L",
            "currency": "NIS",
            "amount": 190
          },
          {
            "name": "TRANSFER FEES",
            "basis": "PER B/L",
            "currency": "NIS",
            "quantum": "0.6% with minimum 55",
            "remarks": "(% from freight + surcharge). לא חושב לסה״כ — אין שער במחירון."
          },
          {
            "name": "WORLD GATE FEE",
            "basis": "PER B/L",
            "currency": "NIS",
            "amount": 45
          },
          {
            "name": "IMCO HANDING FEE",
            "basis": "PER B/L",
            "currency": "NIS",
            "amount": 90,
            "remarks": "כך במחירון (Handing). חל על מטען IMCO/מסוכן — לא נוסף אוטומטית (לפי General Terms: General cargo / Non IMCO only)."
          },
          {
            "name": "REFFER HANDING FEE",
            "basis": "PER B/L",
            "currency": "NIS",
            "amount": 90,
            "remarks": "כך במחירון (Reffer). חל על ריפר — לפנות מקרה-מקרה, לא נוסף אוטומטית."
          },
          {
            "name": "MONITORING",
            "basis": "PER CONTAINER",
            "currency": "USD",
            "amount": 145,
            "remarks": "3 days of monitoring + connect/disconnect. לריפר, לא נוסף אוטומטית."
          }
        ],
        "notes": [
          "Monitoring: After 3 days – USD 30/day. Saturday/Holiday – USD 50/day",
          "Graph Temp.: USD 100 per graph",
          "Additional Plug in/out: USD 25 per additional action"
        ]
      }
    },
    {
      "id": "one-fe-2026-11-01",
      "carrierId": "one",
      "file": "data/one/2026-11-01_fe.js",
      "version": "",
      "party": "Crown Shipping, as general agent for ONE",
      "vf": -10,
      "vt": 19,
      "issued": "2026-10-22",
      "added": "2026-11-24",
      "sourceFile": "WB RATE SHEET   01.11. - 15.11.2026..xlsx",
      "sourceNote": "מייל מ-22.10.2026 (Crown Shipping, as general agent for ONE). כותרת המייל: ONE- MD1 WB rates from FAR EAST AMW 01.11. - 15.11.2026. תוקף לפי המחירון והמייל: המזרח הרחוק 01.11.2026–15.11.2026; אוסטרליה (Oceania) 01.11.2026–30.11.2026; הודו וסרי לנקה (IOM LANE) 01.11.2026–15.11.2026. לא צוין מספר הסכם או filing במחירון או במייל, ולא הומצא. ההובלה נקובה בדולר. FAK. טבלת התוספות במחירון תחת הכותרת MD3-WB. מחירון חלקי (אין בו את נמלי צפון אירופה). Cochin, Mangalore ו-Visakhapatnam נוספו לפי תעריף Mundra ומוצגים כ-via Mundra (לפי המייל: service from the following INDIA ports via MUNDRA). ל-Tuticorin ול-Kattupalli נשארו התעריפים הנפרדים שבמחירון. SCT לא נוסף אוטומטית: במחירון לא צוין אילו קווים עוברים בתעלת סואץ.",
      "label": "יבוא מזרח רחוק / אוקיאניה / הודו (MD1)",
      "offerTitle": "DESTINATION ASHDOD and HAIFA - MD1 SERVICE",
      "partialCoverage": true,
      "website": "https://www.one-line.com",
      "agent": "Crown Shipping, as general agent for ONE",
      "paymentTerms": "Freight collect, subject to filing before booking. Clients without credit: cash payment in NIS.",
      "frtCurrency": "USD",
      "localCharges": {
        "title": "Local Charges for Import",
        "items": [
          {
            "name": "AGENCY FEE",
            "basis": "PER B/L",
            "currency": "NIS",
            "quantum": "0.3% with minimum 80",
            "remarks": "(% from freight + surcharge). לא חושב לסה״כ: הרצפה בשקלים — אין שער במחירון."
          },
          {
            "name": "CONTAINER ADMIN. FEE",
            "basis": "PER CONTAINER",
            "currency": "USD",
            "quantum": "10/20' & 14/40'",
            "amount20": 10,
            "amount40": 14
          },
          {
            "name": "COMMUNICATIONS FEE",
            "basis": "PER B/L",
            "currency": "NIS",
            "amount": 75
          },
          {
            "name": "ISPS",
            "basis": "PER CONTAINER",
            "currency": "USD",
            "amount": 22
          },
          {
            "name": "INLAND TRANSPORT FEE",
            "basis": "PER TEU",
            "currency": "NIS",
            "quantum": "6% with minimum 58",
            "remarks": "(% from inland transport). לא נוסף: במחירון זה אין תעריף הובלה יבשתית."
          },
          {
            "name": "IT CHARGE",
            "basis": "PER B/L",
            "currency": "NIS",
            "amount": 190
          },
          {
            "name": "TRANSFER FEES",
            "basis": "PER B/L",
            "currency": "NIS",
            "quantum": "0.6% with minimum 55",
            "remarks": "(% from freight + surcharge). לא חושב לסה״כ — אין שער במחירון."
          },
          {
            "name": "WORLD GATE FEE",
            "basis": "PER B/L",
            "currency": "NIS",
            "amount": 45
          },
          {
            "name": "IMCO HANDING FEE",
            "basis": "PER B/L",
            "currency": "NIS",
            "amount": 90,
            "remarks": "כך במחירון (Handing). חל על מטען IMCO/מסוכן — לא נוסף אוטומטית (המחירון: general cargo / non imco ONLY)."
          },
          {
            "name": "REFFER HANDING FEE",
            "basis": "PER B/L",
            "currency": "NIS",
            "amount": 90,
            "remarks": "כך במחירון (Reffer). חל על ריפר — לפנות מקרה-מקרה, לא נוסף אוטומטית."
          },
          {
            "name": "MONITORING",
            "basis": "PER CONTAINER",
            "currency": "USD",
            "amount": 145,
            "remarks": "3 days of monitoring + connect/disconnect. לריפר, לא נוסף אוטומטית."
          }
        ],
        "notes": [
          "Monitoring: After 3 days – USD 30/day. Saturday/Holiday – USD 50/day",
          "Graph Temp.: USD 100 per graph",
          "Additional Plug in/out: USD 25 per additional action"
        ]
      }
    },
    {
      "id": "one-fe-2026-12-01",
      "carrierId": "one",
      "file": "data/one/2026-12-01_fe.js",
      "version": "",
      "party": "Crown Shipping, as general agent for ONE",
      "vf": 20,
      "vt": 34,
      "issued": "2026-11-23",
      "added": "2026-11-24",
      "sourceFile": "WB RATE SHEET 01.12. - 15.12.2026..xlsx",
      "sourceNote": "מייל מ-23.11.2026 (Crown Shipping, as general agent for ONE). כותרת המייל: ONE- MD1 WB rates from FAR EAST AMW 01.12. - 15.12.2026. INDIA 01.12. - 15.12.2026. תוקף לפי המחירון והמייל: המזרח הרחוק, הודו וסרי לנקה 01.12.2026–15.12.2026. אוסטרליה (Oceania) לא נכללה: במייל ובמחירון צוין not yet available, ולא הוארך תעריף נובמבר כתעריף שוטף. לא צוין מספר הסכם או filing במחירון או במייל, ולא הומצא. ההובלה נקובה בדולר. FAK. טבלת התוספות במחירון תחת הכותרת MD3-WB. מחירון חלקי (אין בו את נמלי צפון אירופה ואין בו את אוסטרליה). Cochin, Mangalore ו-Visakhapatnam נוספו לפי תעריף Mundra ומוצגים כ-via Mundra (לפי המייל). ל-Tuticorin ול-Kattupalli נשארו התעריפים הנפרדים שבמחירון. SCT לא נוסף אוטומטית: במחירון לא צוין אילו קווים עוברים בתעלת סואץ. תעריפי המזרח הרחוק עלו; תעריפי הודו וסרי לנקה זהים למחירון 01.11–15.11.2026.",
      "label": "יבוא מזרח רחוק / הודו / סרי לנקה (MD1)",
      "offerTitle": "DESTINATION ASHDOD and HAIFA - MD1 SERVICE",
      "partialCoverage": true,
      "website": "https://www.one-line.com",
      "agent": "Crown Shipping, as general agent for ONE",
      "paymentTerms": "Freight collect, subject to filing before booking. Clients without credit: cash payment in NIS.",
      "frtCurrency": "USD",
      "localCharges": {
        "title": "Local Charges for Import",
        "items": [
          {
            "name": "AGENCY FEE",
            "basis": "PER B/L",
            "currency": "NIS",
            "quantum": "0.3% with minimum 80",
            "remarks": "(% from freight + surcharge). לא חושב לסה״כ: הרצפה בשקלים — אין שער במחירון."
          },
          {
            "name": "CONTAINER ADMIN. FEE",
            "basis": "PER CONTAINER",
            "currency": "USD",
            "quantum": "10/20' & 14/40'",
            "amount20": 10,
            "amount40": 14
          },
          {
            "name": "COMMUNICATIONS FEE",
            "basis": "PER B/L",
            "currency": "NIS",
            "amount": 75
          },
          {
            "name": "ISPS",
            "basis": "PER CONTAINER",
            "currency": "USD",
            "amount": 22
          },
          {
            "name": "INLAND TRANSPORT FEE",
            "basis": "PER TEU",
            "currency": "NIS",
            "quantum": "6% with minimum 58",
            "remarks": "(% from inland transport). לא נוסף: במחירון זה אין תעריף הובלה יבשתית."
          },
          {
            "name": "IT CHARGE",
            "basis": "PER B/L",
            "currency": "NIS",
            "amount": 190
          },
          {
            "name": "TRANSFER FEES",
            "basis": "PER B/L",
            "currency": "NIS",
            "quantum": "0.6% with minimum 55",
            "remarks": "(% from freight + surcharge). לא חושב לסה״כ — אין שער במחירון."
          },
          {
            "name": "WORLD GATE FEE",
            "basis": "PER B/L",
            "currency": "NIS",
            "amount": 45
          },
          {
            "name": "IMCO HANDING FEE",
            "basis": "PER B/L",
            "currency": "NIS",
            "amount": 90,
            "remarks": "כך במחירון (Handing). חל על מטען IMCO/מסוכן — לא נוסף אוטומטית (המחירון: general cargo / non imco ONLY)."
          },
          {
            "name": "REFFER HANDING FEE",
            "basis": "PER B/L",
            "currency": "NIS",
            "amount": 90,
            "remarks": "כך במחירון (Reffer). חל על ריפר — לפנות מקרה-מקרה, לא נוסף אוטומטית."
          },
          {
            "name": "MONITORING",
            "basis": "PER CONTAINER",
            "currency": "USD",
            "amount": 145,
            "remarks": "3 days of monitoring + connect/disconnect. לריפר, לא נוסף אוטומטית."
          }
        ],
        "notes": [
          "Monitoring: After 3 days – USD 30/day. Saturday/Holiday – USD 50/day",
          "Graph Temp.: USD 100 per graph",
          "Additional Plug in/out: USD 25 per additional action"
        ]
      }
    },
    {
      "id": "evergreen-fak-2026-11-15",
      "carrierId": "evergreen",
      "file": "data/evergreen/2026-11-15_fak.js",
      "version": "",
      "party": "EVERGREEN LINE (EMC)",
      "vf": 4,
      "vt": 19,
      "issued": "2026-11-05",
      "added": "2026-11-18",
      "sourceFile": "Outlook email 05.11.2026: FF/MAYAN (M780684) IMPORT RATES FROM FAR EAST 15/11-30/11/2026 (FAK RATE GUIDELINE 20261115-20261130, rates in message body; no spreadsheet)",
      "sourceNote": "מייל מ-05.11.2026. כותרת: FF// FF/MAYAN (M780684) IMPORT RATES FROM FAR EAST: 15/11-30/11/2026. FAK RATE GUIDELINE 20261115-20261130 (ILASH/ILHFA). לא צורף גיליון; התעריפים בגוף המייל. התעריפים, התוספות והתוקף זהים למחירון שכבר במחשבון (נוסף ב-18.11.2026 לפי טקסט מודבק, בלי תאריך מייל). עודכנו רק המטא-דאטה: תאריך הנפקה לפי תאריך המייל 05.11.2026 (הוסר issuedApprox), ומספר M780684 מנושא המייל הוצג (לא צוין במפורש אם זה חוזה, filing או מספר הצעה). התעריפים עצמם לא שונו.",
      "label": "FAK 15.11.2026–30.11.2026 (ILASH/ILHFA)",
      "offerTitle": "EVERGREEN LINE update F.A.K rate offer as from 15/11 – 30/11/2026",
      "ref": "M780684"
    },
    {
      "id": "borchard-2026-12-01",
      "carrierId": "borchard",
      "file": "data/borchard/2026-12-01.js",
      "version": "",
      "party": "Lucy Borchard Shipping LTD, as Agents Only of Borchard Lines",
      "vf": 20,
      "vt": 50,
      "issued": "2026-11-23",
      "issuedApprox": true,
      "added": "2026-11-23",
      "sourceFile": "Lucy Borchard Shipping LTD Import FOB rates December 2026 (PDF, 4 pages)",
      "sourceNote": "יבוא FOB, מכולות יבשות NON IMO, לדצמבר 2026, בתוקף עד 31.12.2026. תאריך הנפקה נפרד לא צוין במסמך ולא הומצא; נוסף ב־23.11.2026. T/T במחירון מצוין כ-approx. DETENTION מופיע לפי יעד (אשדוד/חיפה) ולא נוסף לסה״כ, כי לא צוין אם הסכום ליום או חד-פעמי. Demurrage free days לא צוינו בסכום — לפי המסמך זמינים במשרדי החברה.",
      "label": "יבוא FOB יבש / NON IMO, דצמבר 2026",
      "offerTitle": "IMPORT FOB RATES · DRY · NON IMO — December 2026",
      "website": "https://www.borlines.com",
      "termsUrl": "https://www.borlines.com/info/legal-terms",
      "agent": "Lucy Borchard Shipping LTD, as Agents Only of Borchard Lines",
      "paymentTerms": "התשלום בש״ח עפ״י שער ספנות ביום התשלום.",
      "localCharges": {
        "title": "LOCAL CHARGES",
        "items": [
          {"name": "Cleaning Charge", "basis": "Per Cntr", "currency": "USD", "amount": 15},
          {"name": "Israel Port Security", "basis": "Per Cntr", "currency": "USD", "amount": 23},
          {"name": "World Gate Fee", "basis": "Per B/L", "currency": "ILS", "amount": 35},
          {"name": "Communication Fee", "basis": "Per B/L", "currency": "ILS", "amount": 70},
          {"name": "IT charge", "basis": "Per B/L", "currency": "ILS", "amount": 150},
          {"name": "Agency Fee / Delivery Order", "basis": "Per Cntr", "currency": "ILS", "amount": 50, "remarks": "Minimum ₪ 100 per B/L"},
          {"name": "Transfer Fee", "basis": "Per Cntr", "currency": "ILS", "amount20": 50, "amount40": 65, "remarks": "RH - ₪ 85 (Minimum ₪ 100 per B/L)"},
          {"name": "Container Check. Admin fee", "basis": "Per Cntr", "currency": "USD", "amount": 9},
          {"name": "Captain Mail (if needed)", "basis": "Per B/L", "currency": "USD", "amount": 35, "remarks": "if needed"},
          {"name": "Self-Guarantee (Telex release)", "basis": "Per B/L", "currency": "ILS", "amount": 150, "remarks": "release without presentation of Original BL"}
        ],
        "notes": [
          "MAX INTAKE 24 T/20' (24-26 T - Additional $70) , 24 T/40' (24-26 T – Additional $140) — מותנה במשקל, לא נוסף אוטומטית לסה״כ.",
          "התשלום בש״ח עפ״י שער ספנות ביום התשלום."
        ]
      }
    },
    {
      "id": "msc-spot-asia-2026-12-01",
      "carrierId": "msc",
      "file": "data/msc/2026-12-01_spot-asia.js",
      "version": "",
      "party": "MEDITERRANEAN SHIPPING CO. (Israel) Ltd.",
      "vf": 20,
      "vt": 33,
      "issued": "2026-11-25",
      "added": "2026-11-25",
      "sct": "2361-88888-ST",
      "sourceFile": "MSC revised SPOT rate offer to Ashdod (HCT) and Haifa, 01.12.2026–14.12.2026 (xlsx)",
      "sourceNote": "התקבל ב-25.11.2026 כ-revised rates. תאריך ההנפקה 25.11.2026. כותרת המחירון: SPOT rate offer to Ashdod (HCT) and Haifa ports — Effective as of 1.12.2026 until further notice but not beyond 14.12.2026 (HARMLESS). זה עדכון תעריפים לאותו חלון תוקף של המחירון msc-fak-asia-2026-12-01 (שהונפק 15.11.2026 ונקרא אז FAK rate offer): אותם 36 נמלים, אותם יעדים, אותן תוספות ו-Locals; הובלה ימית הופחתה ב-200$ ל-20׳ וב-200$ ל-40׳/HC בכל השורות. מספר SCT: 2361-88888-ST (אושר להצגה). תעריפי pre-carriage / TAO-PRE וסין inland לא נכללו בסה״כ (גיליונות נפרדים, מעל תעריף נמל האם).",
      "label": "SPOT Far East / SE Asia (HARMLESS)",
      "offerTitle": "SPOT rate offer to Ashdod (HCT) and Haifa ports (HARMLESS)",
      "website": "https://www.msc.com",
      "termsUrl": "https://www.msc.com/che/contract-of-carriage",
      "localCharges": {
        "title": "ISRAEL LOCAL CHARGE FOR DRY CNTR / HARMLESS (IMPORT)",
        "items": [
          {
            "name": "Handling Fee",
            "basis": "Per BL",
            "currency": "USD",
            "amount": 76
          },
          {
            "name": "Container Fee",
            "basis": "Per DRY CTR",
            "currency": "USD",
            "amount": 15
          },
          {
            "name": "Fuel Energy Transition",
            "basis": "Per cntr",
            "currency": "USD",
            "quantum": "70/20DV & 140/40'",
            "amount20": 70,
            "amount40": 140
          }
        ],
        "notes": [
          "RATES DO NOT INCLUDE STORAGE AND DEMURRAGE AT PORT OF DISCHARGE 12 DAYS FREE OF DEMURRAGE.",
          "RATES ARE SUBJECT TO DELIVERY ORDER FEES AND LOCAL EXPENSES."
        ]
      }
    }
  ],
  "ports": [
    "BRISBANE (QL), AU",
    "ASHDOD, IL",
    "HAIFA, IL",
    "MELBOURNE (VI), AU",
    "SYDNEY (NS), AU",
    "BUENOS AIRES, AR",
    "DURRES, AL",
    "BARCADERA - ARUBA, AW",
    "BRIDGETOWN (BARBADOS), BB",
    "ITAPOA (SC), BR",
    "NAVEGANTES (SC), BR",
    "PARANAGUA (PR), BR",
    "RIO DE JANEIRO (RJ), BR",
    "SANTOS (SP), BR",
    "BELIZE CITY, BZ",
    "HALIFAX (NS), CA",
    "BARRANQUILLA, CO",
    "CARTAGENA, CO",
    "MOIN, CR",
    "WILLEMSTAD-CURACAO, CW",
    "LIMASSOL, CY",
    "RIO HAINA (PORT OF), DO",
    "DAMIETTA, EG",
    "BARCELONA, ES",
    "VALENCIA, ES",
    "FOS SUR MER (13), FR",
    "POTI, GE",
    "PIRAEUS, GR",
    "THESSALONIKI, GR",
    "SANTO TOMAS DE CASTILLA, GT",
    "GEORGETOWN - GUYANA, GY",
    "GENOA, IT",
    "RAVENNA, IT",
    "SALERNO, IT",
    "VENICE, IT",
    "ALTAMIRA, MX",
    "VERACRUZ, MX",
    "PANAMA MANZANILLO, PA",
    "LISBON, PT",
    "KOPER, SI",
    "LA GUAIRA, VE",
    "MARACAIBO, VE",
    "PUERTO CABELLO, VE",
    "MONTREAL (QC), CA",
    "TORONTO (ON), CA",
    "VANCOUVER (BC), CA",
    "CASTELLON DE LA PLANA, ES",
    "CHATTOGRAM, BD",
    "DHAKA, BD",
    "SIHANOUKVILLE, KH",
    "ANQING, CN",
    "BEIJIAO, CN",
    "GUANDONG, CN",
    "DALIAN, CN",
    "DOUMEN, CN",
    "FUZHOU, CN",
    "GAOMING, CN",
    "HONGWAN, CN",
    "HUANGPU, CN",
    "JIANGMEN, CN",
    "LELIU SHUNDE, CN",
    "LIANYUNGANG, CN",
    "NINGBO, CN",
    "NANJING, CN",
    "NANSHA NEW PORT, CN",
    "NANTONG, CN",
    "QINZHOU, CN",
    "RONGQI, CN",
    "SANSHAN, CN",
    "SHANGHAI, CN",
    "SHEKOU, CN",
    "SHUNDE NEW PORT, CN",
    "SHANTOU, CN",
    "QINGDAO, CN",
    "TAIZHOU, CN",
    "XIALOAN, CN",
    "WENZHOU, CN",
    "WUHAN, CN",
    "WUZHOU, CN",
    "XINGANG, CN",
    "XIAMEN, CN",
    "ZHAPU, CN",
    "ZHANGJIAGANG, CN",
    "ZHONGSHAN, CN",
    "HONG KONG, HK",
    "BELAWAN, ID",
    "JAKARTA, ID",
    "SEMARANG, ID",
    "SURABAYA, ID",
    "NAGOYA, JP",
    "TOKYO, JP",
    "KOBE, JP",
    "PUSAN, KR",
    "PENANG, MY",
    "PASIR GUDANG, MY",
    "PORT KELANG, MY",
    "YANGON, MM",
    "CEBU, PH",
    "DAVAO, PH",
    "MANILA NORTH HARBOUR, PH",
    "MANILA SOUTH HARBOUR, PH",
    "SINGAPORE, SG",
    "HSINCHU, TW",
    "KEELUNG, TW",
    "KAOHSIUNG, TW",
    "TAOYUAN, TW",
    "TAICHUNG, TW",
    "BANGKOK, TH",
    "LAEM CHABANG, TH",
    "LAT KRABANG, TH",
    "SONGKHLA, TH",
    "CAT LAI, VN",
    "DA NANG, VN",
    "VIETNAM HCP, VN",
    "HAIPHONG, VN",
    "HO CHI MINH, VN",
    "MANILA, PH",
    "NANSHA, CN",
    "WUHU, CN",
    "YANTIAN, CN",
    "ZHANJIANG, CN",
    "XIAOLAN, CN",
    "MUNDRA, IN",
    "NHAVA SHEVA, IN",
    "HAZIRA, IN",
    "CHENNAI, IN",
    "ENNORE, IN",
    "TUTICORIN, IN",
    "COCHIN, IN",
    "KRISHNAPATNAM, IN",
    "KATTUPALLI, IN",
    "VIZHINJAM, IN",
    "VIZAKHAPATNAH (VIZAG), IN",
    "KOLKATA, IN",
    "HALDIA, IN",
    "GOA, IN",
    "MANGALORE, IN",
    "COLOMBO, LK",
    "ASUNCION, PY",
    "MONTEVIDEO, UY",
    "VARNA, BG",
    "ALEXANDRIA, EG",
    "CONSTANTA, RO",
    "ANTWERP, BE",
    "BREMERHAVEN (HB), DE",
    "AARHUS, DK",
    "COPENHAGEN, DK",
    "FREDERICIA, DK",
    "TALLINN, EE",
    "HELSINKI, FI",
    "KOTKA, FI",
    "LE HAVRE (SEINE-MARITIME), FR",
    "TILBURY (ESSEX), GB",
    "DUBLIN, IE",
    "CORK, IE",
    "KLAIPEDA, LT",
    "RIGA, LV",
    "ROTTERDAM, NL",
    "GDANSK, PL",
    "GDYNIA, PL",
    "LEIXOES, PT",
    "GOTHENBURG, SE",
    "HELSINGBORG, SE",
    "BELAWAN / KUALA TANJUNG, ID",
    "PANJANG, ID",
    "VUNG TAU / DONG NAI, VN",
    "QUINHON, VN",
    "BUSAN, KR",
    "GWANGYANG, KR",
    "INCHEON, KR",
    "HAKATA, JP",
    "OSAKA, JP",
    "YOKKAICHI, JP",
    "YOKOHAMA, JP",
    "YANGZHOU, CN",
    "ZHENJIANG, CN",
    "CHONGQING, CN",
    "YICHANG, CN",
    "TAICANG, CN",
    "CHENGDU (R/O), CN",
    "JINGZHOU, CN",
    "JIAXING, CN",
    "JIUJIANG, CN",
    "ZHUHAI, CN",
    "JIUJIANG GUANGDONG, CN",
    "SANSHUI GUANGDONG, CN",
    "NANHAI, CN",
    "HAIKOU, CN",
    "QUANZHOU, CN",
    "MACAU, MO",
    "MOJI, JP",
    "SHIMIZU, JP",
    "IWAKUNI, JP",
    "TANJUNG PELEPAS, MY",
    "CAGAYAN DE ORO, PH",
    "TAIPEI, TW",
    "YUEYANG (HUNAN), CN",
    "YANG ZHOU, CN",
    "ZHENJIANG (JS), CN",
    "ZHANJIANG (GD), CN",
    "ZHUHAI (GD), CN",
    "ZHANGJIAGANG (JS), CN",
    "ZHAPU (ZJ), CN",
    "ZHAOQING (GD), CN",
    "ZHONGSHAN (GD), CN",
    "HAZIRA PORT SURAT, IN",
    "MADRAS (CHENNAI), IN",
    "RONGQI (GD), CN",
    "JINGZHOU (HUBEI), CN",
    "SANSHUI (GD), CN",
    "SHANGHAI (SH), CN",
    "SHANTOU (GD), CN",
    "TIANJIN XINGANG PT (TJ), CN",
    "TAIZHOU (JS), CN",
    "WUHU (AH), CN",
    "WENZHOU (ZJ), CN",
    "WUHAN (HB), CN",
    "WUZHOU (GX), CN",
    "XIAMEN (FJ), CN",
    "YICHANG (HUBEI), CN",
    "CAI MEP, VN",
    "NAGOYA-AICHI, JP",
    "INCHEON (INCH ON), KR",
    "MANILA NORTH PORT, PH",
    "ICD LAT KRABANG, TH",
    "ICD BINH DUONG TERMINAL, VN",
    "DONG NAI, VN",
    "CATLAI GIANGNAM TERM.-HO CHI MINH CITY, VN",
    "HO CHI MINH CITY - ICD TRANSIMEX, VN",
    "HO CHI MINH CITY - ICD PHUOC LONG, VN",
    "HO CHI MINH CITY - ICD TANAMEXCO, VN",
    "ANQING (AH), CN",
    "BEIJIAO (GD), CN",
    "CHONGQING (SC), CN",
    "CHANGSHA (HN), CN",
    "CHANGZHOU (JS), CN",
    "DA CHAN BAY (GD), CN",
    "DAFENG, CN",
    "DALIAN (LN), CN",
    "FUZHOU (FJ), CN",
    "GAO MING (GD), CN",
    "HUANGPU (GD), CN",
    "JIANGYIN (JS), CN",
    "JIUJIANG (JX), CN",
    "JIANGMEN (GD), CN",
    "JIUJIANG (GD), CN",
    "NANCHANG (JX), CN",
    "LELIU (GD), CN",
    "LUZHOU, CN",
    "LIANYUNGANG (JS), CN",
    "NINGBO (ZJ), CN",
    "SANSHAN (GD), CN",
    "NANJING (JS), CN",
    "NANSHA (GD), CN",
    "NANTONG (JS), CN",
    "GAOLAN (GD), CN",
    "QINGDAO (SD), CN",
    "LIVERPOOL, GB",
    "BELFAST, GB",
    "MARSEILLE, FR",
    "VISAKHAPATNAM, IN",
    "LONDON GATEWAY, GB",
    "HAMBURG, DE",
    "ADELAIDE, AU",
    "FREMANTLE, AU"
  ],
  "types": [
    "DV20",
    "DV40",
    "HC40",
    "FL20",
    "FL40",
    "OT20",
    "OT40"
  ],
  "modes": [
    "Port",
    "Ramp",
    "Intermodal",
    "Door",
    "Truck only",
    "Terminal Movement"
  ],
  "notes": [
    "OWS above 18 ton $300/20DV",
    "Thru rate, all motor, Spain charges included / APPROVAL FROM Jorge Gelabert 17.01, KLG/OW/OWS included, all charges should be under collect. FOB CHARGES FOR DV20 INCLUDED IN O/F: \nDOC EUR 80/BL (TARIFF)\nLOG EUR 35/CONT (TARIFF)\nWHARFAGE EUR 65/CONT (FIX RATE)\nCUSTOM CLEARANCE FOR TILES CARGO EUR 18/CONT. FOR NON-TILES CARGO (ALL OTHER CARGO) €49 PER CONTAINER",
    "Thru rate, all motor, KLG/OW/OWS included, all charges should be under collect, CUSTOM CLEARANCE FOR TILES CARGO EUR 18/CONT. FOR NON-TILES CARGO (ALL OTHER CARGO) €49 PER CONTAINER , DOC PER BL (TARIFF), LOG PER CONT (TARIFF), VGM PER CONT, WAF PER CONT (FIX RATE) . FOB CHARGES FOR DV/HC40 EXCLUDED, THEY ARE SHOWN IN THE FIX COLUMN",
    "for soft imo only",
    "the IMO value is for soft cl. 3/9/8",
    "the IMO value is for soft cl. 3/9/8\nFOR HAC: 31 EUR ONLY FIRST 5 ITEMS / PLUS 12 EUR ADDITIONAL ITEM ( TILL 20 ITEMS MAX 200 EUR; TILL 30 ITEM 300 EUR; PLUS 31 ITEMS 400 EUR) – UPDATE 01/10",
    "EU (ETS) מופיע במחירון עם ההערה FROM CHINA PORTS EU INCLUDED (77/154/154$ ל-20DC/40DC/40HQ) — מטופל ככלול במחיר ההובלה ולא נוסף לסה״כ. תוספת משקל יתר OW: Over 18Ton/26Ton gross weight: 350$/700$ — לא נוספה אוטומטית.",
    "במחירון מופיע EU (ETS) 77/154/154$ עם ההערה FROM CHINA PORTS EU INCLUDED. לא נוסף לסה״כ כי המוצא אינו סין, ולא ברור אם התוספת חלה. תוספת משקל יתר OW: Over 18Ton/26Ton gross weight: 350$/700$ — לא נוספה אוטומטית.",
    "ETS לא נוסף: לפי המחירון ETS הוא 62$/TEU ורק מנמלים שאינם סיניים (From NON Chinese ports only). תוספות משקל כבד לא נוספו אוטומטית: CWC משקל מטען ≥18 טון (בלי משקל המכולה) 200$/20׳; CWX ≥24 טון 500$/20׳.",
    "ETS נוסף לפי 62$/TEU (20׳ = 62$, 40׳ = 124$) — From NON Chinese ports only. תוספות משקל כבד לא נוספו אוטומטית: CWC ≥18 טון מטען 200$/20׳; CWX ≥24 טון 500$/20׳.",
    "הונג קונג טופלה כנמל שאינו סיני, ולכן ETS נוסף (62$/TEU; 20׳ = 62$, 40׳ = 124$). אם הסוכן מחשיב את הונג קונג כנמל סיני — יש להסיר את ה-ETS. תוספות משקל כבד לא נוספו אוטומטית: CWC ≥18 טון מטען 200$/20׳; CWX ≥24 טון 500$/20׳.",
    "ETS לא נוסף (מוצא בסין). לפי הטקסט הנלווה למחירון (לא בתאי האקסל): Foshan, Jiangmen ו-Huangpu via specific terminals only, please contact us for detail. תוספות משקל כבד לא נוספו אוטומטית: CWC ≥18 טון מטען 200$/20׳; CWX ≥24 טון 500$/20׳.",
    "F.A.K. HARMLESS. תוקף 16.08.2026–31.10.2026 (*Effective last container Received for export at train depots, terminals or POL'S). עודכן 15.09.26. DTHC ו-EFS נוספו לסה״כ לפי הטבלה: DTHC 275$/20׳ ו-400$/40׳; EFS IN USD - SEP = 156$ × TEU (156$/20׳, 312$/40׳). OVW כלול בתעריף ל-20׳. 14 ימי demurrage חינם ביעד, אלא אם איש המכירות ציין אחרת. אחסנה ו-demurrage ביעד אינם כלולים מעבר לימי הפטור. Origin THC משולם על ידי השולח ולא נוסף. כפוף לדמי D/O ולהוצאות מקומיות — סכומים לא צוינו במחירון ולא הומצאו. כפוף לתוספות נוספות במועד השילוח. לא כולל תוספות למשקל יתר, ציוד מיוחד ומטען מסוכן. כפוף לביקורת בכל נמל שטעון. לא מקבלים Granite Blocks. לא נוספו אוטומטית (מותנים): EIS 50$/מכולה ל-Coir pith/Flammable (הסכם נפרד) ולמטען harmless עם סכנת בעירה ספונטנית/חימום עצמי; FTS 14$/TEU ל-FlexiTank/FlexiBag; SWB FEE 35$ לסוכן/שולח ב-POL שאינו אשראי; דמי HAZ ב-POL (בלי VIZAK ו-GOA): HIGH RISK PG 1 500$/TEU, LOW RISK PG 3 150$/TEU, MEDIUM RISK PG 2 250$/TEU; OTS 500$ ל-20׳ Open Top ו-1000$ ל-40׳ Open Top/High; Israel THC למטען מסוכן/ציוד מיוחד 320$/20׳ ו-460$/40׳; SOC FEE 500$ × TEU. ביטול הזמנה: 200$/מכולה. תנאי ההובלה: https://www.msc.com/che/contract-of-carriage. הובלה יבשתית עד מחסן הלקוח הוצעה במייל בנפרד ולא תומחרה במחירון.",
    "הובלה באירו (EUR) לפי המחירון; לא הומרה לדולר. Inclusive: EFS, THL, CSS, IFP, MBS, TSL. כפוף ל-OBS ו-EES (דולר ל-TEU, חושב למכולה לפי 1 TEU ל-20׳ ו-2 TEU ל-40׳/HC: OBS 198/396$, EES 72/144$). DTHC: 270$/20׳ ו-390$/40׳–40HC. CMD: 21$ ל-UNIT (טופל כמכולה). כפוף לכל התוספות התקפות במועד השילוח. כפוף ל-FGP (Food Grade Premium) — לא צוין סכום במחירון, לא נוסף לסה״כ. Freight prepaid, בכפוף להגשת תעריף (filing) לפני הזמנה. תאריך דירוג ה-B/L: Proforma ETD (ואם הטעינה בדוברה/פידר — Proforma ETD של הדוברה/פידר). ניתוב סטנדרטי אחד בלבד. כפוף לאישור תפעולי ולזמינות ציוד ומקום. ללקוחות ללא אשראי: תשלום במזומן בשקלים. ריפרים — לפנות מקרה-מקרה (אין תעריפי ריפר במחירון). לפי גיליון General Terms: General cargo / Non IMCO only.",
    "F.A.K. HARMLESS ליעדי אשדוד (HCT) וחיפה (אותו מחיר). תוקף 01.12.2026–14.12.2026 (until further notice but not beyond 14.12.2026). תעריף 20׳ DV חל רק על מטען במשקל ברוטו עד 22.9 טון (OVW TILL 22.9 TONS) — תוספות למשקל עודף חלות לפי המחירון, אבל סכום התוספת לא צוין בגיליון התעריפים ולא הומצא. THC במחירון (THC IN USD) 275$/20׳ ו-400$/40׳ נוסף לסה״כ כטיפול יעד (Origin THC משולם ע״י השולח). PRS 55$/110$ ו-SCS 36$/72$ (20׳/40׳) נוספו לפי הטבלה. CLS 20$/40$ נוסף רק בשורות שבהן צוין (נמלי סין היבשתית). CRS 131$/262$ נוסף רק בשורות שבהן צוין (הונג קונג ושאר המוצאים שאינם סין היבשתית). EFS לא מופיע במחירון הזה ולא נוסף. מספר SCT לא צוין במחירון (במייל הופיע רק placeholder ולא הועתק כמספר אמיתי). אחרי שחרור הזמנה לא ניתן לשנות את קוד ה-SCT; קוד שגוי — קנס 3,500$ למכולה, ואם אין תעריף בגלל קוד שגוי יחולו תעריפי FAK. יש לאמת מול משרד MSC לפני הזמנה. הובלה מנמלי בסיס לפי תאריך יציאת הפרופורמה; מנמלי out (Sihanoukville, Makassar, Songkhla ונמלי out בסין) לפי היציאה בפועל; בנגקוק לפי פרופורמת Laem Chabang. 12 ימי demurrage חינם ביעד. כפוף לדמי D/O ולהוצאות מקומיות (טבלת Locals מוצגת בנפרד, לא בסה״כ ההובלה). כפוף לתוספות במועד השילוח ולזמינות מקום וציוד. לא נוספו אוטומטית: Flexi/Flexibag 14$ למכולה; מטען עם בעירה ספונטנית/חימום עצמי 50$/מכולה (גיליון SCF — רשימת הסחורות לא הייתה בטקסט מחלץ בגיליון); דמי מועמדות למכולה כבדה בהונג קונג ודרום סין (RMB/HKD לפי הגיליון, לא הומרו); תעריפי pre-carriage / TAO-PRE ו-China inland (גיליונות נפרדים) — להוסיף מעל תעריף נמל האם, לא נכללו בסה״כ.",
    "F.A.K. ליעדי אשדוד (ILASH) וחיפה (ILHFA), אותו מחיר. תוקף 15.11.2026–30.11.2026. מספר מנושא המייל: M780684. תאריך ההנפקה לפי תאריך המייל: 05.11.2026. התעריף כולל EBS, ERC, STF, WRC ו-PSS. 21 ימי BT חינם (ימי לוח שנה). תאריך הדירוג (rating base date) הוא תאריך ה-ETD שפורסם כאשר המכולה המלאה האחרונה נכנסת לשער (Last Full Container Gate In); חובת הסוכן או הספק המקומי במזרח הרחוק לאמת זאת מראש כדי למנוע מחלוקת תעריף. THC/D 295$/20׳ ו-420$/40׳, ISPS/D 20$ למכולה, ו-ISOCC 134$/20׳ ו-268$/40׳–40HC נוספו לסה״כ. EUIS (EU innovation surcharge): לנמלי סין היבשתית כלול בתעריף ולא נוסף; למדינות שאינן סין, כולל הונג קונג וטייוואן, 72 אירו ל-TEU (72€ ל-20׳, 144€ ל-40׳/HC) — נשמר באירו, בלי המרה. LSS: לנמלי סין היבשתית כלול ולא נוסף; למדינות שאינן סין, כולל הונג קונג וטייוואן, 20$ ל-TEU. מקאו (MOMCA) אינה סין יבשתית וטופלה כלא-סין (EUIS ו-LSS נוספו). HWSC רק ל-20׳: משקל ברוטו 18–20.99 טון = 200$ — מותנה במשקל, לא נוסף לסה״כ. 40DV ו-40HC באותו מחיר במחירון. קודי מכולה: 2SD=20'DV, 4SD=40'DV, 4SH=40'HC.",
    "KLG included",
    "DETENTION: ASH - $ 21 ; HFA - $ 17",
    "DETENTION: ASH - $ 42 ; HFA - $ 34",
    "Dry FAK only, not Ceramics. DETENTION: ASH - $ 21 ; HFA - $ 17",
    "Dry FAK only, not Ceramics. DETENTION: ASH - $ 42 ; HFA - $ 34",
    "F.A.K. ליעדי אשדוד וחיפה (אותו מחיר; במייל לא צוין נמל יעד, וההצעה היא ליבוא לישראל). תוקף 01.12.2026–31.12.2026. מספר חוזה/הסכם: Q73WC4P6G (יש להשתמש במספר המעודכן; מספרי החוזה הקודמים אינם בתוקף עוד). תעריפי הובלה: מלונדון גייטוויי (UK) 200$/20׳ ו-300$/40׳; מאנטוורפן, רוטרדם, לה האבר והמבורג (NWC) 375$/20׳ ו-600$/40׳. 40׳ HC לא צוין במחירון ולא הומצא תעריף. התוספות הבאות נוספו לסה״כ בדולר, לפי /TEU כפול 2 ל-40׳ ולפי /CNTR כסכום למכולה: BRC 367$/TEU, PSS 200$/TEU, IEI (Import Emergency Imbalance) 100$/מכולה, ECA 160$/TEU, ETS 66$/TEU, EFS 81$/TEU, FEU 12$/TEU. EBS: NO EBS — לא נוסף. THC יעד (VATOS) 275$/20׳ ו-400$/40׳ נוסף כ-DTHC (Collect). אין EBS. 21 ימי demurrage בהסכם — הימים החופשיים בהצעה תקפים רק למשלוחי Collect. דירוג לפי תאריך הפלגת הפרופורמה בלוח MSC. כפוף לתוספות חירום V.A.T.O.S, לזמינות ציוד במוצא, לביקורת בנמלי שטעון, לדמי D/O ולהוצאות מקומיות (סכומים לא צוינו — לא הומצאו). לא כולל שחרור מכס, שירותי פורוורדינג, הטענה/קשירה/אבטחת מטען, אחסנה, demurrage מעבר לימי הפטור, זמן המתנה, ביטוח ומסי יבוא מקומיים במוצא וביעד. לא נוספו אוטומטית: HAZ (Med & Low Risk) 50$/TEU בשורות NWC בלבד (בתא UK התא היה ריק); תעריף HAZ לפי רמת סיכון מ-01.01.2023: Low 300$/מכולה, Med 400$, High 800$ (סוללות ליתיום = High Risk); למטען מסוכן נדרש אישור מוקדם של MSC ישראל לפי Packing Group ו-Class; THC ל-IMO ולציוד מיוחד 320$/20׳ ו-460$/40׳; EIS 50$/מכולה למטען self-heating לפי קודי HS שצוינו (0305 / 1214 / 1404 / 1802 / 2301 / 2304 / 2305 / 2306 / 2308 / 2309 / 2803 / 3802 / 3804 / 4004 / 4400 / 4401 / 4402 / 5200 / 5201 / 5300 / 5301 / 5302 / 5303 / 5305 / 7204 / 7602; ייתכנו קודים נוספים בלי הודעה מוקדמת); Foodgraded units additional (בלי סכום); Flexitank — התעריפים אינם תקפים, יש לבדוק מול המשרד; מטען בשווי מעל 500,000$ למכולה או תרופות יקרות — התעריפים אינם תקפים; ISPS במוצא (כפוף, בלי סכום); LWS אם/מתי/היכן שחל; GRI. תנאי ההובלה: https://www.msc.com/che/contract-of-carriage.",
    "FAK, General cargo / Non IMCO only. יעדים: אשדוד וחיפה, אותו מחיר. כותרת המחירון: DESTINATION ASHDOD and HAIFA - MD1 SERVICE (טבלת התוספות תחת הכותרת MD3-WB). תוקף: המזרח הרחוק, הודו וסרי לנקה 01.11.2026–15.11.2026; אוסטרליה 01.11.2026–30.11.2026. Inclusive במחיר ההובלה: CAF, MBS, CSS, PSS, EFS. LSF מצוין כ-0 ולא נוסף. נוספו לסה״כ לפי המחירון (Valid for all import bookings): OBS 275$/20׳ ו-550$/40׳–40HC; CMD 21$ למכולה; FGP (Food Grade Premium) 100$ למכולה; ו-THC ביעד (במחירון: THC; טופל כ-DTHC כמו במחירון ONE מצפון אירופה, כי הסכומים 270$/20׳ ו-390$/40׳–40HC הם תעריף היעד) 270$/20׳ ו-390$/40׳–40HC. מאוסטרליה נוסף גם ISL (International security fee) 32$ למכולה (Only from Australia). SCT (Suez Canal Transit) 18$/20׳ ו-36$/40׳–40HC חל רק אם המטען עובר בתעלת סואץ. במחירון לא צוין ניתוב דרך סואץ לאף קו, ולכן לא נוסף אוטומטית. Cochin, Mangalore ו-Visakhapatnam מתומחרים לפי תעריף Mundra ומוצגים כ-via Mundra, לפי המייל; ל-Tuticorin ול-Kattupalli נשארו התעריפים הנפרדים שבמחירון. תוספת משקל כבד ל-20׳ (HEA, לפי משקל המטען נטו): 0–13.99 טון 0$; 14–17.99 טון 300$; 18–27 טון 600$ — מותנה במשקל, לא נוסף לסה״כ. GOH (Garment On Hanger) צוין במייל כחל על כל היבוא — לא צוין סכום, לא נוסף. כפוף לכל התוספות התקפות במועד השילוח. Freight collect, בכפוף להגשת תעריף (filing) לפני הזמנה. תאריך דירוג ה-B/L: Proforma ETD (לוח הזמנים במועד ההזמנה). ליצוא מהודו: תאריך היישום הוא תאריך קבלת המטען (CRD). ניתוב סטנדרטי בלבד. ללקוחות ללא אשראי: תשלום במזומן בשקלים.",
    "FAK, General cargo / Non IMCO only. יעדים: אשדוד וחיפה, אותו מחיר. כותרת המחירון: DESTINATION ASHDOD and HAIFA - MD1 SERVICE (טבלת התוספות תחת הכותרת MD3-WB). תוקף: המזרח הרחוק, הודו וסרי לנקה 01.12.2026–15.12.2026. אוסטרליה (Oceania) לא נכללה במחירון זה (במייל ובמחירון: not yet available). Inclusive במחיר ההובלה: CAF, MBS, CSS, PSS, EFS. LSF מצוין כ-0 ולא נוסף. נוספו לסה״כ לפי המחירון (Valid for all import bookings): OBS 275$/20׳ ו-550$/40׳–40HC; CMD 21$ למכולה; FGP (Food Grade Premium) 100$ למכולה; ו-THC ביעד (במחירון: THC; טופל כ-DTHC כמו במחירון ONE מצפון אירופה, כי הסכומים 270$/20׳ ו-390$/40׳–40HC הם תעריף היעד) 270$/20׳ ו-390$/40׳–40HC. SCT (Suez Canal Transit) 18$/20׳ ו-36$/40׳–40HC חל רק אם המטען עובר בתעלת סואץ. במחירון לא צוין ניתוב דרך סואץ לאף קו, ולכן לא נוסף אוטומטית. Cochin, Mangalore ו-Visakhapatnam מתומחרים לפי תעריף Mundra ומוצגים כ-via Mundra, לפי המייל; ל-Tuticorin ול-Kattupalli נשארו התעריפים הנפרדים שבמחירון. תוספת משקל כבד ל-20׳ (HEA, לפי משקל המטען נטו): 0–13.99 טון 0$; 14–17.99 טון 300$; 18–27 טון 600$ — מותנה במשקל, לא נוסף לסה״כ. GOH (Garment On Hanger) צוין במייל כחל על כל היבוא — לא צוין סכום, לא נוסף. אין תעריף למכולות יבשות מיפן (כתוב לפנות לסוכן). כפוף לכל התוספות התקפות במועד השילוח. Freight collect, בכפוף להגשת תעריף (filing) לפני הזמנה. תאריך דירוג ה-B/L: Proforma ETD (לוח הזמנים במועד ההזמנה). ליצוא מהודו: תאריך היישום הוא תאריך קבלת המטען (CRD). ניתוב סטנדרטי בלבד. ללקוחות ללא אשראי: תשלום במזומן בשקלים.",
    "F.A.K. HARMLESS. מספר חוזה: R26824020000093 (FAK). חוזה COIR: R26825020000029 (מכותרת המייל מ-22.11.2026; אין במחירון תעריף COIR). תוקף 19.11.2026–15.12.2026 (*Effective last container Received for export at train depots, terminals or POL'S). המחירון עודכן 23.11.26; תאריך ההנפקה לפי המייל: 24.11.2026. DTHC ו-EFS נוספו לסה״כ לפי הטבלה: DTHC 275$/20׳ ו-400$/40׳; EFS IN USD - NOV/DEC = 167/168$ × TEU (בנובמבר 167$/20׳ ו-334$/40׳; בדצמבר 168$/20׳ ו-336$/40׳). OVW כלול בתעריף ל-20׳. 14 ימי demurrage חינם ביעד, אלא אם איש המכירות ציין אחרת. אחסנה ו-demurrage ביעד אינם כלולים מעבר לימי הפטור. Origin THC משולם על ידי השולח ולא נוסף. כפוף לדמי D/O ולהוצאות מקומיות — סכומים לא צוינו במחירון ולא הומצאו. כפוף לתוספות נוספות במועד השילוח. לא כולל תוספות למשקל יתר, ציוד מיוחד ומטען מסוכן. כפוף לביקורת בכל נמל שטעון. לא מקבלים Granite Blocks. לא נוספו אוטומטית (מותנים): EIS 50$/מכולה ל-Coir pith/Flammable (הסכם נפרד) ולמטען harmless עם סכנת בעירה ספונטנית/חימום עצמי; FTS 14$/TEU ל-FlexiTank/FlexiBag; SWB FEE 35$ לסוכן/שולח ב-POL שאינו אשראי; דמי HAZ ב-POL (בלי VIZAK ו-GOA): HIGH RISK PG 1 500$/TEU, LOW RISK PG 3 150$/TEU, MEDIUM RISK PG 2 250$/TEU; OTS 500$ ל-20׳ Open Top ו-1000$ ל-40׳ Open Top/High; Israel THC למטען מסוכן/ציוד מיוחד 320$/20׳ ו-460$/40׳; SOC FEE 500$ × TEU. ביטול הזמנה: 200$/מכולה. תנאי ההובלה: https://www.msc.com/che/contract-of-carriage. הובלה יבשתית עד מחסן הלקוח הוצעה במייל מ-22.11.2026 באותו שרשור, ולא תומחרה במחירון. זמני מעבר (מאותו מייל מ-22.11.2026): Mundra 48–49 ימים, Nhava Sheva 47–48, Tuticorin 44–45, Kolkata 53–54, Colombo (Sri Lanka) 37–38, ליעדי אשדוד וחיפה.",
    "SPOT HARMLESS ליעדי אשדוד (HCT) וחיפה (אותו מחיר). תוקף 01.12.2026–14.12.2026 (Effective as of 1.12.2026 until further notice but not beyond 14.12.2026). כותרת המחירון: SPOT rate offer. המחירון הקודם לאותו חלון תוקף (הונפק 15.11.2026) נקרא FAK rate offer. תאריך ההנפקה 25.11.2026. תעריף 20׳ DV חל רק על מטען במשקל ברוטו עד 22.9 טון (20DV OVW TILL 22.9 TONS) — למטען כבד יותר חלות תוספות, אבל הסכום לא צוין בגיליון ולא הומצא. THC במחירון (THC IN USD) 275$/20׳ ו-400$/40׳ נוסף לסה״כ כטיפול יעד (Origin THC משולם ע״י השולח). PRS 55$/110$ ו-SCS 36$/72$ (20׳/40׳) נוספו לפי הטבלה. CLS 20$/40$ נוסף רק בשורות שבהן צוין (נמלי סין היבשתית). CRS 131$/262$ נוסף רק בשורות שבהן צוין (הונג קונג ושאר המוצאים שאינם סין היבשתית). EFS לא מופיע במחירון הזה ולא נוסף. מספר SCT: 2361-88888-ST. יש לאמת את קוד ה-SCT מול משרד MSC לפני ההזמנה. אחרי שההזמנה הוצבה לא ניתן לשנות את הקוד, ושינוי יגרור קנס של 3,500$ למכולה; הזמנה שאושרה עם קוד SCT שגוי ובלי תעריף — יחולו תעריפי FAK. אם המכולות הריקות טרם שוחררו, ניתן לשנות את קוד ה-SCT בלי קנס. הובלה מנמלי בסיס לפי תאריך יציאת הפרופורמה (scheduled vessel departure = proforma sailing date), לא לפי היציאה בפועל ולא לפי כניסת המכולה לטרמינל; מנמלי out (Sihanoukville, Makassar, Songkhla ונמלי out בסין) לפי היציאה בפועל; בנגקוק לפי פרופורמת Laem Chabang. 12 ימי demurrage חינם ביעד. אחסנה ו-demurrage ביעד אינם כלולים מעבר לימי הפטור. כפוף לדמי D/O ולהוצאות מקומיות (טבלת Locals מוצגת בנפרד, לא בסה״כ ההובלה). כפוף לתוספות במועד השילוח, לזמינות מקום וציוד, ולתנאי MSC Israel (https://www.msc.com/che/contract-of-carriage). החברה אינה מתחייבת לטעינה באונייה, בתאריך או בשעה מסוימים; לוחות הזמנים הם הערכות בלבד. לא נוספו אוטומטית: Flexi/Flexibag 14$ למכולה; מטען עם בעירה ספונטנית/חימום עצמי 50$/מכולה (גיליון SCF); דמי מועמדות למכולה כבדה בהונג קונג ודרום סין (RMB/HKD לפי הגיליון, לא הומרו); תעריפי pre-carriage / TAO-PRE וסין inland (גיליונות נפרדים) — להוסיף מעל תעריף נמל האם, לא נכללו בסה״כ. הערות מהגיליונות האלה (בלי התעריפים) מופיעות בהודעת MSC של המחירון."
  ],
  "incl": [
    "CNS/AGC/SSD/WR/THC",
    "",
    "CNS/WR",
    "CNS/WR/IPS/THC",
    "CNS/WR/NEF",
    "CNS/WR/IPS",
    "CNS/WR/SE",
    "CNS/WR/BLF",
    "CNS/PRM/WR/BLF",
    "CNS/WRP",
    "CNS/WR/RAD/IPS/THC",
    "CNS/OWS/WR/KLG/THC/IPS/LTO",
    "EU",
    "LSA/PSS/EBS",
    "OVW",
    "CNS/WR/SEH",
    "EFS/THL/CSS/IFP/MBS/TSL",
    "EBS/ERC/STF/WRC/PSS",
    "CNS/AGC/SSD/WR",
    "CNS/AGC/SSD/WR/SEH",
    "CNS/AGC/SSD/WR/KLG/IPS",
    "CNS/AGC/SSD/WR/SEH/KLG/IPS/THC",
    "CNS/AGC/SSD/WR/LTO",
    "CNS/AGC/SSD/WR/LTO/OCS",
    "BAF",
    "BAF/War/Detention",
    "BAF/War/V. ISPS/Detention/ES",
    "CNS/AGC/SSD/WR/IPS",
    "CAF/MBS/CSS/PSS/EFS"
  ],
  "codes": [
    "GFS",
    "NBF",
    "SEH",
    "WRP",
    "PIS",
    "IPS",
    "AIS",
    "THD",
    "GIO",
    "CSF",
    "RPL",
    "THC",
    "HAD",
    "BLF",
    "DCD",
    "OPS",
    "ESS",
    "NEF",
    "PTF",
    "VGM",
    "EHF",
    "BCC",
    "CUS",
    "DOF",
    "LOG",
    "WAF",
    "IMS",
    "HAC",
    "DT",
    "EU",
    "IS",
    "OW",
    "TA",
    "WRS",
    "ETS",
    "LSA",
    "PSS",
    "EBS",
    "THC-IL",
    "DTHC",
    "EFS",
    "RFE",
    "OBS",
    "EES",
    "THL",
    "CSS",
    "IFP",
    "MBS",
    "TSL",
    "CMD",
    "PRS",
    "SCS",
    "CLS",
    "CRS",
    "THC/D",
    "ISPS/D",
    "ISOCC",
    "EUIS",
    "LSS",
    "RCC",
    "OCS",
    "CRP",
    "SEC",
    "VISPS",
    "EIS",
    "ENV",
    "EWR",
    "FEEDER",
    "BRC",
    "IEI",
    "ECA",
    "FEU",
    "FGP",
    "SCT",
    "ISL"
  ],
  "curs": [
    "USD",
    "BRL",
    "EUR",
    "CNY",
    "HKD",
    "INR",
    "TWD",
    "VND",
    "JPY",
    "KRW",
    "SGD",
    "THB",
    "GBP"
  ],
  "bases": [
    "Container",
    "BL"
  ],
  "ett": [
    "50-56",
    "32-37",
    "46-52",
    "44-50",
    "46-50",
    "44-48",
    "30-35",
    "35-40",
    "42-46",
    "36-42",
    "42-48",
    "48-52",
    "32-38",
    "40-45",
    "42-50",
    "38-44",
    "28-34",
    "30-40",
    "52-56",
    "28-36",
    "48-49",
    "47-48",
    "44-45",
    "53-54",
    "37-38"
  ],
  "unlo": {
    "DURRES": [
      "ALDRZ",
      "Albania"
    ],
    "BUENOS AIRES": [
      "ARBUE",
      "Argentina"
    ],
    "BRISBANE (QL)": [
      "AUBNE",
      "Australia"
    ],
    "MELBOURNE (VI)": [
      "AUMEL",
      "Australia"
    ],
    "SYDNEY (NS)": [
      "AUSYD",
      "Australia"
    ],
    "BARCADERA - ARUBA": [
      "AWBAR",
      "Aruba"
    ],
    "BRIDGETOWN (BARBADOS)": [
      "BBBGI",
      "Barbados"
    ],
    "ITAPOA (SC)": [
      "BRIOA",
      "Brazil"
    ],
    "NAVEGANTES (SC)": [
      "BRNVT",
      "Brazil"
    ],
    "PARANAGUA (PR)": [
      "BRPNG",
      "Brazil"
    ],
    "RIO DE JANEIRO (RJ)": [
      "BRRIO",
      "Brazil"
    ],
    "SANTOS (SP)": [
      "BRSSZ",
      "Brazil"
    ],
    "BELIZE CITY": [
      "BZBZE",
      "Belize"
    ],
    "HALIFAX (NS)": [
      "CAHAL",
      "Canada"
    ],
    "MONTREAL (QC)": [
      "CAMTR",
      "Canada"
    ],
    "TORONTO (ON)": [
      "CATOR",
      "Canada"
    ],
    "VANCOUVER (BC)": [
      "CAVAN",
      "Canada"
    ],
    "BARRANQUILLA": [
      "COBAQ",
      "Colombia"
    ],
    "CARTAGENA": [
      "COCTG",
      "Colombia"
    ],
    "MOIN": [
      "CRMOB",
      "Costa Rica"
    ],
    "WILLEMSTAD-CURACAO": [
      "CWWIL",
      "Curacao"
    ],
    "LIMASSOL": [
      "CYLMS",
      "Cyprus"
    ],
    "RIO HAINA (PORT OF)": [
      "DOHAI",
      "Dominican Rep."
    ],
    "DAMIETTA": [
      "EGDAM",
      "Egypt"
    ],
    "BARCELONA": [
      "ESBCN",
      "Spain"
    ],
    "CASTELLON DE LA PLANA": [
      "ESCAS",
      "Spain"
    ],
    "VALENCIA": [
      "ESVLC",
      "Spain"
    ],
    "FOS SUR MER (13)": [
      "FRFOS",
      "France"
    ],
    "POTI": [
      "GEPTI",
      "Georgia"
    ],
    "PIRAEUS": [
      "GRPIR",
      "Greece"
    ],
    "THESSALONIKI": [
      "GRSKG",
      "Greece"
    ],
    "SANTO TOMAS DE CASTILLA": [
      "GTSTC",
      "Guatemala"
    ],
    "GEORGETOWN - GUYANA": [
      "GYGEO",
      "Guyana"
    ],
    "ASHDOD": [
      "ILASH",
      "Israel"
    ],
    "HAIFA": [
      "ILHFA",
      "Israel"
    ],
    "GENOA": [
      "ITGOA",
      "Italy"
    ],
    "RAVENNA": [
      "ITRAN",
      "Italy"
    ],
    "SALERNO": [
      "ITSAL",
      "Italy"
    ],
    "VENICE": [
      "ITVCE",
      "Italy"
    ],
    "ALTAMIRA": [
      "MXATM",
      "Mexico"
    ],
    "VERACRUZ": [
      "MXVER",
      "Mexico"
    ],
    "PANAMA MANZANILLO": [
      "PAMIT",
      "Panama"
    ],
    "LISBON": [
      "PTLIS",
      "Portugal"
    ],
    "KOPER": [
      "SIKOP",
      "Slovenia"
    ],
    "LA GUAIRA": [
      "VELAG",
      "Venezuela"
    ],
    "MARACAIBO": [
      "VEMAR",
      "Venezuela"
    ],
    "PUERTO CABELLO": [
      "VEPBL",
      "Venezuela"
    ],
    "CHATTOGRAM": [
      "BDCGP",
      "Bangladesh"
    ],
    "DHAKA": [
      "BDDAC",
      "Bangladesh"
    ],
    "DALIAN": [
      "CNDLC",
      "China"
    ],
    "FUZHOU": [
      "CNFOC",
      "China"
    ],
    "LIANYUNGANG": [
      "CNLYG",
      "China"
    ],
    "NINGBO": [
      "CNNGB",
      "China"
    ],
    "NANJING": [
      "CNNKG",
      "China"
    ],
    "NANTONG": [
      "CNNTG",
      "China"
    ],
    "SHANGHAI": [
      "CNSHA",
      "China"
    ],
    "SHEKOU": [
      "CNSHK",
      "China"
    ],
    "SHANTOU": [
      "CNSWA",
      "China"
    ],
    "QINGDAO": [
      "CNTAO",
      "China"
    ],
    "WENZHOU": [
      "CNWNZ",
      "China"
    ],
    "WUHAN": [
      "CNWUH",
      "China"
    ],
    "XINGANG": [
      "CNTXG",
      "China"
    ],
    "XIAMEN": [
      "CNXMN",
      "China"
    ],
    "ZHANGJIAGANG": [
      "CNZJG",
      "China"
    ],
    "HONG KONG": [
      "HKHKG",
      "Hong Kong"
    ],
    "BELAWAN": [
      "IDBLW",
      "Indonesia"
    ],
    "JAKARTA": [
      "IDJKT",
      "Indonesia"
    ],
    "SEMARANG": [
      "IDSRG",
      "Indonesia"
    ],
    "SURABAYA": [
      "IDSUB",
      "Indonesia"
    ],
    "NAGOYA": [
      "JPNGO",
      "Japan"
    ],
    "TOKYO": [
      "JPTYO",
      "Japan"
    ],
    "KOBE": [
      "JPUKB",
      "Japan"
    ],
    "PUSAN": [
      "KRPUS",
      "South Korea"
    ],
    "PENANG": [
      "MYPEN",
      "Malaysia"
    ],
    "PASIR GUDANG": [
      "MYPGU",
      "Malaysia"
    ],
    "PORT KELANG": [
      "MYPKG",
      "Malaysia"
    ],
    "CEBU": [
      "PHCEB",
      "Philippines"
    ],
    "DAVAO": [
      "PHDVO",
      "Philippines"
    ],
    "SINGAPORE": [
      "SGSIN",
      "Singapore"
    ],
    "KEELUNG": [
      "TWKEL",
      "Taiwan"
    ],
    "KAOHSIUNG": [
      "TWKHH",
      "Taiwan"
    ],
    "TAICHUNG": [
      "TWTXG",
      "Taiwan"
    ],
    "BANGKOK": [
      "THBKK",
      "Thailand"
    ],
    "LAEM CHABANG": [
      "THLCH",
      "Thailand"
    ],
    "LAT KRABANG": [
      "THLKR",
      "Thailand"
    ],
    "DA NANG": [
      "VNDAD",
      "Vietnam"
    ],
    "HAIPHONG": [
      "VNHPH",
      "Vietnam"
    ],
    "HO CHI MINH": [
      "VNSGN",
      "Vietnam"
    ],
    "MANILA": [
      "PHMNL",
      "Philippines"
    ],
    "NANSHA": [
      "CNNSA",
      "China"
    ],
    "YANTIAN": [
      "CNYTN",
      "China"
    ],
    "ZHANJIANG": [
      "CNZHA",
      "China"
    ],
    "MUNDRA": [
      "INMUN",
      "India"
    ],
    "NHAVA SHEVA": [
      "INNSA",
      "India"
    ],
    "HAZIRA": [
      "INHZA",
      "India"
    ],
    "CHENNAI": [
      "INMAA",
      "India"
    ],
    "ENNORE": [
      "INENR",
      "India"
    ],
    "TUTICORIN": [
      "INTUT",
      "India"
    ],
    "COCHIN": [
      "INCOK",
      "India"
    ],
    "KRISHNAPATNAM": [
      "INKRI",
      "India"
    ],
    "VIZAKHAPATNAH (VIZAG)": [
      "INVTZ",
      "India"
    ],
    "KOLKATA": [
      "INCCU",
      "India"
    ],
    "HALDIA": [
      "INHAL",
      "India"
    ],
    "MANGALORE": [
      "INIXE",
      "India"
    ],
    "COLOMBO": [
      "LKCMB",
      "Sri Lanka"
    ],
    "ALEXANDRIA": [
      "EGALY",
      "Egypt"
    ],
    "ASUNCION": [
      "PYASU",
      "Paraguay"
    ],
    "CONSTANTA": [
      "ROCND",
      "Romania"
    ],
    "MONTEVIDEO": [
      "UYMVD",
      "Uruguay"
    ],
    "VARNA": [
      "BGVAR",
      "Bulgaria"
    ],
    "ANTWERP": [
      "BEANR",
      "Belgium"
    ],
    "BREMERHAVEN (HB)": [
      "DEBRV",
      "Germany"
    ],
    "AARHUS": [
      "DKAAR",
      "Denmark"
    ],
    "COPENHAGEN": [
      "DKCPH",
      "Denmark"
    ],
    "FREDERICIA": [
      "DKFRE",
      "Denmark"
    ],
    "TALLINN": [
      "EETLL",
      "Estonia"
    ],
    "HELSINKI": [
      "FIHEL",
      "Finland"
    ],
    "KOTKA": [
      "FIKTK",
      "Finland"
    ],
    "LE HAVRE (SEINE-MARITIME)": [
      "FRLEH",
      "France"
    ],
    "TILBURY (ESSEX)": [
      "GBTIL",
      "United Kingdom"
    ],
    "DUBLIN": [
      "IEDUB",
      "Ireland"
    ],
    "CORK": [
      "IEORK",
      "Ireland"
    ],
    "KLAIPEDA": [
      "LTKLJ",
      "Lithuania"
    ],
    "RIGA": [
      "LVRIX",
      "Latvia"
    ],
    "ROTTERDAM": [
      "NLRTM",
      "Netherlands"
    ],
    "GDANSK": [
      "PLGDN",
      "Poland"
    ],
    "GDYNIA": [
      "PLGDY",
      "Poland"
    ],
    "LEIXOES": [
      "PTLEI",
      "Portugal"
    ],
    "GOTHENBURG": [
      "SEGOT",
      "Sweden"
    ],
    "HELSINGBORG": [
      "SEHEL",
      "Sweden"
    ],
    "PANJANG": [
      "IDPNJ",
      "Indonesia"
    ],
    "QUINHON": [
      "VNUIH",
      "Vietnam"
    ],
    "BUSAN": [
      "KRPUS",
      "South Korea"
    ],
    "GWANGYANG": [
      "KRKAN",
      "South Korea"
    ],
    "INCHEON": [
      "KRINC",
      "South Korea"
    ],
    "HAKATA": [
      "JPHKT",
      "Japan"
    ],
    "OSAKA": [
      "JPOSA",
      "Japan"
    ],
    "YOKKAICHI": [
      "JPYKK",
      "Japan"
    ],
    "YOKOHAMA": [
      "JPYOK",
      "Japan"
    ],
    "YANGZHOU": [
      "CNYET",
      "China"
    ],
    "ZHENJIANG": [
      "CNZJZ",
      "China"
    ],
    "CHONGQING": [
      "CNCHG",
      "China"
    ],
    "YICHANG": [
      "CNYCN",
      "China"
    ],
    "TAICANG": [
      "CNTAC",
      "China"
    ],
    "CHENGDU (R/O)": [
      "CNCHD",
      "China"
    ],
    "JINGZHOU": [
      "CNJGZ",
      "China"
    ],
    "JIAXING": [
      "CNJIX",
      "China"
    ],
    "JIUJIANG": [
      "CNJIA",
      "China"
    ],
    "ZHUHAI": [
      "CNZHU",
      "China"
    ],
    "JIUJIANG GUANGDONG": [
      "CNJJG",
      "China"
    ],
    "SANSHUI GUANGDONG": [
      "CNSNO",
      "China"
    ],
    "NANHAI": [
      "CNNHI",
      "China"
    ],
    "HAIKOU": [
      "CNHAK",
      "China"
    ],
    "QUANZHOU": [
      "CNQWO",
      "China"
    ],
    "MACAU": [
      "MOMCA",
      "Macau"
    ],
    "MOJI": [
      "JPMJI",
      "Japan"
    ],
    "SHIMIZU": [
      "JPSMZ",
      "Japan"
    ],
    "IWAKUNI": [
      "JPIWU",
      "Japan"
    ],
    "TANJUNG PELEPAS": [
      "MYPTP",
      "Malaysia"
    ],
    "CAGAYAN DE ORO": [
      "PHKGY",
      "Philippines"
    ],
    "TAIPEI": [
      "TWTPE",
      "Taiwan"
    ],
    "ANQING (AH)": [
      "CNAQG",
      "China"
    ],
    "BEIJIAO (GD)": [
      "CNBIJ",
      "China"
    ],
    "CHONGQING (SC)": [
      "CNCKG",
      "China"
    ],
    "CHANGSHA (HN)": [
      "CNCSX",
      "China"
    ],
    "CHANGZHOU (JS)": [
      "CNCZX",
      "China"
    ],
    "DA CHAN BAY (GD)": [
      "CNDCB",
      "China"
    ],
    "DAFENG": [
      "CNDFG",
      "China"
    ],
    "DALIAN (LN)": [
      "CNDLC",
      "China"
    ],
    "FUZHOU (FJ)": [
      "CNFOC",
      "China"
    ],
    "GAO MING (GD)": [
      "CNGOM",
      "China"
    ],
    "GAOLAN (GD)": [
      "CNGON",
      "China"
    ],
    "HUANGPU (GD)": [
      "CNHUA",
      "China"
    ],
    "JIANGYIN (JS)": [
      "CNJIA",
      "China"
    ],
    "JIUJIANG (JX)": [
      "CNJIU",
      "China"
    ],
    "JIANGMEN (GD)": [
      "CNJMN",
      "China"
    ],
    "JIUJIANG (GD)": [
      "CNJUJ",
      "China"
    ],
    "NANCHANG (JX)": [
      "CNKHN",
      "China"
    ],
    "LELIU (GD)": [
      "CNLUU",
      "China"
    ],
    "LUZHOU": [
      "CNLUZ",
      "China"
    ],
    "LIANYUNGANG (JS)": [
      "CNLYG",
      "China"
    ],
    "NINGBO (ZJ)": [
      "CNNGB",
      "China"
    ],
    "SANSHAN (GD)": [
      "CNNHS",
      "China"
    ],
    "NANJING (JS)": [
      "CNNKG",
      "China"
    ],
    "NANSHA (GD)": [
      "CNNSA",
      "China"
    ],
    "NANTONG (JS)": [
      "CNNTG",
      "China"
    ],
    "QINGDAO (SD)": [
      "CNQIN",
      "China"
    ],
    "QINZHOU": [
      "CNQZH",
      "China"
    ],
    "RONGQI (GD)": [
      "CNROQ",
      "China"
    ],
    "SHANGHAI (SH)": [
      "CNSHA",
      "China"
    ],
    "JINGZHOU (HUBEI)": [
      "CNSHS",
      "China"
    ],
    "SANSHUI (GD)": [
      "CNSJQ",
      "China"
    ],
    "SHANTOU (GD)": [
      "CNSWA",
      "China"
    ],
    "TIANJIN XINGANG PT (TJ)": [
      "CNTXG",
      "China"
    ],
    "TAIZHOU (JS)": [
      "CNTZO",
      "China"
    ],
    "WUHU (AH)": [
      "CNWHI",
      "China"
    ],
    "WENZHOU (ZJ)": [
      "CNWNZ",
      "China"
    ],
    "WUHAN (HB)": [
      "CNWUH",
      "China"
    ],
    "WUZHOU (GX)": [
      "CNWUZ",
      "China"
    ],
    "XIAOLAN": [
      "CNXAO",
      "China"
    ],
    "XIAMEN (FJ)": [
      "CNXMG",
      "China"
    ],
    "YICHANG (HUBEI)": [
      "CNYIC",
      "China"
    ],
    "YUEYANG (HUNAN)": [
      "CNYYA",
      "China"
    ],
    "YANG ZHOU": [
      "CNYZH",
      "China"
    ],
    "ZHANJIANG (GD)": [
      "CNZHA",
      "China"
    ],
    "ZHENJIANG (JS)": [
      "CNZHE",
      "China"
    ],
    "ZHANGJIAGANG (JS)": [
      "CNZJG",
      "China"
    ],
    "ZHAPU (ZJ)": [
      "CNZPU",
      "China"
    ],
    "ZHAOQING (GD)": [
      "CNZQG",
      "China"
    ],
    "ZHONGSHAN (GD)": [
      "CNZSN",
      "China"
    ],
    "ZHUHAI (GD)": [
      "CNZUH",
      "China"
    ],
    "HAZIRA PORT SURAT": [
      "INHZA",
      "India"
    ],
    "MADRAS (CHENNAI)": [
      "INMAA",
      "India"
    ],
    "VISAKHAPATNAM": [
      "INVTZ",
      "India"
    ],
    "NAGOYA-AICHI": [
      "JPNGO",
      "Japan"
    ],
    "INCHEON (INCH ON)": [
      "KRINC",
      "South Korea"
    ],
    "MANILA NORTH PORT": [
      "PHMNN",
      "Philippines"
    ],
    "ICD LAT KRABANG": [
      "THLKR",
      "Thailand"
    ],
    "ICD BINH DUONG TERMINAL": [
      "VNBDG",
      "Vietnam"
    ],
    "CATLAI GIANGNAM TERM.-HO CHI MINH CITY": [
      "VNCLI",
      "Vietnam"
    ],
    "DONG NAI": [
      "VNDNA",
      "Vietnam"
    ],
    "HO CHI MINH CITY - ICD PHUOC LONG": [
      "VNIPH",
      "Vietnam"
    ],
    "HO CHI MINH CITY - ICD TRANSIMEX": [
      "VNITX",
      "Vietnam"
    ],
    "HO CHI MINH CITY - ICD TANAMEXCO": [
      "VNTAM",
      "Vietnam"
    ],
    "CAI MEP": [
      "VNTOT",
      "Vietnam"
    ],
    "LIVERPOOL": [
      "GBLIV",
      "United Kingdom"
    ],
    "BELFAST": [
      "GBBEL",
      "United Kingdom"
    ],
    "MARSEILLE": [
      "FRMRS",
      "France"
    ],
    "LONDON GATEWAY": [
      "GBLGP",
      "United Kingdom"
    ],
    "HAMBURG": [
      "DEHAM",
      "Germany"
    ],
    "ADELAIDE": [
      "AUADL",
      "Australia"
    ],
    "FREMANTLE": [
      "AUFRE",
      "Australia"
    ]
  },
  "countryHe": {
    "AL": "אלבניה",
    "AR": "ארגנטינה",
    "AU": "אוסטרליה",
    "AW": "ארובה",
    "BB": "ברבדוס",
    "BR": "ברזיל",
    "BZ": "בליז",
    "CA": "קנדה",
    "CO": "קולומביה",
    "CR": "קוסטה ריקה",
    "CW": "קוראסאו",
    "CY": "קפריסין",
    "DO": "הרפובליקה הדומיניקנית",
    "EG": "מצרים",
    "ES": "ספרד",
    "FR": "צרפת",
    "GE": "גאורגיה",
    "GR": "יוון",
    "GT": "גואטמלה",
    "GY": "גיאנה",
    "IL": "ישראל",
    "IT": "איטליה",
    "MX": "מקסיקו",
    "PA": "פנמה",
    "PT": "פורטוגל",
    "SI": "סלובניה",
    "VE": "ונצואלה",
    "BD": "בנגלדש",
    "KH": "קמבודיה",
    "CN": "סין",
    "HK": "הונג קונג",
    "ID": "אינדונזיה",
    "JP": "יפן",
    "KR": "קוריאה הדרומית",
    "MY": "מלזיה",
    "MM": "מיאנמר",
    "PH": "הפיליפינים",
    "SG": "סינגפור",
    "TW": "טייוואן",
    "TH": "תאילנד",
    "VN": "וייטנאם",
    "IN": "הודו",
    "LK": "סרי לנקה",
    "BG": "בולגריה",
    "PY": "פרגוואי",
    "RO": "רומניה",
    "UY": "אורוגוואי",
    "BE": "בלגיה",
    "DE": "גרמניה",
    "DK": "דנמרק",
    "EE": "אסטוניה",
    "FI": "פינלנד",
    "GB": "בריטניה",
    "IE": "אירלנד",
    "LT": "ליטא",
    "LV": "לטביה",
    "NL": "הולנד",
    "PL": "פולין",
    "SE": "שוודיה",
    "MO": "מקאו"
  },
  "countryEn": {
    "AL": "Albania",
    "AR": "Argentina",
    "AU": "Australia",
    "AW": "Aruba",
    "BB": "Barbados",
    "BR": "Brazil",
    "BZ": "Belize",
    "CA": "Canada",
    "CO": "Colombia",
    "CR": "Costa Rica",
    "CW": "Curacao",
    "CY": "Cyprus",
    "DO": "Dominican Republic",
    "EG": "Egypt",
    "ES": "Spain",
    "FR": "France",
    "GE": "Georgia",
    "GR": "Greece",
    "GT": "Guatemala",
    "GY": "Guyana",
    "IL": "Israel",
    "IT": "Italy",
    "MX": "Mexico",
    "PA": "Panama",
    "PT": "Portugal",
    "SI": "Slovenia",
    "VE": "Venezuela",
    "BD": "Bangladesh",
    "KH": "Cambodia",
    "CN": "China",
    "HK": "Hong Kong",
    "ID": "Indonesia",
    "JP": "Japan",
    "KR": "South Korea",
    "MY": "Malaysia",
    "MM": "Myanmar",
    "PH": "Philippines",
    "SG": "Singapore",
    "TW": "Taiwan",
    "TH": "Thailand",
    "VN": "Vietnam",
    "IN": "India",
    "LK": "Sri Lanka",
    "BG": "Bulgaria",
    "PY": "Paraguay",
    "RO": "Romania",
    "UY": "Uruguay",
    "BE": "Belgium",
    "DE": "Germany",
    "DK": "Denmark",
    "EE": "Estonia",
    "FI": "Finland",
    "GB": "United Kingdom",
    "IE": "Ireland",
    "LT": "Lithuania",
    "LV": "Latvia",
    "NL": "Netherlands",
    "PL": "Poland",
    "SE": "Sweden",
    "MO": "Macau"
  },
  "typeHe": {
    "DV20": "20׳ יבש (DV20 / 20DC / 20GP)",
    "DV40": "40׳ יבש (DV40 / 40DC / 40GP)",
    "HC40": "40׳ הייקיוב (HC40 / 40HQ)",
    "FL20": "20׳ פלט (FL20)",
    "FL40": "40׳ פלט (FL40)",
    "OT20": "20׳ גג פתוח (OT20)",
    "OT40": "40׳ גג פתוח (OT40)"
  },
  "surchargeHe": {
    "AIS": "תוספת איזון לאשדוד",
    "BCC": "מס פחמן קנדי",
    "BLF": "דמי שטר מטען",
    "CSF": "דמי שירות מכולה",
    "CUS": "הצהרת מכס",
    "DCD": "איסוף ומסירה",
    "DOF": "דמי מסמכים",
    "EHF": "תוספת דלק להובלה יבשתית במוצא",
    "ESS": "תוספת מחסור בציוד",
    "GFS": "תוספת דלק ירוק",
    "GIO": "אגרת שער",
    "HAC": "תוספת מטען מסוכן",
    "HAD": "תוספת איזון חירום",
    "IMS": "תוספת IMDG למטען מסוכן",
    "IPS": "אבטחת אוניות בינלאומית",
    "LOG": "דמי לוגיסטיקה",
    "NBF": "מקדם דלק (באנקר)",
    "NEF": "אגרת פליטות",
    "OPS": "אבטחת טרמינל במוצא",
    "PIS": "תוספת עונת שיא",
    "PTF": "מס עירייה בפוטי",
    "RPL": "אגרת ריו דה לה פלטה",
    "SEH": "דמי חותם",
    "THC": "טיפול טרמינל במוצא",
    "THD": "טיפול טרמינל ביעד",
    "VGM": "שקילת VGM",
    "WAF": "דמי רציף",
    "WRP": "פרמיית סיכון מלחמה",
    "DT": "טיפול טרמינל ביעד",
    "EU": "מערכת סחר בפליטות (ETS)",
    "IS": "תוספת אי-איזון",
    "OW": "תוספת משקל יתר",
    "TA": "תוספת הובלה ליעד חיפה",
    "WRS": "תוספת סיכון מלחמה",
    "ETS": "מערכת סחר בפליטות (ETS)",
    "PSS": "תוספת עונת שיא",
    "EBS": "תוספת דלק חירום",
    "THC-IL": "טיפול טרמינל ביעד (ישראל)",
    "DTHC": "טיפול טרמינל ביעד (DTHC)",
    "EFS": "EFS (במחירון: EFS IN USD - SEP)",
    "OVW": "משקל יתר (OVW) — כלול בתעריף ל-20׳",
    "RFE": "דלק חירום לנהר (River Emergency Fuel)",
    "PRS": "תוספת סיכון פירטיות (Piracy Risk Surcharge)",
    "SCS": "תוספת תעלת סואץ (Suez Canal Surcharge)",
    "THC/D": "טיפול טרמינל ביעד (THC/D)",
    "ISPS/D": "אגרת ISPS ביעד",
    "EUIS": "תוספת חדשנות אירופית (EU Innovation Surcharge)",
    "KLG": "תוספת משקל יתר",
    "RCC": "חיוב קבלה במוצא",
    "OCS": "תוספת ICD ביצוא",
    "CRP": "תוספת כיסוי עלויות",
    "SEC": "תוספת ביטחון",
    "VISPS": "אגרת ISPS לאונייה (Vessel ISPS)",
    "EIS": "EIS",
    "ENV": "תוספת סביבתית (Environmental)",
    "EWR": "EWR",
    "FEEDER": "הובלת פידר (Feeder Freight)",
    "BRC": "תוספת דלק (Bunker Recovery Charge)",
    "IEI": "תוספת חוסר איזון בציוד ביבוא (Import Emergency Imbalance)",
    "ECA": "אזור בקרת פליטות (Emission Control Area)",
    "OBS": "תוספת דלק של ONE (OBS; במחירון: ONE Banker Surcharge)",
    "CMD": "דמי ניהול מכולה בפריקה (Container management fee for discharge)",
    "FGP": "תוספת מטען למזון (Food Grade Premium)",
    "SCT": "תוספת מעבר בתעלת סואץ (Suez Canal Transit)",
    "ISL": "דמי ביטחון בינלאומיים (International security fee)",
    "CAF": "מקדם התאמת מטבע (Currency Adjustment Factor)",
    "MBS": "תוספת דלק חודשית (Monthly bunker surcharge)",
    "CSS": "תוספת ביטחון של המוביל (Carrier Security Surcharge)"
  },
  "payHe": {
    "prepaid": "במוצא (Prepaid)",
    "collect": "ביעד (Collect)",
    "frt_terms": "לפי תנאי ההובלה"
  },
  "kindHe": {
    "tariff": "לפי תעריף",
    "fixed": "קבוע"
  }
};

window.QUOTE_INDEX.agents = [
  { id: "utrust", name: "UTRUST", nameHe: "UTRUST" },
  { id: "winpax", name: "WINPAX", nameHe: "WINPAX" },
  { id: "unitex", name: "UNITEX", nameHe: "UNITEX" }
];
window.QUOTE_INDEX.agentVersions = [
  {
    id: "utrust-2026-11-25",
    agentId: "utrust",
    file: "data/agents/utrust/2026-11-25.js",
    received: "2026-11-25",
    issued: "2026-11-25",
    issuedApprox: true,
    added: "2026-11-25"
  },
  {
    id: "winpax-2026-11-26",
    agentId: "winpax",
    file: "data/agents/winpax/2026-11-26.js",
    received: "2026-11-26",
    issued: "2026-11-26",
    issuedApprox: true,
    added: "2026-11-26"
  },
  {
    id: "unitex-2026-11-26",
    agentId: "unitex",
    file: "data/agents/unitex/2026-11-26.js",
    received: "2026-11-26",
    issued: "2026-11-26",
    issuedApprox: true,
    added: "2026-11-26"
  }
];
