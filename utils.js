export const isIos = () => {
  const userAgent = window.navigator.userAgent.toLowerCase();
  return /ipad|iphone|ipod/.test(userAgent);
};

export const isStandalone = () => {
  return "standalone" in window.navigator && window.navigator.standalone;
}
/*
isInWebAppiOS = (window.navigator.standalone == true);
isInWebAppChrome = (window.matchMedia('(display-mode: standalone)').matches);
*/