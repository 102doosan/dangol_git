/**
 * 공유 회원 데이터 (data.js)
 * 모든 관리자 HTML 파일에서 <script src="data.js"></script>로 로드해서 사용
 *
 * 구조:
 *   window.APP_DATA.members = { '회원명': { branch, joinDate, phone, list:[처방...] } }
 *   window.APP_DATA.getMemberList()         → 회원 배열 (이름 포함)
 *   window.APP_DATA.getMember(name)         → 특정 회원 객체
 *   window.APP_DATA.getLatestPrx(name)      → 최신 처방 객체 (없으면 null)
 *   window.APP_DATA.getActiveMembers()      → 활성 처방 있는 회원 배열
 *   window.APP_DATA.stats()                 → 통계 요약 객체
 */
(function () {
  const members = {
    '김도산': { branch:'강남점', joinDate:'2023.08.10', phone: '010-1234-5678',
      list: [
        {
          id: 1, name: '디스크시술 5주차', date: '2024.06.27', grade: '중급', trainer: '김트레이너',
          status: 'active', count: 23, sfmaAfter: 20, sfmaAlertDays: [10, 5, 3],
          memo: '허리에 무리가 가지 않도록 천천히 진행하세요. 통증 발생 시 즉시 중단. 4주차 이후 강도 점진적 증가 예정.',
          exercises: [
            { name:'맥켄지 신전 운동', detail:'3세트 × 10회 · 세트 간 휴식 60초', grade:'필수' },
            { name:'코어 안정화 운동', detail:'3세트 × 15회 · 세트 간 휴식 45초', grade:'필수' },
            { name:'고관절 스트레칭', detail:'2세트 × 30초 유지', grade:'권장' },
            { name:'허리 굴곡 운동', detail:'2세트 × 12회', grade:'권장' },
            { name:'골반 교정 스트레칭', detail:'1세트 × 60초', grade:'선택' },
          ],
          hist: { total:23, done:20, stop:3, rate:'87%', avg:'32분', avgSub:'목표 35분 대비',
            sessions:[
              { date:'2026.03.17 (오늘)', round:23, badge:'완료', badgeClass:'badge-green', stats:[['소요시간','34분'],['완료 운동','5/5'],['총 세트','13세트']] },
              { date:'2026.03.14', round:22, badge:'완료', badgeClass:'badge-green', stats:[['소요시간','29분'],['완료 운동','5/5'],['총 세트','13세트']] },
              { date:'2026.03.11', round:21, badge:'중단', badgeClass:'badge-red', stats:[['소요시간','12분'],['완료 운동','2/5'],['중단 사유','허리 통증']] },
              { date:'2026.03.08', round:20, badge:'완료', badgeClass:'badge-green', stats:[['소요시간','38분'],['완료 운동','5/5'],['총 세트','13세트']] },
              { date:'2026.03.05', round:19, badge:'완료', badgeClass:'badge-green', stats:[['소요시간','31분'],['완료 운동','5/5'],['총 세트','13세트']] },
              { date:'2026.03.02', round:18, badge:'완료', badgeClass:'badge-green', stats:[['소요시간','35분'],['완료 운동','5/5'],['총 세트','13세트']] },
              { date:'2026.02.27', round:17, badge:'중단', badgeClass:'badge-red', stats:[['소요시간','8분'],['완료 운동','1/5'],['중단 사유','개인 사정']] },
              { date:'2026.02.24', round:16, badge:'완료', badgeClass:'badge-green', stats:[['소요시간','33분'],['완료 운동','5/5'],['총 세트','13세트']] },
              { date:'2026.02.21', round:15, badge:'완료', badgeClass:'badge-green', stats:[['소요시간','30분'],['완료 운동','5/5'],['총 세트','13세트']] },
              { date:'2026.02.18', round:14, badge:'완료', badgeClass:'badge-green', stats:[['소요시간','28분'],['완료 운동','4/5'],['총 세트','11세트']] },
              { date:'2026.02.15', round:13, badge:'중단', badgeClass:'badge-red', stats:[['소요시간','15분'],['완료 운동','2/5'],['중단 사유','허리 통증']] },
              { date:'2026.02.12', round:12, badge:'완료', badgeClass:'badge-green', stats:[['소요시간','36분'],['완료 운동','5/5'],['총 세트','13세트']] },
              { date:'2026.02.09', round:11, badge:'완료', badgeClass:'badge-green', stats:[['소요시간','34분'],['완료 운동','5/5'],['총 세트','13세트']] },
              { date:'2026.02.06', round:10, badge:'완료', badgeClass:'badge-green', stats:[['소요시간','30분'],['완료 운동','5/5'],['총 세트','13세트']] },
              { date:'2026.02.03', round:9,  badge:'중단', badgeClass:'badge-red', stats:[['소요시간','10분'],['완료 운동','1/5'],['중단 사유','컨디션 저하']] },
              { date:'2026.01.31', round:8,  badge:'완료', badgeClass:'badge-green', stats:[['소요시간','32분'],['완료 운동','5/5'],['총 세트','13세트']] },
              { date:'2026.01.28', round:7,  badge:'완료', badgeClass:'badge-green', stats:[['소요시간','29분'],['완료 운동','5/5'],['총 세트','13세트']] },
              { date:'2026.01.25', round:6,  badge:'완료', badgeClass:'badge-green', stats:[['소요시간','28분'],['완료 운동','4/5'],['총 세트','11세트']] },
              { date:'2026.01.22', round:5,  badge:'완료', badgeClass:'badge-green', stats:[['소요시간','25분'],['완료 운동','5/5'],['총 세트','13세트']] },
              { date:'2026.01.19', round:4,  badge:'완료', badgeClass:'badge-green', stats:[['소요시간','22분'],['완료 운동','5/5'],['총 세트','13세트']] },
              { date:'2026.01.16', round:3,  badge:'완료', badgeClass:'badge-green', stats:[['소요시간','20분'],['완료 운동','4/5'],['총 세트','11세트']] },
              { date:'2026.01.13', round:2,  badge:'완료', badgeClass:'badge-green', stats:[['소요시간','18분'],['완료 운동','5/5'],['총 세트','13세트']] },
              { date:'2026.01.10', round:1,  badge:'완료', badgeClass:'badge-green', stats:[['소요시간','15분'],['완료 운동','5/5'],['총 세트','13세트']] },
            ]
          }
        },
        {
          id: 2, name: '디스크시술 4주차', date: '2024.05.15', grade: '초급', trainer: '김트레이너',
          status: 'done', count: 18, sfmaAfter: 15, sfmaAlertDays: [7, 3],
          memo: '초기 재활 단계. 통증 없는 범위 내에서 천천히 진행.',
          exercises: [
            { name:'맥켄지 신전 운동', detail:'2세트 × 8회', grade:'필수' },
            { name:'고양이-낙타 스트레칭', detail:'3세트 × 10회', grade:'필수' },
            { name:'데드버그', detail:'2세트 × 8회', grade:'권장' },
          ],
          hist: { total:18, done:16, stop:2, rate:'89%', avg:'24분', avgSub:'목표 30분 대비',
            sessions:[
              { date:'2024.05.17', round:10, badge:'완료', badgeClass:'badge-green', stats:[['소요시간','37분'],['완료 운동','3/3'],['총 세트','7세트']] },
              { date:'2024.05.14', round:9, badge:'완료', badgeClass:'badge-green', stats:[['소요시간','43분'],['완료 운동','3/3'],['총 세트','7세트']] },
              { date:'2024.05.11', round:8, badge:'완료', badgeClass:'badge-green', stats:[['소요시간','46분'],['완료 운동','3/3'],['총 세트','7세트']] },
              { date:'2024.05.08', round:7, badge:'완료', badgeClass:'badge-green', stats:[['소요시간','25분'],['완료 운동','3/3'],['총 세트','7세트']] },
              { date:'2024.05.05', round:6, badge:'완료', badgeClass:'badge-green', stats:[['소요시간','44분'],['완료 운동','3/3'],['총 세트','7세트']] },
              { date:'2024.05.02', round:5, badge:'완료', badgeClass:'badge-green', stats:[['소요시간','25분'],['완료 운동','3/3'],['총 세트','7세트']] },
              { date:'2024.04.29', round:4, badge:'완료', badgeClass:'badge-green', stats:[['소요시간','31분'],['완료 운동','3/3'],['총 세트','7세트']] },
              { date:'2024.04.26', round:3, badge:'완료', badgeClass:'badge-green', stats:[['소요시간','39분'],['완료 운동','3/3'],['총 세트','7세트']] },
              { date:'2024.04.23', round:2, badge:'완료', badgeClass:'badge-green', stats:[['소요시간','44분'],['완료 운동','3/3'],['총 세트','7세트']] },
              { date:'2024.04.20', round:1, badge:'완료', badgeClass:'badge-green', stats:[['소요시간','47분'],['완료 운동','3/3'],['총 세트','7세트']] },
              { date:'2024.06.10', round:18, badge:'완료', badgeClass:'badge-green', stats:[['소요시간','25분'],['완료 운동','3/3'],['총 세트','7세트']] },
              { date:'2024.06.07', round:17, badge:'완료', badgeClass:'badge-green', stats:[['소요시간','22분'],['완료 운동','3/3'],['총 세트','7세트']] },
              { date:'2024.06.04', round:16, badge:'중단', badgeClass:'badge-red', stats:[['소요시간','8분'],['완료 운동','1/3'],['중단 사유','피로감']] },
              { date:'2024.06.01', round:15, badge:'완료', badgeClass:'badge-green', stats:[['소요시간','24분'],['완료 운동','3/3'],['총 세트','7세트']] },
              { date:'2024.05.29', round:14, badge:'완료', badgeClass:'badge-green', stats:[['소요시간','23분'],['완료 운동','3/3'],['총 세트','7세트']] },
              { date:'2024.05.26', round:13, badge:'완료', badgeClass:'badge-green', stats:[['소요시간','22분'],['완료 운동','3/3'],['총 세트','7세트']] },
              { date:'2024.05.23', round:12, badge:'중단', badgeClass:'badge-red', stats:[['소요시간','6분'],['완료 운동','1/3'],['중단 사유','허리 통증']] },
              { date:'2024.05.20', round:11, badge:'완료', badgeClass:'badge-green', stats:[['소요시간','25분'],['완료 운동','3/3'],['총 세트','7세트']] },
            ]
          }
        },
        {
          id: 3, name: '디스크시술 3주차', date: '2024.04.01', grade: '초급', trainer: '이트레이너',
          status: 'done', count: 14, sfmaAfter: 12, sfmaAlertDays: [5, 2],
          memo: '물리치료 병행 중. 운동 강도 최소화.',
          exercises: [
            { name:'고양이-낙타 스트레칭', detail:'2세트 × 10회', grade:'필수' },
            { name:'버드독', detail:'2세트 × 8회', grade:'권장' },
          ],
          hist: { total:14, done:13, stop:1, rate:'93%', avg:'18분', avgSub:'목표 20분 대비',
            sessions:[
              { date:'2024.04.04', round:7, badge:'완료', badgeClass:'badge-green', stats:[['소요시간','26분'],['완료 운동','2/2'],['총 세트','4세트']] },
              { date:'2024.04.01', round:6, badge:'완료', badgeClass:'badge-green', stats:[['소요시간','31분'],['완료 운동','2/2'],['총 세트','4세트']] },
              { date:'2024.03.29', round:5, badge:'완료', badgeClass:'badge-green', stats:[['소요시간','40분'],['완료 운동','2/2'],['총 세트','4세트']] },
              { date:'2024.03.26', round:4, badge:'완료', badgeClass:'badge-green', stats:[['소요시간','38분'],['완료 운동','2/2'],['총 세트','4세트']] },
              { date:'2024.03.23', round:3, badge:'완료', badgeClass:'badge-green', stats:[['소요시간','50분'],['완료 운동','2/2'],['총 세트','4세트']] },
              { date:'2024.03.20', round:2, badge:'완료', badgeClass:'badge-green', stats:[['소요시간','37분'],['완료 운동','2/2'],['총 세트','4세트']] },
              { date:'2024.03.17', round:1, badge:'완료', badgeClass:'badge-green', stats:[['소요시간','48분'],['완료 운동','2/2'],['총 세트','4세트']] },
              { date:'2024.04.25', round:14, badge:'완료', badgeClass:'badge-green', stats:[['소요시간','20분'],['완료 운동','2/2'],['총 세트','4세트']] },
              { date:'2024.04.22', round:13, badge:'완료', badgeClass:'badge-green', stats:[['소요시간','17분'],['완료 운동','2/2'],['총 세트','4세트']] },
              { date:'2024.04.19', round:12, badge:'완료', badgeClass:'badge-green', stats:[['소요시간','18분'],['완료 운동','2/2'],['총 세트','4세트']] },
              { date:'2024.04.16', round:11, badge:'완료', badgeClass:'badge-green', stats:[['소요시간','16분'],['완료 운동','2/2'],['총 세트','4세트']] },
              { date:'2024.04.13', round:10, badge:'중단', badgeClass:'badge-red', stats:[['소요시간','7분'],['완료 운동','1/2'],['중단 사유','허리 통증']] },
              { date:'2024.04.10', round:9, badge:'완료', badgeClass:'badge-green', stats:[['소요시간','17분'],['완료 운동','2/2'],['총 세트','4세트']] },
              { date:'2024.04.07', round:8, badge:'완료', badgeClass:'badge-green', stats:[['소요시간','15분'],['완료 운동','2/2'],['총 세트','4세트']] },
            ]
          }
        },
        {
          id: 4, name: '초기 재활 처방', date: '2024.02.15', grade: '초급', trainer: '이트레이너',
          status: 'done', count: 10, sfmaAfter: 8, sfmaAlertDays: [3],
          memo: '수술 직후 안정기. 통증 모니터링 최우선.',
          exercises: [
            { name:'굿모닝 스트레칭', detail:'2세트 × 30초', grade:'필수' },
            { name:'척추 회전 스트레칭', detail:'2세트 × 30초', grade:'권장' },
          ],
          hist: { total:10, done:9, stop:1, rate:'90%', avg:'15분', avgSub:'',
            sessions:[
              { date:'2024.02.28', round:3, badge:'완료', badgeClass:'badge-green', stats:[['소요시간','28분'],['완료 운동','2/2'],['총 세트','4세트']] },
              { date:'2024.02.25', round:2, badge:'완료', badgeClass:'badge-green', stats:[['소요시간','43분'],['완료 운동','2/2'],['총 세트','4세트']] },
              { date:'2024.02.22', round:1, badge:'완료', badgeClass:'badge-green', stats:[['소요시간','33분'],['완료 운동','2/2'],['총 세트','4세트']] },
              { date:'2024.03.20', round:10, badge:'완료', badgeClass:'badge-green', stats:[['소요시간','16분'],['완료 운동','2/2']] },
              { date:'2024.03.17', round:9, badge:'완료', badgeClass:'badge-green', stats:[['소요시간','14분'],['완료 운동','2/2']] },
              { date:'2024.03.14', round:8, badge:'완료', badgeClass:'badge-green', stats:[['소요시간','15분'],['완료 운동','2/2']] },
              { date:'2024.03.11', round:7, badge:'완료', badgeClass:'badge-green', stats:[['소요시간','14분'],['완료 운동','2/2']] },
              { date:'2024.03.08', round:6, badge:'중단', badgeClass:'badge-red', stats:[['소요시간','5분'],['완료 운동','0/2'],['중단 사유','통증 악화']] },
              { date:'2024.03.05', round:5, badge:'완료', badgeClass:'badge-green', stats:[['소요시간','13분'],['완료 운동','2/2']] },
              { date:'2024.03.02', round:4, badge:'완료', badgeClass:'badge-green', stats:[['소요시간','12분'],['완료 운동','2/2']] },
            ]
          }
        },
      ]
    },
    '이민준': { branch:'강남점', joinDate:'2023.11.03', phone:'010-2345-6789', list:[
      { id:1, name:'코어 강화 처방', date:'2025.09.10', grade:'초급', trainer:'박트레이너', status:'active', count:31, sfmaAfter:25, sfmaAlertDays:[7,3],
        memo:'코어 근력이 약해 요통 예방 목적. 천천히 강도 증가.',
        exercises:[{name:'플랭크',detail:'3세트 × 30초',grade:'필수'},{name:'데드버그',detail:'3세트 × 10회',grade:'필수'},{name:'버드독',detail:'3세트 × 10회',grade:'권장'},{name:'힙 브릿지',detail:'3세트 × 15회',grade:'권장'}],
        hist:{total:31,done:29,stop:2,rate:'94%',avg:'28분',avgSub:'목표 30분 대비',sessions:[
              {date:'2026.02.22',round:24,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','38분'],['완료 운동','4/4'],['총 세트','12세트']]},
              {date:'2026.02.19',round:23,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','37분'],['완료 운동','4/4'],['총 세트','12세트']]},
              {date:'2026.02.16',round:22,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','31분'],['완료 운동','4/4'],['총 세트','12세트']]},
              {date:'2026.02.13',round:21,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','46분'],['완료 운동','4/4'],['총 세트','12세트']]},
              {date:'2026.02.10',round:20,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','31분'],['완료 운동','4/4'],['총 세트','12세트']]},
              {date:'2026.02.07',round:19,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','39분'],['완료 운동','4/4'],['총 세트','12세트']]},
              {date:'2026.02.04',round:18,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','29분'],['완료 운동','4/4'],['총 세트','12세트']]},
              {date:'2026.02.01',round:17,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','29분'],['완료 운동','4/4'],['총 세트','12세트']]},
              {date:'2026.01.29',round:16,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','30분'],['완료 운동','4/4'],['총 세트','12세트']]},
              {date:'2026.01.26',round:15,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','44분'],['완료 운동','4/4'],['총 세트','12세트']]},
              {date:'2026.01.23',round:14,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','42분'],['완료 운동','3/4'],['총 세트','9세트']]},
              {date:'2026.01.20',round:13,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','47분'],['완료 운동','4/4'],['총 세트','12세트']]},
              {date:'2026.01.17',round:12,badge:'중단',badgeClass:'badge-red',stats:[['소요시간','11분'],['완료 운동','3/4'],['중단 사유','통증 악화']]},
              {date:'2026.01.14',round:11,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','47분'],['완료 운동','4/4'],['총 세트','12세트']]},
              {date:'2026.01.11',round:10,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','39분'],['완료 운동','4/4'],['총 세트','12세트']]},
              {date:'2026.01.08',round:9,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','30분'],['완료 운동','4/4'],['총 세트','12세트']]},
              {date:'2026.01.05',round:8,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','45분'],['완료 운동','4/4'],['총 세트','12세트']]},
              {date:'2026.01.02',round:7,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','25분'],['완료 운동','4/4'],['총 세트','12세트']]},
              {date:'2025.12.30',round:6,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','25분'],['완료 운동','4/4'],['총 세트','12세트']]},
              {date:'2025.12.27',round:5,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','26분'],['완료 운동','4/4'],['총 세트','12세트']]},
              {date:'2025.12.24',round:4,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','37분'],['완료 운동','4/4'],['총 세트','12세트']]},
              {date:'2025.12.21',round:3,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','39분'],['완료 운동','4/4'],['총 세트','12세트']]},
              {date:'2025.12.18',round:2,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','39분'],['완료 운동','4/4'],['총 세트','12세트']]},
              {date:'2025.12.15',round:1,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','34분'],['완료 운동','4/4'],['총 세트','12세트']]},
              {date:'2026.03.15',round:31,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','27분'],['완료 운동','4/4'],['총 세트','10세트']]},
              {date:'2026.03.12',round:30,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','30분'],['완료 운동','4/4'],['총 세트','10세트']]},
              {date:'2026.03.09',round:29,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','28분'],['완료 운동','4/4'],['총 세트','10세트']]},
              {date:'2026.03.06',round:28,badge:'중단',badgeClass:'badge-red',stats:[['소요시간','10분'],['완료 운동','1/4'],['중단 사유','피로감']]},
              {date:'2026.03.03',round:27,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','29분'],['완료 운동','4/4'],['총 세트','10세트']]},
              {date:'2026.02.28',round:26,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','27분'],['완료 운동','4/4'],['총 세트','10세트']]},
              {date:'2026.02.25',round:25,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','26분'],['완료 운동','4/4'],['총 세트','10세트']]},
            ]}}
    ]},
    '정유나': { branch:'서초점', joinDate:'2022.05.17', phone:'010-5678-9012', list:[
      { id:1, name:'경추 재활 2단계', date:'2025.11.20', grade:'중급', trainer:'김트레이너', status:'active', count:18, sfmaAfter:20, sfmaAlertDays:[5,2],
        memo:'경추 추간판 탈출 보존 치료 중. 목 과신전 주의.',
        exercises:[{name:'경추 측면 스트레칭',detail:'3세트 × 30초',grade:'필수'},{name:'넥 리트렉션',detail:'3세트 × 10회',grade:'필수'},{name:'어깨 회전 운동',detail:'2세트 × 15회',grade:'권장'},{name:'승모근 스트레칭',detail:'2세트 × 30초',grade:'선택'}],
        hist:{total:18,done:17,stop:1,rate:'94%',avg:'22분',avgSub:'',sessions:[
              {date:'2026.02.23',round:11,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','33분'],['완료 운동','4/4'],['총 세트','10세트']]},
              {date:'2026.02.20',round:10,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','37분'],['완료 운동','4/4'],['총 세트','10세트']]},
              {date:'2026.02.17',round:9,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','48분'],['완료 운동','4/4'],['총 세트','10세트']]},
              {date:'2026.02.14',round:8,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','37분'],['완료 운동','4/4'],['총 세트','10세트']]},
              {date:'2026.02.11',round:7,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','41분'],['완료 운동','4/4'],['총 세트','10세트']]},
              {date:'2026.02.08',round:6,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','33분'],['완료 운동','4/4'],['총 세트','10세트']]},
              {date:'2026.02.05',round:5,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','38분'],['완료 운동','4/4'],['총 세트','10세트']]},
              {date:'2026.02.02',round:4,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','36분'],['완료 운동','3/4'],['총 세트','8세트']]},
              {date:'2026.01.30',round:3,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','32분'],['완료 운동','3/4'],['총 세트','8세트']]},
              {date:'2026.01.27',round:2,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','32분'],['완료 운동','4/4'],['총 세트','10세트']]},
              {date:'2026.01.24',round:1,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','27분'],['완료 운동','4/4'],['총 세트','10세트']]},
              {date:'2026.03.16',round:18,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','23분'],['완료 운동','4/4']]},
              {date:'2026.03.13',round:17,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','21분'],['완료 운동','4/4']]},
              {date:'2026.03.10',round:16,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','22분'],['완료 운동','4/4']]},
              {date:'2026.03.07',round:15,badge:'중단',badgeClass:'badge-red',stats:[['소요시간','8분'],['완료 운동','1/4'],['중단 사유','목 통증']]},
              {date:'2026.03.04',round:14,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','20분'],['완료 운동','4/4']]},
              {date:'2026.03.01',round:13,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','23분'],['완료 운동','4/4']]},
              {date:'2026.02.26',round:12,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','22분'],['완료 운동','4/4']]},
            ]}},
      { id:2, name:'경추 재활 1단계', date:'2025.09.01', grade:'초급', trainer:'김트레이너', status:'done', count:12, sfmaAfter:10, sfmaAlertDays:[3],
        memo:'급성기 이후 안정화 단계.',
        exercises:[{name:'경추 전굴/후굴 운동',detail:'2세트 × 10회',grade:'필수'},{name:'흉쇄유돌근 스트레칭',detail:'2세트 × 30초',grade:'권장'}],
        hist:{total:12,done:11,stop:1,rate:'92%',avg:'18분',avgSub:'',sessions:[
              {date:'2025.09.26',round:6,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','48분'],['완료 운동','2/2'],['총 세트','4세트']]},
              {date:'2025.09.23',round:5,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','32분'],['완료 운동','2/2'],['총 세트','4세트']]},
              {date:'2025.09.20',round:4,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','38분'],['완료 운동','1/2'],['총 세트','2세트']]},
              {date:'2025.09.17',round:3,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','31분'],['완료 운동','2/2'],['총 세트','4세트']]},
              {date:'2025.09.14',round:2,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','46분'],['완료 운동','2/2'],['총 세트','4세트']]},
              {date:'2025.09.11',round:1,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','32분'],['완료 운동','2/2'],['총 세트','4세트']]},
              {date:'2025.10.14',round:12,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','19분'],['완료 운동','2/2']]},
              {date:'2025.10.11',round:11,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','18분'],['완료 운동','2/2']]},
              {date:'2025.10.08',round:10,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','17분'],['완료 운동','2/2']]},
              {date:'2025.10.05',round:9,badge:'중단',badgeClass:'badge-red',stats:[['소요시간','6분'],['완료 운동','0/2'],['중단 사유','목 통증']]},
              {date:'2025.10.02',round:8,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','16분'],['완료 운동','2/2']]},
              {date:'2025.09.29',round:7,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','17분'],['완료 운동','2/2']]},
            ]}}
    ]},
    '최수진': { branch:'강남점', joinDate:'2021.02.28', phone:'010-3456-7890', list:[
      { id:1, name:'다이어트 근력 3단계', date:'2025.10.05', grade:'고급', trainer:'이트레이너', status:'done', count:40, sfmaAfter:30, sfmaAlertDays:[10,5],
        memo:'체중 감량 목표 8kg. 고강도 인터벌 병행.',
        exercises:[{name:'스쿼트',detail:'4세트 × 15회',grade:'필수'},{name:'런지',detail:'3세트 × 12회',grade:'필수'},{name:'레그 프레스',detail:'4세트 × 12회',grade:'필수'},{name:'케틀벨 스윙',detail:'3세트 × 20회',grade:'권장'},{name:'플랭크',detail:'3세트 × 45초',grade:'권장'}],
        hist:{total:40,done:38,stop:2,rate:'95%',avg:'45분',avgSub:'목표 45분 대비',sessions:[
              {date:'2026.02.17',round:33,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','48분'],['완료 운동','5/5'],['총 세트','17세트']]},
              {date:'2026.02.14',round:32,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','34분'],['완료 운동','5/5'],['총 세트','17세트']]},
              {date:'2026.02.11',round:31,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','44분'],['완료 운동','5/5'],['총 세트','17세트']]},
              {date:'2026.02.08',round:30,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','43분'],['완료 운동','5/5'],['총 세트','17세트']]},
              {date:'2026.02.05',round:29,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','44분'],['완료 운동','5/5'],['총 세트','17세트']]},
              {date:'2026.02.02',round:28,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','41분'],['완료 운동','5/5'],['총 세트','17세트']]},
              {date:'2026.01.30',round:27,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','47분'],['완료 운동','5/5'],['총 세트','17세트']]},
              {date:'2026.01.27',round:26,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','32분'],['완료 운동','5/5'],['총 세트','17세트']]},
              {date:'2026.01.24',round:25,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','33분'],['완료 운동','5/5'],['총 세트','17세트']]},
              {date:'2026.01.21',round:24,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','36분'],['완료 운동','4/5'],['총 세트','14세트']]},
              {date:'2026.01.18',round:23,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','40분'],['완료 운동','5/5'],['총 세트','17세트']]},
              {date:'2026.01.15',round:22,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','27분'],['완료 운동','4/5'],['총 세트','14세트']]},
              {date:'2026.01.12',round:21,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','33분'],['완료 운동','5/5'],['총 세트','17세트']]},
              {date:'2026.01.09',round:20,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','46분'],['완료 운동','5/5'],['총 세트','17세트']]},
              {date:'2026.01.06',round:19,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','38분'],['완료 운동','5/5'],['총 세트','17세트']]},
              {date:'2026.01.03',round:18,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','42분'],['완료 운동','5/5'],['총 세트','17세트']]},
              {date:'2025.12.31',round:17,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','35분'],['완료 운동','5/5'],['총 세트','17세트']]},
              {date:'2025.12.28',round:16,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','39분'],['완료 운동','5/5'],['총 세트','17세트']]},
              {date:'2025.12.25',round:15,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','29분'],['완료 운동','4/5'],['총 세트','14세트']]},
              {date:'2025.12.22',round:14,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','47분'],['완료 운동','5/5'],['총 세트','17세트']]},
              {date:'2025.12.19',round:13,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','40분'],['완료 운동','5/5'],['총 세트','17세트']]},
              {date:'2025.12.16',round:12,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','40분'],['완료 운동','5/5'],['총 세트','17세트']]},
              {date:'2025.12.13',round:11,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','35분'],['완료 운동','5/5'],['총 세트','17세트']]},
              {date:'2025.12.10',round:10,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','40분'],['완료 운동','5/5'],['총 세트','17세트']]},
              {date:'2025.12.07',round:9,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','45분'],['완료 운동','5/5'],['총 세트','17세트']]},
              {date:'2025.12.04',round:8,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','46분'],['완료 운동','5/5'],['총 세트','17세트']]},
              {date:'2025.12.01',round:7,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','32분'],['완료 운동','5/5'],['총 세트','17세트']]},
              {date:'2025.11.28',round:6,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','27분'],['완료 운동','5/5'],['총 세트','17세트']]},
              {date:'2025.11.25',round:5,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','41분'],['완료 운동','5/5'],['총 세트','17세트']]},
              {date:'2025.11.22',round:4,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','38분'],['완료 운동','5/5'],['총 세트','17세트']]},
              {date:'2025.11.19',round:3,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','50분'],['완료 운동','5/5'],['총 세트','17세트']]},
              {date:'2025.11.16',round:2,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','32분'],['완료 운동','5/5'],['총 세트','17세트']]},
              {date:'2025.11.13',round:1,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','49분'],['완료 운동','5/5'],['총 세트','17세트']]},
              {date:'2026.03.10',round:40,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','47분'],['완료 운동','5/5'],['총 세트','14세트']]},
              {date:'2026.03.07',round:39,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','44분'],['완료 운동','5/5'],['총 세트','14세트']]},
              {date:'2026.03.04',round:38,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','46분'],['완료 운동','5/5'],['총 세트','14세트']]},
              {date:'2026.03.01',round:37,badge:'중단',badgeClass:'badge-red',stats:[['소요시간','15분'],['완료 운동','2/5'],['중단 사유','컨디션 저하']]},
              {date:'2026.02.26',round:36,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','45분'],['완료 운동','5/5'],['총 세트','14세트']]},
              {date:'2026.02.23',round:35,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','43분'],['완료 운동','5/5'],['총 세트','14세트']]},
              {date:'2026.02.20',round:34,badge:'중단',badgeClass:'badge-red',stats:[['소요시간','12분'],['완료 운동','1/5'],['중단 사유','개인 사정']]},
            ]}}
    ]},
    '박현우': { branch:'강남점', joinDate:'2024.01.15', phone:'010-4567-8901', list:[] },
    '홍길동': { branch:'서초점', joinDate:'2023.03.22', phone:'010-6789-0123', list:[
      { id:1, name:'무릎 반월상연골 재활', date:'2025.12.01', grade:'초급', trainer:'박트레이너', status:'active', count:15, sfmaAfter:20, sfmaAlertDays:[7,3],
        memo:'반월상연골 부분 파열 보존치료. 계단 오르내리기 금지.',
        exercises:[{name:'쿼드리셉스 세팅',detail:'3세트 × 15회',grade:'필수'},{name:'스트레이트 레그 레이즈',detail:'3세트 × 12회',grade:'필수'},{name:'힙 어브덕션',detail:'2세트 × 15회',grade:'권장'},{name:'발목 펌프 운동',detail:'3세트 × 20회',grade:'권장'}],
        hist:{total:15,done:14,stop:1,rate:'93%',avg:'25분',avgSub:'',sessions:[
              {date:'2026.02.24',round:8,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','31분'],['완료 운동','4/4'],['총 세트','11세트']]},
              {date:'2026.02.21',round:7,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','38분'],['완료 운동','4/4'],['총 세트','11세트']]},
              {date:'2026.02.18',round:6,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','28분'],['완료 운동','4/4'],['총 세트','11세트']]},
              {date:'2026.02.15',round:5,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','33분'],['완료 운동','3/4'],['총 세트','8세트']]},
              {date:'2026.02.12',round:4,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','32분'],['완료 운동','3/4'],['총 세트','8세트']]},
              {date:'2026.02.09',round:3,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','25분'],['완료 운동','4/4'],['총 세트','11세트']]},
              {date:'2026.02.06',round:2,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','33분'],['완료 운동','4/4'],['총 세트','11세트']]},
              {date:'2026.02.03',round:1,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','26분'],['완료 운동','4/4'],['총 세트','11세트']]},
              {date:'2026.03.17',round:15,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','26분'],['완료 운동','4/4']]},
              {date:'2026.03.14',round:14,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','24분'],['완료 운동','4/4']]},
              {date:'2026.03.11',round:13,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','25분'],['완료 운동','4/4']]},
              {date:'2026.03.08',round:12,badge:'중단',badgeClass:'badge-red',stats:[['소요시간','9분'],['완료 운동','1/4'],['중단 사유','무릎 통증']]},
              {date:'2026.03.05',round:11,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','23분'],['완료 운동','4/4']]},
              {date:'2026.03.02',round:10,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','24분'],['완료 운동','4/4']]},
              {date:'2026.02.27',round:9,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','22분'],['완료 운동','4/4']]},
            ]}}
    ]},
    '강지훈': { branch:'마포점', joinDate:'2023.07.14', phone:'010-7890-1234', list:[
      { id:1, name:'어깨 충돌증후군 재활', date:'2025.08.15', grade:'초급', trainer:'김트레이너', status:'active', count:22, sfmaAfter:20, sfmaAlertDays:[5],
        memo:'우측 어깨 충돌증후군. 머리 위 동작 제한.',
        exercises:[{name:'어깨 으쓱하기',detail:'3세트 × 15회',grade:'필수'},{name:'밴드 외회전',detail:'3세트 × 12회',grade:'필수'},{name:'월 슬라이드',detail:'2세트 × 10회',grade:'권장'},{name:'어깨 회전 운동',detail:'2세트 × 15회',grade:'권장'},{name:'승모근 스트레칭',detail:'2세트 × 30초',grade:'선택'}],
        hist:{total:22,done:20,stop:2,rate:'91%',avg:'30분',avgSub:'',sessions:[
              {date:'2026.02.21',round:15,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','25분'],['완료 운동','5/5'],['총 세트','12세트']]},
              {date:'2026.02.18',round:14,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','28분'],['완료 운동','4/5'],['총 세트','10세트']]},
              {date:'2026.02.15',round:13,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','42분'],['완료 운동','5/5'],['총 세트','12세트']]},
              {date:'2026.02.12',round:12,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','34분'],['완료 운동','5/5'],['총 세트','12세트']]},
              {date:'2026.02.09',round:11,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','43분'],['완료 운동','5/5'],['총 세트','12세트']]},
              {date:'2026.02.06',round:10,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','40분'],['완료 운동','5/5'],['총 세트','12세트']]},
              {date:'2026.02.03',round:9,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','30분'],['완료 운동','5/5'],['총 세트','12세트']]},
              {date:'2026.01.31',round:8,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','38분'],['완료 운동','5/5'],['총 세트','12세트']]},
              {date:'2026.01.28',round:7,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','29분'],['완료 운동','5/5'],['총 세트','12세트']]},
              {date:'2026.01.25',round:6,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','34분'],['완료 운동','5/5'],['총 세트','12세트']]},
              {date:'2026.01.22',round:5,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','37분'],['완료 운동','5/5'],['총 세트','12세트']]},
              {date:'2026.01.19',round:4,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','26분'],['완료 운동','5/5'],['총 세트','12세트']]},
              {date:'2026.01.16',round:3,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','36분'],['완료 운동','4/5'],['총 세트','10세트']]},
              {date:'2026.01.13',round:2,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','47분'],['완료 운동','5/5'],['총 세트','12세트']]},
              {date:'2026.01.10',round:1,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','48분'],['완료 운동','5/5'],['총 세트','12세트']]},
              {date:'2026.03.14',round:22,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','29분'],['완료 운동','5/5']]},
              {date:'2026.03.11',round:21,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','31분'],['완료 운동','5/5']]},
              {date:'2026.03.08',round:20,badge:'중단',badgeClass:'badge-red',stats:[['소요시간','11분'],['완료 운동','2/5'],['중단 사유','어깨 통증']]},
              {date:'2026.03.05',round:19,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','28분'],['완료 운동','5/5']]},
              {date:'2026.03.02',round:18,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','30분'],['완료 운동','5/5']]},
              {date:'2026.02.27',round:17,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','29분'],['완료 운동','5/5']]},
              {date:'2026.02.24',round:16,badge:'중단',badgeClass:'badge-red',stats:[['소요시간','8분'],['완료 운동','1/5'],['중단 사유','개인 사정']]},
            ]}}
    ]},
    '박소연': { branch:'강남점', joinDate:'2024.04.01', phone:'010-8901-2345', list:[
      { id:1, name:'산후 체형 교정 처방', date:'2025.10.20', grade:'초급', trainer:'이트레이너', status:'active', count:20, sfmaAfter:24, sfmaAlertDays:[7,3],
        memo:'출산 후 6개월. 골반 불안정, 코어 약화 상태. 무리 금지.',
        exercises:[{name:'힙 브릿지',detail:'3세트 × 12회',grade:'필수'},{name:'골반 교정 스트레칭',detail:'2세트 × 60초',grade:'필수'},{name:'버드독',detail:'2세트 × 8회',grade:'권장'},{name:'고양이-낙타 스트레칭',detail:'3세트 × 10회',grade:'권장'}],
        hist:{total:20,done:19,stop:1,rate:'95%',avg:'26분',avgSub:'',sessions:[
              {date:'2026.02.23',round:13,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','50분'],['완료 운동','4/4'],['총 세트','10세트']]},
              {date:'2026.02.20',round:12,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','29분'],['완료 운동','4/4'],['총 세트','10세트']]},
              {date:'2026.02.17',round:11,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','36분'],['완료 운동','4/4'],['총 세트','10세트']]},
              {date:'2026.02.14',round:10,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','32분'],['완료 운동','4/4'],['총 세트','10세트']]},
              {date:'2026.02.11',round:9,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','43분'],['완료 운동','4/4'],['총 세트','10세트']]},
              {date:'2026.02.08',round:8,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','38분'],['완료 운동','4/4'],['총 세트','10세트']]},
              {date:'2026.02.05',round:7,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','29분'],['완료 운동','4/4'],['총 세트','10세트']]},
              {date:'2026.02.02',round:6,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','41분'],['완료 운동','4/4'],['총 세트','10세트']]},
              {date:'2026.01.30',round:5,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','36분'],['완료 운동','4/4'],['총 세트','10세트']]},
              {date:'2026.01.27',round:4,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','31분'],['완료 운동','4/4'],['총 세트','10세트']]},
              {date:'2026.01.24',round:3,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','26분'],['완료 운동','4/4'],['총 세트','10세트']]},
              {date:'2026.01.21',round:2,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','48분'],['완료 운동','4/4'],['총 세트','10세트']]},
              {date:'2026.01.18',round:1,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','35분'],['완료 운동','4/4'],['총 세트','10세트']]},
              {date:'2026.03.16',round:20,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','25분'],['완료 운동','4/4']]},
              {date:'2026.03.13',round:19,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','27분'],['완료 운동','4/4']]},
              {date:'2026.03.10',round:18,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','26분'],['완료 운동','4/4']]},
              {date:'2026.03.07',round:17,badge:'중단',badgeClass:'badge-red',stats:[['소요시간','7분'],['완료 운동','1/4'],['중단 사유','피로감']]},
              {date:'2026.03.04',round:16,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','25분'],['완료 운동','4/4']]},
              {date:'2026.03.01',round:15,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','28분'],['완료 운동','4/4']]},
              {date:'2026.02.26',round:14,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','26분'],['완료 운동','4/4']]},
            ]}}
    ]},
    '윤서준': { branch:'서초점', joinDate:'2022.09.05', phone:'010-9012-3456', list:[
      { id:1, name:'척추측만 재활 3개월차', date:'2025.07.01', grade:'중급', trainer:'박트레이너', status:'active', count:35, sfmaAfter:30, sfmaAlertDays:[10,5,3],
        memo:'흉추 20도 좌측만. 코르셋 착용 중. 비대칭 운동 주의.',
        exercises:[{name:'사이드 플랭크',detail:'3세트 × 20초',grade:'필수'},{name:'코어 안정화 운동',detail:'3세트 × 15회',grade:'필수'},{name:'흉추 회전 운동',detail:'2세트 × 10회',grade:'권장'},{name:'척추 회전 스트레칭',detail:'2세트 × 30초',grade:'권장'},{name:'어깨 스트레칭',detail:'2세트 × 30초',grade:'선택'}],
        hist:{total:35,done:33,stop:2,rate:'94%',avg:'35분',avgSub:'목표 35분 대비',sessions:[
              {date:'2026.02.24',round:28,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','41분'],['완료 운동','5/5'],['총 세트','12세트']]},
              {date:'2026.02.21',round:27,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','39분'],['완료 운동','5/5'],['총 세트','12세트']]},
              {date:'2026.02.18',round:26,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','49분'],['완료 운동','5/5'],['총 세트','12세트']]},
              {date:'2026.02.15',round:25,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','42분'],['완료 운동','5/5'],['총 세트','12세트']]},
              {date:'2026.02.12',round:24,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','35분'],['완료 운동','5/5'],['총 세트','12세트']]},
              {date:'2026.02.09',round:23,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','30분'],['완료 운동','5/5'],['총 세트','12세트']]},
              {date:'2026.02.06',round:22,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','42분'],['완료 운동','5/5'],['총 세트','12세트']]},
              {date:'2026.02.03',round:21,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','39분'],['완료 운동','5/5'],['총 세트','12세트']]},
              {date:'2026.01.31',round:20,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','28분'],['완료 운동','5/5'],['총 세트','12세트']]},
              {date:'2026.01.28',round:19,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','49분'],['완료 운동','5/5'],['총 세트','12세트']]},
              {date:'2026.01.25',round:18,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','31분'],['완료 운동','5/5'],['총 세트','12세트']]},
              {date:'2026.01.22',round:17,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','43분'],['완료 운동','5/5'],['총 세트','12세트']]},
              {date:'2026.01.19',round:16,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','46분'],['완료 운동','5/5'],['총 세트','12세트']]},
              {date:'2026.01.16',round:15,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','26분'],['완료 운동','5/5'],['총 세트','12세트']]},
              {date:'2026.01.13',round:14,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','48분'],['완료 운동','5/5'],['총 세트','12세트']]},
              {date:'2026.01.10',round:13,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','33분'],['완료 운동','5/5'],['총 세트','12세트']]},
              {date:'2026.01.07',round:12,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','36분'],['완료 운동','4/5'],['총 세트','10세트']]},
              {date:'2026.01.04',round:11,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','33분'],['완료 운동','5/5'],['총 세트','12세트']]},
              {date:'2026.01.01',round:10,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','35분'],['완료 운동','5/5'],['총 세트','12세트']]},
              {date:'2025.12.29',round:9,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','27분'],['완료 운동','5/5'],['총 세트','12세트']]},
              {date:'2025.12.26',round:8,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','32분'],['완료 운동','5/5'],['총 세트','12세트']]},
              {date:'2025.12.23',round:7,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','46분'],['완료 운동','5/5'],['총 세트','12세트']]},
              {date:'2025.12.20',round:6,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','50분'],['완료 운동','5/5'],['총 세트','12세트']]},
              {date:'2025.12.17',round:5,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','36분'],['완료 운동','5/5'],['총 세트','12세트']]},
              {date:'2025.12.14',round:4,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','50분'],['완료 운동','5/5'],['총 세트','12세트']]},
              {date:'2025.12.11',round:3,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','33분'],['완료 운동','5/5'],['총 세트','12세트']]},
              {date:'2025.12.08',round:2,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','27분'],['완료 운동','5/5'],['총 세트','12세트']]},
              {date:'2025.12.05',round:1,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','33분'],['완료 운동','5/5'],['총 세트','12세트']]},
              {date:'2026.03.17',round:35,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','36분'],['완료 운동','5/5']]},
              {date:'2026.03.14',round:34,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','34분'],['완료 운동','5/5']]},
              {date:'2026.03.11',round:33,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','35분'],['완료 운동','5/5']]},
              {date:'2026.03.08',round:32,badge:'중단',badgeClass:'badge-red',stats:[['소요시간','12분'],['완료 운동','2/5'],['중단 사유','허리 통증']]},
              {date:'2026.03.05',round:31,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','36분'],['완료 운동','5/5']]},
              {date:'2026.03.02',round:30,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','33분'],['완료 운동','5/5']]},
              {date:'2026.02.27',round:29,badge:'중단',badgeClass:'badge-red',stats:[['소요시간','10분'],['완료 운동','2/5'],['중단 사유','컨디션 저하']]},
            ]}}
    ]},
    '임채원': { branch:'마포점', joinDate:'2023.12.10', phone:'010-0123-4567', list:[
      { id:1, name:'고관절 재활 2단계', date:'2025.11.05', grade:'중급', trainer:'이트레이너', status:'active', count:16, sfmaAfter:20, sfmaAlertDays:[5,2],
        memo:'고관절 라브룸 파열 수술 후 재활 2단계.',
        exercises:[{name:'고관절 스트레칭',detail:'3세트 × 30초',grade:'필수'},{name:'힙 어브덕션',detail:'3세트 × 15회',grade:'필수'},{name:'클램쉘',detail:'3세트 × 15회',grade:'권장'},{name:'SLR 운동',detail:'2세트 × 12회',grade:'권장'}],
        hist:{total:16,done:15,stop:1,rate:'94%',avg:'28분',avgSub:'',sessions:[
              {date:'2026.02.22',round:9,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','44분'],['완료 운동','3/4'],['총 세트','9세트']]},
              {date:'2026.02.19',round:8,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','41분'],['완료 운동','3/4'],['총 세트','9세트']]},
              {date:'2026.02.16',round:7,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','30분'],['완료 운동','4/4'],['총 세트','11세트']]},
              {date:'2026.02.13',round:6,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','25분'],['완료 운동','4/4'],['총 세트','11세트']]},
              {date:'2026.02.10',round:5,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','39분'],['완료 운동','4/4'],['총 세트','11세트']]},
              {date:'2026.02.07',round:4,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','27분'],['완료 운동','4/4'],['총 세트','11세트']]},
              {date:'2026.02.04',round:3,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','44분'],['완료 운동','4/4'],['총 세트','11세트']]},
              {date:'2026.02.01',round:2,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','35분'],['완료 운동','4/4'],['총 세트','11세트']]},
              {date:'2026.01.29',round:1,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','46분'],['완료 운동','4/4'],['총 세트','11세트']]},
              {date:'2026.03.15',round:16,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','29분'],['완료 운동','4/4']]},
              {date:'2026.03.12',round:15,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','27분'],['완료 운동','4/4']]},
              {date:'2026.03.09',round:14,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','28분'],['완료 운동','4/4']]},
              {date:'2026.03.06',round:13,badge:'중단',badgeClass:'badge-red',stats:[['소요시간','9분'],['완료 운동','1/4'],['중단 사유','고관절 통증']]},
              {date:'2026.03.03',round:12,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','26분'],['완료 운동','4/4']]},
              {date:'2026.02.28',round:11,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','29분'],['완료 운동','4/4']]},
              {date:'2026.02.25',round:10,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','27분'],['완료 운동','4/4']]},
            ]}}
    ]},
    '조민서': { branch:'강남점', joinDate:'2023.05.20', phone:'010-1111-2222', list:[
      { id:1, name:'오십견 운동 치료', date:'2025.09.25', grade:'초급', trainer:'김트레이너', status:'active', count:24, sfmaAfter:20, sfmaAlertDays:[7,3],
        memo:'좌측 오십견 구축기. 통증 범위 내에서만 운동.',
        exercises:[{name:'코드만 진자 운동',detail:'3세트 × 2분',grade:'필수'},{name:'밴드 외회전',detail:'2세트 × 10회',grade:'필수'},{name:'손가락 벽 타기',detail:'3세트 × 10회',grade:'권장'},{name:'어깨 전방 스트레칭',detail:'2세트 × 30초',grade:'선택'}],
        hist:{total:24,done:22,stop:2,rate:'92%',avg:'24분',avgSub:'',sessions:[
              {date:'2026.02.20',round:17,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','46분'],['완료 운동','4/4'],['총 세트','10세트']]},
              {date:'2026.02.17',round:16,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','25분'],['완료 운동','4/4'],['총 세트','10세트']]},
              {date:'2026.02.14',round:15,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','32분'],['완료 운동','4/4'],['총 세트','10세트']]},
              {date:'2026.02.11',round:14,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','50분'],['완료 운동','3/4'],['총 세트','8세트']]},
              {date:'2026.02.08',round:13,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','48분'],['완료 운동','4/4'],['총 세트','10세트']]},
              {date:'2026.02.05',round:12,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','25분'],['완료 운동','4/4'],['총 세트','10세트']]},
              {date:'2026.02.02',round:11,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','33분'],['완료 운동','4/4'],['총 세트','10세트']]},
              {date:'2026.01.30',round:10,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','36분'],['완료 운동','4/4'],['총 세트','10세트']]},
              {date:'2026.01.27',round:9,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','45분'],['완료 운동','4/4'],['총 세트','10세트']]},
              {date:'2026.01.24',round:8,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','49분'],['완료 운동','4/4'],['총 세트','10세트']]},
              {date:'2026.01.21',round:7,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','31분'],['완료 운동','4/4'],['총 세트','10세트']]},
              {date:'2026.01.18',round:6,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','27분'],['완료 운동','4/4'],['총 세트','10세트']]},
              {date:'2026.01.15',round:5,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','39분'],['완료 운동','4/4'],['총 세트','10세트']]},
              {date:'2026.01.12',round:4,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','35분'],['완료 운동','4/4'],['총 세트','10세트']]},
              {date:'2026.01.09',round:3,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','35분'],['완료 운동','4/4'],['총 세트','10세트']]},
              {date:'2026.01.06',round:2,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','36분'],['완료 운동','4/4'],['총 세트','10세트']]},
              {date:'2026.01.03',round:1,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','41분'],['완료 운동','4/4'],['총 세트','10세트']]},
              {date:'2026.03.13',round:24,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','25분'],['완료 운동','4/4']]},
              {date:'2026.03.10',round:23,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','23분'],['완료 운동','4/4']]},
              {date:'2026.03.07',round:22,badge:'중단',badgeClass:'badge-red',stats:[['소요시간','8분'],['완료 운동','1/4'],['중단 사유','어깨 통증']]},
              {date:'2026.03.04',round:21,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','24분'],['완료 운동','4/4']]},
              {date:'2026.03.01',round:20,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','22분'],['완료 운동','4/4']]},
              {date:'2026.02.26',round:19,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','25분'],['완료 운동','4/4']]},
              {date:'2026.02.23',round:18,badge:'중단',badgeClass:'badge-red',stats:[['소요시간','7분'],['완료 운동','1/4'],['중단 사유','개인 사정']]},
            ]}}
    ]},
    '한지훈': { branch:'서초점', joinDate:'2024.02.14', phone:'010-2222-3333', list:[
      { id:1, name:'상체 근력 강화 처방', date:'2025.12.10', grade:'중급', trainer:'박트레이너', status:'active', count:14, sfmaAfter:20, sfmaAlertDays:[5],
        memo:'직장인 상체 근력 부족. 데스크워크로 인한 자세 불량 개선.',
        exercises:[{name:'풀업 보조 운동',detail:'3세트 × 8회',grade:'필수'},{name:'벤트오버 로우',detail:'3세트 × 10회',grade:'필수'},{name:'페이스풀',detail:'3세트 × 12회',grade:'권장'},{name:'넥 리트렉션',detail:'2세트 × 15회',grade:'권장'},{name:'흉추 신전 운동',detail:'2세트 × 10회',grade:'선택'}],
        hist:{total:14,done:13,stop:1,rate:'93%',avg:'38분',avgSub:'',sessions:[
              {date:'2026.02.26',round:8,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','34분'],['완료 운동','4/5'],['총 세트','11세트']]},
              {date:'2026.02.23',round:7,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','28분'],['완료 운동','5/5'],['총 세트','13세트']]},
              {date:'2026.02.20',round:6,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','25분'],['완료 운동','5/5'],['총 세트','13세트']]},
              {date:'2026.02.17',round:5,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','43분'],['완료 운동','5/5'],['총 세트','13세트']]},
              {date:'2026.02.14',round:4,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','43분'],['완료 운동','5/5'],['총 세트','13세트']]},
              {date:'2026.02.11',round:3,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','36분'],['완료 운동','5/5'],['총 세트','13세트']]},
              {date:'2026.02.08',round:2,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','47분'],['완료 운동','5/5'],['총 세트','13세트']]},
              {date:'2026.02.05',round:1,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','45분'],['완료 운동','5/5'],['총 세트','13세트']]},
              {date:'2026.03.16',round:14,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','40분'],['완료 운동','5/5']]},
              {date:'2026.03.13',round:13,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','37분'],['완료 운동','5/5']]},
              {date:'2026.03.10',round:12,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','39분'],['완료 운동','5/5']]},
              {date:'2026.03.07',round:11,badge:'중단',badgeClass:'badge-red',stats:[['소요시간','12분'],['완료 운동','2/5'],['중단 사유','어깨 결림']]},
              {date:'2026.03.04',round:10,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','38분'],['완료 운동','5/5']]},
              {date:'2026.03.01',round:9,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','36분'],['완료 운동','5/5']]},
            ]}}
    ]},
    '신예린': { branch:'마포점', joinDate:'2024.03.08', phone:'010-3333-4444', list:[
      { id:1, name:'골반 교정 집중 처방', date:'2026.01.05', grade:'초급', trainer:'이트레이너', status:'active', count:10, sfmaAfter:15, sfmaAlertDays:[5,2],
        memo:'전방 골반경사 심함. 장요근 단축으로 요통 유발.',
        exercises:[{name:'골반 교정 스트레칭',detail:'3세트 × 60초',grade:'필수'},{name:'힙 플렉서 스트레칭',detail:'3세트 × 45초',grade:'필수'},{name:'힙 브릿지',detail:'3세트 × 15회',grade:'권장'},{name:'코어 안정화 운동',detail:'2세트 × 12회',grade:'권장'}],
        hist:{total:10,done:10,stop:0,rate:'100%',avg:'29분',avgSub:'',sessions:[
              {date:'2026.02.24',round:4,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','26분'],['완료 운동','4/4'],['총 세트','11세트']]},
              {date:'2026.02.21',round:3,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','38분'],['완료 운동','4/4'],['총 세트','11세트']]},
              {date:'2026.02.18',round:2,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','28분'],['완료 운동','4/4'],['총 세트','11세트']]},
              {date:'2026.02.15',round:1,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','30분'],['완료 운동','4/4'],['총 세트','11세트']]},
              {date:'2026.03.14',round:10,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','28분'],['완료 운동','4/4']]},
              {date:'2026.03.11',round:9,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','30분'],['완료 운동','4/4']]},
              {date:'2026.03.08',round:8,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','29분'],['완료 운동','4/4']]},
              {date:'2026.03.05',round:7,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','28분'],['완료 운동','4/4']]},
              {date:'2026.03.02',round:6,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','31분'],['완료 운동','4/4']]},
              {date:'2026.02.27',round:5,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','29분'],['완료 운동','4/4']]},
            ]}}
    ]},
    '문준혁': { branch:'강남점', joinDate:'2023.10.18', phone:'010-4444-5555', list:[
      { id:1, name:'발목 인대 재활', date:'2025.10.30', grade:'초급', trainer:'김트레이너', status:'done', count:18, sfmaAfter:15, sfmaAlertDays:[5,3],
        memo:'외측 인대 3도 파열 수술 후 재활. 점프 동작 금지.',
        exercises:[{name:'발목 펌프 운동',detail:'3세트 × 20회',grade:'필수'},{name:'밸런스 보드 훈련',detail:'3세트 × 30초',grade:'필수'},{name:'카프 레이즈',detail:'3세트 × 15회',grade:'권장'}],
        hist:{total:18,done:17,stop:1,rate:'94%',avg:'22분',avgSub:'',sessions:[
              {date:'2026.02.07',round:11,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','34분'],['완료 운동','3/3'],['총 세트','9세트']]},
              {date:'2026.02.04',round:10,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','35분'],['완료 운동','3/3'],['총 세트','9세트']]},
              {date:'2026.02.01',round:9,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','35분'],['완료 운동','3/3'],['총 세트','9세트']]},
              {date:'2026.01.29',round:8,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','25분'],['완료 운동','3/3'],['총 세트','9세트']]},
              {date:'2026.01.26',round:7,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','32분'],['완료 운동','3/3'],['총 세트','9세트']]},
              {date:'2026.01.23',round:6,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','29분'],['완료 운동','3/3'],['총 세트','9세트']]},
              {date:'2026.01.20',round:5,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','49분'],['완료 운동','3/3'],['총 세트','9세트']]},
              {date:'2026.01.17',round:4,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','50분'],['완료 운동','3/3'],['총 세트','9세트']]},
              {date:'2026.01.14',round:3,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','36분'],['완료 운동','3/3'],['총 세트','9세트']]},
              {date:'2026.01.11',round:2,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','43분'],['완료 운동','3/3'],['총 세트','9세트']]},
              {date:'2026.01.08',round:1,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','41분'],['완료 운동','3/3'],['총 세트','9세트']]},
              {date:'2026.02.28',round:18,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','23분'],['완료 운동','3/3']]},
              {date:'2026.02.25',round:17,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','22분'],['완료 운동','3/3']]},
              {date:'2026.02.22',round:16,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','21분'],['완료 운동','3/3']]},
              {date:'2026.02.19',round:15,badge:'중단',badgeClass:'badge-red',stats:[['소요시간','7분'],['완료 운동','1/3'],['중단 사유','발목 통증']]},
              {date:'2026.02.16',round:14,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','22분'],['완료 운동','3/3']]},
              {date:'2026.02.13',round:13,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','20분'],['완료 운동','3/3']]},
              {date:'2026.02.10',round:12,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','21분'],['완료 운동','3/3']]},
            ]}}
    ]},
    '오지현': { branch:'서초점', joinDate:'2024.06.30', phone:'010-5555-6666', list:[
      { id:1, name:'체형 교정 처방', date:'2026.01.20', grade:'초급', trainer:'박트레이너', status:'active', count:8, sfmaAfter:16, sfmaAlertDays:[5],
        memo:'라운드숄더 + 거북목 복합. 흉추 이동성 증가 목표.',
        exercises:[{name:'흉추 신전 운동',detail:'3세트 × 10회',grade:'필수'},{name:'페이스풀',detail:'3세트 × 15회',grade:'필수'},{name:'넥 리트렉션',detail:'3세트 × 12회',grade:'권장'},{name:'가슴 스트레칭',detail:'2세트 × 30초',grade:'선택'}],
        hist:{total:8,done:8,stop:0,rate:'100%',avg:'26분',avgSub:'',sessions:[
              {date:'2026.02.20',round:2,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','27분'],['완료 운동','4/4'],['총 세트','11세트']]},
              {date:'2026.02.17',round:1,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','34분'],['완료 운동','4/4'],['총 세트','11세트']]},
              {date:'2026.03.10',round:8,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','25분'],['완료 운동','4/4']]},
              {date:'2026.03.07',round:7,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','27분'],['완료 운동','4/4']]},
              {date:'2026.03.04',round:6,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','26분'],['완료 운동','4/4']]},
              {date:'2026.03.01',round:5,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','25분'],['완료 운동','4/4']]},
              {date:'2026.02.26',round:4,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','28분'],['완료 운동','4/4']]},
              {date:'2026.02.23',round:3,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','26분'],['완료 운동','4/4']]},
            ]}}
    ]},
    '배성민': { branch:'마포점', joinDate:'2023.01.07', phone:'010-6666-7777', list:[
      { id:1, name:'전방십자인대 재활 6개월', date:'2025.06.01', grade:'중급', trainer:'이트레이너', status:'active', count:42, sfmaAfter:40, sfmaAlertDays:[10,5,3],
        memo:'ACL 재건술 후 재활 6개월차. 컷팅 동작 아직 금지.',
        exercises:[{name:'레그 프레스',detail:'4세트 × 12회',grade:'필수'},{name:'레그 컬',detail:'3세트 × 12회',grade:'필수'},{name:'스텝업',detail:'3세트 × 10회',grade:'필수'},{name:'밸런스 훈련',detail:'3세트 × 30초',grade:'권장'},{name:'카프 레이즈',detail:'3세트 × 20회',grade:'권장'}],
        hist:{total:42,done:40,stop:2,rate:'95%',avg:'42분',avgSub:'목표 40분 대비',sessions:[
              {date:'2026.02.24',round:35,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','29분'],['완료 운동','4/5'],['총 세트','13세트']]},
              {date:'2026.02.21',round:34,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','34분'],['완료 운동','5/5'],['총 세트','16세트']]},
              {date:'2026.02.18',round:33,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','40분'],['완료 운동','5/5'],['총 세트','16세트']]},
              {date:'2026.02.15',round:32,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','30분'],['완료 운동','5/5'],['총 세트','16세트']]},
              {date:'2026.02.12',round:31,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','31분'],['완료 운동','4/5'],['총 세트','13세트']]},
              {date:'2026.02.09',round:30,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','43분'],['완료 운동','5/5'],['총 세트','16세트']]},
              {date:'2026.02.06',round:29,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','47분'],['완료 운동','5/5'],['총 세트','16세트']]},
              {date:'2026.02.03',round:28,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','28분'],['완료 운동','5/5'],['총 세트','16세트']]},
              {date:'2026.01.31',round:27,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','32분'],['완료 운동','5/5'],['총 세트','16세트']]},
              {date:'2026.01.28',round:26,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','28분'],['완료 운동','5/5'],['총 세트','16세트']]},
              {date:'2026.01.25',round:25,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','28분'],['완료 운동','5/5'],['총 세트','16세트']]},
              {date:'2026.01.22',round:24,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','37분'],['완료 운동','5/5'],['총 세트','16세트']]},
              {date:'2026.01.19',round:23,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','46분'],['완료 운동','5/5'],['총 세트','16세트']]},
              {date:'2026.01.16',round:22,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','32분'],['완료 운동','5/5'],['총 세트','16세트']]},
              {date:'2026.01.13',round:21,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','44분'],['완료 운동','5/5'],['총 세트','16세트']]},
              {date:'2026.01.10',round:20,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','50분'],['완료 운동','5/5'],['총 세트','16세트']]},
              {date:'2026.01.07',round:19,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','35분'],['완료 운동','5/5'],['총 세트','16세트']]},
              {date:'2026.01.04',round:18,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','33분'],['완료 운동','5/5'],['총 세트','16세트']]},
              {date:'2026.01.01',round:17,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','32분'],['완료 운동','5/5'],['총 세트','16세트']]},
              {date:'2025.12.29',round:16,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','36분'],['완료 운동','5/5'],['총 세트','16세트']]},
              {date:'2025.12.26',round:15,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','30분'],['완료 운동','5/5'],['총 세트','16세트']]},
              {date:'2025.12.23',round:14,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','48분'],['완료 운동','5/5'],['총 세트','16세트']]},
              {date:'2025.12.20',round:13,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','40분'],['완료 운동','5/5'],['총 세트','16세트']]},
              {date:'2025.12.17',round:12,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','33분'],['완료 운동','5/5'],['총 세트','16세트']]},
              {date:'2025.12.14',round:11,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','48분'],['완료 운동','5/5'],['총 세트','16세트']]},
              {date:'2025.12.11',round:10,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','40분'],['완료 운동','5/5'],['총 세트','16세트']]},
              {date:'2025.12.08',round:9,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','39분'],['완료 운동','5/5'],['총 세트','16세트']]},
              {date:'2025.12.05',round:8,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','44분'],['완료 운동','5/5'],['총 세트','16세트']]},
              {date:'2025.12.02',round:7,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','36분'],['완료 운동','5/5'],['총 세트','16세트']]},
              {date:'2025.11.29',round:6,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','32분'],['완료 운동','5/5'],['총 세트','16세트']]},
              {date:'2025.11.26',round:5,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','43분'],['완료 운동','5/5'],['총 세트','16세트']]},
              {date:'2025.11.23',round:4,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','49분'],['완료 운동','5/5'],['총 세트','16세트']]},
              {date:'2025.11.20',round:3,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','35분'],['완료 운동','5/5'],['총 세트','16세트']]},
              {date:'2025.11.17',round:2,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','28분'],['완료 운동','5/5'],['총 세트','16세트']]},
              {date:'2025.11.14',round:1,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','50분'],['완료 운동','5/5'],['총 세트','16세트']]},
              {date:'2026.03.17',round:42,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','44분'],['완료 운동','5/5']]},
              {date:'2026.03.14',round:41,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','43분'],['완료 운동','5/5']]},
              {date:'2026.03.11',round:40,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','42분'],['완료 운동','5/5']]},
              {date:'2026.03.08',round:39,badge:'중단',badgeClass:'badge-red',stats:[['소요시간','14분'],['완료 운동','2/5'],['중단 사유','무릎 부기']]},
              {date:'2026.03.05',round:38,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','44분'],['완료 운동','5/5']]},
              {date:'2026.03.02',round:37,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','41분'],['완료 운동','5/5']]},
              {date:'2026.02.27',round:36,badge:'중단',badgeClass:'badge-red',stats:[['소요시간','10분'],['완료 운동','1/5'],['중단 사유','개인 사정']]},
            ]}}
    ]},
    '황지수': { branch:'강남점', joinDate:'2024.08.22', phone:'010-7777-8888', list:[
      { id:1, name:'목 디스크 보존 처방', date:'2025.11.10', grade:'초급', trainer:'김트레이너', status:'active', count:17, sfmaAfter:20, sfmaAlertDays:[7,3],
        memo:'C5-C6 추간판 탈출. 우측 팔 저림 있음. 목 회전 제한.',
        exercises:[{name:'경추 측면 스트레칭',detail:'3세트 × 30초',grade:'필수'},{name:'넥 리트렉션',detail:'3세트 × 15회',grade:'필수'},{name:'어깨 으쓱하기',detail:'2세트 × 15회',grade:'권장'},{name:'흉쇄유돌근 스트레칭',detail:'2세트 × 30초',grade:'선택'}],
        hist:{total:17,done:16,stop:1,rate:'94%',avg:'21분',avgSub:'',sessions:[
              {date:'2026.02.22',round:10,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','26분'],['완료 운동','3/4'],['총 세트','8세트']]},
              {date:'2026.02.19',round:9,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','46분'],['완료 운동','4/4'],['총 세트','10세트']]},
              {date:'2026.02.16',round:8,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','47분'],['완료 운동','4/4'],['총 세트','10세트']]},
              {date:'2026.02.13',round:7,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','47분'],['완료 운동','4/4'],['총 세트','10세트']]},
              {date:'2026.02.10',round:6,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','35분'],['완료 운동','4/4'],['총 세트','10세트']]},
              {date:'2026.02.07',round:5,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','39분'],['완료 운동','4/4'],['총 세트','10세트']]},
              {date:'2026.02.04',round:4,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','37분'],['완료 운동','4/4'],['총 세트','10세트']]},
              {date:'2026.02.01',round:3,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','33분'],['완료 운동','3/4'],['총 세트','8세트']]},
              {date:'2026.01.29',round:2,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','27분'],['완료 운동','3/4'],['총 세트','8세트']]},
              {date:'2026.01.26',round:1,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','35분'],['완료 운동','4/4'],['총 세트','10세트']]},
              {date:'2026.03.15',round:17,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','22분'],['완료 운동','4/4']]},
              {date:'2026.03.12',round:16,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','21분'],['완료 운동','4/4']]},
              {date:'2026.03.09',round:15,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','20분'],['완료 운동','4/4']]},
              {date:'2026.03.06',round:14,badge:'중단',badgeClass:'badge-red',stats:[['소요시간','8분'],['완료 운동','1/4'],['중단 사유','목 저림']]},
              {date:'2026.03.03',round:13,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','21분'],['완료 운동','4/4']]},
              {date:'2026.02.28',round:12,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','22분'],['완료 운동','4/4']]},
              {date:'2026.02.25',round:11,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','20분'],['완료 운동','4/4']]},
            ]}}
    ]},
    '류민준': { branch:'서초점', joinDate:'2023.06.11', phone:'010-8888-9999', list:[
      { id:1, name:'심폐 기능 강화', date:'2025.10.15', grade:'고급', trainer:'박트레이너', status:'done', count:30, sfmaAfter:25, sfmaAlertDays:[7,3],
        memo:'마라톤 준비. 심박수 관리 필수. VO2max 향상 목표.',
        exercises:[{name:'인터벌 런닝',detail:'5세트 × 4분',grade:'필수'},{name:'버피테스트',detail:'4세트 × 15회',grade:'필수'},{name:'로잉 머신',detail:'3세트 × 5분',grade:'권장'},{name:'점프 스쿼트',detail:'3세트 × 12회',grade:'권장'}],
        hist:{total:30,done:28,stop:2,rate:'93%',avg:'55분',avgSub:'목표 60분 대비',sessions:[{date:'2026.02.17',round:29,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','44분'],['완료 운동','4/4'],['총 세트','15세트']]},{date:'2026.02.14',round:28,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','43분'],['완료 운동','4/4'],['총 세트','15세트']]},{date:'2026.02.11',round:27,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','36분'],['완료 운동','3/4'],['총 세트','12세트']]},{date:'2026.02.08',round:26,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','25분'],['완료 운동','4/4'],['총 세트','15세트']]},{date:'2026.02.05',round:25,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','36분'],['완료 운동','3/4'],['총 세트','12세트']]},{date:'2026.02.02',round:24,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','26분'],['완료 운동','4/4'],['총 세트','15세트']]},{date:'2026.01.30',round:23,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','27분'],['완료 운동','4/4'],['총 세트','15세트']]},{date:'2026.01.27',round:22,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','50분'],['완료 운동','3/4'],['총 세트','12세트']]},{date:'2026.01.24',round:21,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','39분'],['완료 운동','4/4'],['총 세트','15세트']]},{date:'2026.01.21',round:20,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','44분'],['완료 운동','4/4'],['총 세트','15세트']]},{date:'2026.01.18',round:19,badge:'중단',badgeClass:'badge-red',stats:[['소요시간','12분'],['완료 운동','3/4'],['중단 사유','개인 사정']]},{date:'2026.01.15',round:18,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','35분'],['완료 운동','4/4'],['총 세트','15세트']]},{date:'2026.01.12',round:17,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','25분'],['완료 운동','4/4'],['총 세트','15세트']]},{date:'2026.01.09',round:16,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','27분'],['완료 운동','4/4'],['총 세트','15세트']]},{date:'2026.01.06',round:15,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','25분'],['완료 운동','4/4'],['총 세트','15세트']]},{date:'2026.01.03',round:14,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','32분'],['완료 운동','4/4'],['총 세트','15세트']]},{date:'2025.12.31',round:13,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','37분'],['완료 운동','4/4'],['총 세트','15세트']]},{date:'2025.12.28',round:12,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','45분'],['완료 운동','4/4'],['총 세트','15세트']]},{date:'2025.12.25',round:11,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','40분'],['완료 운동','4/4'],['총 세트','15세트']]},{date:'2025.12.22',round:10,badge:'중단',badgeClass:'badge-red',stats:[['소요시간','10분'],['완료 운동','3/4'],['중단 사유','통증 악화']]},{date:'2025.12.19',round:9,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','27분'],['완료 운동','4/4'],['총 세트','15세트']]},{date:'2025.12.16',round:8,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','43분'],['완료 운동','4/4'],['총 세트','15세트']]},{date:'2025.12.13',round:7,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','25분'],['완료 운동','4/4'],['총 세트','15세트']]},{date:'2025.12.10',round:6,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','39분'],['완료 운동','3/4'],['총 세트','12세트']]},{date:'2025.12.07',round:5,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','49분'],['완료 운동','4/4'],['총 세트','15세트']]},{date:'2025.12.04',round:4,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','29분'],['완료 운동','4/4'],['총 세트','15세트']]},{date:'2025.12.01',round:3,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','32분'],['완료 운동','4/4'],['총 세트','15세트']]},{date:'2025.11.28',round:2,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','31분'],['완료 운동','4/4'],['총 세트','15세트']]},{date:'2025.11.25',round:1,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','49분'],['완료 운동','4/4'],['총 세트','15세트']]},{date:'2026.02.20',round:30,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','57분'],['완료 운동','4/4']]}]}}
    ]},
    '전소희': { branch:'마포점', joinDate:'2024.07.05', phone:'010-9999-0000', list:[
      { id:1, name:'다이어트 처방 1단계', date:'2026.02.01', grade:'초급', trainer:'이트레이너', status:'active', count:7, sfmaAfter:12, sfmaAlertDays:[4,2],
        memo:'체중 55kg → 48kg 목표. 관절 약함. 저충격 운동 위주.',
        exercises:[{name:'워킹 런지',detail:'3세트 × 10회',grade:'필수'},{name:'레그 레이즈',detail:'3세트 × 12회',grade:'필수'},{name:'사이드 스텝',detail:'3세트 × 20회',grade:'권장'},{name:'플랭크',detail:'3세트 × 20초',grade:'권장'}],
        hist:{total:7,done:7,stop:0,rate:'100%',avg:'30분',avgSub:'',sessions:[{date:'2026.03.10',round:6,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','48분'],['완료 운동','4/4'],['총 세트','12세트']]},{date:'2026.03.07',round:5,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','46분'],['완료 운동','4/4'],['총 세트','12세트']]},{date:'2026.03.04',round:4,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','30분'],['완료 운동','4/4'],['총 세트','12세트']]},{date:'2026.03.01',round:3,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','30분'],['완료 운동','4/4'],['총 세트','12세트']]},{date:'2026.02.26',round:2,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','41분'],['완료 운동','4/4'],['총 세트','12세트']]},{date:'2026.02.23',round:1,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','37분'],['완료 운동','4/4'],['총 세트','12세트']]},{date:'2026.03.13',round:7,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','32분'],['완료 운동','4/4']]}]}}
    ]},
    '송혜원': { branch:'강남점', joinDate:'2023.09.14', phone:'010-1010-2020', list:[
      { id:1, name:'테니스엘보 재활', date:'2025.08.01', grade:'초급', trainer:'김트레이너', status:'done', count:20, sfmaAfter:16, sfmaAlertDays:[5,2],
        memo:'우측 외측상과염. 손목 굴곡/신전 강화. 그립 강도 주의.',
        exercises:[{name:'손목 굴곡 운동',detail:'3세트 × 15회',grade:'필수'},{name:'손목 신전 운동',detail:'3세트 × 15회',grade:'필수'},{name:'전완 스트레칭',detail:'3세트 × 30초',grade:'권장'},{name:'밴드 외회전',detail:'2세트 × 12회',grade:'선택'}],
        hist:{total:20,done:19,stop:1,rate:'95%',avg:'20분',avgSub:'',sessions:[{date:'2025.12.07',round:19,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','50분'],['완료 운동','4/4'],['총 세트','11세트']]},{date:'2025.12.04',round:18,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','28분'],['완료 운동','4/4'],['총 세트','11세트']]},{date:'2025.12.01',round:17,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','49분'],['완료 운동','4/4'],['총 세트','11세트']]},{date:'2025.11.28',round:16,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','36분'],['완료 운동','3/4'],['총 세트','9세트']]},{date:'2025.11.25',round:15,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','47분'],['완료 운동','3/4'],['총 세트','9세트']]},{date:'2025.11.22',round:14,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','49분'],['완료 운동','4/4'],['총 세트','11세트']]},{date:'2025.11.19',round:13,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','36분'],['완료 운동','4/4'],['총 세트','11세트']]},{date:'2025.11.16',round:12,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','44분'],['완료 운동','4/4'],['총 세트','11세트']]},{date:'2025.11.13',round:11,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','41분'],['완료 운동','4/4'],['총 세트','11세트']]},{date:'2025.11.10',round:10,badge:'중단',badgeClass:'badge-red',stats:[['소요시간','11분'],['완료 운동','2/4'],['중단 사유','피로감']]},{date:'2025.11.07',round:9,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','47분'],['완료 운동','3/4'],['총 세트','9세트']]},{date:'2025.11.04',round:8,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','44분'],['완료 운동','4/4'],['총 세트','11세트']]},{date:'2025.11.01',round:7,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','35분'],['완료 운동','4/4'],['총 세트','11세트']]},{date:'2025.10.29',round:6,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','49분'],['완료 운동','4/4'],['총 세트','11세트']]},{date:'2025.10.26',round:5,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','40분'],['완료 운동','4/4'],['총 세트','11세트']]},{date:'2025.10.23',round:4,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','43분'],['완료 운동','4/4'],['총 세트','11세트']]},{date:'2025.10.20',round:3,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','26분'],['완료 운동','4/4'],['총 세트','11세트']]},{date:'2025.10.17',round:2,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','41분'],['완료 운동','4/4'],['총 세트','11세트']]},{date:'2025.10.14',round:1,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','45분'],['완료 운동','4/4'],['총 세트','11세트']]},{date:'2025.12.10',round:20,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','21분'],['완료 운동','4/4']]}]}}
    ]},
    '안성훈': { branch:'서초점', joinDate:'2022.11.30', phone:'010-2020-3030', list:[
      { id:1, name:'당뇨 관리 운동 처방', date:'2025.09.01', grade:'중급', trainer:'박트레이너', status:'active', count:28, sfmaAfter:30, sfmaAlertDays:[7,3],
        memo:'2형 당뇨. 혈당 관리 목적. 운동 전후 혈당 체크 필수.',
        exercises:[{name:'스쿼트',detail:'3세트 × 15회',grade:'필수'},{name:'레그 프레스',detail:'3세트 × 12회',grade:'필수'},{name:'인터벌 워킹',detail:'5세트 × 3분',grade:'필수'},{name:'힙 브릿지',detail:'3세트 × 15회',grade:'권장'},{name:'플랭크',detail:'2세트 × 30초',grade:'선택'}],
        hist:{total:28,done:26,stop:2,rate:'93%',avg:'40분',avgSub:'',sessions:[{date:'2026.03.13',round:27,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','47분'],['완료 운동','5/5'],['총 세트','16세트']]},{date:'2026.03.10',round:26,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','35분'],['완료 운동','5/5'],['총 세트','16세트']]},{date:'2026.03.07',round:25,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','30분'],['완료 운동','5/5'],['총 세트','16세트']]},{date:'2026.03.04',round:24,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','46분'],['완료 운동','5/5'],['총 세트','16세트']]},{date:'2026.03.01',round:23,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','26분'],['완료 운동','5/5'],['총 세트','16세트']]},{date:'2026.02.26',round:22,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','29분'],['완료 운동','5/5'],['총 세트','16세트']]},{date:'2026.02.23',round:21,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','32분'],['완료 운동','5/5'],['총 세트','16세트']]},{date:'2026.02.20',round:20,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','38분'],['완료 운동','5/5'],['총 세트','16세트']]},{date:'2026.02.17',round:19,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','37분'],['완료 운동','4/5'],['총 세트','14세트']]},{date:'2026.02.14',round:18,badge:'중단',badgeClass:'badge-red',stats:[['소요시간','18분'],['완료 운동','4/5'],['중단 사유','컨디션 저하']]},{date:'2026.02.11',round:17,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','37분'],['완료 운동','5/5'],['총 세트','16세트']]},{date:'2026.02.08',round:16,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','28분'],['완료 운동','5/5'],['총 세트','16세트']]},{date:'2026.02.05',round:15,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','41분'],['완료 운동','5/5'],['총 세트','16세트']]},{date:'2026.02.02',round:14,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','42분'],['완료 운동','5/5'],['총 세트','16세트']]},{date:'2026.01.30',round:13,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','39분'],['완료 운동','5/5'],['총 세트','16세트']]},{date:'2026.01.27',round:12,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','42분'],['완료 운동','5/5'],['총 세트','16세트']]},{date:'2026.01.24',round:11,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','40분'],['완료 운동','5/5'],['총 세트','16세트']]},{date:'2026.01.21',round:10,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','40분'],['완료 운동','5/5'],['총 세트','16세트']]},{date:'2026.01.18',round:9,badge:'중단',badgeClass:'badge-red',stats:[['소요시간','7분'],['완료 운동','3/5'],['중단 사유','목 통증']]},{date:'2026.01.15',round:8,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','42분'],['완료 운동','5/5'],['총 세트','16세트']]},{date:'2026.01.12',round:7,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','34분'],['완료 운동','5/5'],['총 세트','16세트']]},{date:'2026.01.09',round:6,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','47분'],['완료 운동','5/5'],['총 세트','16세트']]},{date:'2026.01.06',round:5,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','27분'],['완료 운동','5/5'],['총 세트','16세트']]},{date:'2026.01.03',round:4,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','48분'],['완료 운동','4/5'],['총 세트','14세트']]},{date:'2025.12.31',round:3,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','29분'],['완료 운동','5/5'],['총 세트','16세트']]},{date:'2025.12.28',round:2,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','44분'],['완료 운동','5/5'],['총 세트','16세트']]},{date:'2025.12.25',round:1,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','30분'],['완료 운동','5/5'],['총 세트','16세트']]},{date:'2026.03.16',round:28,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','42분'],['완료 운동','5/5']]}]}}
    ]},
    '서준영': { branch:'마포점', joinDate:'2023.04.22', phone:'010-3030-4040', list:[
      { id:1, name:'고혈압 관리 운동', date:'2025.11.01', grade:'초급', trainer:'이트레이너', status:'active', count:19, sfmaAfter:20, sfmaAlertDays:[5,3],
        memo:'수축기 혈압 150. 유산소 위주. 발살바 호흡 금지.',
        exercises:[{name:'인터벌 워킹',detail:'6세트 × 3분',grade:'필수'},{name:'스트레칭 루틴',detail:'전신 30분',grade:'필수'},{name:'의자 스쿼트',detail:'3세트 × 12회',grade:'권장'},{name:'밴드 로우',detail:'2세트 × 15회',grade:'선택'}],
        hist:{total:19,done:18,stop:1,rate:'95%',avg:'35분',avgSub:'',sessions:[{date:'2026.03.11',round:18,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','27분'],['완료 운동','4/4'],['총 세트','11세트']]},{date:'2026.03.08',round:17,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','47분'],['완료 운동','4/4'],['총 세트','11세트']]},{date:'2026.03.05',round:16,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','42분'],['완료 운동','4/4'],['총 세트','11세트']]},{date:'2026.03.02',round:15,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','47분'],['완료 운동','4/4'],['총 세트','11세트']]},{date:'2026.02.27',round:14,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','44분'],['완료 운동','3/4'],['총 세트','9세트']]},{date:'2026.02.24',round:13,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','30분'],['완료 운동','4/4'],['총 세트','11세트']]},{date:'2026.02.21',round:12,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','25분'],['완료 운동','4/4'],['총 세트','11세트']]},{date:'2026.02.18',round:11,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','48분'],['완료 운동','4/4'],['총 세트','11세트']]},{date:'2026.02.15',round:10,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','44분'],['완료 운동','3/4'],['총 세트','9세트']]},{date:'2026.02.12',round:9,badge:'중단',badgeClass:'badge-red',stats:[['소요시간','8분'],['완료 운동','1/4'],['중단 사유','허리 통증']]},{date:'2026.02.09',round:8,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','45분'],['완료 운동','4/4'],['총 세트','11세트']]},{date:'2026.02.06',round:7,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','43분'],['완료 운동','4/4'],['총 세트','11세트']]},{date:'2026.02.03',round:6,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','31분'],['완료 운동','4/4'],['총 세트','11세트']]},{date:'2026.01.31',round:5,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','36분'],['완료 운동','4/4'],['총 세트','11세트']]},{date:'2026.01.28',round:4,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','40분'],['완료 운동','4/4'],['총 세트','11세트']]},{date:'2026.01.25',round:3,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','27분'],['완료 운동','4/4'],['총 세트','11세트']]},{date:'2026.01.22',round:2,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','44분'],['완료 운동','3/4'],['총 세트','9세트']]},{date:'2026.01.19',round:1,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','45분'],['완료 운동','4/4'],['총 세트','11세트']]},{date:'2026.03.14',round:19,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','36분'],['완료 운동','4/4']]}]}}
    ]},
    '방미래': { branch:'강남점', joinDate:'2024.09.15', phone:'010-4040-5050', list:[
      { id:1, name:'좌골신경통 재활', date:'2026.01.10', grade:'초급', trainer:'김트레이너', status:'active', count:9, sfmaAfter:15, sfmaAlertDays:[5],
        memo:'이상근 증후군으로 인한 좌골신경통. 좌측 둔부 통증.',
        exercises:[{name:'이상근 스트레칭',detail:'3세트 × 45초',grade:'필수'},{name:'고관절 스트레칭',detail:'3세트 × 30초',grade:'필수'},{name:'버드독',detail:'2세트 × 10회',grade:'권장'},{name:'클램쉘',detail:'2세트 × 15회',grade:'권장'}],
        hist:{total:9,done:9,stop:0,rate:'100%',avg:'25분',avgSub:'',sessions:[{date:'2026.03.09',round:8,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','44분'],['완료 운동','4/4'],['총 세트','10세트']]},{date:'2026.03.06',round:7,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','43분'],['완료 운동','4/4'],['총 세트','10세트']]},{date:'2026.03.03',round:6,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','43분'],['완료 운동','4/4'],['총 세트','10세트']]},{date:'2026.02.28',round:5,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','47분'],['완료 운동','4/4'],['총 세트','10세트']]},{date:'2026.02.25',round:4,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','40분'],['완료 운동','3/4'],['총 세트','8세트']]},{date:'2026.02.22',round:3,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','46분'],['완료 운동','4/4'],['총 세트','10세트']]},{date:'2026.02.19',round:2,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','39분'],['완료 운동','4/4'],['총 세트','10세트']]},{date:'2026.02.16',round:1,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','34분'],['완료 운동','4/4'],['총 세트','10세트']]},{date:'2026.03.12',round:9,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','24분'],['완료 운동','4/4']]}]}}
    ]},
    '표재원': { branch:'서초점', joinDate:'2023.08.09', phone:'010-5050-6060', list:[
      { id:1, name:'회전근개 파열 재활', date:'2025.07.20', grade:'중급', trainer:'박트레이너', status:'active', count:33, sfmaAfter:30, sfmaAlertDays:[10,5],
        memo:'우측 극상근 부분파열 수술 후 재활 4개월차.',
        exercises:[{name:'밴드 외회전',detail:'3세트 × 15회',grade:'필수'},{name:'사이드 레이즈',detail:'3세트 × 10회',grade:'필수'},{name:'어깨 으쓱하기',detail:'2세트 × 20회',grade:'권장'},{name:'벽 밀기',detail:'3세트 × 10회',grade:'권장'},{name:'어깨 전방 스트레칭',detail:'2세트 × 30초',grade:'선택'}],
        hist:{total:33,done:31,stop:2,rate:'94%',avg:'33분',avgSub:'',sessions:[{date:'2026.03.12',round:32,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','45분'],['완료 운동','5/5'],['총 세트','13세트']]},{date:'2026.03.09',round:31,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','43분'],['완료 운동','5/5'],['총 세트','13세트']]},{date:'2026.03.06',round:30,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','48분'],['완료 운동','5/5'],['총 세트','13세트']]},{date:'2026.03.03',round:29,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','36분'],['완료 운동','5/5'],['총 세트','13세트']]},{date:'2026.02.28',round:28,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','32분'],['완료 운동','5/5'],['총 세트','13세트']]},{date:'2026.02.25',round:27,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','42분'],['완료 운동','5/5'],['총 세트','13세트']]},{date:'2026.02.22',round:26,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','43분'],['완료 운동','5/5'],['총 세트','13세트']]},{date:'2026.02.19',round:25,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','49분'],['완료 운동','5/5'],['총 세트','13세트']]},{date:'2026.02.16',round:24,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','42분'],['완료 운동','5/5'],['총 세트','13세트']]},{date:'2026.02.13',round:23,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','33분'],['완료 운동','5/5'],['총 세트','13세트']]},{date:'2026.02.10',round:22,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','41분'],['완료 운동','4/5'],['총 세트','11세트']]},{date:'2026.02.07',round:21,badge:'중단',badgeClass:'badge-red',stats:[['소요시간','20분'],['완료 운동','3/5'],['중단 사유','개인 사정']]},{date:'2026.02.04',round:20,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','34분'],['완료 운동','5/5'],['총 세트','13세트']]},{date:'2026.02.01',round:19,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','47분'],['완료 운동','5/5'],['총 세트','13세트']]},{date:'2026.01.29',round:18,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','34분'],['완료 운동','5/5'],['총 세트','13세트']]},{date:'2026.01.26',round:17,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','29분'],['완료 운동','4/5'],['총 세트','11세트']]},{date:'2026.01.23',round:16,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','30분'],['완료 운동','5/5'],['총 세트','13세트']]},{date:'2026.01.20',round:15,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','33분'],['완료 운동','5/5'],['총 세트','13세트']]},{date:'2026.01.17',round:14,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','33분'],['완료 운동','4/5'],['총 세트','11세트']]},{date:'2026.01.14',round:13,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','50분'],['완료 운동','5/5'],['총 세트','13세트']]},{date:'2026.01.11',round:12,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','41분'],['완료 운동','5/5'],['총 세트','13세트']]},{date:'2026.01.08',round:11,badge:'중단',badgeClass:'badge-red',stats:[['소요시간','8분'],['완료 운동','1/5'],['중단 사유','목 통증']]},{date:'2026.01.05',round:10,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','29분'],['완료 운동','5/5'],['총 세트','13세트']]},{date:'2026.01.02',round:9,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','41분'],['완료 운동','5/5'],['총 세트','13세트']]},{date:'2025.12.30',round:8,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','41분'],['완료 운동','4/5'],['총 세트','11세트']]},{date:'2025.12.27',round:7,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','25분'],['완료 운동','5/5'],['총 세트','13세트']]},{date:'2025.12.24',round:6,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','41분'],['완료 운동','5/5'],['총 세트','13세트']]},{date:'2025.12.21',round:5,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','48분'],['완료 운동','5/5'],['총 세트','13세트']]},{date:'2025.12.18',round:4,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','37분'],['완료 운동','5/5'],['총 세트','13세트']]},{date:'2025.12.15',round:3,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','42분'],['완료 운동','5/5'],['총 세트','13세트']]},{date:'2025.12.12',round:2,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','38분'],['완료 운동','5/5'],['총 세트','13세트']]},{date:'2025.12.09',round:1,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','40분'],['완료 운동','4/5'],['총 세트','11세트']]},{date:'2026.03.15',round:33,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','35분'],['완료 운동','5/5']]}]}}
    ]},
    '채민서': { branch:'마포점', joinDate:'2024.05.03', phone:'010-6060-7070', list:[
      { id:1, name:'파워리프팅 기초 처방', date:'2025.12.20', grade:'고급', trainer:'이트레이너', status:'active', count:12, sfmaAfter:20, sfmaAlertDays:[7,3],
        memo:'스쿼트·데드리프트 폼 교정 우선. 중량보다 자세.',
        exercises:[{name:'스쿼트',detail:'5세트 × 5회',grade:'필수'},{name:'데드리프트',detail:'5세트 × 3회',grade:'필수'},{name:'힙 힌지',detail:'3세트 × 10회',grade:'필수'},{name:'굿모닝 스트레칭',detail:'3세트 × 10회',grade:'권장'},{name:'코어 안정화 운동',detail:'3세트 × 12회',grade:'선택'}],
        hist:{total:12,done:12,stop:0,rate:'100%',avg:'55분',avgSub:'목표 60분 대비',sessions:[{date:'2026.03.14',round:11,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','28분'],['완료 운동','5/5'],['총 세트','19세트']]},{date:'2026.03.11',round:10,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','42분'],['완료 운동','5/5'],['총 세트','19세트']]},{date:'2026.03.08',round:9,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','32분'],['완료 운동','5/5'],['총 세트','19세트']]},{date:'2026.03.05',round:8,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','41분'],['완료 운동','5/5'],['총 세트','19세트']]},{date:'2026.03.02',round:7,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','31분'],['완료 운동','5/5'],['총 세트','19세트']]},{date:'2026.02.27',round:6,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','29분'],['완료 운동','5/5'],['총 세트','19세트']]},{date:'2026.02.24',round:5,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','46분'],['완료 운동','5/5'],['총 세트','19세트']]},{date:'2026.02.21',round:4,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','25분'],['완료 운동','5/5'],['총 세트','19세트']]},{date:'2026.02.18',round:3,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','31분'],['완료 운동','5/5'],['총 세트','19세트']]},{date:'2026.02.15',round:2,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','41분'],['완료 운동','5/5'],['총 세트','19세트']]},{date:'2026.02.12',round:1,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','42분'],['완료 운동','5/5'],['총 세트','19세트']]},{date:'2026.03.17',round:12,badge:'완료',badgeClass:'badge-green',stats:[['소요시간','58분'],['완료 운동','5/5']]}]}}
    ]},
    '남기현': { branch:'강남점', joinDate:'2025.01.10', phone:'010-7070-8080', list:[] },
    '엄지원': { branch:'서초점', joinDate:'2024.11.20', phone:'010-8080-9090', list:[] },
    '도현우': { branch:'마포점', joinDate:'2025.02.14', phone:'010-9090-1010', list:[] },
    '구하늘': { branch:'강남점', joinDate:'2025.03.01', phone:'010-1212-3434', list:[] },
    '허성준': { branch:'서초점', joinDate:'2024.12.05', phone:'010-3434-5656', list:[] }
  };

  const APP_DATA = {
    members,

    /** 회원 배열 반환 (이름 포함) */
    getMemberList() {
      return Object.entries(members).map(([name, info]) => ({ name, ...info }));
    },

    /** 특정 회원 반환 */
    getMember(name) {
      return members[name] || null;
    },

    /** 최신 처방 반환 */
    getLatestPrx(name) {
      const m = members[name];
      return (m && m.list && m.list.length > 0) ? m.list[0] : null;
    },

    /** 활성 처방이 있는 회원 목록 */
    getActiveMembers() {
      return Object.entries(members)
        .filter(([, info]) => info.list && info.list.some(p => p.status === 'active'))
        .map(([name, info]) => ({ name, ...info }));
    },

    /** 통계 요약 */
    stats() {
      const all = Object.values(members);
      const total = all.length;
      const withPrx = all.filter(m => m.list && m.list.length > 0).length;
      const active = all.filter(m => m.list && m.list.some(p => p.status === 'active')).length;
      const noPrx = total - withPrx;
      // 이번달 신규 (joinDate가 2026.03 인 회원)
      const thisMonth = all.filter(m => m.joinDate && m.joinDate.startsWith('2026.03')).length;
      // SFMA 도래 (sfmaAlertDays 있는 활성 처방)
      const sfmaDue = all.filter(m => m.list && m.list.some(p => p.status === 'active' && p.sfmaAlertDays && p.sfmaAlertDays.length > 0)).length;
      return { total, withPrx, active, noPrx, thisMonth, sfmaDue };
    }
  };

  window.APP_DATA = APP_DATA;
})();
