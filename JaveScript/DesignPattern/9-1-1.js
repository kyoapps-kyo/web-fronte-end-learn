var UserFactory = function (role) {
  function Admin() {
    this.name = "管理员";
    this.viewPage = ["首页", "查询", "权限管理"];
  }
  function User() {
    this.name = "普通用户";
    this.viewPage = ["首页", "查询"];
  }
  switch (role) {
    case "admin":
      return new Admin();
      break;
    case "user":
      return new User();
      break;
    default:
      throw new Error("参数错误, 可选参数: admin、user");
  }
};
var admin = UserFactory("admin");
var user = UserFactory("user");
var user2 = UserFactory("user");

console.log(user, user2);

user.viewPage.push("about");

console.log(user, user2);
