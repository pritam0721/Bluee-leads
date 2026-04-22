export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(" ");
}

export function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export function truncate(text: string, length: number): string {
  if (text.length <= length) return text;
  return text.slice(0, length).trimEnd() + "…";
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9 -]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

export function calculateSavings(agents: number): {
  ukCost: number;
  blmlCost: number;
  savings: number;
  savingsPercent: number;
} {
  const ukMonthlySalary = 2083; // ~£25k/yr per agent
  const ukCost = agents * ukMonthlySalary;
  const blmlRate = agents * 750; // BPO rate per agent/month
  const savings = ukCost - blmlRate;
  const savingsPercent = Math.round((savings / ukCost) * 100);
  return { ukCost, blmlCost: blmlRate, savings, savingsPercent };
}
