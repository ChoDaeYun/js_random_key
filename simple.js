
/**
 * Created by chody0116@gmail.com
 * use js : jquery
 */
(function ($) {
    $.simpleTestjs = {
        save:function(u){
            if(!u){
                u = this.randid()+this.randid()+this.randid()
            }
            var opt = {
                unique:u
            };
            var obj = this.getparseurl();
            $.extend(opt,obj);
            return this.send(opt);
        },randid:function(){
            //랜덤 키 생성
            return (((1 + Math.random()) * 65536) | 0).toString(16).substring(1);
        }
        ,getparseurl:function(){
            var ret={};
            // 현재 페이지 URL 정보 
            ret.path_host = window.location.hostname;
            ret.path = window.location.pathname;
            if(ret.path.charAt(ret.path.length - 1) == '/'){
                ret.path = ret.path.slice(0,-1);
            }
            // 이전 페이지 URL 정보
            if(document.referrer){
                var parse_url = document.createElement("a");
                parse_url.href = document.referrer;
                ret.reference_host = parse_url.hostname   
                ret.reference_path = parse_url.pathname
            }
            return ret;
        }
        ,send:function(opt){
            return opt
        }
    }
})(jQuery);