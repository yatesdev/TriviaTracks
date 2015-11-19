(function($) {

    'use strict';

    $(document).ready(function() {
        // Initializes search overlay plugin.
        // Replace onSearchSubmit() and onKeyEnter() with 
        // your logic to perform a search and display results
        $(".list-view-wrapper").scrollbar();

        $('[data-pages="search"]').search({
            // Bind elements that are included inside search overlay
            searchField: '#overlay-search',
            closeButton: '.overlay-close',
            suggestions: '#overlay-suggestions',
            brand: '.brand',
             // Callback that will be run when you hit ENTER button on search box
            onSearchSubmit: function(searchString) {
                console.log("Search for: " + searchString);
            },
            // Callback that will be run whenever you enter a key into search box. 
            // Perform any live search here.  
            onKeyEnter: function(searchString) {
                console.log("Live search for: " + searchString);
                var searchField = $('#overlay-search');
                var searchResults = $('.search-results');

                /* 
                    Do AJAX call here to get search results
                    and update DOM and use the following block 
                    'searchResults.find('.result-name').each(function() {...}'
                    inside the AJAX callback to update the DOM
                */
                $.ajax({
                    url: 'https://api.spotify.com/v1/search/',
                    type: 'GET',
                    dataType: 'json',
                    data: {q: searchString, type: 'track', market: 'US',limit:"16"},
                })
                .done(function(response) {
                    console.log("success");
                    var appendString = "";
                    for(var i =0;i < response.tracks.items.length-1;i++){
                        appendString += '<div class="col-md-4 result-item overflow-ellipsis" data-target="#modalSlideUp" data-toggle="modal">'+
                                            '<div class="thumbnail-wrapper d48 inline m-t-10">'+
                                                '<img class="result-album-art" src="'+response.tracks.items[i].album.images[1].url+'"/>'+
                                            '</div>'+
                                            '<div class="p-l-10 inline p-t-0">'+
                                                '<h5 class="m-b-5 semi-bold result-trackname">'+response.tracks.items[i].name+'</h5>'+ 
                                                '<p class="hint-text result-artist">'+response.tracks.items[i].artists[0].name+'</p>'+
                                                '<div class="result-spotify-id hidden">'+response.tracks.items[i].id+'</div>'+
                                            '</div>'+
                                        '</div>';
                    }
                    searchResults.find('.row').empty();
                    searchResults.find('.row').append(appendString);
                    $('.result-item').click(function() {
                        $('.modal-body-title').html($(this).find('.result-trackname').html());
                        $('.modal-body-artist').html($(this).find('.result-artist').html());
                        $('.modal-body-album-art').html($(this).find('.result-album-art').attr("src"));
                        $('.modal-body-spotify-id').html($(this).find('.result-spotify-id').html());
                    });

                    $('#confirmRequestBtn').click(function() {
                        $('#requestForm_track_title').val($('.modal-body-title').html());
                        $('#requestForm_track_artist').val($('.modal-body-artist').html());
                        $('#requestForm_album_art').val($('.modal-body-album-art').html());
                        $('#requestForm_spotify_id').val($('.modal-body-spotify-id').html());
                        $('#requestForm').submit();
                        // $('#requestForm').submit(function(){
                        //     $('body').pgNotification("bar","Request successful","top","success",false,2000,null,null,null,null).show();
                        // });
                    });
                })
                .fail(function(data) {
                    console.log("error");
                })
                .always(function( data ) {
                    console.log("complete", data);
                });
            }
        })

    });

    
    $('.panel-collapse label').on('click', function(e){
        e.stopPropagation();
    })
    
})(window.jQuery);