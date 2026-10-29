# GitHub로 APK 만들기

1. github.com에서 새 저장소(Repository)를 만듭니다. (Private 가능)
2. 이 폴더의 파일 전체를 저장소에 올립니다.
   - 웹에서: 저장소 화면 > Add file > Upload files 로 폴더 안 내용을 끌어다 놓기
   - `.github` 폴더가 꼭 같이 올라가야 합니다. (숨김 폴더라 안 보이면 숨김 파일 표시를 켜세요)
3. 저장소 상단 **Actions** 탭 > "Build APK" 가 자동으로 실행됩니다. (5~10분)
   - 자동으로 안 돌면 Build APK 선택 > Run workflow
4. 완료(초록 체크)되면 휴대폰으로 저장소의 **Releases**(github.com/chaewon0414/ieum-app/releases/latest)에 들어가 `.apk` 파일을 눌러 받습니다.
5. 받은 파일을 열어 설치하세요.
   (설치할 때 "출처를 알 수 없는 앱" 허용 필요)

## 앱을 고친 뒤
`www` 안의 파일을 고쳐서 다시 올리면(push) APK가 새로 만들어집니다.
`www/js` 원본을 고쳤다면 올리기 전에 `node www/build-bundle.js` 로 번들을 다시 만드세요.

## 참고
- 이 APK는 테스트용(debug)입니다. Play 스토어에 올리려면 서명된 release 빌드가 따로 필요합니다.
- `www/assets` 안의 이미지 중 실제로 쓰는 건 welcome-city-no-bg-dots.png 하나입니다.
  나머지(약 22MB)를 지우면 APK 용량이 크게 줄어듭니다.
