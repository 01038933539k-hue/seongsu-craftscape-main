const fs = require('fs');

let code = fs.readFileSync('src/routes/floors.tsx', 'utf8');

const targetStr = `      <section className="container-prose pb-16">
        <div className="grid md:grid-cols-4`;

const videoSection = `      <section className="container-prose pb-16">
        <div className="eyebrow mb-3 text-primary">층별 단면 비디오 뷰</div>
        <h2 className="font-serif text-3xl md:text-4xl mb-8 text-ink">성수동의 단면을 생생하게 탐험하다</h2>
        <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-rule/50 shadow-lg bg-black mb-8">
          <video 
            src="/seongsu-video.mp4" 
            autoPlay 
            loop 
            muted 
            playsInline
            controls
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      <section className="container-prose pb-16">
        <div className="grid md:grid-cols-4`;

if (code.includes('seongsu-video.mp4')) {
    console.log('Video already injected.');
} else if (code.includes(targetStr)) {
    code = code.replace(targetStr, videoSection);
    fs.writeFileSync('src/routes/floors.tsx', code, 'utf8');
    console.log('Successfully injected the video into floors.tsx');
} else {
    console.log('Target string not found.');
}
