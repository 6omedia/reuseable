/*

    HOW TO USE

    const looksDropdown = new dropDown($('.li_class'), $('#dropDownBox'), '420px');

*/


class dropDown {

    expand(li){

        $('#main_nav li').each(function(){
                
            $(this).removeClass('ddSelected');

        });

        $('#heroImg').css('height', '0px').css('padding-top', '0px');
        $('#makeup_nav').css('height', '0px').css('padding-top', '0px');
        $('#skincare_nav').css('height', '0px').css('padding-top', '0px');
        $('#hair_nav').css('height', '0px').css('padding-top', '0px');

        this.dropdown.css('height', this.navHeight).css('padding-top', '40px');
        li.addClass(this.selectedClass);

    }

    collapse(li){

        this.dropdown.css('height', '0px').css('padding-top', '0px');
        li.removeClass(this.selectedClass);

    }

    addListerners(navBtn, selected, dropdown){

        const thisClass = this;

        navBtn.on('click', function(){

            if($(this).hasClass(selected)){

                thisClass.collapse($(this));

            }else{

                thisClass.expand($(this));

            }

        });
    }

    constructor(navBtn, dropdown, navHeight){
        this.navBtn = navBtn;
        this.dropdown = dropdown;
        this.selectedClass = 'ddSelected';
        this.navHeight = navHeight;
        this.addListerners(this.navBtn, this.selectedClass, this.dropdown);
    }

}

