# PinkFlag
It's quick and dirty. Spin up a polling session, give people the URL, vote until you're done, see the overall results, get on with life.

## Flow
1. Go to pink-flag.com (or whatever it is) and click "New Poll". This generates a random URL route, something like pink-flag.com#zk3k.
2. Who do you want to be able to vote on this bad boy? Give them the URL.
3. Create a new question. People can vote on it until you click "Stop Vote" or something. Votes will update live.
4. After you stop voting, you can see the votes for that question until you click "New Question". If you never stopped voting and click "New Question", don't worry gangsta, that question will automatically stop and you'll move on to the new one.
5. Rinse and repeat until you're done, then click "End Poll". You'll see stats for everything probably.

## TODO
1. Write the app.
2. Get rid of all the bullshit that this react-redux-webpack starter kit gave me.
3. Use [this shit](https://github.com/rafrex/spa-github-pages) for Github Pages.

#### Background
This is a rewrite of a previous project called Poll-with-me. State started to get rather hairy and confusing to manage so I decided to rewrite everything in React/Redux. I also took this as an opportunity to build with Webpack and use Sass. I'm still using PeerJs but I'm cool now so I manage it with Node instead of a CDN.
