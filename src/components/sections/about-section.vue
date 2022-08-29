<template>
  <div class="about">
    <h2 class="header">About me</h2>
    <hr class="my-5 w-32" />
    <div class="content">
      <div class="w-full">
        <p>
          My name is <span class="green-highlight">Paolo Steven B. Santos</span>. I am a 4th Year student at
          <a
            href="https://iacademy.edu.ph"
            class="blue-highlight hover:underline"
            target="_blank"
            rel="noopener noreferrer"
            >iACADEMY</a
          >. I took up
          <span class="green-highlight underline"
            >Bachelor of Science in Computer Science major in Software Engineering (BSCSSE)</span
          >
          and
          <span class="blue-highlight underline"
            >Bachelor of Science in Information Technology major in Web Development (BSITWD)</span
          >.
          <br />
          <br />
          I am really passionate with programming ever since I set foot on our academy. I really learned a lot from my
          professors ranging from industry standard design patterns to important quality assessment methods. I've
          developed my
          <a
            href="https://typescriptlang.org"
            class="blue-highlight hover:underline"
            target="_blank"
            rel="noopener noreferrer"
            >TypeScript</a
          >
          and
          <a href="http://vuejs.org" class="green-highlight hover:underline" target="_blank" rel="noopener noreferrer"
            >VueJS</a
          >
          skills by self-studying during quarantine.
          <br />
          <br />
          I honed my
          <a
            href="https://typescriptlang.org"
            class="blue-highlight hover:underline"
            target="_blank"
            rel="noopener noreferrer"
            >TypeScript</a
          >
          skills by developing Discord Bots that can do numerous things from server management, playing/streaming music,
          and creating custom voice channels for users! My magnum opus as a bot dev is
          <a
            class="green-highlight hover:underline"
            href="https://top.gg/bot/816152179101663312"
            target="_blank"
            rel="noopener noreferrer"
            >Curator</a
          >. A custom voice channel bot that creates fully-customizable voice and text channels for users to use. While
          my
          <a href="http://vuejs.org" class="green-highlight hover:underline" target="_blank" rel="noopener noreferrer"
            >VueJS</a
          >
          skills, by making this website/portfolio along with my final projects for school and our thesis paper.
        </p>
      </div>
      <div class="hidden xl:block border-l-neutral-700 border-l-[1px] h-96"></div>
      <div class="lg:scale-75 xl:scale-90">
        <img class="object-scale-down rounded-md drop-shadow-md" src="../../assets/img/about-photo.jpg" alt="" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.about {
  @apply container mx-auto pt-12;
  @apply sm:px-10 xl:px-0;
}

.header {
  @apply font-main font-bold text-mahomuri-green;
  @apply text-lg lg:text-2xl;
}

.content {
  @apply flex flex-col-reverse xl:flex-row gap-12 items-center mb-12;
  @apply font-body font-light sm:text-sm xl:text-[17px] text-mahomuri-light-green;
}

.blue-highlight {
  @apply font-main font-bold text-mahomuri-blue;
}

.green-highlight {
  @apply font-main font-bold text-mahomuri-green;
}
</style>
