// 문구, 카드, 정책 정보는 이 파일의 APP_DATA만 수정하면 화면 전체에 반영됩니다.
export const APP_DATA = {
  user: { name: "지원", region: "서울시 관악구", age: 25 },
  policies: [
    { category: "생활", title: "청년 자립수당", desc: "보호종료 청년의 안정적인 자립을 위해 매월 생활비를 지원해요.", amount: "월 50만 원", deadline: "상시 신청", match: 98 },
    { category: "주거", title: "청년 월세 특별지원", desc: "주거비 부담을 덜 수 있도록 월세를 최대 12개월간 지원해요.", amount: "월 최대 20만 원", deadline: "8월 31일까지", match: 94 },
    { category: "금융", title: "청년도약계좌", desc: "꾸준히 저축하면 정부 기여금과 비과세 혜택을 받을 수 있어요.", amount: "5년 만기", deadline: "매월 신청", match: 89 },
    { category: "취업", title: "국민취업지원제도", desc: "취업 상담부터 직업훈련, 구직촉진수당까지 맞춤 지원해요.", amount: "월 최대 50만 원", deadline: "상시 신청", match: 86 }
  ],
  jobs: [
    { company: "카카오", title: "서비스 기획 어시스턴트 모집", tags: ["신입", "판교", "기획"], deadline: "D-12" },
    { company: "네이버", title: "UX/UI 디자인 체험형 인턴", tags: ["인턴", "분당", "디자인"], deadline: "D-18" }
  ],
  posts: [
    { author: "취준하는 민지", time: "12분 전", category: "취업", title: "첫 면접을 앞두고 있는데 이것만은 꼭 준비하세요", body: "지난주 모의 면접에서 받은 피드백을 정리해봤어요. 답변을 외우기보다 경험을 상황-행동-결과로 나누니 훨씬 자연스러웠습니다.", likes: 42, comments: 13 },
    { author: "자립 2년 차", time: "1시간 전", category: "생활", title: "한 달 생활비를 줄여준 작은 습관들", body: "고정비를 먼저 분리하고 남은 금액을 주 단위로 나눠 쓰니 월말이 훨씬 편해졌어요. 저만의 예산표도 공유해요.", image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=300&q=80", likes: 87, comments: 26 }
  ]
};

APP_DATA.posts[0].commentList = [
  { author: "오늘도 한 걸음", time: "9분 전", body: "저도 첫 면접을 앞두고 있는데 덕분에 방향을 잡았습니다.", replies: [] },
  { author: "취업준비생", time: "5분 전", body: "상황-행동-결과로 나누는 방법이 정말 도움이 됐어요!", replies: [] }
];
APP_DATA.posts[1].commentList = [
  { author: "독립 준비 중", time: "35분 전", body: "예산표 양식도 궁금해요. 좋은 정보 감사합니다!", replies: [] },
  { author: "알뜰한 하루", time: "20분 전", body: "주 단위로 예산을 나누는 방법 저도 해봐야겠어요.", replies: [] }
];
