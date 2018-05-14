// view
var app = function(app) {

    app.View = function(model, layoutManager) {

        var v = this;
        zog(model.colors);

        var page1 = v.page1 = new Container();

        // ~~~~~~~  HEADER ~~~~~~~~~~~
        // var header = new Container(500,100).addTo(page1);



        // ~~~~~~~  CONTENT ~~~~~~~~~~~
        var content = new Container(500,500).addTo(page1);
        Room1 = v.Room1 = frame.asset("Room1.png").sca(1).center(content);
        var logo = new Label({
            text:"S U N S E T\nW O R L D",
            font:"titlefont",
            size:50,
            color:"white",
            lineHeight:70,
            align:"center",
            fontOptions:"bold"
        }).center(content);
        // put intro screen


        // ~~~~~~~  FOOTER ~~~~~~~~~~~
        var footer = v.btn1 = new Button({
            label:"Enter Room",
            color:"#83dae4",
            corner:20,
            width:300
            // offColor""
        }).addTo(page1);

        // ~~~~~~~  LAYOUT ~~~~~~~~~~~

        var layout1 = v.layout1 = new Layout(page1,[
            // {object:header, marginTop:5},
            {object:content, marginTop:5},
            {object:footer, marginTop:5}
        ], 5, "#231e3e", null, null, stage);
        layoutManager.add(layout1);




        // PAGE 2

        var page2 = v.page2 = new Container();

        // ~~~~~~~  HEADER ~~~~~~~~~~~
        // var header = new Container(500,100).addTo(page2);
        // var logo = new Label("PERFUME").center(header);


        // ~~~~~~~  CONTENT ~~~~~~~~~~~
        var content = new Container(500,500).addTo(page2);
        Room2 = v.Room2 = frame.asset("Room2.png").sca(0.5).center(content);
        var logo = new Label({
            text:"C L O U D\nW O R L D",
            font:"titlefont",
            size:50,
            color:"white",
            lineHeight:70,
            align:"center",
            fontOptions:"bold"
        }).center(content);

        // ~~~~~~~  FOOTER ~~~~~~~~~~~
        var footer = v.btn2 = new Button({
            label:"Enter Room",
            color:"#83dae4",
            corner:20,
            width:300
            // offColor""
        }).addTo(page2);
        footer.selectedIndex = 1;

        // ~~~~~~~  LAYOUT ~~~~~~~~~~~

        var layout2 = v.layout2 = new Layout(page2,[
            // {object:header, marginTop:5, backgroundColor:frame.yellow},
            {object:content, marginTop:5},
            {object:footer, marginTop:5}
        ], 5, "#231e3e", null, null, stage);
        layoutManager.add(layout2);


    }

    return app;
}(app || {});






