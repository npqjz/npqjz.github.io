export const formatDatatime = (timestamp: number) => {
   // 计算时间差，返回的是天数
   // 与2024年12月23日为比较基准
   const now = new Date("2024-12-23 00:00:00").getTime();
   const diff = (timestamp - now) / 1000 / 60 / 60 / 24;
   // 取绝对值
   return Math.abs(diff).toFixed(0);
}