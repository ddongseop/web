module.exports = {
  HTML:function(title, list, body, control){
    return `
    <!doctype html>
    <html>
    <head>
      <title>WORK OUT! - ${title}</title>
      <meta charset="utf-8"> 
    </head>
    <center>
    <body>
      <h1><a href="/" style="font-family:Fantasy">WORK OUT!</a></h1>
      <img src="https://lh3.googleusercontent.com/proxy/BOEgT-JGlM0tYJtf8O1NokpxA4-LdhENeQW54VV3WdvOeL3mDOclPkF5Bk0AWbIEV5V_nrK8NDjCC5VTaPV_z4bLfGxwhItmVwC7vmOPl_IfDEbRtx5FJx1LTvSwZHFZAxmL7uq5BSwNObgMLcLOabkoS3wLIX6sHM2ZuYRGTbPBqmvA8QwDQB5b6ZU8yNNzrZc2RxCQtmdSo22wTH0rR3xLJ-PwIAhqokZvDumjZcin6TTQUCiZQRpjd720dtdc4SJ5-_1jUebl_UnEePzG5zdSn4t41Dpo4YEZYahEpTY8jO6AbICwnGJ-OTClteJD_QtNZzhZC3pnU6vZyZqjAGjOApPWNsPUPRtU66nj9h0OIfe7nbbvXS2PTNCAlCggWR8xSsYOBR_jnAI-ZUf1-m0GL_lSp2c" width="400px"/>       
      ${body}
      ${control}
      ${list}
    </body>
    <br><br><br>
    <h5>
      Copyright 2020. Dongseop Lee
    </h5>
    </center>
    </html>
    `;
  },list:function(filelist){
    var list = '<div>';
    list = list+ '<br><br>';
    var i = 0;
    var ln = filelist.length;
    while(i < ln){
      list = list + `<div style="width:1000px;padding:10px;margin-bottom:20px;justify-content:center;align-items:center;font-family:Fantasy;text-align:center;display:flex;background-color:rgba(107, 196, 212, 0.425)"><a href="/?id=${filelist[i]}">${filelist[i]}</a></div>`;
      i = i + 1;
    }
    list = list+ '</div>';
    var turn = {
      lst: list,
      lth: ln
    }
    return turn;
  }
}
