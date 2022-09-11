/* 템플릿 필요없는 카카오링크 */

     function sendkaling(code) {  //카카오링크 어태치
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


if (chat.text.startsWith("!카링송금 ")) {
            var km = chat.text.replace("!카링송금 ", "")*1
                km = km.toLocaleString();
                console.log(km.toLocaleString())
                 sendkaling({
                    "P": {
                       "TP": "Feed",
                       "ME": `${km}원을 받으세요. 송금 받기 전까지 내역 상세화면에서 취소할 수 있어요.`,
                       "SID": "capri_63119",
                       "DID": "kakaotalk://kakaopay/money/receive?id=1234567890",
                       "SNM": "카카오페이",
                       "SIC": "https://k.kakaocdn.net/14/dn/btqcQ3DNZNQ/aeLyAYYMTgGFgDlXAkxK70/o.jpg",
                       "SL": {
                          "LCA": "kakaotalk://kakaopay/home",
                          "LCI": "kakaotalk://kakaopay/home",
                          "LPC": "https://www.kakaopay.com",
                          "LMO": "https://www.kakaopay.com",
                          "LCP": "https://www.kakaopay.com",
                          "LCM": "https://www.kakaopay.com",
                          "LA": "https://kakaopay.kakao.com/redirect/home",
                          "LI": "https://kakaopay.kakao.com/redirect/home"
                       },
                       "LA": "https://kakaopay.kakao.com/redirect/home",
                       "LI": "https://kakaopay.kakao.com/redirect/home",
                       "VA": "8.6.3",
                       "VI": "5.9.8",
                       "VW": "2.5.1",
                       "VM": "2.2.0",
                       "FW": false,
                       "KV": true,
                       "RF": "out-server",
                       "A": {
                          "version": 1,
                          "code": "bETYfI0yIbkcIrS8rOOz3Hj0dJiZrqoxfFMQcDpkDVA=",
                          "createdAt": 1650550493855
                       }
                    },
                    "C": {
                       "THC": 1,
                       "THL": [
                          {
                             "TH": {
                                "THU": "https://t1.daumcdn.net/kakaopay/money/transfer-ng/send_done_v3.png",
                                "W": 600,
                                "H": 300
                             }
                          }
                       ],
                       "TI": {
                          "TD": {
                             "T": `${km}원을 받으세요.`,
                             "D": "송금 받기 전까지 내역 상세화면에서 취소할 수 있어요."
                          }
                       },
                       "BUL": [
                          {
                             "BU": {
                                "T": "받기",
                                "SR": "receiver"
                             },
                             "L": {
                                "LCA": "kakaotalk://kakaopay/money/receive?id=1234567890",
                                "LCI": "kakaotalk://kakaopay/money/receive?id=1234567890"
                             }
                          },
                          {
                             "BU": {
                                "T": "내역보기",
                                "SR": "sender"
                             },
                             "L": {
                                "LCA": "kakaotalk://kakaopay/history/money/detail?transaction_id=1234567890&min_version=9.5.5",
                                "LCI": "kakaotalk://kakaopay/history/money/detail?transaction_id=1234567890&min_version=9.5.5"
                             }
                          }
                       ]
                    },
                    "K": {
                       "ai": "63119",
                       "ti": "9309"
                    }
                 })
        }
