export const isValidURL = (url: string) => {
  try {
    new URL(url);
  } catch (e) {
    console.error(e);
    return false;
  }
  return true;
};

export const isExternalURL = (
  href: string,
  loc: Location
) => {
  if(!document) {
    return isExternalURL2(href, loc);
  }

  const tmp = document.createElement('a');
  tmp.href = href;

  return (tmp.host !== loc.host)
};

export const isExternalURL2 = (
  href: string,
  loc: Location
) => (
  isValidURL(href) && (
    (new URL(href)).origin !== loc.origin
  )
);

export const safeLink = (href: string, protocol = "https:") => {
  if(document) {
    const tmp = document.createElement('a');
    tmp.href = href;

    return tmp.href;
  }

  const _protocol = window?.location?.protocol || protocol;

  return href.replace(/^(\/\/)/g, `${_protocol}//`);
}

export default {
  isExternalURL,
  isExternalURL2,
  isValidURL
};
