# PokeTale(포케테일)

> 포켓몬과 떠나는 여정

성격 진단으로 첫 파트너를 만나고, 교감하고 탐험하며 나만의 6마리 팀을 완성하는 육성·수집·탐험형 웹 기반 게임입니다.
현재는 **초기 세팅 단계**로, PokeAPI에서 포켓몬 데이터를 불러와 카드 목록으로 보여주는 것까지만 구현되어 있습니다.

## 현재 구현된 기능

- PokeAPI에서 포켓몬 1~20번 데이터 불러오기
- 한국어 이름, 공식 일러스트, 타입을 카드 형태로 표시
- 서버 컴포넌트에서 데이터를 가져오고 24시간 캐시

## 기술 스택

| 영역 | 사용 기술 |
|---|---|
| 프레임워크 | Next.js (App Router) |
| 언어 | TypeScript |
| 스타일 | Tailwind CSS |
| 데이터 | [PokeAPI](https://pokeapi.co/) |

## 시작하기

### 요구 사항

- Node.js 20 이상
- npm

### 설치 및 실행

```bash
git clone <레포 주소>
cd poke-tale
npm install
npm run dev
```

브라우저에서 http://localhost:3000 을 열면 포켓몬 카드 목록이 보입니다.

## 폴더 구조

```
src/
├─ app/
│  ├─ layout.tsx
│  └─ page.tsx           # 메인 화면 (포켓몬 목록)
├─ components/
│  └─ PokemonCard.tsx    # 포켓몬 카드 컴포넌트
├─ lib/
│  └─ pokeapi.ts         # PokeAPI 호출 함수
└─ types/
   └─ pokemon.ts         # 타입 정의
```

## 로드맵

- [x] 초기 세팅 및 PokeAPI 연동
- [ ] 계정·DB 연동 (Supabase)
- [ ] 성격 진단과 첫 포켓몬 배정
- [ ] 돌봄·감정·유대감 시스템
- [ ] 원정과 포켓몬 영입
- [ ] 체육관·리그 배틀

## 주의 사항

이 프로젝트는 개인 학습용이자 팬 게임입니다. 포켓몬의 이름, 이미지 등 IP에 대한 권리는 '포켓몬스터'에게 있으며, 수익 창출 목적이 아님을 밝힙니다.
