javascript: u='username'; p='password'; window.location.href = "http://www.abv.bg"; setTimeout( function() { try{ document.getElementById('LoginForm_Password').value=p; document.getElementById('LoginForm_Submit').click(); } catch( e ) { document.getElementsByName('LoginForm_Login')[0].value=u; document.getElementsByName('LoginForm_Password')[0].value=p; document.getElementsByName('LoginForm')[0].submit(); } }, 5000); void(0);
