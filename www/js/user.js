// This is a JavaScript file
// グローバル変数定義
var mailaddress // メールアドレス
var nickName // ニックネーム
var birthDay // 生年月日
var year // 年
var month // 月
var day // 日
var gender // 性別
var height // 身長
var password // パスワード

class User {

  constructor() {
    // ログイン済みの場合
    if (monaca.cloud.User.isAuthenticated() == true) {
      console.log("new User()ログイン済み");
      initUser();
    } else {
      console.log("new User()未ログイン");
    }
  }
  test() {
    var MC = monaca.cloud;
    var email = this.mailAddress;
    var password = this.password;
    var age = this.age;
    var nickName = this.nickName;
    console.log(MC);

    MC.User.register(email, password, { age: age, nickName: nickName }).done(function () {
      console.log('Registration is success!' + MC.User._oid);
      document.getElementById('nav').pushPage('menu.html', {});
    })
      .fail(function (err) {
        console.log('FAILED');
        alert('Registration failed!');
        console.error(JSON.stringify(err));
      });
  }

  /** バックエンドのユーザからユーザー情報を取得し、グローバル変数に設定する*/
  initUser() {
    // メールアドレスを取得し、ユーザー情報に設定する
    monaca.cloud.User.getProperty("mailAddress")
      .then(function (argMailaddress) {
        // グローバル変数に取得したプロパティ値を設定
        mailAddress = argMailaddress
      });

    // ニックネームを取得し、ユーザー情報に設定する
    monaca.cloud.User.getProperty("nickName")
      .then(function (argNickName) {
        // グローバル変数に取得したプロパティ値を設定
        nickName = argNickName
      });

    // 誕生日を取得し、ユーザー情報に設定する
    monaca.cloud.User.getProperty("birthDay")
      .then(function (argbirthDay) {
        // グローバル変数に取得したプロパティ値を設定
        birthDay = argbirthDay
      });

    // 年を取得し、ユーザー情報に設定する
    monaca.cloud.User.getProperty("year")
      .then(function (argyear) {
        // グローバル変数に取得したプロパティ値を設定
        year = argyear
      });

    // 月を取得し、ユーザー情報に設定する
    monaca.cloud.User.getProperty("month")
      .then(function (argMonth) {
        // グローバル変数に取得したプロパティ値を設定
        month = argMonth
      });

    // 日を取得し、ユーザー情報に設定する
    monaca.cloud.User.getProperty("day")
      .then(function (argDay) {
        // グローバル変数に取得したプロパティ値を設定
        day = argDay
      });

    // 性別を取得し、ユーザー情報に設定する
    monaca.cloud.User.getProperty("gender")
      .then(function (argGender) {
        // グローバル変数に取得したプロパティ値を設定
        gender = argGender
      });

    // 身長を取得し、ユーザー情報に設定する
    monaca.cloud.User.getProperty("height")
      .then(function (argHeight) {
        // グローバル変数に取得したプロパティ値を設定
        height = argHeight
      });
  }
  /** mailaddressのsetter */
  setMailaddress(argMailaddress) {
    // ログインユーザからmailaddressプロパティ値を更新
    monaca.cloud.User.saveProperty("mailaddress", argMailaddress);
    // グローバル変数:mailaddressを更新
    mailaddress = argMailaddress;
  }
  /** nickNameのsetter */
  setNickName(argNickName) {
    // ログインユーザからnickNameプロパティ値を更新
    monaca.cloud.User.saveProperty("nickName", argNickName);
    // グローバル変数:nickNameを更新
    nickName = argNickName;
  }
  /** birthDayのsetter */
  setbirthDay(argbirthDay) {
    // ログインユーザからbirthDayプロパティ値を更新
    monaca.cloud.User.saveProperty("birthDay", argbirthDay);
    // グローバル変数:birthDayを更新
    birthDay = argbirthDay;
  }
  /** yearのsetter */
  setyear(argyear) {
    // ログインユーザからyearプロパティ値を更新
    monaca.cloud.User.saveProperty("year", argyear);
    // グローバル変数:yearを更新
    year = argyear;
  }
  /** monthのsetter */
  setMonth(argMonth) {
    // ログインユーザからmonthプロパティ値を更新
    monaca.cloud.User.saveProperty("month", argMonth);
    // グローバル変数:monthを更新
    month = argMonth;
  }
  /** dayのsetter */
  setDay(argDay) {
    // ログインユーザからdayプロパティ値を更新
    monaca.cloud.User.saveProperty("day", argDay);
    // グローバル変数:dayを更新
    day = argDay;
  }
  /** genderのsetter */
  setGender(argGender) {
    // ログインユーザからgenderプロパティ値を更新
    monaca.cloud.User.saveProperty("gender", argGender);
    // グローバル変数:genderを更新
    gender = argGender;
  }
  /** heightのsetter */
  setHeight(argHeight) {
    // ログインユーザからheightプロパティ値を更新
    monaca.cloud.User.saveProperty("height", argHeight);
    // グローバル変数:heightを更新
    height = argHeight;
  }
  /** passwordのsetter */
  setPassword(argPassword) {
    // ログインユーザからpasswordプロパティ値を更新
    monaca.cloud.User.saveProperty("password", argPassword);
    // グローバル変数:passwordを更新
    password = argPassword;
  }
  /** メールアドレスのgetter */
  getMailaddress() {
    // グローバル変数:mailaddressの値を返却
    return mailaddress;
  }
  /** ニックネームのgetter */
  getNickName() {
    // グローバル変数:nickNameの値を返却
    return nickName;
  }
  /** 生年月日のgetter */
  getbirthDay() {
    // グローバル変数:birthDayの値を返却
    return birthDay;
  }
  /** 年のgetter */
  getyear() {
    // グローバル変数:yearの値を返却
    return year;
  }
  /** 月のgetter */
  getMonth() {
    // グローバル変数:monthの値を返却
    return month;
  }
  /** 日のgetter */
  getDay() {
    // グローバル変数:dayの値を返却
    return day;
  }
  /** 性別のgetter */
  getGender() {
    // グローバル変数:genderの値を返却
    return gender;
  }
  /** 身長のgetter */
  getHeight() {
    // グローバル変数:heightの値を返却
    return height;
  }
  /** パスワードのgetter */
  getPassword() {
    // グローバル変数:passwordの値を返却
    return password;
  }

  // ローカルストレージ
  saveUserInfo() {
    localStorage.setItem('userInfo', JSON.stringify({
      nickName: this.nickName,
      age: this.age
    }));

  }
  showStorage() {
    var li, text, nameList;
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