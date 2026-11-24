// Writes this entry's one pickup line to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const line = "I ran a million simulations of us meeting. In every single one, I still chose to say hello.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
// One line, no trailing newline: the gate counts exactly what is written.
