var posts=["2025/07/29/修复网易云音乐云盘周杰伦歌曲/","2026/08/06/关于部署twikoo时使用MongoDB遇到的问题/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };