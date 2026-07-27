const MONTH_YEAR: Intl.DateTimeFormatOptions = {
  year: 'numeric',
  month: 'short',
};

export function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString('en-US', MONTH_YEAR);
}

export function formatRange(start: string, end: string | null): string {
  return `${formatDate(start)} — ${end ? formatDate(end) : 'Present'}`;
}
