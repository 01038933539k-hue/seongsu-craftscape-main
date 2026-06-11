export type Industry =
  | "print"
  | "leather"
  | "food"
  | "metal"
  | "electronics"
  | "other";

export const industryMeta: Record<Industry, { label: string; color: string }> = {
  print: { label: "인쇄업", color: "#4338ca" },
  leather: { label: "가죽·신발", color: "#7c3aed" },
  food: { label: "식료품", color: "#d97706" },
  metal: { label: "금속", color: "#0ea5e9" },
  electronics: { label: "전자·부품", color: "#10b981" },
  other: { label: "기타", color: "#64748b" },
};

export interface Manufacturer {
  id: string;
  name: string;
  industry: Industry;
  address: string;
  lat: number;
  lng: number;
  building: string;
  floor: string;
  note: string;
}

// Seongsu-dong approximate coordinates
export const manufacturers: Manufacturer[] = [
  { id: "m1", name: "성수인쇄사", industry: "print", address: "성수이로 22길 14", lat: 37.5443, lng: 127.0557, building: "지상 4층 / 1980년 준공", floor: "1F 인쇄 · 2F 후가공 · 3F 사무실", note: "성수이로 인쇄벨트 핵심 업체. 야간 가동률 높음." },
  { id: "m2", name: "대성가죽", industry: "leather", address: "성수일로4길 30", lat: 37.5421, lng: 127.0533, building: "지상 3층 / 1992년 준공", floor: "1F 재단 · 2F 봉제 · 3F 창고", note: "신발 OEM. 인근 카페와 출입구를 공유." },
  { id: "m3", name: "연무장 밀키트", industry: "food", address: "연무장길 41", lat: 37.5455, lng: 127.0571, building: "지상 5층 / 2018년 준공", floor: "B1 냉장 · 1-2F 생산 · 3F 패킹", note: "코로나 이후 입점. 새벽 배송 거점." },
  { id: "m4", name: "한일금속", industry: "metal", address: "성수이로10길 8", lat: 37.5462, lng: 127.0589, building: "지상 2층 / 1978년 준공", floor: "1F 가공 · 2F 사무실", note: "정밀 절삭. 가족 경영 3대." },
  { id: "m5", name: "성수전자", industry: "electronics", address: "아차산로 17길 49", lat: 37.5478, lng: 127.0612, building: "지식산업센터 8F", floor: "8F 조립 라인", note: "PCB 소형 조립. 센터 공용 물류 활용." },
  { id: "m6", name: "구화제화", industry: "leather", address: "성수이로14길 12", lat: 37.5438, lng: 127.0566, building: "지상 4층 / 1985년 준공", floor: "1F 매장 · 2-3F 작업 · 4F 주거", note: "수제화 장인. 1층 쇼룸 운영." },
  { id: "m7", name: "동방인쇄", industry: "print", address: "성수이로 18", lat: 37.5450, lng: 127.0548, building: "지상 3층 / 1975년 준공", floor: "전층 인쇄·제본", note: "출판물 전문. 인쇄벨트 서측 축." },
  { id: "m8", name: "성수식품", industry: "food", address: "성수일로12길 20", lat: 37.5410, lng: 127.0540, building: "지상 4층 / 2005년 준공", floor: "1-2F 제조 · 3F 사무실 · 4F 카페", note: "전통 장류. 상층부에 직영 카페 운영." },
  { id: "m9", name: "JK가죽공예", industry: "leather", address: "성수이로 24", lat: 37.5448, lng: 127.0578, building: "지상 2층 / 1988년 준공", floor: "1F 작업장 · 2F 쇼룸", note: "주문제작 가방. 인근 편집숍과 협업." },
  { id: "m10", name: "성수메탈", industry: "metal", address: "성수이로12길 6", lat: 37.5470, lng: 127.0598, building: "지상 2층 / 1982년 준공", floor: "1F 용접 · 2F 도장", note: "건축 부자재. 동측 대형 필지 인접." },
  { id: "m11", name: "정인쇄", industry: "print", address: "성수이로20길 9", lat: 37.5440, lng: 127.0573, building: "지상 4층 / 1995년 준공", floor: "1-3F 인쇄 · 4F 주거", note: "주거 겸용. 야간 소음 민원 있음." },
  { id: "m12", name: "동남부품", industry: "electronics", address: "성수이로 99", lat: 37.5485, lng: 127.0625, building: "지식산업센터 11F", floor: "11F R&D + 시제품", note: "스타트업 협력 시제품 제작." },
  { id: "m13", name: "성수디저트랩", industry: "food", address: "연무장길 17", lat: 37.5452, lng: 127.0566, building: "지상 3층 / 2020년 리모델링", floor: "1F 카페 · 2F 베이커리 · 3F 사무실", note: "수직 혼합 사례. 카페와 생산 동시 운영." },
  { id: "m14", name: "광명가죽", industry: "leather", address: "성수일로 8길 22", lat: 37.5418, lng: 127.0528, building: "지상 3층 / 1990년 준공", floor: "1-2F 재단·봉제 · 3F 자재", note: "남측 골목길. 보행 친화 가로." },
  { id: "m15", name: "삼화기계", industry: "metal", address: "성수이로 52", lat: 37.5466, lng: 127.0584, building: "지상 3층 / 1986년 준공", floor: "1F 가공 · 2F 조립 · 3F 사무", note: "산업 기계 수리." },
];
