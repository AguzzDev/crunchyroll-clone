export const formatDate = (date) => {
  return new Date(date).toLocaleDateString("es-ES", { dateStyle: "long" })
}
