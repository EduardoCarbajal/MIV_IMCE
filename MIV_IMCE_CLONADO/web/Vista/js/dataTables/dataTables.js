
(function(Fa,T,k){
    var S=function(h){
        function X(a){
            var b,c,d={};
            
            h.each(a,function(e){
                if((b=e.match(/^([^A-Z]+?)([A-Z])/))&&-1!=="a aa ai ao as b fn i m o s ".indexOf(b[1]+" "))c=e.replace(b[0],b[2].toLowerCase()),d[c]=e,"o"===b[1]&&X(a[e])
                    });
            a._hungarianMap=d
            }
            function I(a,b,c){
            a._hungarianMap||X(a);
            var d;
            h.each(b,function(e){
                d=a._hungarianMap[e];
                if(d!==k&&(c||b[d]===k))"o"===d.charAt(0)?(b[d]||(b[d]={}),h.extend(!0,b[d],b[e]),I(a[d],b[d],c)):b[d]=b[e]
                    })
            }
            function S(a){
            var b=m.defaults.oLanguage,c=a.sZeroRecords;
            !a.sEmptyTable&&(c&&"No data available in table"===b.sEmptyTable)&&F(a,a,"sZeroRecords","sEmptyTable");
            !a.sLoadingRecords&&(c&&"Loading..."===b.sLoadingRecords)&&F(a,a,"sZeroRecords","sLoadingRecords");
            a.sInfoThousands&&(a.sThousands=a.sInfoThousands);
            (a=a.sDecimal)&&cb(a)
            }
            function db(a){
            A(a,"ordering","bSort");
            A(a,"orderMulti","bSortMulti");
            A(a,"orderClasses","bSortClasses");
            A(a,"orderCellsTop","bSortCellsTop");
            A(a,"order","aaSorting");
            A(a,"orderFixed","aaSortingFixed");
            A(a,"paging","bPaginate");
            A(a,"pagingType","sPaginationType");
            A(a,"pageLength","iDisplayLength");
            A(a,"searching","bFilter");
            "boolean"===typeof a.sScrollX&&(a.sScrollX=a.sScrollX?"100%":"");
            if(a=a.aoSearchCols)for(var b=0,c=a.length;b<c;b++)a[b]&&I(m.models.oSearch,a[b])
                }
                function eb(a){
            A(a,"orderable","bSortable");
            A(a,"orderData","aDataSort");
            A(a,"orderSequence","asSorting");
            A(a,"orderDataType","sortDataType");
            var b=a.aDataSort;
            b&&!h.isArray(b)&&(a.aDataSort=[b])
            }
            function fb(a){
            if(!m.__browser){
                var b={};
                
                m.__browser=b;
                var c=
                h("<div/>").css({
                    position:"fixed",
                    top:0,
                    left:0,
                    height:1,
                    width:1,
                    overflow:"hidden"
                }).append(h("<div/>").css({
                    position:"absolute",
                    top:1,
                    left:1,
                    width:100,
                    overflow:"scroll"
                }).append(h("<div/>").css({
                    width:"100%",
                    height:10
                }))).appendTo("body"),d=c.children(),e=d.children();
                b.barWidth=d[0].offsetWidth-d[0].clientWidth;
                b.bScrollOversize=100===e[0].offsetWidth&&100!==d[0].clientWidth;
                b.bScrollbarLeft=1!==Math.round(e.offset().left);
                b.bBounding=c[0].getBoundingClientRect().width?!0:!1;
                c.remove()
                }
                h.extend(a.oBrowser,
                m.__browser);
            a.oScroll.iBarWidth=m.__browser.barWidth
            }
            function gb(a,b,c,d,e,f){
            var g,i=!1;
            c!==k&&(g=c,i=!0);
            for(;d!==e;)a.hasOwnProperty(d)&&(g=i?b(g,a[d],d,a):a[d],i=!0,d+=f);
            return g
            }
            function Ga(a,b){
            var c=m.defaults.column,d=a.aoColumns.length,c=h.extend({},m.models.oColumn,c,{
                nTh:b?b:T.createElement("th"),
                sTitle:c.sTitle?c.sTitle:b?b.innerHTML:"",
                aDataSort:c.aDataSort?c.aDataSort:[d],
                mData:c.mData?c.mData:d,
                idx:d
            });
            a.aoColumns.push(c);
            c=a.aoPreSearchCols;
            c[d]=h.extend({},m.models.oSearch,c[d]);
            la(a,d,h(b).data())
            }
            function la(a,b,c){
            var b=a.aoColumns[b],d=a.oClasses,e=h(b.nTh);
            if(!b.sWidthOrig){
                b.sWidthOrig=e.attr("width")||null;
                var f=(e.attr("style")||"").match(/width:\s*(\d+[pxem%]+)/);
                f&&(b.sWidthOrig=f[1])
                }
                c!==k&&null!==c&&(eb(c),I(m.defaults.column,c),c.mDataProp!==k&&!c.mData&&(c.mData=c.mDataProp),c.sType&&(b._sManualType=c.sType),c.className&&!c.sClass&&(c.sClass=c.className),h.extend(b,c),F(b,c,"sWidth","sWidthOrig"),c.iDataSort!==k&&(b.aDataSort=[c.iDataSort]),F(b,c,"aDataSort"));
            var g=b.mData,i=P(g),j=b.mRender?P(b.mRender):null,c=function(a){
                return"string"===typeof a&&-1!==a.indexOf("@")
                };
                
            b._bAttrSrc=h.isPlainObject(g)&&(c(g.sort)||c(g.type)||c(g.filter));
            b.fnGetData=function(a,b,c){
                var d=i(a,b,k,c);
                return j&&b?j(d,b,a,c):d
                };
                
            b.fnSetData=function(a,b,c){
                return Q(g)(a,b,c)
                };
                
            "number"!==typeof g&&(a._rowReadObject=!0);
            a.oFeatures.bSort||(b.bSortable=!1,e.addClass(d.sSortableNone));
            a=-1!==h.inArray("asc",b.asSorting);
            c=-1!==h.inArray("desc",b.asSorting);
            !b.bSortable||!a&&!c?
            (b.sSortingClass=d.sSortableNone,b.sSortingClassJUI=""):a&&!c?(b.sSortingClass=d.sSortableAsc,b.sSortingClassJUI=d.sSortJUIAscAllowed):!a&&c?(b.sSortingClass=d.sSortableDesc,b.sSortingClassJUI=d.sSortJUIDescAllowed):(b.sSortingClass=d.sSortable,b.sSortingClassJUI=d.sSortJUI)
            }
            function Y(a){
            if(!1!==a.oFeatures.bAutoWidth){
                var b=a.aoColumns;
                Ha(a);
                for(var c=0,d=b.length;c<d;c++)b[c].nTh.style.width=b[c].sWidth
                    }
                    b=a.oScroll;
            (""!==b.sY||""!==b.sX)&&Z(a);
            w(a,null,"column-sizing",[a])
            }
            function $(a,b){
            var c=
            aa(a,"bVisible");
            return"number"===typeof c[b]?c[b]:null
            }
            function ba(a,b){
            var c=aa(a,"bVisible"),c=h.inArray(b,c);
            return-1!==c?c:null
            }
            function ca(a){
            return aa(a,"bVisible").length
            }
            function aa(a,b){
            var c=[];
            h.map(a.aoColumns,function(a,e){
                a[b]&&c.push(e)
                });
            return c
            }
            function Ia(a){
            var b=a.aoColumns,c=a.aoData,d=m.ext.type.detect,e,f,g,i,j,h,l,r,q;
            e=0;
            for(f=b.length;e<f;e++)if(l=b[e],q=[],!l.sType&&l._sManualType)l.sType=l._sManualType;
                else if(!l.sType){
                g=0;
                for(i=d.length;g<i;g++){
                    j=0;
                    for(h=c.length;j<
                        h;j++){
                        q[j]===k&&(q[j]=B(a,j,e,"type"));
                        r=d[g](q[j],a);
                        if(!r&&g!==d.length-1)break;
                        if("html"===r)break
                    }
                    if(r){
                        l.sType=r;
                        break
                    }
                }
                l.sType||(l.sType="string")
                }
            }
        function hb(a,b,c,d){
    var e,f,g,i,j,n,l=a.aoColumns;
    if(b)for(e=b.length-1;0<=e;e--){
        n=b[e];
        var r=n.targets!==k?n.targets:n.aTargets;
        h.isArray(r)||(r=[r]);
        f=0;
        for(g=r.length;f<g;f++)if("number"===typeof r[f]&&0<=r[f]){
            for(;l.length<=r[f];)Ga(a);
            d(r[f],n)
            }else if("number"===typeof r[f]&&0>r[f])d(l.length+r[f],n);
            else if("string"===typeof r[f]){
            i=0;
            for(j=l.length;i<j;i++)("_all"==r[f]||h(l[i].nTh).hasClass(r[f]))&&d(i,n)
                }
            }
        if(c){
    e=0;
    for(a=c.length;e<a;e++)d(e,c[e])
        }
    }
function L(a,b,c,d){
    var e=a.aoData.length,f=h.extend(!0,{},m.models.oRow,{
        src:c?"dom":"data",
        idx:e
    });
    f._aData=b;
    a.aoData.push(f);
    for(var g=a.aoColumns,i=0,j=g.length;i<j;i++)g[i].sType=null;
    a.aiDisplayMaster.push(e);
    b=a.rowIdFn(b);
    b!==k&&(a.aIds[b]=f);
    (c||!a.oFeatures.bDeferRender)&&Ja(a,e,c,d);
    return e
    }
    function ma(a,b){
    var c;
    b instanceof h||(b=h(b));
    return b.map(function(b,e){
        c=
        Ka(a,e);
        return L(a,c.data,e,c.cells)
        })
    }
    function B(a,b,c,d){
    var e=a.iDraw,f=a.aoColumns[c],g=a.aoData[b]._aData,i=f.sDefaultContent,c=f.fnGetData(g,d,{
        settings:a,
        row:b,
        col:c
    });
    if(c===k)return a.iDrawError!=e&&null===i&&(J(a,0,"Requested unknown parameter "+("function"==typeof f.mData?"{function}":"'"+f.mData+"'")+" for row "+b,4),a.iDrawError=e),i;
    if((c===g||null===c)&&null!==i)c=i;
    else if("function"===typeof c)return c.call(g);
    return null===c&&"display"==d?"":c
    }
    function ib(a,b,c,d){
    a.aoColumns[c].fnSetData(a.aoData[b]._aData,
        d,{
            settings:a,
            row:b,
            col:c
        })
    }
    function La(a){
    return h.map(a.match(/(\\.|[^\.])+/g)||[""],function(a){
        return a.replace(/\\./g,".")
        })
    }
    function P(a){
    if(h.isPlainObject(a)){
        var b={};
        
        h.each(a,function(a,c){
            c&&(b[a]=P(c))
            });
        return function(a,c,f,g){
            var i=b[c]||b._;
            return i!==k?i(a,c,f,g):a
            }
        }
    if(null===a)return function(a){
    return a
    };
    
if("function"===typeof a)return function(b,c,f,g){
    return a(b,c,f,g)
    };
    
if("string"===typeof a&&(-1!==a.indexOf(".")||-1!==a.indexOf("[")||-1!==a.indexOf("("))){
    var c=function(a,b,
        f){
        var g,i;
        if(""!==f){
            i=La(f);
            for(var j=0,n=i.length;j<n;j++){
                f=i[j].match(da);
                g=i[j].match(U);
                if(f){
                    i[j]=i[j].replace(da,"");
                    ""!==i[j]&&(a=a[i[j]]);
                    g=[];
                    i.splice(0,j+1);
                    i=i.join(".");
                    if(h.isArray(a)){
                        j=0;
                        for(n=a.length;j<n;j++)g.push(c(a[j],b,i))
                            }
                            a=f[0].substring(1,f[0].length-1);
                    a=""===a?g:g.join(a);
                    break
                }else if(g){
                    i[j]=i[j].replace(U,"");
                    a=a[i[j]]();
                    continue
                }
                if(null===a||a[i[j]]===k)return k;
                a=a[i[j]]
                }
            }
            return a
    };
    
return function(b,e){
    return c(b,e,a)
    }
}
return function(b){
    return b[a]
    }
}
function Q(a){
    if(h.isPlainObject(a))return Q(a._);
    if(null===a)return function(){};
        
    if("function"===typeof a)return function(b,d,e){
        a(b,"set",d,e)
        };
        
    if("string"===typeof a&&(-1!==a.indexOf(".")||-1!==a.indexOf("[")||-1!==a.indexOf("("))){
        var b=function(a,d,e){
            var e=La(e),f;
            f=e[e.length-1];
            for(var g,i,j=0,n=e.length-1;j<n;j++){
                g=e[j].match(da);
                i=e[j].match(U);
                if(g){
                    e[j]=e[j].replace(da,"");
                    a[e[j]]=[];
                    f=e.slice();
                    f.splice(0,j+1);
                    g=f.join(".");
                    if(h.isArray(d)){
                        i=0;
                        for(n=d.length;i<n;i++)f={},b(f,d[i],g),a[e[j]].push(f)
                            }else a[e[j]]=d;
                    return
                }
                i&&(e[j]=e[j].replace(U,
                    ""),a=a[e[j]](d));
                if(null===a[e[j]]||a[e[j]]===k)a[e[j]]={};
                    
                a=a[e[j]]
                }
                if(f.match(U))a[f.replace(U,"")](d);else a[f.replace(da,"")]=d
                };
                
        return function(c,d){
            return b(c,d,a)
            }
        }
    return function(b,d){
    b[a]=d
    }
}
function Ma(a){
    return D(a.aoData,"_aData")
    }
    function na(a){
    a.aoData.length=0;
    a.aiDisplayMaster.length=0;
    a.aiDisplay.length=0;
    a.aIds={}
}
function oa(a,b,c){
    for(var d=-1,e=0,f=a.length;e<f;e++)a[e]==b?d=e:a[e]>b&&a[e]--;
    -1!=d&&c===k&&a.splice(d,1)
    }
    function ea(a,b,c,d){
    var e=a.aoData[b],f,g=function(c,d){
        for(;c.childNodes.length;)c.removeChild(c.firstChild);
        c.innerHTML=B(a,b,d,"display")
        };
        
    if("dom"===c||(!c||"auto"===c)&&"dom"===e.src)e._aData=Ka(a,e,d,d===k?k:e._aData).data;
    else{
        var i=e.anCells;
        if(i)if(d!==k)g(i[d],d);
            else{
            c=0;
            for(f=i.length;c<f;c++)g(i[c],c)
                }
            }
        e._aSortData=null;
e._aFilterData=null;
g=a.aoColumns;
if(d!==k)g[d].sType=null;
else{
    c=0;
    for(f=g.length;c<f;c++)g[c].sType=null;
    Na(a,e)
    }
}
function Ka(a,b,c,d){
    var e=[],f=b.firstChild,g,i,j=0,n,l=a.aoColumns,r=a._rowReadObject,d=d!==k?d:r?{}:[],q=function(a,b){
        if("string"===typeof a){
            var c=a.indexOf("@");
            -1!==c&&(c=a.substring(c+1),Q(a)(d,b.getAttribute(c)))
            }
        },jb=function(a){
    if(c===k||c===j)i=l[j],n=h.trim(a.innerHTML),i&&i._bAttrSrc?(Q(i.mData._)(d,n),q(i.mData.sort,a),q(i.mData.type,a),q(i.mData.filter,a)):r?(i._setter||(i._setter=Q(i.mData)),i._setter(d,n)):d[j]=n;
    j++
};

if(f)for(;f;){
    g=f.nodeName.toUpperCase();
    if("TD"==g||"TH"==g)jb(f),e.push(f);
    f=f.nextSibling
    }else{
    e=b.anCells;
    g=0;
    for(var o=e.length;g<o;g++)jb(e[g])
        }
        if(b=f?b:b.nTr)(b=b.getAttribute("id"))&&Q(a.rowId)(d,b);
return{
    data:d,
    cells:e
}
}
function Ja(a,b,c,d){
    var e=a.aoData[b],f=e._aData,g=[],i,j,h,l,r;
    if(null===e.nTr){
        i=c||T.createElement("tr");
        e.nTr=i;
        e.anCells=g;
        i._DT_RowIndex=b;
        Na(a,e);
        l=0;
        for(r=a.aoColumns.length;l<r;l++){
            h=a.aoColumns[l];
            j=c?d[l]:T.createElement(h.sCellType);
            g.push(j);
            if(!c||h.mRender||h.mData!==l)j.innerHTML=B(a,b,l,"display");
            h.sClass&&(j.className+=" "+h.sClass);
            h.bVisible&&!c?i.appendChild(j):!h.bVisible&&c&&j.parentNode.removeChild(j);
            h.fnCreatedCell&&h.fnCreatedCell.call(a.oInstance,j,B(a,b,l),f,b,l)
            }
            w(a,
            "aoRowCreatedCallback",null,[i,f,b])
        }
        e.nTr.setAttribute("role","row")
    }
    function Na(a,b){
    var c=b.nTr,d=b._aData;
    if(c){
        var e=a.rowIdFn(d);
        e&&(c.id=e);
        d.DT_RowClass&&(e=d.DT_RowClass.split(" "),b.__rowc=b.__rowc?pa(b.__rowc.concat(e)):e,h(c).removeClass(b.__rowc.join(" ")).addClass(d.DT_RowClass));
        d.DT_RowAttr&&h(c).attr(d.DT_RowAttr);
        d.DT_RowData&&h(c).data(d.DT_RowData)
        }
    }
function kb(a){
    var b,c,d,e,f,g=a.nTHead,i=a.nTFoot,j=0===h("th, td",g).length,n=a.oClasses,l=a.aoColumns;
    j&&(e=h("<tr/>").appendTo(g));
    b=0;
    for(c=l.length;b<c;b++)f=l[b],d=h(f.nTh).addClass(f.sClass),j&&d.appendTo(e),a.oFeatures.bSort&&(d.addClass(f.sSortingClass),!1!==f.bSortable&&(d.attr("tabindex",a.iTabIndex).attr("aria-controls",a.sTableId),Oa(a,f.nTh,b))),f.sTitle!=d[0].innerHTML&&d.html(f.sTitle),Pa(a,"header")(a,d,f,n);
    j&&fa(a.aoHeader,g);
    h(g).find(">tr").attr("role","row");
    h(g).find(">tr>th, >tr>td").addClass(n.sHeaderTH);
    h(i).find(">tr>th, >tr>td").addClass(n.sFooterTH);
    if(null!==i){
        a=a.aoFooter[0];
        b=0;
        for(c=a.length;b<
            c;b++)f=l[b],f.nTf=a[b].cell,f.sClass&&h(f.nTf).addClass(f.sClass)
            }
        }
function ga(a,b,c){
    var d,e,f,g=[],i=[],j=a.aoColumns.length,n;
    if(b){
        c===k&&(c=!1);
        d=0;
        for(e=b.length;d<e;d++){
            g[d]=b[d].slice();
            g[d].nTr=b[d].nTr;
            for(f=j-1;0<=f;f--)!a.aoColumns[f].bVisible&&!c&&g[d].splice(f,1);
            i.push([])
            }
            d=0;
        for(e=g.length;d<e;d++){
            if(a=g[d].nTr)for(;f=a.firstChild;)a.removeChild(f);
            f=0;
            for(b=g[d].length;f<b;f++)if(n=j=1,i[d][f]===k){
                a.appendChild(g[d][f].cell);
                for(i[d][f]=1;g[d+j]!==k&&g[d][f].cell==g[d+j][f].cell;)i[d+
                    j][f]=1,j++;
                for(;g[d][f+n]!==k&&g[d][f].cell==g[d][f+n].cell;){
                    for(c=0;c<j;c++)i[d+c][f+n]=1;
                    n++
                }
                h(g[d][f].cell).attr("rowspan",j).attr("colspan",n)
                }
            }
        }
}
function M(a){
    var b=w(a,"aoPreDrawCallback","preDraw",[a]);
    if(-1!==h.inArray(!1,b))C(a,!1);
    else{
        var b=[],c=0,d=a.asStripeClasses,e=d.length,f=a.oLanguage,g=a.iInitDisplayStart,i="ssp"==y(a),j=a.aiDisplay;
        a.bDrawing=!0;
        g!==k&&-1!==g&&(a._iDisplayStart=i?g:g>=a.fnRecordsDisplay()?0:g,a.iInitDisplayStart=-1);
        var g=a._iDisplayStart,n=a.fnDisplayEnd();
        if(a.bDeferLoading)a.bDeferLoading=!1,a.iDraw++,C(a,!1);
        else if(i){
            if(!a.bDestroying&&!lb(a))return
        }else a.iDraw++;
        if(0!==j.length){
            f=i?a.aoData.length:n;
            for(i=i?0:g;i<f;i++){
                var l=j[i],r=a.aoData[l];
                null===r.nTr&&Ja(a,l);
                l=r.nTr;
                if(0!==e){
                    var q=d[c%e];
                    r._sRowStripe!=q&&(h(l).removeClass(r._sRowStripe).addClass(q),r._sRowStripe=q)
                    }
                    w(a,"aoRowCallback",null,[l,r._aData,c,i]);
                b.push(l);
                c++
            }
            }else c=f.sZeroRecords,1==a.iDraw&&"ajax"==y(a)?c=f.sLoadingRecords:f.sEmptyTable&&0===a.fnRecordsTotal()&&(c=f.sEmptyTable),
        b[0]=h("<tr/>",{
            "class":e?d[0]:""
            }).append(h("<td />",{
            valign:"top",
            colSpan:ca(a),
            "class":a.oClasses.sRowEmpty
            }).html(c))[0];
    w(a,"aoHeaderCallback","header",[h(a.nTHead).children("tr")[0],Ma(a),g,n,j]);
    w(a,"aoFooterCallback","footer",[h(a.nTFoot).children("tr")[0],Ma(a),g,n,j]);
    d=h(a.nTBody);
    d.children().detach();
    d.append(h(b));
    w(a,"aoDrawCallback","draw",[a]);
    a.bSorted=!1;
    a.bFiltered=!1;
    a.bDrawing=!1
    }
}
function R(a,b){
    var c=a.oFeatures,d=c.bFilter;
    c.bSort&&mb(a);
    d?ha(a,a.oPreviousSearch):a.aiDisplay=
    a.aiDisplayMaster.slice();
    !0!==b&&(a._iDisplayStart=0);
    a._drawHold=b;
    M(a);
    a._drawHold=!1
    }
    function nb(a){
    var b=a.oClasses,c=h(a.nTable),c=h("<div/>").insertBefore(c),d=a.oFeatures,e=h("<div/>",{
        id:a.sTableId+"_wrapper",
        "class":b.sWrapper+(a.nTFoot?"":" "+b.sNoFooter)
        });
    a.nHolding=c[0];
    a.nTableWrapper=e[0];
    a.nTableReinsertBefore=a.nTable.nextSibling;
    for(var f=a.sDom.split(""),g,i,j,n,l,r,q=0;q<f.length;q++){
        g=null;
        i=f[q];
        if("<"==i){
            j=h("<div/>")[0];
            n=f[q+1];
            if("'"==n||'"'==n){
                l="";
                for(r=2;f[q+r]!=n;)l+=
                    f[q+r],r++;
                "H"==l?l=b.sJUIHeader:"F"==l&&(l=b.sJUIFooter);
                -1!=l.indexOf(".")?(n=l.split("."),j.id=n[0].substr(1,n[0].length-1),j.className=n[1]):"#"==l.charAt(0)?j.id=l.substr(1,l.length-1):j.className=l;
                q+=r
                }
                e.append(j);
            e=h(j)
            }else if(">"==i)e=e.parent();
        else if("l"==i&&d.bPaginate&&d.bLengthChange)g=ob(a);
        else if("f"==i&&d.bFilter)g=pb(a);
        else if("r"==i&&d.bProcessing)g=qb(a);
        else if("t"==i)g=rb(a);
        else if("i"==i&&d.bInfo)g=sb(a);
        else if("p"==i&&d.bPaginate)g=tb(a);
        else if(0!==m.ext.feature.length){
            j=
            m.ext.feature;
            r=0;
            for(n=j.length;r<n;r++)if(i==j[r].cFeature){
                g=j[r].fnInit(a);
                break
            }
            }
            g&&(j=a.aanFeatures,j[i]||(j[i]=[]),j[i].push(g),e.append(g))
        }
        c.replaceWith(e);
a.nHolding=null
}
function fa(a,b){
    var c=h(b).children("tr"),d,e,f,g,i,j,n,l,r,q;
    a.splice(0,a.length);
    f=0;
    for(j=c.length;f<j;f++)a.push([]);
    f=0;
    for(j=c.length;f<j;f++){
        d=c[f];
        for(e=d.firstChild;e;){
            if("TD"==e.nodeName.toUpperCase()||"TH"==e.nodeName.toUpperCase()){
                l=1*e.getAttribute("colspan");
                r=1*e.getAttribute("rowspan");
                l=!l||0===l||
                1===l?1:l;
                r=!r||0===r||1===r?1:r;
                g=0;
                for(i=a[f];i[g];)g++;
                n=g;
                q=1===l?!0:!1;
                for(i=0;i<l;i++)for(g=0;g<r;g++)a[f+g][n+i]={
                    cell:e,
                    unique:q
                },a[f+g].nTr=d
                }
                e=e.nextSibling
            }
        }
    }
function qa(a,b,c){
    var d=[];
    c||(c=a.aoHeader,b&&(c=[],fa(c,b)));
    for(var b=0,e=c.length;b<e;b++)for(var f=0,g=c[b].length;f<g;f++)if(c[b][f].unique&&(!d[f]||!a.bSortCellsTop))d[f]=c[b][f].cell;return d
    }
    function ra(a,b,c){
    w(a,"aoServerParams","serverParams",[b]);
    if(b&&h.isArray(b)){
        var d={},e=/(.*?)\[\]$/;
        h.each(b,function(a,b){
            var c=
            b.name.match(e);
            c?(c=c[0],d[c]||(d[c]=[]),d[c].push(b.value)):d[b.name]=b.value
            });
        b=d
        }
        var f,g=a.ajax,i=a.oInstance,j=function(b){
        w(a,null,"xhr",[a,b,a.jqXHR]);
        c(b)
        };
        
    if(h.isPlainObject(g)&&g.data){
        f=g.data;
        var n=h.isFunction(f)?f(b,a):f,b=h.isFunction(f)&&n?n:h.extend(!0,b,n);
        delete g.data
        }
        n={
        data:b,
        success:function(b){
            var c=b.error||b.sError;
            c&&J(a,0,c);
            a.json=b;
            j(b)
            },
        dataType:"json",
        cache:!1,
        type:a.sServerMethod,
        error:function(b,c){
            var d=w(a,null,"xhr",[a,null,a.jqXHR]);
            -1===h.inArray(!0,d)&&("parsererror"==
                c?J(a,0,"Invalid JSON response",1):4===b.readyState&&J(a,0,"Ajax error",7));
            C(a,!1)
            }
        };
    
a.oAjaxData=b;
w(a,null,"preXhr",[a,b]);
a.fnServerData?a.fnServerData.call(i,a.sAjaxSource,h.map(b,function(a,b){
    return{
        name:b,
        value:a
    }
}),j,a):a.sAjaxSource||"string"===typeof g?a.jqXHR=h.ajax(h.extend(n,{
    url:g||a.sAjaxSource
    })):h.isFunction(g)?a.jqXHR=g.call(i,b,j,a):(a.jqXHR=h.ajax(h.extend(n,g)),g.data=f)
}
function lb(a){
    return a.bAjaxDataGet?(a.iDraw++,C(a,!0),ra(a,ub(a),function(b){
        vb(a,b)
        }),!1):!0
    }
    function ub(a){
    var b=
    a.aoColumns,c=b.length,d=a.oFeatures,e=a.oPreviousSearch,f=a.aoPreSearchCols,g,i=[],j,n,l,r=V(a);
    g=a._iDisplayStart;
    j=!1!==d.bPaginate?a._iDisplayLength:-1;
    var q=function(a,b){
        i.push({
            name:a,
            value:b
        })
        };
        
    q("sEcho",a.iDraw);
    q("iColumns",c);
    q("sColumns",D(b,"sName").join(","));
    q("iDisplayStart",g);
    q("iDisplayLength",j);
    var k={
        draw:a.iDraw,
        columns:[],
        order:[],
        start:g,
        length:j,
        search:{
            value:e.sSearch,
            regex:e.bRegex
            }
        };
    
for(g=0;g<c;g++)n=b[g],l=f[g],j="function"==typeof n.mData?"function":n.mData,k.columns.push({
    data:j,
    name:n.sName,
    searchable:n.bSearchable,
    orderable:n.bSortable,
    search:{
        value:l.sSearch,
        regex:l.bRegex
        }
    }),q("mDataProp_"+g,j),d.bFilter&&(q("sSearch_"+g,l.sSearch),q("bRegex_"+g,l.bRegex),q("bSearchable_"+g,n.bSearchable)),d.bSort&&q("bSortable_"+g,n.bSortable);
d.bFilter&&(q("sSearch",e.sSearch),q("bRegex",e.bRegex));
d.bSort&&(h.each(r,function(a,b){
    k.order.push({
        column:b.col,
        dir:b.dir
        });
    q("iSortCol_"+a,b.col);
    q("sSortDir_"+a,b.dir)
    }),q("iSortingCols",r.length));
b=m.ext.legacy.ajax;
return null===b?a.sAjaxSource?
i:k:b?i:k
}
function vb(a,b){
    var c=sa(a,b),d=b.sEcho!==k?b.sEcho:b.draw,e=b.iTotalRecords!==k?b.iTotalRecords:b.recordsTotal,f=b.iTotalDisplayRecords!==k?b.iTotalDisplayRecords:b.recordsFiltered;
    if(d){
        if(1*d<a.iDraw)return;
        a.iDraw=1*d
        }
        na(a);
    a._iRecordsTotal=parseInt(e,10);
    a._iRecordsDisplay=parseInt(f,10);
    d=0;
    for(e=c.length;d<e;d++)L(a,c[d]);
    a.aiDisplay=a.aiDisplayMaster.slice();
    a.bAjaxDataGet=!1;
    M(a);
    a._bInitComplete||ta(a,b);
    a.bAjaxDataGet=!0;
    C(a,!1)
    }
    function sa(a,b){
    var c=h.isPlainObject(a.ajax)&&
    a.ajax.dataSrc!==k?a.ajax.dataSrc:a.sAjaxDataProp;
    return"data"===c?b.aaData||b[c]:""!==c?P(c)(b):b
    }
    function pb(a){
    var b=a.oClasses,c=a.sTableId,d=a.oLanguage,e=a.oPreviousSearch,f=a.aanFeatures,g='<input type="search" class="'+b.sFilterInput+'"/>',i=d.sSearch,i=i.match(/_INPUT_/)?i.replace("_INPUT_",g):i+g,b=h("<div/>",{
        id:!f.f?c+"_filter":null,
        "class":b.sFilter
        }).append(h("<label/>").append(i)),f=function(){
        var b=!this.value?"":this.value;
        b!=e.sSearch&&(ha(a,{
            sSearch:b,
            bRegex:e.bRegex,
            bSmart:e.bSmart,
            bCaseInsensitive:e.bCaseInsensitive
            }),a._iDisplayStart=0,M(a))
        },g=null!==a.searchDelay?a.searchDelay:"ssp"===y(a)?400:0,j=h("input",b).val(e.sSearch).attr("placeholder",d.sSearchPlaceholder).bind("keyup.DT search.DT input.DT paste.DT cut.DT",g?ua(f,g):f).bind("keypress.DT",function(a){
        if(13==a.keyCode)return!1
            }).attr("aria-controls",c);
    h(a.nTable).on("search.dt.DT",function(b,c){
        if(a===c)try{
            j[0]!==T.activeElement&&j.val(e.sSearch)
            }catch(d){}
        });
return b[0]
}
function ha(a,b,c){
    var d=a.oPreviousSearch,
    e=a.aoPreSearchCols,f=function(a){
        d.sSearch=a.sSearch;
        d.bRegex=a.bRegex;
        d.bSmart=a.bSmart;
        d.bCaseInsensitive=a.bCaseInsensitive
        };
        
    Ia(a);
    if("ssp"!=y(a)){
        wb(a,b.sSearch,c,b.bEscapeRegex!==k?!b.bEscapeRegex:b.bRegex,b.bSmart,b.bCaseInsensitive);
        f(b);
        for(b=0;b<e.length;b++)xb(a,e[b].sSearch,b,e[b].bEscapeRegex!==k?!e[b].bEscapeRegex:e[b].bRegex,e[b].bSmart,e[b].bCaseInsensitive);
        yb(a)
        }else f(b);
    a.bFiltered=!0;
    w(a,null,"search",[a])
    }
    function yb(a){
    for(var b=m.ext.search,c=a.aiDisplay,d,e,f=0,g=b.length;f<
        g;f++){
        for(var i=[],j=0,n=c.length;j<n;j++)e=c[j],d=a.aoData[e],b[f](a,d._aFilterData,e,d._aData,j)&&i.push(e);
        c.length=0;
        h.merge(c,i)
        }
    }
    function xb(a,b,c,d,e,f){
    if(""!==b)for(var g=a.aiDisplay,d=Qa(b,d,e,f),e=g.length-1;0<=e;e--)b=a.aoData[g[e]]._aFilterData[c],d.test(b)||g.splice(e,1)
        }
        function wb(a,b,c,d,e,f){
    var d=Qa(b,d,e,f),e=a.oPreviousSearch.sSearch,f=a.aiDisplayMaster,g;
    0!==m.ext.search.length&&(c=!0);
    g=zb(a);
    if(0>=b.length)a.aiDisplay=f.slice();
    else{
        if(g||c||e.length>b.length||0!==b.indexOf(e)||
            a.bSorted)a.aiDisplay=f.slice();
        b=a.aiDisplay;
        for(c=b.length-1;0<=c;c--)d.test(a.aoData[b[c]]._sFilterRow)||b.splice(c,1)
            }
        }
function Qa(a,b,c,d){
    a=b?a:va(a);
    c&&(a="^(?=.*?"+h.map(a.match(/"[^"]+"|[^ ]+/g)||[""],function(a){
        if('"'===a.charAt(0))var b=a.match(/^"(.*)"$/),a=b?b[1]:a;
        return a.replace('"',"")
        }).join(")(?=.*?")+").*$");
    return RegExp(a,d?"i":"")
    }
    function va(a){
    return a.replace(Yb,"\\$1")
    }
    function zb(a){
    var b=a.aoColumns,c,d,e,f,g,i,j,h,l=m.ext.type.search;
    c=!1;
    d=0;
    for(f=a.aoData.length;d<
        f;d++)if(h=a.aoData[d],!h._aFilterData){
        i=[];
        e=0;
        for(g=b.length;e<g;e++)c=b[e],c.bSearchable?(j=B(a,d,e,"filter"),l[c.sType]&&(j=l[c.sType](j)),null===j&&(j=""),"string"!==typeof j&&j.toString&&(j=j.toString())):j="",j.indexOf&&-1!==j.indexOf("&")&&(wa.innerHTML=j,j=Zb?wa.textContent:wa.innerText),j.replace&&(j=j.replace(/[\r\n]/g,"")),i.push(j);
        h._aFilterData=i;
        h._sFilterRow=i.join("  ");
        c=!0
        }
        return c
    }
    function Ab(a){
    return{
        search:a.sSearch,
        smart:a.bSmart,
        regex:a.bRegex,
        caseInsensitive:a.bCaseInsensitive
        }
    }
function Bb(a){
    return{
        sSearch:a.search,
        bSmart:a.smart,
        bRegex:a.regex,
        bCaseInsensitive:a.caseInsensitive
        }
    }
function sb(a){
    var b=a.sTableId,c=a.aanFeatures.i,d=h("<div/>",{
        "class":a.oClasses.sInfo,
        id:!c?b+"_info":null
        });
    c||(a.aoDrawCallback.push({
        fn:Cb,
        sName:"information"
    }),d.attr("role","status").attr("aria-live","polite"),h(a.nTable).attr("aria-describedby",b+"_info"));
    return d[0]
    }
    function Cb(a){
    var b=a.aanFeatures.i;
    if(0!==b.length){
        var c=a.oLanguage,d=a._iDisplayStart+1,e=a.fnDisplayEnd(),f=a.fnRecordsTotal(),
        g=a.fnRecordsDisplay(),i=g?c.sInfo:c.sInfoEmpty;
        g!==f&&(i+=" "+c.sInfoFiltered);
        i+=c.sInfoPostFix;
        i=Db(a,i);
        c=c.fnInfoCallback;
        null!==c&&(i=c.call(a.oInstance,a,d,e,f,g,i));
        h(b).html(i)
        }
    }
function Db(a,b){
    var c=a.fnFormatNumber,d=a._iDisplayStart+1,e=a._iDisplayLength,f=a.fnRecordsDisplay(),g=-1===e;
    return b.replace(/_START_/g,c.call(a,d)).replace(/_END_/g,c.call(a,a.fnDisplayEnd())).replace(/_MAX_/g,c.call(a,a.fnRecordsTotal())).replace(/_TOTAL_/g,c.call(a,f)).replace(/_PAGE_/g,c.call(a,g?1:Math.ceil(d/
        e))).replace(/_PAGES_/g,c.call(a,g?1:Math.ceil(f/e)))
    }
    function ia(a){
    var b,c,d=a.iInitDisplayStart,e=a.aoColumns,f;
    c=a.oFeatures;
    var g=a.bDeferLoading;
    if(a.bInitialised){
        nb(a);
        kb(a);
        ga(a,a.aoHeader);
        ga(a,a.aoFooter);
        C(a,!0);
        c.bAutoWidth&&Ha(a);
        b=0;
        for(c=e.length;b<c;b++)f=e[b],f.sWidth&&(f.nTh.style.width=u(f.sWidth));
        w(a,null,"preInit",[a]);
        R(a);
        e=y(a);
        if("ssp"!=e||g)"ajax"==e?ra(a,[],function(c){
            var f=sa(a,c);
            for(b=0;b<f.length;b++)L(a,f[b]);
            a.iInitDisplayStart=d;
            R(a);
            C(a,!1);
            ta(a,c)
            },a):(C(a,!1),
            ta(a))
        }else setTimeout(function(){
        ia(a)
        },200)
    }
    function ta(a,b){
    a._bInitComplete=!0;
    (b||a.oInit.aaData)&&Y(a);
    w(a,"aoInitComplete","init",[a,b])
    }
    function Ra(a,b){
    var c=parseInt(b,10);
    a._iDisplayLength=c;
    Sa(a);
    w(a,null,"length",[a,c])
    }
    function ob(a){
    for(var b=a.oClasses,c=a.sTableId,d=a.aLengthMenu,e=h.isArray(d[0]),f=e?d[0]:d,d=e?d[1]:d,e=h("<select/>",{
        name:c+"_length",
        "aria-controls":c,
        "class":b.sLengthSelect
        }),g=0,i=f.length;g<i;g++)e[0][g]=new Option(d[g],f[g]);
    var j=h("<div><label/></div>").addClass(b.sLength);
    a.aanFeatures.l||(j[0].id=c+"_length");
    j.children().append(a.oLanguage.sLengthMenu.replace("_MENU_",e[0].outerHTML));
    h("select",j).val(a._iDisplayLength).bind("change.DT",function(){
        Ra(a,h(this).val());
        M(a)
        });
    h(a.nTable).bind("length.dt.DT",function(b,c,d){
        a===c&&h("select",j).val(d)
        });
    return j[0]
    }
    function tb(a){
    var b=a.sPaginationType,c=m.ext.pager[b],d="function"===typeof c,e=function(a){
        M(a)
        },b=h("<div/>").addClass(a.oClasses.sPaging+b)[0],f=a.aanFeatures;
    d||c.fnInit(a,b,e);
    f.p||(b.id=a.sTableId+
        "_paginate",a.aoDrawCallback.push({
            fn:function(a){
                if(d){
                    var b=a._iDisplayStart,j=a._iDisplayLength,h=a.fnRecordsDisplay(),l=-1===j,b=l?0:Math.ceil(b/j),j=l?1:Math.ceil(h/j),h=c(b,j),k,l=0;
                    for(k=f.p.length;l<k;l++)Pa(a,"pageButton")(a,f.p[l],l,h,b,j)
                        }else c.fnUpdate(a,e)
                    },
            sName:"pagination"
        }));
    return b
    }
    function Ta(a,b,c){
    var d=a._iDisplayStart,e=a._iDisplayLength,f=a.fnRecordsDisplay();
    0===f||-1===e?d=0:"number"===typeof b?(d=b*e,d>f&&(d=0)):"first"==b?d=0:"previous"==b?(d=0<=e?d-e:0,0>d&&(d=0)):"next"==
    b?d+e<f&&(d+=e):"last"==b?d=Math.floor((f-1)/e)*e:J(a,0,"Unknown paging action: "+b,5);
    b=a._iDisplayStart!==d;
    a._iDisplayStart=d;
    b&&(w(a,null,"page",[a]),c&&M(a));
    return b
    }
    function qb(a){
    return h("<div/>",{
        id:!a.aanFeatures.r?a.sTableId+"_processing":null,
        "class":a.oClasses.sProcessing
        }).html(a.oLanguage.sProcessing).insertBefore(a.nTable)[0]
    }
    function C(a,b){
    a.oFeatures.bProcessing&&h(a.aanFeatures.r).css("display",b?"block":"none");
    w(a,null,"processing",[a,b])
    }
    function rb(a){
    var b=h(a.nTable);
    b.attr("role",
        "grid");
    var c=a.oScroll;
    if(""===c.sX&&""===c.sY)return a.nTable;
    var d=c.sX,e=c.sY,f=a.oClasses,g=b.children("caption"),i=g.length?g[0]._captionSide:null,j=h(b[0].cloneNode(!1)),n=h(b[0].cloneNode(!1)),l=b.children("tfoot");
    c.sX&&"100%"===b.attr("width")&&b.removeAttr("width");
    l.length||(l=null);
    j=h("<div/>",{
        "class":f.sScrollWrapper
        }).append(h("<div/>",{
        "class":f.sScrollHead
        }).css({
        overflow:"hidden",
        position:"relative",
        border:0,
        width:d?!d?null:u(d):"100%"
        }).append(h("<div/>",{
        "class":f.sScrollHeadInner
        }).css({
        "box-sizing":"content-box",
        width:c.sXInner||"100%"
        }).append(j.removeAttr("id").css("margin-left",0).append("top"===i?g:null).append(b.children("thead"))))).append(h("<div/>",{
        "class":f.sScrollBody
        }).css({
        position:"relative",
        overflow:"auto",
        width:!d?null:u(d)
        }).append(b));
    l&&j.append(h("<div/>",{
        "class":f.sScrollFoot
        }).css({
        overflow:"hidden",
        border:0,
        width:d?!d?null:u(d):"100%"
        }).append(h("<div/>",{
        "class":f.sScrollFootInner
        }).append(n.removeAttr("id").css("margin-left",0).append("bottom"===i?g:null).append(b.children("tfoot")))));
    var b=j.children(),k=b[0],f=b[1],q=l?b[2]:null;
    if(d)h(f).on("scroll.DT",function(){
        var a=this.scrollLeft;
        k.scrollLeft=a;
        l&&(q.scrollLeft=a)
        });
    h(f).css(e&&c.bCollapse?"max-height":"height",e);
    a.nScrollHead=k;
    a.nScrollBody=f;
    a.nScrollFoot=q;
    a.aoDrawCallback.push({
        fn:Z,
        sName:"scrolling"
    });
    return j[0]
    }
    function Z(a){
    var b=a.oScroll,c=b.sX,d=b.sXInner,e=b.sY,b=b.iBarWidth,f=h(a.nScrollHead),g=f[0].style,i=f.children("div"),j=i[0].style,n=i.children("table"),i=a.nScrollBody,l=h(i),k=i.style,q=h(a.nScrollFoot).children("div"),
    m=q.children("table"),o=h(a.nTHead),E=h(a.nTable),p=E[0],t=p.style,N=a.nTFoot?h(a.nTFoot):null,Eb=a.oBrowser,w=Eb.bScrollOversize,s,v,O,x,y=[],z=[],A=[],B,C=function(a){
        a=a.style;
        a.paddingTop="0";
        a.paddingBottom="0";
        a.borderTopWidth="0";
        a.borderBottomWidth="0";
        a.height=0
        };
        
    E.children("thead, tfoot").remove();
    x=o.clone().prependTo(E);
    o=o.find("tr");
    v=x.find("tr");
    x.find("th, td").removeAttr("tabindex");
    N&&(O=N.clone().prependTo(E),s=N.find("tr"),O=O.find("tr"));
    c||(k.width="100%",f[0].style.width="100%");
    h.each(qa(a,x),function(b,c){
        B=$(a,b);
        c.style.width=a.aoColumns[B].sWidth
        });
    N&&H(function(a){
        a.style.width=""
        },O);
    f=E.outerWidth();
    if(""===c){
        t.width="100%";
        if(w&&(E.find("tbody").height()>i.offsetHeight||"scroll"==l.css("overflow-y")))t.width=u(E.outerWidth()-b);
        f=E.outerWidth()
        }else""!==d&&(t.width=u(d),f=E.outerWidth());
    H(C,v);
    H(function(a){
        A.push(a.innerHTML);
        y.push(u(h(a).css("width")))
        },v);
    H(function(a,b){
        a.style.width=y[b]
        },o);
    h(v).height(0);
    N&&(H(C,O),H(function(a){
        z.push(u(h(a).css("width")))
        },
    O),H(function(a,b){
        a.style.width=z[b]
        },s),h(O).height(0));
    H(function(a,b){
        a.innerHTML='<div class="dataTables_sizing" style="height:0;overflow:hidden;">'+A[b]+"</div>";
        a.style.width=y[b]
        },v);
    N&&H(function(a,b){
        a.innerHTML="";
        a.style.width=z[b]
        },O);
    if(E.outerWidth()<f){
        s=i.scrollHeight>i.offsetHeight||"scroll"==l.css("overflow-y")?f+b:f;
        if(w&&(i.scrollHeight>i.offsetHeight||"scroll"==l.css("overflow-y")))t.width=u(s-b);
        (""===c||""!==d)&&J(a,1,"Possible column misalignment",6)
        }else s="100%";
    k.width=
    u(s);
    g.width=u(s);
    N&&(a.nScrollFoot.style.width=u(s));
    !e&&w&&(k.height=u(p.offsetHeight+b));
    c=E.outerWidth();
    n[0].style.width=u(c);
    j.width=u(c);
    d=E.height()>i.clientHeight||"scroll"==l.css("overflow-y");
    e="padding"+(Eb.bScrollbarLeft?"Left":"Right");
    j[e]=d?b+"px":"0px";
    N&&(m[0].style.width=u(c),q[0].style.width=u(c),q[0].style[e]=d?b+"px":"0px");
    l.scroll();
    if((a.bSorted||a.bFiltered)&&!a._drawHold)i.scrollTop=0
        }
        function H(a,b,c){
    for(var d=0,e=0,f=b.length,g,i;e<f;){
        g=b[e].firstChild;
        for(i=c?c[e].firstChild:
            null;g;)1===g.nodeType&&(c?a(g,i,d):a(g,d),d++),g=g.nextSibling,i=c?i.nextSibling:null;
        e++
    }
    }
    function Ha(a){
    var b=a.nTable,c=a.aoColumns,d=a.oScroll,e=d.sY,f=d.sX,g=d.sXInner,i=c.length,j=aa(a,"bVisible"),n=h("th",a.nTHead),l=b.getAttribute("width"),k=b.parentNode,q=!1,m,o,p;
    p=a.oBrowser;
    d=p.bScrollOversize;
    (m=b.style.width)&&-1!==m.indexOf("%")&&(l=m);
    for(m=0;m<j.length;m++)o=c[j[m]],null!==o.sWidth&&(o.sWidth=Fb(o.sWidthOrig,k),q=!0);
    if(d||!q&&!f&&!e&&i==ca(a)&&i==n.length)for(m=0;m<i;m++){
        if(j=
            $(a,m))c[j].sWidth=u(n.eq(m).width())
            }else{
        i=h(b).clone().css("visibility","hidden").removeAttr("id");
        i.find("tbody tr").remove();
        var t=h("<tr/>").appendTo(i.find("tbody"));
        i.find("thead, tfoot").remove();
        i.append(h(a.nTHead).clone()).append(h(a.nTFoot).clone());
        i.find("tfoot th, tfoot td").css("width","");
        n=qa(a,i.find("thead")[0]);
        for(m=0;m<j.length;m++)o=c[j[m]],n[m].style.width=null!==o.sWidthOrig&&""!==o.sWidthOrig?u(o.sWidthOrig):"";
        if(a.aoData.length)for(m=0;m<j.length;m++)q=j[m],o=c[q],h(Gb(a,
            q)).clone(!1).append(o.sContentPadding).appendTo(t);
        q=h("<div/>").css(f||e?{
            position:"absolute",
            top:0,
            left:0,
            height:1,
            right:0,
            overflow:"hidden"
        }:{}).append(i).appendTo(k);
        f&&g?i.width(g):f?(i.css("width","auto"),i.width()<k.clientWidth&&i.width(k.clientWidth)):e?i.width(k.clientWidth):l&&i.width(l);
        if(f){
            for(m=g=0;m<j.length;m++)o=c[j[m]],e=p.bBounding?n[m].getBoundingClientRect().width:h(n[m]).outerWidth(),g+=null===o.sWidthOrig?e:parseInt(o.sWidth,10)+e-h(n[m]).width();
            i.width(u(g));
            b.style.width=
            u(g)
            }
            for(m=0;m<j.length;m++)if(o=c[j[m]],p=h(n[m]).width())o.sWidth=u(p);b.style.width=u(i.css("width"));
        q.remove()
        }
        l&&(b.style.width=u(l));
    if((l||f)&&!a._reszEvt)b=function(){
        h(Fa).bind("resize.DT-"+a.sInstance,ua(function(){
            Y(a)
            }))
        },d?setTimeout(b,1E3):b(),a._reszEvt=!0
        }
        function ua(a,b){
    var c=b!==k?b:200,d,e;
    return function(){
        var b=this,g=+new Date,i=arguments;
        d&&g<d+c?(clearTimeout(e),e=setTimeout(function(){
            d=k;
            a.apply(b,i)
            },c)):(d=g,a.apply(b,i))
        }
    }
function Fb(a,b){
    if(!a)return 0;
    var c=h("<div/>").css("width",
        u(a)).appendTo(b||T.body),d=c[0].offsetWidth;
    c.remove();
    return d
    }
    function Gb(a,b){
    var c=Hb(a,b);
    if(0>c)return null;
    var d=a.aoData[c];
    return!d.nTr?h("<td/>").html(B(a,c,b,"display"))[0]:d.anCells[b]
    }
    function Hb(a,b){
    for(var c,d=-1,e=-1,f=0,g=a.aoData.length;f<g;f++)c=B(a,f,b,"display")+"",c=c.replace($b,""),c.length>d&&(d=c.length,e=f);
    return e
    }
    function u(a){
    return null===a?"0px":"number"==typeof a?0>a?"0px":a+"px":a.match(/\d$/)?a+"px":a
    }
    function V(a){
    var b,c,d=[],e=a.aoColumns,f,g,i,j;
    b=a.aaSortingFixed;
    c=h.isPlainObject(b);
    var n=[];
    f=function(a){
        a.length&&!h.isArray(a[0])?n.push(a):h.merge(n,a)
        };
        
    h.isArray(b)&&f(b);
    c&&b.pre&&f(b.pre);
    f(a.aaSorting);
    c&&b.post&&f(b.post);
    for(a=0;a<n.length;a++){
        j=n[a][0];
        f=e[j].aDataSort;
        b=0;
        for(c=f.length;b<c;b++)g=f[b],i=e[g].sType||"string",n[a]._idx===k&&(n[a]._idx=h.inArray(n[a][1],e[g].asSorting)),d.push({
            src:j,
            col:g,
            dir:n[a][1],
            index:n[a]._idx,
            type:i,
            formatter:m.ext.type.order[i+"-pre"]
            })
        }
        return d
    }
    function mb(a){
    var b,c,d=[],e=m.ext.type.order,f=a.aoData,g=
    0,i,j=a.aiDisplayMaster,h;
    Ia(a);
    h=V(a);
    b=0;
    for(c=h.length;b<c;b++)i=h[b],i.formatter&&g++,Ib(a,i.col);
    if("ssp"!=y(a)&&0!==h.length){
        b=0;
        for(c=j.length;b<c;b++)d[j[b]]=b;
        g===h.length?j.sort(function(a,b){
            var c,e,g,i,j=h.length,k=f[a]._aSortData,m=f[b]._aSortData;
            for(g=0;g<j;g++)if(i=h[g],c=k[i.col],e=m[i.col],c=c<e?-1:c>e?1:0,0!==c)return"asc"===i.dir?c:-c;c=d[a];
            e=d[b];
            return c<e?-1:c>e?1:0
            }):j.sort(function(a,b){
            var c,g,i,j,k=h.length,m=f[a]._aSortData,p=f[b]._aSortData;
            for(i=0;i<k;i++)if(j=h[i],
                c=m[j.col],g=p[j.col],j=e[j.type+"-"+j.dir]||e["string-"+j.dir],c=j(c,g),0!==c)return c;c=d[a];
            g=d[b];
            return c<g?-1:c>g?1:0
            })
        }
        a.bSorted=!0
    }
    function Jb(a){
    for(var b,c,d=a.aoColumns,e=V(a),a=a.oLanguage.oAria,f=0,g=d.length;f<g;f++){
        c=d[f];
        var i=c.asSorting;
        b=c.sTitle.replace(/<.*?>/g,"");
        var j=c.nTh;
        j.removeAttribute("aria-sort");
        c.bSortable&&(0<e.length&&e[0].col==f?(j.setAttribute("aria-sort","asc"==e[0].dir?"ascending":"descending"),c=i[e[0].index+1]||i[0]):c=i[0],b+="asc"===c?a.sSortAscending:
            a.sSortDescending);
        j.setAttribute("aria-label",b)
        }
    }
    function Ua(a,b,c,d){
    var e=a.aaSorting,f=a.aoColumns[b].asSorting,g=function(a,b){
        var c=a._idx;
        c===k&&(c=h.inArray(a[1],f));
        return c+1<f.length?c+1:b?null:0
        };
        
    "number"===typeof e[0]&&(e=a.aaSorting=[e]);
    c&&a.oFeatures.bSortMulti?(c=h.inArray(b,D(e,"0")),-1!==c?(b=g(e[c],!0),null===b&&1===e.length&&(b=0),null===b?e.splice(c,1):(e[c][1]=f[b],e[c]._idx=b)):(e.push([b,f[0],0]),e[e.length-1]._idx=0)):e.length&&e[0][0]==b?(b=g(e[0]),e.length=1,e[0][1]=f[b],
        e[0]._idx=b):(e.length=0,e.push([b,f[0]]),e[0]._idx=0);
    R(a);
    "function"==typeof d&&d(a)
    }
    function Oa(a,b,c,d){
    var e=a.aoColumns[c];
    Va(b,{},function(b){
        !1!==e.bSortable&&(a.oFeatures.bProcessing?(C(a,!0),setTimeout(function(){
            Ua(a,c,b.shiftKey,d);
            "ssp"!==y(a)&&C(a,!1)
            },0)):Ua(a,c,b.shiftKey,d))
        })
    }
    function xa(a){
    var b=a.aLastSort,c=a.oClasses.sSortColumn,d=V(a),e=a.oFeatures,f,g;
    if(e.bSort&&e.bSortClasses){
        e=0;
        for(f=b.length;e<f;e++)g=b[e].src,h(D(a.aoData,"anCells",g)).removeClass(c+(2>e?e+1:3));
        e=0;
        for(f=d.length;e<f;e++)g=d[e].src,h(D(a.aoData,"anCells",g)).addClass(c+(2>e?e+1:3))
            }
            a.aLastSort=d
    }
    function Ib(a,b){
    var c=a.aoColumns[b],d=m.ext.order[c.sSortDataType],e;
    d&&(e=d.call(a.oInstance,a,b,ba(a,b)));
    for(var f,g=m.ext.type.order[c.sType+"-pre"],i=0,h=a.aoData.length;i<h;i++)if(c=a.aoData[i],c._aSortData||(c._aSortData=[]),!c._aSortData[b]||d)f=d?e[i]:B(a,i,b,"sort"),c._aSortData[b]=g?g(f):f
        }
        function ya(a){
    if(a.oFeatures.bStateSave&&!a.bDestroying){
        var b={
            time:+new Date,
            start:a._iDisplayStart,
            length:a._iDisplayLength,
            order:h.extend(!0,[],a.aaSorting),
            search:Ab(a.oPreviousSearch),
            columns:h.map(a.aoColumns,function(b,d){
                return{
                    visible:b.bVisible,
                    search:Ab(a.aoPreSearchCols[d])
                    }
                })
        };
        
    w(a,"aoStateSaveParams","stateSaveParams",[a,b]);
    a.oSavedState=b;
    a.fnStateSaveCallback.call(a.oInstance,a,b)
    }
}
function Kb(a){
    var b,c,d=a.aoColumns;
    if(a.oFeatures.bStateSave){
        var e=a.fnStateLoadCallback.call(a.oInstance,a);
        if(e&&e.time&&(b=w(a,"aoStateLoadParams","stateLoadParams",[a,e]),-1===h.inArray(!1,b)&&(b=
            a.iStateDuration,!(0<b&&e.time<+new Date-1E3*b)&&d.length===e.columns.length))){
            a.oLoadedState=h.extend(!0,{},e);
            e.start!==k&&(a._iDisplayStart=e.start,a.iInitDisplayStart=e.start);
            e.length!==k&&(a._iDisplayLength=e.length);
            e.order!==k&&(a.aaSorting=[],h.each(e.order,function(b,c){
                a.aaSorting.push(c[0]>=d.length?[0,c[1]]:c)
                }));
            e.search!==k&&h.extend(a.oPreviousSearch,Bb(e.search));
            b=0;
            for(c=e.columns.length;b<c;b++){
                var f=e.columns[b];
                f.visible!==k&&(d[b].bVisible=f.visible);
                f.search!==k&&h.extend(a.aoPreSearchCols[b],
                    Bb(f.search))
                }
                w(a,"aoStateLoaded","stateLoaded",[a,e])
            }
        }
}
function za(a){
    var b=m.settings,a=h.inArray(a,D(b,"nTable"));
    return-1!==a?b[a]:null
    }
    function J(a,b,c,d){
    c="DataTables warning: "+(a?"table id="+a.sTableId+" - ":"")+c;
    d&&(c+=". For more information about this error, please see http://datatables.net/tn/"+d);
    if(b)Fa.console&&console.log&&console.log(c);
    else if(b=m.ext,b=b.sErrMode||b.errMode,a&&w(a,null,"error",[a,d,c]),"alert"==b)alert(c);
    else{
        if("throw"==b)throw Error(c);
        "function"==typeof b&&
        b(a,d,c)
        }
    }
function F(a,b,c,d){
    h.isArray(c)?h.each(c,function(c,d){
        h.isArray(d)?F(a,b,d[0],d[1]):F(a,b,d)
        }):(d===k&&(d=c),b[c]!==k&&(a[d]=b[c]))
    }
    function Lb(a,b,c){
    var d,e;
    for(e in b)b.hasOwnProperty(e)&&(d=b[e],h.isPlainObject(d)?(h.isPlainObject(a[e])||(a[e]={}),h.extend(!0,a[e],d)):a[e]=c&&"data"!==e&&"aaData"!==e&&h.isArray(d)?d.slice():d);return a
    }
    function Va(a,b,c){
    h(a).bind("click.DT",b,function(b){
        a.blur();
        c(b)
        }).bind("keypress.DT",b,function(a){
        13===a.which&&(a.preventDefault(),c(a))
        }).bind("selectstart.DT",
        function(){
            return!1
            })
    }
    function z(a,b,c,d){
    c&&a[b].push({
        fn:c,
        sName:d
    })
    }
    function w(a,b,c,d){
    var e=[];
    b&&(e=h.map(a[b].slice().reverse(),function(b){
        return b.fn.apply(a.oInstance,d)
        }));
    null!==c&&(b=h.Event(c+".dt"),h(a.nTable).trigger(b,d),e.push(b.result));
    return e
    }
    function Sa(a){
    var b=a._iDisplayStart,c=a.fnDisplayEnd(),d=a._iDisplayLength;
    b>=c&&(b=c-d);
    b-=b%d;
    if(-1===d||0>b)b=0;
    a._iDisplayStart=b
    }
    function Pa(a,b){
    var c=a.renderer,d=m.ext.renderer[b];
    return h.isPlainObject(c)&&c[b]?d[c[b]]||d._:"string"===
    typeof c?d[c]||d._:d._
    }
    function y(a){
    return a.oFeatures.bServerSide?"ssp":a.ajax||a.sAjaxSource?"ajax":"dom"
    }
    function Aa(a,b){
    var c=[],c=Mb.numbers_length,d=Math.floor(c/2);
    b<=c?c=W(0,b):a<=d?(c=W(0,c-2),c.push("ellipsis"),c.push(b-1)):(a>=b-1-d?c=W(b-(c-2),b):(c=W(a-d+2,a+d-1),c.push("ellipsis"),c.push(b-1)),c.splice(0,0,"ellipsis"),c.splice(0,0,0));
    c.DT_el="span";
    return c
    }
    function cb(a){
    h.each({
        num:function(b){
            return Ba(b,a)
            },
        "num-fmt":function(b){
            return Ba(b,a,Wa)
            },
        "html-num":function(b){
            return Ba(b,
                a,Ca)
            },
        "html-num-fmt":function(b){
            return Ba(b,a,Ca,Wa)
            }
        },function(b,c){
        v.type.order[b+a+"-pre"]=c;
        b.match(/^html\-/)&&(v.type.search[b+a]=v.type.search.html)
        })
}
function Nb(a){
    return function(){
        var b=[za(this[m.ext.iApiIndex])].concat(Array.prototype.slice.call(arguments));
        return m.ext.internal[a].apply(this,b)
        }
    }
var m,v,t,p,s,Xa={},Ob=/[\r\n]/g,Ca=/<.*?>/g,ac=/^[\w\+\-]/,bc=/[\w\+\-]$/,Yb=RegExp("(\\/|\\.|\\*|\\+|\\?|\\||\\(|\\)|\\[|\\]|\\{|\\}|\\\\|\\$|\\^|\\-)","g"),Wa=/[',$£€¥%\u2009\u202F\u20BD\u20a9\u20BArfk]/gi,
K=function(a){
    return!a||!0===a||"-"===a?!0:!1
    },Pb=function(a){
    var b=parseInt(a,10);
    return!isNaN(b)&&isFinite(a)?b:null
    },Qb=function(a,b){
    Xa[b]||(Xa[b]=RegExp(va(b),"g"));
    return"string"===typeof a&&"."!==b?a.replace(/\./g,"").replace(Xa[b],"."):a
    },Ya=function(a,b,c){
    var d="string"===typeof a;
    if(K(a))return!0;
    b&&d&&(a=Qb(a,b));
    c&&d&&(a=a.replace(Wa,""));
    return!isNaN(parseFloat(a))&&isFinite(a)
    },Rb=function(a,b,c){
    return K(a)?!0:!(K(a)||"string"===typeof a)?null:Ya(a.replace(Ca,""),b,c)?!0:null
    },D=function(a,
    b,c){
    var d=[],e=0,f=a.length;
    if(c!==k)for(;e<f;e++)a[e]&&a[e][b]&&d.push(a[e][b][c]);else for(;e<f;e++)a[e]&&d.push(a[e][b]);
    return d
    },ja=function(a,b,c,d){
    var e=[],f=0,g=b.length;
    if(d!==k)for(;f<g;f++)a[b[f]][c]&&e.push(a[b[f]][c][d]);else for(;f<g;f++)e.push(a[b[f]][c]);
    return e
    },W=function(a,b){
    var c=[],d;
    b===k?(b=0,d=a):(d=b,b=a);
    for(var e=b;e<d;e++)c.push(e);
    return c
    },Sb=function(a){
    for(var b=[],c=0,d=a.length;c<d;c++)a[c]&&b.push(a[c]);
    return b
    },pa=function(a){
    var b=[],c,d,e=a.length,f,g=0;
    d=0;
        a:for(;d<e;d++){
        c=a[d];
        for(f=0;f<g;f++)if(b[f]===c)continue a;b.push(c);
        g++
    }
    return b
    },A=function(a,b,c){
    a[b]!==k&&(a[c]=a[b])
    },da=/\[.*?\]$/,U=/\(\)$/,wa=h("<div>")[0],Zb=wa.textContent!==k,$b=/<.*?>/g;
m=function(a){
    this.$=function(a,b){
        return this.api(!0).$(a,b)
        };
        
    this._=function(a,b){
        return this.api(!0).rows(a,b).data()
        };
        
    this.api=function(a){
        return a?new t(za(this[v.iApiIndex])):new t(this)
        };
        
    this.fnAddData=function(a,b){
        var c=this.api(!0),d=h.isArray(a)&&(h.isArray(a[0])||h.isPlainObject(a[0]))?
        c.rows.add(a):c.row.add(a);
        (b===k||b)&&c.draw();
        return d.flatten().toArray()
        };
        
    this.fnAdjustColumnSizing=function(a){
        var b=this.api(!0).columns.adjust(),c=b.settings()[0],d=c.oScroll;
        a===k||a?b.draw(!1):(""!==d.sX||""!==d.sY)&&Z(c)
        };
        
    this.fnClearTable=function(a){
        var b=this.api(!0).clear();
        (a===k||a)&&b.draw()
        };
        
    this.fnClose=function(a){
        this.api(!0).row(a).child.hide()
        };
        
    this.fnDeleteRow=function(a,b,c){
        var d=this.api(!0),a=d.rows(a),e=a.settings()[0],h=e.aoData[a[0][0]];
        a.remove();
        b&&b.call(this,e,h);
        (c===k||c)&&d.draw();
        return h
        };
        
    this.fnDestroy=function(a){
        this.api(!0).destroy(a)
        };
        
    this.fnDraw=function(a){
        this.api(!0).draw(a)
        };
        
    this.fnFilter=function(a,b,c,d,e,h){
        e=this.api(!0);
        null===b||b===k?e.search(a,c,d,h):e.column(b).search(a,c,d,h);
        e.draw()
        };
        
    this.fnGetData=function(a,b){
        var c=this.api(!0);
        if(a!==k){
            var d=a.nodeName?a.nodeName.toLowerCase():"";
            return b!==k||"td"==d||"th"==d?c.cell(a,b).data():c.row(a).data()||null
            }
            return c.data().toArray()
        };
        
    this.fnGetNodes=function(a){
        var b=this.api(!0);
        return a!==k?b.row(a).node():b.rows().nodes().flatten().toArray()
        };
        
    this.fnGetPosition=function(a){
        var b=this.api(!0),c=a.nodeName.toUpperCase();
        return"TR"==c?b.row(a).index():"TD"==c||"TH"==c?(a=b.cell(a).index(),[a.row,a.columnVisible,a.column]):null
        };
        
    this.fnIsOpen=function(a){
        return this.api(!0).row(a).child.isShown()
        };
        
    this.fnOpen=function(a,b,c){
        return this.api(!0).row(a).child(b,c).show().child()[0]
        };
        
    this.fnPageChange=function(a,b){
        var c=this.api(!0).page(a);
        (b===k||b)&&c.draw(!1)
        };
        
    this.fnSetColumnVis=
    function(a,b,c){
        a=this.api(!0).column(a).visible(b);
        (c===k||c)&&a.columns.adjust().draw()
        };
        
    this.fnSettings=function(){
        return za(this[v.iApiIndex])
        };
        
    this.fnSort=function(a){
        this.api(!0).order(a).draw()
        };
        
    this.fnSortListener=function(a,b,c){
        this.api(!0).order.listener(a,b,c)
        };
        
    this.fnUpdate=function(a,b,c,d,e){
        var h=this.api(!0);
        c===k||null===c?h.row(b).data(a):h.cell(b,c).data(a);
        (e===k||e)&&h.columns.adjust();
        (d===k||d)&&h.draw();
        return 0
        };
        
    this.fnVersionCheck=v.fnVersionCheck;
    var b=this,c=a===k,d=this.length;
    c&&(a={});
    this.oApi=this.internal=v.internal;
    for(var e in m.ext.internal)e&&(this[e]=Nb(e));this.each(function(){
        var e={},e=1<d?Lb(e,a,!0):a,g=0,i,j=this.getAttribute("id"),n=!1,l=m.defaults,r=h(this);
        if("table"!=this.nodeName.toLowerCase())J(null,0,"Non-table node initialisation ("+this.nodeName+")",2);
        else{
            db(l);
            eb(l.column);
            I(l,l,!0);
            I(l.column,l.column,!0);
            I(l,h.extend(e,r.data()));
            var q=m.settings,g=0;
            for(i=q.length;g<i;g++){
                var p=q[g];
                if(p.nTable==this||p.nTHead.parentNode==this||p.nTFoot&&
                    p.nTFoot.parentNode==this){
                    g=e.bRetrieve!==k?e.bRetrieve:l.bRetrieve;
                    if(c||g)return p.oInstance;
                    if(e.bDestroy!==k?e.bDestroy:l.bDestroy){
                        p.oInstance.fnDestroy();
                        break
                    }else{
                        J(p,0,"Cannot reinitialise DataTable",3);
                        return
                    }
                }
                if(p.sTableId==this.id){
                q.splice(g,1);
                break
            }
            }
            if(null===j||""===j)this.id=j="DataTables_Table_"+m.ext._unique++;
        var o=h.extend(!0,{},m.models.oSettings,{
        sDestroyWidth:r[0].style.width,
        sInstance:j,
        sTableId:j
    });
    o.nTable=this;
    o.oApi=b.internal;
    o.oInit=e;
    q.push(o);
        o.oInstance=1===b.length?
        b:r.dataTable();
        db(e);
        e.oLanguage&&S(e.oLanguage);
        e.aLengthMenu&&!e.iDisplayLength&&(e.iDisplayLength=h.isArray(e.aLengthMenu[0])?e.aLengthMenu[0][0]:e.aLengthMenu[0]);
        e=Lb(h.extend(!0,{},l),e);
        F(o.oFeatures,e,"bPaginate bLengthChange bFilter bSort bSortMulti bInfo bProcessing bAutoWidth bSortClasses bServerSide bDeferRender".split(" "));
        F(o,e,["asStripeClasses","ajax","fnServerData","fnFormatNumber","sServerMethod","aaSorting","aaSortingFixed","aLengthMenu","sPaginationType","sAjaxSource","sAjaxDataProp",
            "iStateDuration","sDom","bSortCellsTop","iTabIndex","fnStateLoadCallback","fnStateSaveCallback","renderer","searchDelay","rowId",["iCookieDuration","iStateDuration"],["oSearch","oPreviousSearch"],["aoSearchCols","aoPreSearchCols"],["iDisplayLength","_iDisplayLength"],["bJQueryUI","bJUI"]]);
        F(o.oScroll,e,[["sScrollX","sX"],["sScrollXInner","sXInner"],["sScrollY","sY"],["bScrollCollapse","bCollapse"]]);
        F(o.oLanguage,e,"fnInfoCallback");
        z(o,"aoDrawCallback",e.fnDrawCallback,"user");
        z(o,"aoServerParams",
            e.fnServerParams,"user");
        z(o,"aoStateSaveParams",e.fnStateSaveParams,"user");
        z(o,"aoStateLoadParams",e.fnStateLoadParams,"user");
        z(o,"aoStateLoaded",e.fnStateLoaded,"user");
        z(o,"aoRowCallback",e.fnRowCallback,"user");
        z(o,"aoRowCreatedCallback",e.fnCreatedRow,"user");
        z(o,"aoHeaderCallback",e.fnHeaderCallback,"user");
        z(o,"aoFooterCallback",e.fnFooterCallback,"user");
        z(o,"aoInitComplete",e.fnInitComplete,"user");
        z(o,"aoPreDrawCallback",e.fnPreDrawCallback,"user");
        o.rowIdFn=P(e.rowId);
        fb(o);
        j=o.oClasses;
        e.bJQueryUI?(h.extend(j,m.ext.oJUIClasses,e.oClasses),e.sDom===l.sDom&&"lfrtip"===l.sDom&&(o.sDom='<"H"lfr>t<"F"ip>'),o.renderer)?h.isPlainObject(o.renderer)&&!o.renderer.header&&(o.renderer.header="jqueryui"):o.renderer="jqueryui":h.extend(j,m.ext.classes,e.oClasses);
        r.addClass(j.sTable);
        o.iInitDisplayStart===k&&(o.iInitDisplayStart=e.iDisplayStart,o._iDisplayStart=e.iDisplayStart);
        null!==e.iDeferLoading&&(o.bDeferLoading=!0,g=h.isArray(e.iDeferLoading),o._iRecordsDisplay=g?e.iDeferLoading[0]:e.iDeferLoading,
            o._iRecordsTotal=g?e.iDeferLoading[1]:e.iDeferLoading);
        var t=o.oLanguage;
        h.extend(!0,t,e.oLanguage);
        ""!==t.sUrl&&(h.ajax({
            dataType:"json",
            url:t.sUrl,
            success:function(a){
                S(a);
                I(l.oLanguage,a);
                h.extend(true,t,a);
                ia(o)
                },
            error:function(){
                ia(o)
                }
            }),n=!0);
    null===e.asStripeClasses&&(o.asStripeClasses=[j.sStripeOdd,j.sStripeEven]);
    var g=o.asStripeClasses,s=r.children("tbody").find("tr").eq(0);
    -1!==h.inArray(!0,h.map(g,function(a){
        return s.hasClass(a)
        }))&&(h("tbody tr",this).removeClass(g.join(" ")),o.asDestroyStripes=
        g.slice());
    q=[];
    g=this.getElementsByTagName("thead");
    0!==g.length&&(fa(o.aoHeader,g[0]),q=qa(o));
    if(null===e.aoColumns){
        p=[];
        g=0;
        for(i=q.length;g<i;g++)p.push(null)
            }else p=e.aoColumns;
    g=0;
    for(i=p.length;g<i;g++)Ga(o,q?q[g]:null);
    hb(o,e.aoColumnDefs,p,function(a,b){
        la(o,a,b)
        });
    if(s.length){
        var u=function(a,b){
            return a.getAttribute("data-"+b)!==null?b:null
            };
            
        h(s[0]).children("th, td").each(function(a,b){
            var c=o.aoColumns[a];
            if(c.mData===a){
                var d=u(b,"sort")||u(b,"order"),e=u(b,"filter")||u(b,"search");
                if(d!==null||e!==null){
                    c.mData={
                        _:a+".display",
                        sort:d!==null?a+".@data-"+d:k,
                        type:d!==null?a+".@data-"+d:k,
                        filter:e!==null?a+".@data-"+e:k
                        };
                        
                    la(o,a)
                    }
                }
        })
}
var v=o.oFeatures;
e.bStateSave&&(v.bStateSave=!0,Kb(o,e),z(o,"aoDrawCallback",ya,"state_save"));
if(e.aaSorting===k){
    q=o.aaSorting;
    g=0;
    for(i=q.length;g<i;g++)q[g][1]=o.aoColumns[g].asSorting[0]
        }
        xa(o);
v.bSort&&z(o,"aoDrawCallback",function(){
    if(o.bSorted){
        var a=V(o),b={};
        
        h.each(a,function(a,c){
            b[c.src]=c.dir
            });
        w(o,null,"order",[o,a,b]);
        Jb(o)
        }
    });
z(o,
    "aoDrawCallback",function(){
        (o.bSorted||y(o)==="ssp"||v.bDeferRender)&&xa(o)
        },"sc");
g=r.children("caption").each(function(){
    this._captionSide=r.css("caption-side")
    });
i=r.children("thead");
0===i.length&&(i=h("<thead/>").appendTo(this));
o.nTHead=i[0];
i=r.children("tbody");
0===i.length&&(i=h("<tbody/>").appendTo(this));
o.nTBody=i[0];
i=r.children("tfoot");
if(0===i.length&&0<g.length&&(""!==o.oScroll.sX||""!==o.oScroll.sY))i=h("<tfoot/>").appendTo(this);
0===i.length||0===i.children().length?r.addClass(j.sNoFooter):
0<i.length&&(o.nTFoot=i[0],fa(o.aoFooter,o.nTFoot));
if(e.aaData)for(g=0;g<e.aaData.length;g++)L(o,e.aaData[g]);else(o.bDeferLoading||"dom"==y(o))&&ma(o,h(o.nTBody).children("tr"));
o.aiDisplay=o.aiDisplayMaster.slice();
o.bInitialised=!0;
!1===n&&ia(o)
}
});
b=null;
return this
};

var Tb=[],x=Array.prototype,cc=function(a){
    var b,c,d=m.settings,e=h.map(d,function(a){
        return a.nTable
        });
    if(a){
        if(a.nTable&&a.oApi)return[a];
        if(a.nodeName&&"table"===a.nodeName.toLowerCase())return b=h.inArray(a,e),-1!==b?[d[b]]:
            null;
        if(a&&"function"===typeof a.settings)return a.settings().toArray();
        "string"===typeof a?c=h(a):a instanceof h&&(c=a)
        }else return[];
    if(c)return c.map(function(){
        b=h.inArray(this,e);
        return-1!==b?d[b]:null
        }).toArray()
        };
        
t=function(a,b){
    if(!(this instanceof t))return new t(a,b);
    var c=[],d=function(a){
        (a=cc(a))&&(c=c.concat(a))
        };
        
    if(h.isArray(a))for(var e=0,f=a.length;e<f;e++)d(a[e]);else d(a);
    this.context=pa(c);
    b&&h.merge(this,b);
    this.selector={
        rows:null,
        cols:null,
        opts:null
    };
    
    t.extend(this,this,Tb)
    };
m.Api=t;
h.extend(t.prototype,{
    any:function(){
        return 0!==this.count()
        },
    concat:x.concat,
    context:[],
    count:function(){
        return this.flatten().length
        },
    each:function(a){
        for(var b=0,c=this.length;b<c;b++)a.call(this,this[b],b,this);
        return this
        },
    eq:function(a){
        var b=this.context;
        return b.length>a?new t(b[a],this[a]):null
        },
    filter:function(a){
        var b=[];
        if(x.filter)b=x.filter.call(this,a,this);else for(var c=0,d=this.length;c<d;c++)a.call(this,this[c],c,this)&&b.push(this[c]);
        return new t(this.context,b)
        },
    flatten:function(){
        var a=
        [];
        return new t(this.context,a.concat.apply(a,this.toArray()))
        },
    join:x.join,
    indexOf:x.indexOf||function(a,b){
        for(var c=b||0,d=this.length;c<d;c++)if(this[c]===a)return c;return-1
        },
    iterator:function(a,b,c,d){
        var e=[],f,g,h,j,n,l=this.context,m,q,p=this.selector;
        "string"===typeof a&&(d=c,c=b,b=a,a=!1);
        g=0;
        for(h=l.length;g<h;g++){
            var o=new t(l[g]);
            if("table"===b)f=c.call(o,l[g],g),f!==k&&e.push(f);
            else if("columns"===b||"rows"===b)f=c.call(o,l[g],this[g],g),f!==k&&e.push(f);
            else if("column"===b||"column-rows"===
                b||"row"===b||"cell"===b){
                q=this[g];
                "column-rows"===b&&(m=Da(l[g],p.opts));
                j=0;
                for(n=q.length;j<n;j++)f=q[j],f="cell"===b?c.call(o,l[g],f.row,f.column,g,j):c.call(o,l[g],f,g,j,m),f!==k&&e.push(f)
                    }
                }
        return e.length||d?(a=new t(l,a?e.concat.apply([],e):e),b=a.selector,b.rows=p.rows,b.cols=p.cols,b.opts=p.opts,a):this
    },
lastIndexOf:x.lastIndexOf||function(a,b){
    return this.indexOf.apply(this.toArray.reverse(),arguments)
    },
length:0,
map:function(a){
    var b=[];
    if(x.map)b=x.map.call(this,a,this);else for(var c=
        0,d=this.length;c<d;c++)b.push(a.call(this,this[c],c));
    return new t(this.context,b)
    },
pluck:function(a){
    return this.map(function(b){
        return b[a]
        })
    },
pop:x.pop,
push:x.push,
reduce:x.reduce||function(a,b){
    return gb(this,a,b,0,this.length,1)
    },
reduceRight:x.reduceRight||function(a,b){
    return gb(this,a,b,this.length-1,-1,-1)
    },
reverse:x.reverse,
selector:null,
shift:x.shift,
sort:x.sort,
splice:x.splice,
toArray:function(){
    return x.slice.call(this)
    },
to$:function(){
    return h(this)
    },
toJQuery:function(){
    return h(this)
    },
unique:function(){
    return new t(this.context,pa(this))
    },
unshift:x.unshift
});
t.extend=function(a,b,c){
    if(c.length&&b&&(b instanceof t||b.__dt_wrapper)){
        var d,e,f,g=function(a,b,c){
            return function(){
                var d=b.apply(a,arguments);
                t.extend(d,d,c.methodExt);
                return d
                }
            };
        
    d=0;
    for(e=c.length;d<e;d++)f=c[d],b[f.name]="function"===typeof f.val?g(a,f.val,f):h.isPlainObject(f.val)?{}:f.val,b[f.name].__dt_wrapper=!0,t.extend(a,b[f.name],f.propExt)
        }
    };

t.register=p=function(a,b){
    if(h.isArray(a))for(var c=0,d=a.length;c<
        d;c++)t.register(a[c],b);else for(var e=a.split("."),f=Tb,g,i,c=0,d=e.length;c<d;c++){
        g=(i=-1!==e[c].indexOf("()"))?e[c].replace("()",""):e[c];
        var j;
            a:{
            j=0;
            for(var n=f.length;j<n;j++)if(f[j].name===g){
                j=f[j];
                break a
            }
            j=null
            }
            j||(j={
            name:g,
            val:{},
            methodExt:[],
            propExt:[]
        },f.push(j));
        c===d-1?j.val=b:f=i?j.methodExt:j.propExt
        }
    };
    
t.registerPlural=s=function(a,b,c){
    t.register(a,c);
    t.register(b,function(){
        var a=c.apply(this,arguments);
        return a===this?this:a instanceof t?a.length?h.isArray(a[0])?new t(a.context,
            a[0]):a[0]:k:a
        })
    };
    
p("tables()",function(a){
    var b;
    if(a){
        b=t;
        var c=this.context;
        if("number"===typeof a)a=[c[a]];else var d=h.map(c,function(a){
            return a.nTable
            }),a=h(d).filter(a).map(function(){
            var a=h.inArray(this,d);
            return c[a]
            }).toArray();
        b=new b(a)
        }else b=this;
    return b
    });
p("table()",function(a){
    var a=this.tables(a),b=a.context;
    return b.length?new t(b[0]):a
    });
s("tables().nodes()","table().node()",function(){
    return this.iterator("table",function(a){
        return a.nTable
        },1)
    });
s("tables().body()","table().body()",
    function(){
        return this.iterator("table",function(a){
            return a.nTBody
            },1)
        });
s("tables().header()","table().header()",function(){
    return this.iterator("table",function(a){
        return a.nTHead
        },1)
    });
s("tables().footer()","table().footer()",function(){
    return this.iterator("table",function(a){
        return a.nTFoot
        },1)
    });
s("tables().containers()","table().container()",function(){
    return this.iterator("table",function(a){
        return a.nTableWrapper
        },1)
    });
p("draw()",function(a){
    return this.iterator("table",function(b){
        "page"===
        a?M(b):("string"===typeof a&&(a="full-hold"===a?!1:!0),R(b,!1===a))
        })
    });
p("page()",function(a){
    return a===k?this.page.info().page:this.iterator("table",function(b){
        Ta(b,a)
        })
    });
p("page.info()",function(){
    if(0===this.context.length)return k;
    var a=this.context[0],b=a._iDisplayStart,c=a._iDisplayLength,d=a.fnRecordsDisplay(),e=-1===c;
    return{
        page:e?0:Math.floor(b/c),
        pages:e?1:Math.ceil(d/c),
        start:b,
        end:a.fnDisplayEnd(),
        length:c,
        recordsTotal:a.fnRecordsTotal(),
        recordsDisplay:d,
        serverSide:"ssp"===y(a)
        }
    });
p("page.len()",function(a){
    return a===k?0!==this.context.length?this.context[0]._iDisplayLength:k:this.iterator("table",function(b){
        Ra(b,a)
        })
    });
var Ub=function(a,b,c){
    if(c){
        var d=new t(a);
        d.one("draw",function(){
            c(d.ajax.json())
            })
        }
        if("ssp"==y(a))R(a,b);
    else{
        C(a,!0);
        var e=a.jqXHR;
        e&&4!==e.readyState&&e.abort();
        ra(a,[],function(c){
            na(a);
            for(var c=sa(a,c),d=0,e=c.length;d<e;d++)L(a,c[d]);
            R(a,b);
            C(a,!1)
            })
        }
    };

p("ajax.json()",function(){
    var a=this.context;
    if(0<a.length)return a[0].json
        });
p("ajax.params()",
    function(){
        var a=this.context;
        if(0<a.length)return a[0].oAjaxData
            });
p("ajax.reload()",function(a,b){
    return this.iterator("table",function(c){
        Ub(c,!1===b,a)
        })
    });
p("ajax.url()",function(a){
    var b=this.context;
    if(a===k){
        if(0===b.length)return k;
        b=b[0];
        return b.ajax?h.isPlainObject(b.ajax)?b.ajax.url:b.ajax:b.sAjaxSource
        }
        return this.iterator("table",function(b){
        h.isPlainObject(b.ajax)?b.ajax.url=a:b.ajax=a
        })
    });
p("ajax.url().load()",function(a,b){
    return this.iterator("table",function(c){
        Ub(c,!1===b,a)
        })
    });
var Za=function(a,b,c,d,e){
    var f=[],g,i,j,n,l,m;
    j=typeof b;
    if(!b||"string"===j||"function"===j||b.length===k)b=[b];
    j=0;
    for(n=b.length;j<n;j++){
        i=b[j]&&b[j].split?b[j].split(","):[b[j]];
        l=0;
        for(m=i.length;l<m;l++)(g=c("string"===typeof i[l]?h.trim(i[l]):i[l]))&&g.length&&(f=f.concat(g))
            }
            a=v.selector[a];
    if(a.length){
        j=0;
        for(n=a.length;j<n;j++)f=a[j](d,e,f)
            }
            return pa(f)
    },$a=function(a){
    a||(a={});
    a.filter&&a.search===k&&(a.search=a.filter);
    return h.extend({
        search:"none",
        order:"current",
        page:"all"
    },a)
    },
ab=function(a){
    for(var b=0,c=a.length;b<c;b++)if(0<a[b].length)return a[0]=a[b],a[0].length=1,a.length=1,a.context=[a.context[b]],a;a.length=0;
    return a
    },Da=function(a,b){
    var c,d,e,f=[],g=a.aiDisplay;
    c=a.aiDisplayMaster;
    var i=b.search;
    d=b.order;
    e=b.page;
    if("ssp"==y(a))return"removed"===i?[]:W(0,c.length);
    if("current"==e){
        c=a._iDisplayStart;
        for(d=a.fnDisplayEnd();c<d;c++)f.push(g[c])
            }else if("current"==d||"applied"==d)f="none"==i?c.slice():"applied"==i?g.slice():h.map(c,function(a){
        return-1===h.inArray(a,
            g)?a:null
        });
    else if("index"==d||"original"==d){
        c=0;
        for(d=a.aoData.length;c<d;c++)"none"==i?f.push(c):(e=h.inArray(c,g),(-1===e&&"removed"==i||0<=e&&"applied"==i)&&f.push(c))
            }
            return f
    };
    
p("rows()",function(a,b){
    a===k?a="":h.isPlainObject(a)&&(b=a,a="");
    var b=$a(b),c=this.iterator("table",function(c){
        var e=b;
        return Za("row",a,function(a){
            var b=Pb(a);
            if(b!==null&&!e)return[b];
            var i=Da(c,e);
            if(b!==null&&h.inArray(b,i)!==-1)return[b];
            if(!a)return i;
            if(typeof a==="function")return h.map(i,function(b){
                var e=
                c.aoData[b];
                return a(b,e._aData,e.nTr)?b:null
                });
            b=Sb(ja(c.aoData,i,"nTr"));
            if(a.nodeName&&h.inArray(a,b)!==-1)return[a._DT_RowIndex];
            if(typeof a==="string"&&a.charAt(0)==="#"){
                i=c.aIds[a.replace(/^#/,"")];
                if(i!==k)return[i.idx]
                    }
                    return h(b).filter(a).map(function(){
                return this._DT_RowIndex
                }).toArray()
            },c,e)
        },1);
    c.selector.rows=a;
    c.selector.opts=b;
    return c
    });
p("rows().nodes()",function(){
    return this.iterator("row",function(a,b){
        return a.aoData[b].nTr||k
        },1)
    });
p("rows().data()",function(){
    return this.iterator(!0,
        "rows",function(a,b){
            return ja(a.aoData,b,"_aData")
            },1)
    });
s("rows().cache()","row().cache()",function(a){
    return this.iterator("row",function(b,c){
        var d=b.aoData[c];
        return"search"===a?d._aFilterData:d._aSortData
        },1)
    });
s("rows().invalidate()","row().invalidate()",function(a){
    return this.iterator("row",function(b,c){
        ea(b,c,a)
        })
    });
s("rows().indexes()","row().index()",function(){
    return this.iterator("row",function(a,b){
        return b
        },1)
    });
s("rows().ids()","row().id()",function(a){
    for(var b=[],c=this.context,
        d=0,e=c.length;d<e;d++)for(var f=0,g=this[d].length;f<g;f++){
        var h=c[d].rowIdFn(c[d].aoData[this[d][f]]._aData);
        b.push((!0===a?"#":"")+h)
        }
        return new t(c,b)
    });
s("rows().remove()","row().remove()",function(){
    var a=this;
    this.iterator("row",function(b,c,d){
        var e=b.aoData,f=e[c];
        e.splice(c,1);
        for(var g=0,h=e.length;g<h;g++)null!==e[g].nTr&&(e[g].nTr._DT_RowIndex=g);
        oa(b.aiDisplayMaster,c);
        oa(b.aiDisplay,c);
        oa(a[d],c,!1);
        Sa(b);
        c=b.rowIdFn(f._aData);
        c!==k&&delete b.aIds[c]
    });
    this.iterator("table",function(a){
        for(var c=
            0,d=a.aoData.length;c<d;c++)a.aoData[c].idx=c
        });
    return this
    });
p("rows.add()",function(a){
    var b=this.iterator("table",function(b){
        var c,f,g,h=[];
        f=0;
        for(g=a.length;f<g;f++)c=a[f],c.nodeName&&"TR"===c.nodeName.toUpperCase()?h.push(ma(b,c)[0]):h.push(L(b,c));
        return h
        },1),c=this.rows(-1);
    c.pop();
    h.merge(c,b);
    return c
    });
p("row()",function(a,b){
    return ab(this.rows(a,b))
    });
p("row().data()",function(a){
    var b=this.context;
    if(a===k)return b.length&&this.length?b[0].aoData[this[0]]._aData:k;
    b[0].aoData[this[0]]._aData=
    a;
    ea(b[0],this[0],"data");
    return this
    });
p("row().node()",function(){
    var a=this.context;
    return a.length&&this.length?a[0].aoData[this[0]].nTr||null:null
    });
p("row.add()",function(a){
    a instanceof h&&a.length&&(a=a[0]);
    var b=this.iterator("table",function(b){
        return a.nodeName&&"TR"===a.nodeName.toUpperCase()?ma(b,a)[0]:L(b,a)
        });
    return this.row(b[0])
    });
var bb=function(a,b){
    var c=a.context;
    if(c.length&&(c=c[0].aoData[b!==k?b:a[0]])&&c._details)c._details.remove(),c._detailsShow=k,c._details=k
        },Vb=function(a,
    b){
    var c=a.context;
    if(c.length&&a.length){
        var d=c[0].aoData[a[0]];
        if(d._details){
            (d._detailsShow=b)?d._details.insertAfter(d.nTr):d._details.detach();
            var e=c[0],f=new t(e),g=e.aoData;
            f.off("draw.dt.DT_details column-visibility.dt.DT_details destroy.dt.DT_details");
            0<D(g,"_details").length&&(f.on("draw.dt.DT_details",function(a,b){
                e===b&&f.rows({
                    page:"current"
                }).eq(0).each(function(a){
                    a=g[a];
                    a._detailsShow&&a._details.insertAfter(a.nTr)
                    })
                }),f.on("column-visibility.dt.DT_details",function(a,b){
                if(e===
                    b)for(var c,d=ca(b),f=0,h=g.length;f<h;f++)c=g[f],c._details&&c._details.children("td[colspan]").attr("colspan",d)
                    }),f.on("destroy.dt.DT_details",function(a,b){
                if(e===b)for(var c=0,d=g.length;c<d;c++)g[c]._details&&bb(f,c)
                    }))
            }
        }
};

p("row().child()",function(a,b){
    var c=this.context;
    if(a===k)return c.length&&this.length?c[0].aoData[this[0]]._details:k;
    if(!0===a)this.child.show();
    else if(!1===a)bb(this);
    else if(c.length&&this.length){
        var d=c[0],c=c[0].aoData[this[0]],e=[],f=function(a,b){
            if(h.isArray(a)||
                a instanceof h)for(var c=0,k=a.length;c<k;c++)f(a[c],b);else a.nodeName&&"tr"===a.nodeName.toLowerCase()?e.push(a):(c=h("<tr><td/></tr>").addClass(b),h("td",c).addClass(b).html(a)[0].colSpan=ca(d),e.push(c[0]))
                };
                
        f(a,b);
        c._details&&c._details.remove();
        c._details=h(e);
        c._detailsShow&&c._details.insertAfter(c.nTr)
        }
        return this
    });
p(["row().child.show()","row().child().show()"],function(){
    Vb(this,!0);
    return this
    });
p(["row().child.hide()","row().child().hide()"],function(){
    Vb(this,!1);
    return this
    });
p(["row().child.remove()",
    "row().child().remove()"],function(){
        bb(this);
        return this
        });
p("row().child.isShown()",function(){
    var a=this.context;
    return a.length&&this.length?a[0].aoData[this[0]]._detailsShow||!1:!1
    });
var dc=/^(.+):(name|visIdx|visible)$/,Wb=function(a,b,c,d,e){
    for(var c=[],d=0,f=e.length;d<f;d++)c.push(B(a,e[d],b));
    return c
    };
    
p("columns()",function(a,b){
    a===k?a="":h.isPlainObject(a)&&(b=a,a="");
    var b=$a(b),c=this.iterator("table",function(c){
        var e=a,f=b,g=c.aoColumns,i=D(g,"sName"),j=D(g,"nTh");
        return Za("column",
            e,function(a){
                var b=Pb(a);
                if(a==="")return W(g.length);
                if(b!==null)return[b>=0?b:g.length+b];
                if(typeof a==="function"){
                    var e=Da(c,f);
                    return h.map(g,function(b,f){
                        return a(f,Wb(c,f,0,0,e),j[f])?f:null
                        })
                    }
                    var k=typeof a==="string"?a.match(dc):"";
                if(k)switch(k[2]){
                    case "visIdx":case "visible":
                        b=parseInt(k[1],10);
                        if(b<0){
                        var m=h.map(g,function(a,b){
                            return a.bVisible?b:null
                            });
                        return[m[m.length+b]]
                        }
                        return[$(c,b)];
                    case "name":
                        return h.map(i,function(a,b){
                        return a===k[1]?b:null
                        })
                    }else return h(j).filter(a).map(function(){
                    return h.inArray(this,
                        j)
                    }).toArray()
                    },c,f)
        },1);
    c.selector.cols=a;
    c.selector.opts=b;
    return c
    });
s("columns().header()","column().header()",function(){
    return this.iterator("column",function(a,b){
        return a.aoColumns[b].nTh
        },1)
    });
s("columns().footer()","column().footer()",function(){
    return this.iterator("column",function(a,b){
        return a.aoColumns[b].nTf
        },1)
    });
s("columns().data()","column().data()",function(){
    return this.iterator("column-rows",Wb,1)
    });
s("columns().dataSrc()","column().dataSrc()",function(){
    return this.iterator("column",
        function(a,b){
            return a.aoColumns[b].mData
            },1)
    });
s("columns().cache()","column().cache()",function(a){
    return this.iterator("column-rows",function(b,c,d,e,f){
        return ja(b.aoData,f,"search"===a?"_aFilterData":"_aSortData",c)
        },1)
    });
s("columns().nodes()","column().nodes()",function(){
    return this.iterator("column-rows",function(a,b,c,d,e){
        return ja(a.aoData,e,"anCells",b)
        },1)
    });
s("columns().visible()","column().visible()",function(a,b){
    return this.iterator("column",function(c,d){
        if(a===k)return c.aoColumns[d].bVisible;
        var e=c.aoColumns,f=e[d],g=c.aoData,i,j,m;
        if(a!==k&&f.bVisible!==a){
            if(a){
                var l=h.inArray(!0,D(e,"bVisible"),d+1);
                i=0;
                for(j=g.length;i<j;i++)m=g[i].nTr,e=g[i].anCells,m&&m.insertBefore(e[d],e[l]||null)
                    }else h(D(c.aoData,"anCells",d)).detach();
            f.bVisible=a;
            ga(c,c.aoHeader);
            ga(c,c.aoFooter);
            if(b===k||b)Y(c),(c.oScroll.sX||c.oScroll.sY)&&Z(c);
            w(c,null,"column-visibility",[c,d,a]);
            ya(c)
            }
        })
});
s("columns().indexes()","column().index()",function(a){
    return this.iterator("column",function(b,c){
        return"visible"===
        a?ba(b,c):c
        },1)
    });
p("columns.adjust()",function(){
    return this.iterator("table",function(a){
        Y(a)
        },1)
    });
p("column.index()",function(a,b){
    if(0!==this.context.length){
        var c=this.context[0];
        if("fromVisible"===a||"toData"===a)return $(c,b);
        if("fromData"===a||"toVisible"===a)return ba(c,b)
            }
        });
p("column()",function(a,b){
    return ab(this.columns(a,b))
    });
p("cells()",function(a,b,c){
    h.isPlainObject(a)&&(a.row===k?(c=a,a=null):(c=b,b=null));
    h.isPlainObject(b)&&(c=b,b=null);
    if(null===b||b===k)return this.iterator("table",
        function(b){
            var d=a,e=$a(c),f=b.aoData,g=Da(b,e),i=Sb(ja(f,g,"anCells")),j=h([].concat.apply([],i)),l,m=b.aoColumns.length,n,p,t,s,u,v;
            return Za("cell",d,function(a){
                var c=typeof a==="function";
                if(a===null||a===k||c){
                    n=[];
                    p=0;
                    for(t=g.length;p<t;p++){
                        l=g[p];
                        for(s=0;s<m;s++){
                            u={
                                row:l,
                                column:s
                            };
                            
                            if(c){
                                v=f[l];
                                a(u,B(b,l,s),v.anCells?v.anCells[s]:null)&&n.push(u)
                                }else n.push(u)
                                }
                            }
                        return n
                }
                return h.isPlainObject(a)?[a]:j.filter(a).map(function(a,b){
                if(b.parentNode)l=b.parentNode._DT_RowIndex;
                else{
                    a=0;
                    for(t=
                        f.length;a<t;a++)if(h.inArray(b,f[a].anCells)!==-1){
                        l=a;
                        break
                    }
                    }
                    return{
                row:l,
                column:h.inArray(b,f[l].anCells)
                }
            }).toArray()
        },b,e)
    });
var d=this.columns(b,c),e=this.rows(a,c),f,g,i,j,m,l=this.iterator("table",function(a,b){
    f=[];
    g=0;
    for(i=e[b].length;g<i;g++){
        j=0;
        for(m=d[b].length;j<m;j++)f.push({
            row:e[b][g],
            column:d[b][j]
            })
        }
        return f
    },1);
h.extend(l.selector,{
    cols:b,
    rows:a,
    opts:c
});
return l
});
s("cells().nodes()","cell().node()",function(){
    return this.iterator("cell",function(a,b,c){
        return(a=a.aoData[b].anCells)?
        a[c]:k
        },1)
    });
p("cells().data()",function(){
    return this.iterator("cell",function(a,b,c){
        return B(a,b,c)
        },1)
    });
s("cells().cache()","cell().cache()",function(a){
    a="search"===a?"_aFilterData":"_aSortData";
    return this.iterator("cell",function(b,c,d){
        return b.aoData[c][a][d]
        },1)
    });
s("cells().render()","cell().render()",function(a){
    return this.iterator("cell",function(b,c,d){
        return B(b,c,d,a)
        },1)
    });
s("cells().indexes()","cell().index()",function(){
    return this.iterator("cell",function(a,b,c){
        return{
            row:b,
            column:c,
            columnVisible:ba(a,c)
            }
        },1)
});
s("cells().invalidate()","cell().invalidate()",function(a){
    return this.iterator("cell",function(b,c,d){
        ea(b,c,a,d)
        })
    });
p("cell()",function(a,b,c){
    return ab(this.cells(a,b,c))
    });
p("cell().data()",function(a){
    var b=this.context,c=this[0];
    if(a===k)return b.length&&c.length?B(b[0],c[0].row,c[0].column):k;
    ib(b[0],c[0].row,c[0].column,a);
    ea(b[0],c[0].row,"data",c[0].column);
    return this
    });
p("order()",function(a,b){
    var c=this.context;
    if(a===k)return 0!==c.length?c[0].aaSorting:
        k;
    "number"===typeof a?a=[[a,b]]:h.isArray(a[0])||(a=Array.prototype.slice.call(arguments));
    return this.iterator("table",function(b){
        b.aaSorting=a.slice()
        })
    });
p("order.listener()",function(a,b,c){
    return this.iterator("table",function(d){
        Oa(d,a,b,c)
        })
    });
p(["columns().order()","column().order()"],function(a){
    var b=this;
    return this.iterator("table",function(c,d){
        var e=[];
        h.each(b[d],function(b,c){
            e.push([c,a])
            });
        c.aaSorting=e
        })
    });
p("search()",function(a,b,c,d){
    var e=this.context;
    return a===k?0!==e.length?
    e[0].oPreviousSearch.sSearch:k:this.iterator("table",function(e){
        e.oFeatures.bFilter&&ha(e,h.extend({},e.oPreviousSearch,{
            sSearch:a+"",
            bRegex:null===b?!1:b,
            bSmart:null===c?!0:c,
            bCaseInsensitive:null===d?!0:d
            }),1)
        })
    });
s("columns().search()","column().search()",function(a,b,c,d){
    return this.iterator("column",function(e,f){
        var g=e.aoPreSearchCols;
        if(a===k)return g[f].sSearch;
        e.oFeatures.bFilter&&(h.extend(g[f],{
            sSearch:a+"",
            bRegex:null===b?!1:b,
            bSmart:null===c?!0:c,
            bCaseInsensitive:null===d?!0:d
            }),ha(e,
            e.oPreviousSearch,1))
        })
    });
p("state()",function(){
    return this.context.length?this.context[0].oSavedState:null
    });
p("state.clear()",function(){
    return this.iterator("table",function(a){
        a.fnStateSaveCallback.call(a.oInstance,a,{})
        })
    });
p("state.loaded()",function(){
    return this.context.length?this.context[0].oLoadedState:null
    });
p("state.save()",function(){
    return this.iterator("table",function(a){
        ya(a)
        })
    });
m.versionCheck=m.fnVersionCheck=function(a){
    for(var b=m.version.split("."),a=a.split("."),c,d,e=0,f=
        a.length;e<f;e++)if(c=parseInt(b[e],10)||0,d=parseInt(a[e],10)||0,c!==d)return c>d;return!0
    };
    
m.isDataTable=m.fnIsDataTable=function(a){
    var b=h(a).get(0),c=!1;
    h.each(m.settings,function(a,e){
        var f=e.nScrollHead?h("table",e.nScrollHead)[0]:null,g=e.nScrollFoot?h("table",e.nScrollFoot)[0]:null;
        if(e.nTable===b||f===b||g===b)c=!0
            });
    return c
    };
    
m.tables=m.fnTables=function(a){
    var b=!1;
    h.isPlainObject(a)&&(b=a.api,a=a.visible);
    var c=h.map(m.settings,function(b){
        if(!a||a&&h(b.nTable).is(":visible"))return b.nTable
            });
    return b?new t(c):c
    };
    
m.util={
    throttle:ua,
    escapeRegex:va
};

m.camelToHungarian=I;
p("$()",function(a,b){
    var c=this.rows(b).nodes(),c=h(c);
    return h([].concat(c.filter(a).toArray(),c.find(a).toArray()))
    });
h.each(["on","one","off"],function(a,b){
    p(b+"()",function(){
        var a=Array.prototype.slice.call(arguments);
        a[0].match(/\.dt\b/)||(a[0]+=".dt");
        var d=h(this.tables().nodes());
        d[b].apply(d,a);
        return this
        })
    });
p("clear()",function(){
    return this.iterator("table",function(a){
        na(a)
        })
    });
p("settings()",function(){
    return new t(this.context,
        this.context)
    });
p("init()",function(){
    var a=this.context;
    return a.length?a[0].oInit:null
    });
p("data()",function(){
    return this.iterator("table",function(a){
        return D(a.aoData,"_aData")
        }).flatten()
    });
p("destroy()",function(a){
    a=a||!1;
    return this.iterator("table",function(b){
        var c=b.nTableWrapper.parentNode,d=b.oClasses,e=b.nTable,f=b.nTBody,g=b.nTHead,i=b.nTFoot,j=h(e),f=h(f),k=h(b.nTableWrapper),l=h.map(b.aoData,function(a){
            return a.nTr
            }),p;
        b.bDestroying=!0;
        w(b,"aoDestroyCallback","destroy",[b]);
        a||
        (new t(b)).columns().visible(!0);
        k.unbind(".DT").find(":not(tbody *)").unbind(".DT");
        h(Fa).unbind(".DT-"+b.sInstance);
        e!=g.parentNode&&(j.children("thead").detach(),j.append(g));
        i&&e!=i.parentNode&&(j.children("tfoot").detach(),j.append(i));
        b.aaSorting=[];
        b.aaSortingFixed=[];
        xa(b);
        h(l).removeClass(b.asStripeClasses.join(" "));
        h("th, td",g).removeClass(d.sSortable+" "+d.sSortableAsc+" "+d.sSortableDesc+" "+d.sSortableNone);
        b.bJUI&&(h("th span."+d.sSortIcon+", td span."+d.sSortIcon,g).detach(),h("th, td",
            g).each(function(){
            var a=h("div."+d.sSortJUIWrapper,this);
            h(this).append(a.contents());
            a.detach()
            }));
        f.children().detach();
        f.append(l);
        g=a?"remove":"detach";
        j[g]();
        k[g]();
        !a&&c&&(c.insertBefore(e,b.nTableReinsertBefore),j.css("width",b.sDestroyWidth).removeClass(d.sTable),(p=b.asDestroyStripes.length)&&f.children().each(function(a){
            h(this).addClass(b.asDestroyStripes[a%p])
            }));
        c=h.inArray(b,m.settings);
        -1!==c&&m.settings.splice(c,1)
        })
    });
h.each(["column","row","cell"],function(a,b){
    p(b+"s().every()",
        function(a){
            return this.iterator(b,function(d,e,f,g,h){
                a.call((new t(d))[b](e,"cell"===b?f:k),e,f,g,h)
                })
            })
    });
p("i18n()",function(a,b,c){
    var d=this.context[0],a=P(a)(d.oLanguage);
    a===k&&(a=b);
    c!==k&&h.isPlainObject(a)&&(a=a[c]!==k?a[c]:a._);
    return a.replace("%d",c)
    });
m.version="1.10.9";
m.settings=[];
m.models={};

m.models.oSearch={
    bCaseInsensitive:!0,
    sSearch:"",
    bRegex:!1,
    bSmart:!0
    };
    
m.models.oRow={
    nTr:null,
    anCells:null,
    _aData:[],
    _aSortData:null,
    _aFilterData:null,
    _sFilterRow:null,
    _sRowStripe:"",
    src:null,
    idx:-1
};

m.models.oColumn={
    idx:null,
    aDataSort:null,
    asSorting:null,
    bSearchable:null,
    bSortable:null,
    bVisible:null,
    _sManualType:null,
    _bAttrSrc:!1,
    fnCreatedCell:null,
    fnGetData:null,
    fnSetData:null,
    mData:null,
    mRender:null,
    nTh:null,
    nTf:null,
    sClass:null,
    sContentPadding:null,
    sDefaultContent:null,
    sName:null,
    sSortDataType:"std",
    sSortingClass:null,
    sSortingClassJUI:null,
    sTitle:null,
    sType:null,
    sWidth:null,
    sWidthOrig:null
};

m.defaults={
    aaData:null,
    aaSorting:[[0,"asc"]],
    aaSortingFixed:[],
    ajax:null,
    aLengthMenu:[10,
    25,50,100,500],// aqui se pone el rango de registros a visualizar
    aoColumns:null,
    aoColumnDefs:null,
    aoSearchCols:[],
    asStripeClasses:null,
    bAutoWidth:!0,
    bDeferRender:!1,
    bDestroy:!1,
    bFilter:!0,
    bInfo:!0,
    bJQueryUI:!1,
    bLengthChange:!0,
    bPaginate:!0,
    bProcessing:!1,
    bRetrieve:!1,
    bScrollCollapse:!1,
    bServerSide:!1,
    bSort:!0,
    bSortMulti:!0,
    bSortCellsTop:!1,
    bSortClasses:!0,
    bStateSave:!1,
    fnCreatedRow:null,
    fnDrawCallback:null,
    fnFooterCallback:null,
    fnFormatNumber:function(a){
        return a.toString().replace(/\B(?=(\d{3})+(?!\d))/g,this.oLanguage.sThousands)
        },
    fnHeaderCallback:null,
    fnInfoCallback:null,
    fnInitComplete:null,
    fnPreDrawCallback:null,
    fnRowCallback:null,
    fnServerData:null,
    fnServerParams:null,
    fnStateLoadCallback:function(a){
        try{
            return JSON.parse((-1===a.iStateDuration?sessionStorage:localStorage).getItem("DataTables_"+a.sInstance+"_"+location.pathname))
            }catch(b){}
    },
fnStateLoadParams:null,
fnStateLoaded:null,
fnStateSaveCallback:function(a,b){
    try{
        (-1===a.iStateDuration?sessionStorage:localStorage).setItem("DataTables_"+a.sInstance+"_"+location.pathname,JSON.stringify(b))
        }catch(c){}
},
fnStateSaveParams:null,
iStateDuration:7200,
iDeferLoading:null,
iDisplayLength:10,
iDisplayStart:0,
iTabIndex:0,
oClasses:{},
oLanguage:{
    oAria:{
        sSortAscending:": activate to sort column ascending",
        sSortDescending:": activate to sort column descending"
    },
    oPaginate:{
        sFirst:"Primera",
        sLast:"�ltima",
        sNext:"Siguiente",
        sPrevious:"Anterior"
    },
    sEmptyTable:"No hay datos disponibles en la tabla",
    sInfo:"Mostrando _START_ a _END_ de _TOTAL_ resultados",
    sInfoEmpty:"Mostrando 0 a 0 de 0 resultados",
    sInfoFiltered:"(Filtrado de _MAX_ total de registros)",
    sInfoPostFix:"",
    sDecimal:"",
    sThousands:",",
    sLengthMenu:"Mostrar _MENU_ registros",
    sLoadingRecords:"Cargando...",
    sProcessing:"Procesando...",
    sSearch:"Buscar:",
    sSearchPlaceholder:"",
    sUrl:"",
    sZeroRecords:"Ninguna coincidencia encontrada"
},
oSearch:h.extend({},m.models.oSearch),
sAjaxDataProp:"data",
sAjaxSource:null,
sDom:"lfrtip",
searchDelay:null,
sPaginationType:"simple_numbers",
sScrollX:"",
sScrollXInner:"",
sScrollY:"",
sServerMethod:"GET",
renderer:null,
rowId:"DT_RowId"
};

X(m.defaults);
m.defaults.column={
    aDataSort:null,
    iDataSort:-1,
    asSorting:["asc","desc"],
    bSearchable:!0,
    bSortable:!0,
    bVisible:!0,
    fnCreatedCell:null,
    mData:null,
    mRender:null,
    sCellType:"td",
    sClass:"",
    sContentPadding:"",
    sDefaultContent:null,
    sName:"",
    sSortDataType:"std",
    sTitle:null,
    sType:null,
    sWidth:null
};

X(m.defaults.column);
m.models.oSettings={
    oFeatures:{
        bAutoWidth:null,
        bDeferRender:null,
        bFilter:null,
        bInfo:null,
        bLengthChange:null,
        bPaginate:null,
        bProcessing:null,
        bServerSide:null,
        bSort:null,
        bSortMulti:null,
        bSortClasses:null,
        bStateSave:null
    },
    oScroll:{
        bCollapse:null,
        iBarWidth:0,
        sX:null,
        sXInner:null,
        sY:null
    },
    oLanguage:{
        fnInfoCallback:null
    },
    oBrowser:{
        bScrollOversize:!1,
        bScrollbarLeft:!1,
        bBounding:!1,
        barWidth:0
    },
    ajax:null,
    aanFeatures:[],
    aoData:[],
    aiDisplay:[],
    aiDisplayMaster:[],
    aIds:{},
    aoColumns:[],
    aoHeader:[],
    aoFooter:[],
    oPreviousSearch:{},
    aoPreSearchCols:[],
    aaSorting:null,
    aaSortingFixed:[],
    asStripeClasses:null,
    asDestroyStripes:[],
    sDestroyWidth:0,
    aoRowCallback:[],
    aoHeaderCallback:[],
    aoFooterCallback:[],
    aoDrawCallback:[],
    aoRowCreatedCallback:[],
    aoPreDrawCallback:[],
    aoInitComplete:[],
    aoStateSaveParams:[],
    aoStateLoadParams:[],
    aoStateLoaded:[],
    sTableId:"",
    nTable:null,
    nTHead:null,
    nTFoot:null,
    nTBody:null,
    nTableWrapper:null,
    bDeferLoading:!1,
    bInitialised:!1,
    aoOpenRows:[],
    sDom:null,
    searchDelay:null,
    sPaginationType:"two_button",
    iStateDuration:0,
    aoStateSave:[],
    aoStateLoad:[],
    oSavedState:null,
    oLoadedState:null,
    sAjaxSource:null,
    sAjaxDataProp:null,
    bAjaxDataGet:!0,
    jqXHR:null,
    json:k,
    oAjaxData:k,
    fnServerData:null,
    aoServerParams:[],
    sServerMethod:null,
    fnFormatNumber:null,
    aLengthMenu:null,
    iDraw:0,
    bDrawing:!1,
    iDrawError:-1,
    _iDisplayLength:10,
    _iDisplayStart:0,
    _iRecordsTotal:0,
    _iRecordsDisplay:0,
    bJUI:null,
    oClasses:{},
    bFiltered:!1,
    bSorted:!1,
    bSortCellsTop:null,
    oInit:null,
    aoDestroyCallback:[],
    fnRecordsTotal:function(){
        return"ssp"==y(this)?1*this._iRecordsTotal:this.aiDisplayMaster.length
        },
    fnRecordsDisplay:function(){
        return"ssp"==y(this)?1*this._iRecordsDisplay:this.aiDisplay.length
        },
    fnDisplayEnd:function(){
        var a=this._iDisplayLength,b=this._iDisplayStart,c=b+a,d=this.aiDisplay.length,e=
        this.oFeatures,f=e.bPaginate;
        return e.bServerSide?!1===f||-1===a?b+d:Math.min(b+a,this._iRecordsDisplay):!f||c>d||-1===a?d:c
        },
    oInstance:null,
    sInstance:null,
    iTabIndex:0,
    nScrollHead:null,
    nScrollFoot:null,
    aLastSort:[],
    oPlugins:{},
    rowIdFn:null,
    rowId:null
};

m.ext=v={
    buttons:{},
    classes:{},
    errMode:"alert",
    feature:[],
    search:[],
    selector:{
        cell:[],
        column:[],
        row:[]
    },
    internal:{},
    legacy:{
        ajax:null
    },
    pager:{},
    renderer:{
        pageButton:{},
        header:{}
},
order:{},
type:{
    detect:[],
    search:{},
    order:{}
},
_unique:0,
fnVersionCheck:m.fnVersionCheck,
iApiIndex:0,
oJUIClasses:{},
sVersion:m.version
};

h.extend(v,{
    afnFiltering:v.search,
    aTypes:v.type.detect,
    ofnSearch:v.type.search,
    oSort:v.type.order,
    afnSortData:v.order,
    aoFeatures:v.feature,
    oApi:v.internal,
    oStdClasses:v.classes,
    oPagination:v.pager
    });
h.extend(m.ext.classes,{
    sTable:"dataTable",
    sNoFooter:"no-footer",
    sPageButton:"paginate_button",
    sPageButtonActive:"current",
    sPageButtonDisabled:"disabled",
    sStripeOdd:"odd",
    sStripeEven:"even",
    sRowEmpty:"dataTables_empty",
    sWrapper:"dataTables_wrapper",
    sFilter:"dataTables_filter",
    sInfo:"dataTables_info",
    sPaging:"dataTables_paginate paging_",
    sLength:"dataTables_length",
    sProcessing:"dataTables_processing",
    sSortAsc:"sorting_asc",
    sSortDesc:"sorting_desc",
    sSortable:"sorting",
    sSortableAsc:"sorting_asc_disabled",
    sSortableDesc:"sorting_desc_disabled",
    sSortableNone:"sorting_disabled",
    sSortColumn:"sorting_",
    sFilterInput:"",
    sLengthSelect:"",
    sScrollWrapper:"dataTables_scroll",
    sScrollHead:"dataTables_scrollHead",
    sScrollHeadInner:"dataTables_scrollHeadInner",
    sScrollBody:"dataTables_scrollBody",
    sScrollFoot:"dataTables_scrollFoot",
    sScrollFootInner:"dataTables_scrollFootInner",
    sHeaderTH:"",
    sFooterTH:"",
    sSortJUIAsc:"",
    sSortJUIDesc:"",
    sSortJUI:"",
    sSortJUIAscAllowed:"",
    sSortJUIDescAllowed:"",
    sSortJUIWrapper:"",
    sSortIcon:"",
    sJUIHeader:"",
    sJUIFooter:""
});
var Ea="",Ea="",G=Ea+"ui-state-default",ka=Ea+"css_right ui-icon ui-icon-",Xb=Ea+"fg-toolbar ui-toolbar ui-widget-header ui-helper-clearfix";
h.extend(m.ext.oJUIClasses,m.ext.classes,{
    sPageButton:"fg-button ui-button "+G,
    sPageButtonActive:"ui-state-disabled",
    sPageButtonDisabled:"ui-state-disabled",
    sPaging:"dataTables_paginate fg-buttonset ui-buttonset fg-buttonset-multi ui-buttonset-multi paging_",
    sSortAsc:G+" sorting_asc",
    sSortDesc:G+" sorting_desc",
    sSortable:G+" sorting",
    sSortableAsc:G+" sorting_asc_disabled",
    sSortableDesc:G+" sorting_desc_disabled",
    sSortableNone:G+" sorting_disabled",
    sSortJUIAsc:ka+"triangle-1-n",
    sSortJUIDesc:ka+"triangle-1-s",
    sSortJUI:ka+"carat-2-n-s",
    sSortJUIAscAllowed:ka+"carat-1-n",
    sSortJUIDescAllowed:ka+"carat-1-s",
    sSortJUIWrapper:"DataTables_sort_wrapper",
    sSortIcon:"DataTables_sort_icon",
    sScrollHead:"dataTables_scrollHead "+G,
    sScrollFoot:"dataTables_scrollFoot "+G,
    sHeaderTH:G,
    sFooterTH:G,
    sJUIHeader:Xb+" ui-corner-tl ui-corner-tr",
    sJUIFooter:Xb+" ui-corner-bl ui-corner-br"
    });
var Mb=m.ext.pager;
h.extend(Mb,{
    simple:function(){
        return["previous","next"]
        },
    full:function(){
        return["first","previous","next","last"]
        },
    numbers:function(a,b){
        return[Aa(a,b)]
        },
    simple_numbers:function(a,b){
        return["previous",Aa(a,b),"next"]
        },
    full_numbers:function(a,b){
        return["first",
        "previous",Aa(a,b),"next","last"]
        },
    _numbers:Aa,
    numbers_length:7
});
h.extend(!0,m.ext.renderer,{
    pageButton:{
        _:function(a,b,c,d,e,f){
            var g=a.oClasses,i=a.oLanguage.oPaginate,j,k,l=0,m=function(b,d){
                var p,q,t,s,u=function(b){
                    Ta(a,b.data.action,true)
                    };
                    
                p=0;
                for(q=d.length;p<q;p++){
                    s=d[p];
                    if(h.isArray(s)){
                        t=h("<"+(s.DT_el||"div")+"/>").appendTo(b);
                        m(t,s)
                        }else{
                        j=null;
                        k="";
                        switch(s){
                            case "ellipsis":
                                b.append('<span class="ellipsis">&#x2026;</span>');
                                break;
                            case "first":
                                j=i.sFirst;
                                k=s+(e>0?"":" "+g.sPageButtonDisabled);
                                break;
                            case "previous":
                                j=i.sPrevious;
                                k=s+(e>0?"":" "+g.sPageButtonDisabled);
                                break;
                            case "next":
                                j=i.sNext;
                                k=s+(e<f-1?"":" "+g.sPageButtonDisabled);
                                break;
                            case "last":
                                j=i.sLast;
                                k=s+(e<f-1?"":" "+g.sPageButtonDisabled);
                                break;
                            default:
                                j=s+1;
                                k=e===s?g.sPageButtonActive:""
                                }
                                if(j!==null){
                            t=h("<a>",{
                                "class":g.sPageButton+" "+k,
                                "aria-controls":a.sTableId,
                                "data-dt-idx":l,
                                tabindex:a.iTabIndex,
                                id:c===0&&typeof s==="string"?a.sTableId+"_"+s:null
                                }).html(j).appendTo(b);
                            Va(t,{
                                action:s
                            },u);
                            l++
                        }
                    }
                }
            },p;
try{
    p=h(b).find(T.activeElement).data("dt-idx")
    }catch(t){}
    m(h(b).empty(),
    d);
p&&h(b).find("[data-dt-idx="+p+"]").focus()
    }
}
});
h.extend(m.ext.type.detect,[function(a,b){
    var c=b.oLanguage.sDecimal;
    return Ya(a,c)?"num"+c:null
    },function(a){
    if(a&&!(a instanceof Date)&&(!ac.test(a)||!bc.test(a)))return null;
    var b=Date.parse(a);
    return null!==b&&!isNaN(b)||K(a)?"date":null
    },function(a,b){
    var c=b.oLanguage.sDecimal;
    return Ya(a,c,!0)?"num-fmt"+c:null
    },function(a,b){
    var c=b.oLanguage.sDecimal;
    return Rb(a,c)?"html-num"+c:null
    },function(a,b){
    var c=b.oLanguage.sDecimal;
    return Rb(a,c,
        !0)?"html-num-fmt"+c:null
    },function(a){
    return K(a)||"string"===typeof a&&-1!==a.indexOf("<")?"html":null
    }]);
h.extend(m.ext.type.search,{
    html:function(a){
        return K(a)?a:"string"===typeof a?a.replace(Ob," ").replace(Ca,""):""
        },
    string:function(a){
        return K(a)?a:"string"===typeof a?a.replace(Ob," "):a
        }
    });
var Ba=function(a,b,c,d){
    if(0!==a&&(!a||"-"===a))return-Infinity;
    b&&(a=Qb(a,b));
    a.replace&&(c&&(a=a.replace(c,"")),d&&(a=a.replace(d,"")));
    return 1*a
    };
    
h.extend(v.type.order,{
    "date-pre":function(a){
        return Date.parse(a)||
        0
        },
    "html-pre":function(a){
        return K(a)?"":a.replace?a.replace(/<.*?>/g,"").toLowerCase():a+""
        },
    "string-pre":function(a){
        return K(a)?"":"string"===typeof a?a.toLowerCase():!a.toString?"":a.toString()
        },
    "string-asc":function(a,b){
        return a<b?-1:a>b?1:0
        },
    "string-desc":function(a,b){
        return a<b?1:a>b?-1:0
        }
    });
cb("");
h.extend(!0,m.ext.renderer,{
    header:{
        _:function(a,b,c,d){
            h(a.nTable).on("order.dt.DT",function(e,f,g,h){
                if(a===f){
                    e=c.idx;
                    b.removeClass(c.sSortingClass+" "+d.sSortAsc+" "+d.sSortDesc).addClass(h[e]==
                        "asc"?d.sSortAsc:h[e]=="desc"?d.sSortDesc:c.sSortingClass)
                    }
                })
        },
    jqueryui:function(a,b,c,d){
        h("<div/>").addClass(d.sSortJUIWrapper).append(b.contents()).append(h("<span/>").addClass(d.sSortIcon+" "+c.sSortingClassJUI)).appendTo(b);
        h(a.nTable).on("order.dt.DT",function(e,f,g,h){
            if(a===f){
                e=c.idx;
                b.removeClass(d.sSortAsc+" "+d.sSortDesc).addClass(h[e]=="asc"?d.sSortAsc:h[e]=="desc"?d.sSortDesc:c.sSortingClass);
                b.find("span."+d.sSortIcon).removeClass(d.sSortJUIAsc+" "+d.sSortJUIDesc+" "+d.sSortJUI+" "+
                    d.sSortJUIAscAllowed+" "+d.sSortJUIDescAllowed).addClass(h[e]=="asc"?d.sSortJUIAsc:h[e]=="desc"?d.sSortJUIDesc:c.sSortingClassJUI)
                }
            })
    }
}
});
m.render={
    number:function(a,b,c,d,e){
        return{
            display:function(f){
                if("number"!==typeof f&&"string"!==typeof f)return f;
                var g=0>f?"-":"",f=Math.abs(parseFloat(f)),h=parseInt(f,10),f=c?b+(f-h).toFixed(c).substring(2):"";
                return g+(d||"")+h.toString().replace(/\B(?=(\d{3})+(?!\d))/g,a)+f+(e||"")
                }
            }
    }
};

h.extend(m.ext.internal,{
    _fnExternApiFunc:Nb,
    _fnBuildAjax:ra,
    _fnAjaxUpdate:lb,
    _fnAjaxParameters:ub,
    _fnAjaxUpdateDraw:vb,
    _fnAjaxDataSrc:sa,
    _fnAddColumn:Ga,
    _fnColumnOptions:la,
    _fnAdjustColumnSizing:Y,
    _fnVisibleToColumnIndex:$,
    _fnColumnIndexToVisible:ba,
    _fnVisbleColumns:ca,
    _fnGetColumns:aa,
    _fnColumnTypes:Ia,
    _fnApplyColumnDefs:hb,
    _fnHungarianMap:X,
    _fnCamelToHungarian:I,
    _fnLanguageCompat:S,
    _fnBrowserDetect:fb,
    _fnAddData:L,
    _fnAddTr:ma,
    _fnNodeToDataIndex:function(a,b){
        return b._DT_RowIndex!==k?b._DT_RowIndex:null
        },
    _fnNodeToColumnIndex:function(a,b,c){
        return h.inArray(c,a.aoData[b].anCells)
        },
    _fnGetCellData:B,
    _fnSetCellData:ib,
    _fnSplitObjNotation:La,
    _fnGetObjectDataFn:P,
    _fnSetObjectDataFn:Q,
    _fnGetDataMaster:Ma,
    _fnClearTable:na,
    _fnDeleteIndex:oa,
    _fnInvalidate:ea,
    _fnGetRowElements:Ka,
    _fnCreateTr:Ja,
    _fnBuildHead:kb,
    _fnDrawHead:ga,
    _fnDraw:M,
    _fnReDraw:R,
    _fnAddOptionsHtml:nb,
    _fnDetectHeader:fa,
    _fnGetUniqueThs:qa,
    _fnFeatureHtmlFilter:pb,
    _fnFilterComplete:ha,
    _fnFilterCustom:yb,
    _fnFilterColumn:xb,
    _fnFilter:wb,
    _fnFilterCreateSearch:Qa,
    _fnEscapeRegex:va,
    _fnFilterData:zb,
    _fnFeatureHtmlInfo:sb,
    _fnUpdateInfo:Cb,
    _fnInfoMacros:Db,
    _fnInitialise:ia,
    _fnInitComplete:ta,
    _fnLengthChange:Ra,
    _fnFeatureHtmlLength:ob,
    _fnFeatureHtmlPaginate:tb,
    _fnPageChange:Ta,
    _fnFeatureHtmlProcessing:qb,
    _fnProcessingDisplay:C,
    _fnFeatureHtmlTable:rb,
    _fnScrollDraw:Z,
    _fnApplyToChildren:H,
    _fnCalculateColumnWidths:Ha,
    _fnThrottle:ua,
    _fnConvertToWidth:Fb,
    _fnGetWidestNode:Gb,
    _fnGetMaxLenString:Hb,
    _fnStringToCss:u,
    _fnSortFlatten:V,
    _fnSort:mb,
    _fnSortAria:Jb,
    _fnSortListener:Ua,
    _fnSortAttachListener:Oa,
    _fnSortingClasses:xa,
    _fnSortData:Ib,
    _fnSaveState:ya,
    _fnLoadState:Kb,
    _fnSettingsFromNode:za,
    _fnLog:J,
    _fnMap:F,
    _fnBindAction:Va,
    _fnCallbackReg:z,
    _fnCallbackFire:w,
    _fnLengthOverflow:Sa,
    _fnRenderer:Pa,
    _fnDataSource:y,
    _fnRowAttributes:Na,
    _fnCalculateEnd:function(){}
});
h.fn.dataTable=m;
h.fn.dataTableSettings=m.settings;
h.fn.dataTableExt=m.ext;
h.fn.DataTable=function(a){
    return h(this).dataTable(a).api()
    };
    
h.each(m,function(a,b){
    h.fn.DataTable[a]=b
    });
return h.fn.dataTable
};

"function"===typeof define&&define.amd?define("datatables",["jquery"],S):"object"===
typeof exports?module.exports=S(require("jquery")):jQuery&&!jQuery.fn.dataTable&&S(jQuery)
})(window,document);
