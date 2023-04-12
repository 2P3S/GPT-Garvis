# Garvis
건설적인 토론을 위해 도움을 주는 사회자AI

## 필요한 요소
   - 주제
        - 한가지의 주제를 가지고 토론
   - 토론 종류
        - 논제 종류에 따라서 절차를 다르게함
        - 토론 종류에 대해 조사를 좀 해봐야할듯
   - 사회자
        - 토론을 이끌 사람들
        - 기본은 GPT인데 사용자가 원하면 본인이 사회자해도될듯?
   - 토론 참여자
        - 정해진 주제로 주장을 펼칠 사람들.
        - 채팅이나 음성으로 발언가능. (음성같은 경우 whisper의 사용)
   - 관중
        - 토론을 관람하는 사람들.
        - 실시간 감정표현이나 투표기능같은 것도 넣으면 좋을듯 때에 따라선 발언 기회를 줘도 재밌을 듯 ㅋㅋ


## 사회자 AI 기능 
1. 토론 진행
    - 전체적인 토론의 진행을 주도함
2. 의견 정리 
    - 참여자들의 의견을 정리함
3. 토론 중재
    - 논제에 벗어나거나 토론에 방해되는 발언을 할 경우 중재함
4. 토론 기록
    - 토론의 진행과정과 참여자들의 발언들을 기록

## 서비스 흐름
### ver1 어떻게 보면 1차 목표 
역할: 사회자, 참여자

1. 홈페이지 접속
2. 이름, 주제 설정하고 방 만들기 -> 방 접속할 수 있는 URL 생성
3. URL로 접속한 유저는 각자 이름 설정함
4. 모든 유저가 준비 완료 누르면 회의 시작
6. 참여자들은 garvis에게 질문 할 수 있음
7. 토론 과정과 발언은 자동으로 요약 및 기록. 일단 채팅만
8. 참가자들이 알아서 회의를 끝냄

### ver1.~
추가될 기능
- 음성 인식 whisper의 ai 활용(실시간으로 들리게 할지 인식한걸 텍스트로 보낼지는 흠..)
- garvis가 토론 진행 방식에 따른 회의 주도 (발언권한)
- garvis가 토론에 방해되는 발언 중재
- 관중 역할 추가
- 감정표현 추가 
- 투표기능 추가
- 회의 기록을 파일로 추출할 수 있음


## 걱정되는 부분
1. 채팅으로 발언하는건 개발 가능할 거 같지만 음성도 소켓통신으로 실시간 회의가 가능할까?? 서버 감당은 되나?? 지갑 절대 지켜..!!

2. 인원 제한은 어떻게 두어야하나?? 

3. GPT가 주장들을 이해하고 요약할 수 있는가?
    - 아래 사이트에서 여러가지 논제로 토론한 자료가 많음 테스트 ㄱㄱ
    - 디베이팅 데이 https://debatingday.com/ 

4. whisper의 음성 기록 성능은 괜찮은가
    - 생각보다 되게 정확함 ㄷㄷ
    - 데모버전 테스트 영상 https://www.youtube.com/watch?v=zvZ0u9S95Ow 
    - 정확도 good, but  이용자 많아지면 실시간 변환 시간은 영향가나??