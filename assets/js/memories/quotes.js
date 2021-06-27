export class Quotes {
    static quotes = ["The best thing to hold onto in life is each other.",
        "I need you like a heart needs a beat.",
        "If I had a flower for every time I thought of you… I could walk through my garden forever.",
        "You are the finest, loveliest, tenderest, and most beautiful person I have ever known and even that is an understatement.",
        "It’s always better when we’re together.",
        "Sometimes all you need is a hug from the right person and all your stress will melt away.",
        "You are, and always have been, my dream.",
        "And in your smile I see something more beautiful than the stars.",
        "The most beautiful thing you can wear is confidence.",
        "The glow of one warm thought is to me worth more than money.",
        "I think we dream so we don't have to be apart for so long. If we're in each other's dreams, we can be together all the time.",
        "And when I'm with you, I feel happy to be alive. Like I can do anything.",
        "A dream you dream alone is only a dream. A dream you dream together is reality.",
        "The best and most beautiful things in this world cannot be seen or even heard — they must be felt with the heart.",
        "The only time I don't feel like a ghost is when you look at me, because when you look at me, you see me.",
        "The meeting of two personalities is like the contact of two chemical substances: if there is any reaction, both are transformed.",
        "To get the full value of joy, you must have someone to divide it with.",
        "Thinking of you keeps me awake. Dreaming of you keeps me asleep. Being with you keeps me alive.",
        "I realized I was thinking of you, and I began to wonder how long you’d been on my mind. Then it occurred to me: Since I met you, you’ve never left.",
        "I want you. All of you. Your flaws. Your mistakes. Your imperfections. I want you, and only you."]

    static getQuote() {
        const date = new Date();
        if (date < new Date("Jul 23, 2021 21:37:00")) {
            return Quotes.quotes[Math.min(Math.max(0, date.getDate() - 4), Quotes.quotes.length - 1)];
        } else {
            return Quotes.quotes[Math.floor(Math.random() * Quotes.quotes.length)]
        }
    }

    static getHTML() {
        return `"${Quotes.getQuote()}"`;
    }

}