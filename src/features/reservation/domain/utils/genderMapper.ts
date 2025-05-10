export const mapGender = (gender: string | null | undefined) => {
  if (gender === "MAN") {
    return "Laki-laki";
  } else {
    return "Perempuan";
  }
};
