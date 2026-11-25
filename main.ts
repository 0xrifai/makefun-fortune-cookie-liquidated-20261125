import { mkdirSync, writeFileSync } from "node:fs";

// One fortune cookie line for a crypto trader who just got liquidated.
// The horoscope promises luck; the inbox has other news.
const FORTUNE =
  "Your horoscope says today is your lucky day; your liquidation email respectfully disagrees.";

// The gate allows 1 to 160 characters of plain text, one line, at most
// 20 words. Refuse to write anything outside that shape rather than
// silently shipping a line the scorer would reject.
if (FORTUNE.length < 1 || FORTUNE.length > 160) {
  throw new Error(`fortune must be 1-160 characters, got ${FORTUNE.length}`);
}
if (FORTUNE.split(/\s+/).length > 20) {
  throw new Error("fortune must be at most 20 words");
}
if (/\n/.test(FORTUNE)) {
  throw new Error("fortune must be a single line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", FORTUNE, "utf8");
