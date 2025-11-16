import { clsx } from "clsx";

export function SparkIcon({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={clsx("size-4", className)}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8 1L9.4 5.2L13 6L9.4 6.8L8 11L6.6 6.8L3 6L6.6 5.2L8 1Z"
        stroke="currentColor"
        strokeLinejoin="round"
      />
    </svg>
  );
}
