$(function(){

    $("#elastic_grid_demo").elastic_grid({
        'items' :
        [
            {
                'title'         : 'Title #1',
                'description'   : ' Description text here',
                'thumbnail'     : ['images/small/1.jpg', 'images/small/2.jpg', 'images/small/4.jpg', 'images/small/5.jpg'],
                'large'         : ['images/large/1.jpg', 'images/large/2.jpg', 'images/large/4.jpg', 'images/large/5.jpg'],
                'button_list'   :
                [
                    { 'title':'Demo', 'url' : 'http://bonchen.net/' },
                    { 'title':'Download', 'url':'http://porfolio.bonchen.net/'}
                ],
                'tags'          : ['Portrait']
            },
            {
                'title'         : 'Title #2',
                'description'   : 'Description text here',
                'thumbnail'     : ['images/small/4.jpg', 'images/small/5.jpg'],
                'large'         : ['images/large/4.jpg', 'images/large/5.jpg'],
                'button_list'   :
                [
                    { 'title':'Demo', 'url' : 'http://bonchen.net/' },
                    { 'title':'Download', 'url':'http://porfolio.bonchen.net/'}
                ],
                'tags'          : ['Vintage']
            },
            {
                'title'         : 'Title #3',
                'description'   : 'Description text here',
                'thumbnail'     : ['images/small/15.jpg', 'images/small/2.jpg'],
                'large'         : ['images/large/15.jpg', 'images/large/2.jpg'],
                'button_list'   :
                [
                    { 'title':'Demo', 'url' : 'http://bonchen.net/' },
                    { 'title':'Download', 'url':'http://porfolio.bonchen.net/'}
                ],
                'tags'          : ['BW']
            }
        ]
    });
});