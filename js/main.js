window.addEventListener('DOMContentLoaded', function () {



    window.addEventListener('resize',function (e) {

        // location.reload();

    })

    const mockup_video = document.querySelector('#mockup_video');
    const mockup_video07 = document.querySelector('#mockup_video07');
    const mockup_video08_1 = document.querySelector('#mockup_video08_1');
    const mockup_video08_2 = document.querySelector('#mockup_video08_2');
    const mockup_video09_1 = document.querySelector('#mockup_video09_1');
    const mockup_video13_1 = document.querySelector('#mockup_video13_1');
    const mockup_video13_2 = document.querySelector('#mockup_video13_2');
    const mockup_video16_1 = document.querySelector('#mockup_video16_1');
    const mockup_video17_1 = document.querySelector('#mockup_video17_1');
    const mockup_video17_2 = document.querySelector('#mockup_video17_2');
    const mockup_video17_3 = document.querySelector('#mockup_video17_3');
    const mockup_video18 = document.querySelector('#mockup_video18');

    /* scroll event section */
    container.addListener((e) => {

        let scrollTop = container.scrollTop;
        $('.posNum').html(scrollTop)


        if (scrollTop >= 2700) mockup_video.play();
        if (scrollTop >= 8800) mockup_video07.play();
        if (scrollTop >= 10000) mockup_video08_1.play();
        if (scrollTop >= 10000) mockup_video08_2.play();
        if (scrollTop >= 11800) mockup_video09_1.play();
        if (scrollTop >= 16600) mockup_video13_1.play();
        if (scrollTop >= 17300) mockup_video13_2.play();
        if (scrollTop >= 21600) mockup_video16_1.play();
        if (scrollTop >= 23400) mockup_video17_1.play();
        if (scrollTop >= 24600) mockup_video17_2.play();
        if (scrollTop >= 24650) mockup_video17_3.play();
        if (scrollTop >= 26000) mockup_video18.play();






    });


    /* 100vw = innerWidth*/
    /* 100vh = innerHeight*/



    // const video01 = document.querySelector('#video01');
    // const video02 = document.querySelector('#video02');
    // const video03 = document.querySelector('#video03');



    gsap.to('#container', {
        width: innerWidth,
        height: innerHeight,
        scrollTrigger: {
            trigger: "#section01",
            start: "top top",
            end: () => "+=" + 800,
            // pin: true,
            // pinSpace:false,
            // pinSpacing: false,
            scrub: true,
            onEnter: ()=>{

            }
            // markers: true
        }
    });






    gsap.to('.circle_container', {
        scrollTrigger: {
            trigger: "#section01",
            start: "top top",
            end: () => "+=" + 1460,
            // end: () => "+=" + $('#section01').height(),
            // pin: true,
            // pinSpacing: false,
            scrub: true,
            // markers: true
        }
    });





    let sc01 = gsap.timeline();

    ScrollTrigger.create({
        animation: sc01,
        trigger: ".circle_container",
        start: "top top",
        // end: () => "+=" + $('#section01').height() ,
        end: () => "+=" + 1600,
        // pin:true,
        // pinSpacing: false,
        scrub: 1,
        // markers: true
    });

    sc01.to(".circle01",{rotation:360,x:-978},0);
    sc01.to(".circle02",{rotation:-360,x:-978},0.01);
    sc01.to(".circle03",{rotation:360,x:-978},0.02);
    sc01.to(".circle04",{rotation:-360,x:-978},0.03);




    let sc01_2 = gsap.timeline();


    ScrollTrigger.create({
        animation: sc01_2,
        trigger: ".circle_container",
        start: () => "+=" + 1330,
        // end: () => "+=" + $('#section01').height() ,
        end: () => "+=" + 180,
        // pin:true,
        // pinSpacing: false,
        scrub: 1,
        // markers: true
    });


    sc01_2.to("#section01 .circle .left .progress",{rotation:180},);
    sc01_2.to("#section01 .circle .right .progress",{rotation:180},);
    sc01_2.to("#section01 .tag .bar2",{rotation:120},);











    let sec02 = gsap.timeline();

    ScrollTrigger.create({
        animation: sec02,
        trigger: "#section02 .sec02_trigger",
        start: "top top",
        end: () => "+=" + 80,
        scrub: 3,

    });
    sec02.to("#section02 .bg_typo",{x:0 ,opacity:1},);
    sec02.to("#section02 .sub_title",{y:0 ,opacity:1},);
    sec02.to("#section02 .title",{y:0, opacity:1},);
    sec02.to("#section02 .middle_title",{y:0, opacity:1},);
    sec02.to("#section02 .text",{y:0, opacity:1},);
    sec02.to("#section02 .bottom",{x:0, opacity:1},);
    // sec02.to("#section02 .mockup_video",{mockup_video:play()},);





    let sec03 = gsap.timeline();

    ScrollTrigger.create({
        animation: sec03,
        trigger: "#section03 .sec03_trigger",
        start: "top top",
        end: () => "+=" + 120,
        scrub: 1,

    });

    sec03.to("#section03 .subtitle",{y:0 ,opacity:1},);
    sec03.to("#section03 .title",{y:0 ,opacity:1},);
    sec03.to("#section03 .text",{y:0 ,opacity:1},);
    sec03.to("#section03 .arrow",{width:201 ,opacity:1},);



    gsap.to('#section03 .concept_01', {

        opacity: 1,
        scale : 1,
        duration : 1,
        stagger: 0.1,
        scrollTrigger: {
            trigger: "#section03 .sec03_trigger",
            start: "top top",
            end: () => "+=" + 200,
            scrub: 2,
            // markers: true
        }
    });



    let sec04 = gsap.timeline();

    ScrollTrigger.create({
        animation: sec04,
        trigger: "#section04 .sec04_trigger",
        start: "top top",
        end: () => "+=" + 120,
        scrub: 2,

    });

    sec04.to("#section04 .subtitle",{y:0 ,opacity:1},);
    sec04.to("#section04 .title",{y:0 ,opacity:1},);
    sec04.to("#section04 .text",{y:0 ,opacity:1},);
    sec04.to("#section04 .bar",{width:795 ,opacity:1},);
    sec04.to("#section04 .left_box .answer01",{opacity:1},);
    sec04.to("#section04 .line",{height:606 ,opacity:1},);



    let sec04_2 = gsap.timeline();

    ScrollTrigger.create({
        animation: sec04_2,
        trigger: "#section04 .sec04_trigger",
        start: "top top",
        end: () => "+=" + 200,
        scrub: 4,
    });

    sec04_2.to("#section04 .left_box .answer01",{opacity:1},);
    sec04_2.to("#section04 .question01 .q1",{y:0 ,opacity:1},);
    sec04_2.to("#section04 .question01 .qt",{y:0 ,opacity:1},);
    sec04_2.to("#section04 .answer01_bottom",{y:0 ,opacity:1},);
    sec04_2.to("#section04 .left_box .answer01 .a1",{height:271, opacity:1},);
    sec04_2.to("#section04 .left_box .answer01 .a2",{height:175, opacity:1},);
    sec04_2.to("#section04 .left_box .answer01 .a3",{height:140, opacity:1},);
    sec04_2.to("#section04 .left_box .answer01 .a4",{height:31, opacity:1},);


    let sec04_3 = gsap.timeline();

    ScrollTrigger.create({
        animation: sec04_3,
        trigger: "#section04 .sec04_trigger",
        start: "top top",
        end: () => "+=" + 200,
        scrub: 5,

    });

    sec04_3.to("#section04 .question02 .q2",{y:0 ,opacity:1},);
    sec04_3.to("#section04 .question02 .qt2",{y:0 ,opacity:1},);
    sec04_3.to("#section04 .answer02 .a1",{scale:1  ,opacity:1},);
    sec04_3.to("#section04 .answer02 .a2",{scale:1  ,opacity:1},);
    sec04_3.to("#section04 .answer02 .a3",{scale:1  ,opacity:1},);
    sec04_3.to("#section04 .answer02 .a4",{scale:1  ,opacity:1},);
    sec04_3.to("#section04 .typo",{opacity:1},);


    let sec05_title = gsap.timeline();

    ScrollTrigger.create({
        animation: sec05_title,
        trigger: "#section05 .sec05_trigger",
        start: "top top",
        end: () => "+=" + 200,
        scrub: 3,

    });

    sec05_title.to("#section05 .subtitle",{y:0 ,opacity:1},);
    sec05_title.to("#section05 .title",{y:0 ,opacity:1},);


    let sec05_p1 = gsap.timeline();

    ScrollTrigger.create({
        animation: sec05_p1,
        trigger: "#section05 .sec05_trigger",
        start: "top top",
        end: () => "+=" + 200,
        scrub: 3,

    });

    sec05_p1.to("#section05 .per_photo",{opacity:1},);
    sec05_p1.to("#section05 .per_bottom",{y:0 ,opacity:1},);
    sec05_p1.to("#section05 .per_bg",{scale:1 ,opacity:1},);
    sec05_p1.to("#section05 .per_text",{opacity:1},);
    sec05_p1.to("#section05 .per_line",{width:127, opacity:1},);
    sec05_p1.to("#section05 .per_tag_box >div",{scale:1, opacity:1},);



    let sec05_s = gsap.timeline();

    ScrollTrigger.create({
        animation: sec05_s,
        trigger: "#section05 .sec05_container .main",
        start: "top top",
        end: () => "+=" + 100,
        scrub: 2,

    });

    sec05_s.to("#section05 .s_bg",{scale:1 ,opacity:1},);
    sec05_s.to("#section05 .s_text",{width:317},);
    sec05_s.to("#section05 .s_title",{width:321},);
    sec05_s.to("#section05 .s_line",{width:335},);
    sec05_s.to("#section05 .s_sub",{width:153},);


    let sec06_title = gsap.timeline();

    ScrollTrigger.create({
        animation: sec06_title,
        trigger: "#section06 .sec06_trigger",
        start: "top top",
        end: () => "+=" + 50,
        scrub: 2,

    });

    sec06_title.to("#section06 .subtitle",{y:0 ,opacity:1},);
    sec06_title.to("#section06 .title",{y:0 ,opacity:1},);


    let sec06_g = gsap.timeline();

    ScrollTrigger.create({
        animation: sec06_g,
        trigger: "#section06 .sec06_trigger",
        start: "top top",
        end: () => "+=" + 50,
        scrub: 2,

    });

    sec06_g.to("#section06 .step_bar",{x:0 ,opacity:1},);
    sec06_g.to("#section06 .graph_back",{y:0 ,opacity:.8},);

    let sec06_line = gsap.timeline();

    ScrollTrigger.create({
        animation: sec06_line,
        trigger: "#section06 .sec06_trigger",
        start: "top top",
        end: () => "+=" + 300,
        scrub: 3,

    });

    sec06_line.to("#section06 .j1",{opacity:1},);
    sec06_line.to("#section06 .graph_line",{width:230},);

    sec06_line.to("#section06 .j2",{opacity:1},);
    sec06_line.to("#section06 .graph_line",{width:432},);

    sec06_line.to("#section06 .j3",{opacity:1},);


    sec06_line.to("#section06 .graph_line",{width:776},);

    sec06_line.to("#section06 .j4",{opacity:1},);

    sec06_line.to("#section06 .graph_line",{width:1118},);
    sec06_line.to("#section06 .j5",{opacity:1},);


    let sec06_bottom = gsap.timeline();

    ScrollTrigger.create({
        animation: sec06_bottom,
        trigger: "#section06 .sec06_trigger",
        start: "top top",
        end: () => "+=" + 300,
        scrub: 3,

    });

    sec06_bottom.to("#section06 .journey1 .s1_title",{opacity:1},);
    sec06_bottom.to("#section06 .journey1 .s1_text",{y:0 ,opacity:1},);
    sec06_bottom.to("#section06 .arrow",{x:0 ,opacity:1},);

    sec06_bottom.to("#section06 .journey2 .s1_title",{opacity:1},);
    sec06_bottom.to("#section06 .journey2 .s1_text",{y:0 ,opacity:1},);
    sec06_bottom.to("#section06 .arrow2",{x:0 ,opacity:1},);

    sec06_bottom.to("#section06 .journey3 .s1_title",{opacity:1},);
    sec06_bottom.to("#section06 .journey3 .s1_text",{y:0 ,opacity:1},);
    sec06_bottom.to("#section06 .arrow3",{x:0 ,opacity:1},);

    sec06_bottom.to("#section06 .journey4 .s1_title",{opacity:1},);
    sec06_bottom.to("#section06 .journey4 .s1_text",{y:0 ,opacity:1},);
    sec06_bottom.to("#section06 .arrow4",{x:0 ,opacity:1},);


    sec06_bottom.to("#section06 .journey5 .s1_title",{opacity:1},);
    sec06_bottom.to("#section06 .journey5 .s1_text",{y:0 ,opacity:1},);
    sec06_bottom.to("#section06 .arrow5",{x:0 ,opacity:1},);

    sec06_bottom.to("#section06 .journey6 .s1_title",{opacity:1},);
    sec06_bottom.to("#section06 .journey6 .s1_text",{y:0 ,opacity:1},);
    sec06_bottom.to("#section06 .arrow6",{x:0 ,opacity:1},);

    sec06_bottom.to("#section06 .arrow7",{x:0 ,opacity:1},);
    sec06_bottom.to("#section06 .journey7 .s1_title",{opacity:1},);
    sec06_bottom.to("#section06 .journey7 .s1_text",{y:0 ,opacity:1},);








    let sec07_typo = gsap.timeline();

    ScrollTrigger.create({
        animation: sec07_typo,
        trigger: "#section07 .sec07_trigger",
        start: "top top",
        end: () => "+=" + 50,
        scrub: 2,

    });

    sec07_typo.to("#section07 .typo",{x:0 ,opacity:1},);
    sec07_typo.to("#section07 .left_box",{y:0 ,opacity:1},);

    let sec07_text = gsap.timeline();

    ScrollTrigger.create({
        animation: sec07_text,
        trigger: "#section07",
        // trigger: "#section07 .sec07_trigger",
        start: "top top",
        end: () => "+=" + 300,
        scrub: 3,

    });

    sec07_text.to("#section07 .line_point .line01",{width:157},);
    sec07_text.to("#section07 .line_point .line02",{width:158},);
    sec07_text.to("#section07 .sec07_point_circle .point01",{scale:1,opacity:1},);
    sec07_text.to("#section07 .sec07_point_circle .point02",{scale:1,opacity:1},);
    sec07_text.to("#section07 .subtitle",{y:0 ,opacity:1},);
    sec07_text.to("#section07 .title",{y:0 ,opacity:1},);
    sec07_text.to("#section07 .text",{y:0 ,opacity:1},);
    sec07_text.to("#section07 .sub_text",{y:0 ,opacity:1},);

    let sec08 = gsap.timeline();

    ScrollTrigger.create({
        animation: sec08,
        trigger: "#section08 .sec08_trigger",
        start: "top top",
        end: () => "+=" + 900,
        scrub: 4,

    });

    sec08.to("#section08 .typo",{x:0 ,opacity:1},);
    sec08.to("#section08 .sec08_bg",{scale:1},);

    sec08.to("#section08 .sec08_container .left_box .line01",{width:144},);
    sec08.to("#section08 .sec08_container .left_box .point01 img",{scale:1},);

    sec08.to("#section08 .sec08_container .right_box .line02",{height:55},);
    sec08.to("#section08 .sec08_container .right_box .point02",{scale:1},);

    sec08.to("#section08 .subtitle",{y:0 ,opacity:1},);
    sec08.to("#section08 .title",{y:0 ,opacity:1},);

    sec08.to("#section08 .icon",{scale:1},);
    sec08.to("#section08 .text",{y:0 ,opacity:1},);



    let sec09 = gsap.timeline();

    ScrollTrigger.create({
        animation: sec09,
        trigger: "#section09 .sec09_trigger",
        start: "top top",
        end: () => "+=" + 300,
        scrub: 3,

    });

    sec09.to("#section09 .typo",{x:0 ,opacity:1},);
    sec09.to("#section09 .subtitle",{y:0 ,opacity:1},);
    sec09.to("#section09 .title",{y:0 ,opacity:1},);
    sec09.to("#section09 .line02",{opacity:1},);
    sec09.to("#section09 .middle .text",{y:0 ,opacity:1},);



    let sec10 = gsap.timeline();

    ScrollTrigger.create({
        animation: sec10,
        trigger: "#section10 .sec10_trigger",
        start: "top top",
        end: () => "+=" + 100,
        scrub: 3,

    });

    sec10.to("#section10 .typo",{x:0 ,opacity:1},);
    sec10.to("#section10 .subtitle",{y:0 ,opacity:1},);
    sec10.to("#section10 .title",{y:0 ,opacity:1},);

    sec10.to("#section10 .num",{y:0 ,opacity:1},);
    sec10.to("#section10 .title01",{y:0 ,opacity:1},);
    sec10.to("#section10 .sub01",{y:0 ,opacity:1},);
    sec10.to("#section10 .txt",{y:0 ,opacity:1},);



    let sec11 = gsap.timeline();

    ScrollTrigger.create({
        animation: sec11,
        trigger: "#section11 .sec11_trigger",
        start: "top top",
        end: () => "+=" + 200,
        scrub: 2,

    });

    sec11.to("#section11 .subtitle",{y:0 ,opacity:1},);
    sec11.to("#section11 .title",{y:0 ,opacity:1},);

    sec11.to("#section11 .userflow",{opacity:1},);




    gsap.to('.sec12_back', {

        opacity: 1,

        scrollTrigger: {
            trigger: "#section02",
            start: "top top",
            // end: 'bottom bottom',
            scrub: 1,
        }

    });




    let sec13 = gsap.timeline();

    ScrollTrigger.create({
        animation: sec13,
        trigger: "#section13 .sec13_trigger",
        start: "top top",
        end: () => "+=" + 800,
        scrub: 4,

    });

    sec13.to("#section13 .top_typo",{x:0 ,opacity:1},);
    sec13.to("#section13 .subtitle",{y:0 ,opacity:1},);
    sec13.to("#section13 .title",{y:0 ,opacity:1},);
    sec13.to("#section13 .text",{y:0 ,opacity:1},);

    sec13.to("#section13 .txt_box .line",{width:151},);
    sec13.to("#section13 .txt_box .point01",{scale:1},);

    sec13.to("#section13 .txt_box .sub01_box .subtitle_2",{y:0 ,opacity:1},);
    sec13.to("#section13 .txt_box .sub01_box .txt01",{y:0 ,opacity:1},);

    sec13.to("#section13 .mockup02 .line02",{width:323 ,opacity:1},);
    sec13.to("#section13 .mockup02 .point_circle02",{scale:1},);
    sec13.to("#section13 .icon_box .subtitle_icon",{scale:1},);

    sec13.to("#section13 .icon",{scale:1},);
    sec13.to("#section13 .txt_box .sub01_box .txt01",{y:0 ,opacity:1},);

    sec13.to("#section13 .mockup03 .line04",{width:24},);
    sec13.to("#section13 .mockup03 .point_circle04",{scale:1},);
    sec13.to("#section13 .mockup03 .subtitle_fil",{opacity:1, x:0},);
    sec13.to("#section13 .mockup03 .text_fil",{opacity:1 ,x:0},);

    sec13.to("#section13 .mockup03 .line05",{width:78},);
    sec13.to("#section13 .mockup03 .point_circle05",{scale:1},);
    sec13.to("#section13 .mockup03 .subtitle_rec",{opacity:1, x:0},);
    sec13.to("#section13 .mockup03 .text_rec",{opacity:1 ,x:0},);

    sec13.to("#section13 .mockup02 .line03",{height:49},);
    sec13.to("#section13 .mockup02 .point_circle03",{scale:1},);
    sec13.to("#section13 .mockup02 .subtitle_menu",{opacity:1, x:0},);
    sec13.to("#section13 .mockup02 .txt03",{opacity:1 ,x:0},);


    let sec14 = gsap.timeline();

    ScrollTrigger.create({
        animation: sec14,
        trigger: "#section14 .sec14_trigger",
        start: "top top",
        end: () => "+=" + 150,
        scrub: 3,

    });

    sec14.to("#section14 .subtitle",{y:0 ,opacity:1},);
    sec14.to("#section14 .title",{y:0 ,opacity:1},);

    sec14.to("#section14 .p1",{scale:1},);
    sec14.to("#section14 .p2",{y:0 ,opacity:1},);

    sec14.to("#section14 .arrow",{y:0, opacity:1},);

    sec14.to("#section14 .s1",{scale:1},);
    sec14.to("#section14 .s2",{y:0 ,opacity:1},);



    let sec16 = gsap.timeline();

    ScrollTrigger.create({
        animation: sec16,
        trigger: "#section16 .sec16_trigger",
        start: "top top",
        end: () => "+=" + 100,
        scrub: 3,

    });

    sec16.to("#section16 .typo",{x:0 ,opacity:1},);

    sec16.to("#section16 .left_text .line",{width:130},);
    sec16.to("#section16 .left_text .point_circle07",{scale:1},);


    sec16.to("#section16 .subtitle",{y:0 ,opacity:1},);
    sec16.to("#section16 .title",{y:0 ,opacity:1},);
    sec16.to("#section16 .text",{x:0 ,opacity:1},);



    let sec17 = gsap.timeline();

    ScrollTrigger.create({
        animation: sec17,
        trigger: "#section17 .sec17_trigger",
        start: "top top",
        end: () => "+=" + 1400,
        scrub: 5,

    });

    sec17.to("#section17 .typo",{x:0 ,opacity:1},);

    sec17.to("#section17 .subtitle",{y:0 ,opacity:1},);
    sec17.to("#section17 .title",{y:0 ,opacity:1},);
    sec17.to("#section17 .text",{x:0 ,opacity:1},);

    sec17.to("#section17 .box02 .sub01 .line01",{width:93},);
    sec17.to("#section17 .box02 .sub01 .point01",{scale:1},);
    sec17.to("#section17 .box02 .sub01 .text01",{opacity:1, x:0},);


    sec17.to("#section17 .box02 .sub02 .line02",{width:282},);
    sec17.to("#section17 .box02 .sub02 .point02 img",{scale:1},);
    sec17.to("#section17 .box02 .sub02 .text02",{opacity:1, x:0},);

    sec17.to("#section17 .box02 .sub03 .line03",{width:96},);
    sec17.to("#section17 .box02 .sub03 .point03 img",{scale:1},);
    sec17.to("#section17 .box02 .sub03 .select",{scale:1},);
    sec17.to("#section17 .box02 .sub03 .text04",{opacity:1, x:0},);

    sec17.to("#section17 .box03 .line_point .line04",{width:155},);
    sec17.to("#section17 .box03 .line_point .point04 img",{scale:1},);
    sec17.to("#section17 .sub04 .subtitle04",{y:0 ,opacity:1},);
    sec17.to("#section17 .sub04 .title04",{y:0 ,opacity:1},);
    sec17.to("#section17 .sub04 .text04",{x:0 ,opacity:1},);
    sec17.to("#section17 .box03 .cal",{opacity:1},);

    sec17.to("#section17 .box05 .line_point .line05",{width:277},);
    sec17.to("#section17 .box05 .line_point .point05 img",{scale:1},);
    sec17.to("#section17 .sub05 .subtitle05",{y:0 ,opacity:1},);
    sec17.to("#section17 .sub05 .text05",{x:0 ,opacity:1},);


















    // $('#container').addClass('active');

    /*  slide,click event section */


    // if( scrollTop >= 1000){
    //
    //
    //     // $('#container').addClass('active');
    // }





})



