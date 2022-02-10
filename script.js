
const hello = document.getElementById('hello');
const getnav = document.getElementById('sec-nav');
const biggie = document.getElementById('biggie');

		const secnav = document.getElementById('sec-ul')
		function hee() {
			if (getnav.classList.contains('active')) {
				getnav.classList.remove('active');

			} else {
				getnav.classList.add('active');

			}
		}

		let getblog = document.getElementById('drop');
		let getpage = document.getElementById('down');
		function blog() {
			if (getblog.classList.contains('active')) {
				getblog.classList.remove('active');
			} else {
				getblog.classList.add('active');
			}

		}
		function page() {
			if (getpage.classList.contains('active')) {
				getpage.classList.remove('active');
			} else {
				getpage.classList.add('active');
			}

		}
        
        // window.addEventListener('scroll',function(){
        //     let val = hello.getBoundingClientRect().bottom;
        //     if(val <= 0){
		// 		biggie.style.position = 'sticky';
        //         biggie.style.transform = 'translateY(0%)';
        //     }else{
		// 		biggie.style.position = 'absolute';
        //         biggie.style.transform = 'translateY(-100%)';
        //     }
        // })
        