(function () {
  window.AGENT_PACK = window.AGENT_PACK || {};

  var POL = {
    SHENZHEN: { originKey: "SHENZHEN", originName: "SHENZHEN, CN", originHe: "שנג'ן", originEn: "Shenzhen" },
    NINGBO: { originKey: "NINGBO", originName: "NINGBO, CN", originHe: "נינגבו", originEn: "Ningbo" },
    SHANGHAI: { originKey: "SHANGHAI", originName: "SHANGHAI, CN", originHe: "שנחאי", originEn: "Shanghai" },
    QINGDAO: { originKey: "QINGDAO", originName: "QINGDAO, CN", originHe: "צ'ינגדאו", originEn: "Qingdao" },
    XIAMEN: { originKey: "XIAMEN", originName: "XIAMEN, CN", originHe: "שיאמן", originEn: "Xiamen" },
    TIANJIN: {
      originKey: "TIANJIN",
      originName: "XINGANG / TIANJIN, CN",
      originHe: "טיאנג'ין / שינגאנג",
      originEn: "Xingang / Tianjin",
      aliases: ["XINGANG", "TIANJIN XINGANG PT", "TIANJIN XINGANG"]
    },
    DALIAN: { originKey: "DALIAN", originName: "DALIAN, CN", originHe: "דאליין", originEn: "Dalian" }
  };
  var BOTH = ["ASHDOD, IL", "HAIFA, IL"];
  var ASHDOD = ["ASHDOD, IL"];

  function ratesFor(polIds, dests, of20, of40gp, of40hq) {
    var out = [];
    (polIds || []).forEach(function (id) {
      var p = POL[id];
      (dests || []).forEach(function (dest) {
        function add(typ, of) {
          if (of == null) return;
          out.push(Object.assign({ typ: typ, of: of, dest: dest }, p));
        }
        add("DV20", of20);
        add("DV40", of40gp);
        add("HC40", of40hq);
      });
    });
    return out;
  }

  var BASIS_FRT_HE = "הובלה בלבד (לא כולל מקומיים)";
  var GENERAL_HE =
    "הערות כלליות מהסוכן: (1) הקצאת המקום אצל כל החברות תישאר הדוקה כמו בנובמבר. " +
    "(2) YML פרסמה שערי ספוט, אך המקום אינו מובטח, ולכל נמל מצב מקום שונה — יש לבדוק מול הסוכן בכל מקרה. " +
    "(3) MSK עדיין sold out כרגע; הסוכן יודיע כשיהיו מקום ומחיר. " +
    "(4) מכולת 20GP כבדה אינה מועדפת אצל כל החברות — יש לבדוק מול הסוכן בכל פנייה כזו.";

  window.AGENT_PACK["unitex-2026-11-26"] = {
    versionId: "unitex-2026-11-26",
    agentId: "unitex",
    agentName: "UNITEX",
    received: "2026-11-26",
    issued: "2026-11-26",
    issuedApprox: true,
    agencyFee: 0,
    notesHe: GENERAL_HE,
    originalEn:
      "UNITEX email (screenshot). Received 26.11.2026. Issue date approximate (screenshot, no email date shown).\n" +
      "No agency fee was stated in the email.\n\n" +
      "I would like to update our latest fresh rates for 1st half of DEC as attached fyi .\n" +
      "1 - Space allocation with all carriers will remain tight as Nov.\n" +
      "2 - YML released spot rates to us but space is not guaranteed, and different port has different space status ,pls check with our PIC case by case .\n" +
      "3 - MSK remains sold out at the moment. We will inform you promptly once space and rate are available.\n" +
      "4 - 20GP heavy container is not preferred by all carriers ,pls check with us case by case if have such inquiry .\n\n" +
      "YML < Spot > Light Cargo. Valid 2026-12-01 to 2026-12-15 (1/Dec - 15/Dec).\n" +
      "POD: ASHDOD ONLY.\n" +
      "POL: Shenzhen, Ningbo, Shanghai, Qingdao — 20GP 4950 / 40GP 6400 / 40HQ 6400.\n" +
      "Remarks: (1) 21 free days of detention. (2) GW include Tare < 9Tons/Teu. (3) No restriction for volume now. (highlighted red in sheet).\n\n" +
      "YML <FAK>. Valid 2026-12-01 to 2026-12-15 (1/Dec - 15/Dec).\n" +
      "POD: ASHDOD ONLY.\n" +
      "POL: Shenzhen, Ningbo, Shanghai, Qingdao — 20GP 5000 / 40GP 6500 / 40HQ 6500.\n" +
      "Remarks: (1) 17 free days of detention. (2) No PE & IS & subject to OWS.\n\n" +
      "FAK (column titled only FAK; no carrier name written in the table).\n" +
      "Valid 2026-12-01 to 2026-12-14 (1/Dec - 14/Dec).\n" +
      "POD: ASHDOD / HAIFA.\n" +
      "POL: Shenzhen, Ningbo, Shanghai, Qingdao, Xiamen, Xingang, Dalian — 20GP 5191 / 40GP 6682 / 40HQ 6682.\n" +
      "Remarks: (1) 12-18 free days of detention. (2) Subject to CLS $20/Teu, include PRS/SCS. (3) Subject to OWS & one CNTR one MBL (highlighted red in sheet).\n" +
      "The table freight is 5191 / 6682 / 6682. CLS $20/TEU is stated in the remarks and is not added into that table number.\n\n" +
      "ONE. Valid 2026-12-01 to 2026-12-15 (1/Dec - 15/Dec).\n" +
      "POD: ASHDOD ONLY.\n" +
      "POL: Shenzhen, Ningbo, Shanghai, Qingdao — 20GP 4690 / 40GP 6700 / 40HQ 6700.\n" +
      "Remarks: (1) 14 ~ 21 free days of detention. (2) Subject to OWS.\n\n" +
      "ZIM. Valid 2026-12-01 to 2026-12-14 (1/Dec - 14/Dec).\n" +
      "POD: table header Haifa; Remark (2) Ashdod - same as Haifa. Rates apply to HAIFA and ASHDOD.\n" +
      "POL: Shenzhen, Ningbo, Shanghai — 20GP 4835 / 40GP 6820 / 40HQ 6820.\n" +
      "Remarks: (1) 14 free days & subject to OWS. (2) Ashdod - same as Haifa.",
    offers: [
      {
        id: "yml-spot-light",
        carrierId: "yml",
        carrierName: "YML",
        nameHe: "YML Spot Light Cargo",
        vf: "2026-12-01",
        vt: "2026-12-15",
        dests: ASHDOD.slice(),
        serviceHe: "YML < Spot > Light Cargo",
        serviceEn: "YML < Spot > Light Cargo",
        freeDaysHe: "21 ימי שהייה חופשיים (detention)",
        weightLimitHe: "Light Cargo: משקל ברוטו כולל טרה < 9 טון/TEU",
        basisHe: BASIS_FRT_HE,
        basisShortHe: "הובלה בלבד",
        remarksEn: "(1) 21 free days of detention. (2) GW include Tare < 9Tons/Teu. (3) No restriction for volume now.",
        notesHe:
          "YML < Spot > Light Cargo. יעד אשדוד בלבד. 21 ימי שהייה חופשיים (detention). " +
          "משקל ברוטו כולל טרה (GW include Tare) < 9 טון/TEU. " +
          "אין כרגע הגבלת נפח (מודגש באדום בגיליון). המקום אינו מובטח — יש לבדוק מול הסוכן לכל נמל. " +
          "הסכום המוצג הוא הובלה בלבד (לא כולל מקומיים). לא צוינה עמלת סוכן.",
        rates: ratesFor(["SHENZHEN", "NINGBO", "SHANGHAI", "QINGDAO"], ASHDOD, 4950, 6400, 6400)
      },
      {
        id: "yml-fak",
        carrierId: "yml",
        carrierName: "YML",
        nameHe: "YML FAK",
        vf: "2026-12-01",
        vt: "2026-12-15",
        dests: ASHDOD.slice(),
        serviceHe: "YML <FAK>",
        serviceEn: "YML <FAK>",
        freeDaysHe: "17 ימי שהייה חופשיים (detention)",
        basisHe: BASIS_FRT_HE,
        basisShortHe: "הובלה בלבד",
        owsNoteHe: "כפוף ל-OWS. No PE & IS.",
        owsNoteEn: "No PE & IS & subject to OWS.",
        remarksEn: "(1) 17 free days of detention. (2) No PE & IS & subject to OWS.",
        notesHe:
          "YML <FAK>. יעד אשדוד בלבד. 17 ימי שהייה חופשיים (detention). No PE & IS, וכפוף ל-OWS (לא צוין סכום). " +
          "הסכום המוצג הוא הובלה בלבד (לא כולל מקומיים). לא צוינה עמלת סוכן.",
        rates: ratesFor(["SHENZHEN", "NINGBO", "SHANGHAI", "QINGDAO"], ASHDOD, 5000, 6500, 6500)
      },
      {
        id: "unspecified-fak",
        carrierId: "unspecified-fak",
        carrierName: "FAK",
        nameHe: "FAK (חברת ספנות לא צוינה במחירון)",
        vf: "2026-12-01",
        vt: "2026-12-14",
        dests: BOTH.slice(),
        serviceHe: "FAK (חברת ספנות לא צוינה במחירון)",
        serviceEn: "FAK (carrier not named in the table)",
        freeDaysHe: "12–18 ימי שהייה חופשיים (detention)",
        basisHe: "הובלה בלבד (לא כולל מקומיים; כפוף ל-CLS 20$/TEU, כולל PRS/SCS)",
        basisShortHe: "הובלה בלבד + CLS $20/TEU",
        extraNoteHe: "+ CLS $20/TEU (כולל PRS/SCS, לא כולל שאר מקומיים) — לא נוסף לסה״כ. הסכום בטבלה הוא 5,191 / 6,682 / 6,682.",
        owsNoteHe: "כפוף ל-OWS. מכולה אחת ל־MBL אחד (one CNTR one MBL, מודגש באדום בגיליון).",
        owsNoteEn: "Subject to OWS & one CNTR one MBL.",
        remarksEn: "(1) 12-18 free days of detention. (2) Subject to CLS $20/Teu, include PRS/SCS. (3) Subject to OWS & one CNTR one MBL.",
        notesHe:
          "עמודה שכותרתה FAK בלבד — חברת הספנות לא צוינה במחירון, ולכן ההצעה לא שויכה לחברה. " +
          "יעדים: אשדוד וחיפה. 12–18 ימי שהייה חופשיים (detention). " +
          "כפוף ל-CLS 20$/TEU, כולל PRS/SCS. הסכום בטבלה (5,191 / 6,682 / 6,682) הוצג כפי שהוא, בלי להוסיף את ה-CLS לסה״כ. " +
          "כפוף ל-OWS, ומכולה אחת ל־MBL אחד (מודגש באדום בגיליון). לא צוינה עמלת סוכן.",
        rates: ratesFor(
          ["SHENZHEN", "NINGBO", "SHANGHAI", "QINGDAO", "XIAMEN", "TIANJIN", "DALIAN"],
          BOTH,
          5191,
          6682,
          6682
        )
      },
      {
        id: "one",
        carrierId: "one",
        carrierName: "ONE",
        nameHe: "ONE",
        vf: "2026-12-01",
        vt: "2026-12-15",
        dests: ASHDOD.slice(),
        serviceHe: "ONE",
        serviceEn: "ONE",
        freeDaysHe: "14–21 ימי שהייה חופשיים (detention)",
        basisHe: BASIS_FRT_HE,
        basisShortHe: "הובלה בלבד",
        owsNoteHe: "כפוף ל-OWS (לא צוין סכום).",
        owsNoteEn: "Subject to OWS",
        remarksEn: "(1) 14 ~ 21 free days of detention. (2) Subject to OWS.",
        notesHe:
          "ONE. יעד אשדוד בלבד. 14–21 ימי שהייה חופשיים (detention). כפוף ל-OWS (לא צוין סכום). " +
          "הסכום המוצג הוא הובלה בלבד (לא כולל מקומיים). לא צוינה עמלת סוכן.",
        rates: ratesFor(["SHENZHEN", "NINGBO", "SHANGHAI", "QINGDAO"], ASHDOD, 4690, 6700, 6700)
      },
      {
        id: "zim",
        carrierId: "zim",
        carrierName: "ZIM",
        nameHe: "ZIM",
        vf: "2026-12-01",
        vt: "2026-12-14",
        dests: BOTH.slice(),
        serviceHe: "ZIM",
        serviceEn: "ZIM",
        freeDaysHe: "14 ימי שהייה חופשיים",
        basisHe: BASIS_FRT_HE,
        basisShortHe: "הובלה בלבד",
        owsNoteHe: "כפוף ל-OWS (לא צוין סכום).",
        owsNoteEn: "14 free days & subject to OWS.",
        remarksEn: "(1) 14 free days & subject to OWS. (2) Ashdod - same as Haifa.",
        notesHe:
          "ZIM. בכותרת הטבלה צוין יעד חיפה, ובהערה (2) נכתב Ashdod - same as Haifa — לכן התעריף זהה לאשדוד ולחיפה. " +
          "14 ימי שהייה חופשיים, וכפוף ל-OWS (לא צוין סכום). " +
          "הסכום המוצג הוא הובלה בלבד (לא כולל מקומיים). לא צוינה עמלת סוכן.",
        rates: ratesFor(["SHENZHEN", "NINGBO", "SHANGHAI"], BOTH, 4835, 6820, 6820)
      }
    ]
  };
})();
