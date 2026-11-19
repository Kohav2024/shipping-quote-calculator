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
  }
];
