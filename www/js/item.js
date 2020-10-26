// This is a JavaScript file

class Item{
  // コンストラクタ
  constructor(category,sub_category,color){
      this.category = category; //カテゴリー
      this.sub_category = sub_category; //サブカテゴリー
      this.color = color; //色
      this.design; //柄
      this.imageID; //画像ID
      this.material; //素材
      this.season; //季節
      this.size; //サイズ
      this.brand; //ブランド
      this.remarks; //備考
  }
  //カテゴリー
  getCategory(){
    return this.category;
  }
//サブカテゴリー
  getSub_category(){
    return this.sub_category;
  }
//色
  getColor(){
    return this.color;
  }
//柄
  getDesign(){
    return this.design;
  }
//画像ID
  getImageID(){
    return this.imageID;
  }
//素材
  getMaterial(){
    return this.material;
  }
//季節
  getSeason(){
    return this.season;
  }
//サイズ
  getSize(){
    return this.size;
  }
//ブランド
  getBrand(){
    return this.brand;
  }
//備考
  getRemarks(){
    return this.remarks;
  }
//カテゴリー
Category(){
    this.category = category;
  }
//サブカテゴリー
Sub_category(){
    this.sub_category = sub_category;
  }
//色
Color(){
    this.color = color;
  }
//柄
Design(){
    this.design = design;
  }
//画像ID
ImageID(){
    this.imageID = imageID;
  }
//素材
Material(){
    this.material = material;
  }
//季節
Season(){
    this.season = season;
  }
//サイズ
Size(){
    this.size = size;
  }
//ブランド
Brand(){
    this.brand = brand;
  }
//備考
Remarks(){
    this.remarks = remarks;
  }


  saveItemInfo(){

    localStorage.setItem('itemInfo', JSON.stringify({
                category:this.category,
                sub_category:this.sub_category,
                color:this.color,
                design:this.design,
                imageID:this.imageID,
                material:this.material,
                season:this.season,
                size:this.size,
                brand:this.brand,
                remarks:this.remarks
              }));
  }

  showStorage() {
    var li,text, nameList;
    // clearNodes(); 
    nameList = JSON.parse(localStorage.getItem('itemInfo'));   
    for (var nameKey in nameList) {
      text = nameKey + " : " + nameList[nameKey];
      // console.log(text);
      alert(text);
    }
  }
  // clearStorage() {
  //   localStorage.clear();
  //   showStorage();
  // }
}