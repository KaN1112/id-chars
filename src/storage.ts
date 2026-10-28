const read=<T,>(key:string,fallback:T):T=>{try{const value=localStorage.getItem(key);return value?JSON.parse(value) as T:fallback}catch{return fallback}}
export const loadFavorites=()=>read<string[]>('idchars:favorites',[])
export const loadHistory=()=>read<string[]>('idchars:history',[])
export const save=(key:'favorites'|'history',value:string[])=>{try{localStorage.setItem(`idchars:${key}`,JSON.stringify(value))}catch{return}}
export const copyText=async(value:string)=>{if(navigator.clipboard?.writeText)return navigator.clipboard.writeText(value);const area=document.createElement('textarea');area.value=value;area.style.position='fixed';area.style.opacity='0';document.body.append(area);area.select();const ok=document.execCommand('copy');area.remove();if(!ok)throw new Error('copy failed')}
