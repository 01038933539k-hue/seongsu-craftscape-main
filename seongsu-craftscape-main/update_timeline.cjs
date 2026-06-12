const fs = require('fs');

let fileContent = fs.readFileSync('src/routes/timeline.tsx', 'utf-8');

const parcelData = `
const parcels = [
  {
    id: 1,
    title: "1번 필지: 대형 거점의 지속적인 확장 및 자본 집약화",
    sizeAndCount: "처음부터 가장 큰 규모였으며, 시간이 흐를수록 주변 필지를 흡수하거나 내부 건물을 대형화·일체화하는 경향을 보입니다.",
    timeline: "1978년~1989년 사이에 이미 대규모 공장 단지(예: 대형 인쇄소나 피혁 제조 공장) 형태로 세팅되었습니다. 1996년~2006년의 장기 정체기를 거친 후, 최근 2026년에 이르러 가장 극적인 물리적 형태 변화(대형 신축/통합)가 관찰됩니다.",
    implication: "과거 대형 공장 부지였던 곳이 최근 10년 사이 B 유형(밀려난 합병형)의 대표적 사례인 '지식산업센터'나 '대기업 사옥(무신사 등)'으로 통째로 재개발되었음을 시사합니다. 대자본이 가장 먼저, 가장 크게 유입된 축입니다.",
    current: "서울숲 한라 시그마밸리 빌딩, 성수세차, 무신사 메가스토어"
  },
  {
    id: 2,
    title: "2번 필지: 소형 공장의 유지 후 최근 상업적 리모델링",
    sizeAndCount: "내부 건물의 개수가 2~3개 수준으로 통제되며 형태를 유지해 왔습니다.",
    timeline: "1978~1989년 사이에 초기 형태가 잡힌 후, 2006년까지 오랜 기간 변화가 없다가 최근 2026년 시점에 형태 변화(동그라미)가 발생했습니다.",
    implication: "필지 자체를 완전히 허물고 새로 짓기보다는, 과거 수제화 공장 건물의 외관이나 골목길 조직을 그대로 살린 채 내부를 트렌디한 대형 F&B 매장이나 브랜드 플래그십 스토어로 대조적으로 리모델링했을 가능성이 높습니다.",
    current: "단독주택(이화아파트, 드림힐)"
  },
  {
    id: 3,
    title: "3번 필지: 90년대 상업화의 선발대 혹은 공장 확장",
    sizeAndCount: "1978년에는 비어 있거나 흔적만 있던 필지였으나, 1989년에 건물이 추가되었습니다.",
    timeline: "다른 필지들이 정체되어 있던 1989년~1996년 사이에 선제적인 변화가 일어났고, 그 이후로는 오히려 변화가 멈추었습니다.",
    implication: "성수동이 본격적으로 뜨기 전, 80말~90초 제조업 호황기 때 공장이 증축되었거나, 혹은 성수동 상업화 초기에 진입했던 선발대 격인 필지입니다. 현재는 변화가 멈춘 것으로 보아 일찌감치 용도가 고정된 안정적인 상업 시설일 확률이 큽니다.",
    current: "단독주택(일승빌라)"
  },
  {
    id: 4,
    title: "4번 필지: 점진적 고도화를 거친 복합 필지",
    sizeAndCount: "내부 건물 구조가 시대마다 조금씩 미세하게 조정되다가 최근에 완전히 재편되었습니다.",
    timeline: "1978년, 1989년, 2006년, 2026년 등 거의 모든 시대에 걸쳐 징검다리식으로 꾸준히 변화(동그라미)가 일어난 축입니다.",
    implication: "이 구역은 자본의 변화에 민감하게 반응해 온 필지입니다. 과거 소규모 공장에서 시작해 점진적으로 용도를 바꾸다가, 최근 2026년에는 필지 내부 구조가 완전히 바뀐 것으로 보아 '신축 근린생활시설'이나 '전문 팝업 빌딩'으로 완전히 탈바꿈했을 것으로 예상됩니다.",
    current: "성수ak벨리, KT&G 상상플래닛, 안목성수, 키치노야"
  },
  {
    id: 5,
    title: "5번 필지: 전형적인 제조업 기지에서 최근 상업 용도로의 급변",
    sizeAndCount: "격자형 구조의 전형적인 공장/창고 형태를 띠고 있다가, 최근에 형태가 크게 바뀌었습니다.",
    timeline: "1978년 형성된 공장 매스가 2006년까지 약 30년간 단 한 번의 변화도 없이 완벽하게 유지되었습니다. 그러다 최근 2026년에 와서 갑자기 필지 형태가 분할/변형되는 큰 변화가 생겼습니다.",
    implication: "오랜 기간 성수동의 정체성을 지키던 전통 공장(정통 고수형에 가까웠던 곳)이었으나, 최근 연무장길 임대료 폭등과 자본 유입의 압박을 견디지 못하고 최근 10년 사이에 상업 시설로 급격히 매각 및 분할(C 유형)되었음을 보여주는 심증입니다.",
    current: "성수동 대림창고 갤러리"
  },
  {
    id: 6,
    title: "6번 필지: 골목길 상업화의 1세대 선발대",
    sizeAndCount: "주변 소필지 중에서는 비교적 형태가 뚜렷한 사각형 구조였으나, 최근에 내부 공간이 더 미세하게 쪼개지거나 변형되었습니다.",
    timeline: "1978년 초기 형태가 잡힌 후, 1989년에 일찍이 형태 변화(동그라미)가 일어났습니다. 이후 1996년~2006년까지 멈춰 있다가, 2006년~2026년 사이에 또다시 변화가 일어났습니다.",
    implication: "80년대 말 성수동 제조업 전성기 시절에 일찌감치 건물을 증축하거나 개조했던 곳입니다. 다른 소필지들(7, 8번)보다 한 발 빠르게 변화를 겪은 '선발대' 필지로, 최근(2026년)에는 성수동 초창기(2010년대 중반)에 진입한 유명 로컬 브랜드나 카페가 자리를 잡고 현재까지 소폭 개조해가며 영업 중인 공간으로 예상됩니다.",
    current: "르하임성수 오피스텔(단독주택)"
  },
  {
    id: 7,
    title: "7번 필지: 오랜 침묵 끝에 터진 최근의 급격한 분할",
    sizeAndCount: "매우 작은 필지 규모를 유지하다가, 최근에 건물이 쪼개지거나 완전히 재편되었습니다.",
    timeline: "1978년 형성된 이후 1989년, 1996년, 2006년까지 무려 약 30년간 '단 한 번도' 변화가 없었습니다(빈 원). 그러다 최근 2026년 시점에 갑자기 강한 변화(동그라미)가 나타났습니다.",
    implication: "질문자님이 설정하신 C 유형(쪼개진 분할형)의 완벽한 표본입니다. 2010년대 중반까지도 수제화 관련 영세 가내수공업 공장이나 창고로 굳건히 유지되다가, 연무장길 메인 상권이 동쪽으로 확장되면서 최근 5~10년 사이에 개인 기획자나 로컬 브랜드에 의해 인수되어 힙한 소규모 편집숍이나 테이크아웃 전문점, 초소형 팝업 공간으로 쪼개진 사례입니다.",
    current: "단독주택"
  },
  {
    id: 8,
    title: "8번 필지: 상업화의 압박 속에서 '버티고 있는' 경계선 (A유형의 흔적)",
    sizeAndCount: "6번과 7번 필지 사이에 끼어 있는 초소형 필지입니다.",
    timeline: "1978년에 미세한 흔적(원)이 나타난 이후, 1989년부터 현재 2026년까지 단 한 번도 동그라미가 채워지지 않았습니다(물리적 변화 전무).",
    implication: "주변 6, 7, 9번 필지가 다 상업적으로 변해가는 와중에도 홀로 제조업을 고수하며 버티고 있는 'A 유형(전통 고수형)'의 흔적입니다. 주변이 다 바뀌는데 여기만 멈춘 이유는 두 가지로 예상됩니다. 수제화 장인이 건물주로서 끝까지 생업을 이어가고 있거나, 혹은 필지가 너무 작고 도로 조건이 열악해 자본가들이 매입 메리트를 느끼지 못한 '고립 경계선 내부의 섬' 같은 곳입니다.",
    current: "에이레네, 동양카센터"
  },
  {
    id: 9,
    title: "9번 필지: 극초기(70년대) 형성 이후 원형을 유지하는 상권의 벽",
    sizeAndCount: "가장 구석에 위치한 초소형 필지입니다.",
    timeline: "1978년에 아주 미세한 변화가 관찰된 이후, 1989년부터 2026년 현재까지 물리적 구조가 완전히 얼어붙은 듯 유지되고 있습니다.",
    implication: "1970년대 성수동 준공업지역이 막 개발되기 시작할 때 가장 먼저 지어진 초창기 건물(예: 영세한 철공소나 부자재 창고)의 형태입니다. 8번 필지와 마찬가지로 현재까지 변화가 없는 것으로 보아, 상업 자본이 침투하기에는 지나치게 구석진 위치(막다른 골목 등)이거나, 전통적인 제조업 네트워크가 여전히 작동하고 있어 자본 침투가 차단된 공간적 한계선을 시사합니다.",
    current: "단독주택"
  }
];
`;

const newSection = `
      {/* LAND USE DIFFERENTIATION SECTION */}
      <section className="container-prose py-16 md:py-24 rule-top">
        <div className="eyebrow mb-3 text-primary">미시적 접근</div>
        <h2 className="font-serif text-3xl md:text-5xl mb-6 text-ink">토지이용 분화: 9개 필지의 시계열적 진화</h2>
        <p className="text-ink-soft max-w-2xl text-lg leading-relaxed mb-16">
          거시적인 건축물 준공 시기뿐만 아니라, 특정 필지들의 물리적 형태와 용도가 1978년부터 2026년까지 어떻게 분화되어 왔는지 9개의 대표 사례를 통해 미시적으로 추적합니다.
        </p>

        <div className="space-y-12">
          {parcels.map((p, index) => (
            <div key={p.id} className="bg-card border border-rule/50 rounded-2xl p-8 md:p-10 shadow-sm relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-8 opacity-10 font-serif text-8xl md:text-9xl text-primary font-bold pointer-events-none group-hover:opacity-20 transition-opacity">
                {p.id}
              </div>
              <div className="relative z-10">
                <h3 className="font-serif text-2xl md:text-3xl text-ink mb-8 flex items-center gap-4">
                  <span className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-white text-lg font-bold">
                    {p.id}
                  </span>
                  {p.title.split(': ')[1] || p.title}
                </h3>
                
                <div className="grid md:grid-cols-2 gap-8 md:gap-12">
                  <div className="space-y-6">
                    <div>
                      <div className="text-xs font-mono tracking-widest text-ochre uppercase mb-2">크기와 개수</div>
                      <p className="text-ink-soft leading-relaxed">{p.sizeAndCount}</p>
                    </div>
                    <div>
                      <div className="text-xs font-mono tracking-widest text-ochre uppercase mb-2">시기별 변화 및 원인</div>
                      <p className="text-ink-soft leading-relaxed">{p.timeline}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <div>
                      <div className="text-xs font-mono tracking-widest text-primary uppercase mb-2">건축 및 용도 시사점</div>
                      <p className="text-ink font-medium leading-relaxed bg-muted/50 p-5 rounded-xl border border-rule/30">
                        {p.implication}
                      </p>
                    </div>
                    <div>
                      <div className="text-xs font-mono tracking-widest text-ochre uppercase mb-2">현재 부지의 산업/건물</div>
                      <div className="inline-flex items-center gap-2 px-4 py-2 bg-background border border-rule rounded-lg text-sm font-medium text-ink-soft">
                        {p.current}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
`;

// Insert the parcelData after the buildYears array
fileContent = fileContent.replace('];\n\nfunction Timeline() {', '];\n\n' + parcelData + '\nfunction Timeline() {');

// Insert the newSection before the closing tag of the component
fileContent = fileContent.replace('</>\n  );\n}\n', newSection + '\n    </>\n  );\n}\n');

fs.writeFileSync('src/routes/timeline.tsx', fileContent, 'utf-8');
console.log('Successfully added the Land Use Differentiation section to timeline.tsx');
