function make_album(artist, title, tracks) {
    var album = { artist: artist, title: title };
    if (tracks) {
        var album_1 = tracks = tracks;
    }
    return album;
}
console.log(make_album("Artist One", "The First Album"));
console.log(make_album("Artist Two", "The Second Album"));
console.log(make_album("Artist Three", "The Third Album", 12));
