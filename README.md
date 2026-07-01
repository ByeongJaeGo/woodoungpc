# woodoungpc

천안 신불당·불당동 PC방 위치와 참고 요금 정보를 제공하는 정적 웹사이트입니다.

## 배포 URL

https://woodoungpc.vercel.app/

## 로컬 실행

```bash
python -m http.server 8080
```

브라우저에서 http://localhost:8080 접속

## 분석 (Google Analytics · Microsoft Clarity)

1. [Google Analytics](https://analytics.google.com)에서 GA4 속성 생성 → **측정 ID** (`G-XXXXXXXX`) 복사
2. [Microsoft Clarity](https://clarity.microsoft.com)에서 프로젝트 생성 → **프로젝트 ID** 복사
3. `analytics-config.js`에 ID 입력 후 배포

로컬(`localhost`)에서는 분석 스크립트가 실행되지 않습니다.

## 검색 등록

배포 후 아래 서비스에 사이트를 등록하면 구글·네이버 검색 노출을 신청할 수 있습니다.

- [Google Search Console](https://search.google.com/search-console)
- [네이버 서치어드바이저](https://searchadvisor.naver.com/)

`sitemap.xml` URL: `https://woodoungpc.vercel.app/sitemap.xml`
