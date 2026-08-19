"use client";

import { useState } from "react";

/**
 * Chandelier sizing calculator.
 *
 * The diameter and drop rules are the long-standing industry conventions
 * (diameter in inches ≈ room length + width in feet; 2.5–3 in of fixture
 * height per foot of ceiling). What isn't standard anywhere else is the
 * Indian layer underneath: a ceiling-fan sweep check and a false-ceiling
 * load warning, which is where most rooms here actually go wrong.
 *
 * Everything runs client-side — no network calls, no data leaves the page.
 */

const M_TO_FT = 3.28084;
const CM_TO_IN = 0.393701;

/** Fan blade sweeps sold in India, by nominal size. */
const FAN_SWEEPS = [
  { label: "No ceiling fan in this room", mm: 0 },
  { label: "900 mm / 36 in sweep", mm: 900 },
  { label: "1200 mm / 48 in sweep (most common)", mm: 1200 },
  { label: "1400 mm / 56 in sweep", mm: 1400 },
];

function round(n: number, to = 5) {
  return Math.round(n / to) * to;
}

export function ChandelierCalculator() {
  const [length, setLength] = useState("4.5");
  const [width, setWidth] = useState("3.6");
  const [ceiling, setCeiling] = useState("3.0");
  const [overTable, setOverTable] = useState(false);
  const [tableWidth, setTableWidth] = useState("1.0");
  const [fanMm, setFanMm] = useState(1200);

  const L = parseFloat(length) || 0;
  const W = parseFloat(width) || 0;
  const H = parseFloat(ceiling) || 0;
  const TW = parseFloat(tableWidth) || 0;

  const ready = L > 0 && W > 0 && H > 0;

  // Diameter. Over a dining table the table governs, not the room —
  // roughly half to two-thirds of the table's width.
  const roomDiaCm = (L + W) * 10;
  const tableDiaMinCm = TW * 100 * 0.5;
  const tableDiaMaxCm = TW * 100 * 0.667;
  const diaMinCm = overTable ? tableDiaMinCm : roomDiaCm * 0.9;
  const diaMaxCm = overTable ? tableDiaMaxCm : roomDiaCm * 1.1;

  // Fixture height: 2.5–3 in per foot of ceiling height.
  const ceilingFt = H * M_TO_FT;
  const dropMinCm = (ceilingFt * 2.5) / CM_TO_IN / 10;
  const dropMaxCm = (ceilingFt * 3) / CM_TO_IN / 10;

  // Bottom-of-fixture height above floor. Over a table it's measured from
  // the tabletop (75–90 cm above it, table assumed 75 cm high); otherwise
  // it must clear head height in a walkable room.
  const bottomMin = overTable ? 0.75 + 0.75 : 2.1;
  const bottomMax = overTable ? 0.75 + 0.9 : Math.max(2.4, H - dropMinCm / 100);

  // Fan check: keep the fixture's edge clear of the blade circle by 600 mm.
  const fanRadiusM = fanMm / 2000;
  const clearanceM = ready ? fanRadiusM + 0.6 + diaMaxCm / 200 : 0;

  const tooTall = ready && bottomMin + dropMaxCm / 100 > H;

  return (
    <div className="form-card">
      <div className="form-grid">
        <div className="field">
          <label htmlFor="calc-l">Room length (m)</label>
          <input id="calc-l" type="number" min="1" step="0.1" value={length} onChange={(e) => setLength(e.target.value)} />
        </div>
        <div className="field">
          <label htmlFor="calc-w">Room width (m)</label>
          <input id="calc-w" type="number" min="1" step="0.1" value={width} onChange={(e) => setWidth(e.target.value)} />
        </div>
        <div className="field">
          <label htmlFor="calc-h">Floor to ceiling (m)</label>
          <input id="calc-h" type="number" min="2" step="0.1" value={ceiling} onChange={(e) => setCeiling(e.target.value)} />
        </div>
        <div className="field">
          <label htmlFor="calc-fan">Ceiling fan</label>
          <select id="calc-fan" value={fanMm} onChange={(e) => setFanMm(Number(e.target.value))}>
            {FAN_SWEEPS.map((f) => (
              <option key={f.mm} value={f.mm}>{f.label}</option>
            ))}
          </select>
        </div>
        <div className="field full">
          <label htmlFor="calc-table">Hanging over a dining table?</label>
          <select
            id="calc-table"
            value={overTable ? "yes" : "no"}
            onChange={(e) => setOverTable(e.target.value === "yes")}
          >
            <option value="no">No — open room, centre of ceiling</option>
            <option value="yes">Yes — over a dining table</option>
          </select>
        </div>
        {overTable && (
          <div className="field full">
            <label htmlFor="calc-tw">Table width, the shorter side (m)</label>
            <input id="calc-tw" type="number" min="0.5" step="0.1" value={tableWidth} onChange={(e) => setTableWidth(e.target.value)} />
          </div>
        )}
      </div>

      {ready && (
        <div className="calc-out">
          <div className="calc-row">
            <span className="calc-k">Fixture diameter</span>
            <span className="calc-v">{round(diaMinCm)}–{round(diaMaxCm)} cm</span>
            <span className="calc-note">
              {overTable
                ? "Sized to the table, not the room — half to two-thirds of the table's short side, so nobody knocks their head reaching across."
                : "From the room proportion rule: length plus width in feet, read as inches of diameter."}
            </span>
          </div>

          <div className="calc-row">
            <span className="calc-k">Fixture height (drop)</span>
            <span className="calc-v">{round(dropMinCm)}–{round(dropMaxCm)} cm</span>
            <span className="calc-note">
              About 2.5 to 3 inches of fixture height for every foot of ceiling. Cascades built for a
              double-height void are the exception and are sized to the actual vertical drop instead.
            </span>
          </div>

          <div className="calc-row">
            <span className="calc-k">Bottom above floor</span>
            <span className="calc-v">{bottomMin.toFixed(2)}–{bottomMax.toFixed(2)} m</span>
            <span className="calc-note">
              {overTable
                ? "Measured to the tabletop: 75–90 cm of clearance keeps sightlines across the table open."
                : "2.1 m is the minimum head clearance anywhere people walk. Higher if the room is a thoroughfare."}
            </span>
          </div>

          {fanMm > 0 && (
            <div className="calc-flag">
              <strong>Ceiling fan clearance.</strong> With a {fanMm} mm sweep, keep the chandelier&rsquo;s
              centre at least <strong>{clearanceM.toFixed(2)} m</strong> from the fan&rsquo;s centre —
              the blade radius, plus 600 mm, plus the fixture&rsquo;s own radius. Sharing one ceiling point
              between a fan and a chandelier almost never works: moving air swings crystal and glass drops,
              and a fan regulator is not a dimmer, so the two need separate circuits.
            </div>
          )}

          {tooTall && (
            <div className="calc-flag">
              <strong>Not enough height.</strong> At {H.toFixed(1)} m there isn&rsquo;t room for a fixture
              of that drop above the minimum clearance. Either choose a flush or semi-flush piece, or move
              the fixture over a table or stairwell where the clearance rule changes.
            </div>
          )}

          <div className="calc-flag">
            <strong>Before you order, check what&rsquo;s holding it.</strong> A gypsum or POP false ceiling
            cannot carry a chandelier on its own. Anything past a few kilograms has to be anchored into the
            RCC slab above, and that anchor has to be placed <em>before</em> the false ceiling closes.
          </div>
        </div>
      )}
    </div>
  );
}
