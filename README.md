# NodeKakao-Example
@storycraft의 node-kakao 모듈을 기반으로 한 소스코드입니다
해당 소스 코드를 사용함으로써 얻는 불이익은 책임지지 않습니다!

# session_info
let session_info;

loginRes 선언후 accessToken-UUID형식
session_info = `${loginRes.result.accessToken}-${loginRes.result.deviceUUID}`;
