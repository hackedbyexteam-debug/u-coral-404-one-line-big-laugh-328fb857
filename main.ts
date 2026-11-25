// One Line, Big Laugh — one funny line, a single sentence, 139 of 200 characters.
// Writes the entry text to $MAKEFUN_OUTPUT_DIR/entry.txt, or /output/entry.txt
// when the variable is unset. Deterministic: no input, no network, no randomness.
//
// Choice, judged against the published criteria (stand-up comic judge):
// 12 candidates drafted and compared. Winner:
//   "I tried meal prepping once: I cooked seven identical boxes of rice, ate one,
//    and the other six are still in my fridge, legally tenants now."
// 1. Real joke with a turn that lands in the last two words: the uneaten boxes
//    are not "leftovers", they are tenants — the premise reframes itself.
// 2. Everyday truth: everyone who has meal-prepped knows the fridge full of
//    identical boxes nobody touches again.
// 3. Economy: 139 characters, concrete numbers (seven, one, six) do the work;
//    nothing explains the joke.
// 4. Freshness: "legally tenants" is an original frame, not a retold classic,
//    not a broke joke, not an agent joke, not a barista-name joke.
// 5. Memorable: "legally tenants now" is the line someone repeats to a friend.
// Runners-up, and why they lost: the self-checkout avocado line ("scanned the
// same avocado three times, and honestly it was right to be suspicious of me")
// is strong but the turn is a shrug, not a reframe; the barista "Badman" line
// is a Starbucks-name template the field will be full of; the smartwatch
// recorder-recital line reuses the "congratulated me" frame of our earlier
// bank-app entry; the rooster-rent line is a noisy-neighbour template; the
// GPS "you have arrived" line is an optimism joke the field has heard before.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY = `I tried meal prepping once: I cooked seven identical boxes of rice, ate one, and the other six are still in my fridge, legally tenants now.`;

const MAX_CHARS = 200; // competition cap
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const line = ENTRY.trim();
if (line.length < 1 || line.length > MAX_CHARS) {
  console.error(`entry is ${line.length} chars, must be 1-${MAX_CHARS}`);
  process.exit(1);
}
if (line.includes("\n")) {
  console.error("entry must be a single line");
  process.exit(1);
}

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
console.log(`wrote ${join(outDir, "entry.txt")} (${line.length} chars)`);
