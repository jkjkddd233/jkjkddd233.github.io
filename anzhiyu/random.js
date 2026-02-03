var posts=["2025/07/29/修复网易云音乐云盘周杰伦歌曲/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };