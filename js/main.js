var e = "[[b;#44D544;]root]&#64;huntergregal&#46;com";
var App = {
    echo: function(text) {
        this.echo(text);

        if(ga != undefined) ga('send', 'event', 'echo', 'text', text);
    },
    help: function() {
      showHelp(this);

        if(ga != undefined) ga('send', 'event', 'help');
    },

        ls: function() {
            this.echo('CLASSIFIED.tar.gz');
            this.echo('hgregal_Private.pgp');
            this.echo('huntergregal.pem');
            this.echo('passwords.txt');
            this.echo('theSecretToLife.txt');
        if(ga != undefined) ga('send', 'event', 'ls');
    },
    whoami: function() {
        this.echo("root"); 

        if(ga != undefined) ga('send', 'event', 'whoami');
    },
       blog: function() {
        if(ga != undefined) ga('send', 'event', 'blog');
        this.echo("Loading the blog... Wait a sec ...")
        setTimeout(function(){ document.location.href = 'http://blog.huntergregal.com'; }, 1000);
    },
        publicPGPkey: function() {
        showPGP(this);
        if(ga != undefined) ga('send', 'event', 'publicPGPkey');
    },
        donate: function() {
        this.echo("\nIf you're feeling generous: [[b;#44D544;]12TT6m7yQHA3Ax272vybYTL6dEdcANZxwv] \n ")
        if(ga != undefined) ga('send', 'event', 'tip');
    },
        su: function(user) {
        this.echo("Not today, "+user)
        if(ga != undefined) ga('send', 'event', 'su');
    },
    sudo: function(x) {
        this.echo("\x90")
        if(ga != undefined) ga('send', 'event', 'sudo');
    },
    www: function() {
        this.echo("This page built with <a href='http://terminal.jcubic.pl/' target='_blank'>jQuery Terminal Emulator</a> plugin, and hosted by <a href='http://pages.github.com' target='_blank'>GitHub Pages<a/>.", {raw:true});
        if(ga != undefined) ga('send', 'event', 'www');
    },
    id: function(){
        this.echo("uid=0(root) gid=0(root) groups=0(root)");
        if(ga != undefined) ga('send', 'event', 'id','id');
    },
    shutdown: function() {
        this.error('SYSTEM HALT!');
        setTimeout(function(){ document.location.href = 'http://huntergregal.com'; }, 2500);
        if(ga != undefined) ga('send', 'event', 'shutdown');
    },
    env: function() {
        this.echo("[[b;#44D544;]NAME=HunterGregal\nTITLE=SecurityResearcher;Student\nBLOG=http://blog.huntergregal.com\nGITHUB=https://github.com/huntergregal\nTWITTER=@huntergregal\n_=/usr/bin/env]");
        if(ga != undefined) ga('send', 'event', 'env');
    },
    cv: function() {
        this.echo("Loading my resume");
        setTimeout(function(){ document.location.href = 'http://huntergregal.com/HunterGregalResume.pdf'; }, 1000);
        if(ga != undefined) ga('send', 'event', 'env');
    },
    oldsite: function() {
        this.echo("Loading my old site...");
        setTimeout(function(){ document.location.href = 'http://huntergregal.com/oldsite'; }, 1000);
        if(ga != undefined) ga('send', 'event', 'env');
    },
    github: function() {
        this.echo("Loading my github...");
        setTimeout(function(){ document.location.href = 'https://github.com/huntergregal'; }, 1000);
        if(ga != undefined) ga('send', 'event', 'env');
    }
}

window.mobileAndTabletcheck = function() {
  var check = false;
  (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4)))check = true})(navigator.userAgent||navigator.vendor||window.opera);
  return check;
}

jQuery(document).ready(function($) {
    
     
     
           $('body').terminal(App, {
         greetings: "[[b;#44D544;]"+
		"Starting udev:                                 [ OK &rsqb;\n"+
		"Mount devpts:                                  [ OK &rsqb;\n"+
		"Configure kernel options                       [ OK &rsqb;\n"+
		"Setting clock: "+Date.now()+"                  [ OK &rsqb;\n\n"+
		"SYSTEM BOOT COMPLETE                           [ OK &rsqb;\n\n\n"+
		"Quick Commands"+
		"\techo          env          help\n"+
		"\tid            ls           whoami]\n\n"+
		"root&#64;huntergregal&#46;com:~# env\n[[b;#44D544;]NAME=HunterGregal\nTITLE=SecurityResearcher;Student\nBLOG=http://blog.huntergregal.com\nGITHUB=https://github.com/huntergregal\nTWITTER=@huntergregal\n_=/usr/bin/env]",
                prompt: function(p){
            var path = '~'
            p(e + ":" + path + "# ");
        },
        onBlur: function() {
            // prevent loosing focus
            return false;
        },
        tabcompletion: true
        });


 
});

function showPGP(consoleObj)
{
consoleObj.echo("-----BEGIN PGP PUBLIC KEY BLOCK-----\n"+
"Version: Mailvelope v1.4.0\n"+
"Comment: https://www.mailvelope.com\n\n"+
"xsBNBFbN2ucBCADNVt1zQZfrrRCUlsy6pS8sTjH1UGMpmmjw0ZefGYxEe703\n"+
"tddAnbauML4km0Z8VbPLKBfSjP0grG/vx78gUnWpv3gb+/usFJ7Zuuy0M/7T\n"+
"1Mvmmu652AB96GB6iRqJUNgPllLSPhsVOOTtxlgXy5mtaLVZ4aKQq+o296pD\n"+
"g44yg7tZfP7fencDZY73Cw7+73nBuSkTjYcUZfBNHxWVv4tnXEtsQM8UKJ3L\n"+
"scGrQek1v0bxgDNQOydnFs7PWXXPGLpG+HATdWvjLljRpQaxsuUPiMD8rCqr\n"+
"DtTOIrcLB7+kclJnRwz8KZBKivRcIdwqxm5j7mvTggOSN9vScHaYFugNABEB\n"+
"AAHNJkh1bnRlciBHcmVnYWwgPGh1bnRlcmdyZWdhbEBnbWFpbC5jb20+wsB/\n"+
"BBMBCAApAhsDBwsJCAcDAgEGFQgCCQoLBBYCAwECHgECF4AFAlbN26EFCQPD\n"+
"vykACgkQnGlENXwbtlMyvgf/XiWT8/dpo9MSh+YSgcGrEhIUrqE2b39tsxos\n"+
"QjiB45u3fzp6cRXpj4DC0/vFwgisWYCvbHpQq/S+OPqXPRJByM/jNrgPYqXi\n"+
"0piFbXo7lZ4bgOfAxFyCv4HQX2wttLHc6qlPmsZN80co7YYLiI+hDbXoPEFc\n"+
"x3X3jqyMv/5TPi3Y7eUmjQUZ3o0s9A4sRm2RvGecipdJTMWGyoqtTX9Y48vW\n"+
"LYYAE8a0NeDmiRp/UuiWbgTiMiIu6SO8TbKEJ0BLiPWNElZzsPWHc+UesWzd\n"+
"VOyzplKRDxbICSEjlFEAS7GSwD+j7PWX05Or6QsZQ7wzxDleROLDC51rauYP\n"+
"1y7aTs7ATQRWzdrnAQgA5THBboxJsXP5e6JuErgh9TR+hIo7d8VjBevbsWaf\n"+
"REENpVLhfTty5A7ojTzzDOBvIYBP24dDTK4N0US1hf2g+tIUaGDTDXhi72tt\n"+
"RVGU8D4h7cvoJEIGeF03LwdmkM0IS+L5euTQBwoipfZgb5n4L4D1FsCvNlPt\n"+
"GjZQa7w2TEtpPKUeRN7QLmOUQGV6ElyO2gDs1RO7qUXPYBpjU8R55NcNTctu\n"+
"Z+OeIks6KbAcbKJXyXyi8xpcWw0Bhc5JXN9FgayHePGJkNktTnBWN1hUUdmO\n"+
"LcTh1WwSS0MxDDfoTuWR2zCBWgQjbr0xvLs5ty2yOd6rU7vLfoxm47NFKlDs\n"+
"cwARAQABwsBfBBgBCAAJBQJWzdrnAhsMAAoJEJxpRDV8G7ZT5LYIAImawwDY\n"+
"06pdINFptqjylYsJidz+xu6JO+d2cD82/pqYkrrwFeHd73CG4xO516du89nG\n"+
"sV7V66zRpjvNuVAra0knJaD76pPennvzw13lwoJW1FSCVngBgEwyx99KSb2j\n"+
"QGgj2MT2LUcR49/Kkv8u/U+BDVCzI9Z77V0LG6cmfLHO5/DpO55YPOqrxZCB\n"+
"Ttskm1XOiLgOvEvbN9SDy5zMATfsD2/NsuOdfwWN1FQBKqeujUEHoRSIxrbt\n"+
"OehzF+/JABEUvG9knL+IRi2jYSj/dycAjp+EF6wpBUmIc/sOmFLmnElcev69\n"+
"5o9eENd7DZX5iHT0DvryC6ooCA6/umPfD0k=\n"+
"=bN5F\n"+
"-----END PGP PUBLIC KEY BLOCK-----");
}

function showHelp(consoleObj)
{
        consoleObj.echo("Available commands:");
        consoleObj.echo("\t[[b;#44D544;]blog]              #Visit my blog");
        consoleObj.echo("\t[[b;#44D544;]clear]             #Clear the console"); 
        consoleObj.echo("\t[[b;#44D544;]donate]            #Support my efforts (BTC)");
        consoleObj.echo("\t[[b;#44D544;]echo]              #Echo...");
        consoleObj.echo("\t[[b;#44D544;]env]               #Display environment variables");
        consoleObj.echo("\t[[b;#44D544;]github]            #Visit my github");
        consoleObj.echo("\t[[b;#44D544;]help]              #This help message");
        consoleObj.echo("\t[[b;#44D544;]id]                #Id...");
        consoleObj.echo("\t[[b;#44D544;]ls]                #Ls...");
        consoleObj.echo("\t[[b;#44D544;]oldsite]           #Visit my old website");
        consoleObj.echo("\t[[b;#44D544;]publicPGPkey]      #Display my public PGP key");
        consoleObj.echo("\t[[b;#44D544;]shutdown]          #Shutdown system");
        consoleObj.echo("\t[[b;#44D544;]whoami]            #Whomai...");
        consoleObj.echo("\t[[b;#44D544;]www]               #Display information about this site");
}
