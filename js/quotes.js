quotes = [
    {
        quote : "When you have faults, do not fear to abandon them.",
        author : "Confucius"
    },
    {
        quote : "They must often change who would be constant in happiness or wisdom.",
        author : "Lawana Blackwell"
    },
    {
        quote : "Age is no guarantee of maturity.",
        author : "Lawana Blackwell"
    },
    {
        quote : "Youth isn’t always all it’s touted to be.",
        author : "Lawana Blackwell"
    },
    {
        quote : "You will face many defeats in life, but never let yourself be defeated.",
        author : "Maya Angelou"
    },
    {
        quote : "The greatest glory in living lies not in never falling, but in rising every time we fall.",
        author : "Nelson Mandela"
    },
    {
        quote : "Life is either a daring adventure or nothing at all.",
        author : "Helen Keller"
    },
    {
        quote : "The goal of life is living in agreement with nature.",
        author : "Zeno"
    },
    {
        quote : "This too shall pass",
        author : "Et hoc transibit"
    },
    {
        quote : "Life is unfair, get used to it.",
        author : "Bill Gates"
    }
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = `- ${todaysQuote.author} -`;

