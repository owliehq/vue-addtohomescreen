export const isStandalone = () => {
  return 'standalone' in window.navigator && window.navigator.standalone
}
/*
isInWebAppiOS = (window.navigator.standalone == true);
isInWebAppChrome = (window.matchMedia('(display-mode: standalone)').matches);
*/
