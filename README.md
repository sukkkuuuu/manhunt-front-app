# 과끼리
#### 📚같은 과 학생들끼리 모여서 지식 정보 공유를 위한 플랫폼 개발

기획기간 : 2023.05.31 ~ 2023.06.30 (31일)
개발기간 : 2023.07.3 ~ 2023.08.24 (53일)

## 데이터 수집 (전처리)
대학교 이름 및 도메인
- 대학생의 학교 인증 및 이메일 인증을 위하여 학교 이름과 도메인을 수정함
- 수집 방법 : 공공데잍처포털에서 학교명과 도메인 수집
- 처리 방법 : 데이터 수집 후 정규식을 이용하여 데이터 정규화 및 ID 부여 실시
- 죄종 저장 : Database 전용 table을 두어 저장함

## 팀원
### 총괄
이석민
### 백엔드
한다운, [김도균](https://github.com/GGallangE), 최재익, 김진선, 배수훈, 양민철, 임대원 정부용, 전지환, 이재훈, 박상원, [이현석](https://github.com/pwrwpw), 하지웅
### 앱
[이지민](https://github.com/jmlee119), 전유림, [최현수](https://github.com/sukkkuuuu), [오정민](https://github.com/ojingjing), 김민조, 문소연, 김예진
### 웹
김이레, 박현수, 윤진수, 백세은, 오영석, 정현준
### 공통
<img src="https://img.shields.io/badge/cloudflare-F38020?style=for-the-badge&logo=cloudflare&logoColor=white"> <img src="https://img.shields.io/badge/jenkins-D24939?style=for-the-badge&logo=jenkins&logoColor=white"> <img src="https://img.shields.io/badge/bitbucket-0052CC?style=for-the-badge&logo=bitbucket&logoColor=white"> <img src="https://img.shields.io/badge/postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white"> <img src="https://img.shields.io/badge/notion-000000?style=for-the-badge&logo=notion&logoColor=white"> <img src="https://img.shields.io/badge/git-F05032?style=for-the-badge&logo=git&logoColor=white">
### 백엔드
<img src="https://img.shields.io/badge/kotlin-7F52FF?style=for-the-badge&logo=kotlin&logoColor=white"> <img src="https://img.shields.io/badge/spring-6DB33F?style=for-the-badge&logo=spring&logoColor=white"> <img src="https://img.shields.io/badge/mysql-4479A1?style=for-the-badge&logo=mysql&logoColor=white"> <img src="https://img.shields.io/badge/redis-FF4438?style=for-the-badge&logo=git&logoColor=white"> <img src="https://img.shields.io/badge/Intellij_Idea-000000?style=for-the-badge&logo=Intellij-Idea&logoColor=white"> <img src="https://img.shields.io/badge/Spring_Security-6DB33F?style=for-the-badge&logo=Spring-Security&logoColor=white"> <img src="https://img.shields.io/badge/gradle-02303A?style=for-the-badge&logo=gradle&logoColor=white"> 
### 프론트
<img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white">  <img src="https://img.shields.io/badge/css3-663399?style=for-the-badge&logo=css3&logoColor=white">  <img src="https://img.shields.io/badge/android-3DDC84?style=for-the-badge&logo=android&logoColor=white"> <img src="https://img.shields.io/badge/ios-000000?style=for-the-badge&logo=ios&logoColor=white"> <img src="https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css&logoColor=white"> <img src="https://img.shields.io/badge/typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=white"> <img src="https://img.shields.io/badge/React_Native-61DAFB?style=for-the-badge&logo=react&logoColor=white"> <img src="https://img.shields.io/badge/redux-764ABC?style=for-the-badge&logo=redux&logoColor=white"> <img src="https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=React-Router&logoColor=white"> <img src="https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=next.js&logoColor=white"> <img src="https://img.shields.io/badge/figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white"> <img src="https://img.shields.io/badge/Visual_Studio_Code-0078D4?style=for-the-badge&logo=Visual-Studio-Code&logoColor=white"> <img src="https://img.shields.io/badge/eslint-4B32C3?style=for-the-badge&logo=eslint&logoColor=white"> <img src="https://img.shields.io/badge/prettier-F7B93E?style=for-the-badge&logo=prettier&logoColor=white"> 

## 아키텍처
![image](https://github.com/user-attachments/assets/cde3495a-ee68-4527-8af2-eba258cb66f8)

### 백엔드
![image](https://github.com/user-attachments/assets/06a17e2d-3613-4ee4-b82a-f181658dcad5)

### 앱
![image](https://github.com/user-attachments/assets/66fb6402-853b-455b-870c-c8a3234cdba8)

### 웹
![image](https://github.com/user-attachments/assets/3684ee3c-0bf7-4ec1-b8e2-2912d3d1c829)


## 기능설명
![image](https://github.com/user-attachments/assets/eb64bcb9-7077-45fe-9657-11b57443e129)

실제 구글 플레이 스토어에 업로드 되어있습니다.

![image](https://github.com/user-attachments/assets/d097d36e-4692-4adf-ab80-2e4416ab2c7f)

첫화면, 로그인, 회원가입 창입니다.
회원가입시에는 학교이메일을 써야하며 대학생이 인증 된 이후에 가입이 되게끔 만들었습니다.

![image](https://github.com/user-attachments/assets/99622d6b-2c31-4866-839a-295d37a47605)

로그인이 되었을 때, 첫 화면입니다.
다크모드는 context API를 사용하여 전역변수 상태 관리를 하게 되었고 알림은 Firebase 의 FCM 을 사용하여 구현하였습니다.

![image](https://github.com/user-attachments/assets/6317233d-cbb6-42d5-ae90-ba6e522a8989)

게시판 리스트가 있으며 게시판 별로 핫 게시글, 최신 게시글, 투표 게시글을 분류하였습니다. 또한 글에서는 투표를 사용할 수 있고, 이미지를 업로드 할 수 있게 아마존 서버를 이용하여 이미지 첨부 가능하게끔 만들었습니다.

![image](https://github.com/user-attachments/assets/35c262d2-4c5c-4001-95b1-fda1523df2be)

게시글에서 투표 기능을 만들었습니다. 본인이 투표한 곳에 대한 퍼센테이지가 나오고, 어디에 투표했는지 확인이 가능합니다.

![image](https://github.com/user-attachments/assets/3c0797f2-0895-436e-b472-90cae367c78a)

채팅 기능과 마이페이지 기능입니다.
