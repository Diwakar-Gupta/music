$(function () {

    $(document.getElementById('search')).on('click',function(){
        let value = $(this).val().toLowerCase();

        $.ajax({
            type:'GET',
            url : "/searchSong",
            data : {
                what:value,
                csrfmiddlewaretoken:$('input[name=csrfmiddlewaretoken]').val()  
            },
            success : function(dat){
                


            }
        });

    }

    $('.fa-play-circle').on('click',function(e){
        e.preventDefault();
        pk = $(this).attr('pk');
        
        getSong(pk);
    });
    

    $('.icon-control-play').on('click',function(e){
        e.preventDefault();
        pk = $(this).attr('pk');
        getAlbum(pk);
    })

});

function showAlbum(data){
    let container=$($('#albumContainer')[0]);

    container.append(' <div class="col-xs-6 col-sm-4 col-md-3 col-lg-2">    <div class="item">        <div class="pos-rlt">            <div class="bottom"><span                    class="badge bg-info m-l-sm m-b-sm">03:20</span></div>            <div class="item-overlay opacity r r-2x bg-black">                <div class="text-info padder m-t-sm text-sm"><i                        class="fa fa-star"></i> <i class="fa fa-star"></i> <i                        class="fa fa-star"></i> <i class="fa fa-star"></i> <i                        class="fa fa-star-o text-muted"></i></div>                <div class="center text-center m-t-n"><i pk=1                        class="icon-control-play i-2x"></i></div>                <div class="bottom padder m-b-sm"><a                        href="##"                        class="pull-right"> <i class="fa fa-heart-o"></i> </a> <a                        href="##"> <i                        class="fa fa-plus-circle"></i> </a></div>            </div>            <a href="##"><img                    src='+data[2]+' alt=""                    class="r r-2x img-full"></a></div>        <div class="padder-v"><a href="##"                                 class="text-ellipsis">'+data[0]+'</a> <a                href="##"                class="text-ellipsis text-xs text-muted">'+data[1]+'</a></div>    </div></div>');

}

function addToPlayList(){
    alert('fff')
}