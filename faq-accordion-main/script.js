document.addEventListener('DOMContentLoaded', () =>{ // when the webpage loads do the following codes
    const faqContainer = document.querySelector('.faq-accordion'); // look for the tag called faq-according

    faqContainer.addEventListener('click', (e) => { // if someone clicks on the special box do the following codes

        const gruopHeader = e.target.closest('.faq-dropdown-header'); // if the click happened on the tag faq-dropdown-header

        if(!gruopHeader) return; // if the click is not on the special part of faq-dropdown-header don't do anything else

        const group = gruopHeader.parentElement; // find the whole group where the title was clicked

        const groupbody = group.querySelector('p'); // Find the part of the group that holds all the (faq-dropdown-body)

        const icon = gruopHeader.querySelector('.faq-icon'); // find the litle symbol next to the title(faq-icon)

        icon.classList.toggle('open'); // change the symbol to either open or closed
        groupbody.classList.toggle('open'); // change the box with all the toys

        const otherGroups = faqContainer.querySelectorAll('.faq-dropdown'); // look for all the other groups

        otherGroups.forEach((otherGroup) => { // for each of these groups do the thing in the following codes

            if(otherGroup !== group){ // if this group wasn't click then do this instead
                const otherGroupBody = otherGroup.querySelector('p'); // Find the group body (faq-dropdown-body p)
                const otherIcon = otherGroup.querySelector('.faq-icon'); // Find the symbols next to the title of the other group

                otherGroupBody.classList.remove('open'); // close the group
                otherIcon.classList.remove('open'); // close the symbol for the other group
            }
        });
    }); 
});