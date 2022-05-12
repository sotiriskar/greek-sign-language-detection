const labelMap = {
    1: { name:'ΑΓΚΑΛΙΑ',color:'#B48D85' },
    2: { name:'ΑΓΩΝΑΣ', color:'#D3DD59' },
    3: { name:'ΑΙΜΑ', color:'#F1F00' },
    4: { name:'ΑΝΑΡΧΙΚΟΣ', color:'#59DDD5' },
    5: { name:'ΑΝΤΡΑΣ', color:'#5965DD' },
    6: { name:'ΒΑΖΩ', color:'#8159DD' },
    7: { name:'ΒΑΡΟΣ', color:'#D559DD' },
    8: { name:'ΒΟΗΘΑΩ', color:'#DD59A1' },
    9: { name:'ΒΡΑΔΥ', color:'#DD596F' },
    10: { name:'ΓΕΙΑ', color:'#C159DD' },
    11: { name:'ΓΡΗΓΟΡΑ', color:'#7559DD' },
    12: { name:'ΔΕΥΤΕΡΟ', color:'#2852BA' },
    13: { name:'ΕΠΙΣΗΣ', color:'#7E97D3' },
    14: { name:'ΕΤΟΙΜΟΣ', color:'#636D85' },
    15: { name:'ΕΥΧΑΡΙΣΤΩ', color:'#BEC1C7' },
    16: { name:'ΚΑΛΑ', color:'#549BB0' },
    17: { name:'ΛΑΤΡΕΥΩ', color:'#0BC2F8' },
    18: { name:'ΜΑΖΙ', color:'#0BF89B' },
    19: { name:'ΜΑΚΑΡΙ', color:'#16A76E' },
    20: { name:'ΜΕΛΕΤΩ', color:'#74C2A3' },
    21: { name:'ΜΕΝΩ', color:'#0E4C33' },
    22: { name:'ΜΠΟΡΩ', color:'#20CA20' },
    23: { name:'ΝΑΙ', color:'#B25043' },
    24: { name:'ΟΧΙ', color:'#FF9300' },
    25: { name:'ΠΑΙΔΙ', color:'#935909' },
    26: { name:'ΠΑΡΑΚΑΛΩ', color:'#BD8C47' },
    27: { name:'ΠΡΩΤΑ', color:'#E52121' },
    28: { name:'ΣΚΕΦΤΟΜΑΙ', color:'#8C0808' },
    29: { name:'ΧΑΙΡΟΜΑΙ', color:'#F28989' },
    30: { name:'ΩΡΑ', color:'#832424' }
}

export const draw = (boxes, classes, scores, threshold, imgWidth, imgHeight, ctx)=>{
    for(let i=0; i<=boxes.length; i++){
        if(boxes[i] && classes[i] && scores[i]>threshold){
            const [y,x,height,width] = boxes[i]
            const text = classes[i]
            
            ctx.strokeStyle = labelMap[text]['color']
            ctx.lineWidth = 2
            ctx.fillStyle = labelMap[text]['color']
            ctx.font = '15px Arial'         
            
            ctx.beginPath()
            ctx.fillText(labelMap[text]['name'] + ' - ' + Math.round(scores[i]*100)/100, x*imgWidth, y*imgHeight-10)
            ctx.rect(x*imgWidth, y*imgHeight, width*imgWidth/2, height*imgHeight/2);
            ctx.stroke()
        }
    }
}
