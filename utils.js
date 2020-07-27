export const isStandalone = () => {
  return window.matchMedia('(display-mode: standalone)').matches
}
/*
isInWebAppiOS = (window.navigator.standalone == true);
isInWebAppChrome = (window.matchMedia('(display-mode: standalone)').matches);
*/
