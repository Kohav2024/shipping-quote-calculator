(function () {
  window.AGENT_PACK = window.AGENT_PACK || {};

  var POL = {
    SHEKOU: { originKey: "SHEKOU", originName: "SHEKOU, CN", originHe: "שקו", originEn: "Shekou" },
    NANSHA: { originKey: "NANSHA", originName: "NANSHA, CN", originHe: "ננשה", originEn: "Nansha" },
    SHANGHAI: { originKey: "SHANGHAI", originName: "SHANGHAI, CN", originHe: "שנחאי", originEn: "Shanghai" },
    NINGBO: { originKey: "NINGBO", originName: "NINGBO, CN", originHe: "נינגבו", originEn: "Ningbo" },
    XIAMEN: { originKey: "XIAMEN", originName: "XIAMEN, CN", originHe: "שיאמן", originEn: "Xiamen" },
    QINGDAO: { originKey: "QINGDAO", originName: "QINGDAO, CN", originHe: "צ'ינגדאו", originEn: "Qingdao" },
    TIANJIN: {
      originKey: "TIANJIN",
      originName: "TIANJIN (Xingang), CN",
      originHe: "טיאנג'ין",
      originEn: "Tianjin / Xingang",
      aliases: ["XINGANG", "TIANJIN XINGANG PT", "TIANJIN XINGANG"]
    },
    DALIAN: { originKey: "DALIAN", originName: "DALIAN, CN", originHe: "דאליין", originEn: "Dalian" }
  };
  var BOTH = ["ASHDOD, IL", "HAIFA, IL"];
  var FT14 = "14 ימי שהייה חופשיים";
  var FT21 = "21 ימי שהייה חופשיים";
  var BASIS_FRT_HE = "הובלה בלבד (לא כולל מקומיים)";

  function ratesFlat(polIds, dests, of20, of40gp, of40hq, extra) {
    var out = [];
    (polIds || []).forEach(function (id) {
      var p = POL[id];
      (dests || []).forEach(function (dest) {
        ["DV20", "DV40", "HC40"].forEach(function (typ, i) {
          var of = [of20, of40gp, of40hq][i];
          if (of == null) return;
          out.push(Object.assign({ typ: typ, of: of, dest: dest }, p, extra || {}));
        });
      });
    });
    return out;
  }

  function ratesWithHaifaAddon(polSpecs, base20, base40gp, base40hq, addon20, addon40, addonLabelHe, addonLabelEn) {
    var out = [];
    (polSpecs || []).forEach(function (spec) {
      var p = POL[spec.pol];
      var extra = {};
      if (spec.freeDaysHe) extra.freeDaysHe = spec.freeDaysHe;
      [
        { typ: "DV20", of: base20, addon: addon20 },
        { typ: "DV40", of: base40gp, addon: addon40 },
        { typ: "HC40", of: base40hq, addon: addon40 }
      ].forEach(function (t) {
        out.push(Object.assign({ typ: t.typ, of: t.of, dest: "ASHDOD, IL" }, p, extra));
        out.push(Object.assign({
          typ: t.typ,
          of: t.of,
          dest: "HAIFA, IL",
          addon: t.addon,
          addonLabelHe: addonLabelHe,
          addonLabelEn: addonLabelEn
        }, p, extra));
      });
    });
    return out;
  }

  window.AGENT_PACK["toptrans-2026-11-26"] = {
    versionId: "toptrans-2026-11-26",
    agentId: "toptrans",
    agentName: "TOPTRANS",
    received: "2026-11-26",
    issued: "2026-11-26",
    issuedApprox: true,
    agencyFee: 0,
    originalEn:
      "TOPTRANS email (screenshots). Received 26.11.2026. Issue date approximate (screenshots, no email date shown).\n" +
      "No agency fee was stated in the email.\n\n" +
      "Update below rates, pls check if you have any pending shipments need to arranged?\n\n" +
      "N (carrier column literally says N; no full carrier name written). Valid 2026-11-15 to 2026-11-30.\n" +
      "POD: ASHDOD / HAIFA. Free time: 14 days.\n" +
      "SHEKOU: 20GP 4520 / 40GP 5640 / 40HQ 5640.\n" +
      "NANSHA: 20GP 4520 / 40GP 5640 / 40HQ 5640.\n" +
      "SHANGHAI: 20GP 4620 / 40GP 5740 / 40HQ 5740.\n" +
      "NINGBO: 20GP 4620 / 40GP 5740 / 40HQ 5740.\n" +
      "XIAMEN: 20GP 4620 / 40GP 5740 / 40HQ 5740.\n" +
      "QINGDAO: 20GP 4620 / 40GP 5740 / 40HQ 5740.\n" +
      "TIANJIN (Xingang): 20GP 4620 / 40GP 5740 / 40HQ 5740.\n" +
      "DALIAN: 20GP 4620 / 40GP 5740 / 40HQ 5740.\n" +
      "Remarks: SUBJECT TO OWS 20GP>=23TON.DT RATE; subject to PRS usd 55 per teu ;SCS usd 36 per teu.; only for one container per shipment.\n" +
      "The table freight is 4520/5640 or 4620/5740 by POL. PRS $55/TEU and SCS $36/TEU are stated in the remarks and are not added into that table number.\n\n" +
      "YML. Valid 2026-11-15 to 2026-11-30.\n" +
      "POD: ASHDOD base, and HAIFA via HAIFA ADDON 100/200 (+100 on 20GP, +200 on 40GP/40HQ).\n" +
      "SHEKOU: 20GP 3525 / 40GP 5350 / 40HQ 5350 — 21 days free time.\n" +
      "SHANGHAI: 20GP 3525 / 40GP 5350 / 40HQ 5350 — 14 days free time.\n" +
      "NINGBO: 20GP 3525 / 40GP 5350 / 40HQ 5350 — 21 days free time.\n" +
      "Remarks: only for one container per shipment; OWS USD150/20' >=18tons.; OWS USD350/20' >=22.5 tons; HAIFA ADDON 100/200.\n\n" +
      "ONE. Valid 2026-11-15 to 2026-11-30.\n" +
      "POD: ASHDOD base, and HAIFA via HAIFA ADDON 50/100 (+50 on 20GP, +100 on 40GP/40HQ).\n" +
      "Free time: 14 days (Shekou, Shanghai, Ningbo).\n" +
      "SHEKOU: 20GP 3500 / 40GP 5450 / 40HQ 5450.\n" +
      "SHANGHAI: 20GP 3500 / 40GP 5450 / 40HQ 5450.\n" +
      "NINGBO: 20GP 3500 / 40GP 5450 / 40HQ 5450.\n" +
      "Remarks: >= 14 TONNES + USD 300; >= 18 TONNES + USD 600; HAIFA ADDON 50/100; only for one container per shipment.\n" +
      "The weight surcharges do not state a container size, so they are shown as notes and are not added automatically.",
    offers: [
      {
        id: "unspecified-n",
        carrierId: "unspecified-n",
        carrierName: "N",
        nameHe: "N (חברת ספנות לא צוינה במחירון)",
        vf: "2026-11-15",
        vt: "2026-11-30",
        dests: BOTH.slice(),
        serviceHe: "N (חברת ספנות לא צוינה במחירון)",
        serviceEn: "N (carrier not named in the table)",
        freeDaysHe: FT14,
        basisHe: "הובלה בלבד (לא כולל מקומיים; כפוף ל-PRS 55$/TEU ו-SCS 36$/TEU)",
        basisShortHe: "הובלה בלבד + PRS $55/TEU + SCS $36/TEU",
        extraNoteHe: "+ PRS $55/TEU + SCS $36/TEU (לא כלול בסכום) — לא נוסף לסה״כ. הסכום בטבלה הוא 4,520 / 5,640 או 4,620 / 5,740 לפי הנמל.",
        owsNoteHe: "OWS: 20GP מ־23 טון ומעלה, DT RATE (לא צוין סכום).",
        owsNoteEn: "SUBJECT TO OWS 20GP>=23TON.DT RATE",
        remarksEn: "SUBJECT TO OWS 20GP>=23TON.DT RATE; subject to PRS usd 55 per teu ;SCS usd 36 per teu.; only for one container per shipment.",
        notesHe:
          "עמודה שכותרתה N בלבד — חברת הספנות לא צוינה במחירון, ולכן ההצעה לא שויכה לחברה. " +
          "יעדים: אשדוד וחיפה. 14 ימי שהייה חופשיים. רק מכולה אחת למשלוח. " +
          "OWS: 20GP מ־23 טון ומעלה, DT RATE (לא צוין סכום). " +
          "כפוף ל-PRS 55$/TEU ו-SCS 36$/TEU. הסכום בטבלה הוצג כפי שהוא, בלי להוסיף את PRS/SCS לסה״כ. לא צוינה עמלת סוכן.",
        rates: []
          .concat(ratesFlat(["SHEKOU", "NANSHA"], BOTH, 4520, 5640, 5640, { freeDaysHe: FT14 }))
          .concat(ratesFlat(["SHANGHAI", "NINGBO", "XIAMEN", "QINGDAO", "TIANJIN", "DALIAN"], BOTH, 4620, 5740, 5740, { freeDaysHe: FT14 }))
      },
      {
        id: "yml",
        carrierId: "yml",
        carrierName: "YML",
        nameHe: "YML",
        vf: "2026-11-15",
        vt: "2026-11-30",
        dests: BOTH.slice(),
        serviceHe: "YML",
        serviceEn: "YML",
        basisHe: "הובלה בלבד (לא כולל מקומיים; לחיפה כולל HAIFA ADDON 100/200)",
        basisShortHe: "הובלה בלבד",
        owsTyp: "DV20",
        ows: [
          { minTons: 18, amount: 150, ccy: "USD" },
          { minTons: 22.5, amount: 350, ccy: "USD" }
        ],
        owsNoteHe: "OWS למכולת 20GP בלבד: 150 USD מ־18 טון ומעלה; 350 USD מ־22.5 טון ומעלה.",
        owsNoteEn: "OWS USD150/20' >=18tons. OWS USD350/20' >=22.5 tons",
        remarksEn: "only for one container per shipment; OWS USD150/20' >=18tons.; OWS USD350/20' >=22.5 tons; HAIFA ADDON 100/200.",
        notesHe:
          "YML. תעריף הבסיס הוא לאשדוד. לחיפה יש HAIFA ADDON 100/200 (+100 ל־20GP, +200 ל־40GP/40HQ), והתוספת מפורטת בפירוט. " +
          "ימי השהייה החופשיים לפי נמל: שקו 21 ימים, שנחאי 14 ימים, נינגבו 21 ימים. " +
          "רק מכולה אחת למשלוח. OWS למכולת 20GP בלבד: 150 USD מ־18 טון ומעלה; 350 USD מ־22.5 טון ומעלה. " +
          "הסכום המוצג הוא הובלה בלבד (לא כולל מקומיים; לחיפה כולל ה-ADDON). לא צוינה עמלת סוכן.",
        rates: ratesWithHaifaAddon(
          [
            { pol: "SHEKOU", freeDaysHe: FT21 },
            { pol: "SHANGHAI", freeDaysHe: FT14 },
            { pol: "NINGBO", freeDaysHe: FT21 }
          ],
          3525, 5350, 5350, 100, 200,
          "HAIFA ADDON",
          "HAIFA ADDON 100/200"
        )
      },
      {
        id: "one",
        carrierId: "one",
        carrierName: "ONE",
        nameHe: "ONE",
        vf: "2026-11-15",
        vt: "2026-11-30",
        dests: BOTH.slice(),
        serviceHe: "ONE",
        serviceEn: "ONE",
        freeDaysHe: FT14,
        basisHe: "הובלה בלבד (לא כולל מקומיים; לחיפה כולל HAIFA ADDON 50/100)",
        basisShortHe: "הובלה בלבד",
        owsNoteHe: "תוספת משקל (לא צוין סוג מכולה, ולכן לא נוספה לסה״כ): מ־14 טון ומעלה +300 USD; מ־18 טון ומעלה +600 USD.",
        owsNoteEn: ">= 14 TONNES + USD 300; >= 18 TONNES + USD 600",
        remarksEn: ">= 14 TONNES + USD 300; >= 18 TONNES + USD 600; HAIFA ADDON 50/100; only for one container per shipment.",
        notesHe:
          "ONE. תעריף הבסיס הוא לאשדוד. לחיפה יש HAIFA ADDON 50/100 (+50 ל־20GP, +100 ל־40GP/40HQ), והתוספת מפורטת בפירוט. " +
          "14 ימי שהייה חופשיים בכל הנמלים. רק מכולה אחת למשלוח. " +
          "תוספת משקל צוינה בלי סוג מכולה (>= 14 TONNES + USD 300; >= 18 TONNES + USD 600) ולכן מוצגת כהערה ולא נוספה לסה״כ. " +
          "הסכום המוצג הוא הובלה בלבד (לא כולל מקומיים; לחיפה כולל ה-ADDON). לא צוינה עמלת סוכן.",
        rates: ratesWithHaifaAddon(
          [
            { pol: "SHEKOU", freeDaysHe: FT14 },
            { pol: "SHANGHAI", freeDaysHe: FT14 },
            { pol: "NINGBO", freeDaysHe: FT14 }
          ],
          3500, 5450, 5450, 50, 100,
          "HAIFA ADDON",
          "HAIFA ADDON 50/100"
        )
      }
    ]
  };
})();
