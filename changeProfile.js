/*profileimage에는 프로필imageUrl에서 /talkp부터 .jpg전까지 넣기*/
//ex) https://p.kakaocdn.net/talkp/wmVIE48T6e/DKlgwuoKqBimhvXgsNsQS1/hx8pf1.jpg => /talkp/wmVIE48T6e/DKlgwuoKqBimhvXgsNsQS1/hx8pf1

async function changeProfile(nickname, profileimage, result) {  //result는 단순 결과값 출력여부
  let changeProfileRes = await axios
    .post(
      `https://katalk.kakao.com/android/profile/update.json`,
      {
        nickname: nickname,
        profileImage: {
          path: profileimage,
        },

      },
      {
        headers: {
          "content-type": "application/json; charset=UTF-8",
          A: "android/9.5.7/ko",
          Authorization: session_info,
        },
      }
    )
    .catch(console.log);
	console.log(changeProfileRes.data)
   if(result) await console.log(changeProfileRes)
  chat.replyText(JSON.stringify(changeProfileRes.data));
return changeProfileRes
}
