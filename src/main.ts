import "./style.css";
import { shopUrl } from "./site.ts";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
<div class="wrapper">
  <header class="site-header">
    <a class="brand" href="/" aria-label="vmrnd home">
      <img class="brand__logo" src="/images/image6.jpg" alt="" width="270" height="203" />
    </a>

    <section class="intro" aria-labelledby="intro-title">
      <h2 id="intro-title">Welcome to vmrnd.com</h2>
      <p>
        Exploring playability and music creation through tactile controllers and
        patch programming.
      </p>
      <nav aria-label="Sections">
        <ol class="facets" aria-label="The three facets of vmrnd">
          <li>
            <a href="#music-interfaces">
              <span class="facets__index">1</span> Music interfaces
            </a>
          </li>
          <li>
            <a href="#music-education">
              <span class="facets__index">2</span> Music education
            </a>
          </li>
          <li>
            <a href="#audio-visual">
              <span class="facets__index">3</span> Audio-visual systems
            </a>
          </li>
        </ol>
      </nav>
      <p class="intro__contact"><a href="#contact">Contact</a></p>
    </section>
  </header>

  <main class="content">
    <section class="project" id="music-interfaces" aria-labelledby="macropads-title">
      <p class="project__index">01 / Music interfaces</p>
      <h2 id="macropads-title">Musical Macropads</h2>
      <img
        class="project__media"
        src="/images/work/macropads.gif"
        alt="Two illuminated musical macropads with colorful keycaps and knobs"
        width="480"
        height="270"
        loading="lazy"
        decoding="async"
      />
      <p>
        A plug-and-play system of tactile controllers and sound machines for music
        classrooms, covering rhythm, melody and harmony.
      </p>
      <p>OrthoPlay is the first product from the system.</p>

      <a
        class="product-link"
        href="${shopUrl}"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Visit the OrthoPlay shop in a new tab"
      >
        <img
          src="/images/product.jpeg"
          alt="OrthoPlay"
          width="1195"
          height="896"
          loading="lazy"
          decoding="async"
        />
      </a>
    </section>

    <section class="project" id="music-education" aria-labelledby="workshop-title">
      <p class="project__index">02 / Music education</p>
      <h2 id="workshop-title">Music Workshop for Students</h2>
      <div class="project__media-grid project__media-grid--three">
        <img
          class="project__media"
          src="/images/work/workshop.gif"
          alt="Students making music with keyboards and controllers at a workshop"
          width="160"
          height="300"
          loading="lazy"
          decoding="async"
        />
        <img
          class="project__media"
          src="/images/work/visual-collage.gif"
          alt="A Wooden Shjips visual above an interactive draw-and-erase interface"
          width="216"
          height="384"
          loading="lazy"
          decoding="async"
        />
        <img
          class="project__media"
          src="/images/work/performance.gif"
          alt="Hands playing a keyboard and a phone interface"
          width="216"
          height="384"
          loading="lazy"
          decoding="async"
        />
      </div>
      <p>
        A technology-driven music workshop for students with special needs in the
        Philippines, funded by HKU's Gallant Ho Experiential Learning Fund.
      </p>

      <div class="project__gallery">
        <img
          src="/images/workshop/group.jpg"
          alt="Group photo of students and teachers at the music workshop"
          width="1086"
          height="725"
          loading="lazy"
          decoding="async"
        />
        <img
          src="/images/workshop/sensor-glove.jpg"
          alt="Close-up of a sensor glove connected with jumper wires"
          width="1999"
          height="1335"
          loading="lazy"
          decoding="async"
        />
        <img
          src="/images/workshop/breadboard.jpg"
          alt="Students working with a laptop and breadboard circuit"
          width="1086"
          height="725"
          loading="lazy"
          decoding="async"
        />
        <img
          src="/images/workshop/conductive-board.jpg"
          alt="Students touching a conductive board connected with jumper wires"
          width="1086"
          height="725"
          loading="lazy"
          decoding="async"
        />

      </div>
    </section>

    <section class="project" id="audio-visual" aria-labelledby="av-title">
      <p class="project__index">03 / Audio-visual systems</p>
      <h2 id="av-title">Audio-Visual Technologies</h2>
      <div class="project__media-grid">
        <img
          class="project__media"
          src="/images/work/patch.gif"
          alt="A Max/MSP patch with controllers, waveform displays and spectral delay"
          width="800"
          height="477"
          loading="lazy"
          decoding="async"
        />
        <img
          class="project__media"
          src="/images/work/visual.gif"
          alt="An interactive audio-visual interface with draw and erase controls"
          width="600"
          height="270"
          loading="lazy"
          decoding="async"
        />
      </div>
      <p>
        Max/MSP, RNBO and TouchDesigner experiments for audio-reactive visuals and
        interactive experiences.
      </p>
    </section>

    <section class="contact" id="contact" aria-labelledby="contact-title">
      <h2 id="contact-title">Contact</h2>
      <ul class="contact-list">
        <li>
          <span class="contact-list__label">YouTube</span>
          <a href="https://www.youtube.com/@vinitmiranda">@vinitmiranda</a>
        </li>
        <li>
          <span class="contact-list__label">Instagram</span>
          <a href="https://instagram.com/vmrnd_">@vmrnd_</a>
        </li>
        <li>
          <span class="contact-list__label">GitHub</span>
          <a href="https://github.com/vmrnd">github.com/vmrnd</a>
        </li>
        <li>
          <span class="contact-list__label">WhatsApp</span>
          <a href="https://wa.me/85256029830">+852 5602 9830</a>
        </li>
        <li>
          <span class="contact-list__label">WeChat</span>
          <span>vmrnd_</span>
        </li>
        <li>
          <span class="contact-list__label">Email</span>
          <a href="mailto:vinitmiranda@gmail.com">vinitmiranda@gmail.com</a>
        </li>
      </ul>
    </section>
  </main>
</div>
`;
