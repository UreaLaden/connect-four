import { mergeStyleSets } from "@fluentui/react";

export const positions = mergeStyleSets({
  A: {
    gridRow: "1/1",
    gridColumn: "1/1",
    animation: "drop-coin 1s eas-in forwards",
    "#row-5-AA": {
      "@keyframes drop-coin": {
        "0%": {
          gridRow: "1/1",
          gridColumn: "1/1",
        },
        "100": {
          gridRow: "-1 / span 1",
          gridColumn: "1 / 1",
        },
      },
    },
    "#row-5-BA": {
      "@keyframes drop-coin": {},
    },
    "#row-5-CA": {
      "@keyframes drop-coin": {},
    },
    "#row-5-DA": {
      "@keyframes drop-coin": {},
    },
    "#row-5-EA": {
      "@keyframes drop-coin": {},
    },
    "#row-5-FA": {
      "@keyframes drop-coin": {},
    },
    "#row-5-GA": {
      "@keyframes drop-coin": {},
    },
  },
  B: {
    gridRow: "1/1",
    gridColumn: "1/1",
    "#row-4-AB": {
      "@keyframes drop-coin": {},
    },
    "#row-4-BB": {
      "@keyframes drop-coin": {},
    },
    "#row-4-CB": {
      "@keyframes drop-coin": {},
    },
    "#row-4-DB": {
      "@keyframes drop-coin": {},
    },
    "#row-4-EB": {
      "@keyframes drop-coin": {},
    },
    "#row-4-FB": {
      "@keyframes drop-coin": {},
    },
    "#row-4-GB": {
      "@keyframes drop-coin": {},
    },
  },
  C: {
    gridRow: "1/1",
    gridColumn: "1/1",
    "#row-3-AC": {
      "@keyframes drop-coin": {},
    },
    "#row-3-BC": {
      "@keyframes drop-coin": {},
    },
    "#row-3-CC": {
      "@keyframes drop-coin": {},
    },
    "#row-3-DC": {
      "@keyframes drop-coin": {},
    },
    "#row-3-EC": {
      "@keyframes drop-coin": {},
    },
    "#row-3-FC": {
      "@keyframes drop-coin": {},
    },
    "#row-3-GC": {
      "@keyframes drop-coin": {},
    },
  },
  D: {
    gridRow: "1/1",
    gridColumn: "1/1",
    "#row-2-AD": {
        "@keyframes drop-coin": {},
      },
    "#row-2-BD": {
        "@keyframes drop-coin": {},
      },
    "#row-2-CD": {
        "@keyframes drop-coin": {},
      },
    "#row-2-DD": {
        "@keyframes drop-coin": {},
      },
    "#row-2-ED": {
        "@keyframes drop-coin": {},
      },
    "#row-2-FD": {
        "@keyframes drop-coin": {},
      },
    "#row-2-GD": {
        "@keyframes drop-coin": {},
      },
  },
  E: {
    gridRow: "1/1",
    gridColumn: "1/1",
    "#row-1-AE": {
        "@keyframes drop-coin": {},
      },
    "#row-1-BE": {
        "@keyframes drop-coin": {},
      },
    "#row-1-CE": {
        "@keyframes drop-coin": {},
      },
    "#row-1-DE": {
        "@keyframes drop-coin": {},
      },
    "#row-1-EE": {
        "@keyframes drop-coin": {},
      },
    "#row-1-FE": {
        "@keyframes drop-coin": {},
      },
    "#row-1-GE": {
        "@keyframes drop-coin": {},
      },
  },
  F: {
    gridRow: "1/1",
    gridColumn: "1/1",
    "#row-0-AF": {
        "@keyframes drop-coin": {},
      },
    "#row-0-BF": {
        "@keyframes drop-coin": {},
      },
    "#row-0-CF": {
        "@keyframes drop-coin": {},
      },
    "#row-0-DF": {
        "@keyframes drop-coin": {},
      },
    "#row-0-EF": {
        "@keyframes drop-coin": {},
      },
    "#row-0-FF": {
        "@keyframes drop-coin": {},
      },
    "#row-0-GF": {
        "@keyframes drop-coin": {},
      },
  },
});
