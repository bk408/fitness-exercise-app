export const exerciseOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "79f0558b5emshaf559b0ca6daafbp114572jsnfc3edf53dc18",
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};

 export const youtubeOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "79f0558b5emshaf559b0ca6daafbp114572jsnfc3edf53dc18",
    "X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com",
  },
};

export const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json();

  return data;
};
