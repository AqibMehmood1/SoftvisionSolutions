import { Component } from '@angular/core';
import * as AOS from 'aos';
import { Title, Meta } from '@angular/platform-browser';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Softvision Solutions ';
  constructor(private titleService: Title, private metaService: Meta) {
    AOS.init({
      // Global settings:
      disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
      startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
      initClassName: 'aos-init', // class applied after initialization
      animatedClassName: 'aos-animate', // class applied on animation
      useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
      disableMutationObserver: false, // disables automatic mutations' detections (advanced)
      debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
      throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

      // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
      offset: 100, // offset (in px) from the original trigger point
      delay: 3, // values from 0 to 3000, with step 50ms
      duration: 900, // values from 0 to 3000, with step 50ms
      easing: 'ease', // default easing for AOS animations
      once: false, // whether animation should happen only once - while scrolling down
      mirror: false, // whether elements should animate out while scrolling past them
      anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
    });
    //   this.socketService.sendMessage('message send to');
    //  setTimeout(() => {
    //   this.socketService.getNewMessage();
    //  }, 4000);
  }
  ngOnInit(): void {
    // Set the title
    this.titleService.setTitle('Softvision Solutions');
  
    // Set meta tags
    this.metaService.addTag({ name: 'description', content: 'Softvision Solutions provides the range of IT solutions including CRM development, Web Design, Application Development, Online Education, Research & Standardization Unit and SAAS, etc. We also provide call center services at reasonably discounted contracts. Softvision Solutions is the IT branch of Sayal & Sons, registered (Reg. No. 7523421) in Delaware, USA. We provide services worldwide.' });
    this.metaService.addTag({ name: 'keywords', content: 'Softvision Solutions' });
    // Add more meta tags as needed
  }
}
