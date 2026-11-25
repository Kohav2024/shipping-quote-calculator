(function () {
  window.AGENT_PACK = window.AGENT_PACK || {};

  var POL = {
    SHENZHEN: { originKey: "SHENZHEN", originName: "SHENZHEN, CN", originHe: "שנג'ן", originEn: "Shenzhen" },
    NINGBO: { originKey: "NINGBO", originName: "NINGBO, CN", originHe: "נינגבו", originEn: "Ningbo" },
    SHANGHAI: { originKey: "SHANGHAI", originName: "SHANGHAI, CN", originHe: "שנחאי", originEn: "Shanghai" },
    XIAMEN: { originKey: "XIAMEN", originName: "XIAMEN, CN", originHe: "שיאמן", originEn: "Xiamen" },
    QINGDAO: { originKey: "QINGDAO", originName: "QINGDAO, CN", originHe: "צ'ינגדאו", originEn: "Qingdao" },
    TIANJIN: {
      originKey: "TIANJIN",
      originName: "TIANJIN (Xingang), CN",
      originHe: "טיאנג'ין",
      originEn: "Tianjin / Xingang",
      aliases: ["XINGANG", "TIANJIN XINGANG PT", "TIANJIN XINGANG"]
    }
  };
  var DESTS = ["ASHDOD, IL", "HAIFA, IL"];
  var ALL6 = ["SHENZHEN", "NINGBO", "SHANGHAI", "XIAMEN", "QINGDAO", "TIANJIN"];
  var NO_XIAMEN = ["SHENZHEN", "NINGBO", "SHANGHAI", "QINGDAO", "TIANJIN"];

  function ratesFor(polIds, dests, of20, of40, extra) {
    var out = [];
    (polIds || []).forEach(function (id) {
      var p = POL[id];
      (dests || DESTS).forEach(function (dest) {
        var a = Object.assign({ typ: "DV20", of: of20, dest: dest }, p);
        var b = Object.assign({ typ: "HC40", of: of40, dest: dest }, p);
        if (typeof extra === "function") {
          Object.assign(a, extra(a) || {});
          Object.assign(b, extra(b) || {});
        }
        out.push(a, b);
      });
    });
    return out;
  }

  window.AGENT_PACK["utrust-2026-11-25"] = {
    versionId: "utrust-2026-11-25",
    agentId: "utrust",
    agentName: "UTRUST",
    received: "2026-11-25",
    issued: "2026-11-25",
    issuedApprox: true,
    agencyFee: 25,
    agencyFeeCcy: "USD",
    originalEn:
      "UTRUST rate sheet (image). Received 25.11.2026. Issue date approximate (the source was an image, with no email date).\n" +
      "Agency fee USD 25/ctr. Inland port check case by case.\n\n" +
      "MSC — valid 01.12-14.12.2026\n" +
      "POL: Shenzhen, Ningbo, Shanghai, Xiamen, Qingdao, Tianjin. POD: Ashdod / Haifa.\n" +
      "20GP 5300 / 40HQ 6850.\n" +
      "Remarks: the rate we are applying, but we cfm you first; space open to book; agency fee usd25/ctr; 12-18 free days combined at Israel; 20GP OWS >=23T USD300; inland port check case by case; more than 2 containers check case by case.\n\n" +
      "MSK — valid 30.11-06.12.2026\n" +
      "Shenzhen, Ningbo, Shanghai, Xiamen: 20GP 4400 / 40HQ 5850 (40HQ marked in red).\n" +
      "Qingdao: 20GP 4450 / 40HQ 5900. Tianjin: 20GP 4500 / 40HQ 5950.\n" +
      "POD: Ashdod / Haifa.\n" +
      "Remarks: agency fee usd25/ctr; 14 free days at Israel; 20GP NO OWS; inland port check case by case; spot rate changes very fast; more than 2 containers check case by case.\n\n" +
      "ONE — valid 01.12-14.12.2026\n" +
      "Shenzhen, Ningbo, Shanghai, Qingdao, Tianjin: 20GP 4725 / 40HQ 6750. Xiamen not offered.\n" +
      "POD: Ashdod / Haifa.\n" +
      "Remarks: space open; agency fee usd25/ctr; 14 free days combined at Israel; 20GP OWS >=14T USD300, >=18T USD600; inland port check case by case; more than 2 containers check case by case.\n\n" +
      "YML — valid 01.12-14.12.2026\n" +
      "Ashdod: 20GP 5025 / 40HQ 6550. Haifa: 20GP 5125 / 40HQ 6750.\n" +
      "POL: Shenzhen, Ningbo, Shanghai, Qingdao, Tianjin. Xiamen not offered.\n" +
      "Remarks: space open; agency fee usd25/ctr; 14 free days combined at Israel; 20GP OWS >=15T USD150, >=20T USD350; inland port check case by case.",
    offers: [
      {
        id: "msc",
        carrierId: "msc",
        carrierName: "MSC",
        vf: "2026-12-01",
        vt: "2026-12-14",
        dests: DESTS.slice(),
        freeDaysHe: "12–18 ימי שהייה חופשיים משולבים בישראל",
        spaceOpen: true,
        confirmFirst: true,
        inlandCaseByCase: true,
        moreThanTwoCaseByCase: true,
        owsTyp: "DV20",
        ows: [{ minTons: 23, amount: 300, ccy: "USD" }],
        notesHe:
          "התעריף שמיושם, אך קודם יאושר מול הסוכן (we cfm you first). מקום פתוח להזמנה. עמלת סוכן 25 USD למכולה. 12–18 ימי שהייה חופשיים משולבים בישראל. למכולת 20GP: OWS מ־23 טון ומעלה 300 USD. נמל פנים (inland) — לבדיקה לפי מקרה. יותר מ־2 מכולות — לבדיקה לפי מקרה.",
        remarksEn: "the rate we are applying, but we cfm you first; space open to book; agency fee usd25/ctr; 12-18 free days combined at Israel; 20GP OWS >=23T USD300; inland port check case by case; more than 2 containers check case by case.",
        rates: ratesFor(ALL6, DESTS, 5300, 6850)
      },
      {
        id: "msk",
        carrierId: "msk",
        carrierName: "MSK",
        vf: "2026-11-30",
        vt: "2026-12-06",
        dests: DESTS.slice(),
        freeDaysHe: "14 ימי שהייה חופשיים בישראל",
        spaceOpen: false,
        confirmFirst: false,
        inlandCaseByCase: true,
        moreThanTwoCaseByCase: true,
        noOws: true,
        owsTyp: "DV20",
        ows: [],
        notesHe:
          "עמלת סוכן 25 USD למכולה. 14 ימי שהייה חופשיים בישראל. למכולת 20GP אין OWS. נמל פנים (inland) — לבדיקה לפי מקרה. תעריף ספוט משתנה מהר מאוד. יותר מ־2 מכולות — לבדיקה לפי מקרה. מחיר 40HQ לשנג'ן, נינגבו, שנחאי ושיאמן מסומן באדום אצל הסוכן — לאשר מול הסוכן.",
        remarksEn: "agency fee usd25/ctr; 14 free days at Israel; 20GP NO OWS; inland port check case by case; spot rate changes very fast; more than 2 containers check case by case. 40HQ for Shenzhen, Ningbo, Shanghai and Xiamen marked in red.",
        rates: ratesFor(["SHENZHEN", "NINGBO", "SHANGHAI", "XIAMEN"], DESTS, 4400, 5850, function (r) {
          return r.typ === "HC40" ? { priceWatch: true } : null;
        }).concat(
          ratesFor(["QINGDAO"], DESTS, 4450, 5900),
          ratesFor(["TIANJIN"], DESTS, 4500, 5950)
        )
      },
      {
        id: "one",
        carrierId: "one",
        carrierName: "ONE",
        vf: "2026-12-01",
        vt: "2026-12-14",
        dests: DESTS.slice(),
        freeDaysHe: "14 ימי שהייה חופשיים משולבים בישראל",
        spaceOpen: true,
        confirmFirst: false,
        inlandCaseByCase: true,
        moreThanTwoCaseByCase: true,
        owsTyp: "DV20",
        ows: [
          { minTons: 14, amount: 300, ccy: "USD" },
          { minTons: 18, amount: 600, ccy: "USD" }
        ],
        notesHe:
          "מקום פתוח להזמנה. עמלת סוכן 25 USD למכולה. 14 ימי שהייה חופשיים משולבים בישראל. למכולת 20GP: OWS מ־14 טון ומעלה 300 USD, מ־18 טון ומעלה 600 USD. נמל פנים (inland) — לבדיקה לפי מקרה. יותר מ־2 מכולות — לבדיקה לפי מקרה. אין הצעה משיאמן.",
        remarksEn: "space open; agency fee usd25/ctr; 14 free days combined at Israel; 20GP OWS >=14T USD300, >=18T USD600; inland port check case by case; more than 2 containers check case by case. Xiamen not offered.",
        rates: ratesFor(NO_XIAMEN, DESTS, 4725, 6750)
      },
      {
        id: "yml",
        carrierId: "yml",
        carrierName: "YML",
        vf: "2026-12-01",
        vt: "2026-12-14",
        dests: DESTS.slice(),
        freeDaysHe: "14 ימי שהייה חופשיים משולבים בישראל",
        spaceOpen: true,
        confirmFirst: false,
        inlandCaseByCase: true,
        moreThanTwoCaseByCase: false,
        owsTyp: "DV20",
        ows: [
          { minTons: 15, amount: 150, ccy: "USD" },
          { minTons: 20, amount: 350, ccy: "USD" }
        ],
        notesHe:
          "מקום פתוח להזמנה. עמלת סוכן 25 USD למכולה. 14 ימי שהייה חופשיים משולבים בישראל. למכולת 20GP: OWS מ־15 טון ומעלה 150 USD, מ־20 טון ומעלה 350 USD. נמל פנים (inland) — לבדיקה לפי מקרה. אין הצעה משיאמן. מחיר נפרד לאשדוד ולחיפה.",
        remarksEn: "space open; agency fee usd25/ctr; 14 free days combined at Israel; 20GP OWS >=15T USD150, >=20T USD350; inland port check case by case. Xiamen not offered. Separate Ashdod and Haifa rates.",
        rates: ratesFor(NO_XIAMEN, ["ASHDOD, IL"], 5025, 6550).concat(
          ratesFor(NO_XIAMEN, ["HAIFA, IL"], 5125, 6750)
        )
      }
    ]
  };
})();
