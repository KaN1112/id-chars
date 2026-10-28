export type CategoryId = 'popular'|'exclamation'|'question'|'alphanumeric'|'small'|'super'|'font'|'symbols'|'decorative'|'love'|'shapes'|'japanese'|'other'
export type CharacterItem = { char:string; name:string; category:CategoryId; keywords:string[] }
export const categories:{id:CategoryId;label:string}[]=[['popular','人気'],['exclamation','「!」に似た文字'],['question','「?」に似た文字'],['alphanumeric','英数字に似た文字'],['small','小文字・スモールキャピタル'],['super','上付き・下付き'],['font','フォント風アルファベット'],['symbols','特殊記号'],['decorative','装飾・区切り'],['love','星・ハート'],['shapes','矢印・図形'],['japanese','日本語・漢字系'],['other','その他']].map(([id,label])=>({id:id as CategoryId,label}))
const sets:Record<CategoryId,{value:string;name:string;keywords:string[]}[]>={
popular:[{value:'〆々乂么メ彡ツシ亗王神卍ゞ・×★☆♡♥♛♚☯',name:'人気のゲームID記号',keywords:['ゲーム','ID','Fortnite']}],
exclamation:[{value:'！﹗ǃ❕❗‼⁉❢❣¡՜',name:'感嘆符に似た文字',keywords:['!','びっくり','感嘆符','Fortnite']}],
question:[{value:'？﹖❓❔⁇⁈¿՞',name:'疑問符に似た文字',keywords:['?','はてな','疑問符']}],
alphanumeric:[{value:'ⓐⓑⓒⓓⓔⓕⓖⓗⓘⓙⓚⓛⓜⓝⓞⓟⓠⓡⓢⓣⓤⓥⓦⓧⓨⓩⒶⒷⒸⒹⒺⒻⒼⒽⒾⒿⓀⓁⓂⓃⓄⓅⓆⓇⓈⓉⓊⓋⓌⓍⓎⓏ⓪①②③④⑤⑥⑦⑧⑨０１２３４５６７８９',name:'囲み・全角英数字',keywords:['英字','数字','丸文字']}],
small:[{value:'ᴀʙᴄᴅᴇꜰɢʜɪᴊᴋʟᴍɴᴏᴘǫʀꜱᴛᴜᴠᴡxʏᴢᴬᴮᴰᴱᴳᴴᴵᴶᴷᴸᴹᴺᴼᴾᴿᵀᵁⱽᵂ',name:'スモールキャピタル',keywords:['小文字','small']}],
super:[{value:'⁰¹²³⁴⁵⁶⁷⁸⁹⁺⁻⁼⁽⁾ⁿⁱᵃᵇᶜᵈᵉᶠᵍʰʲᵏˡᵐᵒᵖʳˢᵗᵘᵛʷˣʸᶻ₀₁₂₃₄₅₆₇₈₉₊₋₌₍₎ₐₑₕᵢⱼₖₗₘₙₒₚᵣₛₜᵤᵥₓ',name:'上付き・下付き文字',keywords:['上付き','下付き','数字']}],
font:[{value:'𝔄𝔅ℭ𝔇𝔈𝔉𝔊ℌℑ𝔍𝔎𝔏𝔐𝔑𝔒𝔓𝔔ℜ𝔖𝔗𝔘𝔙𝔚𝔛𝔜ℨ𝕬𝕭𝕮𝕯𝕰𝕱𝕲𝕳𝕴𝕵𝕶𝕷𝕸𝕹𝕺𝕻𝕼𝕽𝕾𝕿𝖀𝖁𝖂𝖃𝖄𝖅𝒜ℬ𝒞𝒟ℰℱ𝒢ℋℐ𝒥𝒦ℒℳ𝒩𝒪𝒫𝒬ℛ𝒮𝒯𝒰𝒱𝒲𝒳𝒴𝒵𝓐𝓑𝓒𝓓𝓔𝓕𝓖𝓗𝓘𝓙𝓚𝓛𝓜𝓝𝓞𝓟𝓠𝓡𝓢𝓣𝓤𝓥𝓦𝓧𝓨𝓩',name:'装飾フォント風英字',keywords:['フォント','筆記体','フラクトゥール']}],
symbols:[{value:'©®™℠№℡℗℞℀℁℅℆℉℃ℓ℔℧℥∞∴∵∷≈≠≡≤≥±÷×√∑∏∫∂∆∇',name:'数学・特殊記号',keywords:['記号','数学']}],
decorative:[{value:'・･:：;；|｜¦‖―—–‐〜～〃〆〄〓〝〟〈〉《》「」『』【】〔〕〖〗〘〙〚〛',name:'装飾と区切り文字',keywords:['区切り','飾り','括弧']}],
love:[{value:'★☆✦✧✩✪✫✬✭✮✯✰⋆⭑⭒✵✶✷✸✹❂❃♡♥❤❥❣ღ❦❧💕💗',name:'星とハート',keywords:['星','ハート','かわいい']}],
shapes:[{value:'←↑→↓↔↕↖↗↘↙⇐⇑⇒⇓⇔➔➜➝➞➟➠➡➢➣➤➥➦➧➨➩➪■□▪▫▲△▼▽◆◇○●◉◎◌◍◐◑◒◓◢◣◤◥',name:'矢印と図形',keywords:['矢印','図形']}],
japanese:[{value:'々〆〇ヶヵゝゞヽヾ仝〻〼㊀㊁㊂㊃㊄㊅㊆㊇㊈㊉㊊㊋㊌㊍㊎㊏㊐㊑㊒㊓㊔㊕㊖㊗㊘㊙㊚㊛㊜㊝㊞㊟',name:'日本語・漢字系装飾',keywords:['日本語','漢字','和風']}],
other:[{value:'☀☁☂☃☄☎☏☑☒☕☘☠☢☣☮☯☸☹☺☻☽☾♠♣♦♤♧♢♔♕♖♗♘♙♚♛♜♝♞♟⚐⚑⚔⚙⚡⚪⚫⚽⚾⛅⛏⛩✁✂✃✄✆✈✉✎✏✐✒✓✔✕✖✗✘',name:'その他のUnicode記号',keywords:['その他','Unicode']}]
}
const seen=new Set<string>()
export const characters:CharacterItem[]=categories.flatMap(category=>sets[category.id].flatMap(group=>Array.from(group.value).map(char=>({char,name:group.name,category:category.id,keywords:group.keywords}))).filter(item=>{if(seen.has(item.char))return false;seen.add(item.char);return true}))
export const codePoints=(value:string)=>Array.from(value).map(char=>`U+${char.codePointAt(0)!.toString(16).toUpperCase().padStart(4,'0')}`)
const styles:Record<string,string>[]=[
Object.fromEntries('abcdefghijklmnopqrstuvwxyz'.split('').map((c,i)=>[c,Array.from('ᴀʙᴄᴅᴇꜰɢʜɪᴊᴋʟᴍɴᴏᴘǫʀꜱᴛᴜᴠᴡxʏᴢ')[i]])),
Object.fromEntries('ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('').map((c,i)=>[c,String.fromCodePoint((i<26?0x1d56c:0x1d586)+(i%26))])),
Object.fromEntries('ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('').map((c,i)=>[c,String.fromCodePoint((i<26?0x1d4d0:0x1d4ea)+(i%26))]))]
export const convertStyles=(value:string)=>styles.map((style,i)=>({label:['スモールキャピタル','フラクトゥール','スクリプト'][i],value:Array.from(value).map(c=>style[c]??style[c.toLowerCase()]??c).join('')}))
