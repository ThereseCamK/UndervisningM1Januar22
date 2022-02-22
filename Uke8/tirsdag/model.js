//tittel
//artist
//varighet
//sjanger
//album

const model = {

    totalPrice: 0,
    mainTitle: 'SPOTIFY',
    srcSong:'',

    songs:[
        {
            title: 'Californication',
            artist: 'Red Hot chili peppers',
            duration: '5,29',
            genre: 'rock',
            album: 'Californication',
            picture: 'https://image.tmdb.org/t/p/w780/j31IcvZpmKko4jC6kWJHqK9WNii.jpg',
            // price: 120,
            // instoc: 5,
        },
        {
            title: 'In the mood',
            artist: 'Glenn Miller',
            duration: '3,36',
            genre: 'jazz',
            album: 'The essaential Glenn Miller',
            picture: '',
        },
        {
            title: 'Arne går mot døra',
            artist: 'bare egil Band',
            duration: '3,16',
            genre: 'humor',
            album: 'egil' ,
            picture: '',
        }, 
        {
            title: 'Pepsi Power',
            artist: 'Fattern',
            duration: '2.28',
            genre: 'kunst',
            album: 'baderomsbaluba',
            picture: '',
        }

    ],

    inputs:{
        title: '',
        artist: '',
        duration: '',
        genre: '',
        album: '',
    }

}