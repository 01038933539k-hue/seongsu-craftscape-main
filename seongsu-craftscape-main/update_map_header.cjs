const fs = require('fs');

let mapCode = fs.readFileSync('src/routes/map.tsx', 'utf8');

const oldHeader = `<PageHeader
        index="06"
        eyebrow="Chapter 06 · Knowledge Industry Center"
        title="지식산업센터와 공간 분포"
        subtitle="225개 상점·공장·사무실의 실측 입주 데이터와 건축물 폴리곤을 한 지도에 겹쳐 보았다. 마커를 클릭하면 건물별 층별 입주 리스트가 펼쳐진다."
      />`;

const newHeader = `<PageHeader
        index="06"
        eyebrow="Chapter 06 · Knowledge Industry Center"
        title="복합 산업 플랫폼, 지식산업센터"
        subtitle="성수동의 지식산업센터는 단순한 공장형 아파트가 아닙니다. 제조, 업무, 상업 기능이 유기적으로 결합된 창의·제조 융합 생태계의 핵심으로 진화하고 있습니다."
      />`;

if (mapCode.includes('225개 상점')) {
    mapCode = mapCode.replace(oldHeader, newHeader);
    fs.writeFileSync('src/routes/map.tsx', mapCode, 'utf8');
    console.log('Successfully updated the PageHeader in map.tsx');
} else {
    console.log('Could not find the original PageHeader string. Perhaps it was already updated.');
}
