const episodeName = [
    'Season 1, Episode 1 - "The Pilot"',
    'Season 1, Episode 2 - "The One with the Sonogram at the End"',
    'Season 1, Episode 3 - "The One with the Thumb"',
    'Season 1, Episode 4 - "The One with George Stephanopoulos"',
    'Season 1, Episode 5 - "The One with the East German Laundry Detergent"',
    'Season 1, Episode 6 - "The One with the Butt"',
    'Season 1, Episode 7 - "The One with the Blackout"',
    'Season 1, Episode 8 - "The One Where Nana Dies Twice"',
    'Season 1, Episode 9 - "The One Where Underdog Gets Away"',
    'Season 1, Episode 10 - "The One with the Monkey"',
    'Season 1, Episode 11 - "The One with Mrs. Bing"',
    'Season 1, Episode 12 - "The One with the Dozen Lasagnas"',
    'Season 1, Episode 13 - "The One with the Boobies"',
    'Season 1, Episode 14 - "The One with the Candy Hearts"',
    'Season 1, Episode 15 - "The One with the Stoned Guy"',
    'Season 1, Episode 16 - "The One with Two Parts: Part 1"',
    'Season 1, Episode 17 - "The One with Two Parts: Part 2"',
    'Season 1, Episode 18 - "The One with All the Poker"',
    'Season 1, Episode 19 - "The One Where the Monkey Gets Away"',
    'Season 1, Episode 20 - "The One with the Evil Orthodontist"',
    'Season 1, Episode 21 - "The One with the Fake Monica"',
    'Season 1, Episode 22 - "The One with the Ick Factor"',
    'Season 1, Episode 23 - "The One with the Birth"',
    'Season 1, Episode 24 - "The One Where Rachel Finds Out"'
];

const tagsElements = document.getElementById('tags');
const logoDiv = document.querySelector('.logo');
logoDiv.addEventListener('click', () => {
    unHighlightAllTags();
    pickRandomEpisode();
})
createTags();


function createTags() {
    tagsElements.innerHTML = '';

    episodeName.forEach(episode => {
        const tagElement = document.createElement('span');
        tagElement.classList.add('tag');
        tagElement.innerText = episode;
        tagsElements.appendChild(tagElement);
    })
}

function pickRandomEpisode() {
    const times = 30;

    const interval = setInterval(() => {
        const randomEpisode = getRandomEpisode();

        highlightTag(randomEpisode);

        setTimeout(() => {
            unHighlightTag(randomEpisode);
        },100);
    }, 100);

    setTimeout(() => {
        clearInterval(interval);
        
        setTimeout(() => {
            const finalEpisode = getRandomEpisode();
            highlightTag(finalEpisode);
        },100);
    },times * 100);
}

function getRandomEpisode() {
    const tags = document.querySelectorAll('.tag');
    return tags[Math.floor(Math.random() * tags.length)];
}

function highlightTag(tag) {
    tag.classList.add('highlight');
}

function unHighlightTag(tag) {
    tag.classList.remove('highlight');
}

function unHighlightAllTags() {
    const tags = document.querySelectorAll('.tag');
    tags.forEach(tag => {
        tag.classList.remove('highlight');
    })
}