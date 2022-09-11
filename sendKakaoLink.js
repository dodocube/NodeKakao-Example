/* 템플릿 필요없는 카카오링크 */

     function sendkaling(code) {
      const options = {
        uri: "https://chatbubble.kakao.com/chatbubble/v1/bot",
        method: "POST",
        body: { url: "kakaobot://share/feed/hakalling", data: code },
        json: true,
        headers: {
          Authorization: session_info,
        },
      };
      
      request.post(options, function (error, response, body) {
        //callback
        try { 
	 console.log(body)	  
          var sor = body["data"];
        } catch (err) {
          chat.replyText("[ 경고 ] 올바른 소스를 입력하세요");
        }
        if (error) return chat.replyText("err");
        //chat.replyText(JSON.stringify(sor, null, 3))
        client.chatManager.sendRaw(chat.channel, 71, "(카카오 링크)", sor);
      });
    }