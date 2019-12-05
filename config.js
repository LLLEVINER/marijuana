var config = {
    style: 'mapbox://styles/llleviner/ck24p7r1i5l6a1ck0xsgybkwk',
    accessToken: 'pk.eyJ1IjoibGxsZXZpbmVyIiwiYSI6ImNqMGd1b3FvZjAwYXYzM3VqYWU1dWE4dzkifQ.VoYntMR5DrqojWJAPW3nQA',
    showMarkers: false,
    theme: 'dark',
    alignment: 'left',
    title: '',
    subtitle: '',
    byline: '',
    footer: '-MARIJUANA JUSTICE-',
    chapters: [
        {
            id: 'slug-style-id',
            title: 'St.Vincent Homeless Farming Shelter',
            image: 'storytelling/axon2.jpg',
            description: 'St. Vincent De Paul Community Center, one of the biggest homeless shelters in West Oakland, locates inside the site. By offering food and bedding services to homeless people, the community center becomes the main attractor of homeless people gathering around the community.  ',
            location: {
                center: [-122.274, 37.814],
                zoom: 17,
                pitch: 70,
                bearing: 5
            },
            onChapterEnter: [],
            onChapterExit: []
        },


        {
            id: 'other-identifier',
            title: 'CityFarm Downtown Homeless Center',
            image: 'storytelling/axon1.jpg',
            description: 'According to the site analysis, the use of marijuana and market situation of cannabis are both pretty active in the area. ',
            location: {
                center: [-122.273, 37.802],
                zoom: 17,
                pitch: 80,
                bearing: 5
            },
            onChapterEnter: [],
            onChapterExit: []
        },

        {
            id: 'identifier3',
            title: 'Merrit Park Encampment Farming Shelter',
            image: 'storytelling/axon3.jpg',
            description: 'The homeless encampments are occupying the lower space of freeway and vacant lands in the community, which leads to health, social security, social sanitary issues. ',
            location: {
                center: [-122.258, 37.807],
                zoom: 16.56,
                pitch: 80,
                bearing: 5
            },
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};
