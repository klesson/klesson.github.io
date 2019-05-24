(function() {
    var currentPage = 1;
    window.onload = function() { 
        function setPage() {
            console.log('set page', currentPage);
            var newSrc = './img/' + currentPage + '.png'
            document.getElementById('image').setAttribute('src', newSrc);
        }       
        document.getElementById('button-next').addEventListener('click', function () {            
            if( currentPage < 21) {
                currentPage += 1;
                setPage();
            }
        });

        document.getElementById('button-prev').addEventListener('click', function () {            
            if( currentPage > 1) {
                currentPage -= 1;
                setPage();
            }
        });
    }
})();