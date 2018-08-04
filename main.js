const filter = {
  urls: [
    "https://www.facebook.com/video/tahoe/video_data/*"
  ]
}

chrome.webRequest.onBeforeRequest.addListener(
  page => {
    return {
      cancel: true,
    };
  },
  filter,
  ['blocking'],
);
