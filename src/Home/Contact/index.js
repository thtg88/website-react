import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import ContactBar from './ContactBar';
import ContactForm from './ContactForm';
import Copyright from './Copyright';
import { animateScroll } from 'react-scroll';

// var fixed = false;
// $(document).scroll(function() {
//     if ($(this).scrollTop() > 250) {
//         if (!fixed) {
//             fixed = true;
//             // $('#to-top').css({position:'fixed', display:'block'});
//             $('#to-top').show("slow", function() {
//                 $('#to-top').css({
//                     position: 'fixed',
//                     display: 'block'
//                 });
//             });
//         }
//     } else {
//         if (fixed) {
//             fixed = false;
//             $('#to-top').hide("slow", function() {
//                 $('#to-top').css({
//                     display: 'none'
//                 });
//             });
//         }
//     }
// });

const Contact = () => (
    <footer id="contact" className="bg-primary">
        <div className="container">
            <div className="row">
                <div className="col-lg-12 text-center">
                    <h2>Contacts</h2>
                </div>
            </div>
            <ContactBar />
            <ContactForm />
            <Copyright />
        </div>
        <a
            id="to-top"
            href="#top"
            onClick={() => animateScroll.scrollToTop()}
            className="btn btn-dark btn-lg"
            aria-label="Go to the top of the page."
        ><FontAwesomeIcon icon={faChevronUp} fixedWidth size="2x" /></a>
    </footer>
);

export default Contact;
