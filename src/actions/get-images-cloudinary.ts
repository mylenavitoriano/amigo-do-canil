export async function fetchCloudinaryImages(folder: string) {
  const res = await fetch(`/api/cloudinary/list?folder=${folder}`);
  if (!res.ok) throw new Error("Erro ao buscar imagens");
  return res.json();
}
