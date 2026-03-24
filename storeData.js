/**
 * storeData.js — 관리자-스토어.html ↔ 스토어.html 공유 데이터
 * 이 파일을 수정하면 관리자·사용자 화면 모두에 반영됩니다.
 */

const catData = [
  { key:'health',  icon:'🏋️', name:'헬스',     color:'badge-blue',   bg:'#EBF8FF', hex:'#2B6CB0', tickets:4, sales:391, visible:true,
    durations:['1개월','3개월','6개월','1년'],  defaultDur:'1개월', maxPersons:1, minAge:14, desc:'헬스장 기구 및 시설 이용권' },
  { key:'golf',    icon:'⛳',  name:'골프',     color:'badge-green',  bg:'#F0FFF4', hex:'#38A169', tickets:4, sales:287, visible:true,
    durations:['10회','30회','월정액','패밀리'], defaultDur:'10회',   maxPersons:4, minAge:10, desc:'스크린골프 및 골프 연습장 이용권' },
  { key:'home',    icon:'🏠',  name:'홈트',     color:'badge-purple', bg:'#FAF5FF', hex:'#9F7AEA', tickets:4, sales:493, visible:true,
    durations:['1개월','3개월','패밀리'],       defaultDur:'1개월',  maxPersons:4, minAge:0,  desc:'앱 기반 홈트레이닝 이용권' },
  { key:'pilates', icon:'🧘',  name:'필라테스', color:'badge-teal',   bg:'#E6FFFA', hex:'#319795', tickets:1, sales:34,  visible:true,
    durations:['1개월','3개월'],               defaultDur:'1개월',  maxPersons:1, minAge:12, desc:'필라테스 그룹/개인 수업 이용권' },
  { key:'combo',   icon:'🏆',  name:'골프+헬스', color:'badge-orange', bg:'#FFFAF0', hex:'#C05621', tickets:1, sales:67,  visible:true,
    durations:['월정액'],                      defaultDur:'월정액', maxPersons:4, minAge:14, desc:'골프+헬스 통합 이용권' },
];

const ticketData = [
  { cat:'health', icon:'🏋️', name:'헬스 1개월 이용권',    badge:'badge-blue',   catLabel:'헬스',    price:'79,000원',      priceNum:79000,  type:'기간',  duration:'30일',           features:['입장 제한 없음','첫 구매 20% 할인'],      sales:124, active:true,  tag:'NEW'  },
  { cat:'health', icon:'🏋️', name:'헬스 3개월 이용권',    badge:'badge-blue',   catLabel:'헬스',    price:'189,000원',     priceNum:189000, type:'기간',  duration:'90일',           features:['입장 제한 없음','월 63,000원 절약'],       sales:87,  active:true,  tag:'HOT'  },
  { cat:'health', icon:'🏋️', name:'헬스 6개월 이용권',    badge:'badge-blue',   catLabel:'헬스',    price:'329,000원',     priceNum:329000, type:'기간',  duration:'180일',          features:['입장 제한 없음','월 54,833원 절약'],       sales:56,  active:true,  tag:''     },
  { cat:'health', icon:'🏋️', name:'헬스 1년 이용권',      badge:'badge-blue',   catLabel:'헬스',    price:'599,000원',     priceNum:599000, type:'기간',  duration:'365일',          features:['입장 제한 없음'],                          sales:0,   active:false, tag:''     },
  { cat:'golf',   icon:'⛳',  name:'골프 10회 이용권',     badge:'badge-green',  catLabel:'골프',    price:'150,000원',     priceNum:150000, type:'횟수',  duration:'90일 유효',      features:['오전 6시~오후 10시'],                      sales:95,  active:true,  tag:'BEST' },
  { cat:'golf',   icon:'⛳',  name:'골프 30회 이용권',     badge:'badge-green',  catLabel:'골프',    price:'390,000원',     priceNum:390000, type:'횟수',  duration:'180일 유효',     features:['회당 13,000원'],                           sales:48,  active:true,  tag:''     },
  { cat:'golf',   icon:'⛳',  name:'골프 월정액 이용권',   badge:'badge-green',  catLabel:'골프',    price:'129,000원/월',  priceNum:129000, type:'월정액', duration:'30일 자동갱신', features:['횟수 무제한','인기 상품'],                  sales:112, active:true,  tag:'인기' },
  { cat:'golf',   icon:'⛳',  name:'골프 패밀리 이용권',   badge:'badge-green',  catLabel:'골프',    price:'199,000원/월',  priceNum:199000, type:'월정액', duration:'30일 자동갱신', features:['최대 4인 이용','인당 무제한'],              sales:32,  active:true,  tag:''     },
  { cat:'home',   icon:'🏠',  name:'홈트 베이직 1개월',   badge:'badge-purple', catLabel:'홈트',    price:'29,000원',      priceNum:29000,  type:'기간',  duration:'30일',           features:['기본 콘텐츠 제공'],                        sales:156, active:true,  tag:''     },
  { cat:'home',   icon:'🏠',  name:'홈트 프리미엄 1개월', badge:'badge-purple', catLabel:'홈트',    price:'49,000원',      priceNum:49000,  type:'기간',  duration:'30일',           features:['전체 콘텐츠+AI코칭','트레이너 1:1 채팅'], sales:203, active:true,  tag:'HOT'  },
  { cat:'home',   icon:'🏠',  name:'홈트 프리미엄 3개월', badge:'badge-purple', catLabel:'홈트',    price:'129,000원',     priceNum:129000, type:'기간',  duration:'90일',           features:['전체 콘텐츠+AI코칭','월 43,000원 절약'],  sales:88,  active:true,  tag:''     },
  { cat:'home',   icon:'🏠',  name:'홈트 패밀리 이용권',  badge:'badge-purple', catLabel:'홈트',    price:'69,000원/월',   priceNum:69000,  type:'월정액', duration:'30일 자동갱신', features:['최대 4인 이용'],                           sales:46,  active:true,  tag:''     },
  { cat:'pilates',icon:'🧘',  name:'필라테스 월정액',      badge:'badge-teal',   catLabel:'필라테스', price:'99,000원/월',  priceNum:99000,  type:'월정액', duration:'30일 자동갱신', features:['그룹 수업 무제한','전문 강사 지도'],       sales:34,  active:true,  tag:''     },
  { cat:'combo',  icon:'🏆',  name:'골프+헬스 콤보 이용권', badge:'badge-orange', catLabel:'골프+헬스', price:'169,000원/월', priceNum:169000, type:'월정액', duration:'30일 자동갱신', features:['골프 무제한','헬스장 무제한','개별 대비 39,000원 절약'], sales:67, active:true, tag:'추천' },
];
