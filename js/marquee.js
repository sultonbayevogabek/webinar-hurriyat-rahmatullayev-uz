document.addEventListener('DOMContentLoaded', () => {
  try {
    const marquee = document.querySelector('#marquee');

    for (let i = 0; i < 30; i++) {
      marquee.innerHTML += `
      <div class="shrink-0 flex items-center gap-3">
        <div class="relative flex size-3">
          <div class="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#E74040] opacity-75"></div>
          <div class="relative inline-flex size-3 rounded-full bg-[#E74040]"></div>
        </div>
        <div>13-14-15-may / bepul masterklass</div>
      </div>
    `;
    }
  } catch (e) {
  }
})

