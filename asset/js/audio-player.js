//data
Amplitude.init({
    "songs": [
        {
            "name": "Risin' High (feat Raashan Ahmad)",
            "artist": "Ancient Astronauts",
            "album": "We Are to Answer",
            "url": "https://521dimensions.com/songs/Ancient Astronauts - Risin' High (feat Raashan Ahmad).mp3",
            "cover_art_url": "https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg"
        },
        {
            "name": "The Gun",
            "artist": "Lorn",
            "album": "Ask The Dust",
            "url": "https://521dimensions.com/songs/08 The Gun.mp3",
            "cover_art_url": "https://521dimensions.com/img/open-source/amplitudejs/album-art/ask-the-dust.jpg"
        },
        {
            "name": "Anvil",
            "artist": "Lorn",
            "album": "Anvil",
            "url": "https://521dimensions.com/songs/LORN - ANVIL.mp3",
            "cover_art_url": "https://521dimensions.com/img/open-source/amplitudejs/album-art/anvil.jpg"
        },
        {
            "name": "I Came Running",
            "artist": "Ancient Astronauts",
            "album": "We Are to Answer",
            "url": "https://521dimensions.com/songs/ICameRunning-AncientAstronauts.mp3",
            "cover_art_url": "https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg"
        },
        {
            "name": "First Snow",
            "artist": "Emancipator",
            "album": "Soon It Will Be Cold Enough",
            "url": "https://521dimensions.com/songs/FirstSnow-Emancipator.mp3",
            "cover_art_url": "https://521dimensions.com/img/open-source/amplitudejs/album-art/soon-it-will-be-cold-enough.jpg"
        }
    ]
});

var addToPlaylistButtons = document.getElementsByClassName('add-to-playlist-button');

for (var i = 0; i < addToPlaylistButtons.length; i++) {
    /*
      Add an event listener to the add to playlist button.
    */
    addToPlaylistButtons[i].addEventListener('click', function () {
        var songToAddIndex = this.getAttribute('song-to-add');

        /*
          Adds the song to Amplitude, appends the song to the display,
          then rebinds all of the AmplitudeJS elements.
        */
        var newIndex = Amplitude.addSong(songsToAdd[songToAddIndex]);
        appendToSongDisplay(songsToAdd[songToAddIndex], newIndex);
        Amplitude.bindNewElements();

        /*
          Removes the container that contained the add to playlist button.
        */
        var songToAddRemove = document.querySelector('.song-to-add[song-to-add="' + songToAddIndex + '"]');
        songToAddRemove.parentNode.removeChild(songToAddRemove);
    });
}

/*
  Appends the song to the display.
*/
function appendToSongDisplay(song, index) {
    /*
      Grabs the playlist element we will be appending to.
    */
    var playlistElement = document.querySelector('.white-player-playlist');

    /*
      Creates the playlist song element
    */
    var playlistSong = document.createElement('div');
    playlistSong.setAttribute('class', 'white-player-playlist-song amplitude-song-container amplitude-play-pause');
    playlistSong.setAttribute('data-amplitude-song-index', index);

    /*
      Creates the playlist song image element
    */
    var playlistSongImg = document.createElement('img');
    playlistSongImg.setAttribute('src', song.cover_art_url);

    /*
      Creates the playlist song meta element
    */
    var playlistSongMeta = document.createElement('div');
    playlistSongMeta.setAttribute('class', 'playlist-song-meta');

    /*
      Creates the playlist song name element
    */
    var playlistSongName = document.createElement('span');
    playlistSongName.setAttribute('class', 'playlist-song-name');
    playlistSongName.innerHTML = song.name;

    /*
      Creates the playlist song artist album element
    */
    var playlistSongArtistAlbum = document.createElement('span');
    playlistSongArtistAlbum.setAttribute('class', 'playlist-song-artist');
    playlistSongArtistAlbum.innerHTML = song.artist + ' &bull; ' + song.album;

    /*
      Appends the name and artist album to the playlist song meta.
    */
    playlistSongMeta.appendChild(playlistSongName);
    playlistSongMeta.appendChild(playlistSongArtistAlbum);

    /*
      Appends the song image and meta to the song element
    */
    playlistSong.appendChild(playlistSongImg);
    playlistSong.appendChild(playlistSongMeta);

    /*
      Appends the song element to the playlist
    */
    playlistElement.appendChild(playlistSong);
}


//Audio player
$(".btn-play").click(function () {
    document.getElementById('audio-player').src = document.getElementById('audio-src').innerHTML;
    document.getElementById('song-title').innerHTML = document.getElementsByClassName('audio-name').innerHTML;
    debugger;
});
//Front End
//window.onload = function () {
//    if ($('#ul-best-list li').length <= 6) {
//        document.getElementById('best-list-item-control').style.visibility = "hidden";
//    }
//    if ($('#ul-album-list li').length <= 6) {
//        document.getElementById('album-list-item-control').style.visibility = "hidden";
//    }
//    if ($('#ul-artist-list li').length <= 6) {
//        document.getElementById('artist-list-item-control').style.visibility = "hidden";
//    }
//    if ($('#ul-tag-list li').length <= 6) {
//        document.getElementById('tag-list-item-control').style.visibility = "hidden";
//    }
//};

$("#best-next").click(function () {
    if ($('#ul-best-list li').length > 6) {
        var rightValue = parseInt(document.getElementById('ul-best-list').style.right.replace('px', ''));
        if (rightValue < ($('#ul-best-list li').length - 6) * 240) {
            document.getElementById('ul-best-list').style.right = (rightValue + 240).toString() + "px";
        }
        else {
            document.getElementById('ul-best-list').style.right = "0px";
        }
    }
});

$("#best-prev").click(function () {
    if ($('#ul-best-list li').length > 6) {
        var rightValue = parseInt(document.getElementById('ul-best-list').style.right.replace('px', ''));
        if (rightValue > 0) {
            document.getElementById('ul-best-list').style.right = (rightValue - 240).toString() + "px";
        }
        else {
            document.getElementById('ul-best-list').style.right = (($('#ul-best-list li').length - 6) * 240).toString() + "px";
        }
    }
});

$("#album-next").click(function () {
    if ($('#ul-album-list li').length > 6) {
        var rightValue = parseInt(document.getElementById('ul-album-list').style.right.replace('px', ''));
        if (rightValue < ($('#ul-album-list li').length - 6) * 240) {
            document.getElementById('ul-album-list').style.right = (rightValue + 240).toString() + "px";
        }
        else {
            document.getElementById('ul-album-list').style.right = "0px";
        }
    }
});

$("#album-prev").click(function () {
    if ($('#ul-album-list li').length > 6) {
        var rightValue = parseInt(document.getElementById('ul-album-list').style.right.replace('px', ''));
        if (rightValue > 0) {
            document.getElementById('ul-album-list').style.right = (rightValue - 240).toString() + "px";
        }
        else {
            document.getElementById('ul-album-list').style.right = (($('#ul-album-list li').length - 6) * 240).toString() + "px";
        }
    }
});

$("#artist-next").click(function () {
    if ($('#ul-artist-list li').length > 6) {
        var rightValue = parseInt(document.getElementById('ul-artist-list').style.right.replace('px', ''));
        if (rightValue < ($('#ul-artist-list li').length - 6) * 240) {
            document.getElementById('ul-artist-list').style.right = (rightValue + 240).toString() + "px";
        }
        else {
            document.getElementById('ul-artist-list').style.right = "0px";
        }
    }
});

$("#artist-prev").click(function () {
    if ($('#ul-artist-list li').length > 6) {
        var rightValue = parseInt(document.getElementById('ul-artist-list').style.right.replace('px', ''));
        if (rightValue > 0) {
            document.getElementById('ul-artist-list').style.right = (rightValue - 240).toString() + "px";
        }
        else {
            document.getElementById('ul-artist-list').style.right = (($('#ul-artist-list li').length - 6) * 240).toString() + "px";
        }
    }
});

$("#tag-next").click(function () {
    if ($('#ul-tag-list li').length > 6) {
        var rightValue = parseInt(document.getElementById('ul-tag-list').style.right.replace('px', ''));
        if (rightValue < ($('#ul-tag-list li').length - 6) * 240) {
            document.getElementById('ul-tag-list').style.right = (rightValue + 240).toString() + "px";
        }
        else {
            document.getElementById('ul-tag-list').style.right = "0px";
        }
    }
});

$("#tag-prev").click(function () {
    if ($('#ul-tag-list li').length > 6) {
        var rightValue = parseInt(document.getElementById('ul-tag-list').style.right.replace('px', ''));
        if (rightValue > 0) {
            document.getElementById('ul-tag-list').style.right = (rightValue - 240).toString() + "px";
        }
        else {
            document.getElementById('ul-tag-list').style.right = (($('#ul-tag-list li').length - 6) * 240).toString() + "px";
        }
    }
});

$("#show-tag-list").click(function () {
    if (document.getElementById('tag-list').style.maxHeight == "0px") {
        document.getElementById('tag-list').style.maxHeight = "500px";
    } else {
        document.getElementById('tag-list').style.maxHeight = "0px";
    }
});

$("#show-artist-list").click(function () {
    if (document.getElementById('artist-list').style.maxHeight == "0px") {
        document.getElementById('artist-list').style.maxHeight = "500px";
    } else {
        document.getElementById('artist-list').style.maxHeight = "0px";
    }
});

$("#show-album-list").click(function () {
    if (document.getElementById('album-list').style.maxHeight == "0px") {
        document.getElementById('album-list').style.maxHeight = "500px";
    } else {
        document.getElementById('album-list').style.maxHeight = "0px";
    }
});

document.getElementById('menu-button').addEventListener('click', function () {
    if (document.getElementById('menu-slide').style.visibility == "hidden") {
        document.getElementById('menu-slide').style.visibility = "visible";
        document.getElementById('menu-slide').style.opacity = 1;
    }
    else {
        document.getElementById('menu-slide').style.visibility = "hidden";
        document.getElementById('menu-slide').style.opacity = 0;
    }
});
document.getElementById('queue-button').addEventListener('click', function () {
    if (document.getElementById('queue-slide').style.visibility == "hidden") {
        document.getElementById('queue-slide').style.visibility = "visible";
        document.getElementById('queue-slide').style.opacity = 1;
    }
    else {
        document.getElementById('queue-slide').style.visibility = "hidden";
        document.getElementById('queue-slide').style.opacity = 0;
    }
});