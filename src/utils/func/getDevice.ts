export function getDeviceModel(): string {
   var os = function () {
      var ua = navigator.userAgent,
         isWindowsPhone = /(?:Windows Phone)/.test(ua),
         isSymbian = /(?:SymbianOS)/.test(ua) || isWindowsPhone,
         isAndroid = /(?:Android)/.test(ua),
         isFireFox = /(?:Firefox)/.test(ua),
         isChrome = /(?:Chrome|CriOS)/.test(ua),
         isTablet = /(?:iPad|PlayBook)/.test(ua) || (isAndroid && !/(?:Mobile)/.test(ua)) || (isFireFox && /(?:Tablet)/.test(ua)),
         isPhone = /(?:iPhone)/.test(ua) && !isTablet,
         isPc = !isPhone && !isAndroid && !isSymbian;
      return {
         isTablet: isTablet,
         isPhone: isPhone,
         isAndroid: isAndroid,
         isPc: isPc
      };
   }();

   if (os.isAndroid || os.isPhone) {
      return "phone";
   } else if (os.isTablet) {
      return "tablet";
   } else if (os.isPc) {
      return "pc";
   }

   return "unknown";

}

// 使用示例
