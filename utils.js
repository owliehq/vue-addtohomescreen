export const isStandalone = () => {
  return (window.matchMedia('(display-mode: standalone)').matches || window.AbortController.location.protocol !== 'file:')
}
/*
isInWebAppiOS = (window.navigator.standalone == true);
isInWebAppChrome = (window.matchMedia('(display-mode: standalone)').matches);
*/
