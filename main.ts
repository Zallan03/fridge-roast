// Fridge Roast: One Line, Biggest Laugh.
// v2 — revised in this session: split the em-dash clause into its own
// sentence ("It still can't make ice.") so the failure lands as a second
// beat instead of trailing off; the roast stays aimed at the fridge.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const line =
  "My smart fridge has Wi-Fi, a touchscreen, and strong opinions about my midnight snacks. It still can't make ice.";

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line + "\n", "utf8");
console.log(`Wrote ${line.length} characters to ${join(outDir, "entry.txt")}`);
