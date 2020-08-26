function randomInteger(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}

const covers = [
    '7 rings.jpg',
    'China.jpg',
    'Con Altura.jpg',
    'Con Calma.jpg',
    'Kill This Love.jpg',
    'No Me Conoce.jpg',
    'Secreto.jpg',
    'Señorita.jpg'
];

const videos = [
    {
        "title": "Playbuzz Embed!",
        "type": "video",
        "source": "playbuzz",
        "videoId": "fde413bc-ce0c-40fc-8661-bedca85021ec",
        "views": 14569666,
        "length": 210,
        "date": 1558483200
    },
    {
        "title": "Playbuzz Embed!",
        "type": "video",
        "source": "playbuzz",
        "videoId": "f6ae98a0-1a4a-460f-bed7-08af4722b90e",
        "views": 14569666,
        "length": 210,
        "date": 1558483200
    },
    {
        "title": "Playbuzz Embed!",
        "type": "video",
        "source": "playbuzz",
        "videoId": "d9b8c2c9-7861-4c72-a380-1825db3161ec",
        "views": 14569666,
        "length": 210,
        "date": 1558483200
    },
    {
        "title": "Playbuzz Embed!",
        "type": "video",
        "source": "playbuzz",
        "videoId": "a667cd98-6f0c-4006-a7c1-311b7685496d",
        "views": 14569666,
        "length": 210,
        "date": 1558483200
    },
    {
        "title": "How to prepare a great beer",
        "type": "video",
        "source": "facebook",
        "videoId": "1052114818157758",
        "views": 4569654,
        "length": 210,
        "date": 1558483200
    },
    {
        "type": "video",
        "source": "url",
        "url": "http://cdn.playbuzz.com/content/feed/video-1.mp4",
        "views": 8820,
        "length": 210,
        "date": 1558483200
    },
    {
        "title": "Be a winner!",
        "type": "video",
        "source": "youtube",
        "views": 12451409,
        "length": 210,
        "date": 1558483200
    },
    {
        "title": "Top 10 fastest cars in the world",
        "type": "video",
        "source": "youtube",
        "videoId": "h8MbhS5XKow",
        "views": 25560867,
        "length": 210,
        "date": 1558483200
    },
    {
        "title": "A funny dog barking",
        "type": "video",
        "source": "youtube",
        "videoId": "MveqXxB12YA",
        "views": 4287171,
        "length": 210,
        "date": 1558483200
    }
];

function createVideoData() {
    const i = randomInteger(0, videos.length - 1);
    return ({
        title: videos[i].title,
        source: videos[i].source,
        videoId: videos[i].videoId,
        views: videos[i].views,
        length: videos[i].length,
        date: videos[i].date
    });
}

const createVideosPack = quantity  => Array.apply(null, {length: quantity}).map(()=>({
    ...createVideoData(),
    type: "video",
    id: `${Math.random()}_${new Date().toDateString()}`,
    cover: `/assets/video-covers/${covers[randomInteger(0, covers.length - 1)]}`
}));

exports.createVideosPack = createVideosPack;