/*------Task 40 ------
Album: Write a function called make_album() that builds a Object describing a music album. The function should take in an artist name and an album title, and it should return a Object containing these two pieces of information. Use the function to make three dictionaries representing different albums. Print each return value to show that Objects are storing the album information correctly. Add an optional parameter to make_album() that allows you to store the number of tracks on an album. If the calling line includes a value for the number of tracks, add that value to the album’s Object. Make at least one new function call that includes the number of tracks on an album.
*/
let make_album = function (artistName, albumTitle, tracks = 0) {
  const musicAlbum = {
    artistName: `${artistName}`,
    albumTitle: `${albumTitle}`,
  };
  if (tracks > 0) {
    const trackOptionalObject = { tracks: tracks };
    Object.assign(musicAlbum, trackOptionalObject);
  }
  return musicAlbum;
};
console.log(make_album("Adele", "Hello"));
console.log(make_album("Marshmello", "Happier"));
console.log(make_album("Marshmello", "Alone"));

console.log(make_album("adele", "Hello", 1));
console.log(make_album("adele", "Hello", 0));
console.log(make_album("adele", "Hello", -1));
