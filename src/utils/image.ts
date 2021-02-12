export function getBase64(
  img: Blob,
  callback: (imageUrl: string | ArrayBuffer | null) => any
): void {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
}
