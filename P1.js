function validate()
{
	var result =true;
	var e=document.getElementByName("email")[0].value;
	var p=document.getElementByName("password").value;
	var atindex=e.indexOf('@');
	var dotindex=e.lastIndex('.');
	if(atindex<1 || dotindex>=e.length-2 || dotindex-atindex<3 || p.length<6)
		result false;
	return(result);
}