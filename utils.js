export const isStandalone = () => {
  return (window.matchMedia('(display-mode: standalone)').matches || (window.location && window.location.protocol === 'file:'))
}
/*
isInWebAppiOS = (window.navigator.standalone == true);
isInWebAppChrome = (window.matchMedia('(display-mode: standalone)').matches);
*/
