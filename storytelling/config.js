var config = {
    style: 'mapbox://styles/llleviner/ck24p7r1i5l6a1ck0xsgybkwk',
    accessToken: 'pk.eyJ1IjoibGxsZXZpbmVyIiwiYSI6ImNqMGd1b3FvZjAwYXYzM3VqYWU1dWE4dzkifQ.VoYntMR5DrqojWJAPW3nQA',
    showMarkers: false,
    theme: 'dark',
    alignment: 'left',
    title: 'Marijuana Justice in Oakland',
    subtitle: 'Build dignity for homeless people through cannabis farming',
    byline: 'By JJ LAI',
    footer: 'Source: source citations, etc.',
    chapters: [
        {
            id: 'slug-style-id',
            title: 'Homelessness in Oakland',
            image: 'homeless encampment.jpg',
            description: 'According to the 2019 Alameda County Homeless Count, Oakland’s homeless residents made up 52.7% of Alameda County’s total homeless population, grew to a total of 3,451 residents. An estimated 68% of Oakland’s homeless residents were Black or African American, despite Black residents only composing 26% of the overall City population. Housing and mental illness are two most significant reasons why people become homeless. ',
            location: {
                center: [-122.274, 37.814],
                zoom: 18,
                pitch: 70,
                bearing: 5
            },
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'other-identifier',
            title: 'Second Title',
            image: './path/to/image/source.png',
            description: 'Copy these sections to add to your story.',
            location: {
                center: [-77.020636, 38.886900],
                zoom: 13.5,
                pitch: 60,
                bearing: -43.2
            },
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};
