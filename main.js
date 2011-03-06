if(typeof(pid)== "number"){ajaxget('forum.php?mod=viewthread&show=true&tid=' + tid + '&viewpid=' + pid, 'post_' + pid);}
if (!(document.URL.match(/&show=true/))){
    location.replace(document.URL+'&show=true');
}
