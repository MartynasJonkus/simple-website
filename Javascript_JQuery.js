function addNavbar(){
	$(".navbar").append("<button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapsibleNavbar\"><span class=\"navbar-toggler-icon\"></span></button>");
	$(".navbar").append("<div class=\"collapse navbar-collapse\" id=\"collapsibleNavbar\"></div>");
	$(".navbar-collapse").append("<ul class=\"navbar-nav\"></ul>");

    var heading = new Array();
    heading[0] = "Tema"
    heading[1] = "Klausimai"
    heading[2] = "Galerija"	
    heading[3] = "SoloLearn"

    var link = new Array();
    link[0] = "Martynas2.html"
    link[1] = "Martynas.html"
    link[2] = "Galerija.html"
    link[3] = "Martynas3.html"

    for (i = 0; i < heading.length; i++){
		var a = $("<a></a>").text(heading[i]);
	
		$(".navbar-nav").append("<li></li>");
		$(".navbar-nav li:eq("+i+")").append(a);
		$(".navbar-nav a:eq("+i+")").attr("href", link[i]);
    };
	
	$(".navbar-nav li").addClass("nav-item")
	$(".navbar-nav a").addClass("nav-link")
	
	
	$(".navbar-nav").append("<li class=\"nav-item dropdown\"><a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdownMenuLink\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">Lentelės</a><div id=\"1\" class=\"dropdown-menu\" aria-labelledby=\"navbarDropdownMenuLink\"></div></li>");
	$(".navbar-nav").append("<li class=\"nav-item dropdown\"><a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdownMenuLink\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">JQuery</a><div id=\"2\" class=\"dropdown-menu\" aria-labelledby=\"navbarDropdownMenuLink\"></div></li>");

	var Dheading1 = new Array();
    Dheading1[0] = "9 paskaitos"
    Dheading1[1] = "12 paskaitos"
	Dheading1[2] = "15 paskaitos"
	
	var Dheading2 = new Array();
    Dheading2[0] = "JQuery03_14"
    Dheading2[1] = "JQuery03_28"
	Dheading2[2] = "JQuery04_11"
	
	var Dlink1 = new Array();
    Dlink1[0] = "Martynas9P.html"
    Dlink1[1] = "Martynas12P.html"
	Dlink1[2] = "Martynas15P.html"
	
	var Dlink2 = new Array();
    Dlink2[0] = "JQuery03_14.html"
    Dlink2[1] = "JQuery03_28.html"
	Dlink2[2] = "JQuery04_11.html"
	
	for (i = 0; i < Dheading1.length; i++){
		var a = $("<a></a>").text(Dheading1[i]);
		
		$("#1").append(a);
		$("#1 a:eq("+i+")").attr("href", Dlink1[i]);
    };
	
	for (i = 0; i < Dheading2.length; i++){
		var a = $("<a></a>").text(Dheading2[i]);
		
		$("#2").append(a);
		$("#2 a:eq("+i+")").attr("href", Dlink2[i]);
    };
	
	$("#1 a").addClass("dropdown-item")
	$("#2 a").addClass("dropdown-item")
};

function addTable() {
    var table = document.getElementById("table")
	var tbody = document.createElement('TBODY')

    var tr = document.createElement('TR');
    tbody.appendChild(tr);
    for (i = 0; i < heading.length; i++) {
        var th = document.createElement('TH')
        th.appendChild(document.createTextNode(heading[i]));
        tr.appendChild(th);
    }

    for (i = 0; i < Explosives.length; i++) {
        var tr = document.createElement('TR');
        for (j = 0; j < Explosives[i].length; j++) {
            var td = document.createElement('TD')
            td.appendChild(document.createTextNode(Explosives[i][j]));
            tr.appendChild(td)
        }
        tbody.appendChild(tr);
    }
	table.appendChild(tbody);
};
