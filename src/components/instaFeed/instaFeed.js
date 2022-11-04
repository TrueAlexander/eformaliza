import Instafeed from "./instafeed.min.js"


const instaFeed = () => {

  const feed = new Instafeed({
    accessToken: 'IGQVJXRWNTZAnZAVMy1zWlAyN2xfWEcySjJjZAllFRUVfSG5fU1JLQUllWTV2RlJPSElxQ2lqeklnNEtSbGVueDljY21IM21mYnB0VlkzTlkycjNReUlxdFYwdTdocVFHcGxnQW1SaV93VVdrNE0xYi13bQZDZD',
    limit: 4,
    template: `<div class="instaFeed__item"><a href="{{link}}"><img src="{{image}}" title="{{caption}}" /></a></div>`
  })
  feed.run()
}
  
export default instaFeed


