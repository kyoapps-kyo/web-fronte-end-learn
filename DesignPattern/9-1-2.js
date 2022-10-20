//安全模式创建的工厂方法函数
var UserFactory = function (role) {
  if (this instanceof UserFactory) {
    console.log("1" + this);
    var s = new this[role]();
    return s;
  } else {
    console.log("2" + this);
    return new UserFactory(role);
  }
};
//工厂方法函数的原型中设置所有对象的构造函数
UserFactory.prototype = {
  Admin: function () {
    this.name = "管理员";
    this.viewPage = ["首页", "查询", "权限管理"];
  },
  User: function () {
    this.name = "用户";
    this.viewPage = ["首页", "查询"];
  },
};
//调用
var admin = UserFactory("Admin");
var user = UserFactory("User");
