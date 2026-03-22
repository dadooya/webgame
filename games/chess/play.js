class board{

  classicsetfen="rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1"
  
  constructor(){
    this.fen="8/8/8/8/8/8/8/8 w KQkq - 0 1" 
    this.list=[];
    this.turn="w";
    this.castle="KQkq";
    this.enpassent="-";
    this.halfmove="0";
    this.fullmove="1";
    for(let i=0;i<8;i++){
      this.list.push([]);
      for(let j=0;j<8;j++){
        this.list[i].push("e");
      }
    }
  }
  
 fennumtoe(input){
   let result=input.replace("1","e");
   result=result.replace("2","ee");
   result=result.replace("3","eee");
   result=result.replace("4","eeee");
   result=result.replace("5","eeeee");
   result=result.replace("6","eeeeee");
   result=result.replace("7","eeeeeee");
   result=result.replace("8","eeeeeeee");
   return result
 }
  
 setfen(fen){
  let idx = fen.indexOf(" ");
  let onlypos = idx !== -1 ? fen.slice(0, idx) : fen;

  rankslist=fennumtoe(onlypos).split("/");
   for(let i=0;i<8;i++){
     for(let j=0;j<8;j++){
       this.list[8-i][j]=rankslist[i][j];
     }
   }
   this.fen=fen
 }

  
  static pos= class{
    static convert(p){
      let x=convertEn(p[0]);
      let y=p[1];
      return x,y
    }
    convertEn(ch) {
      return ch.charCodeAt(0) - "a".charCodeAt(0) + 1;
    }

  }

checkteam(ch) {
  if (ch >= 'A' && ch <= 'Z') return "w";
  if (ch >= 'a' && ch <= 'z') return "b";
  return -1; // 알파벳이 아닐 때
}
  
converttofen(){
  result=this.list.map(row=>row.join("")).join("/");
  this.fen=result+' '+this.turn+' '+this.castle+' '+this.enpassent+' '+this.halfmove+' '+this.fullmove;
}
  
  basicmove(start,end){
    sx=pos.convert(start)[0];
    sy=pos.convert(start)[1];
    ex=pos.convert(end)[0];
    ey=pos.convert(end)[1];

    team=checkteam(this.list[sy][sx]);
    
    this.list[ey][ex]=this.list[sy][sx];
    this.list[sy][sx]="e";
  }
  
}
