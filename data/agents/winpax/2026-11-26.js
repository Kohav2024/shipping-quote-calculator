(function () {
  window.AGENT_PACK = window.AGENT_PACK || {};

  var POL = {
    SHEKOU: { originKey: "SHEKOU", originName: "SHEKOU, CN", originHe: "שקו", originEn: "Shekou" },
    NANSHA: { originKey: "NANSHA", originName: "NANSHA, CN", originHe: "ננשה", originEn: "Nansha" },
    SHANGHAI: { originKey: "SHANGHAI", originName: "SHANGHAI, CN", originHe: "שנחאי", originEn: "Shanghai" },
    NINGBO: { originKey: "NINGBO", originName: "NINGBO, CN", originHe: "נינגבו", originEn: "Ningbo" },
    DALIAN: { originKey: "DALIAN", originName: "DALIAN, CN", originHe: "דאליין", originEn: "Dalian" },
    XIAMEN: { originKey: "XIAMEN", originName: "XIAMEN, CN", originHe: "שיאמן", originEn: "Xiamen" },
    QINGDAO: { originKey: "QINGDAO", originName: "QINGDAO, CN", originHe: "צ'ינגדאו", originEn: "Qingdao" },
    TIANJIN: {
      originKey: "TIANJIN",
      originName: "TIANJIN (Xingang), CN",
      originHe: "טיאנג'ין",
      originEn: "Tianjin / Xingang",
      aliases: ["XINGANG", "TIANJIN XINGANG PT", "TIANJIN XINGANG"]
    },
    YANTIAN: { originKey: "YANTIAN", originName: "YANTIAN, CN", originHe: "יאנטיאן", originEn: "Yantian" }
  };
  var BOTH = ["ASHDOD, IL", "HAIFA, IL"];
  var ASHDOD = ["ASHDOD, IL"];

  function ratesFor(polId, dests, etd, of20, of40gp, of40hq) {
    var p = POL[polId];
    var out = [];
    (dests || BOTH).forEach(function (dest) {
      function add(typ, of) {
        if (of == null) return;
        var row = Object.assign({ typ: typ, of: of, dest: dest }, p);
        if (etd) row.etd = etd;
        out.push(row);
      }
      add("DV20", of20);
      add("DV40", of40gp);
      add("HC40", of40hq);
    });
    return out;
  }

  var BASIS_MSC_HE = "הובלה + PRS+SCS+CLC (לא כולל מקומיים אחרים כמו DTHC)";
  var BASIS_FRT_HE = "הובלה בלבד (לא כולל מקומיים)";
  var CONGESTION_HE = "הסוכן מציין עיכובים כבדים בנמלים עקב עומס: YML/ONE כ־10 ימים או יותר; MSC כ־5 ימים או יותר; HPL+MSK כ־5 ימים או יותר, ושם ההפלגה (V/V) עשוי להשתנות בכל עת.";

  window.AGENT_PACK["winpax-2026-11-26"] = {
    versionId: "winpax-2026-11-26",
    agentId: "winpax",
    agentName: "WINPAX",
    received: "2026-11-26",
    issued: "2026-11-26",
    issuedApprox: true,
    agencyFee: 0,
    originalEn:
      "WINPAX email (screenshots). Received 26.11.2026. Issue date approximate (screenshots, no email date shown).\n" +
      "No agency fee was stated in the email.\n\n" +
      "Update better price of Dec as below\n\n" +
      "MSC RED-SEA direct service and our price including PRS+SCS+CLC\n" +
      "MD1(YML/ONE/HMM) RED-SEA via DAM service\n" +
      "Gemini  (MSK+HPL) RED-SEA via PORT SAID\n" +
      "COSCO RED-SEA via PIR\n\n" +
      "MSC — table label: RED-SEA-service. Valid 2026-12-01 to 2026-12-14 (1-Dec – 14-Dec).\n" +
      "POD: ASHDOD / HAIFA. Free time: 14 days. OWS: ≥ 23 tons only DT.\n" +
      "Remark: price subject to ETD and including PRS+SCS+CLC.\n" +
      "SHEKOU (ETD: 5/12-DEC): 20GP 4900 / 40GP 6300 / 40HQ 6300.\n" +
      "NANSHA (ETD: 7/14-DEC): 20GP 4900 / 40GP 6300 / 40HQ 6300.\n" +
      "SHANGHAI (ETD: 2/9-DEC): 20GP 4900 / 40GP 6300 / 40HQ 6300.\n" +
      "NINGBO (ETD: 5/12-DEC): 20GP 4900 / 40GP 6300 / 40HQ 6300.\n" +
      "DALIAN (ETD: 5/12-DEC): 20GP 5000 / 40GP 6400 / 40HQ 6400.\n" +
      "XIAMEN (ETD: 6/13-DEC): 20GP 5000 / 40GP 6400 / 40HQ 6400.\n" +
      "QINGDAO (ETD: 3/10-DEC): 20GP 5000 / 40GP 6500 / 40HQ 6500.\n" +
      "TIANJIN (ETD: 3/10-DEC): 20GP 5000 / 40GP 6500 / 40HQ 6500.\n\n" +
      "YML — table label: YML-VIA DAM by RED-SEA (MD1 via DAM). Valid 2026-12-01 to 2026-12-14.\n" +
      "POD: ASHDOD ONLY. Free time: 14 days.\n" +
      "OWS: 20GP LESS THAN 10TONS AND 40HQ LESS THAN 18TONS.\n" +
      "Remark: price subject to ETD.\n" +
      "NINGBO (ETD: 9-DEC): 20GP 5030 / 40GP 6560 / 40HQ 6560.\n" +
      "SHANGHAI (ETD: 11-DEC): 20GP 5030 / 40GP 6560 / 40HQ 6560.\n" +
      "SHEKOU (ETD: 14-DEC): 20GP 5030 / 40GP 6560 / 40HQ 6560.\n\n" +
      "ONE — table label: ONE-VIA DAM by RED-SEA (MD1 via DAM). Valid 2026-12-01 to 2026-12-14.\n" +
      "POD: ASHDOD / HAIFA. Free time: 14 days.\n" +
      "OWS: 20GP LESS THAN 10TONS AND 40HQ LESS THAN 15TONS.\n" +
      "Remark: price subject to ETD.\n" +
      "NINGBO (ETD: 9-DEC): 20GP 4700 / 40GP 6700 / 40HQ 6900.\n" +
      "SHANGHAI (ETD: 11-DEC): 20GP 4700 / 40GP 6700 / 40HQ 6900.\n" +
      "SHEKOU (ETD: 14-DEC): 20GP 4700 / 40GP 6700 / 40HQ 6900.\n" +
      "QINGDAO (ETD: 3-DEC): 20GP 4700 / 40GP 6700 / 40HQ 6900.\n" +
      "TIANJIN (ETD: 6/13-DEC): 20GP 4800 / 40GP 6900 / 40HQ 6900.\n" +
      "XIAMEN (ETD: 4/11-DEC): 20GP 4800 / 40GP 6900 / 40HQ 6900.\n\n" +
      "HPL — table label: HPL VIA RED-SEA (Gemini MSK+HPL via Port Said). Valid 2026-12-01 to 2026-12-14.\n" +
      "POD: ASHDOD / HAIFA. Free time: 7 days.\n" +
      "OWS / Remark: price subject to ETD and cancellation fee: USD600/40HQ and 40HQ LESS THAN 18TONS NO MSDS/BATTERY CARGO.\n" +
      "SHANGHAI: 20GP not offered / 40GP 5900 / 40HQ 5900.\n" +
      "NINGBO: 20GP not offered / 40GP 6000 / 40HQ 6000.\n" +
      "QINGDAO: 20GP not offered / 40GP 6000 / 40HQ 6000.\n" +
      "YANTIAN: 20GP not offered / 40GP 6000 / 40HQ 6000.\n\n" +
      "COSCO — table label: COSCO SPOT (COSCO RED-SEA via PIR). Valid 2026-12-01 to 2026-12-14.\n" +
      "POD: ASHDOD / HAIFA. Free time: 7 days.\n" +
      "OWS / Remark: price subject to ETD and cancellation fee: USD600/40HQ and 40HQ LESS THAN 18TONS NO MSDS/BATTERY CARGO.\n" +
      "YANTIAN: 20GP not offered / 40GP 6500 / 40HQ 6500.\n" +
      "SHANGHAI: 20GP not offered / 40GP 6500 / 40HQ 6500.\n\n" +
      "MSC RED-SEA direct service\n" +
      "MD1(YML/ONE/HMM) RED-SEA via DAM service\n" +
      "Gemini  (MSK+HPL) RED-SEA via PORT SAID\n\n" +
      "Important notice\n" +
      "Due to terrible port congestion, all the port have huge delay\n" +
      "YML/ONE(Around 10 days or even more)\n" +
      "MSC(Around 5 days or even more)\n" +
      "HPL+MSK(Aroudn 5 days or even more and change the V/V name in any time)",
    notesHeCongestion: CONGESTION_HE,
    offers: [
      {
        id: "msc",
        carrierId: "msc",
        carrierName: "MSC",
        vf: "2026-12-01",
        vt: "2026-12-14",
        dests: BOTH.slice(),
        serviceHe: "RED-SEA ישיר",
        serviceEn: "MSC RED-SEA direct service",
        freeDaysHe: "14 ימי שהייה חופשיים",
        basisHe: BASIS_MSC_HE,
        basisShortHe: "הובלה + PRS+SCS+CLC",
        owsNoteHe: "OWS: מ־23 טון ומעלה only DT (לא צוין סכום בגיליון).",
        owsNoteEn: "≥ 23 tons only DT",
        remarksEn: "price subject to ETD and including PRS+SCS+CLC",
        notesHe:
          "שירות RED-SEA ישיר. המחיר כולל PRS+SCS+CLC. 14 ימי שהייה חופשיים. OWS: מ־23 טון ומעלה only DT (לא צוין סכום). המחיר כפוף ל־ETD. הסכום המוצג הוא הובלה + PRS+SCS+CLC (לא כולל מקומיים אחרים כמו DTHC). לא צוינה עמלת סוכן. " + CONGESTION_HE,
        rates: []
          .concat(ratesFor("SHEKOU", BOTH, "5/12-DEC", 4900, 6300, 6300))
          .concat(ratesFor("NANSHA", BOTH, "7/14-DEC", 4900, 6300, 6300))
          .concat(ratesFor("SHANGHAI", BOTH, "2/9-DEC", 4900, 6300, 6300))
          .concat(ratesFor("NINGBO", BOTH, "5/12-DEC", 4900, 6300, 6300))
          .concat(ratesFor("DALIAN", BOTH, "5/12-DEC", 5000, 6400, 6400))
          .concat(ratesFor("XIAMEN", BOTH, "6/13-DEC", 5000, 6400, 6400))
          .concat(ratesFor("QINGDAO", BOTH, "3/10-DEC", 5000, 6500, 6500))
          .concat(ratesFor("TIANJIN", BOTH, "3/10-DEC", 5000, 6500, 6500))
      },
      {
        id: "yml",
        carrierId: "yml",
        carrierName: "YML",
        vf: "2026-12-01",
        vt: "2026-12-14",
        dests: ASHDOD.slice(),
        serviceHe: "MD1 — RED-SEA דרך DAM",
        serviceEn: "YML-VIA DAM by RED-SEA",
        freeDaysHe: "14 ימי שהייה חופשיים",
        basisHe: BASIS_FRT_HE,
        basisShortHe: "הובלה בלבד",
        owsNoteHe: "OWS: 20GP פחות מ־10 טון ו־40HQ פחות מ־18 טון.",
        owsNoteEn: "20GP LESS THAN 10TONS AND 40HQ LESS THAN 18TONS",
        remarksEn: "price subject to ETD",
        notesHe:
          "MD1 (YML/ONE/HMM) — RED-SEA דרך DAM. יעד אשדוד בלבד (אין הצעה לחיפה בגיליון זה). 14 ימי שהייה חופשיים. OWS: 20GP פחות מ־10 טון ו־40HQ פחות מ־18 טון. המחיר כפוף ל־ETD. הסכום המוצג הוא הובלה בלבד (לא כולל מקומיים). לא צוינה עמלת סוכן. " + CONGESTION_HE,
        rates: []
          .concat(ratesFor("NINGBO", ASHDOD, "9-DEC", 5030, 6560, 6560))
          .concat(ratesFor("SHANGHAI", ASHDOD, "11-DEC", 5030, 6560, 6560))
          .concat(ratesFor("SHEKOU", ASHDOD, "14-DEC", 5030, 6560, 6560))
      },
      {
        id: "one",
        carrierId: "one",
        carrierName: "ONE",
        vf: "2026-12-01",
        vt: "2026-12-14",
        dests: BOTH.slice(),
        serviceHe: "MD1 — RED-SEA דרך DAM",
        serviceEn: "ONE-VIA DAM by RED-SEA",
        freeDaysHe: "14 ימי שהייה חופשיים",
        basisHe: BASIS_FRT_HE,
        basisShortHe: "הובלה בלבד",
        owsNoteHe: "OWS: 20GP פחות מ־10 טון ו־40HQ פחות מ־15 טון.",
        owsNoteEn: "20GP LESS THAN 10TONS AND 40HQ LESS THAN 15TONS",
        remarksEn: "price subject to ETD",
        notesHe:
          "MD1 (YML/ONE/HMM) — RED-SEA דרך DAM. 14 ימי שהייה חופשיים. OWS: 20GP פחות מ־10 טון ו־40HQ פחות מ־15 טון. המחיר כפוף ל־ETD. שימו לב: בחלק מהנמלים מחיר 40GP שונה ממחיר 40HQ. הסכום המוצג הוא הובלה בלבד (לא כולל מקומיים). לא צוינה עמלת סוכן. " + CONGESTION_HE,
        rates: []
          .concat(ratesFor("NINGBO", BOTH, "9-DEC", 4700, 6700, 6900))
          .concat(ratesFor("SHANGHAI", BOTH, "11-DEC", 4700, 6700, 6900))
          .concat(ratesFor("SHEKOU", BOTH, "14-DEC", 4700, 6700, 6900))
          .concat(ratesFor("QINGDAO", BOTH, "3-DEC", 4700, 6700, 6900))
          .concat(ratesFor("TIANJIN", BOTH, "6/13-DEC", 4800, 6900, 6900))
          .concat(ratesFor("XIAMEN", BOTH, "4/11-DEC", 4800, 6900, 6900))
      },
      {
        id: "hpl",
        carrierId: "hpl",
        carrierName: "HPL",
        vf: "2026-12-01",
        vt: "2026-12-14",
        dests: BOTH.slice(),
        serviceHe: "Gemini (MSK+HPL) — RED-SEA דרך PORT SAID",
        serviceEn: "HPL VIA RED-SEA (Gemini MSK+HPL via Port Said)",
        freeDaysHe: "7 ימי שהייה חופשיים",
        basisHe: BASIS_FRT_HE,
        basisShortHe: "הובלה בלבד",
        owsNoteHe: "40HQ פחות מ־18 טון. דמי ביטול 600 USD ל־40HQ. אין מטען MSDS/סוללות.",
        owsNoteEn: "cancellation fee: USD600/40HQ and 40HQ LESS THAN 18TONS NO MSDS/BATTERY CARGO",
        remarksEn: "price subject to ETD and cancellation fee: USD600/40HQ and 40HQ LESS THAN 18TONS NO MSDS/BATTERY CARGO",
        notesHe:
          "Gemini (MSK+HPL) — RED-SEA דרך PORT SAID. 7 ימי שהייה חופשיים. אין הצעת 20GP. דמי ביטול 600 USD ל־40HQ (לא נוספו לסה״כ). 40HQ פחות מ־18 טון. אין מטען MSDS/סוללות. המחיר כפוף ל־ETD. הסכום המוצג הוא הובלה בלבד (לא כולל מקומיים). לא צוינה עמלת סוכן. " + CONGESTION_HE,
        rates: []
          .concat(ratesFor("SHANGHAI", BOTH, null, null, 5900, 5900))
          .concat(ratesFor("NINGBO", BOTH, null, null, 6000, 6000))
          .concat(ratesFor("QINGDAO", BOTH, null, null, 6000, 6000))
          .concat(ratesFor("YANTIAN", BOTH, null, null, 6000, 6000))
      },
      {
        id: "cosco",
        carrierId: "cosco",
        carrierName: "COSCO",
        vf: "2026-12-01",
        vt: "2026-12-14",
        dests: BOTH.slice(),
        serviceHe: "COSCO SPOT — RED-SEA דרך PIR",
        serviceEn: "COSCO SPOT (COSCO RED-SEA via PIR)",
        freeDaysHe: "7 ימי שהייה חופשיים",
        basisHe: BASIS_FRT_HE,
        basisShortHe: "הובלה בלבד",
        owsNoteHe: "40HQ פחות מ־18 טון. דמי ביטול 600 USD ל־40HQ. אין מטען MSDS/סוללות.",
        owsNoteEn: "cancellation fee: USD600/40HQ and 40HQ LESS THAN 18TONS NO MSDS/BATTERY CARGO",
        remarksEn: "price subject to ETD and cancellation fee: USD600/40HQ and 40HQ LESS THAN 18TONS NO MSDS/BATTERY CARGO",
        notesHe:
          "COSCO SPOT — RED-SEA דרך PIR. 7 ימי שהייה חופשיים. אין הצעת 20GP. דמי ביטול 600 USD ל־40HQ (לא נוספו לסה״כ). 40HQ פחות מ־18 טון. אין מטען MSDS/סוללות. המחיר כפוף ל־ETD. הסכום המוצג הוא הובלה בלבד (לא כולל מקומיים). לא צוינה עמלת סוכן. " + CONGESTION_HE,
        rates: []
          .concat(ratesFor("YANTIAN", BOTH, null, null, 6500, 6500))
          .concat(ratesFor("SHANGHAI", BOTH, null, null, 6500, 6500))
      }
    ]
  };
})();
