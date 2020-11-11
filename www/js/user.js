// This is a JavaScript file
// グローバル変数定義
var mailaddress // メールアドレス
var nickName // ニックネーム
var barthDay // 生年月日
var yaer // 年
var month // 月
var day // 日
var gender // 性別
var height // 身長
var password // パスワード

class User{
  // コンストラクタ
  // constructor(mailAddress,nickName,age,password){
  //   this.mailAddress = mailAddress;
  //   this.nickName = nickName;
  //   this.age = age;
  //   this.password = password;
  //   this.gender;
  // }
  constructor(){
    // ログイン済みの場合
    if (monaca.cloud.User.isAuthenticated() == true) {
      console.log("new User()ログイン済み");
    } else {
      console.log("new User()未ログイン");   
    }
  }
  test(){
    var MC = monaca.cloud;
    var email = this.mailAddress;
    var password = this.password;
    var age = this.age;
    var nickName = this.nickName;
    console.log(MC);
    
    MC.User.register(email, password,{age:age,nickName:nickName}).done(function(){
        console.log('Registration is success!' + MC.User._oid);        
        document.getElementById('nav').pushPage('menu.html', {});
      })
      .fail(function(err)
      {
        console.log('FAILED');
        alert('Registration failed!');
        console.error(JSON.stringify(err));
      });
    }
  /** バックエンドのユーザからmailaddressを取得し、グローバル変数に設定する*/
  initNickName(){
      // ログインユーザからnickNameプロパティ取得
      monaca.cloud.User.getProperty("nickName")
      .then(function(argNickName){
        // グローバル変数に取得したプロパティ値を設定
        nickName = argNickName
      });
  }
  /** mailaddressのsetter */
  setMailaddress(argMailaddress){
    // ログインユーザからmailaddressプロパティ値を更新
    monaca.cloud.User.saveProperty("mailaddress", argMailaddress);
    // グローバル変数:mailaddressを更新
    mailaddress = argMailaddress;
  }
  /** nickNameのsetter */
  setNickName(argNickName){
    // ログインユーザからnickNameプロパティ値を更新
    monaca.cloud.User.saveProperty("nickName", argNickName);
    // グローバル変数:nickNameを更新
    nickName = argNickName;
  }
  /** barthDayのsetter */
  setBarthDay(argBarthDay){
    // ログインユーザからbarthDayプロパティ値を更新
    monaca.cloud.User.saveProperty("barthDay", argBarthDay);
    // グローバル変数:barthDayを更新
    barthDay = argBarthDay;
  }
  /** yaerのsetter */
  setYaer(argYaer){
    // ログインユーザからyaerプロパティ値を更新
    monaca.cloud.User.saveProperty("yaer", argYaer);
    // グローバル変数:yaerを更新
    yaer = argYaer;
  }
  /** monthのsetter */
  setMonth(argMonth){
    // ログインユーザからmonthプロパティ値を更新
    monaca.cloud.User.saveProperty("month", argMonth);
    // グローバル変数:monthを更新
    month = argMonth;
  }
  /** dayのsetter */
  setDay(argDay){
    // ログインユーザからdayプロパティ値を更新
    monaca.cloud.User.saveProperty("day", argDay);
    // グローバル変数:dayを更新
    day = argDay;
  }
  /** genderのsetter */
  setGender(argGender){
    // ログインユーザからgenderプロパティ値を更新
    monaca.cloud.User.saveProperty("gender", argGender);
    // グローバル変数:genderを更新
    gender = argGender;
  }
  /** heightのsetter */
  setHeight(argHeight){
    // ログインユーザからheightプロパティ値を更新
    monaca.cloud.User.saveProperty("height", argHeight);
    // グローバル変数:heightを更新
    height = argHeight;
  }
  /** passwordのsetter */
  setPassword(argPassword){
    // ログインユーザからpasswordプロパティ値を更新
    monaca.cloud.User.saveProperty("password", argPassword);
    // グローバル変数:passwordを更新
    password = argPassword;
  }
  /** メールアドレスのgetter */
  getMailaddress(){
    // グローバル変数:mailaddressの値を返却
    return mailaddress;
  }
  /** ニックネームのgetter */
  getNickName(){
    // グローバル変数:nickNameの値を返却
    return nickName;
  }
  /** 生年月日のgetter */
  getBarthDay(){
    // グローバル変数:barthDayの値を返却
    return barthDay;
  }
  /** 年のgetter */
  getYaer(){
    // グローバル変数:yaerの値を返却
    return yaer;
  }
  /** 月のgetter */
  getMonth(){
    // グローバル変数:monthの値を返却
    return month;
  }
  /** 日のgetter */
  getDay(){
    // グローバル変数:dayの値を返却
    return day;
  }
  /** 性別のgetter */
  getGender(){
    // グローバル変数:genderの値を返却
    return gender;
  }
  /** 身長のgetter */
  getHeight(){
    // グローバル変数:heightの値を返却
    return height;
  }
  /** パスワードのgetter */
  getPassword(){
    // グローバル変数:passwordの値を返却
    return password;
  }

// ローカルストレージ
  saveUserInfo(){
    localStorage.setItem('userInfo', JSON.stringify({
                nickName:this.nickName,
                age: this.age
              }));

  }
  showStorage() {
    var li,text, nameList;
    // clearNodes(); 
    nameList = JSON.parse(localStorage.getItem('userInfo'));   
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