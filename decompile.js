const readline = require('readline');
const fs = require('fs');

const rl = readline.createInterface({
    input: fs.createReadStream('D:/456.txt'),
    crlfDelay: Infinity
});
//rel()

function rel() {
    rl.on('line', function (line) {
        c += "'" + line + "'" + ',';
        console.log("--------------------------------" + c)
    })
}
var c;
var a = ['gotow1MAX;','VOgB2:mP9PS:','gotoQOF5B;','aun0N:','echo2;','gotoDM64v;','yKjBr:','$fetchdata["\72\163\164\141\164\x75\163"]=$orderstatus;','gotowDefD;','tqxID:','$openid=$_GPC["\157\160\x65\156\151\144"];','gotomzjmV;','QSfOI:','if($orderstatus==5){','gotomP9PS;','}','gotoegppV;','QdXwl:WVYJS:','gotoswdmP;','w1MAX:global$_GPC,$_W;','gotoFgnLv;','Y9mS3:','$fetchdata["\72\x73\164\x61\164\165\163"]=$orderstatus;','gotoRzL2j;','XJ84h:U5Cwx:','gotoa0Qfo;','FgnLv:','$orderstatus=intval($_GPC["\157\162\144\145\x72\163\x74\x61\164\165\163"]);','gototqxID;','w82jx:','if($typeid==1){','gotor7Lhh;','}','gotoOhaqs;','wDefD:','gotoYgRsw;','gotoU7ctb;','UHe5M:','$pageindex=intval($_GPC["\160\x61\x67\145"])*$pagesize;','gotoEArnR;','a0Qfo:','$data=pdo_fetchall($sql,$fetchdata);','gotonCHYr;','egppV:','if($orderstatus==0){','gotoGqOL7;','}','gotopfGwK;','o19Nn:','$pagesize=5;','gotoUHe5M;','m8lHx:','gotoU5Cwx;','gotokPPYd;','PrIDm:EJOAp:','gotoqLeBb;','QOF5B:','$where.="\x20\x61\x6e\144\x20\x28\x6f\56\163\x74\141\x74\165\x73\x3d\72\163\164\x61\164\165\x73\40\x6f\162\x20\x6f\x2e\151\x73\162\145\x66\165\156\144\x3e\x30\51\40";','gotoY9mS3;','nCHYr:','if($data){','gotoWVYJS;','}','gotoaun0N;','FoOTy:','gotoYgRsw;','gotoVOgB2;','p1ac6:YgRsw:','gotow82jx;','mzjmV:','$typeid=intval($_GPC["\164\x79\x70\x65\x69\144"]);','gotoo19Nn;','DM64v:','gotoEJOAp;','gotoQdXwl;','kPPYd:r7Lhh:','gotoO0xky;','U7ctb:sogSc:','gotohKFLr;','RzL2j:','gotoYgRsw;','gotoC94wn;','swdmP:','echojson_encode($data);','gotoPrIDm;','C94wn:GqOL7:','gotop1ac6;','I6MC_:','if($orderstatus==3){','gotosogSc;','}','gotoQSfOI;','Ohaqs:','$sql="\x73\145\x6c\145\x63\164\x20\157\56\163\164\x61\x74\x75\163\54\157\56\151\x73\x72\145\x66\165\156\x64\x2c\157\x2e\x6e\165\155\54\x6f\56\155\x6f\x6e\145\x79\54\157\x2e\x6f\x69\144\x2c\x6f\x2e\x67\x6e\x61\155\x65\x20\141\x73\40\157\x72\144\145\162\x5f\147\156\141\x6d\145\54\x6f\x2e\x67\157\x6f\x64\163\151\x6d\147\x20\x61\x73\40\157\x72\x64\x65\x72\x5f\x70\x69\x63\x2c\157\56\x62\x6e\x61\x6d\x65\40\x61\x73\40\157\x72\x64\x65\162\137\142\x6e\x61\x6d\145\x2c\147\56\147\x6e\141\x6d\x65\x2c\147\x2e\x70\151\143\x2c\142\x2e\x62\x6e\141\155\x65\x20\x66\x72\x6f\155\40".tablename("\155\172\x68\153\137\163\x75\156\137\x71\x67\x6f\x72\144\145\x72")."\40\x61\x73\x20\157\40\x6c\x65\146\164\x20\152\157\151\x6e\x20".tablename("\x6d\x7a\150\153\137\163\x75\156\137\147\x6f\157\x64\x73")."\x20\x61\x73\x20\147\x20\x6f\x6e\x20\157\56\x67\x69\144\75\147\56\147\x69\x64\x20\154\x65\x66\x74\x20\x6a\157\151\x6e\x20".tablename("\155\172\150\153\x5f\x73\x75\156\x5f\142\162\141\156\144")."\x20\141\x73\40\142\40\x6f\x6e\40\147\x2e\142\151\x64\75\x62\56\x62\151\x64\40".$where."\40\157\162\144\145\x72\x20\x62\171\40\x6f\x2e\x6f\x69\144\x20\x64\145\163\x63\40\154\151\155\x69\164\40".$pageindex."\54".$pagesize;','gotom8lHx;','EArnR:','$where="\40\167\x68\x65\x72\x65\x20\157\56\165\x6e\151\141\x63\x69\144\75\47".$_W["\x75\156\x69\x61\x63\x69\x64"]."\47\40\x41\x4e\x44\40\x6f\x2e\157\160\145\156\151\x64\75\47".$openid."\x27\40";','gotoI6MC_;','rCECV:','$fetchdata["\x3a\x73\164\x61\164\x75\163"]=$orderstatus;','gotoFoOTy;','hKFLr:','$where.="\40\x61\156\x64\40\x6f\x2e\163\164\141\x74\x75\163\x3d\x3a\163\x74\141\164\x75\x73\40\x61\x6e\x64\40\50\157\56\x69\163\x72\145\x66\165\x6e\x64\x3d\x30\x20\157\x72\x20\x6f\x2e\151\x73\x72\x65\x66\165\x6e\144\x3d\63\x29\40";','gotorCECV;','pfGwK:','$where.="\x20\x61\156\x64\x20\157\56\x73\x74\141\164\x75\163\x3d\x3a\163\164\141\164\165\163\x20";','gotoyKjBr;','O0xky:','$sql="\x73\145\x6c\x65\143\164\40\x6f\x2e\163\164\141\164\x75\163\54\x6f\56\x69\x73\x72\x65\146\165\x6e\144\54\157\x2e\x6e\x75\x6d\54\157\x2e\x6d\x6f\156\x65\171\x2c\x6f\56\x6f\151\x64\x2c\157\x2e\x67\x6e\x61\155\145\x20\141\163\x20\157\162\x64\145\x72\137\x67\156\141\155\145\x2c\x6f\56\147\157\x6f\x64\163\151\155\147\40\x61\x73\x20\x6f\x72\144\x65\162\137\x70\151\x63\x2c\x6f\x2e\x62\156\141\x6d\145\x20\141\x73\x20\157\162\144\145\162\x5f\x62\x6e\141\155\x65\54\x67\56\x67\156\x61\x6d\145\x2c\x67\x2e\x70\x69\143\x2c\142\56\142\156\x61\155\x65\x20\146\x72\x6f\155\x20".tablename("\155\x7a\150\x6b\137\163\x75\156\x5f\x6f\162\x64\145\162")."\x20\x61\x73\40\157\x20\154\x65\146\164\x20\152\157\x69\x6e\x20".tablename("\x6d\172\x68\153\137\x73\x75\156\x5f\x67\x6f\157\144\163")."\40\x61\163\40\x67\x20\x6f\x6e\40\x6f\x2e\147\151\x64\75\147\56\147\151\144\40\x6c\x65\146\x74\40\152\x6f\x69\x6e\40".tablename("\155\x7a\150\153\x5f\x73\x75\156\137\142\162\141\156\144")."\40\x61\x73\40\142\40\157\156\40\147\x2e\142\x69\144\x3d\142\56\142\x69\144\40".$where."\x20\x6f\162\144\x65\162\40\x62\x79\x20\157\x2e\157\x69\144\40\x64\145\x73\x63\40\x6c\x69\155\x69\164\x20".$pageindex."\x2c".$pagesize;','gotoXJ84h;','qLeBb:']
var f = ['w1MAX','QOF5B','DM64v','wDefD','mzjmV','mP9PS','egppV','swdmP','FgnLv','RzL2j','a0Qfo','tqxID','r7Lhh','Ohaqs','YgRsw','U7ctb','EArnR','nCHYr','GqOL7','pfGwK','UHe5M','U5Cwx','kPPYd',,'Y9mS3','WVYJS','aun0N','YgRsw','VOgB2','w82jx','o19Nn','EJOAp','QdXwl','O0xky','hKFLr','YgRsw','C94wn','PrIDm','p1ac6','sogSc','QSfOI','m8lHx','I6MC_','FoOTy','rCECV','yKjBr','XJ84h','qLeBb']
var p = []
var go = []
var to = []
var kol = []
var w1 = kk()
var w2 = kk1()
var w3 = newcc()
var collect = []
var inkey = []
var writetxt=[]
//console.log(w1)
//console.log(w2.length)
for (var d in w2) {
    //console.log(a[w2[d]])
}
output()
function output() {
    var d = 0
    for (var e = 0; e < 300; e++) {
        if (e % 2 != 0) {
            if (d == 0) {
                d = w2[d + 1];
            } else {
                for (var m = 0; m < 300; m++) {
                    if (w2[m] == d) {
                        d = w2[m + 1]
                        break
                    }
                }
            }
        } else {
            for (var n = 0; n < 300; n++) {
                if (w1[n] == d) {
                    d = w1[n + 1]
                    break
                }
            }
        }
        collect.push(d)
    }
//console.log(collect)
    for (var we = 0; we < 180; we++) {
        if (we < 180) {
            if (we % 2 == 0) {
                //console.log(a[collect[we]])
            } else {
                for (var count = collect[we] + 1; count < collect[we + 1]; count++) {
                    if (a[count].indexOf("goto") != -1) {
                        //console.log("begin####################################")
                        var d = 0
                        var inlop = []
                        for (var e = 0; e < a.length; e++) {
                            if (a[w2[e]] == a[count]) {
                                d = w2[e + 1];
                                //console.log(a[w2[e]])
                                inlop.push(w2[e])
                                for (var tl = 0; tl < a.length; tl++) {
                                    if (tl % 2 == 0) {
                                        for (var n = 0; n < w1.length; n++) {
                                            if (w1[n] == d) {
                                                //console.log(a[d])
                                                inlop.push(d)
                                                d = w1[n + 1]
                                                break
                                            }
                                        }
                                    } else {
                                        for (var m = 0; m < w2.length; m++) {
                                            if (w2[m] == d) {
                                                //console.log(a[d])
                                                inlop.push(d)
                                                d = w2[m + 1]
                                                break
                                            }
                                        }
                                    }
                                }
                                //console.log(inlop)
                                for (var inum = 0; inum < inlop.length; inum++) {
                                    if (inum % 2 == 0) {
                                        //console.log(a[inlop[inum]]+"**************--"+inlop[inum])
                                    } else {
                                        //console.log(a[inlop[inum]]+"$$$$$$$$$$$$$$--"+inlop[inum])
                                        for (var incount = inlop[inum] + 1; incount < inlop[inum + 1]; incount++) {
                                            if (a[incount].indexOf("goto") != -1) {
                                                //console.log(a[incount]+"@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@"+incount)
                                                writetxt.push(a[incount])
                                                console.log(a[incount])
                                                jump(a[incount])
                                            } else {
                                                //console.log(a[incount])//"$$$$$$$$$$$$$$$"
                                                //console.log(a[incount]+">>>>>>>>>>>>>>>>>"+incount)
                                                writetxt.push(a[incount])
                                            }
                                        }
                                    }
                                }
                                //console.log("-----------------------------end")
                                break
                            }
                        }
                    } else {
                        console.log(a[count]+"")//"$$$$$$$$$$$$$$$"
                        //console.log(a[count])
                        writetxt.push(a[count])
                    }
                }
            }
        }
        //console.log(a[collect[we]])
    }
    var nameArr = [ 'Cloud', 'Star', 'Triangle' ];
    var transformArr = '';
    for(var i=0;i<writetxt.length;i++){
        if(i==0){
            transformArr += writetxt[i];
        }else{
            transformArr += '\r\n'+writetxt[i];
        }
    }
    var configUrl = 'D:/结果.txt';
    fs.writeFile(configUrl,transformArr,function(err){
        if(err){};
        console.log("write file ok");
    })
}

//console.log(kk1)
//z()
function z() {
    for (var i = 0; i < a.length; i++) {
        if (a[i].indexOf("goto") != -1) {
            var q = a[i].replace(/goto/, "")
            var l = q.replace(/;/, "")
            console.log("'" + l + "'" + ',')
        }
    }
}

function kk() {
    for (var i = 0; i < f.length; i++) {
        //console.log(f[i])
        for (var j = 0; j < a.length; j++) {
            if (a[j].indexOf(f[i]) != -1 && a[j].indexOf("goto") == -1) {
                //go[j]=a[j]
                go.push(j)
                for (var k = j; k < a.length; k++) {
                    if (a[k].indexOf("goto") != -1) {
                        go.push(k)
                        break
                    }
                    if (a[k].indexOf("if") != -1) {
                        go.push(k + 3)
                        break
                    }
                }
            }
        }
    }
    //console.log(go)
    return go
}
function kk1() {
    for (var i = 0; i < f.length; i++) {
        //console.log(f[i])
        for (var j = 0; j < a.length; j++) {
            if (a[j].indexOf(f[i]) != -1 && a[j].indexOf("goto") != -1) {
                to.push(j)
                for (var k = 0; k < a.length; k++) {
                    if (a[k].indexOf(f[i]) != -1 && a[k].indexOf("goto") == -1) {
                        to.push(k)
                    }
                }
            }
        }
    }
    //console.log(to)
    return to
}
function newcc() {
    for (var i = 0; i < f.length; i++) {
        //console.log(f[i])
        for (var j = 0; j < a.length; j++) {
            if (a[j].indexOf(f[i]) != -1 && a[j].indexOf("goto") == -1) {
                //go[j]=a[j]
                kol.push(j)
                for (var k = j; k < a.length; k++) {
                    if (a[k].indexOf("goto") != -1) {
                        kol.push(k)
                        break
                    }
                }
            }
        }
    }
    //console.log(go)
    return kol
}
function line() {
    console.log("begin-----------------------------")
    var d = 0
    var inlop = []
    for (var e = 0; e < a.length; e++) {
        if (a[w2[e]] == "gotorS0lo;") {
            d = w2[e + 1];
            console.log(a[w2[e]])
            inlop.push(w2[e])
            for (var tl = 0; tl < a.length; tl++) {
                if (tl % 2 == 0) {
                    for (var n = 0; n < w3.length; n++) {
                        if (w3[n] == d) {
                            //console.log(a[d])
                            inlop.push(d)
                            d = w3[n + 1]
                            break
                        }
                    }
                } else {
                    for (var m = 0; m < w2.length; m++) {
                        if (w2[m] == d) {
                            //console.log(a[d])
                            inlop.push(d)
                            d = w2[m + 1]
                            break
                        }
                    }
                }
            }
            //console.log(inlop)
            for (var inum = 0; inum < 180; inum++) {
                if (inum % 2 == 0) {

                } else {
                    for (var incount = inlop[inum] + 1; incount < inlop[inum + 1]; incount++) {
                        //console.log(a[incount])
                    }
                }
            }
            console.log("-----------------------------end")
            break
        }
    }
}

function jump(v) {
    ////console.log("jumpbegin--------------------------")
    var d = 0
    var inlop = []
    //console.log(v+"this is v")
    for (var e = 0; e < a.length; e++) {
        if (a[w2[e]] == v) {
            d = w2[e + 1];
            //console.log(a[d])
            inlop.push(w2[e])
            for (var tl = 0; tl < a.length; tl++) {
                if (tl % 2 == 0) {
                    for (var n = 0; n < w3.length; n++) {
                        if (w1[n] == d) {
                            //console.log(a[d])
                            inlop.push(d)
                            d = w1[n + 1]
                            break
                        }
                    }
                } else {
                    for (var m = 0; m < w2.length; m++) {
                        if (w2[m] == d) {
                            //console.log(a[d])
                            inlop.push(d)
                            d = w2[m + 1]
                            break
                        }
                    }
                }
            }
            //console.log(inlop)
            for (var inum = 0; inum < inlop.length; inum++) {
                if (inum % 2 == 0) {

                } else {
                    for (var incount = inlop[inum] + 1; incount < inlop[inum + 1]; incount++) {
                        if (a[incount].indexOf("goto") != -1) {
                            //console.log("&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&")
                            //console.log(a[incount]+"-------------------new")
                            jump(a[incount])
                            writetxt.push(a[incount])
                        } else {
                            console.log(a[incount])//"$$$$$$$$$$$$$$$"
                            writetxt.push(a[incount])
                        }
                    }
                }
            }
            break
        }
    }
    ///console.log("------------------------------------jumpend")
}