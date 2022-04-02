# 술기로운 술생활(sulsul) React Native 저장소

[개발할 때 참고](https://github.com/zerocho/food-delivery-app)

- [React Native 공식문서](https://reactnative.dev/)

- [초기 세팅](https://reactnative.dev/docs/environment-setup)

- java 17 버전 설치하면 안 됨(11버전 설치할 것), 환경 변수 설정도 잘 해 놓을 것(JAVA_HOME)

- Android SDK 30이 있어야 함. 가상기기는 Nexus 5로 받을 것

- [adb](https://developer.android.com/studio/releases/platform-tools) 설치 필요, ANDROID_HOME 환경변수도

- [m1 mac용 설정](https://qnrjs42.blog/react-native/m1-arm64-setting)

- [읽어보면 좋은 벨로퍼트님의 글](https://ridicorp.com/story/react-native-1year-review/)

### Getting Started

```bash
cd 프로젝트 폴더
yarn install # 패키지 설치
yarn run ios # ios 실행
yarn run android # android 실행
```

Mac Only

pod 설치 (iOS 라이브러리 받는 용도)

```bash
npx pod-install
#or
cd ios
pod install
```

### 앱 실행 후

- cmd + R로 리로딩
- cmd + D로 디버그 메뉴
- Debugging with Chrome으로 개발자 도구 사용 가능
- Configure Bundler로 메트로 서버 포트 변경 가능
- Show Perf Monitor로 프레임 측정 가능

### 폴더 구조

- android: 안드로이드 네이티브 폴더
- ios: ios 네이티브 폴더
- node_modules: 노드 라이브러리
- app.json: name은 앱 컴포넌트 이름이니 함부로 바꾸면 안 됨, 이거 바꾸면 네이티브 컴포넌트 이름도 다 바꿔야함, displayName은 앱 이름 변경용
  - ios/FoodDeliveryApp/AppDelegate.m 의 moduleName
  - android/app/src/main/java/com/fooddeliveryapp/MainActivity.java 의 getMainComponentName
- babel.config.js: 바벨 설정
- index.js: 메인 파일
- App.tsx: 기본 App 컴포넌트
- metro.config.js: 메트로 설정 파일(웹팩 대신 사용)
- tsconfig.json: 타입스크립트 설정
  android/app/src/main/java/com/fooddeliveryapp/MainActivity.java: 안드로이드 액티비티에서 js엔진 통해 리액트 코드 실행 + bridge로 소통
