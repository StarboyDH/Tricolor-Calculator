$(function () {

    let firstInput = []; // list for determine the first input number or the second one

    let xArr = []; // the separated numbers of first input
    let yArr = []; // the separated numbers of second input
    let sCheck = false; // if this varibale is 'false' the numbers of input go to 'xArr', if 'true' the numbers go to 'yArr'

    let x = ""; // the whole number of the first input
    let y = ""; // the whole number of the second input
    let o = ""; // calculation sign input

    
    // inputting numbers
    $("#b1, #b2, #b3, #b4, #b5, #b6, #b7, #b8, #b9, #b0, #bDOT").click(function (n) {

        let NumPress = n.target.id;

        let z = $("#" + NumPress).text();
    
        
        firstInput.push(z);

        if (sCheck == false) {
            xArr.push(z);
        }
        
        else {
            yArr.push(z);
        }
        
        if (firstInput.length == 1) {
            $("#output").text($("#" + NumPress).text());

        }
        
        else {
            $("#output").append($("#" + NumPress).text());
        }

        
    });

    
    // inputting calculation sign
    $("#bPLS, #bSUB, #bDIV, #bMUL").click(function (s) {

        let SymbolPress = s.target.id;

        $("#symbol").css({"display": "inline",});
        $("#symbol").text($("#" + SymbolPress).text());

        $("#input-num").css({"display": "inline",});
        $("#input-num").text($("#output").text());

        $("#output").text("0.00");

        o = $("#" + SymbolPress).text();

        firstInput = [];

        sCheck = true;

        x = xArr.join("");

    });


    // delete button function
    $("#bDEL").click(function () {

        $("#output").text("0.00");

        firstInput = [];
        xArr = [];
        yArr = [];

    });

    // reset button function
    $("#bRES").click(function () {

        $("#output").text("0.00");
        $(".ops").css({"display": "none"});

        firstInput = [];
        xArr = [];
        yArr = [];
        
    });

    // equal button function
    $("#bEQL").click(function () {

        y = yArr.join("");

        let xy = "";

        switch (o) {

            case "+":
                xy = parseFloat(x) + parseFloat(y);
                break;

            case "-":
                xy = parseFloat(x) - parseFloat(y);
                break;
            
            case "×":
                xy = parseFloat(x) * parseFloat(y);
                break;

            case "/":
                xy = parseFloat(x) / parseFloat(y);
                break;

        }


        $("#output").text(xy);

        $(".ops").css({"display": "none"});

        firstInput = [];
        xArr = [];
        yArr = [];
        sCheck = false;

    });


    // themes functions
    let t = [];

    $("#theme-block").click(function (l) {

        let v = l.target.id;
        t.push(v);

        if (t.length <= 2) {

            $("#theme-dot").animate({left: "+=33%"}, 500);

        }

        else {

            $("#theme-dot").animate({left: "-=33%"}, 500);

        }

        if (t.length == 4) {

            t = [];

        }


        switch (t.length) {

            // second theme (navy)
            case 1:
            case 3:
                $("section").css({
                    "background-color": "#3b4664",
                    "transition": "0.5s ease-out",
                });

                $("#brand").css({
                    "color": "white",
                    "transition": "0.5s ease-out",
                });

                $("#theme-txt").css({
                    "color": "white",
                    "transition": "0.5s ease-out",
                });

                $("#theme-block").css({
                    "background-color": "#252d44",
                    "border": "1px solid #252d44",
                });

                $("#theme-dot").css({
                    "background-color": "#d53d32",
                });

                $("#cal-output").css({
                    "background-color": "#181f32",
                    "border": "1px solid #181f32",
                    "transition": "0.5s ease-out",
                });

                $(".ops").css({
                    "color": "white",
                    "transition": "0.5s ease-out",
                });

                $("#output").css({
                    "color": "white",
                    "transition": "0.5s ease-out",
                });

                $("#cal-input").css({
                    "background-color": "#252d44",
                    "border": "1px solid #252d44",
                    "transition": "0.5s ease-out",
                });

                $(".btn").css({
                    "background-color": "#eae3db",
                    "border": "1px solid #eae3db",
                    "box-shadow": "0px 1px 2.5px -1px #b2a295",
                    "color": "#4c5262",
                    "transition": "0.5s ease-out",
                });

                $("#b1, #b2, #b3, #b4, #b5, #b6, #b7, #b8, #b9, #b0, #bDOT, #bPLS, #bSUB, #bDIV, #bMUL").hover(function (h) {

                    let v = h.target.id;

                    $("#" + v).css({
                        "background-color": "#afafab",
                        "border": "1px solid #afafab",
                    });
                }, function (h) {

                    let v = h.target.id;

                    $("#" + v).css({
                        "background-color": "#eae3db",
                        "border": "1px solid #eae3db",
                    });
                });

                $("#bRES, #bDEL").css({
                    "background-color": "#647299",
                    "border": "1px solid #647299",
                    "color": "white",
                    "transition": "0.5s ease-out",
                });

                $("#bRES, #bDEL").hover(function (h){

                    let v = h.target.id;

                    $("#" + v).css({
                        "background-color": "#324478",
                        "border": "1px solid #324478",
                    });
                }, function (h) {

                    let v = h.target.id;

                    $("#" + v).css({
                        "background-color": "#647299",
                        "border": "1px solid #647299",
                    });

                });

                $("#bEQL").css({
                    "background-color": "#d13f30",
                    "border": "1px solid #d13f30",
                    "color": "white",
                    "transition": "0.5s ease-out",
                });

                $("#bEQL").hover(function (h) {

                    let v = h.target.id;

                    $("#" + v).css({
                        "background-color": "#ef3421",
                        "border": "1px solid #ef3421",
                    });
                }, function (h) {

                    let v = h.target.id;

                    $("#" + v).css({
                        "background-color": "#d13f30",
                        "border": "1px solid #d13f30",
                    });

                });

                break;

            
            // third theme (purple)
            case 2:

                $("section").css({
                    "background-color": "#17062a",
                    "transition": "0.5s ease-out",
                });

                $("#brand").css({
                    "color": "#ffe741",
                    "transition": "0.5s ease-out",
                });

                $("#theme-txt").css({
                    "color": "#ffe741",
                    "transition": "0.5s ease-out",
                });

                $("#theme-block").css({
                    "background-color": "#1e0836",
                    "border": "1px solid #1e0836",
                });

                $("#theme-dot").css({
                    "background-color": "#02d9d1",
                });

                $("#cal-output").css({
                    "background-color": "#1e0836",
                    "border": "1px solid #1e0836",
                    "transition": "0.5s ease-out",
                });

                $(".ops").css({
                    "color": "#ffe741",
                    "transition": "0.5s ease-out",
                });

                $("#output").css({
                    "color": "#ffe741",
                    "transition": "0.5s ease-out",
                });

                $("#cal-input").css({
                    "background-color": "#1e0836",
                    "border": "1px solid #1e0836",
                    "transition": "0.5s ease-out",
                });

                $(".btn").css({
                    "background-color": "#331b4d",
                    "border": "1px solid #331b4d",
                    "box-shadow": "0px 1px 2.5px -1px #86209d",
                    "color": "#ffe741",
                    "transition": "0.5s ease-out",
                });

                $("#b1, #b2, #b3, #b4, #b5, #b6, #b7, #b8, #b9, #b0, #bDOT, #bPLS, #bSUB, #bDIV, #bMUL").hover(function (h) {

                    let v = h.target.id;

                    $("#" + v).css({
                        "background-color": "#603c87",
                        "border": "1px solid #603c87",
                    });
                }, function (h) {

                    let v = h.target.id;

                    $("#" + v).css({
                        "background-color": "#331b4d",
                        "border": "1px solid #331b4d",
                    });
                });

                $("#bRES, #bDEL").css({
                    "background-color": "#57067e",
                    "border": "1px solid #57067e",
                    "color": "white",
                    "transition": "0.5s ease-out",
                });

                $("#bRES, #bDEL").hover(function (h){

                    let v = h.target.id;

                    $("#" + v).css({
                        "background-color": "#470666",
                        "border": "1px solid #470666",
                    });
                }, function (h) {

                    let v = h.target.id;

                    $("#" + v).css({
                        "background-color": "#57067e",
                        "border": "1px solid #57067e",
                    });

                });

                $("#bEQL").css({
                    "background-color": "#00decf",
                    "border": "1px solid #00decf",
                    "color": "black",
                    "transition": "0.5s ease-out",
                });

                $("#bEQL").hover(function (h) {

                    let v = h.target.id;

                    $("#" + v).css({
                        "background-color": "#00a99e",
                        "border": "1px solid #00a99e",
                    });
                }, function (h) {

                    let v = h.target.id;

                    $("#" + v).css({
                        "background-color": "#00decf",
                        "border": "1px solid #00decf",
                    });

                });

                break;

            // first theme (silver)
            default:

                $("section").css({
                    "background-color": "#e6e6e6",
                    "transition": "0.5s ease-out",
                });
    
                $("#brand").css({
                    "color": "black",
                    "transition": "0.5s ease-out",
                });
    
                $("#theme-txt").css({
                    "color": "black",
                    "transition": "0.5s ease-out",
                });
    
                $("#theme-block").css({
                    "background-color": "#d3cdcd",
                    "border": "1px solid #d3cdcd",
                });
    
                $("#theme-dot").css({
                    "background-color": "#c15703",
                });
    
                $("#cal-output").css({
                    "background-color": "#eeeeee",
                    "border": "1px solid #eeeeee",
                    "transition": "0.5s ease-out",
                });
    
                $(".ops").css({
                    "color": "black",
                    "transition": "0.5s ease-out",
                });
    
                $("#output").css({
                    "color": "black",
                    "transition": "0.5s ease-out",
                });
    
                $("#cal-input").css({
                    "background-color": "#d3cdcd",
                    "border": "1px solid #d3cdcd",
                    "transition": "0.5s ease-out",
                });
    
                $(".btn").css({
                    "background-color": "#e5e4e0",
                    "border": "1px solid #e5e4e0",
                    "box-shadow": "0px 1px 2.5px -1px black",
                    "color": "black",
                    "transition": "0.5s ease-out",
                });

                $("#b1, #b2, #b3, #b4, #b5, #b6, #b7, #b8, #b9, #b0, #bDOT, #bPLS, #bSUB, #bDIV, #bMUL").hover(function (h) {

                    let v = h.target.id;

                    $("#" + v).css({
                        "background-color": "#afafab",
                        "border": "1px solid #afafab",
                    });
                }, function (h) {

                    let v = h.target.id;

                    $("#" + v).css({
                        "background-color": "#e5e4e0",
                        "border": "1px solid #e5e4e0",
                    });
                });
    
                $("#bRES, #bDEL").css({
                    "background-color": "#388187",
                    "border": "1px solid #388187",
                    "color": "white",
                    "transition": "0.5s ease-out",
                });

                $("#bRES, #bDEL").hover(function (h){

                    let v = h.target.id;

                    $("#" + v).css({
                        "background-color": "#2e666b",
                        "border": "1px solid #2e666b",
                    });
                }, function (h) {

                    let v = h.target.id;

                    $("#" + v).css({
                        "background-color": "#388187",
                        "border": "1px solid #388187",
                    });

                });
    
                $("#bEQL").css({
                    "background-color": "#c85401",
                    "border": "1px solid #c85401",
                    "color": "white",
                    "transition": "0.5s ease-out",
                });

                $("#bEQL").hover(function (h) {

                    let v = h.target.id;

                    $("#" + v).css({
                        "background-color": "#db5c01",
                        "border": "1px solid #db5c01",
                    });
                }, function (h) {

                    let v = h.target.id;

                    $("#" + v).css({
                        "background-color": "#c85401",
                        "border": "1px solid #c85401",
                    });

                });
    
                break;

        }; 

    });


});
