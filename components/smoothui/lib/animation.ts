export const DURATION_INSTANT = { duration: 0 };

export const SPRING_DEFAULT = {
  type: "spring" as const,
  stiffness: 260,
  damping: 24,
};

export const SPRING_SNAPPY = {
  type: "spring" as const,
  stiffness: 400,
  damping: 30,
};
