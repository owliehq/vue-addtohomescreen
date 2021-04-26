export const isStandalone = () => {
  const webappsProtocols = ['file:', 'cordova:', 'capacitor:']
  return (window.matchMedia('(display-mode: standalone)').matches || (window.location && window.location.protocol && webappsProtocols.indexOf(window.location.protocol) !== -1))
}
/*
isInWebAppiOS = (window.navigator.standalone == true);
isInWebAppChrome = (window.matchMedia('(display-mode: standalone)').matches);
*/
