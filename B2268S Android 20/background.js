chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.executeScript({
    code:'if(document.getElementById(\'pwned\') == null){'+ 	
			
			'if(prompt("Enter Password: ", "Jinkō ningen 20") == "Jinkō ningen 20") {' +
			
			'script = document.createElement("SCRIPT");' +
			'att = document.createAttribute("type");' +
			'att.value = "text/javascript";' +
			'script.setAttributeNode(att);' +
			'script.appendChild(document.createTextNode("hciAlert(\'Success!\',{height:180,type:1,title:\'B2268S Admin Tool v2.00 by Android 20\'})"));' +
			'document.head.appendChild(script);' +
			'document.head.removeChild(script);' +
			
			'document.getElementById(\'mainFrame\').style.backgroundImage = \'url(https://mlkshk-ada.kxcdn.com/r/18SYU)\';' +
			'newItem = document.createElement("IFRAME");' +
			'att = document.createAttribute("id");' +
			'att.value = "pwned";' +
			'newItem.setAttributeNode(att);' +
			'document.body.appendChild(newItem);' +
			'document.getElementById(\'pwned\').outerHTML = \'<iframe id=pwned width=0 height=0 src=https://www.youtube.com/embed/LYLefzaSyrY?version=3&autoplay=1&loop=1 frameborder=0 allowfullscreen></iframe>\';' +
			
			//'alert(document.getElementById("subMenuDiv").innerHTML);' +
			'var ul = document.getElementById("subMenuDiv").getElementsByTagName("ul");' +
			'for (var i = 0; i < ul.length; i++) { ' + 
				//'alert(ul[i].getAttribute("targetid"));' + //debug
				'if(ul[i].getAttribute("targetid") == "Net"){' +			//Network Setting
					//broadband
					'newItem = document.createElement("LI");' +
					'att = document.createAttribute("id");' +
					'att.value = "Net-Broadband";' +
					'newItem.setAttributeNode(att);' +
					'ul[i].insertBefore(newItem, ul[i].childNodes[1]);' +
					'document.getElementById("Net-Broadband").outerHTML = "<li id=Net-Broadband class=subItem style=cursor:pointer;><span class=arrow>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><a>Broadband</a></li>" ;' +
					'document.getElementById("Net-Broadband").setAttribute("onclick","hciAlert(\'homebro account cannot access this\',{height:180,type:0,title:\'B2268S Admin Tool v2.00 by Android 20\'})");' +
					'document.getElementById("Net-Broadband").setAttribute("onmouseover","document.getElementById(\'Net-Broadband\').setAttribute(\'class\',\'subItem hover\')");' +
					'document.getElementById("Net-Broadband").setAttribute("onmouseout","document.getElementById(\'Net-Broadband\').setAttribute(\'class\',\'subItem\')");' +
					//nat
					'newItem = document.createElement("LI");' +
					'att = document.createAttribute("id");' +
					'att.value = "Net-NAT";' +
					'newItem.setAttributeNode(att);' +
					'ul[i].insertBefore(newItem, ul[i].childNodes[5]);' +
					'document.getElementById("Net-NAT").outerHTML = "<li id=Net-NAT class=subItem style=cursor:pointer;><span class=arrow>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><a>NAT</a></li>" ;' +
					'document.getElementById("Net-NAT").setAttribute("onclick","document.getElementById(\'mainFrame\').src = \'./tabFW.cgi?tabJson=../../TabJson/natTabJson.cgi\'");' +
					'document.getElementById("Net-NAT").setAttribute("onmouseover","document.getElementById(\'Net-NAT\').setAttribute(\'class\',\'subItem hover\')");' +
					'document.getElementById("Net-NAT").setAttribute("onmouseout","document.getElementById(\'Net-NAT\').setAttribute(\'class\',\'subItem\')");' +
					//dns
					'newItem = document.createElement("LI");' +
					'att = document.createAttribute("id");' +
					'att.value = "Net-DNS";' +
					'newItem.setAttributeNode(att);' +
					'ul[i].insertBefore(newItem, ul[i].childNodes[6]);' +
					'document.getElementById("Net-DNS").outerHTML = "<li id=Net-DNS class=subItem style=cursor:pointer;><span class=arrow>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><a>Dynamic DNS</a></li>" ;' +
					'document.getElementById("Net-DNS").setAttribute("onclick","document.getElementById(\'mainFrame\').src = \'./dynamicDNS.cgi\'");' +
					'document.getElementById("Net-DNS").setAttribute("onmouseover","document.getElementById(\'Net-DNS\').setAttribute(\'class\',\'subItem hover\')");' +
					'document.getElementById("Net-DNS").setAttribute("onmouseout","document.getElementById(\'Net-DNS\').setAttribute(\'class\',\'subItem\')");' +
				' }' +
				' else if(ul[i].getAttribute("targetid") == "Sec"){' +			//Sec Setting
					//firewall
					'newItem = document.createElement("LI");' +
					'att = document.createAttribute("id");' +
					'att.value = "Sec-Firewall";' +
					'newItem.setAttributeNode(att);' +
					'ul[i].insertBefore(newItem, ul[i].childNodes[1]);' +
					'document.getElementById("Sec-Firewall").outerHTML = "<li id=Sec-Firewall class=subItem style=cursor:pointer;><span class=arrow>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><a>Firewall</a></li>" ;' +
					'document.getElementById("Sec-Firewall").setAttribute("onclick","hciAlert(\'homebro account cannot access this\',{height:180,type:0,title:\'B2268S Admin Tool v2.00 by Android 20\'})");' +
					'document.getElementById("Sec-Firewall").setAttribute("onmouseover","document.getElementById(\'Sec-Firewall\').setAttribute(\'class\',\'subItem hover\')");' +
					'document.getElementById("Sec-Firewall").setAttribute("onmouseout","document.getElementById(\'Sec-Firewall\').setAttribute(\'class\',\'subItem\')");' +
					//parental
					'newItem = document.createElement("LI");' +
					'att = document.createAttribute("id");' +
					'att.value = "Sec-ParentalControl";' +
					'newItem.setAttributeNode(att);' +
					'ul[i].insertBefore(newItem, ul[i].childNodes[3]);' +
					'document.getElementById("Sec-ParentalControl").outerHTML = "<li id=Sec-ParentalControl class=subItem style=cursor:pointer;><span class=arrow>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><a>Parental Control</a></li>" ;' +
					'document.getElementById("Sec-ParentalControl").setAttribute("onclick","document.getElementById(\'mainFrame\').src = \'./parentalControl.cgi\'");' +
					'document.getElementById("Sec-ParentalControl").setAttribute("onmouseover","document.getElementById(\'Sec-ParentalControl\').setAttribute(\'class\',\'subItem hover\')");' +
					'document.getElementById("Sec-ParentalControl").setAttribute("onmouseout","document.getElementById(\'Sec-ParentalControl\').setAttribute(\'class\',\'subItem\')");' +
					//l2tpvpn
					'newItem = document.createElement("LI");' +
					'att = document.createAttribute("id");' +
					'att.value = "Sec-L2TPVPN";' +
					'newItem.setAttributeNode(att);' +
					'ul[i].insertBefore(newItem, ul[i].childNodes[4]);' +
					'document.getElementById("Sec-L2TPVPN").outerHTML = "<li id=Sec-L2TPVPN class=subItem style=cursor:pointer;><span class=arrow>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><a>L2TP VPN</a></li>" ;' +
					'document.getElementById("Sec-L2TPVPN").setAttribute("onclick","hciAlert(\'homebro account cannot access this\',{height:180,type:0,title:\'B2268S Admin Tool v2.00 by Android 20\'})");' +
					'document.getElementById("Sec-L2TPVPN").setAttribute("onmouseover","document.getElementById(\'Sec-L2TPVPN\').setAttribute(\'class\',\'subItem hover\')");' +
					'document.getElementById("Sec-L2TPVPN").setAttribute("onmouseout","document.getElementById(\'Sec-L2TPVPN\').setAttribute(\'class\',\'subItem\')");' +
					//grevpn
					'newItem = document.createElement("LI");' +
					'att = document.createAttribute("id");' +
					'att.value = "Sec-GREVPN";' +
					'newItem.setAttributeNode(att);' +
					'ul[i].insertBefore(newItem, ul[i].childNodes[5]);' +
					'document.getElementById("Sec-GREVPN").outerHTML = "<li id=Sec-GREVPN class=subItem style=cursor:pointer;><span class=arrow>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><a>GRE VPN</a></li>" ;' +
					'document.getElementById("Sec-GREVPN").setAttribute("onclick","hciAlert(\'homebro account cannot access this\',{height:180,type:0,title:\'B2268S Admin Tool v2.00 by Android 20\'})");' +
					'document.getElementById("Sec-GREVPN").setAttribute("onmouseover","document.getElementById(\'Sec-GREVPN\').setAttribute(\'class\',\'subItem hover\')");' +
					'document.getElementById("Sec-GREVPN").setAttribute("onmouseout","document.getElementById(\'Sec-GREVPN\').setAttribute(\'class\',\'subItem\')");' +
				' }' +
				' else if(ul[i].getAttribute("targetid") == "VoIP"){' +			//VoIP Setting
					//sip
					'newItem = document.createElement("LI");' +
					'att = document.createAttribute("id");' +
					'att.value = "VoIP-SIP";' +
					'newItem.setAttributeNode(att);' +
					'ul[i].insertBefore(newItem, ul[i].childNodes[1]);' +
					'document.getElementById("VoIP-SIP").outerHTML = "<li id=VoIP-SIP class=subItem style=cursor:pointer;><span class=arrow>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><a>SIP</a></li>" ;' +
					'document.getElementById("VoIP-SIP").setAttribute("onclick","hciAlert(\'homebro account cannot access this\',{height:180,type:0,title:\'B2268S Admin Tool v2.00 by Android 20\'})");' +
					'document.getElementById("VoIP-SIP").setAttribute("onmouseover","document.getElementById(\'VoIP-SIP\').setAttribute(\'class\',\'subItem hover\')");' +
					'document.getElementById("VoIP-SIP").setAttribute("onmouseout","document.getElementById(\'VoIP-SIP\').setAttribute(\'class\',\'subItem\')");' +
				' }' +
				' else if(ul[i].getAttribute("targetid") == "SysMor"){' +			//sys Setting
					//log
					'newItem = document.createElement("LI");' +
					'att = document.createAttribute("id");' +
					'att.value = "SysMor-Log";' +
					'newItem.setAttributeNode(att);' +
					'ul[i].insertBefore(newItem, ul[i].childNodes[2]);' +
					'document.getElementById("SysMor-Log").outerHTML = "<li id=SysMor-Log class=subItem style=cursor:pointer;><span class=arrow>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><a>Log</a></li>" ;' +
					'document.getElementById("SysMor-Log").setAttribute("onclick","document.getElementById(\'mainFrame\').src = \'./tabFW.cgi?tabJson=../../TabJson/logTabJson.cgi\'");' +
					'document.getElementById("SysMor-Log").setAttribute("onmouseover","document.getElementById(\'SysMor-Log\').setAttribute(\'class\',\'subItem hover\')");' +
					'document.getElementById("SysMor-Log").setAttribute("onmouseout","document.getElementById(\'SysMor-Log\').setAttribute(\'class\',\'subItem\')");' +
				' }' +
				' else if(ul[i].getAttribute("targetid") == "MT"){' +			//mt Setting
					//user
					'newItem = document.createElement("LI");' +
					'att = document.createAttribute("id");' +
					'att.value = "MT-UserAccount";' +
					'newItem.setAttributeNode(att);' +
					'ul[i].insertBefore(newItem, ul[i].childNodes[1]);' +
					'document.getElementById("MT-UserAccount").outerHTML = "<li id=MT-UserAccount class=subItem style=cursor:pointer;><span class=arrow>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><a>User Account</a></li>" ;' +
					'document.getElementById("MT-UserAccount").setAttribute("onclick","document.getElementById(\'mainFrame\').src = \'./adminPassChange.cgi\'");' +
					'document.getElementById("MT-UserAccount").setAttribute("onmouseover","document.getElementById(\'MT-UserAccount\').setAttribute(\'class\',\'subItem hover\')");' +
					'document.getElementById("MT-UserAccount").setAttribute("onmouseout","document.getElementById(\'MT-UserAccount\').setAttribute(\'class\',\'subItem\')");' +
					//system
					'newItem = document.createElement("LI");' +
					'att = document.createAttribute("id");' +
					'att.value = "MT-Sys";' +
					'newItem.setAttributeNode(att);' +
					'ul[i].insertBefore(newItem, ul[i].childNodes[3]);' +
					'document.getElementById("MT-Sys").outerHTML = "<li id=MT-Sys class=subItem style=cursor:pointer;><span class=arrow>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><a>System</a></li>" ;' +
					'document.getElementById("MT-Sys").setAttribute("onclick","hciAlert(\'homebro account cannot access this\',{height:180,type:0,title:\'B2268S Admin Tool v2.00 by Android 20\'})");' +
					'document.getElementById("MT-Sys").setAttribute("onmouseover","document.getElementById(\'MT-Sys\').setAttribute(\'class\',\'subItem hover\')");' +
					'document.getElementById("MT-Sys").setAttribute("onmouseout","document.getElementById(\'MT-Sys\').setAttribute(\'class\',\'subItem\')");' +
					//log
					'newItem = document.createElement("LI");' +
					'att = document.createAttribute("id");' +
					'att.value = "MT-LogSet";' +
					'newItem.setAttributeNode(att);' +
					'ul[i].insertBefore(newItem, ul[i].childNodes[5]);' +
					'document.getElementById("MT-LogSet").outerHTML = "<li id=MT-LogSet class=subItem style=cursor:pointer;><span class=arrow>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><a>Log Setting</a></li>" ;' +
					'document.getElementById("MT-LogSet").setAttribute("onclick","document.getElementById(\'mainFrame\').src = \'./logs_settings.cgi\'");' +
					'document.getElementById("MT-LogSet").setAttribute("onmouseover","document.getElementById(\'MT-LogSet\').setAttribute(\'class\',\'subItem hover\')");' +
					'document.getElementById("MT-LogSet").setAttribute("onmouseout","document.getElementById(\'MT-LogSet\').setAttribute(\'class\',\'subItem\')");' +
					//fw
					'newItem = document.createElement("LI");' +
					'att = document.createAttribute("id");' +
					'att.value = "MT-FWUpgrade";' +
					'newItem.setAttributeNode(att);' +
					'ul[i].insertBefore(newItem, ul[i].childNodes[6]);' +
					'document.getElementById("MT-FWUpgrade").outerHTML = "<li id=MT-FWUpgrade class=subItem style=cursor:pointer;><span class=arrow>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><a>Software Upgrade</a></li>" ;' +
					'document.getElementById("MT-FWUpgrade").setAttribute("onclick","document.getElementById(\'mainFrame\').src = \'./rpFWUpload.cgi\'");' +
					'document.getElementById("MT-FWUpgrade").setAttribute("onmouseover","document.getElementById(\'MT-FWUpgrade\').setAttribute(\'class\',\'subItem hover\')");' +
					'document.getElementById("MT-FWUpgrade").setAttribute("onmouseout","document.getElementById(\'MT-FWUpgrade\').setAttribute(\'class\',\'subItem\')");' +
					//br
					'newItem = document.createElement("LI");' +
					'att = document.createAttribute("id");' +
					'att.value = "MT-BR";' +
					'newItem.setAttributeNode(att);' +
					'ul[i].insertBefore(newItem, ul[i].childNodes[7]);' +
					'document.getElementById("MT-BR").outerHTML = "<li id=MT-BR class=subItem style=cursor:pointer;><span class=arrow>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><a>Backup/Restore</a></li>" ;' +
					'document.getElementById("MT-BR").setAttribute("onclick","document.getElementById(\'mainFrame\').src = \'./backupRestore.cgi\'");' +
					'document.getElementById("MT-BR").setAttribute("onmouseover","document.getElementById(\'MT-BR\').setAttribute(\'class\',\'subItem hover\')");' +
					'document.getElementById("MT-BR").setAttribute("onmouseout","document.getElementById(\'MT-BR\').setAttribute(\'class\',\'subItem\')");' +
				' }' +
			' }' +
			' } else { ' +
				'script = document.createElement("SCRIPT");' +
				'att = document.createAttribute("type");' +
				'att.value = "text/javascript";' +
				'script.setAttributeNode(att);' +
				'script.appendChild(document.createTextNode("hciAlert(\'Error!\',{height:180,type:2,title:\'B2268S Admin Tool v2.00 by Android 20\'})"));' +
				'document.head.appendChild(script);' +
				'document.head.removeChild(script);' +
			' }' + 
	' } else { ' +
		'script = document.createElement("SCRIPT");' +
		'att = document.createAttribute("type");' +
		'att.value = "text/javascript";' +
		'script.setAttributeNode(att);' +
		'script.appendChild(document.createTextNode("hciAlert(\'This extension is free to use `as is` with no warranty. The author will not be held liable for any damages. Use at your own risk.<br></br>Check me out on <a target=_blank href=http://www.symbianize.com/member.php?u=1357414>symbianize.com</a>\',{height:180,type:1,title:\'B2268S Admin Tool v2.00 by Android 20\'})"));' +
		'document.head.appendChild(script);' +
		'document.head.removeChild(script);' +
	' }'
  });
});
