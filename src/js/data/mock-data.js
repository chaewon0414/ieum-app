// 문구, 카드, 정책 정보는 이 파일의 APP_DATA만 수정하면 화면 전체에 반영됩니다.
const APP_DATA = {
  user: { name: "지원", region: "서울시 관악구", age: 25 },
  policies: [
    {"id": "seed-jarip-sudang", "category": "생활", "title": "자립수당", "desc": "보호가 끝난 뒤 5년 동안 매달 생활비를 받을 수 있어요. 보호종료일 기준으로 2년 이상 연속 보호받았다면 대상이에요.", "content": "대상: 아동복지시설·가정위탁 보호가 끝난 자립준비청년 중 보호종료일 기준 과거 2년 이상 연속 보호받은 사람\n지원: 월 50만 원, 보호종료 후 5년간\n신청: 주소지 행정복지센터 또는 복지로 온라인 신청\n문의: 보건복지부 청년정책팀 044-202-3361", "amount": "월 50만 원", "deadline": "상시 신청", "region": "전국", "applicationUrl": "https://www.bokjiro.go.kr", "source": "보건복지부 자립준비청년 자립지원 안내", "match": 98},
    {"id": "seed-jarip-jeongchakgeum", "category": "생활", "title": "자립정착금", "desc": "보호가 끝날 때 시·도에서 한 번에 받는 정착 지원금이에요. 사는 지역에 따라 금액이 달라요.", "content": "대상: 만 18세 이후 보호가 끝난 자립준비청년\n지원(2025년 기준): 서울 2,000만 원 / 대전·경기·제주·경남 1,500만 원 / 부산 1,200만 원 / 그 외 지역 1,000만 원\n신청: 아동복지시설 또는 가정위탁지원센터와 사용계획서를 작성한 뒤 관할 행정복지센터에 신청\n금액은 해마다 바뀔 수 있으니 관할 시·군·구 공고를 꼭 확인하세요.", "amount": "1,000만~2,000만 원", "deadline": "상시 신청", "region": "시·도별", "applicationUrl": "https://www.mohw.go.kr/menu.es?mid=a10711041000", "source": "보건복지부 자립준비청년 자립지원 안내", "match": 96},
    {"id": "seed-gichosaenghwal-gongje", "category": "생활", "title": "기초생활보장 근로소득 공제", "desc": "기초생활수급을 받으면서 일해도 소득 일부를 빼고 계산해 줘서, 일을 시작해도 급여가 크게 줄지 않아요.", "content": "대상: 기초생활보장 수급 자립준비청년(생계급여 수급 자격 완화 포함)\n지원: 소득 조사 때 근로·사업소득에서 60만 원 + 나머지 소득의 30%를 공제, 보호종료 후 5년간\n신청: 주소지 행정복지센터", "amount": "월 60만 원 + 30% 공제", "deadline": "상시 신청", "region": "전국", "applicationUrl": "https://www.mohw.go.kr/menu.es?mid=a10711041000", "source": "보건복지부 자립준비청년 자립지원 안내", "match": 88},
    {"id": "seed-jarip-sarye", "category": "생활", "title": "자립지원 통합서비스(사례관리)", "desc": "시·도 자립지원전담기관 담당자가 주거, 돈 관리, 진로, 건강 고민을 함께 살피고 필요한 지원을 연결해 줘요.", "content": "대상: 보호종료 5년 이내 자립준비청년, 보호연장아동\n지원: 1:1 맞춤형 사례관리, 필요한 서비스 연계\n신청: 거주 지역 시·도 자립지원전담기관", "amount": "1:1 맞춤 상담", "deadline": "상시 신청", "region": "전국", "applicationUrl": "https://jaripon.ncrc.or.kr", "source": "보건복지부 자립준비청년 자립지원 안내", "match": 90},
    {"id": "seed-baramgaebi", "category": "생활", "title": "바람개비서포터즈·자조모임", "desc": "먼저 자립한 선배들과 만나고, 비슷한 경험을 가진 청년들끼리 모임을 만들면 활동비를 지원받을 수 있어요.", "content": "대상: 만 29세 이하 보호연장아동 및 자립준비청년\n지원: 자립 멘토 활동(바람개비서포터즈), 자조모임 운영과 활동비\n신청: 거주 지역 시·도 자립지원전담기관", "amount": "모임 활동비", "deadline": "상시 신청", "region": "전국", "applicationUrl": "https://jaripon.ncrc.or.kr", "source": "보건복지부 자립준비청년 자립지원 안내", "match": 80},
    {"id": "seed-lh-sonyeon-jeonse", "category": "주거", "title": "소년소녀가정 등 전세임대", "desc": "LH가 전셋집을 빌려 저렴하게 다시 빌려줘요. 22세까지는 무상이고, 보호종료 후 5년간 이자를 절반 깎아줘요.", "content": "대상: 자립준비청년, 청소년복지시설 퇴소청소년 등 무주택자(보호종료아동은 소득 기준 미적용)\n지원: 22세 이하 무상 지원, 보호종료 후 5년 이내 대출이율 50% 감면\n신청: 주소지 읍·면·동 주민센터\n문의: LH 전세임대콜센터 1670-0002", "amount": "22세까지 무상", "deadline": "상시 신청", "region": "전국", "applicationUrl": "https://apply.lh.or.kr", "source": "복지로 2025 복지서비스 안내책자(청년층)", "match": 95},
    {"id": "seed-lh-jarip-jeonse", "category": "주거", "title": "자립준비청년 전세임대(청년 전세임대 우선공급)", "desc": "청년 전세임대 물량 중 자립준비청년에게 먼저 공급해요. 지금 사는 곳과 상관없이 전국 주택에 신청할 수 있어요.", "content": "대상: 가정위탁 종료 또는 아동복지시설 퇴소 5년 이내인 사람, 보호연장아동\n지원: 지원한도액 수도권 1억 2,000만 원(청년 유형과 동일), 최장 6년 거주(조건 충족 시 최장 20년)\n신청: LH 청약플러스 공고 확인", "amount": "수도권 최대 1억 2천만 원", "deadline": "상시 신청", "region": "전국", "applicationUrl": "https://apply.lh.or.kr", "source": "문화일보 LH 청년 전세임대 모집 기사", "match": 93},
    {"id": "seed-busan-maeip", "category": "주거", "title": "부산도시공사 자립준비청년 매입임대주택", "desc": "보증금 100만 원, 월세는 시세의 20% 수준으로 살 수 있는 집이에요. 모집 세대가 다 찰 때까지 수시로 접수해요.", "content": "대상: 아동복지시설 퇴소 5년 이내 무주택자(공고일 기준 공사 매입임대주택에 살고 있지 않은 사람)\n지원: 임대보증금 100만 원, 월 임대료 시세 20% 수준, 최초 2년(재계약 시 최장 10년, 소득·자산 기준 충족 시 최장 20년)\n신청: 부산도시공사 누리집 공고문 확인", "amount": "보증금 100만 원", "deadline": "모집 마감 시까지", "region": "부산", "applicationUrl": "https://www.bmc.busan.kr", "source": "파이낸셜뉴스 2026.7.22 부산도시공사 수시모집 기사", "match": 84},
    {"id": "seed-didim-ssiat", "category": "금융", "title": "디딤씨앗통장", "desc": "보호받는 동안 저축하면 나라가 2배를 더 넣어줘요. 모은 돈은 18세 이후 자립 초기 비용으로 받아요.", "content": "대상: 0세~만 18세 미만 보호대상아동\n지원: 매월 저축액을 국가(지자체)가 1:2로 매칭, 정부지원금 월 10만 원 한도\n지급: 18세 이후 사회진출 초기 비용으로 사용\n자세한 내용: 아동권리보장원 누리집", "amount": "월 최대 10만 원 매칭", "deadline": "상시 신청", "region": "전국", "applicationUrl": "https://www.ncrc.or.kr", "source": "보건복지부 자립준비청년 자립지원 안내", "match": 85},
    {"id": "seed-kosaf-loan-interest", "category": "금융", "title": "학자금대출 생활비 이자 면제", "desc": "대학생이 취업 후 상환 학자금대출로 생활비를 빌리면, 갚기 시작하기 전까지 이자를 내지 않아도 돼요.", "content": "대상: 취업 후 상환 학자금대출을 받는 자립준비청년(보호아동 포함) 학부생, 만 35세 이하\n지원: 의무상환 개시 전까지 생활비 대출 이자 면제\n신청: 한국장학재단 누리집 또는 모바일 앱\n문의: 한국장학재단 1599-2000", "amount": "생활비 대출 이자 0원", "deadline": "상시 신청", "region": "전국", "applicationUrl": "https://www.kosaf.go.kr", "source": "복지로 2025 복지서비스 안내책자(청년층)", "match": 82},
    {"id": "seed-kosaf-scholarship", "category": "교육", "title": "국가장학금 성적기준 미적용", "desc": "자립준비청년은 국가장학금 Ⅰ유형을 받을 때 성적 기준을 보지 않아요. 학자금지원 9구간 이하면 신청할 수 있어요.", "content": "대상: 국내 대학 재학생 중 학자금지원 9구간 이하\n특례: 자립준비청년은 Ⅰ유형·다자녀 국가장학금 성적 기준 미적용\n신청: 한국장학재단 누리집 및 모바일 앱(학기별 신청 기간 확인)\n문의: 한국장학재단 1599-2000", "amount": "등록금 지원", "deadline": "학기별 신청 기간", "region": "전국", "applicationUrl": "https://www.kosaf.go.kr", "source": "복지로 2025 복지서비스 안내책자(청년층)", "match": 87},
    {"id": "seed-medical-copay", "category": "건강", "title": "자립준비청년 의료비 지원", "desc": "건강보험으로 병원에 갈 때 내는 본인부담금을 의료급여 수준으로 줄여줘요.", "content": "대상: 건강보험에 가입한 자립준비청년\n지원: 요양급여비용 본인일부부담금 경감(의료급여와 비슷한 수준)\n문의: 보건복지부 청년정책팀 044-202-3361", "amount": "병원비 본인부담 경감", "deadline": "상시 신청", "region": "전국", "applicationUrl": "https://www.mohw.go.kr/menu.es?mid=a10711041000", "source": "보건복지부 자립준비청년 자립지원 안내", "match": 91},
    {"id": "seed-maeum-tuja", "category": "건강", "title": "마음투자 심리상담 본인부담 면제", "desc": "전국민 마음투자 지원사업으로 심리상담을 받을 때 자립준비청년은 본인부담금 없이 이용할 수 있어요.", "content": "대상: 자립준비청년, 보호연장아동\n지원: 전국민 마음투자 지원사업 참여 시 본인부담금 제외\n신청: 복지로 온라인 신청", "amount": "상담비 본인부담 0원", "deadline": "상시 신청", "region": "전국", "applicationUrl": "https://www.bokjiro.go.kr", "source": "보건복지부 자립준비청년 자립지원 안내", "match": 86},
    {"id": "seed-kuksi-chwieop", "category": "취업", "title": "국민취업지원제도", "desc": "취업 상담, 직업훈련, 일자리 소개를 받고 조건이 맞으면 구직촉진수당도 받을 수 있어요. 청년 누구나 확인해 볼 만한 제도예요.", "content": "대상: 취업을 원하는 청년 등(유형별 소득·재산 기준 있음)\n지원: 취업지원 서비스, 1유형은 구직촉진수당(6개월)\n신청: 고용24 또는 가까운 고용센터\n자립준비청년 전용 제도는 아니니 자격은 고용24에서 확인하세요.", "amount": "구직촉진수당 + 취업지원", "deadline": "상시 신청", "region": "전국", "applicationUrl": "https://www.work24.go.kr", "source": "고용노동부 고용24", "match": 83}
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


