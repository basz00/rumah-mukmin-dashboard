export const mapRegistrationCategory = (
  category: string | null | undefined,
) => {
  if (category === "NEW_REGISTRATION") {
    return "Pendaftar baru";
  }
  if (category === "RE_REGISTRATION") {
    return "Pendaftar kembali";
  }
  if (category === "REGULAR_REGISTRATION") {
    return "Pendaftar rutin/lanjutan";
  }
  return category;
};
