//function initNavList() 
  //{
  
  max = 21;
  navList = new Array(max);
  navList[0] = max;
  
  	for (var i=1; i<max; i++) 
  	{
  		navList[i] = new Array(2);
  		navList[i][0] = 0;
  		navList[i][1] = 0;
  	}
  
  	navList[1][0] = "xlogo";
  
  	navList[2][0] = "daiquiri";		navList[2][1] = "big";
  	navList[3][0] = "gatherings";		navList[3][1] = "big";
  	navList[4][0] = "who";  		navList[4][1] = "big";
  	navList[5][0] = "interviews";		navList[5][1] = "big";
  	navList[6][0] = "culled";		navList[6][1] = "big";
  	navList[7][0] = "xreports";		navList[7][1] = "big";
  	navList[8][0] = "web";  		navList[8][1] = "big";
  	navList[9][0] = "faqs";			navList[9][1] = "big";
  
  	navList[10][0] = "rel"; 		navList[10][1] = "small";
  	navList[11][0] = "tan"; 		navList[11][1] = "small";
  	navList[12][0] = "merch";		navList[12][1] = "small";
  	navList[13][0] = "admin";		navList[13][1] = "small";
  	navList[14][0] = "quotewar";		navList[14][1] = "small";
  
  	navList[15][0] = "brisxf";		navList[15][1] = "big";
  	navList[16][0] = "melbxf";		navList[16][1] = "big";
  	navList[17][0] = "sydxf";		navList[17][1] = "big";
  	navList[18][0] = "otherxf";		navList[18][1] = "big";
  
  	navList[19][0] = "email";		navList[19][1] = "small";
  	navList[20][0] = "new"; 		navList[20][1] = "small";
  //}
  
  //function preLoad()
  //{
  	if (document.images) 
  	{
  
  		for (var i=2; i<max; i++) 
  		{
  			eval("bigCal" + i + "on = new Image(20,20)");
  			eval(navList[i][0] + "_text_normal = new Image()");
  			eval(navList[i][0] + "_text_normal.src = \"images_nav/text-" + navList[i][0] + ".gif\"");
  			eval(navList[i][0] + "_text_over = new Image()");
  			eval(navList[i][0] + "_text_over.src = \"images_nav/text-" + navList[i][0] + "_over.gif\"");
  			eval(navList[i][0] + "_text_click = new Image()");
  			eval(navList[i][0] + "_text_click.src = \"images_nav/text-" + navList[i][0] + "_onClick.gif\"");
  
  			eval(navList[i][0] + "_button_normal = new Image()");
  			eval(navList[i][0] + "_button_normal.src = \"images_nav/button-" + navList[i][1] + ".gif\"");
  			eval(navList[i][0] + "_button_over = new Image()");
  			eval(navList[i][0] + "_button_over.src = \"images_nav/button-" + navList[i][1] + "_over.gif\"");
  			eval(navList[i][0] + "_button_click = new Image()");
  			eval(navList[i][0] + "_button_click.src = \"images_nav/button-" + navList[i][1] + "_onClick.gif\"");
  		}
  
  // xlogo image objects
  
              xlogo_normal = new Image();
              xlogo_normal.src="images_nav/text-xlogo.gif";
              xlogo_over = new Image();         
              xlogo_over.src="images_nav/text-xlogo_over.gif";
              xlogo_click = new Image();
              xlogo_click.src="images_nav/text-xlogo_onClick.gif";
          }
  //}
  
  // Function for mouseover images.
  
  function imgOver(groupName)
  {
  	if (document.images)
  	{
  		document[groupName+"_text"].src  = eval(groupName + "_text_over.src");
  		document[groupName+"_button"].src  = eval(groupName + "_button_over.src");
  
  	}
  }
  
  function imgDown(groupName)
  {
  	if (document.images)
  	{
  		document[groupName+"_text"].src  = eval(groupName + "_text_click.src");
  		document[groupName+"_button"].src  = eval(groupName + "_button_click.src");
  	}
  }
  
  function imgNormal(groupName)
  {
  	if (document.images)
  	{
  		document[groupName+"_text"].src  = eval(groupName + "_text_normal.src");
  		document[groupName+"_button"].src  = eval(groupName + "_button_normal.src");
  	}
  }
  
  
  function singleOver(groupName)
  {
  	if (document.images)
  	{
  		document[groupName].src  = eval(groupName + "_over.src");
  
  	}
  }
  
  function singleDown(groupName)
  {
  	if (document.images)
  	{
  		document[groupName].src  = eval(groupName + "_click.src");
  	}
  }
  
  function singleNormal(groupName)
  {
  	if (document.images)
  	{
  		document[groupName].src  = eval(groupName + "_normal.src");
  	}
  }
  
  function statusMessage(text) 
  {
  	window.status = text;
  	setTimeout("clear()",5000);
  }
  
  function clear() 
  {
  	window.status="";
  }