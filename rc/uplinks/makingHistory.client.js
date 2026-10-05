// ../../mod/GonogoMakingHistoryUplink/client/src/ObjectivesSource/index.tsx
import {
  MissionObjectiveState,
  registerAugment,
  stillTrue,
  useTelemetry
} from "@ksp-gonogo/sitrep-sdk";
import { Text, Unit } from "@ksp-gonogo/ui-kit";

// ../../mod/GonogoMakingHistoryUplink/client/src/uplink.ts
import { defineUplinkClient } from "@ksp-gonogo/sitrep-sdk";
var UPLINK_VERSION = "0.0.1";
var MAKING_HISTORY = defineUplinkClient({
  id: "makingHistory",
  version: UPLINK_VERSION,
  name: "Making History",
  description: "Lists the running Making History mission's objectives in the Objectives widget, each marked pending, under way, reached or failed."
});

// ../../mod/GonogoMakingHistoryUplink/client/src/ObjectivesSource/index.tsx
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
var STATES = {
  [MissionObjectiveState.Pending]: "pending",
  [MissionObjectiveState.Active]: "active",
  [MissionObjectiveState.Reached]: "reached",
  [MissionObjectiveState.Failed]: "failed"
};
function slotState(state) {
  return state != null && STATES[state] || "pending";
}
function missionObjectiveItems(mission) {
  if (!mission?.objectives) return [];
  const source = mission.name || "Mission";
  return mission.objectives.map((o, index) => ({
    id: `mh:${o.id || `${index}:${o.title ?? ""}`}`,
    title: o.title || "Objective",
    ...o.description ? { description: o.description } : {},
    state: slotState(o.state),
    source
  }));
}
function missionStatusWords(mission) {
  if (mission.finished) {
    return mission.succeeded ? "Mission complete" : "Mission failed";
  }
  if (mission.started === false) return "Not started";
  return mission.phase ? `Phase: ${mission.phase}` : "";
}
function MissionStatusLine({ mission }) {
  const words = missionStatusWords(mission);
  const showScore = mission.scoreEnabled === true && mission.score != null;
  if (!words && !showScore) return null;
  return /* @__PURE__ */ jsxs(Text, { level: "muted", size: "sm", children: [
    words,
    words && showScore ? " \xB7 " : null,
    showScore && mission.score ? /* @__PURE__ */ jsxs(Fragment, { children: [
      "Score ",
      /* @__PURE__ */ jsx(Unit, { value: mission.score }),
      mission.maxScore ? /* @__PURE__ */ jsxs(Fragment, { children: [
        " / ",
        /* @__PURE__ */ jsx(Unit, { value: mission.maxScore })
      ] }) : null
    ] }) : null
  ] });
}
function MissionObjectivesSource({ Section }) {
  const mission = stillTrue(useTelemetry("missions.active"), void 0);
  const items = missionObjectiveItems(mission);
  if (items.length === 0) return null;
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    mission ? /* @__PURE__ */ jsx(MissionStatusLine, { mission }) : null,
    /* @__PURE__ */ jsx(Section, { items })
  ] });
}
registerAugment({
  id: "objectives-making-history",
  augments: "objectives.source",
  component: MissionObjectivesSource,
  channels: ["missions.active"],
  // Ahead of the contracts source (priority 20), as the mission was before it was removed.
  priority: 10,
  owner: MAKING_HISTORY
});
export {
  MissionObjectivesSource,
  missionObjectiveItems
};
