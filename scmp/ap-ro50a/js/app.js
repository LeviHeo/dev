Vue.component('footnav', {
    template: '\
        <div><div class="footer-nav-item" v-for="item in menu">\
            <a :href="host+item.link" target="_blank" ms-ca="navigation" ms-ac="footer" :ms-la="\'bottom:gnb:news:\'+item.id">\
                <div class="footer-nav-item_name" v-html="item.title"></div>\
            </a>\
        </div></div>\
    ',
    replace: true,
    props: {
        title: String,
    },
    data:function() {
        return {
            host:"http://www.scmp.com/",
            menu:[
                {
                    title:"home",
                    id:"home",
                    link:""
                },
                {
                    title:"infographics",
                    id:"infographics",
                    link:"infographics"
                },
                {
                    title:"hong kong",
                    id:"hongkong",
                    link:"news/hong-kong"
                },
                {
                    title:"china",
                    id:"china",
                    link:"news/china"
                },
                {
                    title:"asia",
                    id:"asia",
                    link:"news/asia"
                },
                {
                    title:"world",
                    id:"world",
                    link:"news/world"
                },
                {
                    title:"business",
                    id:"business",
                    link:"business"
                },
                {
                    title:"tech",
                    id:"tech",
                    link:"tech"
                },
                {
                    title:"life",
                    id:"life",
                    link:"lifestyle"
                },
                {
                    title:"culture",
                    id:"culture",
                    link:"culture"
                },
                {
                    title:"sport",
                    id:"sport",
                    link:"sport"
                }
            ]
        };
    },
});

var imagePath = "./images/",
    imagelist = [
        "logo_ro.webp",
        "kv_right_03.webp",
        "kv_right_02.webp",
        "kv_left_03.webp",
        "kv_left_02.webp",
        "kv_right_01.webp",
        "kv_left_01.webp",
        "bg_kv_title.webp",
        "bg_section1.webp",
        "chapter1_texture_whitegold.webp",
        "quiz1_answer.webp",
        "quiz1_frame_steel.webp",
        "quiz1_frame_gold.webp",
        "quiz1_frame_silver.webp",
        "quiz1_frame_whitegold.webp",
        "quiz1_texture_gold.webp",
        "quiz1_texture_silver.webp",
        "quiz1_texture_steel.webp",
        "chapter1_key_visual_a.webp",
        "chapter1_key_visual_b.webp",
        "chapter1_img_01.webp",
        "chapter1_img_04.webp",
        "chapter1_img_02.webp",
        "chapter1_ico_quote.webp",
        "chapter1_bg_quote.webp",
        "chapter1_img_03.webp",
        "phone_mid_glow.webp",
        "phone_mid.webp",
        "phone_back.webp",
        "phone_front.webp",
        "bg_chapter1.jpg",
        "ico_arrow_down_white.webp",
        "chapter2_quiz_watch_tab.webp",
        "chapter2_bg_bubble_left.webp",
        "chapter2_bg_bubble_right.webp",
        "ico_bubble.webp",
        "chapter2_bg_fish06.webp",
        "chapter2_bg_fish05.webp",
        "chapter2_bg_diver.webp",
        "chapter2_bg_fish04.webp",
        "chapter2_bg_fish03.webp",
        "chapter2_bg_fish02.webp",
        "chapter2_bg_fish01.webp",
        "chapter2_quiz_watch.webp",
        "chapter2_quiz_seeker_outline.webp",
        "chapter2_quiz_seeker.webp",
        "chapter2_btm_diver_right.webp",
        "chapter2_btm_diver_left.webp",
        "chapter2_btm_diver.webp",
        "chapter2_btm_bg.webp",
        "chapter2_kv_deco_phone.webp",
        "chapter2_kv_deco9.webp",
        "chapter2_kv_deco8.webp",
        "chapter2_kv_deco7.webp",
        "chapter2_kv_deco6.webp",
        "chapter2_kv_deco5.webp",
        "chapter2_kv_deco4.webp",
        "chapter2_kv_deco3.webp",
        "chapter2_kv_deco2.webp",
        "chapter2_kv_deco1.webp",
        "chapter2_kv_home.webp",
        "chapter2_kv_cloud.webp",
        "chapter2_head_02.webp",
        "chapter2_head_01.webp",
        "chapter2_sea_diver.webp",
        "chapter2_sea_front.webp",
        "chapter2_sea_back.webp",
        "chapter2_img_02.webp",
        "chapter2_img_01.webp",
        "arrow_prev.webp",
        "arrow_next.webp",
        "deco_star.webp",
        "bg_loading2.webp",
        "bg_loading.webp",
        "bg_quiz.webp",
        "ico_arrow_prev.png",
        "ico_arrow_next.png",
        "ico_arrow_up.png",
        "ico_arrow_down.webp",
        "ico_arrow_up_doodle.webp",
        "ico_arrow_down_blue.webp",
        "ico_arrow_top_blue.webp",
    ];

/* window.addEventListener("keydown", function(e) {
    if(["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].indexOf(e.code) > -1) {
        e.preventDefault();
    }
}, false); */

var MS, mainNav;

MS = new Vue({
    el: '#msapp',
    data: {
        loaded:false,
        isMob:false,
        isSlide:true,
        message:{
            landscape:false,
        },
        sectionNav:false,
        backtotop:false,
        popup:false,
        popupTarget:'',
        releaseCntNum:3,
        touchBlock:false,
        chapter:"",
        nav:false,
        quiz1:{showResult:false,selected:0,answer:2, resultStatus:false},
        quiz2:{showResult:false,selected:0,answer:2, resultStatus:false},
        quiz3:{showResult:false,selected:0,answer:2, resultStatus:false},
        quiz4:{showResult:false,selected:0,answer:2, resultStatus:false},
    },
    created:function(){
        this.checkLoaded();
    },
    mounted:function(){
        this.checkLandscape();
        //this.checkKvSection();

        mainNav = new Swiper(".chapter-nav", {
            slidesPerView: "auto",
            //centeredSlides: true,
            navigation: {
                nextEl: ".head-navigation .arrow-next",
                prevEl: ".head-navigation .arrow-prev",
            },
            breakpoints: {
                300: {
                    slidesPerView: "auto",
                    //centeredSlides: true,
                },
                1200: {
                  slidesPerView: 1,
                  centeredSlides: false,
                },
            },
        });

        var lastScrollTop = 0;
        $(window).scroll(function(event) {
            //MS.checkKvSection();
            var st = $(this).scrollTop();
            if (st > lastScrollTop){
                $('.ms-head').addClass('head-toggle');
                $('.ms-backtotop').addClass('pos-top');
            } else {
                $('.ms-head').removeClass('head-toggle');
                $('.ms-backtotop').removeClass('pos-top');
            }
            lastScrollTop = st;
        });

        setTimeout(function(){
            //MS.checkKvSection();
        }, 1000);

        $('.touch-blocking').on('touchmove', function(e){
            e.preventDefault();
        });

        /* $('#wont-work .kv-title').on('touchmove', function(e){
            e.preventDefault();
        }); */

        /* $('.ms-backtotop a').on('click', function(e){
            e.preventDefault();
            $('html, body').animate({
                scrollTop:$('body').offset().top
            }, 1);
            MS.backtotopfunc();
        }); */

        var wold = $(window).width(), wnew, hold = $(window).height(), hnew;

        $(window).resize(function(){
            MS.checkLandscape();
            /* wnew = $(window).width();
            hnew = $(window).height();
            console.log(wold, wnew)
            console.log(hold, hnew)

            if(wold != wnew) {
                if(hold == hnew){
                    location.reload();
                }
            } */
        });

        function reloadPage(a, b){
            if(a != b) {
                //location.reload();
                ScrollTrigger.refresh();
            }
        }

        $(document).keyup(function(e) {
            if (e.key === "Escape") {
               //MS.closePop();
           }
       });
    },
    watch:{
        loaded:function(val){
            if(val === true) {
                this.setScrollAni();
                $('body').removeClass('overhide');
                console.log('%cPage Loaded - Presented By MorningStudio', 'background:#ffcb04; color:#000000;padding:5px 10px;font-weight:bold; font-size:14px;font-family:Roboto;');
            }
        },
    },
    computed:{
    },
    methods:{
        checkLoaded:function(){
            var loadStatus = localStorage.getItem("msLoaded");
            if(loadStatus == "1") {
                //this.loading();
                this.loaded = true;
                $('html').addClass('loaded');
            }else if(loadStatus == "0" || loadStatus == null) {
                this.loading();
            }
        },
        loading:function(totalFrame){
            var totalFrame = imagelist.length;
            var finished = new Promise(function(resolve, reject) {
                var loadedCount = 0;
                var isLoadedCheck = function(img){
                    var onLoaded = function(){
                        var handleLoadingProgress = function() {
                            var loadingProgressNumber = $(".loading-count-txt");
                            loadingProgressNumber.html(Math.ceil(loadedCount / totalFrame * 100));
                        }
                        handleLoadingProgress();
                        if (loadedCount >= totalFrame) {
                            setTimeout(function(){
                                $('.ms-loading').addClass('loaded');
                                setTimeout(function(){
                                    console.log('Loaded');
                                    $('.ms-loading').fadeOut(1000, function(){
                                        MS.loaded = true;
                                    });
                                }, 3000);
                            }, 300);
                        }
                    }
                    if (img.complete) {
                        loadedCount++;
                        onLoaded();
                        return
                    }
                    img.onload = function(){
                        loadedCount++;
                        onLoaded();
                    }
                    img.onerror = function(){
                        loadedCount++;
                        console.log('Load Error: '+img);
                        onLoaded();
                    }
                }

                for (let i = 1; i <= totalFrame; i++) {
                    const img = new Image();
                    img.src = imagePath + imagelist[i-1];
                    isLoadedCheck(img);

                    if(i == totalFrame - 1) {
                        localStorage.setItem("msLoaded", "1");
                        $('html').addClass('loaded');
                    }
                }
            });
            return finished
        },
        setScrollAni:function(){

            var timer = null;
            window.addEventListener('scroll', function() {
                if(timer !== null) {
                    clearTimeout(timer);
                    MS.moving = true;
                }
                timer = setTimeout(function() {
                    MS.moving = false;
                }, 100);
            }, false);

            const scrolling = {
                enabled: true,
                events: "scroll,wheel,touchmove,pointermove".split(","),
                prevent: e => e.preventDefault(),
                disable() {
                    if (scrolling.enabled) {
                    scrolling.enabled = false;
                    window.addEventListener("scroll", gsap.ticker.tick, {passive: true});
                    scrolling.events.forEach((e, i) => (i ? document : window).addEventListener(e, scrolling.prevent, {passive: false}));
                    }
                },
                enable() {
                    if (!scrolling.enabled) {
                    scrolling.enabled = true;
                    window.removeEventListener("scroll", gsap.ticker.tick);
                    scrolling.events.forEach((e, i) => (i ? document : window).removeEventListener(e, scrolling.prevent));
                    }
                }
            };

            var scrollCnt = 0;
            var scrollTime;
            var cntScrollMove = function(){
                scrollTime = setTimeout(function(){
                    scrollCnt=0;
                }, 1000);
            }
            function goToSection(section, anim, i) {
                if (scrolling.enabled && document.readyState === 'complete') { // skip if a scroll tween is in progress
                    if(!MS.backtotop) {
                        ScrollTrigger.refresh();
                        scrollCnt++;
                        scrolling.disable();
                        cntScrollMove();
                        //gsap.set("body", {overflow: "hidden"});

                        $('html, body').animate({
                            scrollTop:$(section).offset().top
                        }, 1000, function(){
                            scrolling.enable();
                        });


                        // gsap.to(window, {
                        //     scrollTo: {y: section, autoKill: false},
                        //     duration: 1,
                        //     onComplete:function(){
                        //         //console.log(scrollCnt);
                        //         if(scrollCnt == 2) {
                        //             location.reload();
                        //         }
                        //         scrollCnt=0;
                        //         //console.log(scrollCnt);
                        //         setTimeout(function(){
                        //             scrolling.enable();
                        //             //gsap.set("body", {overflow: "auto"});
                        //         }, 1000);
                        //     },
                        // });
                        anim && anim.restart();
                    }
                }
            }

            var sectionOpening, sectionBackinTime;
            function sectionTeaser(){
                gsap.utils.toArray("#opening").forEach(function(section){
                    sectionOpening = gsap.timeline({
                        scrollTrigger: {
                            trigger: section,
                            start:"top top",
                            end:"bottom bottom",
                            pinSpacing:false,
                            pin:$('#opening').find('.section-bg'),
                        }
                    });
                });

                sectionBackinTime = gsap.timeline({
                    scrollTrigger: {
                        trigger: '#back-in-time',
                        start:"top center",
                        end:"bottom bottom",
                        scrub:1,
                        pin:$('#back-in-time').find('.time-wrapper'),
                    }
                });

                sectionBackinTime.fromTo('.time-wrapper', 100, {opacity:1}, {opacity:1})
                .fromTo('.time1', 100, {rotation:360, scale:0}, {rotation:360*1.5, scale:30}, '-=95').to('.time1', 1, {opacity:1}, '-=100')
                .fromTo('.time2', 100, {rotation:360, scale:0}, {rotation:360*2, scale:26}, '-=97').to('.time2', 3, {opacity:1}, '-=100')
                .fromTo('.time3', 100, {rotation:360, scale:0}, {rotation:360*2, scale:22}, '-=97').to('.time3', 5, {opacity:1}, '-=100')
                .fromTo('.time4', 100, {rotation:360, scale:0}, {rotation:360*2, scale:18}, '-=97').to('.time4', 7, {opacity:1}, '-=100')
                .fromTo('.time5', 100, {rotation:360, scale:0}, {rotation:360*2, scale:16}, '-=97').to('.time5', 7, {opacity:1}, '-=100')
                .fromTo('.time6', 100, {rotation:360, scale:0}, {rotation:360*2, scale:12}, '-=97').to('.time6', 7, {opacity:1}, '-=100')
                .fromTo('.time7', 100, {rotation:360, scale:0}, {rotation:360*2, scale:8}, '-=97').to('.time7', 7, {opacity:1}, '-=100')
                .fromTo('.f_back-in-time', 10, {opacity:0}, {opacity:1}, '-=90')
                .fromTo('.bi-title-01', 10, {scale:0.2, opacity:0}, {scale:1, opacity:1}, '-=72')
                .fromTo('.bi-title-02', 10, {scale:0.2, opacity:0}, {scale:1, opacity:1}, '-=70')
                .fromTo('.back-in-desc', 10, {scale:0.2, opacity:0}, {scale:1, opacity:1}, '-=68')
                .fromTo('.back-in-title-bg', 10, {opacity:0}, {opacity:1}, '-=66')
                .fromTo('.bg-section-kv', 10, {opacity:0}, {opacity:1}, '-=66')
                .fromTo('.f_back-in-time', 10, {className:"f_back-in-time"}, {className:"f_back-in-time hello"}, '-=60')

                .to('.time6', 10, {opacity:0}, '-=65')
                .to('.time7', 10, {opacity:0}, '-=65')

                .fromTo('.kv-star-item-03', 20, {scale:0.1, opacity:0}, {scale:1, opacity:1}, '-=55')
                .fromTo('.kv-star-item-02', 20, {scale:0.1, opacity:0}, {scale:1, opacity:1}, '-=32')
                .fromTo('.kv-star-item-01', 20, {scale:0.1, opacity:0}, {scale:1, opacity:1}, '-=28')
                .fromTo('.kv-ojb-right-01', 20, {scale:0.9, opacity:0}, {scale:1, opacity:1}, '-=55')
                .fromTo('.kv-ojb-left-01', 20, {scale:0.9, opacity:0}, {scale:1, opacity:1}, '-=51')
                .fromTo('.kv-ojb-left-02', 20, {opacity:0, right:"0%", rotation:360}, {opacity:1, right:"15%",rotation:360*1.2}, '-=39')
                .fromTo('.kv-ojb-right-02', 20, {opacity:0, left:"80%", rotation:0}, {opacity:1, left:"84%",  rotation:360}, '-=39')
                .fromTo('.kv-ojb-left-03', 20, {opacity:0, right:"70%"}, {opacity:1, right:"84%"}, '-=35')
                .fromTo('.kv-ojb-right-03', 10, {opacity:0, left:"88%"}, {opacity:1, left:"90%"}, '-=30')
                .fromTo('.deco-bg-star1', 10, {scale:0.9, opacity:0}, {scale:1, opacity:1}, '-=28')
                .fromTo('.deco-bg-star2', 10, {scale:0.9, opacity:0}, {scale:1, opacity:1}, '-=27')
                .fromTo('.deco-bg-star3', 10, {scale:0.9, opacity:0}, {scale:1, opacity:1}, '-=26')
            }

            function sectionTeaserMob(){
                gsap.utils.toArray("#opening").forEach(function(section){
                    sectionOpening = gsap.timeline({
                        scrollTrigger: {
                            trigger: section,
                            start:"top top",
                            end:"bottom bottom",
                            pinSpacing:false,
                            pin:$('#opening').find('.section-bg'),
                        }
                    });
                });

                sectionBackinTime = gsap.timeline({
                    scrollTrigger: {
                        trigger: '#back-in-time',
                        start:"top center",
                        end:"bottom bottom",
                        scrub:1,
                        pin:$('#back-in-time').find('.time-wrapper'),
                    }
                });

                sectionBackinTime.fromTo('.time-wrapper', 100, {opacity:1}, {opacity:1})
                .fromTo('.time1', 100, {rotation:360, scale:0}, {rotation:360*1.5, scale:30}, '-=95').to('.time1', 1, {opacity:1}, '-=100')
                .fromTo('.time2', 100, {rotation:360, scale:0}, {rotation:360*2, scale:26}, '-=97').to('.time2', 3, {opacity:1}, '-=100')
                .fromTo('.time3', 100, {rotation:360, scale:0}, {rotation:360*2, scale:22}, '-=97').to('.time3', 5, {opacity:1}, '-=100')
                .fromTo('.time4', 100, {rotation:360, scale:0}, {rotation:360*2, scale:18}, '-=97').to('.time4', 7, {opacity:1}, '-=100')
                .fromTo('.time5', 100, {rotation:360, scale:0}, {rotation:360*2, scale:16}, '-=97').to('.time5', 7, {opacity:1}, '-=100')
                .fromTo('.time6', 100, {rotation:360, scale:0}, {rotation:360*2, scale:12}, '-=97').to('.time6', 7, {opacity:1}, '-=100')
                .fromTo('.time7', 100, {rotation:360, scale:0}, {rotation:360*2, scale:8}, '-=97').to('.time7', 7, {opacity:1}, '-=100')
                .fromTo('.f_back-in-time', 10, {opacity:0}, {opacity:1}, '-=90')
                .fromTo('.bi-title-01', 10, {scale:0.2, opacity:0}, {scale:1, opacity:1}, '-=72')
                .fromTo('.bi-title-02', 10, {scale:0.2, opacity:0}, {scale:1, opacity:1}, '-=70')
                .fromTo('.back-in-desc', 10, {scale:0.2, opacity:0}, {scale:1, opacity:1}, '-=68')
                .fromTo('.back-in-title-bg', 10, {opacity:0}, {opacity:1}, '-=66')
                .fromTo('.bg-section-kv', 10, {opacity:0}, {opacity:1}, '-=66')
                .fromTo('.f_back-in-time', 10, {className:"f_back-in-time"}, {className:"f_back-in-time hello"}, '-=60')

                .to('.time6', 10, {opacity:0}, '-=65')
                .to('.time7', 10, {opacity:0}, '-=65')

                .fromTo('.kv-star-item-03', 20, {scale:0.1, opacity:0}, {scale:1, opacity:1}, '-=55')
                .fromTo('.kv-star-item-02', 20, {scale:0.1, opacity:0}, {scale:1, opacity:1}, '-=32')
                .fromTo('.kv-star-item-01', 20, {scale:0.1, opacity:0}, {scale:1, opacity:1}, '-=28')
                .fromTo('.kv-ojb-right-01', 20, {scale:0.9, opacity:0}, {scale:1, opacity:1}, '-=55')
                .fromTo('.kv-ojb-left-01', 20, {scale:0.9, opacity:0}, {scale:1, opacity:1}, '-=51')
                .fromTo('.kv-ojb-left-02', 20, {opacity:0, right:"55%", rotation:360}, {opacity:1, right:"60%",rotation:360*1.2}, '-=39')
                .fromTo('.kv-ojb-right-02', 20, {opacity:0, left:"80%", rotation:0}, {opacity:1, left:"80%",  rotation:360}, '-=39')
                .fromTo('.kv-ojb-left-03', 20, {opacity:0, right:"70%"}, {opacity:1, right:"84%"}, '-=35')
                .fromTo('.kv-ojb-right-03', 10, {opacity:0, left:"98%"}, {opacity:1, left:"110%"}, '-=30')
                .fromTo('.deco-bg-star1', 10, {scale:0.9, opacity:0}, {scale:1, opacity:1}, '-=28')
                .fromTo('.deco-bg-star2', 10, {scale:0.9, opacity:0}, {scale:1, opacity:1}, '-=27')
                .fromTo('.deco-bg-star3', 10, {scale:0.9, opacity:0}, {scale:1, opacity:1}, '-=26')
            }

            var aniStar;
            function sectionSetting(){
                gsap.utils.toArray("section").forEach(function(section, index){
                    ScrollTrigger.create({
                        trigger: section,
                        id: index+1,
                        start: 'top 60%',
                        end: function(){
                            return "+="+section.clientHeight + 30
                        },
                        toggleActions: 'play reverse none reverse',
                        toggleClass: {targets: section, className: "hello"},
                        onEnter:function(){
                            var vs = $(section);
                            vs.addClass('active');
                            if(vs.data('target')) {}
                        },
                        onLeaveBack:function(){
                            var vs = $(section);
                            if(vs.data('target')) {}
                        },
                    });

                    if($(section).find('.f_phone-bg-inner').length > 0) {
                        aniStar = gsap.timeline({
                            scrollTrigger: {
                                trigger: $(section).find('.f_phone-bg-inner'),
                                start:"top bottom",
                                end:"top top",
                                scrub: 1,
                            }
                        });
                        aniStar.fromTo('.deco-star1', 10, {top:300}, {top:0})
                        .fromTo('.deco-star2', 10, {top:200}, {top:0}, '-=9')
                        .fromTo('.deco-star3', 10, {top:250}, {top:0}, '-=8')
                    }

                });
            }

            function sectionIntro(){
                gsap.utils.toArray("#phone").forEach(function(section){
                    var sectionIntro = gsap.timeline({
                        scrollTrigger: {
                            trigger: section,
                            start:"top 80%",
                            end: "bottom bottom",
                            onEnter:function(){
                                /* if(MS.backtotop != true && document.readyState === 'complete' ) {
                                    goToSection(section);
                                    MS.touchBlock = true;
                                    MS.setRelaseCount();
                                    setTimeout(function(){
                                        gsap.set("body", {overflow: "hidden"});
                                    }, 1000);
                                } */
                                $('#msapp').attr('data-section', 'content');
                            },
                            onLeaveBack:function(){
                                $('#msapp').attr('data-section', 'kv');
                            }
                        }
                    });
                });
            }

            function sectionChapter1(){
                gsap.utils.toArray("#in-steel").forEach(function(chapter){
                    var sectionInSteel = gsap.timeline({
                        scrollTrigger: {
                            trigger: chapter,
                            start:"top bottom",
                            end: "bottom top",
                            onEnter:function(){
                                MS.checkNavActive('chapter1')
                                mainNav.slideTo(0, 1000)
                            },
                            onLeaveBack:function(){
                                MS.checkNavActive('')
                            }
                        }
                    });
                });

                gsap.utils.toArray("#in-steel .chapter-kv").forEach(function(area, i){
                    var kvimgA = area.querySelector('.chapter1_kv_a'),
                        kvimgB = area.querySelector('.chapter1_kv_b');

                    let tl = gsap.timeline({
                        scrollTrigger: {
                            trigger: area,
                            start: "top bottom",
                            end: "bottom bottom",
                            scrub: 1,
                        }
                    });

                    tl.fromTo(kvimgA, 100, {yPercent:0}, {yPercent:-20})
                    .fromTo(kvimgB, 100, {yPercent:0}, {yPercent:-35}, '-=100')
                });

                gsap.utils.toArray("#visual1").forEach(function(area, i){
                    var imgA = area.querySelector('.img_a'),
                        imgB = area.querySelector('.img_b');

                    let tl = gsap.timeline({
                        scrollTrigger: {
                            trigger: area,
                            start: "top center",
                            end: "bottom top",
                            scrub: 1,
                        }
                    });

                    tl.fromTo(imgA, 100, {yPercent:0}, {yPercent:-5})
                    .fromTo(imgB, 100, {yPercent:10}, {yPercent:-10}, '-=100')
                });

                gsap.utils.toArray("#quote1").forEach(function(area, i){
                    var imgA = area.querySelector('.f_quote-wrap-bg');

                    let tl = gsap.timeline({
                        scrollTrigger: {
                            trigger: area,
                            start: "top center",
                            end: "bottom center",
                            scrub: 1,
                        }
                    });

                    tl.fromTo(imgA, 100, {opacity:0}, {opacity:1})
                    .fromTo('#quote1_a', 100, {top:-10}, {top:10}, '-=100')
                    .fromTo('#quote1_b', 100, {top:-15}, {top:15}, '-=90')
                });

                gsap.utils.toArray("#quiz1").forEach(function(section){
                    var tl = gsap.timeline({
                        scrollTrigger: {
                            trigger: section,
                            start:"top top",
                            end:"bottom bottom",
                            scrub: 1,
                            pinSpacing:false,
                            pin:$('#quiz1').find('.quiz-content'),
                        }
                    });

                    tl.to('#quiz1', 80, {opacity:1})
                    .to('#quiz1 .quiz-bg-inner', 100, {scale:1.4, top:'-10%'}, '-=60')
                    .fromTo('#quiz1 .quiz-box-octa', 200, {width:"0px", height:"0px", top:"61%"}, {
                        width:function(){
                            var ww = $(window).width();
                            if(ww < 768) {
                                return $(window).height() * 1.2
                            }else {
                                return $(window).width() * 1.6
                            }
                        }, height:function(){
                            var ww = $(window).width();
                            if(ww < 768) {
                                return $(window).height() * 1.2
                            }else {
                                return $(window).width() * 1.6
                            }
                        }, top:"50%"}, '-=49')
                    .fromTo('#quiz1 .quiz-box', 200, {scale:0.2}, {scale:1}, '-=200')
                    .to('#quiz1 .quiz-inner', 50, {className:"quiz-inner active"}, '-=100')
                    .to('#quiz1 .quiz-box-octa', 50, {className:"quiz-box-octa octa-to"}, "-=30")
                    .to('#quiz1 .quiz-box', 100, {scale:1})
                    /* .call(function(){if(MS.backtotop != true) {
                                    gsap.set("body", {overflow: "hidden"});
                                    MS.setRelaseCount();
                                }}, '-=30') */
                });

                var q1option =  new Swiper(".quiz-option1", {
                    slidesPerView: 2,
                    loop:true,
                    speed:1500,
                    centeredSlides: true,
                    navigation: {
                        nextEl: "#quiz1 .btn-quiz-next",
                        prevEl: "#quiz1 .btn-quiz-prev",
                    },
                });

                var q1optionTexture =  new Swiper(".quiz-option1-texture", {
                    slidesPerView: 1,
                    centeredSlides: true,
                    effect: 'fade',
                    fadeEffect: {
                        crossFade: true
                    },
                });

                q1option.on('beforeTransitionStart', function(){
                    q1optionTexture.slideTo(this.realIndex, 600)
                    MS.quiz1.selected = this.realIndex;
                });
            }

            function sectionChapter1Mob(){
                gsap.utils.toArray("#in-steel").forEach(function(chapter){
                    var sectionInSteel = gsap.timeline({
                        scrollTrigger: {
                            trigger: chapter,
                            start:"top bottom",
                            end: "bottom top",
                            onEnter:function(){
                                MS.checkNavActive('chapter1')
                                mainNav.slideTo(0, 1000)
                            },
                            onLeaveBack:function(){
                                MS.checkNavActive('')
                            }
                        }
                    });
                });

                gsap.utils.toArray("#in-steel .chapter-kv").forEach(function(area, i){
                    var kvimgA = area.querySelector('.chapter1_kv_a_mob'),
                        kvimgB = area.querySelector('.chapter1_kv_b_mob');

                    let tl = gsap.timeline({
                        scrollTrigger: {
                            trigger: area,
                            start: "top bottom",
                            end: "bottom center",
                            scrub: 1,
                        }
                    });

                    tl.fromTo(kvimgA, 100, {yPercent:10}, {yPercent:-10})
                    .fromTo(kvimgB, 100, {yPercent:15}, {yPercent:-15}, '-=100')
                });

                gsap.utils.toArray("#visual1").forEach(function(area, i){
                    var imgA = area.querySelector('.img_a'),
                        imgB = area.querySelector('.img_b');

                    let tl = gsap.timeline({
                        scrollTrigger: {
                            trigger: area,
                            start: "top center",
                            end: "bottom top",
                            scrub: 1,
                        }
                    });

                    tl.fromTo(imgA, 100, {yPercent:0}, {yPercent:-5})
                    .fromTo(imgB, 100, {yPercent:10}, {yPercent:-10}, '-=100')
                });

                gsap.utils.toArray("#quote1").forEach(function(area, i){
                    var imgA = area.querySelector('.f_quote-wrap-bg');

                    let tl = gsap.timeline({
                        scrollTrigger: {
                            trigger: area,
                            start: "top center",
                            end: "bottom center",
                            scrub: 1,
                        }
                    });

                    tl.fromTo(imgA, 100, {opacity:0}, {opacity:1})
                    .fromTo('#quote1_a', 100, {top:-10}, {top:10}, '-=100')
                    .fromTo('#quote1_b', 100, {top:-15}, {top:15}, '-=90')
                });

                gsap.utils.toArray("#quiz1").forEach(function(section){
                    var tl = gsap.timeline({
                        scrollTrigger: {
                            trigger: section,
                            start:"top top",
                            end:"bottom bottom",
                            scrub: 1,
                            pinSpacing:false,
                            pin:$('#quiz1').find('.quiz-content'),
                        }
                    });

                    tl.to('#quiz1', 80, {opacity:1})
                    .to('#quiz1 .quiz-bg-inner', 100, {scale:1.4, top:'-10%'}, '-=60')
                    .fromTo('#quiz1 .quiz-box-octa', 200, {width:"0px", height:"0px", top:"61%"}, {
                        width:function(){
                            var ww = $(window).width();
                            if(ww < 768) {
                                return $(window).height() * 1.2
                            }else {
                                return $(window).width() * 1.5
                            }
                        }, height:function(){
                            var ww = $(window).width();
                            if(ww < 768) {
                                return $(window).height() * 1.2
                            }else {
                                return $(window).width() * 1.5
                            }
                        }, top:"50%"}, '-=49')
                    .fromTo('#quiz1 .quiz-box', 200, {scale:0.2}, {scale:1}, '-=200')
                    .to('#quiz1 .quiz-inner', 50, {className:"quiz-inner active"}, '-=100')
                    .to('#quiz1 .quiz-box-octa', 50, {className:"quiz-box-octa octa-to"}, "-=30")
                    .to('#quiz1 .quiz-box', 100, {scale:1})
                    /* .call(function(){if(MS.backtotop != true) {
                                    gsap.set("body", {overflow: "hidden"});
                                    MS.setRelaseCount();
                                }}, '-=30') */
                });

                var q1option =  new Swiper(".quiz-option1", {
                    slidesPerView: 2,
                    loop:true,
                    speed:1500,
                    centeredSlides: true,
                    navigation: {
                        nextEl: "#quiz1 .btn-quiz-next",
                        prevEl: "#quiz1 .btn-quiz-prev",
                    },
                });

                var q1optionTexture =  new Swiper(".quiz-option1-texture", {
                    slidesPerView: 1,
                    centeredSlides: true,
                    effect: 'fade',
                    fadeEffect: {
                        crossFade: true
                    },
                });

                q1option.on('beforeTransitionStart', function(){
                    q1optionTexture.slideTo(this.realIndex, 600)
                    MS.quiz1.selected = this.realIndex;
                });
            }

            function sectionChapter2(){
                gsap.utils.toArray("#phone-call").forEach(function(chapter){
                    var tl = gsap.timeline({
                        scrollTrigger: {
                            trigger: chapter,
                            start:"top bottom",
                            end: "bottom top",
                            onEnter:function(){
                                MS.checkNavActive('phone-call');
                                mainNav.slideTo(1, 1000);
                            },
                            onLeaveBack:function(){
                                MS.checkNavActive('chapter1');
                                mainNav.slideTo(0, 1000)
                            }
                        }
                    });
                });

                gsap.utils.toArray(".c2-kv-home").forEach(function(item, i){
                    var tl = gsap.timeline({
                        scrollTrigger: {
                            trigger: item,
                            start:"top bottom",
                            end:"top 20%",
                            scrub: 1,
                        }
                    });

                    tl.fromTo(item, 100, {top:function(){
                        return '200px';
                    }}, {top:"0px"})
                    .fromTo('.c2-deco-01 .deco-item-inner', 100, {right:"-200px"}, {right:"0%"}, '-=100')
                    .fromTo('.c2-deco-09 .deco-item-inner', 100, {right:"-200px"}, {right:"0%"}, '-=100')
                    .fromTo('.c2-deco-02 .deco-item-inner', 100, {right:"-200px", top:"200px"}, {right:"0%", top:"0px"}, '-=80')
                    .fromTo('.c2-deco-04 .deco-item-inner', 100, {left:"-100px", top:"200px"}, {left:"0%", top:"0px"}, '-=100')
                    .fromTo('.c2-deco-05 .deco-item-inner', 100, {left:"-100px", top:"100px"}, {left:"0%", top:"0px"}, '-=100')
                    .fromTo('.c2-deco-03 .deco-item-inner', 100, {left:"-200px", top:"100px"}, {left:"0%", top:"0px"}, '-=100')
                    .fromTo('.c2-deco-08 .deco-item-inner', 100, {left:"-200px", top:"100px"}, {left:"0%", top:"0px"}, '-=100')
                    .fromTo('.c2-deco-06 .deco-item-inner', 100, {left:"-200px", top:"-100px"}, {left:"0%", top:"0px"}, '-=100')
                    .fromTo('.c2-deco-07 .deco-item-inner', 100, {left:"-200px", top:"-50px"}, {left:"0%", top:"0px"}, '-=100')
                });

                gsap.utils.toArray("#chapter2-title .sec-deco img").forEach(function(item, i){
                    var tl = gsap.timeline({
                        scrollTrigger: {
                            trigger: item,
                            start:"top 80%",
                            end:"top center",
                            scrub: 1,
                        }
                    });

                    tl.fromTo(item, 100, {left:"-100%"}, {left:"0%"})
                });

                gsap.utils.toArray(".conver-box-obj").forEach(function(section, i){
                    var tl = gsap.timeline({
                        scrollTrigger: {
                            trigger: section,
                            start:"center center",
                            end:"+=4000",
                            scrub: 1,
                            pinSpacing:true,
                            pin:true,
                        }
                    });

                    tl.fromTo('#head-golay', 300, {opacity:1}, {opacity:0.3}, '-=300')
                    .to('.script-box-1', 300, {className:"script-box-1 active"}, '-=300')
                    .fromTo('#head-genta', 300, {opacity:1}, {opacity:0.3})
                    .fromTo('#head-golay', 300, {opacity:0.3}, {opacity:1}, '-=300')
                    .to('.script-box-1', 300, {className:"script-box-1"}, '-=300')
                    .to('.script-box-2', 300, {className:"script-box-2 active"}, '-=300')
                    .fromTo('#head-golay', 300, {opacity:1}, {opacity:0.3})
                    .fromTo('#head-genta', 300, {opacity:0.3}, {opacity:1}, '-=300')
                    .to('.script-box-2', 300, {className:"script-box-2"}, '-=300')
                    .to('.script-box-3', 300, {className:"script-box-3 active"}, '-=300')
                    .fromTo('#head-genta', 300, {opacity:1}, {opacity:0.3})
                    .fromTo('#head-golay', 300, {opacity:0.3}, {opacity:1}, '-=300')
                    .to('.script-box-3', 300, {className:"script-box-3"}, '-=300')
                    .to('.script-box-4', 300, {className:"script-box-4 active"}, '-=300')
                    .fromTo('#head-golay', 300, {opacity:1}, {opacity:0.3})
                    .fromTo('#head-genta', 300, {opacity:0.3}, {opacity:1}, '-=300')
                    .to('.script-box-4', 300, {className:"script-box-4"}, '-=300')
                    .to('.script-box-5', 300, {className:"script-box-5 active"}, '-=300')

                });

                gsap.utils.toArray(".sea-box-obj").forEach(function(section, i){
                    var tl = gsap.timeline({
                        scrollTrigger: {
                            trigger: section,
                            start:"90% bottom",
                            end:"+=800",
                            scrub: 1,
                            pinSpacing:true,
                            //pin:true,
                        }
                    });

                    tl.to('.sea-diver', 100, {top:"250px"})
                });

                gsap.utils.toArray(".sea-bottom-bg-inner").forEach(function(target, i){
                    var tl = gsap.timeline({
                        scrollTrigger: {
                            trigger: target,
                            start:"top top",
                            end:"bottom bottom",
                            scrub: 1,
                            pin:".sea-bottom-bg-diver",
                            toggleClass: {targets: target, className: "hello"},
                        }
                    });
                });

                gsap.utils.toArray(".bubble-effect").forEach(function(target, i){
                    var tl = gsap.timeline({
                        scrollTrigger: {
                            trigger: '.sea-bottom-bg-inner',
                            start:"top top",
                            end:"bottom bottom",
                            scrub: 1,
                            pin:target
                        }
                    });
                });

                gsap.utils.toArray(".sea-bottom-bg-fish5").forEach(function(target, i){
                    var tl = gsap.timeline({
                        scrollTrigger: {
                            trigger: target,
                            start:"top bottom",
                            end:"bottom top",
                            scrub: 1,
                        }
                    });

                    tl.fromTo(target, 100, {left:"5%"}, {left:"30%"})
                });

                gsap.utils.toArray(".sea-bottom-bg-bubble-right").forEach(function(target, i){
                    var tl = gsap.timeline({
                        scrollTrigger: {
                            trigger: target,
                            start:"top center",
                            end:"bottom top",
                            scrub: 1,
                        }
                    });

                    tl.fromTo(target, 100, {top:"0%"}, {top:"-5%"})
                });

                gsap.utils.toArray(".sea-bottom-bg-bubble-left").forEach(function(target, i){
                    var tl = gsap.timeline({
                        scrollTrigger: {
                            trigger: target,
                            start:"top center",
                            end:"bottom top",
                            scrub: 1,
                        }
                    });

                    tl.fromTo(target, 100, {top:"20%"}, {top:"15%"})
                });

                gsap.utils.toArray(".sea-bottom-bg-fish6").forEach(function(target, i){
                    var tl = gsap.timeline({
                        scrollTrigger: {
                            trigger: target,
                            start:"top bottom",
                            end:"bottom top",
                            scrub: 1,
                        }
                    });

                    tl.fromTo(target, 100, {right:"-5%"}, {right:"20%"})
                });

                gsap.utils.toArray("#quiz2").forEach(function(section){
                    var tl = gsap.timeline({
                        scrollTrigger: {
                            trigger: section,
                            start:"top top",
                            end:"bottom bottom",
                            scrub: 1,
                            pinSpacing:false,
                            pin:$('#quiz2').find('.quiz-content'),
                        }
                    });

                    var tl1 = gsap.timeline({
                        scrollTrigger: {
                            trigger: section,
                            start:"top bottom",
                            end:"top center",
                            scrub: 1,
                        }
                    });
                    tl1.fromTo('.sea-bottom-bg-diver',100, {opacity:1}, {opacity:0})

                    var tl2 = gsap.timeline({
                        scrollTrigger: {
                            trigger: section,
                            start:"top bottom",
                            end:"bottom bottom",
                            scrub: 1,
                        }
                    });

                    tl2.to('#quiz2 .quiz2-bg-back', 80, {top:"-200px"});

                    var tl3 = gsap.timeline({
                        scrollTrigger: {
                            trigger: section,
                            start:"top bottom",
                            end:"bottom bottom",
                            scrub: 1,
                        }
                    });

                    tl3.fromTo('.quiz-bg-fish01', {left:"-10%"}, {left:"20%"})

                    var tl4 = gsap.timeline({
                        scrollTrigger: {
                            trigger: section,
                            start:"top bottom",
                            end:"bottom center",
                            scrub: 1,
                        }
                    });

                    tl4.fromTo('.quiz-bg-fish02', {right:"-10%"}, {right:"50%"})

                    var tl5 = gsap.timeline({
                        scrollTrigger: {
                            trigger: section,
                            start:"top bottom",
                            end:"bottom top",
                            scrub: 1,
                        }
                    });

                    tl5.fromTo('.quiz-bg-fish03', {right:"30%"}, {right:"-10%"})

                    var tl6 = gsap.timeline({
                        scrollTrigger: {
                            trigger: section,
                            start:"top bottom",
                            end:"bottom top",
                            scrub: 1,
                        }
                    });

                    tl6.fromTo('.quiz-bg-fish04', {right:"40%"}, {right:"-10%"})

                    tl.fromTo('#quiz2 .quiz-bg-inner', 100, {bottom:"-30%"}, {bottom:"0%"})
                    .to('#quiz2 .quiz-bg-inner', 100, {scale:1.2})
                    .to('#quiz2 .quiz-bg-left', 100, {left:"-10%"}, '-=100')
                    .to('#quiz2 .quiz-bg-right', 100, {right:"-10%"}, '-=100')
                    .fromTo('.sea-bottom-bg .bubble-effect',100, {opacity:1}, {opacity:0}, '-=100')
                    .fromTo('#quiz2 .quiz-box-octa', 200, {width:"0px", height:"0px", top:"40%"}, {
                        width:function(){
                            var ww = $(window).width();
                            if(ww < 768) {
                                return $(window).height() * 1.2
                            }else {
                                return $(window).width() * 1.6
                            }
                        }, height:function(){
                            var ww = $(window).width();
                            if(ww < 768) {
                                return $(window).height() * 1.2
                            }else {
                                return $(window).width() * 1.6
                            }
                        }, top:"50%"}, '-=100')
                    .fromTo('#quiz2 .quiz-box', 200, {scale:0.2}, {scale:1}, '-=200')
                    .to('#quiz2 .quiz-inner', 50, {className:"quiz-inner active"}, '-=100')
                    .to('#quiz2 .quiz-box-octa', 50, {className:"quiz-box-octa octa-to"}, "-=30")
                    .to('#quiz2 .quiz-box', 100, {scale:1})
                });
            }

            function sectionChapter2Mob(){
                gsap.utils.toArray("#phone-call").forEach(function(chapter){
                    var tl = gsap.timeline({
                        scrollTrigger: {
                            trigger: chapter,
                            start:"top bottom",
                            end: "bottom top",
                            onEnter:function(){
                                MS.checkNavActive('phone-call');
                                mainNav.slideTo(1, 1000);
                            },
                            onLeaveBack:function(){
                                MS.checkNavActive('chapter1');
                                mainNav.slideTo(0, 1000)
                            }
                        }
                    });
                });

                gsap.utils.toArray(".c2-kv-home").forEach(function(item, i){
                    var tl = gsap.timeline({
                        scrollTrigger: {
                            trigger: item,
                            start:"top bottom",
                            end:"top 40%",
                            scrub: 1,
                        }
                    });

                    tl.fromTo(item, 100, {top:function(){
                        return '200px';
                    }}, {top:"0px"})
                    .fromTo('.c2-deco-01 .deco-item-inner', 100, {right:"-100%"}, {right:"0%"}, '-=100')
                    .fromTo('.c2-deco-09 .deco-item-inner', 100, {right:"-100%"}, {right:"0%"}, '-=100')
                    .fromTo('.c2-deco-02 .deco-item-inner', 100, {right:"-100%", top:"10%"}, {right:"0%", top:"0px"}, '-=80')
                    .fromTo('.c2-deco-04 .deco-item-inner', 100, {left:"-50%", top:"50%"}, {left:"0%", top:"0px"}, '-=100')
                    .fromTo('.c2-deco-05 .deco-item-inner', 100, {left:"-50%", top:"50%"}, {left:"0%", top:"0px"}, '-=100')
                    .fromTo('.c2-deco-03 .deco-item-inner', 100, {left:"-50%", top:"50%"}, {left:"0%", top:"0px"}, '-=100')
                    .fromTo('.c2-deco-08 .deco-item-inner', 100, {left:"-50%", top:"50%"}, {left:"0%", top:"0px"}, '-=100')
                    .fromTo('.c2-deco-06 .deco-item-inner', 100, {left:"-50%", top:"-50%"}, {left:"0%", top:"0px"}, '-=100')
                    .fromTo('.c2-deco-07 .deco-item-inner', 100, {left:"-50%", top:"-25%"}, {left:"0%", top:"0px"}, '-=100')
                });

                gsap.utils.toArray("#chapter2-title .sec-deco img").forEach(function(item, i){
                    var tl = gsap.timeline({
                        scrollTrigger: {
                            trigger: item,
                            start:"top 80%",
                            end:"top center",
                            scrub: 1,
                        }
                    });

                    tl.fromTo(item, 100, {left:"-100%"}, {left:"0%"})
                });

                gsap.utils.toArray(".conver-box-obj").forEach(function(section, i){
                    var tl = gsap.timeline({
                        scrollTrigger: {
                            trigger: section,
                            start:"center center",
                            end:"+=4000",
                            scrub: 1,
                            pinSpacing:true,
                            pin:true,
                        }
                    });

                    tl.fromTo('#head-golay', 300, {opacity:1, scale:1}, {opacity:0.3, scale:1}, '-=300')
                    .fromTo('#head-genta', 300, {opacity:1, scale:1}, {opacity:1, scale:1.2}, '-=300')
                    .to('.script-box-1', 300, {className:"script-box-1 active"}, '-=300')
                    .fromTo('#head-genta', 300, {opacity:1, scale:1.2}, {opacity:0.3, scale:1})
                    .fromTo('#head-golay', 300, {opacity:0.3, scale:1}, {opacity:1, scale:1.2}, '-=300')
                    .to('.script-box-1', 300, {className:"script-box-1"}, '-=300')
                    .to('.script-box-2', 300, {className:"script-box-2 active"}, '-=300')
                    .fromTo('#head-golay', 300, {opacity:1, scale:1.2}, {opacity:0.3, scale:1})
                    .fromTo('#head-genta', 300, {opacity:0.3, scale:1}, {opacity:1, scale:1.2}, '-=300')
                    .to('.script-box-2', 300, {className:"script-box-2"}, '-=300')
                    .to('.script-box-3', 300, {className:"script-box-3 active"}, '-=300')
                    .fromTo('#head-genta', 300, {opacity:1, scale:1.2}, {opacity:0.3, scale:1})
                    .fromTo('#head-golay', 300, {opacity:0.3, scale:1}, {opacity:1, scale:1.2}, '-=300')
                    .to('.script-box-3', 300, {className:"script-box-3"}, '-=300')
                    .to('.script-box-4', 300, {className:"script-box-4 active"}, '-=300')
                    .fromTo('#head-golay', 300, {opacity:1, scale:1.2}, {opacity:0.3, scale:1})
                    .fromTo('#head-genta', 300, {opacity:0.3, scale:1}, {opacity:1, scale:1.2}, '-=300')
                    .to('.script-box-4', 300, {className:"script-box-4"}, '-=300')
                    .to('.script-box-5', 300, {className:"script-box-5 active"}, '-=300')

                });

                gsap.utils.toArray(".sea-box-obj").forEach(function(section, i){
                    var tl = gsap.timeline({
                        scrollTrigger: {
                            trigger: section,
                            start:"90% bottom",
                            end:"+=800",
                            scrub: 1,
                            pinSpacing:true,
                            //pin:true,
                        }
                    });

                    tl.to('.sea-diver', 100, {top:"250px"})
                });

                gsap.utils.toArray(".sea-bottom-bg-inner").forEach(function(target, i){
                    var tl = gsap.timeline({
                        scrollTrigger: {
                            trigger: target,
                            start:"top top",
                            end:"bottom bottom",
                            scrub: 1,
                            pin:".sea-bottom-bg-diver",
                            toggleClass: {targets: target, className: "hello"},
                        }
                    });
                });

                gsap.utils.toArray(".bubble-effect").forEach(function(target, i){
                    var tl = gsap.timeline({
                        scrollTrigger: {
                            trigger: '.sea-bottom-bg-inner',
                            start:"top top",
                            end:"bottom bottom",
                            scrub: 1,
                            pin:target
                        }
                    });
                });

                gsap.utils.toArray(".sea-bottom-bg-fish5").forEach(function(target, i){
                    var tl = gsap.timeline({
                        scrollTrigger: {
                            trigger: target,
                            start:"top bottom",
                            end:"bottom top",
                            scrub: 1,
                        }
                    });

                    tl.fromTo(target, 100, {left:"5%"}, {left:"30%"})
                });

                gsap.utils.toArray(".sea-bottom-bg-bubble-right").forEach(function(target, i){
                    var tl = gsap.timeline({
                        scrollTrigger: {
                            trigger: target,
                            start:"top center",
                            end:"bottom top",
                            scrub: 1,
                        }
                    });

                    tl.fromTo(target, 100, {top:"0%"}, {top:"-5%"})
                });

                gsap.utils.toArray(".sea-bottom-bg-bubble-left").forEach(function(target, i){
                    var tl = gsap.timeline({
                        scrollTrigger: {
                            trigger: target,
                            start:"top center",
                            end:"bottom top",
                            scrub: 1,
                        }
                    });

                    tl.fromTo(target, 100, {top:"20%"}, {top:"15%"})
                });

                gsap.utils.toArray(".sea-bottom-bg-fish6").forEach(function(target, i){
                    var tl = gsap.timeline({
                        scrollTrigger: {
                            trigger: target,
                            start:"top bottom",
                            end:"bottom top",
                            scrub: 1,
                        }
                    });

                    tl.fromTo(target, 100, {right:"-5%"}, {right:"20%"})
                });

                gsap.utils.toArray("#quiz2").forEach(function(section){
                    var tl = gsap.timeline({
                        scrollTrigger: {
                            trigger: section,
                            start:"top top",
                            end:"bottom bottom",
                            scrub: 1,
                            pinSpacing:false,
                            pin:$('#quiz2').find('.quiz-content'),
                        }
                    });

                    var tl1 = gsap.timeline({
                        scrollTrigger: {
                            trigger: section,
                            start:"top bottom",
                            end:"top center",
                            scrub: 1,
                        }
                    });
                    tl1.fromTo('.sea-bottom-bg-diver',100, {opacity:1}, {opacity:0})

                    var tl2 = gsap.timeline({
                        scrollTrigger: {
                            trigger: section,
                            start:"top bottom",
                            end:"bottom bottom",
                            scrub: 1,
                        }
                    });

                    tl2.to('#quiz2 .quiz2-bg-back', 80, {top:"-200px"});

                    var tl3 = gsap.timeline({
                        scrollTrigger: {
                            trigger: section,
                            start:"top bottom",
                            end:"bottom bottom",
                            scrub: 1,
                        }
                    });

                    tl3.fromTo('.quiz-bg-fish01', {left:"-10%"}, {left:"20%"})

                    var tl4 = gsap.timeline({
                        scrollTrigger: {
                            trigger: section,
                            start:"top bottom",
                            end:"bottom center",
                            scrub: 1,
                        }
                    });

                    tl4.fromTo('.quiz-bg-fish02', {right:"-10%"}, {right:"80%"})

                    var tl5 = gsap.timeline({
                        scrollTrigger: {
                            trigger: section,
                            start:"top bottom",
                            end:"bottom top",
                            scrub: 1,
                        }
                    });

                    tl5.fromTo('.quiz-bg-fish03', {right:"30%"}, {right:"-10%"})

                    var tl6 = gsap.timeline({
                        scrollTrigger: {
                            trigger: section,
                            start:"top bottom",
                            end:"bottom top",
                            scrub: 1,
                        }
                    });

                    tl6.fromTo('.quiz-bg-fish04', {right:"40%"}, {right:"-10%"})

                    tl.fromTo('#quiz2 .quiz-bg-inner', 100, {bottom:"-20%"}, {bottom:"10%"})
                    .to('#quiz2 .quiz-bg-inner', 100, {scale:1.2})
                    .to('#quiz2 .quiz-bg-left', 100, {left:"-10%"}, '-=100')
                    .to('#quiz2 .quiz-bg-right', 100, {right:"-10%"}, '-=100')
                    .fromTo('.sea-bottom-bg .bubble-effect',100, {opacity:1}, {opacity:0}, '-=100')
                    .fromTo('#quiz2 .quiz-box-octa', 200, {width:"0px", height:"0px", top:"45%"}, {
                        width:function(){
                            var ww = $(window).width();
                            if(ww < 768) {
                                return $(window).height() * 1.2
                            }else {
                                return $(window).width() * 1.6
                            }
                        }, height:function(){
                            var ww = $(window).width();
                            if(ww < 768) {
                                return $(window).height() * 1.2
                            }else {
                                return $(window).width() * 1.6
                            }
                        }, top:"50%"}, '-=100')
                    .fromTo('#quiz2 .quiz-box', 200, {scale:0.2}, {scale:1}, '-=200')
                    .to('#quiz2 .quiz-inner', 50, {className:"quiz-inner active"}, '-=100')
                    .to('#quiz2 .quiz-box-octa', 50, {className:"quiz-box-octa octa-to"}, "-=30")
                    .to('#quiz2 .quiz-box', 100, {scale:1})
                });

                gsap.utils.toArray(".f_mob_diver").forEach(function(item, i){
                    var tl = gsap.timeline({
                        scrollTrigger: {
                            trigger: item,
                            start:"top bottom",
                            end:"bottom top",
                            scrub: 1,
                        }
                    });

                    tl.fromTo(item, 100, {left:"-100%"}, {left:"0%"})
                });
            }

            function sectionChapter3(){
                gsap.utils.toArray("#wont-work").forEach(function(chapter){
                    var tl = gsap.timeline({
                        scrollTrigger: {
                            trigger: chapter,
                            start:"top bottom",
                            end: "bottom top",
                            onEnter:function(){
                                MS.checkNavActive('wont-work');
                                mainNav.slideTo(2, 1000);
                            },
                            onLeaveBack:function(){
                                MS.checkNavActive('phone-call');
                                mainNav.slideTo(1, 1000);
                            }
                        }
                    });
                });

                gsap.utils.toArray("#wont-work .chapter-kv").forEach(function(kv){
                    var tl = gsap.timeline({
                        scrollTrigger: {
                            trigger: kv,
                            start:"top 10%",
                            end: "bottom top",
                            onEnter:function(){
                                var video = $('#chap3opeing').get(0);
                                video.play();
                                video.onended = function(e) {
                                    $('#chapter3-title').addClass('hello');
                                    $('#wont-work .kv-bg').addClass('video-end');
                                    setTimeout(function(){
                                        $('#chapter3-title').removeClass('hello');
                                    }, 3000);

                                    setTimeout(function(){
                                        $('#help-genta').addClass('hello');
                                    }, 4000);
                                }

                            },
                            onLeaveBack:function(){
                                $('#chapter3-title').removeClass('hello');
                                $('#wont-work .kv-bg').removeClass('video-end');
                                $('#help-genta').removeClass('hello');
                            }
                        }
                    });
                });

                gsap.utils.toArray(".f_bracelet").forEach(function(item, i){
                    var tl = gsap.timeline({
                        scrollTrigger: {
                            trigger: item,
                            start:"top center",
                            end:"bottom top",
                            scrub: 1,
                            toggleClass: {targets: item, className: "hello"},
                            onEnter:function(){
                                gsap.to('.num-box-txt01', {
                                    innerText: 154,
                                    snap: {
                                      innerText: 1
                                    },
                                    duration: 2
                                });
                            }
                        }
                    });
                });

                gsap.utils.toArray(".f_calibre").forEach(function(item, i){
                    var tl = gsap.timeline({
                        scrollTrigger: {
                            trigger: item,
                            start:"top bottom",
                            end:"bottom center",
                            scrub: 1,
                            toggleClass: {targets: item, className: "hello"},
                        }
                    });

                    tl.fromTo('.clb-l', 100, {rotation:180, left:"0%"}, {rotation:0, left:"-40%"})
                    .fromTo('.clb-r', 100, {rotation:-180, right:"0%"}, {rotation:0, right:"-40%"}, '-=100')
                    .fromTo('.calibre-txt', 100, {right:"100%"}, {right:"-20%"}, '-=120')
                });

                gsap.utils.toArray("#quiz3").forEach(function(section){
                    var tl = gsap.timeline({
                        scrollTrigger: {
                            trigger: section,
                            start:"top top",
                            end:"bottom bottom",
                            scrub: 1,
                            pinSpacing:false,
                            pin:$('#quiz3').find('.quiz-content'),
                        }
                    });

                    var tl2 = gsap.timeline({
                        scrollTrigger: {
                            trigger: section,
                            start:"top bottom",
                            end:"bottom bottom",
                            scrub: 1,
                        }
                    });

                    tl2.fromTo('#quiz3 .quiz3-bg-back', 100, {bottom:"-10%"}, {bottom:"0%"});

                    tl.fromTo('#quiz3 .quiz-bg-inner', 100, {top:"30%"}, {top:"0%"})
                    .to('#quiz3 .quiz-bg-inner', 100, {scale:1.4})
                    .fromTo('#quiz3 .quiz-box-octa', 200, {width:"0px", height:"0px", top:"50%"}, {
                        width:function(){
                            var ww = $(window).width();
                            if(ww < 768) {
                                return $(window).height() * 1.2
                            }else {
                                return $(window).width() * 1.5
                            }
                        }, height:function(){
                            var ww = $(window).width();
                            if(ww < 768) {
                                return $(window).height() * 1.2
                            }else {
                                return $(window).width() * 1.5
                            }
                        }, top:"50%"}, '-=100')
                    .fromTo('#quiz3 .quiz-box', 200, {scale:0.2}, {scale:1}, '-=200')
                    .to('#quiz3 .quiz-inner', 50, {className:"quiz-inner active"}, '-=100')
                    .to('#quiz3 .quiz-box-octa', 50, {className:"quiz-box-octa octa-to"}, "-=30")
                    .to('#quiz3 .quiz-box', 100, {scale:1})
                });

                var q3option =  new Swiper(".quiz-option3", {
                    slidesPerView: 2,
                    loop:true,
                    speed:1500,
                    centeredSlides: true,
                    navigation: {
                        nextEl: "#quiz3 .btn-quiz-next",
                        prevEl: "#quiz3 .btn-quiz-prev",
                    },
                });

                q3option.on('beforeTransitionStart', function(){
                    MS.quiz3.selected = this.realIndex;
                });

            }

            function sectionChapter3Mob(){
                gsap.utils.toArray("#wont-work").forEach(function(chapter){
                    var tl = gsap.timeline({
                        scrollTrigger: {
                            trigger: chapter,
                            start:"top bottom",
                            end: "bottom top",
                            onEnter:function(){
                                MS.checkNavActive('wont-work');
                                mainNav.slideTo(2, 1000);
                            },
                            onLeaveBack:function(){
                                MS.checkNavActive('phone-call');
                                mainNav.slideTo(1, 1000)
                            }
                        }
                    });
                });

                gsap.utils.toArray("#wont-work .chapter-kv").forEach(function(kv){
                    var tl = gsap.timeline({
                        scrollTrigger: {
                            trigger: kv,
                            start:"top 20%",
                            end: "bottom top",
                            onEnter:function(){
                                var video = $('#chap3opeingMob').get(0);
                                video.play();
                                video.onended = function(e) {
                                    console.log('finished!!!')
                                    $('#chapter3-title').addClass('hello');
                                    $('#wont-work .kv-bg').addClass('video-end');
                                    setTimeout(function(){
                                        $('#chapter3-title').removeClass('hello');
                                    }, 3000);

                                    setTimeout(function(){
                                        $('#help-genta').addClass('hello');
                                    }, 4000);
                                }
                            },
                            onLeaveBack:function(){
                                $('#chapter3-title').removeClass('hello');
                                $('#wont-work .kv-bg').removeClass('video-end');
                                $('#help-genta').removeClass('hello');
                            }
                        }
                    });
                });

                gsap.utils.toArray(".f_bracelet").forEach(function(item, i){
                    var tl = gsap.timeline({
                        scrollTrigger: {
                            trigger: item,
                            start:"top center",
                            end:"bottom top",
                            scrub: 1,
                            toggleClass: {targets: item, className: "hello"},
                            onEnter:function(){
                                gsap.to('.num-box-txt01', {
                                    innerText: 154,
                                    snap: {
                                      innerText: 1
                                    },
                                    duration: 2
                                });
                            }
                        }
                    });
                });

                gsap.utils.toArray(".f_calibre").forEach(function(item, i){
                    var tl = gsap.timeline({
                        scrollTrigger: {
                            trigger: item,
                            start:"top bottom",
                            end:"bottom center",
                            scrub: 1,
                            toggleClass: {targets: item, className: "hello"},
                        }
                    });

                    tl.fromTo('.clb-l', 100, {rotation:180, left:"0%"}, {rotation:0, left:"-40%"})
                    .fromTo('.clb-r', 100, {rotation:-180, right:"0%"}, {rotation:0, right:"-40%"}, '-=100')
                    .fromTo('.calibre-txt', 100, {right:"100%"}, {right:"-20%"}, '-=120')
                });

                gsap.utils.toArray("#quiz3").forEach(function(section){
                    var tl = gsap.timeline({
                        scrollTrigger: {
                            trigger: section,
                            start:"top top",
                            end:"bottom bottom",
                            scrub: 1,
                            pinSpacing:false,
                            pin:$('#quiz3').find('.quiz-content'),
                        }
                    });

                    var tl2 = gsap.timeline({
                        scrollTrigger: {
                            trigger: section,
                            start:"top bottom",
                            end:"bottom bottom",
                            scrub: 1,
                        }
                    });

                    tl2.to('#quiz3 .quiz3-bg-back', 100, {top:"-600px"});

                    tl.fromTo('#quiz3 .quiz-bg-inner', 100, {top:"30%"}, {top:"0%"})
                    .to('#quiz3 .quiz-bg-inner', 100, {scale:1.4})
                    .fromTo('#quiz3 .quiz-box-octa', 200, {width:"0px", height:"0px", top:"50%"}, {
                        width:function(){
                            var ww = $(window).width();
                            if(ww < 768) {
                                return $(window).height() * 1.2
                            }else {
                                return $(window).width() * 1.5
                            }
                        }, height:function(){
                            var ww = $(window).width();
                            if(ww < 768) {
                                return $(window).height() * 1.2
                            }else {
                                return $(window).width() * 1.5
                            }
                        }, top:"50%"}, '-=100')
                    .fromTo('#quiz3 .quiz-box', 200, {scale:0.2}, {scale:1}, '-=200')
                    .to('#quiz3 .quiz-inner', 50, {className:"quiz-inner active"}, '-=100')
                    .to('#quiz3 .quiz-box-octa', 50, {className:"quiz-box-octa octa-to"}, "-=30")
                    .to('#quiz3 .quiz-box', 100, {scale:1})
                });

                var q3option =  new Swiper(".quiz-option3", {
                    slidesPerView: 2,
                    loop:true,
                    speed:1500,
                    centeredSlides: true,
                    navigation: {
                        nextEl: "#quiz3 .btn-quiz-next",
                        prevEl: "#quiz3 .btn-quiz-prev",
                    },
                });

                q3option.on('beforeTransitionStart', function(){
                    MS.quiz3.selected = this.realIndex;
                });

            }


            function sectionChapter4(){
                gsap.utils.toArray("#to-icon").forEach(function(chapter){
                    var tl = gsap.timeline({
                        scrollTrigger: {
                            trigger: chapter,
                            start:"top bottom",
                            end: "bottom top",
                            onEnter:function(){
                                MS.checkNavActive('to-icon');
                                mainNav.slideTo(3, 1000);
                            },
                            onLeaveBack:function(){
                                MS.checkNavActive('wont-work');
                                mainNav.slideTo(2, 1000)
                            }
                        }
                    });
                });

                gsap.utils.toArray("#visual8").forEach(function(area, i){
                    var imgA = area.querySelector('.img_a'),
                        imgB = area.querySelector('.img_b');

                    let tl = gsap.timeline({
                        scrollTrigger: {
                            trigger: area,
                            start: "top center",
                            end: "bottom top",
                            scrub: 1,
                        }
                    });

                    tl.fromTo(imgA, 100, {yPercent:0}, {yPercent:-5})
                    .fromTo(imgB, 100, {yPercent:10}, {yPercent:-10}, '-=100')
                });

                gsap.utils.toArray(".f_photos").forEach(function(item, i){
                    var tl = gsap.timeline({
                        scrollTrigger: {
                            trigger: item,
                            start:"top bottom",
                            end:"bottom 70%",
                            scrub: 1,
                            toggleClass: {targets: item, className: "hello"},
                        }
                    });

                    tl.fromTo('.photoi1 img', 100, {top:"100vh"}, {top:"0vh"})
                    .fromTo('.photoi2 img', 100, {top:"100vh"}, {top:"0vh"}, '-=50')
                    .fromTo('.photoi3 img', 100, {top:"100vh"}, {top:"0vh"}, '-=50')

                });

                gsap.utils.toArray(".img-navy").forEach(function(item, i){
                    var tl = gsap.timeline({
                        scrollTrigger: {
                            trigger: item,
                            start:"top bottom",
                            end:"bottom 80%",
                            scrub: 1,
                            toggleClass: {targets: item, className: "hello"},
                        }
                    });

                    tl.fromTo(item, 100, {left:"-100%"}, {left:"0%"})
                });
            }

            var quiz2Drag = {
                set:function(){
                    var seek = $('#quiz2 .seekbar');
                    var mousedown = false;

                    seek.on('mousedown', function(e){
                        seek.focus();
                        mousedown = true;
                        var p = (e.clientX - seek.offset().left)/seek.innerWidth();
                        quiz2Drag.checkResult(p);
                    });

                    seek.on('mouseup', function(e){
                        if(!mousedown) return;
                        mousedown = false;
                        var p = (e.clientX - seek.offset().left)/seek.innerWidth();
                        quiz2Drag.checkResult(p, 'sticky');
                    });

                    seek.on('mouseleave', function(e){
                        if(!mousedown) return;
                        mousedown = false;
                        var p = (e.clientX - seek.offset().left)/seek.innerWidth();
                        quiz2Drag.checkResult(p, 'sticky');
                    });

                    seek.on('mousemove', function(e){
                        if(!mousedown) return;
                        var p = (e.clientX - seek.offset().left)/seek.innerWidth();
                        quiz2Drag.checkResult(p);
                    });

                    seek.on('touchmove', function(e){
                        e.preventDefault();
                        var p = (e.originalEvent.touches[0].clientX - seek.offset().left)/seek.innerWidth();
                        quiz2Drag.checkResult(p);
                    });

                    seek.on('touchend touchcancel', function(e){
                        e.preventDefault();
                        var p = (e.originalEvent.changedTouches[0].clientX - seek.offset().left)/seek.innerWidth();
                        quiz2Drag.checkResult(p, 'sticky');
                    });
                },
                checkResult:function(pos, type){
                    var point,
                        tt = (pos * 100).toFixed(1);
                    if(tt> 100) {
                        point = 100;
                    }else if(tt < 0) {
                        point = 0;
                    }else {
                        point = tt;
                    }
                    var fill    = $('#quiz2 .fill'),
                        wrp     = $('#quiz2 .seekbar'),
                        ptn    = $('#quiz2 .watch-ptn-area'),
                        handler = $('#quiz2 .handle');

                    fill.css('width',  point + '%');
                    ptn.css('width',  point + '%');
                    $('#quiz2 .handle').css('left',  point + '%');


                    if(type == 'sticky') {
                        if(point < 17 && point > -1) {
                            fill.css('width',  '0%');
                            handler.animate({
                                'left': '0%'
                            }, 500);

                            $('.watch-ptn-area').animate({
                                'width': '0%'
                            }, 500);
                            wrp.addClass('pointer-start')
                            MS.quiz2.selected = 0;
                        }

                        if(point < 50 && point > 17) {
                            fill.css('width',  '33.33%');
                            handler.animate({
                                'left': '33.33%'
                            }, 500);
                            $('.watch-ptn-area').animate({
                                'width': '33.33%'
                            }, 500);
                            wrp.attr('class', 'seekbar');
                            MS.quiz2.selected = 1;

                        }

                        if(point < 83 && point > 50) {
                            fill.css('width',  '66.66%');
                            handler.animate({
                                'left': '66.66%'
                            }, 500);
                            $('.watch-ptn-area').animate({
                                'width': '66.66%'
                            }, 500);
                            wrp.attr('class', 'seekbar');
                            MS.quiz2.selected = 2;
                        }

                        if(point < 101 && point > 83) {
                            fill.css('width',  '100%');
                            handler.animate({
                                'left': '100%'
                            }, 500);
                            $('.watch-ptn-area').animate({
                                'width': '100%'
                            }, 500);
                            wrp.attr('class', 'seekbar');
                            MS.quiz2.selected = 3;
                        }
                    }
                    return
                }
            }
            quiz2Drag.set();

            var chapter3Drag = {
                set:function(){
                    var seek = $('#help-genta .seekbar');
                    var mousedown = false;

                    seek.on('mousedown', function(e){
                        seek.focus();
                        mousedown = true;
                        var p = (e.pageY - seek.offset().top)/seek.height();
                        chapter3Drag.checkResult(p);
                    });

                    seek.on('mouseup', function(e){
                        if(!mousedown) return;
                        mousedown = false;
                        var p = (e.pageY - seek.offset().top)/seek.height();
                        chapter3Drag.checkResult(p, 'sticky');
                    });

                    seek.on('mouseleave', function(e){
                        if(!mousedown) return;
                        mousedown = false;
                        var p = (e.pageY - seek.offset().top)/seek.height();
                        chapter3Drag.checkResult(p, 'sticky');
                    });

                    seek.on('mousemove', function(e){
                        if(!mousedown) return;
                        var p = (e.pageY - seek.offset().top)/seek.height();
                        chapter3Drag.checkResult(p);
                    });
                },
                checkResult:function(pos, type){
                    var point,
                        tt = pos * 100;

                        if(tt> 100) {
                            point = 100;
                        }else if(tt < 0) {
                            point = 0;
                        }else {
                            point = tt;
                        }

                    var fill    = $('#help-genta .fill'),
                        wrp     = $('#help-genta .seekbar'),
                        ptn    = $('#help-genta .watch-ptn-area'),
                        handler = $('#help-genta .handle');

                    fill.css('height',  (100 - point) + '%');
                    ptn.css('height',  point + '%');
                    wrp.attr('class', 'seekbar');
                    $('#help-genta .handle').css('top',  point + '%');
                    if(type == 'sticky') {
                        if(point < 101 && point > 10) {
                            fill.animate({
                                "height":"0%"
                            }, 300)
                            handler.animate({
                                "top":"100%"
                            }, 300)
                            ptn.animate({
                                "height":"0%"
                            }, 300)
                            wrp.addClass('pointer-start')
                        }

                        if(point < 10 && point > -1) {
                            fill.animate({
                                "height":"100%"
                            }, 300)
                            handler.animate({
                                "top":"0%"
                            }, 300)
                            ptn.animate({
                                "height":"100%"
                            }, 300)
                            wrp.attr('class', 'seekbar pointer-end');
                            $('.before-drag').removeClass('active');
                            $('.after-drag').addClass('active');
                        }
                    }
                    return
                }
            }
            chapter3Drag.set();

            // Banner
            function sectionBanners(device){
                var devicePath;
                if(device == 'desktop') {
                    devicePath = 'banner-desktop';
                }
                if(device == 'mobile') {
                    devicePath = 'banner-mobile';
                }
                gsap.utils.toArray(".banner").forEach(function(banner, i){
                    var tl = gsap.timeline({
                        scrollTrigger: {
                            trigger: banner,
                            start: "top 80%",
                            onEnter:function(){
                                var bannerWrap = $(banner);
                                var bannerPlace = bannerWrap.find('.banner-inner');
                                var bannerTarget = bannerPlace.data(devicePath);
                                if(!bannerWrap.hasClass('placed')) {
                                    var frame = '<iframe src="./images/banner/'+bannerTarget+'/index.html" frameborder="0"></iframe>'
                                    bannerPlace.html(frame);
                                    bannerWrap.addClass('placed');
                                }
                            }
                        }
                    });
                });
            }

             // Desktop Mobile Seperate
             var ww = $(window).width(),
                 wh = $(window).height();

            if(ww > 768){
                size = "desktop"
            }else {
                size = "mobile"
            }

            if(size === "desktop") {
                console.log('desktop');
                sectionIntro();
                sectionTeaser();
                sectionChapter1();
                sectionChapter2();
                sectionChapter3();
                sectionChapter4();
                sectionBanners('desktop');
            }

            if(size === "mobile") {
                console.log('mobile');
                sectionIntro();
                sectionTeaserMob();
                sectionChapter1Mob();
                sectionChapter2Mob();
                sectionChapter3Mob();
                sectionChapter4();
                sectionBanners('mobile');
            }
            sectionSetting();

            function infoResponsive() {
                var ww = $(window).width();
                var wh = $(window).height();
                var newSize = ww > 752 ? "desktop" : "mobile";
                if (newSize != size) {
                    size = newSize;
                    if (newSize === "mobile") {
                        console.log(MS.isMob)
                        if(wh > 900) {
                            window.location.reload();
                        }
                    } else if (newSize === "desktop") {
                        if(wh > 900) {
                            window.location.reload();
                        }
                    }
                }
            }

            if(ww < 752) {
                this.isMob = true;
            }

            $(window).resize(function(){
                infoResponsive();
            });
        },
        checkKvSection:function(){
            var el = $("#kv"),
                top_of_element    = el.offset().top,
                bottom_of_element = el.offset().top + el.outerHeight(),
                bottom_of_screen  = $(window).scrollTop() + $(window).innerHeight(),
                top_of_screen     = $(window).scrollTop();

            if ((bottom_of_screen > top_of_element) && (top_of_screen < bottom_of_element/5)){
                $('.ms-backtotop').addClass('pos-top');
            }else {
            }

            var scaleVal = top_of_screen*0.05;
            var opacityVal = 1-(top_of_screen*0.002);
            if(scaleVal < 100) {
                $('.deco-gradient').css('opacity', opacityVal);
                return false;
            }
        },
        checkLandscape:function(){
            if(window.innerWidth < 1023) {
                if(window.innerHeight > window.innerWidth){
                    this.message.landscape = false;
                }else {
                    this.message.landscape = true;
                }
            }else {
                this.message.landscape = false;
            }
        },
        openWindowAndShare:function(type){
            var u = window.location.origin+ window.location.pathname,
                t = document.title;

            var browserW = $(window).width(),
                isMobile;

            if(browserW < 700) {
                isMobile = true;
            }

            var postTitle = document.title.replace(/ /g, "+"),
                encoded   = encodeURI(postTitle);

            var urls = {
                "fb": 'http://www.facebook.com/sharer.php?u='+encodeURIComponent(u)+'%3Futm_source=facebook%26utm_medium=social_share%26utm_campaign=apro50_multimedia_share&t='+encodeURIComponent(t),
                "tw": "http://twitter.com/intent/tweet?text="+encoded+"&url=" + window.location.origin+ window.location.pathname +'%3Futm_source=tweeter%26utm_medium=social_share%26utm_campaign=apro50_multimedia_share',
                "ln": "http://www.linkedin.com/shareArticle?mini=true&url=" + window.location.origin+ window.location.pathname+'%3F%26utm_source%3Dlinkedin%26utm_medium%3Dsocial_share%26utm_campaign%3Dapro50_multimedia'+'&source=apro50_multimedia_share',
            }

            if(type === "facebook"){
                if(isMobile){
                    window.location.href = urls.fb;
                }else {
                    window.open(urls.fb,'sharer','toolbar=0,status=0,width=626,height=436');
                }
            }

            if(type === "twitter"){
                if(isMobile) {
                    window.location.href = urls.tw;
                }else {
                    window.open(urls.tw,'twitter', 'left=20,top=20,width=500,height=500,toolbar=1,resizable=0');
                }
            }

            if(type === "linkedin"){
                if(isMobile){
                    window.location.href = urls.ln;
                }else {
                    window.open(urls.ln,'linkedin', 'left=20,top=20,width=500,height=500,toolbar=1,resizable=0');
                }
            }

            if(type === "email"){
                window.open("mailto:?subject="+document.title+'&body='+document.title+'%0D%0A'+ window.location.origin+ window.location.pathname+'%3Futm_source=email%26utm_medium=social_share%26utm_campaign=apro50_multimedia_share', 'email', 'left=20,top=20,width=500,height=500,toolbar=1,resizable=0');
            }

            return false;
        },
        openNav:function(){
            var nav = $('.mainmenu');
            nav.toggleClass('active');
            $('.btn-menu').toggleClass('active');

            window.onscroll = function (e) {
                nav.removeClass('active');
                $('.btn-menu').removeClass('active');
            }
        },
        gotoSectionTo:function(target){
            MS.releasehidden();
            MS.releaseCnt();
            MS.setRelaseCount('clear');
            MS.backtotop = true;

            var to, dur;
           if(target == '#content' || target == '#phone-call' || target == '#wont-work' || target == '#to-icon' ) {
                to = $(target).offset().top;
                dur = 0.01;
                $(window).scrollTop($(target).offset().top - 40)
                setTimeout(function(){MS.backtotop = false;}, 1000);
            }else if(target == '#chapter1') {
                var to = $('#standfirst').offset().top - $('.back-time-inner').offset().top;
                dur = 0.01;
                $(window).scrollTop(to)
                setTimeout(function(){MS.backtotop = false;}, 1000);
               /*  gsap.to(window, {
                    scrollTo: { y:to, autoKill: false, ease: "Power3.easeInOut" },
                    duration: dur,
                    onComplete:function(){}
                }); */
            }else {
                to = $(target).offset().top;
                dur = 1.5;
                setTimeout(function(){MS.backtotop = false;}, 2000);
               /*  gsap.to(window, {
                    scrollTo: { y:to, autoKill: false, ease: "Power3.easeInOut" },
                    duration: dur,
                    onComplete:function(){}
                }); */
            }
        },
        pickupphone:function(){
            this.releasehidden();
            this.releaseCnt();
            this.setRelaseCount('clear');

            const scrolling = {
                enabled: true,
                events: "scroll,wheel,touchmove,pointermove".split(","),
                prevent: e => e.preventDefault(),
                disable() {
                    if (scrolling.enabled) {
                    scrolling.enabled = false;
                    window.addEventListener("scroll", gsap.ticker.tick, {passive: true});
                    scrolling.events.forEach((e, i) => (i ? document : window).addEventListener(e, scrolling.prevent, {passive: false}));
                    }
                },
                enable() {
                    if (!scrolling.enabled) {
                        scrolling.enabled = true;
                        window.removeEventListener("scroll", gsap.ticker.tick);
                        scrolling.events.forEach((e, i) => (i ? document : window).removeEventListener(e, scrolling.prevent));
                    }
                }
            };

            var phoneBox = $('.f_phone-obj');
            phoneBox.addClass('phone-active');
            scrolling.disable();
            setTimeout(function(){
                var to = $('#standfirst').offset().top - $('.back-time-inner').offset().top;
                console.log(to);
                $('html, body').animate({
                    scrollTop:to
                }, 8600);
                /* gsap.to(window, {
                    scrollTo: { y:to, autoKill: false, ease: "Power0.easeNone"},
                    duration: 10,
                }); */
            }, 200);
            setTimeout(function(){
                phoneBox.removeClass('phone-active');
            }, 3000);
            setTimeout(function(){
                scrolling.enable();
            }, 8600);
        },
        backtotopfunc:function(){
            this.gotoSectionTo('#content');
        },
        releasehidden:function(){
            gsap.set("body", {overflow: "auto"});
        },
        releaseCnt:function(){
            var txtBox = $('.count-loading');
            txtBox.addClass('deactive');
        },
        setRelaseCount:function(status){
            var txtBox = $('.count-loading');
            MS.releaseCntNum = 3;
            var cnt;
            if(status == 'clear') {
                MS.releaseCntNum = 0;
                MS.touchBlock = false;
                gsap.set("body", {overflow: "auto"});
            }else {
                txtBox.removeClass('deactive');
                cnt = setInterval(cntRelease, 1000);
            }

            function cntRelease(){
                if(MS.releaseCntNum == 0){
                    clearInterval(cnt);
                    MS.releaseCnt();
                    MS.touchBlock = false;
                    gsap.set("body", {overflow: "auto"});
                }else {
                    MS.releaseCntNum -= 1;
                }
            }
        },
        checkAnswerQuiz1:function(){
            var currentA = MS.quiz1.selected,
                correctA = MS.quiz1.answer;
            MS.quiz1.showResult = true;
            if(currentA == correctA) {
                MS.quiz1.resultStatus = true;
                return true
            }else {
                MS.quiz1.resultStatus = false;
                return false
            }
        },
        checkAnswerQuiz2:function(){
            var currentA = MS.quiz2.selected,
                correctA = MS.quiz2.answer;
            MS.quiz2.showResult = true;
            if(currentA == correctA) {
                MS.quiz2.resultStatus = true;
                return true
            }else {
                MS.quiz2.resultStatus = false;
                return false
            }
        },
        checkAnswerQuiz3:function(){
            var currentA = MS.quiz3.selected,
                correctA = MS.quiz3.answer;
            MS.quiz3.showResult = true;
            if(currentA == correctA) {
                MS.quiz3.resultStatus = true;
                return true
            }else {
                console.log('incorrect')
                MS.quiz3.resultStatus = false;
                return false
            }
        },
        checkNavActive:function(target){
            MS.chapter = target;
        },
        quiz2cnt:function(status){
            var min = 0;
            var max = 3;

            var fill    = $('#quiz2 .fill'),
                wrp     = $('#quiz2 .seekbar'),
                handler = $('#quiz2 .handle');

            if(status == 'plus') {
                if(MS.quiz2.selected < 3) {
                    MS.quiz2.selected+=1;
                }
            }
            if(status == 'mius') {
                if(MS.quiz2.selected > 0) {
                    MS.quiz2.selected-=1;
                }
            }

            setTimeout(function(){
                if(MS.quiz2.selected == 0) {
                    fill.css('width',  '0%');
                    handler.animate({
                        'left': '0%'
                    }, 500);

                    $('.watch-ptn-area').animate({
                        'width': '0%'
                    }, 500);
                    wrp.addClass('pointer-start')
                }

                if(MS.quiz2.selected == 1) {
                    fill.css('width',  '33.33%');
                    handler.animate({
                        'left': '33.33%'
                    }, 500);
                    $('.watch-ptn-area').animate({
                        'width': '33.33%'
                    }, 500);
                    wrp.attr('class', 'seekbar');
                }

                if(MS.quiz2.selected == 2) {
                    fill.css('width',  '66.66%');
                    handler.animate({
                        'left': '66.66%'
                    }, 500);
                    $('.watch-ptn-area').animate({
                        'width': '66.66%'
                    }, 500);
                    wrp.attr('class', 'seekbar');
                }

                if(MS.quiz2.selected == 3) {
                    fill.css('width',  '100%');
                    handler.animate({
                        'left': '100%'
                    }, 500);
                    $('.watch-ptn-area').animate({
                        'width': '100%'
                    }, 500);
                    wrp.attr('class', 'seekbar');
                }
            }, 0);
        },
        visual9:function(){
            $('.f_rotor').toggleClass('active');
        },
        activeMagagine:function(){
            $('#to-icon .chapter-kv').addClass('active');
        },
        activeChapter3MobKV:function(){
            var fill    = $('#help-genta .fill'),
                wrp     = $('#help-genta .seekbar'),
                ptn    = $('#help-genta .watch-ptn-area'),
                handler = $('#help-genta .handle');

                fill.animate({
                    "height":"100%"
                }, 1000)
                handler.animate({
                    "top":"0%"
                }, 1000)
                ptn.animate({
                    "height":"100%"
                }, 1000)
                wrp.attr('class', 'seekbar pointer-end');
                $('.before-drag').removeClass('active');
                $('.after-drag').addClass('active');
        }
    }
});