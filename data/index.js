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
      "email": "IL.BOOKING@ZIM.COM",
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
      "email": "isma-sales@israscan.co.il",
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
      "email": "sales@crown-shipping.co.il",
      "website": "https://www.one-line.com",
      "agent": "Crown Shipping, as general agent for ONE",
      "party": "Crown Shipping, as general agent for ONE"
    }
  ],
  "versions": [
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
      "sourceNote": "Agreement Created On 10.11.2026 15:05:44. תוקף כותרת: 11.11.2026–31.12.2026.",
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
      "sourceNote": "Agreement Created On 25.10.2026 15:38:40. תוקף כותרת: 01.11.2026–31.12.2026.",
      "label": "הסכם 7110068521 · גרסה 274"
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
      "issued": "2026-11-16",
      "issuedApprox": true,
      "added": "2026-11-18",
      "sourceFile": "YML quotations PQ26YML005163 + PQ26YML005151 (PDF)",
      "sourceNote": "לא צוין במסמכים תאריך הנפקה נפרד; נרשם לפי תחילת התוקף 16.11.2026.",
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
      "id": "oocl-00007640-2026-11-15",
      "carrierId": "oocl",
      "file": "data/oocl/2026-11-15_00007640.js",
      "ref": "00007640",
      "version": "",
      "party": "Israel Scandinavian Maritime Agency Ltd, as agent for OOCL",
      "vf": 4,
      "vt": 19,
      "issued": "2026-11-15",
      "issuedApprox": true,
      "added": "2026-11-18",
      "sourceFile": "OOCL filing 00007640 (xlsx)",
      "sourceNote": "לא צוין במחירון תאריך הנפקה נפרד; נרשם לפי תחילת התוקף 15.11.2026.",
      "label": "Filing 00007640",
      "email": "isma-sales@israscan.co.il",
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
      "ref": "",
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
      "id": "one-neu-2026-11-01",
      "carrierId": "one",
      "file": "data/one/2026-11-01_neu.js",
      "ref": "",
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
      "email": "sales@crown-shipping.co.il",
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
    "HELSINGBORG, SE"
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
    "Truck only"
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
    "הובלה באירו (EUR) לפי המחירון; לא הומרה לדולר. Inclusive: EFS, THL, CSS, IFP, MBS, TSL. כפוף ל-OBS ו-EES (דולר ל-TEU, חושב למכולה לפי 1 TEU ל-20׳ ו-2 TEU ל-40׳/HC: OBS 198/396$, EES 72/144$). DTHC: 270$/20׳ ו-390$/40׳–40HC. CMD: 21$ ל-UNIT (טופל כמכולה). כפוף לכל התוספות התקפות במועד השילוח. כפוף ל-FGP (Food Grade Premium) — לא צוין סכום במחירון, לא נוסף לסה״כ. Freight prepaid, בכפוף להגשת תעריף (filing) לפני הזמנה. תאריך דירוג ה-B/L: Proforma ETD (ואם הטעינה בדוברה/פידר — Proforma ETD של הדוברה/פידר). ניתוב סטנדרטי אחד בלבד. כפוף לאישור תפעולי ולזמינות ציוד ומקום. ללקוחות ללא אשראי: תשלום במזומן בשקלים. ריפרים — לפנות מקרה-מקרה (אין תעריפי ריפר במחירון). לפי גיליון General Terms: General cargo / Non IMCO only."
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
    "EFS/THL/CSS/IFP/MBS/TSL"
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
    "CMD"
  ],
  "curs": [
    "USD",
    "BRL",
    "EUR"
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
    "28-36"
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
    "SE": "שוודיה"
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
    "SE": "Sweden"
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
    "RFE": "דלק חירום לנהר (River Emergency Fuel)"
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
