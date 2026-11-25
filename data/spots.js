window.AGENT_SPOTS = [
  {
    id: "msc-ningbo-20gp-2026-11-19",
    carrierId: "msc",
    carrierName: "MSC",
    originKey: "NINGBO",
    originHe: "נינגבו",
    originEn: "Ningbo",
    dests: ["ASHDOD", "HAIFA"],
    destOnly: false,
    source: "מסוכן",
    agentName: "",
    received: "2026-11-19",
    ft: 14,
    tt: 25,
    cutoff: "2026-11-23",
    noMsdsBattery: true,
    weightLimit: null,
    ows: { amount: 300, ccy: "USD", typ: "20DV", minTons: 23 },
    cancelFee: null,
    sailings: [
      {
        of: 4000,
        ccy: "USD",
        typ: "20GP",
        etd: "2026-11-14",
        etdDelayed: "2026-11-26",
        availability: [
          { dest: "ASHDOD", typ: "20GP", qty: 3 },
          { dest: "HAIFA", typ: "20GP", qty: 1 }
        ]
      }
    ]
  },
  {
    id: "msc-shanghai-20gp-2026-11-19",
    carrierId: "msc",
    carrierName: "MSC",
    originKey: "SHANGHAI",
    originHe: "שנחאי",
    originEn: "Shanghai",
    dests: ["ASHDOD"],
    destOnly: true,
    source: "מסוכן",
    agentName: "",
    received: "2026-11-19",
    ft: 14,
    tt: 25,
    cutoff: "2026-11-24",
    noMsdsBattery: true,
    weightLimit: null,
    ows: { amount: 300, ccy: "USD", typ: "20DV", minTons: 23 },
    cancelFee: null,
    sailings: [
      {
        of: 4700,
        ccy: "USD",
        typ: "20GP",
        etd: "2026-11-18",
        etdDelayed: "2026-11-28",
        availability: [
          { dest: "ASHDOD", typ: "20GP", qty: 2 }
        ]
      }
    ]
  },
  {
    id: "hpl-yantian-40hq-2026-11-19",
    carrierId: "hpl",
    carrierName: "HPL SPOT",
    originKey: "YANTIAN",
    originHe: "יאנטיאן",
    originEn: "Yantian",
    dests: ["ASHDOD", "HAIFA"],
    destOnly: false,
    source: "מסוכן",
    agentName: "",
    received: "2026-11-19",
    ft: 7,
    tt: 30,
    cutoff: null,
    noMsdsBattery: true,
    weightLimit: { typ: "40HQ", maxTons: 18 },
    ows: null,
    cancelFee: { amount: 600, ccy: "USD", typ: "40HQ" },
    sailings: [
      {
        of: 5300,
        ccy: "USD",
        typ: "40HQ",
        etd: "2026-11-30",
        etdDelayed: "2026-12-06",
        availability: [
          { dest: "ASHDOD", typ: "40HQ", qty: 1 },
          { dest: "HAIFA", typ: "40HQ", qty: 3 }
        ]
      }
    ]
  },
  {
    id: "one-ningbo-haifa-40hq-2026-11-19",
    carrierId: "one",
    carrierName: "ONE",
    originKey: "NINGBO",
    originHe: "נינגבו",
    originEn: "Ningbo",
    dests: ["HAIFA"],
    destOnly: false,
    source: "מסוכן",
    agentName: "",
    received: "2026-11-19",
    ft: 14,
    tt: 40,
    cutoff: null,
    noMsdsBattery: true,
    weightLimit: { typ: "40HQ", maxTons: 18 },
    ows: null,
    cancelFee: null,
    sailings: [
      {
        of: 5700,
        ccy: "USD",
        typ: "40HQ",
        etd: "2026-11-30",
        etdDelayed: "2026-12-10",
        availability: []
      }
    ]
  },
  {
    id: "one-ningbo-ashdod-20gp-2026-11-19",
    carrierId: "one",
    carrierName: "ONE",
    originKey: "NINGBO",
    originHe: "נינגבו",
    originEn: "Ningbo",
    dests: ["ASHDOD"],
    destOnly: false,
    source: "מסוכן",
    agentName: "",
    received: "2026-11-19",
    ft: 14,
    tt: 35,
    cutoff: null,
    noMsdsBattery: true,
    weightLimit: { typ: "20GP", maxTons: 10 },
    ows: null,
    cancelFee: null,
    sailings: [
      {
        of: 3650,
        ccy: "USD",
        typ: "20GP",
        etd: "2026-11-25",
        etdDelayed: "2026-11-28",
        availability: [
          { dest: "ASHDOD", typ: "20GP", qty: 3, inHand: true }
        ]
      }
    ]
  },
  {
    id: "hpl-shanghai-40hq-2026-11-19",
    carrierId: "hpl",
    carrierName: "HPL SPOT",
    originKey: "SHANGHAI",
    originHe: "שנחאי",
    originEn: "Shanghai",
    dests: ["ASHDOD", "HAIFA"],
    destOnly: false,
    source: "מסוכן",
    agentName: "",
    received: "2026-11-19",
    ft: 7,
    tt: 35,
    cutoff: null,
    noMsdsBattery: true,
    weightLimit: { typ: "40HQ", maxTons: 18 },
    ows: null,
    cancelFee: { amount: 600, ccy: "USD", typ: "40HQ" },
    sailings: [
      {
        of: 5500,
        ccy: "USD",
        typ: "40HQ",
        etd: "2026-11-29",
        etdDelayed: null,
        availability: [
          { dest: "ASHDOD", typ: "40HQ", qty: 5 },
          { dest: "HAIFA", typ: "40HQ", qty: 3 }
        ]
      },
      {
        of: 6000,
        ccy: "USD",
        typ: "40HQ",
        etd: "2026-12-01",
        etdDelayed: null,
        availability: []
      }
    ]
  },
  {
    id: "hpl-ningbo-40hq-2026-11-19",
    carrierId: "hpl",
    carrierName: "HPL SPOT",
    originKey: "NINGBO",
    originHe: "נינגבו",
    originEn: "Ningbo",
    dests: ["ASHDOD", "HAIFA"],
    destOnly: false,
    source: "מסוכן",
    agentName: "",
    received: "2026-11-19",
    ft: 7,
    tt: 35,
    cutoff: null,
    noMsdsBattery: true,
    weightLimit: { typ: "40HQ", maxTons: 18 },
    ows: null,
    cancelFee: { amount: 600, ccy: "USD", typ: "40HQ" },
    sailings: [
      {
        of: 6000,
        ccy: "USD",
        typ: "40HQ",
        etd: "2026-12-03",
        etdDelayed: null,
        availability: []
      }
    ]
  },
  {
    id: "msk-ningbo-haifa-40hq-2026-11-25",
    carrierId: "msk",
    carrierName: "MSK (Maersk)",
    originKey: "NINGBO",
    originHe: "נינגבו",
    originEn: "Ningbo",
    dests: ["HAIFA"],
    destOnly: false,
    source: "מסוכן",
    agentName: "",
    received: "2026-11-25",
    issuedApprox: true,
    ft: 7,
    tt: 35,
    cutoff: null,
    noMsdsBattery: true,
    weightLimit: null,
    ows: null,
    cancelFee: { amount: 600, ccy: "USD", typ: "40HQ" },
    notesHe: [
      "תוקף להפלגת ETD 8.12.2026 בלבד.",
      "זמינות לפי ההודעה וטבלת ההקצאה: 3 מכולות 40'HQ לחיפה.",
      "מקום ב־MSK לדצמבר מלא יתר על המידה (overbooked). כרגע יש ביד רק את המקום שלהלן. ההצעה כפופה למקום ולמספר היחידות המוגבל.",
      "שירותים שצוינו באותה הודעה: MSC — ים סוף בשירות ישיר; MD1 (YML/ONE/HMM) — ים סוף דרך DAM; Gemini (MSK+HPL) — ים סוף דרך פורט סעיד.",
      "הודעה חשובה על עומס בנמלים: עיכובים גדולים בכל הנמלים. YML/ONE — כ־10 ימים או יותר; MSC — כ־5 ימים או יותר; HPL+MSK — כ־5 ימים או יותר, ושם האונייה/ההפלגה (V/V) עשוי להשתנות בכל עת.",
      "תאריך הנפקה לא צוין במקור (טקסט מודבק, בלי תאריך מייל). סומן בקירוב לפי יום הקבלה 25.11.2026."
    ],
    original: "MSK space is overbooked in Dec.\nWe only have below space in hands by now.\nPls check if any order we can get?\n\nMSK SPOT\nNINGBO-HAIFA\nOF:USD6100/40HQ for ETD:8-DEC--only 3*40HQ\n7FT\n35TT\nNO MSDS/BATTERY\ncancellation fee：USD600/40HQ\n\nMSK SPOT\nTIANJIN-ASHDOD/HAIFA\nOF:USD4900/20GP for ETD:19-DEC--only 1*20GP+1*20GP\n7FT\n45TT\n20GP OWS FEE: USD 400/20 DV for cargo ≥ 21 tons\nNO MSDS/BATTERY  MSC RED-SEA direct service\nMD1(YML/ONE/HMM) RED-SEA via DAM service\nGemini（MSK+HPL) RED-SEA via PORT SAID\n\nImportant notice\nDue to terrible port congestion, all the port have huge delay\nYML/ONE(Around 10 days or even more）\nMSC(Around 5 days or even more）\nHPL+MSK(Aroudn 5 days or even more and change the V/V name in any time）\n\ncancellation fee：USD600/40HQ",
    sailings: [
      {
        of: 6100,
        ccy: "USD",
        typ: "40HQ",
        etd: "2026-12-08",
        etdDelayed: null,
        availability: [
          { dest: "HAIFA", typ: "40HQ", qty: 3 }
        ]
      }
    ]
  },
  {
    id: "msk-tianjin-20gp-2026-11-25",
    carrierId: "msk",
    carrierName: "MSK (Maersk)",
    originKey: "XINGANG",
    originAliases: ["TIANJIN", "TIANJIN XINGANG PT"],
    originHe: "טיאנג'ין",
    originEn: "Tianjin / Xingang",
    dests: ["ASHDOD", "HAIFA"],
    destOnly: false,
    source: "מסוכן",
    agentName: "",
    received: "2026-11-25",
    issuedApprox: true,
    ft: 7,
    tt: 45,
    cutoff: null,
    noMsdsBattery: true,
    weightLimit: null,
    ows: { amount: 400, ccy: "USD", typ: "20DV", minTons: 21 },
    cancelFee: { amount: 600, ccy: "USD", typ: "40HQ" },
    notesHe: [
      "בטקסט: TIANJIN. בטבלת ההקצאה: Xingang (נמל טיאנג'ין) — אותה נקודת מוצא.",
      "תוקף להפלגת ETD 19.12.2026 בלבד.",
      "זמינות: מכולת 20'GP אחת לאשדוד ומכולת 20'GP אחת לחיפה (בטבלה צוין 20'DV). לפי הטבלה, 25 טון לכל יחידה.",
      "תוספת OWS: 400 USD למכולת 20'DV למטען במשקל 21 טון ומעלה. 25 טון הוא בגובה או מעל הסף, ולכן התוספת חלה על היחידות האלה. הסכום לא נוסף אוטומטית למחיר ההובלה (4,900 USD).",
      "דמי ביטול צוינו כ־600 USD למכולת 40'HQ בלבד. לא צוין סכום למכולת 20'GP, ולא הומצא.",
      "מקום ב־MSK לדצמבר מלא יתר על המידה (overbooked). כרגע יש ביד רק את המקום שלהלן. ההצעה כפופה למקום ולמספר היחידות המוגבל.",
      "שירותים שצוינו באותה הודעה: MSC — ים סוף בשירות ישיר; MD1 (YML/ONE/HMM) — ים סוף דרך DAM; Gemini (MSK+HPL) — ים סוף דרך פורט סעיד.",
      "הודעה חשובה על עומס בנמלים: עיכובים גדולים בכל הנמלים. YML/ONE — כ־10 ימים או יותר; MSC — כ־5 ימים או יותר; HPL+MSK — כ־5 ימים או יותר, ושם האונייה/ההפלגה (V/V) עשוי להשתנות בכל עת.",
      "תאריך הנפקה לא צוין במקור (טקסט מודבק, בלי תאריך מייל). סומן בקירוב לפי יום הקבלה 25.11.2026."
    ],
    original: "MSK space is overbooked in Dec.\nWe only have below space in hands by now.\nPls check if any order we can get?\n\nMSK SPOT\nNINGBO-HAIFA\nOF:USD6100/40HQ for ETD:8-DEC--only 3*40HQ\n7FT\n35TT\nNO MSDS/BATTERY\ncancellation fee：USD600/40HQ\n\nMSK SPOT\nTIANJIN-ASHDOD/HAIFA\nOF:USD4900/20GP for ETD:19-DEC--only 1*20GP+1*20GP\n7FT\n45TT\n20GP OWS FEE: USD 400/20 DV for cargo ≥ 21 tons\nNO MSDS/BATTERY  MSC RED-SEA direct service\nMD1(YML/ONE/HMM) RED-SEA via DAM service\nGemini（MSK+HPL) RED-SEA via PORT SAID\n\nImportant notice\nDue to terrible port congestion, all the port have huge delay\nYML/ONE(Around 10 days or even more）\nMSC(Around 5 days or even more）\nHPL+MSK(Aroudn 5 days or even more and change the V/V name in any time）\n\ncancellation fee：USD600/40HQ",
    sailings: [
      {
        of: 4900,
        ccy: "USD",
        typ: "20GP",
        etd: "2026-12-19",
        etdDelayed: null,
        availability: [
          { dest: "ASHDOD", typ: "20GP", qty: 1 },
          { dest: "HAIFA", typ: "20GP", qty: 1 }
        ]
      }
    ]
  }
];
