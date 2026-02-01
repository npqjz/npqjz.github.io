export async function imgResize(imgUrl: string, canvas: HTMLCanvasElement): Promise<{ scaleX: number; scaleY: number }> {

   const img = new Image();
   img.src = imgUrl;

   await img.decode();

   // 获取图像的原始尺寸
   const originalWidth = img.naturalWidth;
   const originalHeight = img.naturalHeight;

   // 计算缩放比，选择最小的比率以保证图像完整适应画布
   const scaleX = canvas.width / originalWidth;
   const scaleY = canvas.height / originalHeight;
   const scale = Math.min(scaleX, scaleY);

   // 返回新的宽度和高度
   return { scaleX: scale, scaleY: scale };
}