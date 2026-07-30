import type { ReactElement } from "react";
import type { ProjectVisualKind } from "@/lib/projects";
import { cn } from "@/lib/cn";

type ProjectVisualProps = {
  kind: ProjectVisualKind;
  className?: string;
};

function DashboardVisual() {
  const navTabs = ["Planning", "Service Calls", "Documents", "Contracts"];
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri"];
  const hours = ["9:00", "10:00", "11:00", "12:00", "1:00", "2:00", "3:00"];
  const detailFields = ["Type", "Product", "Subject", "Subcontractor", "Customer", "City"];

  return (
    <div className="absolute inset-0 p-4 sm:p-5">
      <div className="flex h-full flex-col overflow-hidden rounded-[1.15rem] border border-white/[0.07] bg-white/[0.02]">
        <div className="flex items-center justify-between border-b border-white/[0.06] px-4 py-2">
          <div className="flex items-center gap-3">
            {navTabs.map((tab, index) => (
              <span
                key={tab}
                className={cn(
                  "text-[0.5rem] tracking-wide",
                  index === 0
                    ? "border-b border-accent/50 pb-0.5 text-accent/70"
                    : "text-white/25",
                )}
              >
                {tab}
              </span>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[0.45rem] text-white/20">EN</span>
            <div className="h-4 w-4 rounded-full bg-accent/20" />
          </div>
        </div>

        <div className="flex min-h-0 flex-1">
          <div className="flex-1 overflow-hidden border-r border-white/[0.06]">
            <div className="flex items-center justify-between border-b border-white/[0.06] px-3 py-1.5">
              <div className="flex items-center gap-2">
                <span className="text-[0.45rem] text-white/30">Week</span>
                <span className="rounded bg-accent/15 px-1.5 py-0.5 text-[0.45rem] text-accent/60">
                  Day
                </span>
              </div>
              <div className="h-1.5 w-20 rounded-full bg-white/[0.06]" />
            </div>

            <div className="grid grid-cols-5 border-b border-white/[0.04]">
              {days.map((day, index) => (
                <div
                  key={day}
                  className={cn(
                    "border-r border-white/[0.04] px-1.5 py-1 text-center text-[0.4rem] last:border-r-0",
                    index === 2 ? "text-accent/60" : "text-white/25",
                  )}
                >
                  {day}
                </div>
              ))}
            </div>

            <div className="grid grid-cols-[auto_1fr]">
              <div className="w-8">
                {hours.map((hour) => (
                  <div
                    key={hour}
                    className="flex h-[1.6rem] items-start justify-end border-b border-white/[0.03] pr-1 pt-0.5 text-[0.35rem] text-white/15"
                  >
                    {hour}
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-5">
                {days.map((day) => (
                  <div key={day} className="border-r border-white/[0.04] last:border-r-0">
                    {hours.map((hour, hIndex) => (
                      <div
                        key={hour}
                        className="relative h-[1.6rem] border-b border-white/[0.03]"
                      >
                        {((hIndex + day.charCodeAt(0)) % 3 !== 0) ? (
                          <div
                            className={cn(
                              "absolute inset-x-0.5 top-0.5 bottom-0.5 rounded-[3px]",
                              (hIndex + day.charCodeAt(0)) % 5 === 0
                                ? "bg-warm/25"
                                : "bg-accent/20",
                            )}
                          />
                        ) : null}
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="w-[32%] min-w-[6rem] px-3 py-2">
            <div className="mb-2 flex items-center justify-between">
              <span className="text-[0.45rem] font-semibold tracking-wider text-white/35 uppercase">
                Details
              </span>
              <div className="flex items-center gap-1">
                <span className="font-mono text-[0.6rem] font-bold text-accent/70">
                  33521
                </span>
                <span className="rounded-full bg-warm/20 px-1 py-0.5 text-[0.35rem] text-warm/70">
                  High
                </span>
              </div>
            </div>
            <div className="space-y-1.5">
              {detailFields.map((field) => (
                <div key={field} className="space-y-0.5">
                  <span className="text-[0.4rem] text-white/25">{field}</span>
                  <div className="h-5 rounded-md border border-white/[0.06] bg-white/[0.03]">
                    <div
                      className="mt-1.5 ml-1.5 h-1.5 rounded-full bg-white/10"
                      style={{ width: `${55 + field.length * 3}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function CrmVisual() {
  return (
    <div className="absolute inset-0 flex items-center justify-center p-6 sm:p-8">
      <div className="w-full max-w-sm space-y-3">
        {["Profile", "Permissions", "Workflow", "Audit"].map((label, index) => (
          <div
            key={label}
            className="rounded-xl border border-white/[0.07] bg-white/[0.025] p-4"
            style={{ marginLeft: `${index * 8}px` }}
          >
            <div className="mb-3 flex items-center justify-between">
              <span className="text-[0.65rem] tracking-[0.14em] text-muted uppercase">
                {label}
              </span>
              <span className="h-1.5 w-1.5 rounded-full bg-accent/60" />
            </div>
            <div className="space-y-2">
              <div className="h-1.5 w-[78%] rounded-full bg-white/10" />
              <div className="h-1.5 w-[54%] rounded-full bg-white/[0.06]" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function AdminShellVisual() {
  const tabs = ["Users", "Products", "Spare Parts", "Translations", "Regions", "Fees", "Defect Codes", "Settings"];
  const subtabs = ["Admins", "Roles", "Networks"];
  const columns = ["Username", "Email", "Roles", "Network"];

  return (
    <div className="absolute inset-0 p-4 sm:p-5">
      <div className="flex h-full overflow-hidden rounded-[1.15rem] border border-white/[0.07] bg-white/[0.02]">
        <div className="flex w-[22%] min-w-[5.25rem] flex-col border-r border-white/[0.06] bg-white/[0.02] px-3 py-3">
          <div className="mb-3 h-2.5 w-12 rounded-full bg-accent/55" />
          <div className="space-y-1.5">
            {tabs.map((tab, index) => (
              <div
                key={tab}
                className={cn(
                  "rounded-md px-2 py-1.5",
                  index === 0
                    ? "border border-accent/20 bg-accent/[0.08]"
                    : "border border-transparent",
                )}
              >
                <span
                  className={cn(
                    "text-[0.5rem] tracking-wide",
                    index === 0 ? "text-accent/70" : "text-white/25",
                  )}
                >
                  {tab}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex min-w-0 flex-1 flex-col">
          <div className="flex items-center gap-3 border-b border-white/[0.06] px-4 py-2.5">
            {subtabs.map((tab, index) => (
              <span
                key={tab}
                className={cn(
                  "text-[0.5rem] tracking-wide",
                  index === 0
                    ? "border-b border-accent/50 pb-0.5 text-accent/70"
                    : "text-white/25",
                )}
              >
                {tab}
              </span>
            ))}
          </div>

          <div className="min-h-0 flex-1 px-3 py-3">
            <div className="grid grid-cols-[1.4fr_1.6fr_0.8fr_1fr] gap-2 px-2 pb-2">
              {columns.map((col) => (
                <span
                  key={col}
                  className="text-[0.45rem] font-semibold tracking-wider text-white/30 uppercase"
                >
                  {col}
                </span>
              ))}
            </div>
            <div className="space-y-1.5">
              {Array.from({ length: 8 }, (_, index) => (
                <div
                  key={index}
                  className="grid grid-cols-[1.4fr_1.6fr_0.8fr_1fr] items-center gap-2 rounded-md border border-white/[0.04] bg-white/[0.015] px-2 py-2"
                  style={{ opacity: 1 - index * 0.06 }}
                >
                  <div
                    className="h-1.5 rounded-full bg-white/15"
                    style={{ width: `${78 - index * 4}%` }}
                  />
                  <div
                    className="h-1.5 rounded-full bg-white/10"
                    style={{ width: `${85 - index * 3}%` }}
                  />
                  <div className="flex items-center">
                    <span
                      className={cn(
                        "rounded-full px-1.5 py-0.5 text-[0.4rem]",
                        index % 3 === 0
                          ? "bg-accent/15 text-accent/60"
                          : "bg-white/[0.06] text-white/30",
                      )}
                    >
                      {index % 3 === 0 ? "admin" : "safc"}
                    </span>
                  </div>
                  <div
                    className="h-1.5 rounded-full bg-white/[0.07]"
                    style={{ width: `${60 - index * 3}%` }}
                  />
                </div>
              ))}
            </div>
            <div className="mt-2 flex items-center justify-end gap-2 pr-1">
              <div className="h-4 w-4 rounded border border-white/[0.06] bg-white/[0.03]" />
              <div className="h-4 w-4 rounded border border-accent/30 bg-accent/10" />
              <div className="h-4 w-4 rounded border border-white/[0.06] bg-white/[0.03]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SizingFlowVisual() {
  const steps = ["Home", "Heat Pump", "Summary", "Accessories", "Doc"];

  return (
    <div className="absolute inset-0 p-4 sm:p-5">
      <div className="flex h-full flex-col overflow-hidden rounded-[1.15rem] border border-white/[0.07] bg-white/[0.02]">
        <div className="flex items-center gap-1.5 border-b border-white/[0.06] px-4 py-2.5">
          {steps.map((step, index) => (
            <div key={step} className="flex items-center gap-1.5">
              <span
                className={cn(
                  "flex h-4 w-4 items-center justify-center rounded-full font-mono text-[0.5rem] font-bold",
                  index <= 1
                    ? "bg-accent/30 text-accent"
                    : "bg-white/[0.06] text-white/30",
                )}
              >
                {index + 1}
              </span>
              <span
                className={cn(
                  "text-[0.55rem] tracking-wide",
                  index <= 1 ? "text-white/50" : "text-white/20",
                )}
              >
                {step}
              </span>
              {index < steps.length - 1 ? (
                <span className="mx-0.5 text-[0.5rem] text-white/15">&gt;</span>
              ) : null}
            </div>
          ))}
        </div>

        <div className="flex min-h-0 flex-1">
          <div className="flex-1 space-y-3 px-4 py-3">
            <div className="space-y-2">
              <div className="h-1.5 w-28 rounded-full bg-white/[0.1]" />
              <div className="grid grid-cols-2 gap-2">
                {[
                  { label: 52, value: 40 },
                  { label: 38, value: 56 },
                ].map((field, index) => (
                  <div key={index} className="space-y-1">
                    <div
                      className="h-1.5 rounded-full bg-white/[0.07]"
                      style={{ width: `${field.label}%` }}
                    />
                    <div className="h-6 rounded-md border border-white/[0.06] bg-white/[0.03]">
                      <div
                        className="mt-2 ml-2 h-1.5 rounded-full bg-white/10"
                        style={{ width: `${field.value}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <div className="h-1.5 w-20 rounded-full bg-white/[0.1]" />
              <div className="grid grid-cols-2 gap-2">
                {[
                  { label: 44, value: 30 },
                  { label: 50, value: 34 },
                ].map((field, index) => (
                  <div key={index} className="space-y-1">
                    <div
                      className="h-1.5 rounded-full bg-white/[0.07]"
                      style={{ width: `${field.label}%` }}
                    />
                    <div className="h-6 rounded-md border border-white/[0.06] bg-white/[0.03]">
                      <div
                        className="mt-2 ml-2 h-1.5 rounded-full bg-white/10"
                        style={{ width: `${field.value}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-2 pt-1">
              {["Detached", "1 wall", "2 walls"].map((_, index) => (
                <div
                  key={index}
                  className={cn(
                    "h-8 flex-1 rounded-lg border",
                    index === 0
                      ? "border-accent/30 bg-accent/[0.08]"
                      : "border-white/[0.06] bg-white/[0.02]",
                  )}
                >
                  <div
                    className={cn(
                      "mt-3 mx-auto h-1.5 w-3/5 rounded-full",
                      index === 0 ? "bg-accent/35" : "bg-white/[0.08]",
                    )}
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="w-[38%] border-l border-white/[0.06] px-3 py-3">
            <div className="rounded-xl border border-warm/20 bg-warm/[0.04] px-3 py-3">
              <div className="mb-1 h-1.5 w-16 rounded-full bg-white/[0.08]" />
              <div className="flex items-baseline gap-1.5">
                <span className="font-mono text-[0.7rem] font-bold text-warm/80">
                  6 000
                </span>
                <span className="text-[0.5rem] text-warm/50">W</span>
              </div>
              <div className="mt-2 space-y-1">
                <div className="h-1.5 w-full rounded-full bg-white/[0.06]" />
                <div className="h-1.5 w-3/4 rounded-full bg-white/[0.05]" />
              </div>
            </div>

            <div className="mt-3 flex gap-2">
              <div className="h-7 flex-1 rounded-md bg-accent/20">
                <div className="mt-2.5 mx-auto h-1.5 w-2/3 rounded-full bg-accent/50" />
              </div>
              <div className="h-7 flex-1 rounded-md border border-white/[0.06] bg-white/[0.03]">
                <div className="mt-2.5 mx-auto h-1.5 w-1/2 rounded-full bg-white/10" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function CalcFlowVisual() {
  const steps = [
    {
      number: "1",
      label: "Building",
      fields: [
        { label: 68, value: 32 },
        { label: 54, value: 24 },
        { label: 46, value: 28 },
      ],
    },
    {
      number: "2",
      label: "Estimation",
      fields: [
        { label: 60, value: 36 },
        { label: 52, value: 30 },
      ],
      hasResult: true,
    },
    {
      number: "3",
      label: "System",
      fields: [
        { label: 48, value: 40 },
      ],
    },
  ];

  return (
    <div className="absolute inset-0 p-5 sm:p-6">
      <div className="flex h-full flex-col gap-2.5">
        <div className="flex items-center gap-2">
          <div className="h-2 w-20 rounded-full bg-accent/45" />
          <div className="ml-auto h-2 w-2 rounded-full bg-warm/40" />
        </div>

        <div className="grid flex-1 grid-cols-3 gap-2.5">
          {steps.map((step) => (
            <div
              key={step.number}
              className="flex flex-col rounded-xl border border-white/[0.07] bg-white/[0.025] p-3"
            >
              <div className="mb-2.5 flex items-center gap-2">
                <span className="flex h-5 w-5 items-center justify-center rounded-md bg-accent/20 font-mono text-[0.6rem] font-semibold text-accent/80">
                  {step.number}
                </span>
                <div
                  className="h-1.5 rounded-full bg-white/[0.12]"
                  style={{ width: `${step.label === "Building" ? 60 : step.label === "Estimation" ? 72 : 48}%` }}
                />
              </div>

              <div className="space-y-2">
                {step.fields.map((field, fieldIndex) => (
                  <div key={fieldIndex} className="flex items-center gap-2">
                    <div
                      className="h-1.5 rounded-full bg-white/[0.08]"
                      style={{ width: `${field.label}%` }}
                    />
                    <div
                      className="h-5 rounded-md border border-white/[0.06] bg-white/[0.03]"
                      style={{ width: `${field.value}%` }}
                    >
                      <div className="mt-1.5 ml-1.5 h-1.5 w-3/5 rounded-full bg-white/10" />
                    </div>
                  </div>
                ))}
              </div>

              {step.hasResult ? (
                <div className="mt-auto pt-3">
                  <div className="rounded-lg border border-accent/20 bg-accent/[0.06] px-2 py-2">
                    <div className="mb-1.5 h-1.5 w-2/3 rounded-full bg-accent/30" />
                    <div className="h-1.5 w-2/5 rounded-full bg-white/10" />
                  </div>
                </div>
              ) : null}
            </div>
          ))}
        </div>

        <div className="flex items-center rounded-xl border border-white/[0.07] bg-white/[0.025] px-4 py-3">
          <div className="h-8 w-8 rounded-lg border border-white/[0.06] bg-white/[0.04]" />
          <div className="ml-3 space-y-1.5">
            <div className="h-1.5 w-24 rounded-full bg-white/[0.12]" />
            <div className="h-1.5 w-16 rounded-full bg-warm/25" />
          </div>
          <div className="ml-auto rounded-md bg-accent/20 px-3 py-1.5">
            <div className="h-1.5 w-10 rounded-full bg-accent/50" />
          </div>
        </div>
      </div>
    </div>
  );
}

function ChessVisual() {
  const squares = Array.from({ length: 64 }, (_, index) => index);

  return (
    <div className="absolute inset-0 flex items-center justify-center p-6 sm:p-10">
      <div className="relative aspect-square w-[min(100%,18rem)] overflow-hidden rounded-2xl border border-white/[0.08] shadow-[0_0_60px_-20px_rgba(125,207,182,0.35)]">
        <div className="grid h-full w-full grid-cols-8 grid-rows-8">
          {squares.map((square) => {
            const row = Math.floor(square / 8);
            const col = square % 8;
            const dark = (row + col) % 2 === 1;
            const accent =
              (row === 3 && col === 4) || (row === 4 && col === 3);

            return (
              <div
                key={square}
                className={cn(
                  dark ? "bg-white/[0.07]" : "bg-white/[0.02]",
                  accent && "bg-accent/25",
                )}
              />
            );
          })}
        </div>
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(228,201,162,0.12),transparent_45%)]" />
      </div>
    </div>
  );
}

function PerformanceVisual() {
  return (
    <div className="absolute inset-0 p-6 sm:p-8">
      <div className="flex h-full flex-col gap-2">
        <div className="mb-2 flex items-center gap-3">
          <div className="h-2 w-16 rounded-full bg-accent/40" />
          <div className="h-2 w-10 rounded-full bg-white/10" />
        </div>
        {Array.from({ length: 9 }, (_, index) => (
          <div
            key={index}
            className="flex items-center gap-3 rounded-md border border-white/[0.05] bg-white/[0.02] px-3 py-2"
            style={{ opacity: 1 - index * 0.07 }}
          >
            <span className="font-mono text-[0.65rem] text-accent/70">
              {String(index + 1).padStart(3, "0")}
            </span>
            <div
              className="h-1.5 rounded-full bg-gradient-to-r from-white/20 to-white/[0.04]"
              style={{ width: `${72 - index * 5}%` }}
            />
            <div className="ml-auto h-1.5 w-8 rounded-full bg-warm/30" />
          </div>
        ))}
      </div>
    </div>
  );
}

const visuals: Record<ProjectVisualKind, () => ReactElement> = {
  dashboard: DashboardVisual,
  crm: CrmVisual,
  adminShell: AdminShellVisual,
  sizingFlow: SizingFlowVisual,
  calcFlow: CalcFlowVisual,
  chess: ChessVisual,
  performance: PerformanceVisual,
};

export function ProjectVisual({ kind, className }: ProjectVisualProps) {
  const Visual = visuals[kind];

  return (
    <div
      aria-hidden
      className={cn(
        "relative aspect-[4/3] overflow-hidden rounded-2xl border border-border bg-[#0a0c0f] text-white dark:bg-[#0a0c0f]",
        "shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]",
        "before:pointer-events-none before:absolute before:inset-0 before:bg-[radial-gradient(ellipse_at_top_right,rgba(125,207,182,0.1),transparent_55%)]",
        "after:pointer-events-none after:absolute after:inset-0 after:opacity-[0.035] after:bg-[url('data:image/svg+xml,%3Csvg viewBox=\"0 0 256 256\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cfilter id=\"n\"%3E%3CfeTurbulence type=\"fractalNoise\" baseFrequency=\"0.85\" numOctaves=\"4\" stitchTiles=\"stitch\"/%3E%3C/filter%3E%3Crect width=\"100%25\" height=\"100%25\" filter=\"url(%23n)\"/%3E%3C/svg%3E')]",
        className,
      )}
    >
      <div className="grid-fade absolute inset-0 opacity-40" />
      <Visual />
    </div>
  );
}
