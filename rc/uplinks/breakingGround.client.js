// ../../mod/GonogoBreakingGroundUplink/client/src/DeployedScience/index.tsx
import {
  registerComponent,
  stillTrue,
  useTelemetry
} from "@ksp-gonogo/sitrep-sdk";
import { EmptyState, Panel, Section } from "@ksp-gonogo/ui-kit";

// ../../mod/GonogoBreakingGroundUplink/client/src/uplink.ts
import { defineUplinkClient } from "@ksp-gonogo/sitrep-sdk";
var UPLINK_VERSION = "0.0.1";
var BREAKING_GROUND = defineUplinkClient({
  id: "breakingGround",
  version: UPLINK_VERSION,
  name: "Breaking Ground",
  description: "Drives Breaking Ground robotic joints and rotors from the console, and reports deployed surface bases on every body while you fly something else."
});

// ../../mod/GonogoBreakingGroundUplink/client/src/DeployedScience/DeployedBaseCard.tsx
import { AugmentSlot, combineReadings, value } from "@ksp-gonogo/sitrep-sdk";
import {
  Badge,
  Box,
  Cluster,
  Meter,
  Stack,
  Text,
  Unit
} from "@ksp-gonogo/ui-kit";

// ../../mod/GonogoBreakingGroundUplink/client/src/DeployedScience/power.ts
function powerState(base) {
  if (base.powered === null) return "unknown";
  return base.powered ? "powered" : "unpowered";
}
var POWER_LABEL = {
  powered: "Powered",
  unpowered: "Unpowered",
  unknown: "Power unknown"
};
var POWER_TONE = {
  powered: "go",
  unpowered: "nogo",
  // Neutral, not `nogo`: a red pill is a verdict, and there is none here.
  unknown: "neutral"
};
function powerBalance(base) {
  const { powerAvailable, powerRequired } = base;
  if (powerAvailable === null || powerRequired === null) return null;
  return `Power ${Math.round(powerAvailable)}/${Math.round(powerRequired)}`;
}

// ../../mod/GonogoBreakingGroundUplink/client/src/DeployedScience/DeployedBaseCard.tsx
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
var XS2_STYLE = { fontSize: "var(--font-size-caption)" };
function progressPercentReading(source, fraction) {
  return combineReadings([source], () => value("%", fraction * 100));
}
function progressRatioReading(source, fraction) {
  return combineReadings([source], () => value("ratio", fraction));
}
function DeployedBaseCard({
  base,
  basesReading
}) {
  const state = powerState(base);
  return /* @__PURE__ */ jsx(
    Box,
    {
      bordered: true,
      radius: "regular",
      style: {
        padding: "var(--inset-surface)",
        borderColor: "var(--color-surface-raised)"
      },
      children: /* @__PURE__ */ jsxs(Stack, { children: [
        /* @__PURE__ */ jsxs(Cluster, { style: { gap: "var(--gap-related)" }, children: [
          /* @__PURE__ */ jsx(Text, { size: "sm", style: { fontWeight: 600 }, children: base.body || "Surface base" }),
          /* @__PURE__ */ jsx(Badge, { tone: POWER_TONE[state], "data-tone": POWER_TONE[state], live: true, children: POWER_LABEL[state] })
        ] }),
        /* @__PURE__ */ jsxs(Text, { level: "muted", style: XS2_STYLE, children: [
          powerBalance(base) ?? "Power unknown",
          base.experiments.length > 0 && /* @__PURE__ */ jsxs(Text, { level: "faint", style: XS2_STYLE, children: [
            " ",
            "\xB7 ",
            base.experiments.length,
            " exp"
          ] })
        ] }),
        base.experiments.map((exp) => /* @__PURE__ */ jsxs(Stack, { children: [
          /* @__PURE__ */ jsx(
            Meter,
            {
              label: exp.name,
              tone: "go",
              value: exp.progress === null ? null : progressRatioReading(basesReading, exp.progress),
              valueLabelNode: exp.progress === null ? void 0 : /* @__PURE__ */ jsxs(Fragment, { children: [
                /* @__PURE__ */ jsx(
                  Unit,
                  {
                    value: progressPercentReading(basesReading, exp.progress),
                    decimals: 0
                  }
                ),
                exp.collecting === true && /* @__PURE__ */ jsxs(Text, { tone: "go", style: XS2_STYLE, "aria-hidden": "true", children: [
                  " ",
                  "\u25CF"
                ] })
              ] })
            }
          ),
          /* @__PURE__ */ jsx(
            AugmentSlot,
            {
              name: "deployed-science.experiment",
              props: { experiment: exp, body: base.body, held: basesReading }
            }
          )
        ] }, `${base.id}-${exp.partId}`))
      ] })
    }
  );
}

// ../../mod/GonogoBreakingGroundUplink/client/src/DeployedScience/parseBases.ts
import { DeployedPowerState } from "@ksp-gonogo/sitrep-sdk";

// ../../mod/GonogoBreakingGroundUplink/client/src/wire.ts
import { magnitudeOf } from "@ksp-gonogo/ui-kit";
function numOrNull(v) {
  if (typeof v === "number") return magnitudeOf(v);
  if (typeof v === "object" && v !== null && "magnitude" in v) {
    const { magnitude } = v;
    return typeof magnitude === "number" ? magnitudeOf({ magnitude }) : null;
  }
  return null;
}
function boolOrNull(v) {
  return typeof v === "boolean" ? v : null;
}

// ../../mod/GonogoBreakingGroundUplink/client/src/DeployedScience/parseBases.ts
var clamp01 = (v) => Math.max(0, Math.min(1, v));
var clamp01OrNull = (v) => v === null ? null : clamp01(v);
function parseFlatDeployedEntry(entry) {
  if (!entry || typeof entry !== "object" || Array.isArray(entry)) return null;
  const e = entry;
  if (typeof e.vesselName !== "string" || !e.vesselName) return null;
  return {
    vesselName: e.vesselName,
    partName: typeof e.partName === "string" ? e.partName : null,
    body: typeof e.body === "string" ? e.body : null,
    experimentId: typeof e.experimentId === "string" ? e.experimentId : null,
    scienceCompletedPercentage: numOrNull(e.scienceCompletedPercentage),
    scienceTransmittedPercentage: numOrNull(e.scienceTransmittedPercentage),
    scienceValue: numOrNull(e.scienceValue),
    scienceLimit: numOrNull(e.scienceLimit),
    powerState: typeof e.powerState === "string" ? e.powerState : null,
    connectionState: typeof e.connectionState === "string" ? e.connectionState : null,
    power: typeof e.power === "number" ? e.power : null,
    controllerConnected: typeof e.controllerConnected === "boolean" ? e.controllerConnected : null,
    powerAvailable: numOrNull(e.powerAvailable),
    powerRequired: numOrNull(e.powerRequired)
  };
}
function poweredFromState(power) {
  if (power === null || power === void 0) return null;
  return power === DeployedPowerState.Powered;
}
function experimentFrom(e, index, vesselName) {
  const progress = clamp01OrNull(
    e.scienceCompletedPercentage === null ? null : e.scienceCompletedPercentage / 100
  );
  const transmittedShare = clamp01OrNull(
    e.scienceTransmittedPercentage === null ? null : e.scienceTransmittedPercentage / 100
  );
  const transmitted = e.scienceValue === null || transmittedShare === null ? null : e.scienceValue * transmittedShare;
  return {
    partId: index,
    id: e.experimentId ?? `${vesselName}-${index}`,
    name: e.partName || e.experimentId || "Experiment",
    total: e.scienceValue,
    limit: e.scienceLimit,
    progress,
    stored: e.scienceValue === null || transmitted === null ? null : Math.max(0, e.scienceValue - transmitted),
    transmitted,
    collecting: e.scienceCompletedPercentage === null ? null : e.scienceCompletedPercentage < 100
  };
}
function parseBases(raw) {
  if (!Array.isArray(raw)) return null;
  const entries = raw;
  const order = [];
  const groups = /* @__PURE__ */ new Map();
  for (const rawEntry of entries) {
    const entry = parseFlatDeployedEntry(rawEntry);
    if (!entry) continue;
    let list = groups.get(entry.vesselName);
    if (!list) {
      list = [];
      groups.set(entry.vesselName, list);
      order.push(entry.vesselName);
    }
    list.push(entry);
  }
  return order.map((vesselName, baseIndex) => {
    const group = groups.get(vesselName) ?? [];
    const first = group[0];
    const experiments = group.map((e, i) => experimentFrom(e, i, vesselName));
    return {
      id: baseIndex,
      body: first?.body ?? "",
      powered: poweredFromState(first?.power),
      powerAvailable: first?.powerAvailable ?? null,
      powerRequired: first?.powerRequired ?? null,
      // The derived boolean, never the localised `connectionState` prose.
      controllerEnabled: first?.controllerConnected ?? false,
      experimentCount: experiments.length,
      experiments
    };
  });
}

// ../../mod/GonogoBreakingGroundUplink/client/src/DeployedScience/index.tsx
import { jsx as jsx2 } from "react/jsx-runtime";
function emptySentence(available, bases) {
  if (available === false) return "Breaking Ground not installed";
  if (bases === null) return "Waiting for the deployed-base roster";
  return "No deployed bases";
}
function DeployedScienceComponent(_) {
  const basesReading = useTelemetry("deployed.bases");
  const available = stillTrue(
    useTelemetry("game.dlc"),
    void 0
  )?.breakingGround;
  const bases = parseBases(stillTrue(basesReading, void 0));
  if (bases === null || bases.length === 0) {
    return /* @__PURE__ */ jsx2(
      Panel,
      {
        panelTitle: "DEPLOYED SCIENCE",
        compactTitle: ["DEPLOYED SCI", "DEPLOYED"],
        sections: /* @__PURE__ */ jsx2(Section, { children: /* @__PURE__ */ jsx2(EmptyState, { role: "status", children: emptySentence(available, bases) }) })
      }
    );
  }
  return /* @__PURE__ */ jsx2(
    Panel,
    {
      panelTitle: "DEPLOYED SCIENCE",
      compactTitle: ["DEPLOYED SCI", "DEPLOYED"],
      sections: bases.map((base) => /* @__PURE__ */ jsx2(Section, { children: /* @__PURE__ */ jsx2(DeployedBaseCard, { base, basesReading }) }, base.id))
    }
  );
}
registerComponent({
  id: "deployed-science",
  name: "Deployed Science",
  description: "Power balance and per-experiment science progress for Breaking Ground deployed surface bases on every body, reported even while you fly something else. Read-only.",
  tags: ["telemetry", "science"],
  defaultSize: { w: 5, h: 9 },
  // At four rows the overflow glow covers the last line of the empty state.
  minSize: { w: 4, h: 5 },
  component: DeployedScienceComponent,
  dataRequirements: ["deployed.bases", "game.dlc.breakingGround"],
  defaultConfig: {},
  actions: [],
  augmentSlots: ["deployed-science.experiment"],
  pushable: true,
  owner: BREAKING_GROUND
});

// ../../mod/GonogoBreakingGroundUplink/client/src/RoboticsConsole/index.tsx
import {
  registerComponent as registerComponent2,
  stillTrue as stillTrue2,
  useActionInput,
  useCommand,
  useTelemetry as useTelemetry2
} from "@ksp-gonogo/sitrep-sdk";
import { EmptyState as EmptyState2, Panel as Panel3, Section as Section3 } from "@ksp-gonogo/ui-kit";
import { useState } from "react";

// ../../mod/GonogoBreakingGroundUplink/client/src/robotics.ts
function emptyStateText(breakingGround, available, listRead, parts) {
  if (breakingGround === false) return "Breaking Ground not installed";
  if (listRead || available === false) {
    return `No ${parts} on this vessel`;
  }
  return `Waiting for the ${parts} list`;
}

// ../../mod/GonogoBreakingGroundUplink/client/src/RoboticsConsole/actions.ts
var roboticsActions = [
  {
    id: "target-up",
    label: "Target +",
    accepts: ["button"],
    description: "Increase the selected joint's target."
  },
  {
    id: "target-down",
    label: "Target \u2212",
    accepts: ["button"],
    description: "Decrease the selected joint's target."
  },
  {
    id: "toggle-motor",
    label: "Toggle motor",
    accepts: ["button"],
    description: "Engage / disengage the selected joint's motor."
  },
  {
    id: "toggle-lock",
    label: "Toggle lock",
    accepts: ["button"],
    description: "Lock / unlock the selected joint."
  }
];

// ../../mod/GonogoBreakingGroundUplink/client/src/RoboticsConsole/RoboticsConsoleView.tsx
import {
  Badge as Badge2,
  Button,
  Cluster as Cluster2,
  Inline,
  Panel as Panel2,
  ReadoutCaption,
  Section as Section2,
  SelectableRow,
  Text as Text2,
  ToggleButton,
  Unit as Unit2
} from "@ksp-gonogo/ui-kit";

// ../../mod/GonogoBreakingGroundUplink/client/src/unreadLabels.ts
var stepperLabel = (action, from) => from === null ? `${action} (unavailable, not reported)` : action;
var flagLabel = (action, from) => from === null ? `${action} (unavailable, not reported)` : void 0;
function motorStateText(engaged) {
  if (engaged === null) return "unknown";
  return engaged ? "on" : "off";
}
function lockStateText(locked) {
  if (locked === null) return "Lock unknown";
  return locked ? "Locked" : "Unlocked";
}

// ../../mod/GonogoBreakingGroundUplink/client/src/RoboticsConsole/servos.ts
var TARGET_STEP = {
  hinge: 5,
  rotationServo: 5,
  piston: 0.05
};
var AT_TARGET_EPSILON = {
  hinge: 0.5,
  rotationServo: 0.5,
  piston: 0.01
};
var formatPos = (type, v) => type === "piston" ? v.toFixed(2) : String(Math.round(v));
var unitFor = (type) => type === "piston" ? "m" : "\xB0";
var positionDecimals = (type) => type === "piston" ? 2 : 0;
function parseServos(raw) {
  if (!Array.isArray(raw)) return [];
  const entries = raw;
  const out = [];
  for (const [srcIndex, entry] of entries.entries()) {
    if (!entry || typeof entry !== "object" || Array.isArray(entry)) continue;
    const e = entry;
    if (e.type !== "hinge" && e.type !== "rotationServo" && e.type !== "piston")
      continue;
    if (typeof e.partId !== "string") continue;
    const type = e.type;
    const current = numOrNull(
      type === "piston" ? e.currentExtension : e.currentAngle
    );
    const target = numOrNull(
      type === "piston" ? e.targetExtension : e.targetAngle
    );
    out.push({
      srcIndex,
      partId: e.partId,
      name: typeof e.partName === "string" ? e.partName : `Servo ${e.partId}`,
      type,
      current,
      target,
      atTarget: current === null || target === null ? null : Math.abs(current - target) < AT_TARGET_EPSILON[type],
      motorEngaged: boolOrNull(e.servoMotorIsEngaged),
      locked: boolOrNull(e.servoIsLocked),
      torqueLimit: numOrNull(e.servoMotorLimit)
    });
  }
  return out;
}
function withholdVerdicts(servos) {
  return servos.map((s) => ({ ...s, atTarget: null }));
}

// ../../mod/GonogoBreakingGroundUplink/client/src/RoboticsConsole/RoboticsConsoleView.tsx
import { Fragment as Fragment2, jsx as jsx3, jsxs as jsxs2 } from "react/jsx-runtime";
function ServoPosition({
  servo,
  of,
  readings
}) {
  if (servo[of] === null) return "unknown";
  return /* @__PURE__ */ jsx3(Unit2, { value: readings[of], decimals: positionDecimals(servo.type) });
}
function listSuffix(s) {
  if (s.locked === true) return " \xB7 locked";
  if (s.atTarget === true) return " \xB7 \u2713";
  return "";
}
function RoboticsConsoleView({
  servos,
  selected,
  positionReadings,
  rows,
  onSelect,
  setTarget,
  setMotor,
  setLock
}) {
  const unit = unitFor(selected.type);
  const decimals = positionDecimals(selected.type);
  const readings = positionReadings(selected);
  const showToggles = rows >= 6;
  const showServoList = servos.length > 1 && rows >= 6;
  return /* @__PURE__ */ jsx3(
    Panel2,
    {
      panelTitle: "ROBOTICS",
      sections: [
        /* @__PURE__ */ jsx3(Section2, { full: true, children: /* @__PURE__ */ jsxs2(Cluster2, { justify: "start", align: "baseline", wrap: true, children: [
          selected.current === null ? /* @__PURE__ */ jsx3(Text2, { size: "lg", weight: "semibold", level: "muted", role: "status", children: "Position unknown" }) : /* @__PURE__ */ jsx3(Text2, { size: "lg", weight: "semibold", children: /* @__PURE__ */ jsx3(Unit2, { value: readings.current, decimals }) }),
          /* @__PURE__ */ jsx3(Text2, { level: "muted", "aria-hidden": "true", children: "\u2192" }),
          selected.target === null ? /* @__PURE__ */ jsx3(Text2, { level: "muted", size: "lg", role: "status", children: "Target unknown" }) : /* @__PURE__ */ jsx3(Text2, { level: "muted", size: "lg", children: /* @__PURE__ */ jsx3(Unit2, { value: readings.target, decimals }) }),
          showToggles && selected.atTarget !== null && /* @__PURE__ */ jsx3(Badge2, { tone: selected.atTarget ? "go" : void 0, role: "status", children: selected.atTarget ? "AT TARGET" : "MOVING" })
        ] }) }, "readout"),
        /* @__PURE__ */ jsxs2(Section2, { gap: "related-dense", children: [
          /* @__PURE__ */ jsxs2(Cluster2, { justify: "between", wrap: true, children: [
            /* @__PURE__ */ jsx3(ReadoutCaption, { children: "Target" }),
            /* @__PURE__ */ jsxs2(Inline, { children: [
              /* @__PURE__ */ jsx3(
                Button,
                {
                  variant: "ghost",
                  size: "sm",
                  type: "button",
                  "aria-label": stepperLabel("Decrease target", selected.target),
                  disabled: selected.target === null,
                  onClick: () => selected.target !== null && setTarget(
                    selected.partId,
                    selected.type,
                    selected.target - TARGET_STEP[selected.type]
                  ),
                  children: "\u2212"
                }
              ),
              /* @__PURE__ */ jsx3(Text2, { size: "sm", children: selected.target === null ? "unknown" : /* @__PURE__ */ jsxs2(Fragment2, { children: [
                formatPos(selected.type, selected.target),
                unit
              ] }) }),
              /* @__PURE__ */ jsx3(
                Button,
                {
                  variant: "ghost",
                  size: "sm",
                  type: "button",
                  "aria-label": stepperLabel("Increase target", selected.target),
                  disabled: selected.target === null,
                  onClick: () => selected.target !== null && setTarget(
                    selected.partId,
                    selected.type,
                    selected.target + TARGET_STEP[selected.type]
                  ),
                  children: "+"
                }
              )
            ] })
          ] }),
          showToggles && /* @__PURE__ */ jsxs2(Cluster2, { justify: "start", wrap: true, children: [
            /* @__PURE__ */ jsxs2(
              ToggleButton,
              {
                size: "sm",
                pressed: selected.motorEngaged === true,
                tone: "go",
                disabled: selected.motorEngaged === null,
                "aria-label": flagLabel("Toggle motor", selected.motorEngaged),
                onClick: () => selected.motorEngaged !== null && setMotor(selected.partId, !selected.motorEngaged),
                children: [
                  "Motor ",
                  motorStateText(selected.motorEngaged)
                ]
              }
            ),
            /* @__PURE__ */ jsx3(
              ToggleButton,
              {
                size: "sm",
                pressed: selected.locked === true,
                tone: "warn",
                disabled: selected.locked === null,
                "aria-label": flagLabel("Toggle lock", selected.locked),
                onClick: () => selected.locked !== null && setLock(selected.partId, !selected.locked),
                children: lockStateText(selected.locked)
              }
            )
          ] })
        ] }, "target"),
        showServoList && /* @__PURE__ */ jsx3(Section2, { gap: "related-dense", "aria-label": "Robotic joints", children: servos.map((s) => /* @__PURE__ */ jsxs2(
          SelectableRow,
          {
            selected: s.partId === selected.partId,
            onClick: () => onSelect(s.partId),
            children: [
              /* @__PURE__ */ jsx3("span", { children: s.name }),
              /* @__PURE__ */ jsxs2("span", { children: [
                s.type,
                " \xB7",
                " ",
                /* @__PURE__ */ jsx3(
                  ServoPosition,
                  {
                    servo: s,
                    of: "current",
                    readings: positionReadings(s)
                  }
                ),
                "/",
                /* @__PURE__ */ jsx3(
                  ServoPosition,
                  {
                    servo: s,
                    of: "target",
                    readings: positionReadings(s)
                  }
                ),
                listSuffix(s)
              ] })
            ]
          },
          s.partId
        )) }, "joints")
      ]
    }
  );
}

// ../../mod/GonogoBreakingGroundUplink/client/src/RoboticsConsole/index.tsx
import { jsx as jsx4 } from "react/jsx-runtime";
function RoboticsConsoleComponent({
  h
}) {
  const roboticsReading = useTelemetry2("robotics.servos");
  const roboticsRaw = stillTrue2(roboticsReading, void 0);
  const available = stillTrue2(
    useTelemetry2("robotics.available"),
    void 0
  )?.available;
  const breakingGround = stillTrue2(
    useTelemetry2("game.dlc"),
    void 0
  )?.breakingGround;
  const angleCmd = useCommand("robotics.servo.setAngle");
  const extensionCmd = useCommand("robotics.servo.setExtension");
  const motorCmd = useCommand("robotics.servo.setMotor");
  const lockCmd = useCommand("robotics.servo.setLock");
  const servos = roboticsReading.state === "held" ? withholdVerdicts(parseServos(roboticsRaw)) : parseServos(roboticsRaw);
  const positionReadings = (s) => {
    const entry = roboticsReading[s.srcIndex];
    if (s.type === "piston")
      return { current: entry.currentExtension, target: entry.targetExtension };
    return { current: entry.currentAngle, target: entry.targetAngle };
  };
  const [selectedId, setSelectedId] = useState(null);
  const selected = servos.find((s) => s.partId === selectedId) ?? servos[0] ?? null;
  const setTarget = (id, type, value2) => {
    const target = Number(formatPos(type, value2));
    const label = `Target ${formatPos(type, value2)}${unitFor(type)}`;
    if (type === "piston") {
      void extensionCmd.send({ partId: id, metres: target }, { label });
      return;
    }
    void angleCmd.send({ partId: id, degrees: target }, { label });
  };
  const setMotor = (id, engaged) => void motorCmd.send(
    { partId: id, enabled: engaged },
    { label: `Motor ${engaged ? "on" : "off"}` }
  );
  const setLock = (id, locked) => void lockCmd.send(
    { partId: id, enabled: locked },
    { label: locked ? "Lock" : "Unlock" }
  );
  useActionInput({
    // The nudges are relative, so they dispatch nothing while the target is unread.
    "target-up": (p) => {
      if (p.kind === "button" && p.value !== true) return void 0;
      if (!selected || selected.target === null) return void 0;
      const next = selected.target + TARGET_STEP[selected.type];
      setTarget(selected.partId, selected.type, next);
      return { Target: next };
    },
    "target-down": (p) => {
      if (p.kind === "button" && p.value !== true) return void 0;
      if (!selected || selected.target === null) return void 0;
      const next = selected.target - TARGET_STEP[selected.type];
      setTarget(selected.partId, selected.type, next);
      return { Target: next };
    },
    // Motor and lock send an absolute state inverted from the one read back, so an unread flag dispatches nothing.
    "toggle-motor": (p) => {
      if (p.kind === "button" && p.value !== true) return void 0;
      if (!selected || selected.motorEngaged === null) return void 0;
      setMotor(selected.partId, !selected.motorEngaged);
      return { Motor: !selected.motorEngaged };
    },
    "toggle-lock": (p) => {
      if (p.kind === "button" && p.value !== true) return void 0;
      if (!selected || selected.locked === null) return void 0;
      setLock(selected.partId, !selected.locked);
      return { Locked: !selected.locked };
    }
  });
  if (servos.length === 0 || !selected) {
    return /* @__PURE__ */ jsx4(
      Panel3,
      {
        panelTitle: "ROBOTICS",
        sections: /* @__PURE__ */ jsx4(Section3, { children: /* @__PURE__ */ jsx4(EmptyState2, { role: "status", children: emptyStateText(
          breakingGround,
          available,
          roboticsReading.state === "observed" || roboticsReading.state === "held",
          "robotic parts"
        ) }) })
      }
    );
  }
  return /* @__PURE__ */ jsx4(
    RoboticsConsoleView,
    {
      servos,
      selected,
      positionReadings,
      rows: h ?? 8,
      onSelect: setSelectedId,
      setTarget,
      setMotor,
      setLock
    }
  );
}
registerComponent2({
  id: "robotics-console",
  name: "Robotics Console",
  description: "Current-vs-target position, at-target state and motor/lock controls for Breaking Ground robotic hinges, rotation servos and pistons. Select a joint to drive it from the stepper or a mapped input.",
  tags: ["telemetry", "robotics"],
  defaultSize: { w: 5, h: 8 },
  minSize: { w: 4, h: 4 },
  component: RoboticsConsoleComponent,
  dataRequirements: [
    "robotics.servos",
    "robotics.available.available",
    "game.dlc.breakingGround"
  ],
  defaultConfig: {},
  actions: roboticsActions,
  pushable: true,
  requires: ["flight"],
  owner: BREAKING_GROUND
});

// ../../mod/GonogoBreakingGroundUplink/client/src/RotorTachometer/index.tsx
import {
  value as quantity2,
  registerComponent as registerComponent3,
  stillTrue as stillTrue3,
  useActionInput as useActionInput2,
  useCommand as useCommand2,
  useTelemetry as useTelemetry3
} from "@ksp-gonogo/sitrep-sdk";
import {
  EmptyState as EmptyState3,
  Panel as Panel4,
  Section as Section6,
  SelectableRow as SelectableRow2,
  Unit as Unit4,
  UnitSharedFormat,
  writeQuantity as writeQuantity2
} from "@ksp-gonogo/ui-kit";
import { useState as useState2 } from "react";

// ../../mod/GonogoBreakingGroundUplink/client/src/RotorTachometer/actions.ts
var rotorActions = [
  {
    id: "rpm-up",
    label: "RPM up",
    accepts: ["button"],
    description: "Raise the selected rotor's RPM cap."
  },
  {
    id: "rpm-down",
    label: "RPM down",
    accepts: ["button"],
    description: "Lower the selected rotor's RPM cap."
  },
  {
    id: "toggle-motor",
    label: "Toggle motor",
    accepts: ["button"],
    description: "Engage / disengage the selected rotor's motor."
  },
  {
    id: "toggle-lock",
    label: "Toggle lock",
    accepts: ["button"],
    description: "Lock / unlock the selected rotor."
  },
  {
    id: "reverse",
    label: "Reverse",
    accepts: ["button"],
    description: "Flip the selected rotor's spin direction."
  }
];

// ../../mod/GonogoBreakingGroundUplink/client/src/RotorTachometer/RotorControls.tsx
import {
  Button as Button2,
  Cluster as Cluster3,
  Grid,
  ReadoutCaption as ReadoutCaption2,
  Section as Section4,
  Text as Text3,
  ToggleButton as ToggleButton2,
  Unit as Unit3
} from "@ksp-gonogo/ui-kit";

// ../../mod/GonogoBreakingGroundUplink/client/src/RotorTachometer/rotors.ts
var ROTOR_MAX_RPM = 460;
var RPM_STEP = 10;
var TORQUE_STEP = 10;
function parseRotors(raw) {
  if (!Array.isArray(raw)) return [];
  const entries = raw;
  const out = [];
  for (const [srcIndex, entry] of entries.entries()) {
    if (!entry || typeof entry !== "object" || Array.isArray(entry)) continue;
    const e = entry;
    if (e.type !== "rotor") continue;
    if (typeof e.partId !== "string") continue;
    out.push({
      srcIndex,
      partId: e.partId,
      name: typeof e.partName === "string" ? e.partName : `Rotor ${e.partId}`,
      rpm: numOrNull(e.currentRPM),
      rpmLimit: numOrNull(e.rpmLimit),
      torqueLimit: numOrNull(e.servoMotorLimit),
      maxTorque: numOrNull(e.maxTorque),
      brakePercentage: numOrNull(e.brakePercentage),
      motorEngaged: boolOrNull(e.servoMotorIsEngaged),
      locked: boolOrNull(e.servoIsLocked),
      counterClockwise: boolOrNull(e.counterClockwise),
      output: numOrNull(e.normalizedOutput)
    });
  }
  return out;
}
var clamp = (v, lo, hi) => Math.max(lo, Math.min(hi, v));

// ../../mod/GonogoBreakingGroundUplink/client/src/RotorTachometer/RotorControls.tsx
import { jsx as jsx5, jsxs as jsxs3 } from "react/jsx-runtime";
function brakeStateText(brakePercentage) {
  if (brakePercentage === null) return "unknown";
  return brakePercentage > 0 ? "on" : "off";
}
function directionText(counterClockwise) {
  if (counterClockwise === null) return "Reverse";
  return counterClockwise ? "CCW" : "CW";
}
function RotorControls({
  selected,
  torqueReading,
  setRpmLimit,
  setTorqueLimit,
  setBrake,
  setMotor,
  setLock,
  reverse
}) {
  return /* @__PURE__ */ jsxs3(Section4, { gap: "related-dense", children: [
    /* @__PURE__ */ jsxs3(Grid, { cols: "1fr auto auto auto", children: [
      /* @__PURE__ */ jsx5(ReadoutCaption2, { children: "RPM cap" }),
      /* @__PURE__ */ jsx5(
        Button2,
        {
          variant: "ghost",
          size: "sm",
          type: "button",
          "aria-label": stepperLabel("Lower RPM cap", selected.rpmLimit),
          disabled: selected.rpmLimit === null,
          onClick: () => selected.rpmLimit !== null && setRpmLimit(selected.partId, selected.rpmLimit - RPM_STEP),
          children: "\u2212"
        }
      ),
      /* @__PURE__ */ jsx5(Cluster3, { justify: "center", children: /* @__PURE__ */ jsx5(Text3, { size: "sm", children: selected.rpmLimit === null ? "RPM cap unknown" : Math.round(selected.rpmLimit) }) }),
      /* @__PURE__ */ jsx5(
        Button2,
        {
          variant: "ghost",
          size: "sm",
          type: "button",
          "aria-label": stepperLabel("Raise RPM cap", selected.rpmLimit),
          disabled: selected.rpmLimit === null,
          onClick: () => selected.rpmLimit !== null && setRpmLimit(selected.partId, selected.rpmLimit + RPM_STEP),
          children: "+"
        }
      ),
      /* @__PURE__ */ jsx5(ReadoutCaption2, { children: "Torque" }),
      /* @__PURE__ */ jsx5(
        Button2,
        {
          variant: "ghost",
          size: "sm",
          type: "button",
          "aria-label": stepperLabel("Lower torque limit", selected.torqueLimit),
          disabled: selected.torqueLimit === null,
          onClick: () => selected.torqueLimit !== null && setTorqueLimit(selected.partId, selected.torqueLimit - TORQUE_STEP),
          children: "\u2212"
        }
      ),
      /* @__PURE__ */ jsx5(Cluster3, { justify: "center", children: /* @__PURE__ */ jsx5(Text3, { size: "sm", children: selected.torqueLimit === null ? "Torque unknown" : /* @__PURE__ */ jsx5(Unit3, { value: torqueReading, decimals: 0 }) }) }),
      /* @__PURE__ */ jsx5(
        Button2,
        {
          variant: "ghost",
          size: "sm",
          type: "button",
          "aria-label": stepperLabel("Raise torque limit", selected.torqueLimit),
          disabled: selected.torqueLimit === null,
          onClick: () => selected.torqueLimit !== null && setTorqueLimit(selected.partId, selected.torqueLimit + TORQUE_STEP),
          children: "+"
        }
      )
    ] }),
    /* @__PURE__ */ jsxs3(Cluster3, { justify: "start", wrap: true, children: [
      /* @__PURE__ */ jsxs3(
        ToggleButton2,
        {
          size: "sm",
          pressed: selected.motorEngaged === true,
          tone: "go",
          disabled: selected.motorEngaged === null,
          "aria-label": flagLabel("Toggle motor", selected.motorEngaged),
          onClick: () => selected.motorEngaged !== null && setMotor(selected.partId, !selected.motorEngaged),
          children: [
            "Motor ",
            motorStateText(selected.motorEngaged)
          ]
        }
      ),
      /* @__PURE__ */ jsx5(
        ToggleButton2,
        {
          size: "sm",
          pressed: selected.locked === true,
          tone: "warn",
          disabled: selected.locked === null,
          "aria-label": flagLabel("Toggle lock", selected.locked),
          onClick: () => selected.locked !== null && setLock(selected.partId, !selected.locked),
          children: lockStateText(selected.locked)
        }
      ),
      /* @__PURE__ */ jsxs3(
        ToggleButton2,
        {
          size: "sm",
          pressed: selected.brakePercentage !== null && selected.brakePercentage > 0,
          tone: "warn",
          disabled: selected.brakePercentage === null,
          "aria-label": selected.brakePercentage === null ? "Toggle brake (unavailable, not reported)" : void 0,
          onClick: () => selected.brakePercentage !== null && setBrake(selected.partId, selected.brakePercentage > 0 ? 0 : 100),
          children: [
            "Brake ",
            brakeStateText(selected.brakePercentage)
          ]
        }
      ),
      /* @__PURE__ */ jsx5(ToggleButton2, { size: "sm", onClick: () => reverse(selected.partId), children: directionText(selected.counterClockwise) })
    ] })
  ] });
}

// ../../mod/GonogoBreakingGroundUplink/client/src/RotorTachometer/RotorGauge.tsx
import { value as quantity } from "@ksp-gonogo/sitrep-sdk";
import {
  Cluster as Cluster4,
  Dial,
  Section as Section5,
  useElementSize,
  writeQuantity
} from "@ksp-gonogo/ui-kit";
import { jsx as jsx6 } from "react/jsx-runtime";
function RotorGauge({
  rotor,
  rpmReading,
  rows
}) {
  const { ref: gaugeRef, size: gaugeSize } = useElementSize({ w: 180, h: 104 });
  const cap = rotor.rpmLimit === null ? null : Math.max(rotor.rpmLimit, 1);
  const gaugeMaxH = Math.max(64, (rows ?? 9) * 25 * 0.32);
  const gaugeW = Math.min(
    gaugeSize.w || 180,
    240,
    Math.round(gaugeMaxH / 0.58)
  );
  const gaugeH = Math.round(gaugeW * 0.58);
  return /* @__PURE__ */ jsx6(Section5, { children: /* @__PURE__ */ jsx6(Cluster4, { justify: "center", ref: gaugeRef, children: /* @__PURE__ */ jsx6(
    Dial,
    {
      startAngle: -90,
      sweep: 180,
      readout: "regular",
      value: rpmReading,
      min: quantity("rpm", 0),
      max: quantity("rpm", ROTOR_MAX_RPM),
      width: gaugeW,
      height: gaugeH,
      zones: cap === null ? void 0 : [
        {
          from: quantity("rpm", 0),
          to: quantity("rpm", cap),
          color: "var(--color-go-status)"
        },
        {
          from: quantity("rpm", cap),
          to: quantity("rpm", ROTOR_MAX_RPM),
          color: "var(--color-surface-raised)"
        }
      ],
      "aria-label": `${rotor.name}: ${rpmReading.value == null ? "RPM unknown" : writeQuantity(rpmReading.value)}, ${rotor.rpmLimit === null ? "cap unknown" : `cap ${writeQuantity(quantity("rpm", rotor.rpmLimit))}`}`
    }
  ) }) });
}

// ../../mod/GonogoBreakingGroundUplink/client/src/RotorTachometer/index.tsx
import { jsx as jsx7, jsxs as jsxs4 } from "react/jsx-runtime";
function RotorTachometerComponent({
  h
}) {
  const roboticsReading = useTelemetry3("robotics.servos");
  const roboticsRaw = stillTrue3(roboticsReading, void 0);
  const available = stillTrue3(
    useTelemetry3("robotics.available"),
    void 0
  )?.available;
  const breakingGround = stillTrue3(
    useTelemetry3("game.dlc"),
    void 0
  )?.breakingGround;
  const rpmCmd = useCommand2("robotics.rotor.setRpmLimit");
  const torqueCmd = useCommand2("robotics.rotor.setTorqueLimit");
  const brakeCmd = useCommand2("robotics.rotor.setBrake");
  const motorCmd = useCommand2("robotics.rotor.setMotor");
  const lockCmd = useCommand2("robotics.rotor.setLock");
  const reverseCmd = useCommand2("robotics.rotor.reverse");
  const rotors = parseRotors(roboticsRaw);
  const [selectedId, setSelectedId] = useState2(null);
  const selected = rotors.find((r) => r.partId === selectedId) ?? rotors[0] ?? null;
  const setRpmLimit = (id, rpm) => {
    const value2 = Math.round(clamp(rpm, 0, ROTOR_MAX_RPM));
    void rpmCmd.send({ partId: id, rpm: value2 }, { label: `RPM cap ${value2}` });
  };
  const setTorqueLimit = (id, pct) => {
    const value2 = Math.round(clamp(pct, 0, 100));
    void torqueCmd.send(
      { partId: id, percent: value2 },
      { label: `Torque ${writeQuantity2(quantity2("%", value2))}` }
    );
  };
  const setBrake = (id, pct) => {
    const value2 = Math.round(clamp(pct, 0, 200));
    void brakeCmd.send(
      { partId: id, percent: value2 },
      { label: `Brake ${writeQuantity2(quantity2("%", value2))}` }
    );
  };
  const setMotor = (id, engaged) => void motorCmd.send(
    { partId: id, enabled: engaged },
    { label: `Motor ${engaged ? "on" : "off"}` }
  );
  const setLock = (id, locked) => void lockCmd.send(
    { partId: id, enabled: locked },
    { label: locked ? "Lock" : "Unlock" }
  );
  const reverse = (id) => void reverseCmd.send({ partId: id }, { label: "Reverse" });
  useActionInput2({
    // The steppers are relative, so they dispatch nothing while the cap is unread.
    "rpm-up": (p) => {
      if (p.kind === "button" && p.value !== true) return void 0;
      if (!selected || selected.rpmLimit === null) return void 0;
      const next = clamp(selected.rpmLimit + RPM_STEP, 0, ROTOR_MAX_RPM);
      setRpmLimit(selected.partId, next);
      return { RPM: next };
    },
    "rpm-down": (p) => {
      if (p.kind === "button" && p.value !== true) return void 0;
      if (!selected || selected.rpmLimit === null) return void 0;
      const next = clamp(selected.rpmLimit - RPM_STEP, 0, ROTOR_MAX_RPM);
      setRpmLimit(selected.partId, next);
      return { RPM: next };
    },
    // Motor and lock send an absolute state inverted from the one read back, so an unread flag dispatches nothing.
    "toggle-motor": (p) => {
      if (p.kind === "button" && p.value !== true) return void 0;
      if (!selected || selected.motorEngaged === null) return void 0;
      setMotor(selected.partId, !selected.motorEngaged);
      return { Motor: !selected.motorEngaged };
    },
    "toggle-lock": (p) => {
      if (p.kind === "button" && p.value !== true) return void 0;
      if (!selected || selected.locked === null) return void 0;
      setLock(selected.partId, !selected.locked);
      return { Locked: !selected.locked };
    },
    reverse: (p) => {
      if (p.kind === "button" && p.value !== true) return void 0;
      if (!selected) return void 0;
      reverse(selected.partId);
      return selected.counterClockwise === null ? void 0 : { Direction: selected.counterClockwise ? "CW" : "CCW" };
    }
  });
  if (rotors.length === 0 || !selected) {
    return /* @__PURE__ */ jsx7(
      Panel4,
      {
        panelTitle: "ROTORS",
        sections: /* @__PURE__ */ jsx7(Section6, { children: /* @__PURE__ */ jsx7(EmptyState3, { role: "status", children: emptyStateText(
          breakingGround,
          available,
          roboticsReading.state === "observed" || roboticsReading.state === "held",
          "rotors"
        ) }) })
      }
    );
  }
  const showGauge = (h ?? 8) >= 6;
  const readingsOf = (r) => roboticsReading[r.srcIndex];
  return /* @__PURE__ */ jsx7(
    Panel4,
    {
      panelTitle: "ROTORS",
      sections: [
        showGauge && /* @__PURE__ */ jsx7(
          RotorGauge,
          {
            rotor: selected,
            rpmReading: readingsOf(selected).currentRPM,
            rows: h
          },
          "gauge"
        ),
        /* @__PURE__ */ jsx7(
          RotorControls,
          {
            selected,
            torqueReading: readingsOf(selected).servoMotorLimit,
            setRpmLimit,
            setTorqueLimit,
            setBrake,
            setMotor,
            setLock,
            reverse
          },
          "controls"
        ),
        rotors.length > 1 && /* @__PURE__ */ jsx7(Section6, { gap: "related-dense", "aria-label": "Rotors", children: rotors.map((r) => /* @__PURE__ */ jsxs4(
          SelectableRow2,
          {
            selected: r.partId === selected.partId,
            onClick: () => setSelectedId(r.partId),
            children: [
              /* @__PURE__ */ jsx7("span", { children: r.name }),
              /* @__PURE__ */ jsxs4("span", { children: [
                /* @__PURE__ */ jsxs4(UnitSharedFormat, { children: [
                  /* @__PURE__ */ jsx7(
                    Unit4,
                    {
                      value: readingsOf(r).currentRPM,
                      decimals: 0,
                      hideUnitInGroup: true
                    }
                  ),
                  "/",
                  /* @__PURE__ */ jsx7(Unit4, { value: readingsOf(r).rpmLimit, decimals: 0 })
                ] }),
                r.motorEngaged === false ? " \xB7 off" : "",
                r.locked === true ? " \xB7 locked" : ""
              ] })
            ]
          },
          r.partId
        )) }, "rotors")
      ]
    }
  );
}
registerComponent3({
  id: "rotor-tachometer",
  name: "Rotor Tachometer",
  description: "Live RPM vs commanded cap for Breaking Ground robotic rotors, with motor, lock, brake and direction controls. Select a rotor to drive it from the dial or a mapped input.",
  tags: ["telemetry", "robotics"],
  defaultSize: { w: 6, h: 10 },
  minSize: { w: 4, h: 4 },
  component: RotorTachometerComponent,
  dataRequirements: [
    "robotics.servos",
    "robotics.available.available",
    "game.dlc.breakingGround"
  ],
  defaultConfig: {},
  actions: rotorActions,
  pushable: true,
  requires: ["flight"],
  owner: BREAKING_GROUND
});
export {
  DeployedScienceComponent,
  RoboticsConsoleComponent,
  RotorTachometerComponent,
  parseBases,
  parseRotors,
  parseServos
};
