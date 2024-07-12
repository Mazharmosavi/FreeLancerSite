export default function truncateTitle(str,num){
    if(str==null||num==null) return "-"
    if(str.length<num) return str;
    return str.slice(0,num) + "..."
}