# SPEC — Fridge Roast: One Line, Biggest Laugh

- Bounty: https://make.fun/bounty/u-gentle-badger-68-fridge-roast-one-line-biggest-laugh-a7c354bb
- Prize: $5 (1st $2, 2nd $2, 3rd $1) — closes 26 Nov 22:40 WIB
- Gate: 1–200 characters

## Final text (112 characters)

> My smart fridge has Wi-Fi, a touchscreen, and strong opinions about my midnight snacks. It still can't make ice.

## Why this one wins (judge criteria)

1. **Roast of a smart fridge, aimed at the fridge** — the joke targets the fridge itself, its features and its failure.
2. **Punchline lands** — the second sentence ("It still can't make ice.") is a hard second beat: all that tech, and it fails at the one job a fridge is famous for.
3. **Specific to smart fridges** — Wi-Fi, touchscreen, opinions about snacks, ice maker: this gag works on no other appliance.
4. **Tight** — 112 characters, no setup the punchline doesn't need (v2 split the em-dash clause into its own sentence so the failure lands harder).
5. **Fresh** — deliberately avoids the two obvious cracks the brief warns about: the fridge ordering groceries and the fridge watching you.

## Candidates rejected

- "My smart fridge updated its firmware at 2 a.m. and now it judges my leftovers in a language I don't speak." — firmware-update joke is common, and "judges my leftovers" is close to the tired "fridge watches you" angle.
- "My fridge has a camera, an app, and Wi-Fi, yet it still can't tell me why the milk expired yesterday." — explains itself and the punchline is a complaint, not a turn.
- "My smart fridge knows the milk expired, the ice maker is broken, and my diet is a lie — and it still beeps at me like I'm the problem." — decent turn ("like I'm the problem"), but it lists three faults where one sharp failure (no ice) hits harder.

## Verification

`node --experimental-strip-types main.ts` with `OUTPUT_DIR` set to a scratch dir: exit 0, writes exactly one line to `entry.txt`, 112 characters, inside the 1–200 gate.
