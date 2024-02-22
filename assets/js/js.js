fetch('https://servicodados.ibge.gov.br/api/v1/paises/BR/indicadores')
    .then(response => response.json())
    .then(data => {   

    $(document).ready(function() {

         // Variáveis de chegada de turistas ----------------------------------   

        var turistas1995 = parseInt(data[0]["series"][0]["serie"][3]["1995"]);
        var turistas2000 = parseInt(data[0]["series"][0]["serie"][6]["2000"]);
        var turistas2001 = parseInt(data[0]["series"][0]["serie"][9]["2001"]);
        var turistas2002 = parseInt(data[0]["series"][0]["serie"][11]["2002"]);
        var turistas2003 = parseInt(data[0]["series"][0]["serie"][13]["2003"]);
        var turistas2004 = parseInt(data[0]["series"][0]["serie"][15]["2004"]);
        var turistas2005 = parseInt(data[0]["series"][0]["serie"][17]["2005"]);
        var turistas2006 = parseInt(data[0]["series"][0]["serie"][20]["2006"]);
        var turistas2007 = parseInt(data[0]["series"][0]["serie"][22]["2007"]);
        var turistas2008 = parseInt(data[0]["series"][0]["serie"][24]["2008"]);
        var turistas2009 = parseInt(data[0]["series"][0]["serie"][26]["2009"]);
        var turistas2010 = parseInt(data[0]["series"][0]["serie"][28]["2010"]);
        var turistas2011 = parseInt(data[0]["series"][0]["serie"][31]["2011"]);
        var turistas2012 = parseInt(data[0]["series"][0]["serie"][33]["2012"]);
        var turistas2013 = parseInt(data[0]["series"][0]["serie"][35]["2013"]);
        var turistas2014 = parseInt(data[0]["series"][0]["serie"][37]["2014"]);
        var turistas2015 = parseInt(data[0]["series"][0]["serie"][39]["2015"]);
        var turistas2016 = parseInt(data[0]["series"][0]["serie"][42]["2016"]);
        var turistas2017 = parseInt(data[0]["series"][0]["serie"][44]["2017"]);
        var turistas2018 = parseInt(data[0]["series"][0]["serie"][46]["2018"]);
        var turistas2019 = parseInt(data[0]["series"][0]["serie"][48]["2019"]);

        // Variáveis de formatação de velores
         
        var turistas1995format = turistas1995.toLocaleString('pt-br',{style: 'decimal', decimal: 'BRL'});
        var turistas2000format = turistas2000.toLocaleString('pt-br',{style: 'decimal', decimal: 'BRL'});    
        var turistas2001format = turistas2001.toLocaleString('pt-br',{style: 'decimal', decimal: 'BRL'});    
        var turistas2002format = turistas2002.toLocaleString('pt-br',{style: 'decimal', decimal: 'BRL'});
        var turistas2003format = turistas2003.toLocaleString('pt-br',{style: 'decimal', decimal: 'BRL'});    
        var turistas2004format = turistas2004.toLocaleString('pt-br',{style: 'decimal', decimal: 'BRL'});
        var turistas2005format = turistas2005.toLocaleString('pt-br',{style: 'decimal', decimal: 'BRL'});
        var turistas2006format = turistas2006.toLocaleString('pt-br',{style: 'decimal', decimal: 'BRL'});
        var turistas2007format = turistas2007.toLocaleString('pt-br',{style: 'decimal', decimal: 'BRL'});    
        var turistas2008format = turistas2008.toLocaleString('pt-br',{style: 'decimal', decimal: 'BRL'});
        var turistas2009format = turistas2009.toLocaleString('pt-br',{style: 'decimal', decimal: 'BRL'});    
        var turistas2010format = turistas2010.toLocaleString('pt-br',{style: 'decimal', decimal: 'BRL'});
        var turistas2011format = turistas2011.toLocaleString('pt-br',{style: 'decimal', decimal: 'BRL'});    
        var turistas2012format = turistas2012.toLocaleString('pt-br',{style: 'decimal', decimal: 'BRL'});    
        var turistas2013format = turistas2013.toLocaleString('pt-br',{style: 'decimal', decimal: 'BRL'});
        var turistas2014format = turistas2014.toLocaleString('pt-br',{style: 'decimal', decimal: 'BRL'});    
        var turistas2015format = turistas2015.toLocaleString('pt-br',{style: 'decimal', decimal: 'BRL'});
        var turistas2016format = turistas2016.toLocaleString('pt-br',{style: 'decimal', decimal: 'BRL'});
        var turistas2017format = turistas2017.toLocaleString('pt-br',{style: 'decimal', decimal: 'BRL'});
        var turistas2018format = turistas2018.toLocaleString('pt-br',{style: 'decimal', decimal: 'BRL'});    
        var turistas2019format = turistas2019.toLocaleString('pt-br',{style: 'decimal', decimal: 'BRL'});

        // Manipulação do gráfico de turistas
                
        $("#barra1").attr("height", (turistas1995 / 210000));
        $("#barra1").mouseenter(function() {
            $("#barra1").attr("style", "fill:#d45500ff");
            $(".info-grafico").css("padding", "10px");
            $(".info-grafico").css("background-color", "#0000ff");
            $(".info-grafico").text(turistas1995format + " turistas chegaram ao Brasil em 1995.");
        });
        $("#barra1").mouseleave(function() {
            $("#barra1").attr("style", "fill:url(#linearGradient19)");
            $(".info-grafico").css("background-color", "white");
            $(".info-grafico").text("");
        });

        $("#barra2").attr("height", (turistas2000 / 210000));
        $("#barra2").mouseenter(function() {
            $("#barra2").attr("style", "fill:#d45500ff");
            $(".info-grafico").css("padding", "10px");
            $(".info-grafico").css("background-color", "#0000ff");
            $(".info-grafico").text(turistas2000format + " turistas chegaram ao Brasil em 2000.");
        });
        $("#barra2").mouseleave(function() {
            $("#barra2").attr("style", "fill:url(#linearGradient18)");
            $(".info-grafico").css("background-color", "white");
            $(".info-grafico").text("");
        });

        $("#barra3").attr("height", (turistas2001 / 210000));
        $("#barra3").mouseenter(function() {
            $("#barra3").attr("style", "fill:#d45500ff");
            $(".info-grafico").css("padding", "10px");
            $(".info-grafico").css("background-color", "#0000ff");
            $(".info-grafico").text(turistas2001format + " turistas chegaram ao Brasil em 2001.");
        });
        $("#barra3").mouseleave(function() {
            $("#barra3").attr("style", "fill:url(#linearGradient18)");
            $(".info-grafico").css("background-color", "white");
            $(".info-grafico").text("");
        });

        $("#barra4").attr("height", (turistas2002 / 210000));
        $("#barra4").mouseenter(function() {
            $("#barra4").attr("style", "fill:#d45500ff");
            $(".info-grafico").css("padding", "10px");
            $(".info-grafico").css("background-color", "#0000ff");
            $(".info-grafico").text(turistas2002format + " turistas chegaram ao Brasil em 2002.");
        });
        $("#barra4").mouseleave(function() {
            $("#barra4").attr("style", "fill:url(#linearGradient18)");
            $(".info-grafico").css("background-color", "white");
            $(".info-grafico").text("");
        });

        $("#barra5").attr("height", (turistas2003 / 210000));
        $("#barra5").mouseenter(function() {
            $("#barra5").attr("style", "fill:#d45500ff");
            $(".info-grafico").css("padding", "10px");
            $(".info-grafico").css("background-color", "#0000ff");
            $(".info-grafico").text(turistas2003format + " turistas chegaram ao Brasil em 2003.");
        });
        $("#barra5").mouseleave(function() {
            $("#barra5").attr("style", "fill:url(#linearGradient18)");
            $(".info-grafico").css("background-color", "white");
            $(".info-grafico").text("");
        });

        $("#barra6").attr("height", (turistas2004 / 210000));
        $("#barra6").mouseenter(function() {
            $("#barra6").attr("style", "fill:#d45500ff");
            $(".info-grafico").css("padding", "10px");
            $(".info-grafico").css("background-color", "#0000ff");
            $(".info-grafico").text(turistas2004format + " turistas chegaram ao Brasil em 2004.");
        });
        $("#barra6").mouseleave(function() {
            $("#barra6").attr("style", "fill:url(#linearGradient18)");
            $(".info-grafico").css("background-color", "white");
            $(".info-grafico").text("");
        });

        $("#barra7").attr("height", (turistas2005 / 210000));
        $("#barra7").mouseenter(function() {
            $("#barra7").attr("style", "fill:#d45500ff");
            $(".info-grafico").css("padding", "10px");
            $(".info-grafico").css("background-color", "#0000ff");
            $(".info-grafico").text(turistas2005format + " turistas chegaram ao Brasil em 2005.");
        });
        $("#barra7").mouseleave(function() {
            $("#barra7").attr("style", "fill:url(#linearGradient18)");
            $(".info-grafico").css("background-color", "white");
            $(".info-grafico").text("");
        });

        $("#barra8").attr("height", (turistas2006 / 210000));
        $("#barra8").mouseenter(function() {
            $("#barra8").attr("style", "fill:#d45500ff");
            $(".info-grafico").css("padding", "10px");
            $(".info-grafico").css("background-color", "#0000ff");
            $(".info-grafico").text(turistas2006format + " turistas chegaram ao Brasil em 2006.");
        });
        $("#barra8").mouseleave(function() {
            $("#barra8").attr("style", "fill:url(#linearGradient18)");
            $(".info-grafico").css("background-color", "white");
            $(".info-grafico").text("");
        });

        $("#barra9").attr("height", (turistas2007 / 210000));
        $("#barra9").mouseenter(function() {
            $("#barra9").attr("style", "fill:#d45500ff");
            $(".info-grafico").css("padding", "10px");
            $(".info-grafico").css("background-color", "#0000ff");
            $(".info-grafico").text(turistas2007format + " turistas chegaram ao Brasil em 2007.");
        });
        $("#barra9").mouseleave(function() {
            $("#barra9").attr("style", "fill:url(#linearGradient18)");
            $(".info-grafico").css("background-color", "white");
            $(".info-grafico").text("");
        });

        $("#barra10").attr("height", (turistas2008 / 210000));
        $("#barra10").mouseenter(function() {
            $("#barra10").attr("style", "fill:#d45500ff");
            $(".info-grafico").css("padding", "10px");
            $(".info-grafico").css("background-color", "#0000ff");
            $(".info-grafico").text(turistas2008format + " turistas chegaram ao Brasil em 2008.");
        });
        $("#barra10").mouseleave(function() {
            $("#barra10").attr("style", "fill:url(#linearGradient18)");
            $(".info-grafico").css("background-color", "white");
            $(".info-grafico").text("");
        });

        $("#barra11").attr("height", (turistas2009 / 210000));
        $("#barra11").mouseenter(function() {
            $("#barra11").attr("style", "fill:#d45500ff");
            $(".info-grafico").css("padding", "10px");
            $(".info-grafico").css("background-color", "#0000ff");
            $(".info-grafico").text(turistas2009format + " turistas chegaram ao Brasil em 2009.");
        });
        $("#barra11").mouseleave(function() {
            $("#barra11").attr("style", "fill:url(#linearGradient18)");
            $(".info-grafico").css("background-color", "white");
            $(".info-grafico").text("");
        });

        $("#barra12").attr("height", (turistas2010 / 210000));
        $("#barra12").mouseenter(function() {
            $("#barra12").attr("style", "fill:#d45500ff");
            $(".info-grafico").css("padding", "10px");
            $(".info-grafico").css("background-color", "#0000ff");
            $(".info-grafico").text(turistas2010format + " turistas chegaram ao Brasil em 2010.");
        });
        $("#barra12").mouseleave(function() {
            $("#barra12").attr("style", "fill:url(#linearGradient18)");
            $(".info-grafico").css("background-color", "white");
            $(".info-grafico").text("");
        });

        $("#barra13").attr("height", (turistas2011 / 210000));
        $("#barra13").mouseenter(function() {
            $("#barra13").attr("style", "fill:#d45500ff");
            $(".info-grafico").css("padding", "10px");
            $(".info-grafico").css("background-color", "#0000ff");
            $(".info-grafico").text(turistas2011format + " turistas chegaram ao Brasil em 2011.");
        });
        $("#barra13").mouseleave(function() {
            $("#barra13").attr("style", "fill:url(#linearGradient18)");
            $(".info-grafico").css("background-color", "white");
            $(".info-grafico").text("");
        });

        $("#barra14").attr("height", (turistas2012 / 210000));
        $("#barra14").mouseenter(function() {
            $("#barra14").attr("style", "fill:#d45500ff");
            $(".info-grafico").css("padding", "10px");
            $(".info-grafico").css("background-color", "#0000ff");
            $(".info-grafico").text(turistas2012format + " turistas chegaram ao Brasil em 2012.");
        });
        $("#barra14").mouseleave(function() {
            $("#barra14").attr("style", "fill:url(#linearGradient18)");
            $(".info-grafico").css("background-color", "white");
            $(".info-grafico").text("");
        });

        $("#barra15").attr("height", (turistas2013 / 210000));
        $("#barra15").mouseenter(function() {
            $("#barra15").attr("style", "fill:#d45500ff");
            $(".info-grafico").css("padding", "10px");
            $(".info-grafico").css("background-color", "#0000ff");
            $(".info-grafico").text(turistas2013format + " turistas chegaram ao Brasil em 2013.");
        });
        $("#barra15").mouseleave(function() {
            $("#barra15").attr("style", "fill:url(#linearGradient18)");
            $(".info-grafico").css("background-color", "white");
            $(".info-grafico").text("");
        });

        $("#barra16").attr("height", (turistas2014 / 210000));
        $("#barra16").mouseenter(function() {
            $("#barra16").attr("style", "fill:#d45500ff");
            $(".info-grafico").css("padding", "10px");
            $(".info-grafico").css("background-color", "#0000ff");
            $(".info-grafico").text(turistas2014format + " turistas chegaram ao Brasil em 2014.");
        });
        $("#barra16").mouseleave(function() {
            $("#barra16").attr("style", "fill:url(#linearGradient18)");
            $(".info-grafico").css("background-color", "white");
            $(".info-grafico").text("");
        });

        $("#barra17").attr("height", (turistas2015 / 210000));
        $("#barra17").mouseenter(function() {
            $("#barra17").attr("style", "fill:#d45500ff");
            $(".info-grafico").css("padding", "10px");
            $(".info-grafico").css("background-color", "#0000ff");
            $(".info-grafico").text(turistas2015format + " turistas chegaram ao Brasil em 2015.");
        });
        $("#barra17").mouseleave(function() {
            $("#barra17").attr("style", "fill:url(#linearGradient18)");
            $(".info-grafico").css("background-color", "white");
            $(".info-grafico").text("");
        });

        $("#barra18").attr("height", (turistas2016 / 210000));
        $("#barra18").mouseenter(function() {
            $("#barra18").attr("style", "fill:#d45500ff");
            $(".info-grafico").css("padding", "10px");
            $(".info-grafico").css("background-color", "#0000ff");
            $(".info-grafico").text(turistas2016format + " turistas chegaram ao Brasil em 2016.");
        });
        $("#barra18").mouseleave(function() {
            $("#barra18").attr("style", "fill:url(#linearGradient18)");
            $(".info-grafico").css("background-color", "white");
            $(".info-grafico").text("");
        });

        $("#barra19").attr("height", (turistas2017 / 210000));
        $("#barra19").mouseenter(function() {
            $("#barra19").attr("style", "fill:#d45500ff");
            $(".info-grafico").css("padding", "10px");
            $(".info-grafico").css("background-color", "#0000ff");
            $(".info-grafico").text(turistas2017format + " turistas chegaram ao Brasil em 2017.");
        });
        $("#barra19").mouseleave(function() {
            $("#barra19").attr("style", "fill:url(#linearGradient18)");
            $(".info-grafico").css("background-color", "white");
            $(".info-grafico").text("");
        });

        $("#barra20").attr("height", (turistas2018 / 210000));
        $("#barra20").mouseenter(function() {
            $("#barra20").attr("style", "fill:#d45500ff");
            $(".info-grafico").css("padding", "10px");
            $(".info-grafico").css("background-color", "#0000ff");
            $(".info-grafico").text(turistas2018format + " turistas chegaram ao Brasil em 2018.");
        });
        $("#barra20").mouseleave(function() {
            $("#barra20").attr("style", "fill:url(#linearGradient18)");
            $(".info-grafico").css("background-color", "white");
            $(".info-grafico").text("");
        });

        $("#barra21").attr("height", (turistas2019 / 210000));
        $("#barra21").mouseenter(function() {
            $("#barra21").attr("style", "fill:#d45500ff");
            $(".info-grafico").css("padding", "10px");
            $(".info-grafico").css("background-color", "#0000ff");
            $(".info-grafico").text(turistas2019format + " turistas chegaram ao Brasil em 2019.");
        });
        $("#barra21").mouseleave(function() {
            $("#barra21").attr("style", "fill:url(#linearGradient18)");
            $(".info-grafico").css("background-color", "white");
            $(".info-grafico").text("");
        });

        // Variáveis de usuários de internet ....................................

        var internet1995 = parseFloat(data[31]["series"][0]["serie"][3]["1995"]);
        var internet2000 = parseFloat(data[31]["series"][0]["serie"][6]["2000"]);
        var internet2001 = parseFloat(data[31]["series"][0]["serie"][9]["2001"]);
        var internet2002 = parseFloat(data[31]["series"][0]["serie"][11]["2002"]);
        var internet2003 = parseFloat(data[31]["series"][0]["serie"][13]["2003"]);
        var internet2004 = parseFloat(data[31]["series"][0]["serie"][15]["2004"]);
        var internet2005 = parseFloat(data[31]["series"][0]["serie"][17]["2005"]);
        var internet2006 = parseFloat(data[31]["series"][0]["serie"][20]["2006"]);
        var internet2007 = parseFloat(data[31]["series"][0]["serie"][22]["2007"]);
        var internet2008 = parseFloat(data[31]["series"][0]["serie"][24]["2008"]);
        var internet2009 = parseFloat(data[31]["series"][0]["serie"][26]["2009"]);
        var internet2010 = parseFloat(data[31]["series"][0]["serie"][28]["2010"]);
        var internet2011 = parseFloat(data[31]["series"][0]["serie"][31]["2011"]);
        var internet2012 = parseFloat(data[31]["series"][0]["serie"][33]["2012"]);
        var internet2013 = parseFloat(data[31]["series"][0]["serie"][35]["2013"]);
        var internet2014 = parseFloat(data[31]["series"][0]["serie"][37]["2014"]);
        var internet2015 = parseFloat(data[31]["series"][0]["serie"][39]["2015"]);
        var internet2016 = parseFloat(data[31]["series"][0]["serie"][42]["2016"]);
        var internet2017 = parseFloat(data[31]["series"][0]["serie"][44]["2017"]);
        var internet2018 = parseFloat(data[31]["series"][0]["serie"][46]["2018"]);
        var internet2019 = parseFloat(data[31]["series"][0]["serie"][48]["2019"]);

        // Cálculo para manipulação do gráfico2

        var calc1995 = 60 - (internet1995 / 2);
        var calc2000 = 60 - (internet2000 / 2);
        var calc2001 = 60 - (internet2001 / 2);
        var calc2002 = 60 - (internet2002 / 2);
        var calc2003 = 60 - (internet2003 / 2);
        var calc2004 = 60 - (internet2004 / 2);
        var calc2005 = 60 - (internet2005 / 2);
        var calc2006 = 60 - (internet2006 / 2);
        var calc2007 = 60 - (internet2007 / 2);
        var calc2008 = 60 - (internet2008 / 2);
        var calc2009 = 60 - (internet2009 / 2);
        var calc2010 = 60 - (internet2010 / 2);
        var calc2011 = 60 - (internet2011 / 2);
        var calc2012 = 60 - (internet2012 / 2);
        var calc2013 = 60 - (internet2013 / 2);
        var calc2014 = 60 - (internet2014 / 2);
        var calc2015 = 60 - (internet2015 / 2);
        var calc2016 = 60 - (internet2016 / 2);
        var calc2017 = 60 - (internet2017 / 2);
        var calc2018 = 60 - (internet2018 / 2);
        var calc2019 = 60 - (internet2019 / 2);

        $("#linha").attr("d", "M 24.555388," + calc1995 + " 32.740518," + calc2000 + " 40.148777," + calc2001 + " 47.607383," + calc2002 + " 55.859169," + calc2003 + " 62.808339," + calc2004 + " 71.160509," + calc2005 + " 78.688212," + calc2006 + " 85.991299," + calc2007 + " 93.70583," + calc2008 + " 101.34486," + calc2009 + " 109.03203," + calc2010 + " 116.84942," + calc2011 + " 124.56395," + calc2012 + " 131.86704," + calc2013 + " 139.78729," + calc2014 + " 147.09038," + calc2015 + " 154.70205," + calc2016 + " 162.88411," + calc2017 + " 170.02825," + calc2018 +" 177.4342," + calc2019);
        
        // Manipulação do gráfico usuários de internet
                
        $("#tspan65").attr("height", (calc1995));
        $("#tspan65").mouseenter(function() {
            $("#tspan65").attr("style", "fill:#d45500ff");
            $(".info-grafico1").css("padding", "10px");
            $(".info-grafico1").css("background-color", "#0000ff");
            $(".info-grafico1").text(internet1995 + "% da população usam internet(1995).");
        });
        $("#tspan65").mouseleave(function() {
            $("#tspan65").attr("style", "fill:black");
            $(".info-grafico1").css("background-color", "white");
            $(".info-grafico1").text("");
        });

        $("#tspan63").attr("height", (calc2000));
        $("#tspan63").mouseenter(function() {
            $("#tspan63").attr("style", "fill:#d45500ff");
            $(".info-grafico1").css("padding", "10px");
            $(".info-grafico1").css("background-color", "#0000ff");
            $(".info-grafico1").text(internet2000 + "% da população usam internet(2000).");
        });
        $("#tspan63").mouseleave(function() {
            $("#tspan63").attr("style", "fill:black");
            $(".info-grafico1").css("background-color", "white");
            $(".info-grafico1").text("");
        });

        $("#tspan61").attr("height", (calc2001));
        $("#tspan61").mouseenter(function() {
            $("#tspan61").attr("style", "fill:#d45500ff");
            $(".info-grafico1").css("padding", "10px");
            $(".info-grafico1").css("background-color", "#0000ff");
            $(".info-grafico1").text(internet2001 + "% da população usam internet(2001).");
        });
        $("#tspan61").mouseleave(function() {
            $("#tspan61").attr("style", "fill:black");
            $(".info-grafico1").css("background-color", "white");
            $(".info-grafico1").text("");
        });

        $("#tspan59").attr("height", (calc2002));
        $("#tspan59").mouseenter(function() {
            $("#tspan59").attr("style", "fill:#d45500ff");
            $(".info-grafico1").css("padding", "10px");
            $(".info-grafico1").css("background-color", "#0000ff");
            $(".info-grafico1").text(internet2002 + "% da população usam internet(2002).");
        });
        $("#tspan59").mouseleave(function() {
            $("#tspan59").attr("style", "fill:black");
            $(".info-grafico1").css("background-color", "white");
            $(".info-grafico1").text("");
        });

        $("#tspan57").attr("height", (calc2003));
        $("#tspan57").mouseenter(function() {
            $("#tspan57").attr("style", "fill:#d45500ff");
            $(".info-grafico1").css("padding", "10px");
            $(".info-grafico1").css("background-color", "#0000ff");
            $(".info-grafico1").text(internet2003 + "% da população usam internet(2003).");
        });
        $("#tspan57").mouseleave(function() {
            $("#tspan57").attr("style", "fill:black");
            $(".info-grafico1").css("background-color", "white");
            $(".info-grafico1").text("");
        });

        $("#tspan55").attr("height", (calc2004));
        $("#tspan55").mouseenter(function() {
            $("#tspan55").attr("style", "fill:#d45500ff");
            $(".info-grafico1").css("padding", "10px");
            $(".info-grafico1").css("background-color", "#0000ff");
            $(".info-grafico1").text(internet2004 + "% da população usam internet(2004).");
        });
        $("#tspan55").mouseleave(function() {
            $("#tspan55").attr("style", "fill:black");
            $(".info-grafico1").css("background-color", "white");
            $(".info-grafico1").text("");
        });

        $("#tspan25").attr("height", (calc2005));
        $("#tspan25").mouseenter(function() {
            $("#tspan25").attr("style", "fill:#d45500ff");
            $(".info-grafico1").css("padding", "10px");
            $(".info-grafico1").css("background-color", "#0000ff");
            $(".info-grafico1").text(internet2005 + "% da população usam internet(2005).");
        });
        $("#tspan25").mouseleave(function() {
            $("#tspan25").attr("style", "fill:black");
            $(".info-grafico1").css("background-color", "white");
            $(".info-grafico1").text("");
        });

        $("#tspan27").attr("height", (calc2006));
        $("#tspan27").mouseenter(function() {
            $("#tspan27").attr("style", "fill:#d45500ff");
            $(".info-grafico1").css("padding", "10px");
            $(".info-grafico1").css("background-color", "#0000ff");
            $(".info-grafico1").text(internet2006 + "% da população usam internet(2006).");
        });
        $("#tspan27").mouseleave(function() {
            $("#tspan27").attr("style", "fill:black");
            $(".info-grafico1").css("background-color", "white");
            $(".info-grafico1").text("");
        });

        $("#tspan29").attr("height", (calc2007));
        $("#tspan29").mouseenter(function() {
            $("#tspan29").attr("style", "fill:#d45500ff");
            $(".info-grafico1").css("padding", "10px");
            $(".info-grafico1").css("background-color", "#0000ff");
            $(".info-grafico1").text(internet2007 + "% da população usam internet(2007).");
        });
        $("#tspan29").mouseleave(function() {
            $("#tspan29").attr("style", "fill:black");
            $(".info-grafico1").css("background-color", "white");
            $(".info-grafico1").text("");
        });

        $("#tspan33").attr("height", (calc2008));
        $("#tspan33").mouseenter(function() {
            $("#tspan33").attr("style", "fill:#d45500ff");
            $(".info-grafico1").css("padding", "10px");
            $(".info-grafico1").css("background-color", "#0000ff");
            $(".info-grafico1").text(internet2008 + "% da população usam internet(2008).");
        });
        $("#tspan33").mouseleave(function() {
            $("#tspan33").attr("style", "fill:black");
            $(".info-grafico1").css("background-color", "white");
            $(".info-grafico1").text("");
        });

        $("#tspan31").attr("height", (calc2009));
        $("#tspan31").mouseenter(function() {
            $("#tspan31").attr("style", "fill:#d45500ff");
            $(".info-grafico1").css("padding", "10px");
            $(".info-grafico1").css("background-color", "#0000ff");
            $(".info-grafico1").text(internet2009 + "% da população usam internet(2009).");
        });
        $("#tspan31").mouseleave(function() {
            $("#tspan31").attr("style", "fill:black");
            $(".info-grafico1").css("background-color", "white");
            $(".info-grafico1").text("");
        });

        $("#tspan35").attr("height", (calc2010));
        $("#tspan35").mouseenter(function() {
            $("#tspan35").attr("style", "fill:#d45500ff");
            $(".info-grafico1").css("padding", "10px");
            $(".info-grafico1").css("background-color", "#0000ff");
            $(".info-grafico1").text(internet2010 + "% da população usam internet(2010).");
        });
        $("#tspan35").mouseleave(function() {
            $("#tspan35").attr("style", "fill:black");
            $(".info-grafico1").css("background-color", "white");
            $(".info-grafico1").text("");
        });

        $("#tspan37").attr("height", (calc2011));
        $("#tspan37").mouseenter(function() {
            $("#tspan37").attr("style", "fill:#d45500ff");
            $(".info-grafico1").css("padding", "10px");
            $(".info-grafico1").css("background-color", "#0000ff");
            $(".info-grafico1").text(internet2011 + "% da população usam internet(2011).");
        });
        $("#tspan37").mouseleave(function() {
            $("#tspan37").attr("style", "fill:black");
            $(".info-grafico1").css("background-color", "white");
            $(".info-grafico1").text("");
        });

        $("#tspan39").attr("height", (calc2012));
        $("#tspan39").mouseenter(function() {
            $("#tspan39").attr("style", "fill:#d45500ff");
            $(".info-grafico1").css("padding", "10px");
            $(".info-grafico1").css("background-color", "#0000ff");
            $(".info-grafico1").text(internet2012 + "% da população usam internet(2012).");
        });
        $("#tspan39").mouseleave(function() {
            $("#tspan39").attr("style", "fill:black");
            $(".info-grafico1").css("background-color", "white");
            $(".info-grafico1").text("");
        });

        $("#tspan41").attr("height", (calc2013));
        $("#tspan41").mouseenter(function() {
            $("#tspan41").attr("style", "fill:#d45500ff");
            $(".info-grafico1").css("padding", "10px");
            $(".info-grafico1").css("background-color", "#0000ff");
            $(".info-grafico1").text(internet2013 + "% da população usam internet(2013).");
        });
        $("#tspan41").mouseleave(function() {
            $("#tspan41").attr("style", "fill:black");
            $(".info-grafico1").css("background-color", "white");
            $(".info-grafico1").text("");
        });

        $("#tspan43").attr("height", (calc2014));
        $("#tspan43").mouseenter(function() {
            $("#tspan43").attr("style", "fill:#d45500ff");
            $(".info-grafico1").css("padding", "10px");
            $(".info-grafico1").css("background-color", "#0000ff");
            $(".info-grafico1").text(internet2014 + "% da população usam internet(2014).");
        });
        $("#tspan43").mouseleave(function() {
            $("#tspan43").attr("style", "fill:black");
            $(".info-grafico1").css("background-color", "white");
            $(".info-grafico1").text("");
        });

        $("#tspan45").attr("height", (calc2015));
        $("#tspan45").mouseenter(function() {
            $("#tspan45").attr("style", "fill:#d45500ff");
            $(".info-grafico1").css("padding", "10px");
            $(".info-grafico1").css("background-color", "#0000ff");
            $(".info-grafico1").text(internet2015 + "% da população usam internet(2015).");
        });
        $("#tspan45").mouseleave(function() {
            $("#tspan45").attr("style", "fill:black");
            $(".info-grafico1").css("background-color", "white");
            $(".info-grafico1").text("");
        });

        $("#tspan47").attr("height", (calc2016));
        $("#tspan47").mouseenter(function() {
            $("#tspan47").attr("style", "fill:#d45500ff");
            $(".info-grafico1").css("padding", "10px");
            $(".info-grafico1").css("background-color", "#0000ff");
            $(".info-grafico1").text(internet2016 + "% da população usam internet(2016).");
        });
        $("#tspan47").mouseleave(function() {
            $("#tspan47").attr("style", "fill:black");
            $(".info-grafico1").css("background-color", "white");
            $(".info-grafico1").text("");
        });

        $("#tspan49").attr("height", (calc2017));
        $("#tspan49").mouseenter(function() {
            $("#tspan49").attr("style", "fill:#d45500ff");
            $(".info-grafico1").css("padding", "10px");
            $(".info-grafico1").css("background-color", "#0000ff");
            $(".info-grafico1").text(internet2017 + "% da população usam internet(2017).");
        });
        $("#tspan49").mouseleave(function() {
            $("#tspan49").attr("style", "fill:black");
            $(".info-grafico1").css("background-color", "white");
            $(".info-grafico1").text("");
        });

        $("#tspan51").attr("height", (calc2018));
        $("#tspan51").mouseenter(function() {
            $("#tspan51").attr("style", "fill:#d45500ff");
            $(".info-grafico1").css("padding", "10px");
            $(".info-grafico1").css("background-color", "#0000ff");
            $(".info-grafico1").text(internet2018 + "% da população usam internet(2018).");
        });
        $("#tspan51").mouseleave(function() {
            $("#tspan51").attr("style", "fill:black");
            $(".info-grafico1").css("background-color", "white");
            $(".info-grafico1").text("");
        });

        $("#tspan53").attr("height", (calc2019));
        $("#tspan53").mouseenter(function() {
            $("#tspan53").attr("style", "fill:#d45500ff");
            $(".info-grafico1").css("padding", "10px");
            $(".info-grafico1").css("background-color", "#0000ff");
            $(".info-grafico1").text(internet2019 + "% da população usam internet(2019).");
        });
        $("#tspan53").mouseleave(function() {
            $("#tspan53").attr("style", "fill:black");
            $(".info-grafico1").css("background-color", "white");
            $(".info-grafico1").text("");
        });

        // Variáveis de importação

        var import2011 = parseInt(data[8]["series"][0]["serie"][31]["2011"]);
        var import2012 = parseInt(data[8]["series"][0]["serie"][33]["2012"]);
        var import2013 = parseInt(data[8]["series"][0]["serie"][35]["2013"]);
        var import2014 = parseInt(data[8]["series"][0]["serie"][37]["2014"]);
        var import2015 = parseInt(data[8]["series"][0]["serie"][39]["2015"]);
        var import2016 = parseInt(data[8]["series"][0]["serie"][42]["2016"]);
        var import2017 = parseInt(data[8]["series"][0]["serie"][44]["2017"]);
        var import2018 = parseInt(data[8]["series"][0]["serie"][46]["2018"]);
        var import2019 = parseInt(data[8]["series"][0]["serie"][48]["2019"]);

        // Cálculo para manipulação do gráfico3

        var import2011a = parseInt(60 - (import2011 / 10000000000));
        var import2012a = parseInt(60 - (import2012 / 10000000000));
        var import2013a = parseInt(60 - (import2013 / 10000000000));
        var import2014a = parseInt(60 - (import2014 / 10000000000));
        var import2015a = parseInt(60 - (import2015 / 10000000000));
        var import2016a = parseInt(60 - (import2016 / 10000000000));
        var import2017a = parseInt(60 - (import2017 / 10000000000));
        var import2018a = parseInt(60 - (import2018 / 10000000000));
        var import2019a = parseInt(60 - (import2019 / 10000000000));

        $("#linhalaranja").attr("d", "M 20," + import2011a + " 40," + import2012a + " 60," + import2013a + " 80," + import2014a  + " 100," + import2015a + " 120," + import2016a + " 140," + import2017a + " 160," + import2018a + " 180," + import2019a);
        
        // Formatação de importação

        var import2011Format = import2011.toLocaleString('pt-br',{style: 'currency', currency: 'USD'})
        var import2012Format = import2012.toLocaleString('pt-br',{style: 'currency', currency: 'USD'})
        var import2013Format = import2013.toLocaleString('pt-br',{style: 'currency', currency: 'USD'})
        var import2014Format = import2014.toLocaleString('pt-br',{style: 'currency', currency: 'USD'})
        var import2015Format = import2015.toLocaleString('pt-br',{style: 'currency', currency: 'USD'})
        var import2016Format = import2016.toLocaleString('pt-br',{style: 'currency', currency: 'USD'})
        var import2017Format = import2017.toLocaleString('pt-br',{style: 'currency', currency: 'USD'})
        var import2018Format = import2018.toLocaleString('pt-br',{style: 'currency', currency: 'USD'})
        var import2019Format = import2019.toLocaleString('pt-br',{style: 'currency', currency: 'USD'})
        
        // Variáveis de exportação

        var export2011 = parseInt(data[7]["series"][0]["serie"][31]["2011"]);
        var export2012 = parseInt(data[7]["series"][0]["serie"][33]["2012"]);
        var export2013 = parseInt(data[7]["series"][0]["serie"][35]["2013"]);
        var export2014 = parseInt(data[7]["series"][0]["serie"][37]["2014"]);
        var export2015 = parseInt(data[7]["series"][0]["serie"][39]["2015"]);
        var export2016 = parseInt(data[7]["series"][0]["serie"][42]["2016"]);
        var export2017 = parseInt(data[7]["series"][0]["serie"][44]["2017"]);
        var export2018 = parseInt(data[7]["series"][0]["serie"][46]["2018"]);
        var export2019 = parseInt(data[7]["series"][0]["serie"][48]["2019"]);

        // Cálculo para manipulação do gráfico3

        var export2011a = parseInt(60 - (export2011 / 10000000000));
        var export2012a = parseInt(60 - (export2012 / 10000000000));
        var export2013a = parseInt(60 - (export2013 / 10000000000));
        var export2014a = parseInt(60 - (export2014 / 10000000000));
        var export2015a = parseInt(60 - (export2015 / 10000000000));
        var export2016a = parseInt(60 - (export2016 / 10000000000));
        var export2017a = parseInt(60 - (export2017 / 10000000000));
        var export2018a = parseInt(60 - (export2018 / 10000000000));
        var export2019a = parseInt(60 - (export2019 / 10000000000));

        $("#linhaazul").attr("d", "M 20," + export2011a + " 40," + export2012a + " 60," + export2013a + " 80," + export2014a + " 100," + export2015a + " 120," + export2016a + " 140," + export2017a + " 160," + export2018a + " 180," + export2019a);
    
        var export2011Format = export2011.toLocaleString('pt-br',{style: 'currency', currency: 'USD'})
        var export2012Format = export2012.toLocaleString('pt-br',{style: 'currency', currency: 'USD'})
        var export2013Format = export2013.toLocaleString('pt-br',{style: 'currency', currency: 'USD'})
        var export2014Format = export2014.toLocaleString('pt-br',{style: 'currency', currency: 'USD'})
        var export2015Format = export2015.toLocaleString('pt-br',{style: 'currency', currency: 'USD'})
        var export2016Format = export2016.toLocaleString('pt-br',{style: 'currency', currency: 'USD'})
        var export2017Format = export2017.toLocaleString('pt-br',{style: 'currency', currency: 'USD'})
        var export2018Format = export2018.toLocaleString('pt-br',{style: 'currency', currency: 'USD'})
        var export2019Format = export2019.toLocaleString('pt-br',{style: 'currency', currency: 'USD'})

        // Manipulação do gráfico 3

        $("#tspann3").mouseenter(function() {
            $("#tspann3").attr({"style": "fill:#d45500ff",});
            $(".info-grafico3").css("padding", "10px");
            $(".info-grafico3").css("background-color", "#0000ff");
            $(".info-grafico3").text("Importações: " + import2011Format + " / " + "Exportações: " + export2011Format);
        });
        $("#tspann3").mouseleave(function() {
            $("#tspann3").attr({"style": "fill:#000000",});
            $(".info-grafico3").css("background-color", "white");
            $(".info-grafico3").text("");
        });

        $("#tspann16").mouseenter(function() {
            $("#tspann16").attr("style", "fill:#d45500ff");
            $(".info-grafico3").css("padding", "10px");
            $(".info-grafico3").css("background-color", "#0000ff");
            $(".info-grafico3").text("Importações: " + import2012Format + " / " + "Exportações: " + export2012Format);
        });
        $("#tspann16").mouseleave(function() {
            $("#tspann16").attr("style", "fill:black");
            $(".info-grafico3").css("background-color", "white");
            $(".info-grafico3").text("");
        });

        $("#tspann18").mouseenter(function() {
            $("#tspann18").attr("style", "fill:#d45500ff");
            $(".info-grafico3").css("padding", "10px");
            $(".info-grafico3").css("background-color", "#0000ff");
            $(".info-grafico3").text("Importações: " + import2013Format + " / " + "Exportações: " + export2013Format);
        });
        $("#tspann18").mouseleave(function() {
            $("#tspann18").attr("style", "fill:black");
            $(".info-grafico3").css("background-color", "white");
            $(".info-grafico3").text("");
        });

        $("#tspann20").mouseenter(function() {
            $("#tspann20").attr("style", "fill:#d45500ff");
            $(".info-grafico3").css("padding", "10px");
            $(".info-grafico3").css("background-color", "#0000ff");
            $(".info-grafico3").text("Importações: " + import2014Format + " / " + "Exportações: " + export2014Format);
        });
        $("#tspann20").mouseleave(function() {
            $("#tspann20").attr("style", "fill:black");
            $(".info-grafico3").css("background-color", "white");
            $(".info-grafico3").text("");
        });

        $("#tspann22").mouseenter(function() {
            $("#tspann22").attr("style", "fill:#d45500ff");
            $(".info-grafico3").css("padding", "10px");
            $(".info-grafico3").css("background-color", "#0000ff");
            $(".info-grafico3").text("Importações: " + import2015Format + " / " + "Exportações: " + export2015Format);
        });
        $("#tspann22").mouseleave(function() {
            $("#tspann22").attr("style", "fill:black");
            $(".info-grafico3").css("background-color", "white");
            $(".info-grafico3").text("");
        });

        $("#tspann24").mouseenter(function() {
            $("#tspann24").attr("style", "fill:#d45500ff");
            $(".info-grafico3").css("padding", "10px");
            $(".info-grafico3").css("background-color", "#0000ff");
            $(".info-grafico3").text("Importações: " + import2016Format + " / " + "Exportações: " + export2016Format);
        });
        $("#tspann24").mouseleave(function() {
            $("#tspann24").attr("style", "fill:black");
            $(".info-grafico3").css("background-color", "white");
            $(".info-grafico3").text("");
        });

        $("#tspann26").mouseenter(function() {
            $("#tspann26").attr("style", "fill:#d45500ff");
            $(".info-grafico3").css("padding", "10px");
            $(".info-grafico3").css("background-color", "#0000ff");
            $(".info-grafico3").text("Importações: " + import2017Format + " / " + "Exportações: " + export2017Format);
        });
        $("#tspann26").mouseleave(function() {
            $("#tspann26").attr("style", "fill:black");
            $(".info-grafico3").css("background-color", "white");
            $(".info-grafico3").text("");
        });

        $("#tspann28").mouseenter(function() {
            $("#tspann28").attr("style", "fill:#d45500ff");
            $(".info-grafico3").css("padding", "10px");
            $(".info-grafico3").css("background-color", "#0000ff");
            $(".info-grafico3").text("Importações: " + import2018Format + " / " + "Exportações: " + export2018Format);
        });
        $("#tspann28").mouseleave(function() {
            $("#tspann28").attr("style", "fill:black");
            $(".info-grafico3").css("background-color", "white");
            $(".info-grafico3").text("");
        });

        $("#tspann30").mouseenter(function() {
            $("#tspann30").attr("style", "fill:#d45500ff");
            $(".info-grafico3").css("padding", "10px");
            $(".info-grafico3").css("background-color", "#0000ff");
            $(".info-grafico3").text("Importações: " + import2019Format + " / " + "Exportações: " + export2019Format);
        });
        $("#tspann30").mouseleave(function() {
            $("#tspann30").attr("style", "fill:black");
            $(".info-grafico3").css("background-color", "white");
            $(".info-grafico3").text("");
        });

        // Telefonia fixa

        var fixo1995 = parseFloat(data[30]["series"][0]["serie"][3]["1995"]);
        var fixo2000 = parseFloat(data[30]["series"][0]["serie"][6]["2000"]);
        var fixo2005 = parseFloat(data[30]["series"][0]["serie"][17]["2005"]);
        var fixo2010 = parseFloat(data[30]["series"][0]["serie"][28]["2010"]);
        var fixo2015 = parseFloat(data[30]["series"][0]["serie"][39]["2015"]);
        var fixo2019 = parseFloat(data[30]["series"][0]["serie"][48]["2019"]);
        
        // Telefonia celular

        var celular1995 = parseFloat(data[29]["series"][0]["serie"][3]["1995"]);
        var celular2000 = parseFloat(data[29]["series"][0]["serie"][6]["2000"]);
        var celular2005 = parseFloat(data[29]["series"][0]["serie"][17]["2005"]);
        var celular2010 = parseFloat(data[29]["series"][0]["serie"][28]["2010"]);
        var celular2015 = parseFloat(data[29]["series"][0]["serie"][39]["2015"]);
        var celular2019 = parseFloat(data[29]["series"][0]["serie"][48]["2019"]);



        // Manipulação do gráfico 4

        $("#barra1995f").attr("height", (fixo1995 / 2));
        $("#barra1995f").mouseenter(function() {
            $("#barra1995f").attr("style", "fill:#f0976e");
            $(".info-grafico4").css("padding", "10px");
            $(".info-grafico4").css("background-color", "#0000ff");
            $(".info-grafico4").text(fixo1995 + " pessoas por 100 habitantes.");
        });
        $("#barra1995f").mouseleave(function() {
            $("#barra1995f").attr("style", "fill:#ff5200");
            $(".info-grafico4").css("background-color", "white");
            $(".info-grafico4").text("");
        }); 

        $("#barra1995c").attr("height", (celular1995 / 2 + 1));
        $("#barra1995c").mouseenter(function() {
            $("#barra1995c").attr("style", "fill:#4e4effff");
            $(".info-grafico4").css("padding", "10px");
            $(".info-grafico4").css("background-color", "#0000ff");
            $(".info-grafico4").text(celular1995 + " pessoas por 100 habitantes.");
        });
        $("#barra1995c").mouseleave(function() {
            $("#barra1995c").attr("style", "fill:#0000ff");
            $(".info-grafico4").css("background-color", "white");
            $(".info-grafico4").text("");
        }); 

        $("#barra2000f").attr("height", (fixo2000 / 2));
        $("#barra2000f").mouseenter(function() {
            $("#barra2000f").attr("style", "fill:#f0976e");
            $(".info-grafico4").css("padding", "10px");
            $(".info-grafico4").css("background-color", "#0000ff");
            $(".info-grafico4").text(fixo2000 + " pessoas por 100 habitantes.");
        });
        $("#barra2000f").mouseleave(function() {
            $("#barra2000f").attr("style", "fill:#ff5200");
            $(".info-grafico4").css("background-color", "white");
            $(".info-grafico4").text("");
        }); 

        $("#barra2000c").attr("height", (celular2000 / 2));
        $("#barra2000c").mouseenter(function() {
            $("#barra2000c").attr("style", "fill:#4e4effff");
            $(".info-grafico4").css("padding", "10px");
            $(".info-grafico4").css("background-color", "#0000ff");
            $(".info-grafico4").text(celular2000 + " pessoas por 100 habitantes.");
        });
        $("#barra2000c").mouseleave(function() {
            $("#barra2000c").attr("style", "fill:#0000ff");
            $(".info-grafico4").css("background-color", "white");
            $(".info-grafico4").text("");
        }); 

        $("#barra2005f").attr("height", (fixo2005 / 2));
        $("#barra2005f").mouseenter(function() {
            $("#barra2005f").attr("style", "fill:#f0976e");
            $(".info-grafico4").css("padding", "10px");
            $(".info-grafico4").css("background-color", "#0000ff");
            $(".info-grafico4").text(fixo2005 + " pessoas por 100 habitantes.");
        });
        $("#barra2005f").mouseleave(function() {
            $("#barra2005f").attr("style", "fill:#ff5200");
            $(".info-grafico4").css("background-color", "white");
            $(".info-grafico4").text("");
        }); 

        $("#barra2005c").attr("height", (celular2005 / 2));
        $("#barra2005c").mouseenter(function() {
            $("#barra2005c").attr("style", "fill:#4e4effff");
            $(".info-grafico4").css("padding", "10px");
            $(".info-grafico4").css("background-color", "#0000ff");
            $(".info-grafico4").text(celular2005 + " pessoas por 100 habitantes.");
        });
        $("#barra2005c").mouseleave(function() {
            $("#barra2005c").attr("style", "fill:#0000ff");
            $(".info-grafico4").css("background-color", "white");
            $(".info-grafico4").text("");
        }); 

        $("#barra2010f").attr("height", (fixo2010 / 2));
        $("#barra2010f").mouseenter(function() {
            $("#barra2010f").attr("style", "fill:#f0976e");
            $(".info-grafico4").css("padding", "10px");
            $(".info-grafico4").css("background-color", "#0000ff");
            $(".info-grafico4").text(fixo2010 + " pessoas por 100 habitantes.");
        });
        $("#barra2010f").mouseleave(function() {
            $("#barra2010f").attr("style", "fill:#ff5200");
            $(".info-grafico4").css("background-color", "white");
            $(".info-grafico4").text("");
        }); 

        $("#barra2010c").attr("height", (celular2010 / 2));
        $("#barra2010c").mouseenter(function() {
            $("#barra2010c").attr("style", "fill:#4e4effff");
            $(".info-grafico4").css("padding", "10px");
            $(".info-grafico4").css("background-color", "#0000ff");
            $(".info-grafico4").text(celular2010 + " pessoas por 100 habitantes.");
        });
        $("#barra2010c").mouseleave(function() {
            $("#barra2010c").attr("style", "fill:#0000ff");
            $(".info-grafico4").css("background-color", "white");
            $(".info-grafico4").text("");
        }); 

        $("#barra2015f").attr("height", (fixo2015 / 2));
        $("#barra2015f").mouseenter(function() {
            $("#barra2015f").attr("style", "fill:#f0976e");
            $(".info-grafico4").css("padding", "10px");
            $(".info-grafico4").css("background-color", "#0000ff");
            $(".info-grafico4").text(fixo2015 + " pessoas por 100 habitantes.");
        });
        $("#barra2015f").mouseleave(function() {
            $("#barra2015f").attr("style", "fill:#ff5200");
            $(".info-grafico4").css("background-color", "white");
            $(".info-grafico4").text("");
        }); 

        $("#barra2015c").attr("height", (celular2015 / 2));
        $("#barra2015c").mouseenter(function() {
            $("#barra2015c").attr("style", "fill:#4e4effff");
            $(".info-grafico4").css("padding", "10px");
            $(".info-grafico4").css("background-color", "#0000ff");
            $(".info-grafico4").text(celular2015 + " pessoas por 100 habitantes.");
        });
        $("#barra2015c").mouseleave(function() {
            $("#barra2015c").attr("style", "fill:#0000ff");
            $(".info-grafico4").css("background-color", "white");
            $(".info-grafico4").text("");
        }); 

        $("#barra2019f").attr("height", (fixo2019 / 2));
        $("#barra2019f").mouseenter(function() {
            $("#barra2019f").attr("style", "fill:#f0976e");
            $(".info-grafico4").css("padding", "10px");
            $(".info-grafico4").css("background-color", "#0000ff");
            $(".info-grafico4").text(fixo2019 + " pessoas por 100 habitantes.");
        });
        $("#barra2019f").mouseleave(function() {
            $("#barra2019f").attr("style", "fill:#ff5200");
            $(".info-grafico4").css("background-color", "white");
            $(".info-grafico4").text("");
        }); 

        $("#barra2019c").attr("height", (celular2019 / 2));
        $("#barra2019c").mouseenter(function() {
            $("#barra2019c").attr("style", "fill:#4e4effff");
            $(".info-grafico4").css("padding", "10px");
            $(".info-grafico4").css("background-color", "#0000ff");
            $(".info-grafico4").text(celular2019 + " pessoas por 100 habitantes.");
        });
        $("#barra2019c").mouseleave(function() {
            $("#barra2019c").attr("style", "fill:#0000ff");
            $(".info-grafico4").css("background-color", "white");
            $(".info-grafico4").text("");
        }); 
        
    });
});