
var articleList = [{
    episode: 1,
    video: "zUs3nkN_QAk",
    series:[{
        article: [{
            link: "https://multimedia.scmp.com/news/hong-kong/article/3180749/subdivided-units-part1/index.html?module=series_page&pgtype=series&campagin=Life%20in%20Hong%20Kong%E2%80%99s%20worst%20living%20spaces:%20from%20cage%20homes%20to%20subdivided%20flats",
            title: "PART 1",
            desc: "‘Like a caged animal’: why Hongkongers in city’s notorious subdivided flats say they have no choice"
        }, {

            link: "https://multimedia.scmp.com/news/hong-kong/article/3180896/subdivided-units-part2/index.html?module=series_page&pgtype=series&campagin=Life%20in%20Hong%20Kong%E2%80%99s%20worst%20living%20spaces:%20from%20cage%20homes%20to%20subdivided%20flats",
            title: "PART 2",
            desc: "‘This is not a home’: depression, cockroaches, rats and shame add up to misery for Hongkongers in subdivided flats"
        }, {

            link: "https://multimedia.scmp.com/news/hong-kong/article/3181013/subdivided-units-part3/index.html?module=series_page&pgtype=series&campagin=Life%20in%20Hong%20Kong%E2%80%99s%20worst%20living%20spaces:%20from%20cage%20homes%20to%20subdivided%20flats",
            title: "PART 3",
            desc: "Can Hong Kong deliver on 2049 target to wipe out subdivided flats and ‘cage homes’? Resident says ‘I will probably die in one of them’"
        }, {

            link: "https://multimedia.scmp.com/infographics/news/hong-kong/article/3180601/subdivided-flats/index.html",
            title: "INFOGRAPHIC",
            desc: "Life in Hong Kong’s shoebox housing"
        }]
    }],
    editor: [{
        id: "fiona_sun",
        name: "Fiona Sun",
        title: "Reporter, Hong Kong desk",
        article: [{
            link: "https://www.scmp.com/news/hong-kong/society/article/3185302/young-poor-and-stuck-what-can-hong-kong-do-help-those",
            title: "Hong Kong / Society",
            desc: "Young, poor and stuck: what can Hong Kong do to help those trapped in cycle of poverty?"
        }, {

            link: "https://www.scmp.com/news/hong-kong/society/article/3185194/poor-digitally-illiterate-elderly-hongkongers-face",
            title: "Hong Kong / Society",
            desc: "Poor, digitally illiterate elderly Hongkongers to face difficulties using new health code system for identifying coronavirus cases: concern groups"
        }, {

            link: "https://www.scmp.com/news/hong-kong/society/article/3182940/hongkongers-all-drawn-city-different-reasons-they-call-it",
            title: "Hong Kong / Society",
            desc: "Hongkongers all: drawn to the city for different reasons, they call it home"
        }]
    }, {
        id: "emily_tsang",
        name: "Emily Tsang",
        title: "News Editor, Hong Kong desk",
        article: [{

            link: "https://www.scmp.com/news/hong-kong/society/article/3183056/canto-pop-comeback-hong-kongs-beloved-brand-music-returns",
            title: "Hong Kong / Society",
            desc: "The Canto-pop comeback: Hong Kong’s beloved brand of music returns with a bang"
        },{

            link: "https://www.scmp.com/yp/discover/entertainment/music/article/3182126/shape-home-canto-pop-singer-yoyo-sham-how-her-time",
            title: "Young Post",
            desc: "Shape of home: Canto-pop singer Yoyo Sham on how her time away from Hong Kong inspired her latest album, concert series"
        },{

            link: "https://www.scmp.com/news/hong-kong/article/3160744/university-hong-kong-covers-pillar-shame-sculpture-marking-tiananmen",
            title: "Hong Kong / Politics",
            desc: "University of Hong Kong removes Pillar of Shame sculpture marking Tiananmen Square crackdown in middle of night"
        }]
    }, {
        id: "zuraidah_ibrahim",
        name: "Zuraidah Ibrahim",
        title: "Executive Managing Director, Hong Kong & Intl. desk lead",
        article: [{

            link: "https://www.scmp.com/news/hong-kong/society/article/3182393/covid-surge-cabinet-line-and-handover-anniversary-all-you",
            title: "Newsletter / Hong Kong Update",
            desc: "Hong Kong's Covid surge, cabinet line-up and handover anniversary"
        },{

            link: "https://www.scmp.com/week-asia/opinion/article/3134413/hong-kong-politics-post-national-security-law-why-singapores",
            title: "This Week in Asia / Opinion",
            desc: "Hong Kong politics post-national security law: why Singapore’s Barisan Sosialis could hold lessons for city’s opposition"
        },{

            link: "https://www.scmp.com/video/hong-kong/3088232/rebel-city-scmp-journalists-reflect-year-covering-hong-kongs-civil-unrest",
            title: "Hong Kong / Politics",
            desc: "Rebel City: SCMP journalists reflect on a year of covering Hong Kong’s civil unrest"
        }]
    }]
}]

window.addEventListener("keydown", function(e) {
    if(["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].indexOf(e.code) > -1) {
        if (e.cancelable) e.preventDefault();
    }
}, false);

var SCMP = new Vue({
    el: '#scmp-app',
    data: {
        isIE:false,
        isMob:false,
        isSlide:true,
        isShare:false,
        ww:0,
        wh:0,
        sectionNav:false,
        backtotop:false,
        articles:articleList,
    },
    created:function(){
        this.getWindowSize();
    },
    mounted:function(){
        this.placeVideo(this.articles);
        this.setScrollAni();

        var lastScrollTop = 0;
        $(window).scroll(function(event) {
            var el = $("#kv"),
                top_of_element    = el.offset().top,
                bottom_of_element = el.offset().top + el.outerHeight(),
                bottom_of_screen  = $(window).scrollTop() + $(window).innerHeight(),
                top_of_screen     = $(window).scrollTop();

            if ((bottom_of_screen > top_of_element) && (top_of_screen < bottom_of_element/2)){
                $('.scmp-backtotop').addClass('pos-top');
                $('#kv').removeClass('ani-pause');
            }else {
                $('#kv').addClass('ani-pause');
            }
            //var blurVal = top_of_screen*0.006;
            var blurVal = top_of_screen*0.010;
            if(blurVal < 5) {
                $('.kv-bg').css('filter', 'blur('+blurVal+'px)');
                return false;
            }

            var st = $(this).scrollTop();
            if (st > lastScrollTop){
                $('.scmp-backtotop').addClass('pos-top');
            } else {
                $('.scmp-backtotop').removeClass('pos-top');
            }
            lastScrollTop = st;
        });

        /* $(window).resize(function(){
            ScrollTrigger.refresh();
            SCMP.getWindowSize([$(window).width(), $(window).height()]);
        }); */
    },
    watch:{
        isMob:function(val){
            console.log(val)
        },
    },
    computed:{
    },
    methods:{
        setScrollAni:function(){

            var morethanTitle, morethanDesc, morethanBg, videoandarticle;
            morethanTitle = new Swiper(".kewords", {
                direction: "vertical",
                allowTouchMove: false,
                simulateTouch:false,
                on:{
                    init:function(){
                        $('.title-first, .morethan-desc, .morethan-title-logo').addClass('active');
                        setTimeout(function(){
                            var toW = $('.kewords .swiper-slide-active').width();
                            $('.kewords').css('width', toW+'px');
                        }, 1500);
                    }
                }
            });

            morethanDesc = new Swiper(".morethandesc", {
                allowTouchMove: false,
                simulateTouch:false,
                effect: "fade",
                mousewheel: false,
            });

            morethanBg = new Swiper(".morethanbg", {
                allowTouchMove: false,
                simulateTouch:false,
                effect: "fade",
                speed:3000,
                mousewheel: false,
            });

            videoandarticle = new Swiper(".videoarticle", {
                allowTouchMove: false,
                mousewheel: false,
            })

            morethanTitle.on('slideChangeTransitionStart', function(){
                var toW = $('.kewords .swiper-slide-active').width();
                $('.kewords').css('width', toW+'px')
            });

            setTimeout(function(){
                var timelineBar = gsap.timeline({
                    scrollTrigger: {
                        trigger: "body",
                        scrub: 0.3,
                        start: "top top",
                        end: "bottom bottom",
                    }
                });

                timelineBar.to('#progress span', { width: '100%', ease: 'none' }, 0)
                .to('#progress', { duration: 0.01, opacity: 1, ease: 'none' }, 0);
            }, 500)

            function videoPlay(status){
                var url = $('.video-holder[data-video=1]').find('iframe').attr('src');
                var playUrl;
                if(status == 'play') {
                    playUrl = url.replace('autoplay=0', 'autoplay=1');
                }
                if(status == 'stop'){
                    playUrl = url.replace('autoplay=1', 'autoplay=0');
                }
                $('.video-holder[data-video="1"]').find('iframe').attr('src', playUrl);
            }

            const sections = document.querySelectorAll(".panel");
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
                if (scrolling.enabled && document.readyState === 'complete') {
                    if(!SCMP.backtotop) {
                        //scrollCnt++;
                        //cntScrollMove();
                        gsap.set("body", {overflow: "hidden"});
                        scrolling.disable();

                       /*  $('html, body').animate({
                            scrollTop:$(section).offset().top
                        }, 1000, function(){
                            scrolling.enable();
                            gsap.set("body", {overflow: "auto"});
                        }); */

                        gsap.to(window, {
                            scrollTo: {y: section, autoKill: false},
                            duration: 1,
                            onComplete:function(){
                                setTimeout(function(){
                                    scrolling.enable();
                                    gsap.set("body", {overflow: "auto"});
                                }, 1000);
                            },
                        });
                        anim && anim.restart();
                    }
                }
            }

            // gsap.utils.toArray(".bg-item").forEach(function(item, i){
            //     gsap.to(item, {opacity:0, scale:1, duration:0.5});
            // });

            gsap.utils.toArray("section").forEach(function(section, i){
                if($(section).find('.panel').length > 0) {
                    gsap.timeline({
                        scrollTrigger: {
                            trigger: section,
                            start: "top bottom",
                            end: "bottom top",
                            onEnter:function(){
                                scrolling.enable();
                                morethanTitle.slideTo(i, 1000);
                                morethanDesc.slideTo(i, 1000);
                                $('.bg-item').removeClass('active');
                                $('.bg-item:nth-child('+(i+1)+')').addClass('active');
                                goToSection(section);
                            },
                            onEnterBack:function(){
                                morethanTitle.slideTo(i, 1000);
                                morethanDesc.slideTo(i, 1000);
                                $('.bg-item').removeClass('active');
                                $('.bg-item:nth-child('+(i+1)+')').addClass('active');
                                goToSection(section);
                            },
                        }
                    });

                }
            });

            gsap.utils.toArray("#videos").forEach(function(section){
                gsap.timeline({
                    scrollTrigger: {
                        trigger: section,
                        start:"top bottom",
                        end: "bottom top",
                        onEnter:function(){
                            $('.main-message').addClass('disable');
                            $('.morethan-bg').addClass('disable');
                            $('#scmp-app').addClass('show-logo');
                            videoPlay('play');
                            goToSection('.area-conntent-btm');
                        },
                        onLeaveBack:function(){
                            $('.main-message').removeClass('disable');
                            $('.morethan-bg').removeClass('disable')
                            $('#scmp-app').removeClass('show-logo');
                        }
                    }
                });
            });

            gsap.utils.toArray(".morethan-bg").forEach(function(item){
                gsap.timeline({
                    scrollTrigger: {
                        trigger: "#scmp-app",
                        start:"top top",
                        end: "bottom bottom",
                        pin:'.morethan-bg-inner',
                    }
                });
            });
            

            // Desktop Mobile Seperate
            var size = this.ww > 752 ? "desktop" : "mobile";
            this.ww < 752 ? this.isMob = true : this.isMob = false;

            var timer = null;
            window.addEventListener('scroll', function() {
                if(timer !== null) {
                    clearTimeout(timer);
                    SCMP.moving = true;
                }
                timer = setTimeout(function() {
                    SCMP.moving = false;
                }, 100);
            }, false);

            if(this.isMob === false) {
                console.log('desktop');
            }

            if(this.isMob === true) {
                console.log('mobile');
            }

            function infoResponsive(ww, wh) {
                var newSize = ww > 752 ? "desktop" : "mobile";
                if (newSize != size) {
                    size = newSize;
                    if (newSize === "mobile") {
                        SCMP.isMob = true;
                        if(wh > 900) {
                            window.location.reload();
                        }
                    } else if (newSize === "desktop") {
                        SCMP.isMob = false;
                        if(wh > 900) {
                            window.location.reload();
                        }
                    }
                }
            }

            function isMobile(a) {
                if ($(document).width() < 768) {
                    return true;
                }
                return (
                    /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) ||
                    /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
                        a.substr(0, 4)
                    )
                );
            }

            var globalLayout;
            function responsiveImg() {
                var winWidth = $(window).width(),
                    real_width;

                function checkWidth() {
                    if (isMobile !== null) {
                        real_width = winWidth;
                    } else {
                        real_width = window.outerWidth;
                    }
                    return real_width;
                }
                checkWidth();

                if (real_width < 760) {
                    globalLayout = "mobile";
                } else if (real_width < 1025) {
                    globalLayout = "tablet";
                } else {
                    globalLayout = "desktop";
                }

                $.each($("img"), function () {
                    $(this).attr("src", $(this).attr("data-media-" + globalLayout));
                });
            }

            responsiveImg();
            $(window).resize(function(){
                responsiveImg();
                ScrollTrigger.refresh();
            });

            $('.scmp-backtotop a').on('click', function(e){
                e.preventDefault();
                var target = $(this).attr('href');
                SCMP.backtotop = true;
                    $('html, body').animate({
                        scrollTop:$(target).offset().top
                    }, 1000);

                setTimeout(function(){
                    SCMP.backtotop = false;
                    ScrollTrigger.refresh();
                }, 1000);
            });
            $(window).resize(function(){
                infoResponsive(SCMP.ww, SCMP.wh);
            });
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
                "fb": 'http://www.facebook.com/sharer.php?u='+encodeURIComponent(u)+'%3Futm_source=facebook%26utm_medium=social_share%26utm_campaign=more_than_a_story_share&t='+encodeURIComponent(t),
                "tw": "http://twitter.com/intent/tweet?text="+encoded+"&url=" + window.location.origin+ window.location.pathname +'%3Futm_source=tweeter%26utm_medium=social_share%26utm_campaign=more_than_a_story_share',
                "ln": "http://www.linkedin.com/shareArticle?mini=true&url=" + window.location.origin+ window.location.pathname+'%3F%26utm_source%3Dlinkedin%26utm_medium%3Dsocial_share%26utm_campaign%3Dmore_than_a_story_share'+'&source=more_than_a_story',
            }

            if(type === "facebook"){
                if(isMobile){
                    window.location.href = urls.fb;
                }else {
                    window.open(urls.fb,'sharer','toolbar=0,status=0,width=626,height=436');
                }

                gtag('event', 'Share button/Facebook/Click', {
                    'event_category': 'Share button (More than a story)',
                    'event_label':window.location.href
                });
            }

            if(type === "twitter"){
                if(isMobile) {
                    window.location.href = urls.tw;
                }else {
                    window.open(urls.tw,'twitter', 'left=20,top=20,width=500,height=500,toolbar=1,resizable=0');
                }
                gtag('event', 'Share button/Twitter/Click', {
                    'event_category': 'Share button (More than a story)',
                    'event_label':window.location.href
                });
            }

            if(type === "linkedin"){
                if(isMobile){
                    window.location.href = urls.ln;
                }else {
                    window.open(urls.ln,'linkedin', 'left=20,top=20,width=500,height=500,toolbar=1,resizable=0');
                }
                gtag('event', 'Share button/LinkedIn/Click', {
                    'event_category': 'Share button (More than a story)',
                    'event_label':window.location.href
                });
            }

            if(type === "email"){
                window.open("mailto:?subject="+document.title+'&body='+document.title+'%0D%0A'+ window.location.origin+ window.location.pathname+'%3Futm_source=email%26utm_medium=social_share%26utm_campaign=more_than_a_story', 'email', 'left=20,top=20,width=500,height=500,toolbar=1,resizable=0');
            }

            return false;
        },
        getWindowSize:function(val){
            if(val) {
                this.ww = val[0];
                this.wh = val[1];
            }else {
                this.ww = $(window).width();
                this.wh = $(window).height();
            }
        },
        openShareBtn:function(){
            if(this.isShare === true) {
                this.isShare = false;
            }else {
                this.isShare = true;
            }
        },
        placeVideo:function(list){
            $('.video-holder').each(function(i){
                var vid = new Number($(this).data('video')) - 1;
                var holder = $(this).find('.video-holder-inner');
                var videoframe;
                videoframe = "<iframe type=\"text/html\" src=\"https://www.youtube-nocookie.com/embed/"+list[vid].video+"?autoplay=0&controls=1&mute=1&playsinline=1&rel=0\" frameborder=\"0\" allow=\"autoplay\"></iframe>";
                holder.append(videoframe);
            });
        },
    }
});