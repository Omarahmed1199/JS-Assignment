var Quotes = [
    {
        qoutes: "Be yourself; everyone else is already taken.",
        authors: "― Oscar Wilde",
    },
    {
        qoutes: "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”",
        authors: "― Marilyn Monroe",
    },
    {
        qoutes: "“So many books, so little time.”",
        authors: "― Frank Zappa",
    },
    {
        qoutes: "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",
        authors: "― Albert Einstein"
    },
    {
        qoutes: "“A room without books is like a body without a soul.”",
        authors: "― Marcus Tullius Cicero"
    },
    {
        qoutes: "“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”",
        authors: "― Bernard M. Baruch"
    },
    {
        qoutes: "“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”",
        authors: "― Dr. Seuss"
    }
];
var newIndex;
var lastIndex;
var displayedQoutes = [0, 1, 2, 3, 4, 5, 6];

function getQoutes() {
    if (displayedQoutes.length == Quotes.length) {
        displayedQoutes = [];
    }
    do {
        newIndex = Math.floor(Math.random() * Quotes.length);
    } while (newIndex == lastIndex || displayedQoutes.includes(newIndex));

    lastIndex == newIndex
    console.log(newIndex);
    displayedQoutes.push(newIndex);
    document.getElementById("qoute").innerHTML = Quotes[newIndex].qoutes;
    document.getElementById("author").innerHTML = Quotes[newIndex].authors
}